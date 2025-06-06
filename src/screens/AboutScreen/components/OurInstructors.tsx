import { useState, useEffect } from "react";
import { Images } from "../../../constants/images";
import { ProfileCard } from "../../../CommonComponents";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const OurInstructors = ({ heading }: { heading: string }) => {
  const teamData = [
    {
      name: "Olivia Rhye",
      image: Images.InstructorImage1,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Founder & CEO",
    },
    {
      name: "Phoenix Baker",
      image: Images.InstructorImage2,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Engineering Manager",
    },
    {
      name: "Lana Steiner",
      image: Images.InstructorImage3,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Product Manager",
    },
    {
      name: "Demi Wilkinson",
      image: Images.InstructorImage4,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Frontend Developer",
    },
    {
      name: "Candice Wu",
      image: Images.InstructorImage5,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Backend Developer",
    },
    {
      name: "Natali Craig",
      image: Images.InstructorImage6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Product Designer",
    },
    {
      name: "Natali Craig",
      image: Images.InstructorImage6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Product Designer",
    },
    {
      name: "Natali Craig",
      image: Images.InstructorImage6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Product Designer",
    },
    {
      name: "Drew Cano",
      image: Images.InstructorImage7,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "UX Researcher",
    },
    {
      name: "Orlando Diggs",
      image: Images.InstructorImage8,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Customer Success",
    },
  ];

  const [cardsPerRow, setCardsPerRow] = useState(4); // Default to 4 cards per row (for 8 total)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const calculateCards = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerRow(4); // 4 cards per row × 2 rows = 8 cards total
      } else if (window.innerWidth >= 550) {
        setCardsPerRow(3); // 3 cards per row × 2 rows = 6 cards total
      } else {
        setCardsPerRow(1); // 1 card per row (single column)
      }
      setCurrentIndex(0); // Reset to first group when screen size changes
    };

    calculateCards();
    window.addEventListener("resize", calculateCards);
    return () => window.removeEventListener("resize", calculateCards);
  }, []);

  const totalGroups = Math.ceil(teamData.length / cardsPerRow / 2);
  const visibleCards = teamData.slice(
    currentIndex * cardsPerRow * 2,
    (currentIndex + 1) * cardsPerRow * 2
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const canShowNext = totalGroups > 1 && currentIndex < totalGroups - 1;
  const canShowPrev = totalGroups > 1 && currentIndex > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-5xl font-sans font-semibold mb-8 text-center">
        {heading}
      </h2>

      <div className="relative">
        {/* Navigation Arrows */}
        {totalGroups > 1 && (
          <>
            <button
              onClick={handlePrev}
              disabled={!canShowPrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition ${
                !canShowPrev ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Previous"
            >
              <MdOutlineArrowBackIos fontSize={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={!canShowNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition ${
                !canShowNext ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Next"
            >
              <MdOutlineArrowForwardIos fontSize={24} />
            </button>
          </>
        )}

        {/* Cards Container */}
        <div className="space-y-4">
          {/* First Row */}
          <div className="flex space-x-4">
            {visibleCards.slice(0, cardsPerRow).map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / cardsPerRow}%` }}
              >
                <ProfileCard
                  name={member.name}
                  imageURL={member.image}
                  position={member.position}
                  description={member.description}
                  profileLink={member.LinkedInProfileLink}
                />
              </div>
            ))}
          </div>

          {/* Second Row (only shown when cardsPerRow > 1) */}
          {cardsPerRow > 1 && (
            <div className="flex space-x-4">
              {visibleCards
                .slice(cardsPerRow, cardsPerRow * 2)
                .map((member, index) => (
                  <div
                    key={index + cardsPerRow}
                    className="flex-shrink-0"
                    style={{ width: `${100 / cardsPerRow}%` }}
                  >
                    <ProfileCard
                      name={member.name}
                      imageURL={member.image}
                      position={member.position}
                      description={member.description}
                      profileLink={member.LinkedInProfileLink}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurInstructors;
