import React from 'react';
import Chart from '../components/charts/Chart';
import FeaturedInf from '../components/featuredInfo/FeaturedInf';
import "./home.css"
import { userData } from "../dummyData.js"
import WidgetSmall from '../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../components/widgetLarge/WidgetLarge';

export default function Home() {
  return <div className='home'>
      <FeaturedInf />
      <Chart data={userData} title = "User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
  </div>;
}
