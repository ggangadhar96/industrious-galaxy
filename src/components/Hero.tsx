import { Building2, Factory, Network } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-corporate-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-corporate-dark to-primary-dark opacity-90" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shaping the Future of Industry
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A global leader in software, technology, and industrial innovation
          </p>
          <div className="flex justify-center gap-8 mt-12">
            <IconStat icon={Factory} label="Industries" value="12+" />
            <IconStat icon={Building2} label="Global Offices" value="50+" />
            <IconStat icon={Network} label="Partners" value="200+" />
          </div>
        </div>
      </div>
    </div>
  );
};

const IconStat = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="text-center">
    <Icon className="w-8 h-8 mb-2 mx-auto text-primary-DEFAULT" />
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-gray-300">{label}</div>
  </div>
);