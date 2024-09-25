import { useEffect } from "react";

const BuyTickets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="buytickets" className="flex flex-col py-10 items-center stretch-to-screen justify-center">
      <div className="text-7xl main text-center">
        <span className="socod">BOOK YOUR TICKETS!!</span>
      </div>
      <div className="w-full max-w-xl my-10">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfH7pbPwrRDgCAs4cbgWIlN7-pTV9g16q3vOo7z8qj0FMWoKA/closedform"
          width="100%"
          height="500"
          frameBorder="0"
          marginHeight="1"
          marginWidth="0"
          title="Buy Tickets Form"
        >
          
        </iframe>
      </div>
      
      <div className="text-white">
        <div className="text-3xl mt-3 mb-3 main text-center">
          <span className="socod">NOTE</span>
        </div>
        <p className="ml-5 lg:ml-0 mr-3 mb-5 leading-8">
          1. Institution ID cards are mandatory for all the student participants.<br />
          2. Government ID proofs are mandatory for all participants, including alumni.<br />
          3. It is mandatory to carry the ticket to every event.<br />
          4. Use or carrying of illegal substances is strictly prohibited. If found, strict action will be taken.<br />
          5. The Management is not responsible for any loss of personal belongings.<br />
          6. Participants must possess valid passes for events on the designated day.<br />
        </p>
      </div>

      
      

    </div>
  );
};

export default BuyTickets;
