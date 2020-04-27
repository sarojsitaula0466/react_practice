import React from 'react'
import './newsletter.css'

const NewsLetter = () =>{
    return(
        <div className="newsDiv" >
            <h1>Join Our NewsLetter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum, urna
                 et rutrum varius, risus nisi convallis quam, eget venenatis eros diam scelerisque nunc. 
                 Duis in dignissim lacus. Phasellus a libero sed dolor venenatis cursus in mattis leo.</p>
                 <input type="email" placeholder="Your-Email" className="emailInput" /><br/>
                 <button type="submit" className="submit-button" >Subscribe</button>
        </div>
    )
}
export default NewsLetter