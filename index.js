<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <img
                id="pre-btn"
                alt="logo"
                className="h-10 pr-0"
                src={back}
                
              ></img>
            </div>
          </div>
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
            <section
              id="slider"
              className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
            >
              <input type="radio" name="slider" id="s1" defaultChecked="false"/>
              <input type="radio" name="slider" id="s2" defaultChecked="true"/>
              <input type="radio" name="slider" id="s3" defaultChecked="false"/>
              <label htmlFor="s1" id="slide1">
                {/* <img className="fea" src="./assets/img/img1.jpg" height="100%" width="100%"/> */}
              </label>
              <label htmlFor="s2" id="slide2">
                {/* <img className="fea" src="./assets/img/img2.jpg" height="100%" width="100%"/> */}
              </label>
              <label htmlFor="s3" id="slide3">
                {/* <img className="fea" src="./assets/img/img3.jpg" height="100%" width="100%"/> */}
              </label>
            </section>
          </div>
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <img
                id="nex-btn"
                alt="logo"
                className="h-10 pr-0"
                src={front}
              ></img>
            </div>
          </div>
        </div>
