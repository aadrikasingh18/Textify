import React from 'react'
import { useState } from 'react'

export default function Form(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    // GIVING ERROR
    // AGR KOI SENTENCE BINA FULL STOP KE END KIYA TB VIH SENTENCE HIE DELETE HO JA RHA SHOW NHI HOTA
    // const handleSentenceCase = () => {
    //     let lowerCase = text.toLowerCase();
    //     let regex = /([^.!?]+[!?.\d\s]+)/g;
    //     let sentences = lowerCase.match(regex);
    //     let newText = sentences
    //       .map((sentence) => {
    //         return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
    //           ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
    //           : sentence);
    //       })
    //       .join("");
    //     setText(newText);
    // }

    const handleCapitalizedCase = () => {
        let lowercase = text.toLowerCase();
        let words = lowercase.split(" ");
        let newWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        let newText = newWords.join(" ");
        setText(newText);
    };

    const handleInverseCase = () => {
        let newWord = "";
        for (let i = 0; i < text.length; i++) 
        {
          let char = text.charAt(i);
          if (char >= "A" && char <= "Z") 
          char = char.toLowerCase();
          else if (char >= "a" && char <= "z") 
            char = char.toUpperCase();
          newWord = newWord + char;
        }
        setText(newWord);
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

    const handleListen = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const [text, setText] = useState('');
    return (
        <div>
            <div className="container my-4">
                <div className="mb-4">
                    <h3>ENTER YOUR TEXT BELOW : </h3>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Upper Case</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Lower Case</button>
                
                {/* <button className="btn btn-primary mx-2 my-2" onClick={handleSentenceCase}>Sentence Case</button> */}

                <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalizedCase}>Capitalized Case</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleInverseCase}>Inverse Case</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleListen}>Listen</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
        
            </div>
            <div className="container my-2">
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
