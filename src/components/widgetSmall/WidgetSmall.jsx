import { Visibility } from '@mui/icons-material';
import React from 'react';
import "./widgetSmall.css"

export default function () {
  return <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/761993/pexels-photo-761993.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Anna keller</span>
                  <span className="widgetSmUserTitle"> Software Ingeneer</span>
              </div>
              <button className="widgetSmButton">
                      <Visibility className='widgetSmIcon'/>
                      Display
                  </button>
          </li>
      </ul>
  </div>;
}
