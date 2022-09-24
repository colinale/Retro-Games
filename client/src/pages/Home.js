import React from 'react';

const Home = () => {

    return (
        <div>
          <section className="header-sec">
            {/* Logo */}
          </section>
          <div id="logo" className="selection-div logo-selec">
            <div className="title-bar alt-title-bar">
              <div className="blk-bars-div">
                <div className="blk-bar" />
                <div className="blk-bar" />
                <div className="blk-bar" />
                <div className="blk-bar" />
              </div>
              <a href="">Group Five</a>
            </div>
            <div className="header-logo">
              <pre>{"    "}.oooooo.{"                          "}.{"             "}o8o{"        "}.o8{"                        "}.oooooo..o{"     "}.{"                       "}{"\n"}{"    "}d8P'{"  "}`Y8b{"                       "}.o8{"             "}`"'{"       "}"888{"                       "}d8P'{"    "}`Y8{"   "}.o8{"                       "}{"\n"}{"    "}888{"           "}.oooo.{"   "}oooo d8b .o888oo oooo d8b oooo{"   "}.oooo888{"   "}.oooooooo{"  "}.ooooo.{"  "}Y88bo.{"      "}.o888oo{"  "}.ooooo.{"  "}oo.ooooo. {"\n"}{"    "}888{"          "}`P{"  "})88b{"  "}`888""8P{"   "}888{"   "}`888""8P `888{"  "}d88' `888{"  "}888' `88b{"  "}d88' `88b{"  "}`"Y8888o.{"    "}888{"   "}d88' `88b{"  "}888' `88b{"\n"}{"    "}888{"           "}.oP"888{"   "}888{"       "}888{"    "}888{"      "}888{"  "}888{"   "}888{"  "}888{"   "}888{"  "}888ooo888{"      "}`"Y88b{"   "}888{"   "}888{"   "}888{"  "}888{"   "}888{"\n"}{"    "}`88b{"    "}ooo{"  "}d8({"  "}888{"   "}888{"       "}888 .{"  "}888{"      "}888{"  "}888{"   "}888{"  "}`88bod8P'{"  "}888{"    "}.o oo{"     "}.d8P{"   "}888 . 888{"   "}888{"  "}888{"   "}888{"\n"}{"    "}`Y8bood8P'{"  "}`Y888""8o d888b{"      "}"888" d888b{"    "}o888o `Y8bod88P" `8oooooo.{"  "}`Y8bod8P' 8""88888P'{"    "}"888" `Y8bod8P'{"  "}888bod8P'{"\n"}{"                                                                    "}d"{"     "}YD{"                                           "}888{"      "}{"\n"}{"                                                                    "}"Y88888P'{"                                          "}o888o{"     "}{"\n"}{"    "}</pre>
            </div>
            <div className="shadow logo-shadow" />
          </div>
          {/* console & games selection btn's --------------------------------------- */}
          <section className="hero-sec">
            <div className="selections-container">
              {/* Console selection */}
              <div id="overlay" className="selection-div">
                <div className="title-bar">
                  <div className="blk-bars-div">
                    <div className="blk-bar" />
                    <div className="blk-bar" />
                    <div className="blk-bar" />
                    <div className="blk-bar" />
                  </div>
                  <a href="/Console">Consoles</a>
                </div>
                <div className="featured-img alt-feat-img">
                  <img src="https://preview.redd.it/s1hc4t5io3m81.jpg?auto=webp&s=694e6dc25104b10afa45cc47ed37758fa838dd51" alt="featured game" />
                </div>
                <a className="hover alt-hover" href="consoles.html">
                  <div className="view-more">
                    <svg className="svg" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0002 3C17.3922 3 21.8782 6.88 22.8192 12C21.8792 17.12 17.3922 21 12.0002 21C6.60815 21 2.12215 17.12 1.18115 12C2.12115 6.88 6.60815 3 12.0002 3ZM12.0002 19C14.0396 18.9996 16.0185 18.3068 17.613 17.0352C19.2075 15.7635 20.3231 13.9883 20.7772 12C20.3214 10.0133 19.2051 8.24 17.6108 6.97003C16.0165 5.70005 14.0385 5.00853 12.0002 5.00853C9.96185 5.00853 7.98384 5.70005 6.38953 6.97003C4.79521 8.24 3.67892 10.0133 3.22315 12C3.67725 13.9883 4.79283 15.7635 6.3873 17.0352C7.98177 18.3068 9.96068 18.9996 12.0002 19V19ZM12.0002 16.5C10.8067 16.5 9.66209 16.0259 8.81817 15.182C7.97426 14.3381 7.50015 13.1935 7.50015 12C7.50015 10.8065 7.97426 9.66193 8.81817 8.81802C9.66209 7.97411 10.8067 7.5 12.0002 7.5C13.1936 7.5 14.3382 7.97411 15.1821 8.81802C16.026 9.66193 16.5002 10.8065 16.5002 12C16.5002 13.1935 16.026 14.3381 15.1821 15.182C14.3382 16.0259 13.1936 16.5 12.0002 16.5ZM12.0002 14.5C12.6632 14.5 13.2991 14.2366 13.7679 13.7678C14.2368 13.2989 14.5002 12.663 14.5002 12C14.5002 11.337 14.2368 10.7011 13.7679 10.2322C13.2991 9.76339 12.6632 9.5 12.0002 9.5C11.3371 9.5 10.7012 9.76339 10.2324 10.2322C9.76354 10.7011 9.50015 11.337 9.50015 12C9.50015 12.663 9.76354 13.2989 10.2324 13.7678C10.7012 14.2366 11.3371 14.5 12.0002 14.5Z" fill="currentColor" />
                    </svg>
                    View Consoles
                  </div>
                </a>
                <div className="shadow alt-shadow" />
              </div>
              {/* Games selection */}
              <div id="nice" className="selection-div right-featured-img">
                <div className="title-bar">
                  <div className="blk-bars-div">
                    <div className="blk-bar" />
                    <div className="blk-bar" />
                    <div className="blk-bar" />
                    <div className="blk-bar" />
                  </div>
                  <a href="/Games">Games</a>
                </div>
                <div className="featured-img">
                  <img src="https://www.mobygames.com/images/covers/l/86029-crash-bandicoot-playstation-front-cover.jpg" alt="featured game" />
                </div>
                <a className="hover" href="games.html">
                  <div className="view-more">
                    <svg className="svg" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0002 3C17.3922 3 21.8782 6.88 22.8192 12C21.8792 17.12 17.3922 21 12.0002 21C6.60815 21 2.12215 17.12 1.18115 12C2.12115 6.88 6.60815 3 12.0002 3ZM12.0002 19C14.0396 18.9996 16.0185 18.3068 17.613 17.0352C19.2075 15.7635 20.3231 13.9883 20.7772 12C20.3214 10.0133 19.2051 8.24 17.6108 6.97003C16.0165 5.70005 14.0385 5.00853 12.0002 5.00853C9.96185 5.00853 7.98384 5.70005 6.38953 6.97003C4.79521 8.24 3.67892 10.0133 3.22315 12C3.67725 13.9883 4.79283 15.7635 6.3873 17.0352C7.98177 18.3068 9.96068 18.9996 12.0002 19V19ZM12.0002 16.5C10.8067 16.5 9.66209 16.0259 8.81817 15.182C7.97426 14.3381 7.50015 13.1935 7.50015 12C7.50015 10.8065 7.97426 9.66193 8.81817 8.81802C9.66209 7.97411 10.8067 7.5 12.0002 7.5C13.1936 7.5 14.3382 7.97411 15.1821 8.81802C16.026 9.66193 16.5002 10.8065 16.5002 12C16.5002 13.1935 16.026 14.3381 15.1821 15.182C14.3382 16.0259 13.1936 16.5 12.0002 16.5ZM12.0002 14.5C12.6632 14.5 13.2991 14.2366 13.7679 13.7678C14.2368 13.2989 14.5002 12.663 14.5002 12C14.5002 11.337 14.2368 10.7011 13.7679 10.2322C13.2991 9.76339 12.6632 9.5 12.0002 9.5C11.3371 9.5 10.7012 9.76339 10.2324 10.2322C9.76354 10.7011 9.50015 11.337 9.50015 12C9.50015 12.663 9.76354 13.2989 10.2324 13.7678C10.7012 14.2366 11.3371 14.5 12.0002 14.5Z" fill="currentColor" />
                    </svg>
                    View Games
                  </div>
                </a>
                <div className="shadow" />
              </div>
            </div>
          </section><footer>
        <div className="footer-container">
          <div className="left-icons">
            <a href="https://github.com/FredElick/Retro-Games" target="_blank">
              <img src="https://64.media.tumblr.com/18c2a365f1c29f9ac87483aa28bec32a/7278b44044d05aac-19/s1280x1920/d1a92bc06b3bab6ef4a3c88e283925229311e8af.png" alt="" />
              <p>Repo</p>
            </a>
            <a href="https://arcadespot.com/game/the-sims-2/" target="_blank">
              <img src="https://64.media.tumblr.com/8e64dc07ef2c0e13430984b9ac125276/c35d8de8c8525068-43/s1280x1920/cb05f88b78af4c1655b1caff69da5590d463de19.png" alt="" />
              <p className="sims-icon">Sims 2</p>
            </a>
          </div>
          <div className="right-icons">
            <div className="top-right-icons">
              <a href="https://github.com/Andrew-Byrd49" target="_blank">
                <img src="https://64.media.tumblr.com/8da451a7554f11482832213dc55e2049/d1f5cc8aff350050-f6/s1280x1920/f47435afed75e5a4ebf4038addaab340e66188f8.png" alt="" />
                <p>Andrew</p>
              </a>
            </div>
            <div className="bottom-right-icons">
              <a href="https://github.com/Atlas075" target="_blank">
                <img src="https://64.media.tumblr.com/34e942c1dd11f426149bd724ba8182f4/da84e72581aa2be3-c1/s1280x1920/c2cfaf4e8337d29ebf3683e2afe352a6841b2a39.png" alt="" />
                <p>Donnie</p>
              </a>
              <a href target="_blank">
                <img src="https://64.media.tumblr.com/7e68019ed95e4b7a04ceb019555682c2/11678410a9b4f3ff-9b/s1280x1920/e2bb1ba399dcd4e4ac2a55bebe29bf4c00946730.png" alt="" />
                <p>Alex</p>
              </a>
              <a href="https://github.com/FredElick" target="_blank">
                <img src="https://64.media.tumblr.com/8da451a7554f11482832213dc55e2049/d1f5cc8aff350050-f6/s1280x1920/f47435afed75e5a4ebf4038addaab340e66188f8.png" alt="" />
                <p>Fred</p>
              </a>
              <a href target="_blank">
                <img src="https://64.media.tumblr.com/8da451a7554f11482832213dc55e2049/d1f5cc8aff350050-f6/s1280x1920/f47435afed75e5a4ebf4038addaab340e66188f8.png" alt="" />
                <p>Colin</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
        </div>
        
      );
};

export default Home;