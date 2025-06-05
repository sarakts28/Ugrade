import { ScrollableRow } from "../../../CommonComponents";
import { Images } from "../../../constants/images";
import MarketingCard from "./MarketingCard";

const MarketingSection = () => {
  const marketingCardArray = [
    {
      backgroundImage: Images.Program1,
      title: "Digital Marketing Kickstarter",
      duration: "4 hours",
      language: "English",
      ctaText: "Explore Programs",
      imageText: "Self-Placed",
    },
    {
      backgroundImage: Images.Program2,
      title: "Generative AI for Marketers",
      duration: "4 hours",
      language: "English",
      ctaText: "Explore Programs",
      imageText: "Self-Placed",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center  bg-brand-grayNatural200 gap-4 p-4 h-auto">
      <h1 className="font-sans font-semibold text-[32px] md:text-5xl text-primary-darkGreen">
        Self-Placed Programs
      </h1>
      <p className="text-center text-base md:text-xl font-sans text-primary-NavyBlue max-w-3xl">
        Upskill on your own time with structured video lessons and hands-on
        exercises — designed to fit around your life, not the other way around.
        Learn at your speed, build real skills, and stay in control of your
        progress — just pure flexibility.
      </p>
      <div className="hidden w-full md:flex md:flex-row items-center justify-center gap-4 md:gap-8">
        {marketingCardArray.map((card, index) => (
          <MarketingCard
            key={index}
            backgroundImage={card.backgroundImage}
            title={card.title}
            duration={card.duration}
            language={card.language}
            ctaText={card.ctaText}
            imageText={card.imageText}
          />
        ))}
      </div>
      <div className="w-full md:hidden">
        <ScrollableRow gap="lg" className="p-4 bg-gray-50">
          {marketingCardArray.map((card, index) => (
            <MarketingCard
              key={index}
              backgroundImage={card.backgroundImage}
              title={card.title}
              duration={card.duration}
              language={card.language}
              ctaText={card.ctaText}
              imageText={card.imageText}
            />
          ))}
        </ScrollableRow>
      </div>
    </div>
  );
};

export default MarketingSection;
