import React,{useState} from 'react'
const EmailLogin=()=>{
    const [email,setEmail]=useState(""); 
    const [passw,setPassw]=useState("");
    const [setDataInput]=useState('');
    const submitThis=()=>{
    const info={email:email,passw:passw};
    setDataInput([info]);
}
return(
    <div>
        <form action="click" onSubmit={submitThis}> 
            <div> 
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
            </div>
            <div> 
                <label htmlFor="passw">passw</label>
                <input type="passwprd" name="pasww" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
            </div>
            <button type="submit">Login</button>
        </form>
       </div>
)


}
export default EmailLogin;
