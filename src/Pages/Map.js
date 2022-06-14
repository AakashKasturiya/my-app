import React from 'react';


export default function Map() {
    return(
        <>
        <h1>Hello</h1>
        <div className="google-map-code" style={{display:"flex",justifyContent:"center"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.561907193009!2d77.22732101440677!3d28.61291669172069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1655104930673!5m2!1sen!2sin" style={{border:0,width:600,height:450}}  loading="lazy" ></iframe>
        </div>
    
        </>
    );
}



