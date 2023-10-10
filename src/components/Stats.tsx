import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center m-3`}>
          <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
