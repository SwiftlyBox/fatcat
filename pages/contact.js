import React from 'react' 
import Script from "next/script"

const contact = () => {
  return (
    <>
      <Script src="https://tally.so/widgets/embed.js"></Script>
      <div style={{alignItems:'center',justifyContent: 'center',display:'center'}}>
        <iframe
          data-tally-src="https://tally.so/embed/3q4x49?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="70%"
          height="70%"
          frameborder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact form"
        ></iframe>
      </div>
    </>
  );
}

export default contact
