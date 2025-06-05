import { useEffect, useRef } from "react";
import { CgCheck } from "react-icons/cg";

interface ThankYouPopUpProps {
  handleClose: () => void;
}

const ThankYouPopUp = (props: ThankYouPopUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      containerRef.current &&
      containerRef.current.contains(event.target as Node)
    ) {
      // Close the popup if clicked outside
      props.handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={containerRef}
      className="w-full px-4 z-50 bg-[rgba(0,0,0,0.6)] h-full flex justify-center items-center  bottom-0 absolute top-0 left-0 right-0"
    >
      <div
        ref={ref}
        className="p-[24px] max-w-[650px] md:p-[45px] lg:p-[60px] rounded-[10px] bg-white flex flex-col items-center justify-center"
        style={{
          boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.07)",
        }}
      >
        <div className="w-[70px] bg-[rgba(39,174,96,1)] mb-[40px] h-[70px] rounded-full flex justify-center items-center">
          <CgCheck className="text-white w-[70px] h-[70px]" />
        </div>
        <div className="w-full">
          <h4 className=" mb-[16px] text-center font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[120%] font-sans">
            Thank You for Joining the Waitlist!
          </h4>
          <p className="text-center font-sans font-normal text-[16px] leading-[22px] text-[rgba(108,115,127,1)]">
            You’re officially on the path to upgrading your skills. We’ve added
            you to the list and will notify you as soon as the program goes
            live.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPopUp;
