import React from 'react'
import { useState } from 'react'
import axios from 'axios';


export default function Form(props) {

    const handleUpClick = () => {
        // let newText = text.toUpperCase();
        // setText(newText);

        axios.get('https://samppllee-app.herokuapp.com/')
            .then(function (response) {
                console.log(response);
            })
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearText = () => {
        let newText = ('');
        setText(newText);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    // OnChange event ke liye listen krna zarori hai kyuki agr nhi krta toh phir text area pr type nhi kr skte the

    const [text, setText] = useState('');
    return (
        <div>
            <div className="container my-4">
                <div className="mb-4">
                    <h3>{props.heading}</h3>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>

                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
                
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-4">
                <h3>YOUR TEXT SUMMARY</h3>
                <p>Number of character = {text.length}</p>
                <p>Number of words = {text.split(" ").length}</p>
                <p>Number of sentences = {text.split(".").length}</p>
                <p>{0.08 * text.split(" ").length} minutes read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}
