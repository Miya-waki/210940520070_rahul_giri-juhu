
import {  useState } from "react";

export default function App() {
  return (
    <div>
      <MychatApp />
    </div>
  );
}
function MychatApp(){
  const parent= "container-fluid";
  const header = "row bg-secondary text-light";
  const headstyle ="d-flex align-items-center p-3";
  const inputField="row mt-2";
  const chatStyle1="alert alert-secondary border-secondary text-dark";
  const chatStyle2="alert alert-secondary border-secondary text-dark";
  const studentName="Rahul Giri";
  const studentId = "210940520070"
  const[list,setList]=useState([]);
  const[text,setText]=useState("");

  const getText=(e)=>{
    let newText =e.target.value;
    setText(newText);
  };
  const sendMsg= () =>{
    if(text !==""){
      let newList=[...list,text];
      setList(newList);
    }
  }


  return(
    <div className={parent}>
      <div className={header}>
        <div className={headstyle}>
          <h2>MychatApp</h2>
          <h6 className="m-0 ms-2">
            by {studentName}/{studentId}
          </h6>
        </div>
      </div>
      <div className={inputField}>
        <div>
          <input 
          className="w-75-p-4"
          style={{"border-radius":"10px",width:"50rem",height:"6rem"}}
          type="text" 
          placeholder="Lets chat here.."
          onChange={getText}
          />

          <input type="button" 
          style={{"border-radius":"10px",width:"120px",height:"6rem",marginLeft:"10px"}}
          value="Send" 
          onClick={sendMsg}/>
        </div>
        <div>
          {list.map((item,index)=>{
              if(index %2 === 0){
              return(
                <div key={index} classname ={chatStyle1}>
                {item}
                </div>
              );
          }
          else{
            return(
              <div  key={index} classname ={chatStyle2}>{item}</div>
            );
          }
        })}
        </div>
      </div>
    </div>
  );
}

