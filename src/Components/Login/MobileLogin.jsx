const [mobileNumber,setMobilenumber]=useState("");
const [otp,setOtp]=useState("");
const submitThis=()=>{
    var info={mobileNumber:mobileNumber,otp:otp};
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
            </form>
            </div>
    )
    export default MobileLogin;