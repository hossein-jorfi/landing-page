import styles from "../style";

import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins text-[18px] font-medium leading-[23px]">
            <span className="flex items-center justify-between">
              <span className="text-gradient">Get</span>
              <img
                src={arrowUp}
                alt="arrow"
                className="w-[23px] h-[23px] object-contain"
              />
            </span>
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
