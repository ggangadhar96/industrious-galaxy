import { Chip, Database, Factory, Network, Server, Building2 } from "lucide-react";

const industries = [
  { name: "Software Solutions", icon: Chip, description: "Enterprise-grade software development" },
  { name: "Data Centers", icon: Server, description: "Global data infrastructure" },
  { name: "Manufacturing", icon: Factory, description: "Smart manufacturing facilities" },
  { name: "Real Estate", icon: Building2, description: "Commercial property development" },
  { name: "Technology", icon: Database, description: "Cutting-edge tech innovations" },
  { name: "Networks", icon: Network, description: "Global connectivity solutions" },
];

export const Industries = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">Our Industries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="p-6 rounded-lg border border-gray-200 hover:border-primary-DEFAULT transition-colors duration-300"
            >
              <industry.icon className="w-12 h-12 text-primary-DEFAULT mb-4" />
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};