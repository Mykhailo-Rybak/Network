import React from 'react';
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (

        <div className='users'>
                <span>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className='user__photo'/>
                       </NavLink>
                    </div>
                      <span className='user__name-name'>
                        <div>{user.name}</div>
                    </span>
                    <div className='user__btn'>
                        {user.followed
                            ? <button className='btn' disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>
                                Unfollow</button>
                            : <button className='btn' disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>
                                Follow</button>}

                    </div>
                </span>

        </div>)
}

export default User;
