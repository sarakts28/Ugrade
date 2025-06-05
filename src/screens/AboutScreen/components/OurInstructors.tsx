import { useState, useEffect } from "react";
import { Images } from "../../../constants/images";
import { ProfileCard } from "../../../CommonComponents";
import ScrollableRow from "../../../CommonComponents/ScrollRow/ScrollRow";

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
  const [visibleCards, setVisibleCards] = useState(teamData.length);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //     if (window.innerWidth >= 1024) {
  //       setVisibleCards(8); // Show 8 on large screens
  //     } else if (window.innerWidth >= 768) {
  //       setVisibleCards(3); // Show 4 on medium screens
  //     } else {
  //       setVisibleCards(1); // Show 1 on mobile
  //     }
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const handleShowMore = () => {
  //   setVisibleCards((prev) => prev + 4); // Show 4 more cards
  // };

  // const handleShowLess = () => {
  //   // Return to initial number based on screen size
  //   if (window.innerWidth >= 1024) {
  //     setVisibleCards(8);
  //   } else if (window.innerWidth >= 768) {
  //     setVisibleCards(3);
  //   } else {
  //     setVisibleCards(1);
  //   }
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prev) => (prev + 1) % teamData.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prev) => (prev - 1 + teamData.length) % teamData.length);
  // };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-5xl font-sans font-semibold mb-8 text-center">
        {heading}
      </h2>

      {/* Desktop/Tablet Grid View */}
      {/* <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamData.slice(0, visibleCards).map((member, index) => (
            <ProfileCard
              key={index}
              className=""
              name={member.name}
              imageURL={member.image}
              position={member.position}
              description={member.description}
              profileLink={member.LinkedInProfileLink}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          {visibleCards < teamData.length && (
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-primary-darkGreen text-white rounded-lg transition"
            >
              Show More
            </button>
          )}
          {visibleCards >
            (isMobile ? 1 : window.innerWidth >= 1024 ? 8 : 4) && (
            <button
              onClick={handleShowLess}
              className="px-6 py-2 bg-primary-NavyBlue rounded-lg text-white hover:bg-gray-300 transition"
            >
              Show Less
            </button>
          )}
        </div>
      </div> */}

      {/* Mobile Carousel View */}
      {/* <div className="md:hidden relative">
        <div className="bg-white rounded-lg shadow-md p-6">
          <ProfileCard
            key={currentIndex}
            className=""
            name={teamData[currentIndex].name}
            imageURL={teamData[currentIndex].image}
            position={teamData[currentIndex].position}
            description={teamData[currentIndex].description}
            profileLink={teamData[currentIndex].LinkedInProfileLink}
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-primary-NavyBlue text-white rounded-lg transition"
          >
            Next
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {teamData.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                currentIndex === index ? "bg-primary-NavyBlue" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div> */}

      {/* other way */}
      <ScrollableRow gap="lg" className="p-4 bg-gray-50">
        {teamData.slice(0, visibleCards).map((member, index) => (
          <ProfileCard
            key={index}
            className="w-[200px] md:w-[250px] lg:w-[300px]"
            name={member.name}
            imageURL={member.image}
            position={member.position}
            description={member.description}
            profileLink={member.LinkedInProfileLink}
          />
        ))}
      </ScrollableRow>
    </div>
  );
};

export default OurInstructors;
