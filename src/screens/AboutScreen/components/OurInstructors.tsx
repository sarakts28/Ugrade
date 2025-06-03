import ProfileCard from "../../../CommonComponents/ProfileCard/ProfileCard";
import { Images } from "../../../constants/images";
import DraggableSlider from "../../../CommonComponents/draggableSlider/DraggableSlider";

const OurInstructors = () => {
  const data = [
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

  return (
    <>
      <div className="w-full bg-primary-background-color py-[50px]">
        <div className="container  sm:mx-auto   pl-4 pr-0 sm:px-4 w-full">
          <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[120%] text-center text-[#113025]">
            Our Instructors
          </h2>
          <div className="mt-[50px] w-full overflow-hidden">
            <DraggableSlider className="flex gap-[15px] w-fit justify-between md:gap-[20px]">
              {data.slice(0, 4).map((instructor, index) => (
                <ProfileCard
                  key={index}
                  className="w-[70%] sm:w-[45%] md:w-[24%]  select-none shrink-0 "
                  name={instructor.name}
                  imageURL={instructor.image}
                  position={instructor.position}
                  description={instructor.description}
                  profileLink={instructor.LinkedInProfileLink}
                />
              ))}
            </DraggableSlider>
            <DraggableSlider className="flex gap-[15px] mt-[30px] w-fit justify-between md:gap-[20px]">
              {data.slice(4, 8).map((instructor, index) => (
                <ProfileCard
                  key={index}
                  className="w-[70%] sm:w-[45%] md:w-[24%]  select-none shrink-0 "
                  name={instructor.name}
                  imageURL={instructor.image}
                  position={instructor.position}
                  description={instructor.description}
                  profileLink={instructor.LinkedInProfileLink}
                />
              ))}
            </DraggableSlider>
          </div>
        </div>
      </div>
      {/* <div className="w-full  py-[50px]">
        <div className="container  sm:mx-auto   pl-4 pr-0 sm:px-4 w-full">
          <div className="w-full overflow-hidden">
            <DraggableSlider className="flex gap-[15px] w-fit justify-between md:gap-[20px]">
              {data.slice(0, 4).map((instructor, index) => (
                <ProfileCard
                  key={index}
                  className="w-[70%] sm:w-[45] md:w-[24%]  select-none shrink-0 "
                  name={instructor.name}
                  imageURL={instructor.image}
                  position={instructor.position}
                  description={instructor.description}
                  profileLink={instructor.LinkedInProfileLink}
                />
              ))}
            </DraggableSlider>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OurInstructors;
