import logo from './logo.svg';
import './App.css';

function App() {
  function getScrollTop() {
   
    if (typeof window.pageYOffset !== "undefined" ) {
        // Most browsers
        return window.pageYOffset;
    }
  
    var d = document.documentElement;
    if (typeof d.clientHeight !== "undefined") {
        // IE in standards mode
        return d.scrollTop;
    }
  
    // IE in quirks mode
    return document.body.scrollTop;
}
window.onscroll = function() {
  var scroll = getScrollTop();
  var box = document.getElementById("box");
  box.style.transform=  `translate(0px,${scroll}px) `;
}
  return (
    <div className="App" >
            <div id="box" style={{width:"100px",height:"100px",backgroundColor:"yellow",marginLeft:"50%"}}>

            </div>

             <div style={{height:"7000px"}}>
                     <p style={{marginTop:"50%",fontSize:"50px"}}>Hello</p>  
             </div>


            
    </div>
  );
}

export default App;
