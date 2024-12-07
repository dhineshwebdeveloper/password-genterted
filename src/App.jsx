
import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowcase, setIncludeLowcase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [password, setPassword] = useState("");
  const[ShowMessage, setShowMessage] = useState(false)

  function GeneratePassword() {

    let charset = "";
    if (includeUppercase) charset += "QWERTYUIOPLKJHGFDSAZXCVBNM";
    if (includeLowcase) charset += "qwertyuioplkjhgfdsazxcvbnm";
    if (includeNumbers) charset += "1234567890";
    if (includeSymbol) charset += "!@#$%^&*()?/";

    let generatorpassword = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatorpassword += charset[randomIndex];
    }
    setPassword(generatorpassword)
  }

  function copyInclipBorad() {
    navigator.clipboard.writeText(password)
    {password && setShowMessage(true)}; // Show the message
    setTimeout(() => setShowMessage(false), 5000);
  };

  return (
    <>
      <div className='password-generator'>
        <h2>Strong Password Generator</h2>
        <div className="input-group">
          <label htmlFor="password-length"> Password Length :</label>
          <input type="number" id='password-length' value={length}
            onChange={(e) => setLength(parseInt(e.target.value))} />

        </div>
        <div className="checkbox-group">
          <input type="checkbox" id='upper' checked={includeUppercase}
            onChange={(e) => { setIncludeUppercase(e.target.chacked) }} />
          <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id='low' checked={includeLowcase}
            onChange={(e) => { setIncludeLowcase(e.target.chacked) }} />
          <label htmlFor="low">Include Lowcase</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id='number' checked={includeNumbers}
            onChange={(e) => { setIncludeNumbers(e.target.chacked) }} />
          <label htmlFor="number">Include Numbers</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id='symbol' checked={includeSymbol}
            onChange={(e) => { setIncludeSymbol(e.target.chacked) }} />
          <label htmlFor="symbol">Include Symbol</label>
        </div>
        <button className='genrate-btn' onClick={GeneratePassword}>Generate Password</button>
        <div className="generated-password">
          <input type="text" readOnly value={password} />
          <button className='copy-btn' onClick={copyInclipBorad}>Copy</button>

        </div>
       {ShowMessage && <p>Password is copied to clipboard</p>}
      </div>
    </>
  )
}

export default App
