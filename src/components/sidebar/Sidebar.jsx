import React from 'react';
import {LineStyle, Timeline, TrendingUp} from '@mui/icons-material';
import "./sidebar.css"

export default function Sidebar() {
  return <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">DashBoard</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem active">
                      <LineStyle className='sidebarIcon'/>
                      Home
                  </li>
                  <li className="sidebarListItem">
                      <Timeline className='sidebarIcon'/>
                      Analitics
                  </li>
                  <li className="sidebarListItem">
                      <TrendingUp className='sidebarIcon'/>
                      Sales
                  </li>
              </ul>
          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem active">
                      <LineStyle className='sidebarIcon'/>
                      Home
                  </li>
                  <li className="sidebarListItem">
                      <Timeline className='sidebarIcon'/>
                      Analitics
                  </li>
                  <li className="sidebarListItem">
                      <TrendingUp className='sidebarIcon'/>
                      Sales
                  </li>
              </ul>
          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem active">
                      <LineStyle className='sidebarIcon'/>
                      Home
                  </li>
                  <li className="sidebarListItem">
                      <Timeline className='sidebarIcon'/>
                      Analitics
                  </li>
                  <li className="sidebarListItem">
                      <TrendingUp className='sidebarIcon'/>
                      Sales
                  </li>
              </ul>
          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem active">
                      <LineStyle className='sidebarIcon'/>
                      Home
                  </li>
                  <li className="sidebarListItem">
                      <Timeline className='sidebarIcon'/>
                      Analitics
                  </li>
                  <li className="sidebarListItem">
                      <TrendingUp className='sidebarIcon'/>
                      Sales
                  </li>
              </ul>
          </div>
      </div>
  </div>;
}