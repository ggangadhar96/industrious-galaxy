import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { News } from "@/components/News";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Industries />
      <News />
    </div>
  );
};

export default Index;