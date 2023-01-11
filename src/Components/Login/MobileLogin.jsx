import React,{useState} from 'react'
const MobileLogin=()=>{
    const [mobileNumber,setMobilenumber]=useState("");
    const [OTP,setOtp]=useState("");
    const [setDataInput]=useState('');
    const submitThis=()=>{
    const info={mobileNumber:mobileNumber,OTP:OTP};
    setDataInput([info]);
    }
    return(
        <div>
            <form action="" onSubmit={submitThis}>
            <div> 
                <label htmlFor="mobileNumber">Mobilenumber</label>
                <input type="number" name="mobileNumber" id="mobileNumber" value={mobileNumber} onChange={(e)=>setMobilenumber(e.target.value)}/> 
            </div>
            <div>
                <label htmlFor="OTP">OTP</label>
                <input type="number" name="OTP" id="OTP" value={OTP} onChange={(e)=>setOtp(e.target.value)}/>
            </div>
            <button type="submit">Login</button>
            </form>
            </div>
    )
}

export default MobileLogin;