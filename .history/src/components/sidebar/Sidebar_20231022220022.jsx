import "./sidebar.css";
import {
  LineStyle, Timeline, TrendingUp
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebar'>
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <LineStyle />
                  Home
                </li>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <TrendingUp className="sidebarIcon" />
                  Sales
                </li>
              </ul>
            </div>
          </div>
        </div>
        )
}
