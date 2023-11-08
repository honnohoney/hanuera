import React, {useState} from "react";

const ContactInfo = () => {
    const number = '+66997620997';
    const mail = 'hanuera.khim@gmail.com'
    const address = 'Loei, Thailand'

    const [copied, setCopied] = useState(false);

    const handleCopyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 900);
    }

    return(
        <div className="contactinfo">
            <div className="contact-card" onClick={() => handleCopyToClipboard(number)}>
                <span className="material-symbols-outlined">call</span>
                <span>{number}</span>
            </div>

            <div className="contact-card" onClick={() => handleCopyToClipboard(mail)}>
                <span className="material-symbols-outlined">mail</span>
                <span>{mail}</span>
            </div>

            <div className="contact-card" onClick={() => handleCopyToClipboard(address)}>
                <span className="material-symbols-outlined">home</span>
                <span>{address}</span>
            </div>
            {copied && <div>copied</div>}
        </div>
    )
}
export default ContactInfo;