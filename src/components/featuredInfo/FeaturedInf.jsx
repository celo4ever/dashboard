import React from 'react';
import "./featuredInf.css"
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';

export default function FeaturedInf() {
  return <div className='featured'>
      
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2.34</span>
                <span className="featuredMoneyRate">-22.34
                  <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <div className="featuredFooter">
              <span className="featuredSub"> Compared to last month</span>
              <span> 
                <CodeIcon className='codeIcon'/>
              </span>
            </div>
        </div>
     
      <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$5.34</span>
              <span className="featuredMoneyRate">-8.34
                <ArrowDownward className='featuredIcon negative'/>
              </span>
          </div>
          <span className="featuredSub"> Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2.34</span>
              <span className="featuredMoneyRate">+10.34
                <ArrowUpward className='featuredIcon'/>
              </span>
          </div>
          <span className="featuredSub"> Compared to last month</span>
      </div>
  </div>;
}
