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

  const [listPosition] = useState(1245);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
        />
        
        <Input
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="h-12 border-border bg-surface"
        />
        
        <Input
          type="tel"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="h-12 border-border bg-surface"
        />
        
        <Button 
          type="submit" 
          className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium text-base"
        >
          Join the Waitlist
        </Button>
        
        <p className="text-sm text-medical-gray text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
        
        <p className="text-sm text-foreground font-medium">
          You're #{listPosition.toLocaleString()} on the list
        </p>
      </form>
    </Card>
  );
};

export default WaitlistForm;