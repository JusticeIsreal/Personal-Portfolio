import { useReducer } from "react";
import reducer from "../Reducer/Reducer";
const initialState = {
  readAboutMe: false,
};
function LeftSide() {
  const bannerIMG =
    "https://res.cloudinary.com/isreal/image/upload/v1662335426/My%20portfolio%20Project/WhatsApp_Image_2022-09-05_at_12.47.02_AM_ezdv8l-removebg-preview_mtc5ef.png";
  const AJIS =
    "https://res.cloudinary.com/isreal/image/upload/v1662333054/My%20portfolio%20Project/AJIS_FILE_1_arvnbd.png";

  const [state, dispatch] = useReducer(reducer, initialState);

  const readMore = () => {
    if (state.readAboutMe === false) {
      dispatch({ type: "ABOUTME_CLOSE" });
    } else {
      dispatch({ type: "ABOUTME_OPEN" });
    }
  };

  let yy =
    "JNIZ-TeethCare. Home About Services Reviews Contact EYE-LA Erase YourPast With Teeth-Whitening And Keep A Brighter Smile With Four ShadeOf Whiter Teeth. Make Appointment About Us Whiter Teeth ,BrighteSmile Welcome To Jniz Teeth Care! Our Dental Team Is Dedicated TProviding The United States With A Comprehensive Array Of Services TMeet And Exceed All Of Your Needs. We Understand That Visiting ThDentist Can Be Stressful So We Have Designed Our Procedures With YouComfort And Ease In Mind. Whether You Are In Need Of Emergency Care OA Cosmetic Treatment To Brighten Your Smile, You Can Rest Assured ThaWe Make Sure That Your Experience Is As Effective, Affordable, AnPleasant As Possible. Here At Jniz Teeth Care, We Utilize The LatesAdvanced Technology, Product And Procedures To Help You Attain AnMaintain The Bright, Beautiful Smile You Deserve. We Will Also WorWith You To Develop A Compreheness jnizteethcare@gmail.com Sun Sep 02022 13:26:49 GMT+0100 (West Africa Standard Time) © Copyright @ BJUSTICE ISREAL AGBONMA";
  return (
    <div className="left-side-container">
      <div className="banner">
        <img src={AJIS} alt="AJIS" />
      </div>
      <div className="about-me">
        <div className="about-me-pitch">
          {state.readAboutMe ? (
            <span>{yy}</span>
          ) : (
            <span>"{yy.substring(0, 120)} ..."</span>
          )}
          <button className="readMore" onClick={readMore}>
            {state.readAboutMe ? "Read less" : "Read more"}
          </button>
        </div>
        <div className="about-img">
          <img src={bannerIMG} alt="IMG" className="bannerIMG" />
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
