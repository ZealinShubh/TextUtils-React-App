import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  }

  const handleLowClick = ()=>{
    // console.log("Upper case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  }
  const handleClrText = ()=>{
    // console.log("Upper case was clicked");
    let newText ='';
    setText(newText);
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!!!", "success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed :)", "success");
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} placeholder='Enter your Text here' id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClrText}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>
        {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
      </p>
      <p>This statement wotld take {0.008 * text.split(" ").length} minutes to be read</p>
      <h3>Text Preview:</h3>
      <p>{text.length>0? text:"Enter your text to preview it here"}</p>
    </div>
    </>
  )
}
