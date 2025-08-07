import { Heart, Plus } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="relative">
        {/* Medical cross background */}
        <div className="w-12 h-12 bg-medical-teal rounded-lg flex items-center justify-center">
          <Plus className="w-6 h-6 text-white" strokeWidth={3} />
        </div>
        {/* Heart overlay */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-medical-teal-light rounded-full flex items-center justify-center">
          <Heart className="w-3 h-3 text-white fill-white" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-foreground">ClearChartAI</h1>
        <p className="text-sm text-medical-gray">Understand Your Health. Own Your Future</p>
      </div>
    </div>
  );
};

export default Logo;