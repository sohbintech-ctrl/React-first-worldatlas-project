export const Contact=()=>{
    /*fromEntries confuse*/
    const handleFormSubmit=(formData)=>{
     const formEntries=Object.fromEntries(formData.entries());
     console.log(formEntries);
    }
    return(
    <section className="section-contact container">
    <h1 className="contact-title">Contact Us</h1>
        <form action={handleFormSubmit} className="contact-all">
        <input type="text" required autoComplete="false" name="username" placeholder="Enter your name" className="input-field " />
        <input type="email" required autoComplete="false" name="email" placeholder="Enter your Email" className="input-field "/>
        <textarea type="text" rows="10"  required autoComplete="off" name="message" placeholder="Enter your Message" className="input-field"></textarea>
        <button className="contact-button" type="submit" value="send">SEND</button>
        </form> 
    </section>
    )
};