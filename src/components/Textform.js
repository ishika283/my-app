import React, {useState} from 'react'

// console.log(useState('Enter text here'));

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked: ' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared", "success");
  }
  const handleOnChange = (event) => {
    // console.log('On change');
    setText(event.target.value);
  }
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }

  const [text, setText] = useState('');
  // setText("ishika");  //This is used to change or initialize the text.
  // text = "new text"; //wrong way to change the state
  // setText("new text"); //Correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
          <div className="mb-3">
            <h1>{props.heading} </h1>
              <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
