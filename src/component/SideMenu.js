import { AiTwotoneHome } from "react-icons/ai";
import {
  BsFillPersonLinesFill,
  BsFillChatSquareQuoteFill,
} from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";
import { SiApostrophe } from "react-icons/si";
import { RiMailSendFill } from "react-icons/ri";
import "./Style.css";
function SideMenu() {
  return (
    <div className="side-menu">
      {/* <AiTwotoneHome /> */}
      <BsFillPersonLinesFill />
      <BsFillChatSquareQuoteFill />
      {/* <GrServices /> */}
      <FaLaptopCode />
      {/* <SiApostrophe /> */}
      <RiMailSendFill />
    </div>
  );
}

export default SideMenu;
