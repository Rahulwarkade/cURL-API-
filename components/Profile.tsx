import React from 'react';
import axios from 'axios';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Profile: React.FC = async () => {
    const {data} = await axios.get('https://stg-dashboard.toneop.net/presales/user_detail/15836/',
    {headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization : "720401ac06457e6eedf3987878da6993256b8d607acb9f63dbc556f87792ce7a5ab9e7ded5ab136c29e92b7758d6e4bdef6542e53c852b24d0589b46ba67f5abaf15e59628945e691ca5e564ef1dd16a996f1fda80245383ac8f79a",
      },}
    );

    const user_detail = data?.data.user_detail;
    const {user_id,username,location,email_address,mobile_number,height,weight,bmi,connection_status,call_attempt,is_existing_user} = user_detail;
    const app_usgae = user_detail?.app_usage;
    const {last_login,total_time_screen,last_update,last_activity_tracked,offer_availed} = app_usgae;
    return (<>
        <section className='w-full h-auto relative mt-1'>
            <div className='w-full h-auto py-4  px-1 pt-2 bg-[#c8cada] drop-shadow-xl text-center md:text-start'>
                <h1>Guest user</h1>
            </div>
            <div className='w-full  h-auto py-4 px-1   flex flex-wrap gap-1'>
                <div className='w-auto max-w-96 min-w-80 h-auto bg-[#EAECFE] drop-shadow-xl flex flex-col gap-2 py-2 px-2 relative'>
                    <div className='w-[40px] h-[40px] bg-yellow-700 rounded-full'></div>
                    <div className="w-full h-auto p-1">
                        <p className='capitalize font-bold'>{username}</p>
                        <p className='capitalize font-bold '>userId : {user_id}</p>
                    </div>
                    <div className='w-full h-auto flex gap-1 items-center'>
                        <CiLocationOn />
                        <p>{location?location:"NA"}</p>
                    </div>
                </div>
                <div className='w-auto max-w-96 h-auto min-w-80 bg-[#EAECFE] drop-shadow-xl flex flex-col gap-2 py-2 px-2 relative'>
                    <div className='w-full h-auto flex justify-end'>
                        <div className='w-[100px] h-[24px] border-[1px] border-[#1E293B] rounded-sm'>
                        </div>
                    </div>
                    <div className="w-full h-auto p-1 flex justify-between items-center px-2">
                        <MdOutlineAttachEmail />
                        <p className=''>{email_address}</p>
                    </div>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <IoCall />
                        <p>{mobile_number}</p>
                    </div>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>Call Attempts</p>
                        <p>{call_attempt}</p>
                    </div>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>Connection Status</p>
                        <p>{connection_status}</p>
                    </div>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>Lead Type </p>
                        <p>{is_existing_user?is_existing_user:"N/A"}</p>
                    </div>
                </div>
                <div className='w-auto max-w-96 min-w-80 h-auto bg-[#EAECFE] drop-shadow-xl flex flex-col gap-2 py-2 px-2 relative'>
                    <h1>Physical Details</h1>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>Height:</p>
                        <p>{height?height:"N/A"}</p>
                    </div>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>weight</p>
                        <p>{weight?weight:"N/A"}</p>
                    </div>
                    <button className='bg-blue-400 text-center text-white px-2 py-1 rounded-md w-[40px] h-[20px] capitalize'>edit</button>
                </div>
                <div className='w-auto max-w-96 min-w-80 h-auto bg-[#EAECFE] drop-shadow-xl flex flex-col gap-2 py-2 px-2 relative'>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>bmi:</p>
                        <p>{bmi?bmi:"N/A"}</p>
                    </div>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>Target weight</p>
                        <p>{weight?weight:"N/A"}</p>
                    </div>
                </div>
                <div className='w-auto max-w-96 min-w-80 h-auto bg-[#EAECFE] drop-shadow-xl flex flex-col gap-2 py-2 px-2 relative'>
                    <h1>App Usage</h1>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>Last login</p>
                        <p>{last_login?last_login:"N/A"}</p>
                    </div>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>Total Screen Time</p>
                        <p>{total_time_screen?total_time_screen:"N/A"}</p>
                    </div>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>last update</p>
                        <p>{last_update?last_update:"N/A"}</p>
                    </div>
                    <button className='w-auto h-auto py-1 px-3 border-[1px] border-[#1E293B] text-center capitalize text-white bg-blue-400 rounded-md'>create follow up</button>
                </div>
                <div className='w-auto max-w-96 min-w-80 h-auto bg-[#EAECFE] drop-shadow-2xl flex flex-col gap-2 py-2 px-2 relative'>
                <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>Offer Availed</p>
                        <p>{offer_availed?offer_availed:"N/A"}</p>
                    </div>
                    <div className='w-full h-auto flex gap-1 justify-between items-center p-1 px-2'>
                        <p>Last activity tracked</p>
                        <p>{last_activity_tracked?last_activity_tracked:"N/A"}</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}


export default Profile;