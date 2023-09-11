import BannerImages from "../assets/navbar.jpg"


function Contact(){
 return(
    <div className="contact">
        <div className="left-side" style={{backgroundImage:`url(${BannerImages})`}}></div>
        <div className="rigth-side">
            <h1>Contact Us</h1>
            <form id="contact-form">
                <label htmlFor="name">Full Name</label>
                <input  name="name" placeholder="Enter Full Name.." type="text"/>
                <label htmlFor="email">Email</label>
                <input  name="email" placeholder="Enter an E-mail.." type="email"/>
                <label htmlFor="message">Full Name</label>
                <textarea  name="message" placeholder="Enter Your Message.." />
                <button type="submit">Send Message</button>
            </form>
        </div>

    </div>
 )
}

export default Contact;