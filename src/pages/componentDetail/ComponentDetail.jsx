import React from 'react';
import CopyBlock from '../../components/codeBlock/CopyBlock';
import './componentdetail.css'


export default function ComponentDetail() {
  return <div className='compomentDetail'> 
    <h1> Component name</h1>
    <p>Description of the component</p>

    <h2>Component</h2>
    <span>Component</span>

    <h2>Jsx</h2>
    <CopyBlock 
      code= '<h1> sdfsdf <h1>' 
      language='jsx' 
      showLineNumbers 
      startingLineNumber='1'
      wrapLines={true}
      codeBlock
    />

    <h2>CSS</h2>
    <CopyBlock 
      code= 'h1 { background-color: white; }' 
      language='css' 
      showLineNumbers 
      startingLineNumber='1'
      wrapLines={true}
      codeBlock
    />
   </div>;

}
