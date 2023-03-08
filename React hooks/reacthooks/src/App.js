import { useRef, useState, useEffect } from "react";
export default function App() {
  // const [name,setName]=useState("");
  // const refelement=useRef("")
  // console.log(refelement)
  // function Reset(){
  //   setName("")
  //   refelement.current.value="1000"
  //   refelement.current.style.color='red';
  //   refelement.current.focus()
  // }
  // return(
  //   <>
  //   <div>learning useref<br/>
  //   <input ref={refelement} value={name} onChange={(e)=>{setName(e.target.value)}}/><button onClick={Reset}>Reset</button></div></>
  // )

  // const [inputValue, setInputValue] = useState("");
  // const count = useRef(0);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={inputValue}
  //       onChange={(e) => setInputValue(e.target.value)}
  //     />
  //     <h1>Render Count: {count.current}</h1>
  //   </>
  // );
  // const [inputValue, setInputValue] = useState("");
  // const previousInputValue = useRef("");

  // useEffect(() => {
  //   previousInputValue.current = inputValue;
  // }, [inputValue]);
  // console.log(inputValue)

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={inputValue}
  //       onChange={(e) => setInputValue(e.target.value)}
  //     />
  //     <h2>Current Value: {inputValue}</h2>
  //     <h2>Previous Value: {previousInputValue.current}</h2>
  //   </>
  // );
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const refpassword=useRef("");
  useEffect(()=>{
    refpassword.current=password;
    console.log(password)
  },[password])

  function set(){
    if (newpassword==refpassword.current)
    alert("hi")
    else(
      alert("incorrect password")
      
    )
    setPassword("");
      setNewpassword("");
  }
  return (
    <>
      <div>
        <h3>New Password</h3>
        <br />
        Enter password:
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        Enter again:
        <input
          type="text"
          value={newpassword}
          onChange={(e) => {
            setNewpassword(e.target.value);
          }}
        /><br/>
        <button onClick={set}>Set</button>
      </div>
    </>
  );
}
