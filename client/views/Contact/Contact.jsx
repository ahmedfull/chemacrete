function Contact() {
  return (
    <div style={{ padding: '20px', display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-10" style={{ fontSize: "22px", color: "black" }}>Contact me on:</h1>
        <h1 className="mb-10" style={{ fontSize: "22px", color: "black" }}>
          <a href="mailto:ChemaCrete@gmail.com" className="relative inline-block cursor-pointer group" style={{ color: "black" }}>
            Email
            <span class="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </a>: ChemaCrete@gmail.com
        </h1>

        <div className="mb-10" style={{ display: "flex" }}><h1 className="m-2" style={{ fontSize: "22px", color: "black" }}>
          Phone: +218917273048
        </h1>
          <a href="tel:+218917273048" className="flex-shrink-0">
            <button className="ml-3 h-14 w-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
          </a></div>

        <h1 style={{ fontSize: "22px", color: "black" }}>

          <a
            href='https://www.facebook.com/ChemaCrete?rdid=mU83ZFFbLeRUIqj4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16qVeZkJrW%2F'
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
            className="relative inline-block cursor-pointer group"
          >
            Facebook
            <span class="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </a>: كيماكريت - ChemaCrete
        </h1>
      </div>
    </div>
  );
}

export default Contact;