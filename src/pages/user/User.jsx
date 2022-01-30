import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'

export default function User() {
  return <div className='user'>
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to='/newUser'>
            <button className="userAddButton">Create</button>
          </Link>
      </div>
      <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
                <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                alt="" 
                className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Jordi Mayús</span>
                    <span className="userShowUserTitle">Software Engeneer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">jordibec99</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">10.12.1997</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+34 9762337162</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">jbeck@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">Barcelona</span>
                </div>
            </div>
          </div>
          <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdatesItem">
                        <label>Username</label>
                        <input type="text" 
                        placeholder='jordibeck99' 
                        className='userUpdateInput'/>
                    </div>
                    <div className="userUpdatesItem">
                        <label>Full Name</label>
                        <input type="text" 
                        placeholder='Jordi Mayús' 
                        className='userUpdateInput'/>
                    </div>
                    <div className="userUpdatesItem">
                        <label>Email</label>
                        <input type="text" 
                        placeholder='jbeck@gmail.com' 
                        className='userUpdateInput'/>
                    </div>
                    <div className="userUpdatesItem">
                        <label>Phone</label>
                        <input type="text" 
                        placeholder='+34 9762337162' 
                        className='userUpdateInput'/>
                    </div>
                    <div className="userUpdatesItem">
                        <label>Adress</label>
                        <input type="text" 
                        placeholder='Barcelona' 
                        className='userUpdateInput'/>
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                        alt="" 
                        className="userUpdateImg" 
                        />
                        <label htmlFor="file"> 
                            <Publish className='userUpdateIcon'/>
                        </label>
                        <input type="file" id='file' style={{display: 'none'}}/>
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>    
              </form>    
          </div>
      </div>
  </div>;
}
