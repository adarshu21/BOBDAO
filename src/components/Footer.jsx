import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import img from "../images/bobdao12.png";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col ml-90">
        <img
          src={img}
          alt="hoobank"
          className="w-[250px] h-[150px] object-contain ml-100"
        />
      </div>

      <div className="flex-[0.7] w-full flex flex-row justify-between items-end flex-wrap md:mt-0 mt-10">
        <div className="flex justify-between">
          <p className={`${styles.paragraph2} items-end mt-16`}>
            Brought to you by BOBDAO and Devfolio
          </p>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 BOBDAO. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
