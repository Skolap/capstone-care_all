const [email,setEmail]=useState(""); 
const [passw,setPassw]=useState("");
const submitThis=()=>{
    var info={email:email,passw:passw};
    setDataInput([info]);
}

return(
	<div>
		<form action="" onSubmit={submitThis}> 
			<div> 
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div>
        </form>
       </div>
)
export default EmailLogin;