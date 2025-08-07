// src/components/WaitlistForm.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // NEW: State for loading and feedback messages
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("We respect your privacy. Unsubscribe anytime.");
  const [messageIsError, setMessageIsError] = useState(false);

  // MODIFIED: Replaced the original handleSubmit with this async function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageIsError(false);
    setMessage(""); // Clear previous message

    try {
      const response = await fetch('http://localhost:5000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Match the backend's expected keys (phoneNumber)
        body: JSON.stringify({ 
          name: formData.name, 
          email: formData.email, 
          phoneNumber: formData.phone 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Use the specific error message from your backend
        throw new Error(data.error || 'An unexpected error occurred.');
      }

      // Handle success
      setMessage(`Success! You're #${data.id.toLocaleString()} on the list.`);
      setFormData({ name: "", email: "", phone: "" }); // Clear the form

    } catch (error: any) {
      // Handle errors and display them to the user
      setMessage(error.message);
      setMessageIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-8 shadow-lg border-0 bg-surface max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="h-12 border-border bg-surface"
          required
        />
        
        <Input
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="h-12 border-border bg-surface"
          required
        />
        
        <Input
          type="tel"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="h-12 border-border bg-surface"
          required
        />
        
        {/* MODIFIED: Button now shows loading state */}
        <Button 
          type="submit" 
          className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium text-base"
          disabled={isLoading}
        >
          {isLoading ? 'Joining...' : 'Join the Waitlist'}
        </Button>
        
        {/* MODIFIED: Message area is now dynamic for feedback */}
        {message && (
          <p className={`text-sm text-center ${messageIsError ? 'text-red-500' : 'text-medical-gray'}`}>
            {message}
          </p>
        )}
      </form>
    </Card>
  );
};

export default WaitlistForm;