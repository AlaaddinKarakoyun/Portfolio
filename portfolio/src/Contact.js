import './Contact.css';

export function Contact()
{

    return (
        <div className="ContactPage">
            <div className='ContactForm'>
                <div className='ContactTitle'>Contact Form</div>
                <div className='ContactLabel'>Your E-Mail:</div>
                <input className='ContactInput'/>

                <div className='ContactLabel'>Message:</div>
                <input className='ContactInput'/>

            
            </div>
        </div>
    )
}

export default Contact;