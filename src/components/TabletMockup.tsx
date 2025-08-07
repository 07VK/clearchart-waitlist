import { Card } from "@/components/ui/card";

const TabletMockup = () => {
  return (
    <div className="relative">
      {/* Tablet frame */}
      <div className="w-80 h-96 bg-gray-800 rounded-3xl p-6 shadow-2xl transform rotate-12">
        {/* Screen */}
        <div className="w-full h-full bg-gradient-to-br from-medical-teal to-medical-teal-dark rounded-2xl relative overflow-hidden">
          {/* Welcome text */}
          <div className="absolute top-8 left-6 right-6">
            <p className="text-white/90 text-lg italic">Welcome back,</p>
            <p className="text-white/90 text-lg italic">here is your health at a glance</p>
          </div>
          
          {/* Health data visualization */}
          <div className="absolute top-24 left-6 right-6">
            {/* Timeline with dots */}
            <div className="relative h-16">
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/30"></div>
              <div className="absolute top-6 left-8 w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute top-6 left-24 w-4 h-4 bg-white/60 rounded-full"></div>
              <div className="absolute top-6 left-40 w-4 h-4 bg-white/60 rounded-full"></div>
            </div>
          </div>
          
          {/* Recent Summary card */}
          <Card className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border-0 p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Recent Summary</h3>
            <div className="space-y-2">
              <div className="h-2 bg-gray-200 rounded w-full"></div>
              <div className="h-2 bg-gray-200 rounded w-4/5"></div>
              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              <div className="h-2 bg-gray-200 rounded w-5/6"></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TabletMockup;