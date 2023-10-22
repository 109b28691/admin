import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  DateRange,
  PermIdentity,
  Storefront,
  PersonPinCircle,
  WorkOutline,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
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
              <Storefront className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <PersonPinCircle className="sidebarIcon" />
              打卡
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              請假
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
