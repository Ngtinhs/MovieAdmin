import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <img src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Fs_dAdMkYAIAX9DRJ-p&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT9Ii7DlC7hEhI-gcDJrERc7LOwvQ-7v2CWK1oHD3nU3gA&oe=6357BB04" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
