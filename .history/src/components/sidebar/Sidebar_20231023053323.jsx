import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  DateRange,
  PermIdentity,
  PlaylistAddCheck,
  LocationOn,
  WorkOutline,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  Report
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">基本功能</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              首頁
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              時間軸
            </li>
            <li className="sidebarListItem">
              <DateRange className="sidebarIcon" />
              日曆
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">人事管理</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              使用者
            </li>
            <li className="sidebarListItem">
              <PlaylistAddCheck className="sidebarIcon" />
              待簽核
            </li>
            <li className="sidebarListItem">
              <LocationOn className="sidebarIcon" />
              打卡
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              請假
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
