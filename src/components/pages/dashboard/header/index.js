import React from "react";
import ROBO from "../../../../assets/img/robo.png";
import MESSAGE from "../../../../assets/img/message.png";
import USER from "../../../../assets/img/user.png";
import { HeaderCard } from "../../../commons/headerCard";
import Functions from "../../../../utils/Functions";
const Header = () => {
  return (
    <div className="dashboard__header">
      <div className="dashboard__header__name">
        <img src={ROBO} alt="robo" />
        <p>Company Name</p>
      </div>
      <div className="dashboard__header__message">
        <HeaderCard
          title={Functions.latinToPersian("1") + ` ${"پیغام دارید"}`}
          img={MESSAGE}
          className={"light left"}
        />
        <HeaderCard title={`${"سارا محمدیان"}`} img={USER} diamond={true} />
      </div>
    </div>
  );
};
export default Header;
