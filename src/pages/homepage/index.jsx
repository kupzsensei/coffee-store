import { mockData } from "../../App";
import CategorySection from "./category-section";
import HeroSection from "./hero-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="bg-orange-200 w-full flex flex-col gap-8 items-center">
        {mockData?.map((categorySection) => (
          <CategorySection
            key={categorySection.category}
            data={categorySection}
          />
        ))}
      </section>
      <div className="fixed text-white font-bold right-5 bottom-5 bg-orange-600 p-5 rounded-full">
        Rewards
      </div>
    </>
  );
}
