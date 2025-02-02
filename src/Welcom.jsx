import Footer from "./footer";

function Welcom(){


    return(
        <>
          <Footer />
          <div className="dumbdiv">
            <img className="fComputer" src="resources\it-admin-troubleshooting.gif" alt="Computer"></img>
            <p>--- Feel Free to look around</p>
          </div>
          <p>--- Welcome ---</p>
          <div className="dumbdiv">
            <div className="dumbdiv2">
              <img className="secondi" src="resources\M72a.gif" alt="M72a"></img>
              <div className="aaa">
                <p>About me :</p>
                <ul>
                  <li>19/M Studying Computer Science</li>
                  <li>Lives Somewhere in Algeria</li>
                  <li>Currently doing something</li>
                </ul>
                <div className="dumbdiv">
                  <img className="nimg" src="resources\062c7ea2fdf5b8fb6b471a129649e237_w200.gif" alt="Brain"></img>
                  <p>--- Thanks For Visiting My Website</p>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}


export default Welcom