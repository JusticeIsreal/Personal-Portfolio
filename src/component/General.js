import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import SideMenu from "./SideMenu";
import "./Style.css";

function General() {
  return (
    <section className="General">
      <div className="RightSide">
        <RightSide />
      </div>
      <div className="LeftSide">
        <LeftSide />
      </div>
      <div className="SideMenu">
        <SideMenu />
      </div>
    </section>
  );
}

export default General;
