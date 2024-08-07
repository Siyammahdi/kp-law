
import Accordion from "../Accordion";
import TooltipComponent from "../Tooltip";

const Step2: React.FC = () => {
  return (
    <div className="max-w-6xl lg:mx-auto mx-5">
      <div className="flex justify-between h-28 mt-8">
        <p className="text-white text-lg my-auto mb-0">
          We are pleased to offer you a place within the claim. Simply follow
          the steps below, and one of our specialist legal staff will contact
          you within a few days with details on the next steps.
        </p>
        <div>
          <TooltipComponent />
        </div>
      </div>
      <ul className="list-inside list-none py-6 my-20 text-white mb-4 lg:space-y-2 space-y-7">
        <li>
          <span className="bg-button px-2 rounded-full mr-5">1</span>There is
          ano-win no-fee process.
        </li>
        <li>
          <span className="bg-button px-2 rounded-full mr-5">2</span>You
          aresigning with a UK-registered Law Firm called KP Law.
        </li>
        <li>
          <span className="bg-button px-2 rounded-full mr-5">3</span>You
          willdeal with UK-based legal professionals in person.
        </li>
        <li>
          <span className="bg-button px-2 rounded-full mr-5">4</span>All costs
          are recouped from the settlement.
        </li>
        <li>
          <span className="bg-button px-2 rounded-full mr-5">5</span>You have 14
          days to change your mind after accepting.
        </li>
        <li>
          <span className="bg-button px-2 rounded-full mr-5">6</span>Our
          professional UK staff will contact you if you have any other
          questions.
        </li>
        <li>
          <span className="bg-button px-2 rounded-full mr-5">7</span>Please seek
          independent legal advice if you have any uncertainties regarding the
          claim.
        </li>
      </ul>
      <div className="pb-10 space-y-5 text-xl">


      <Accordion />


        {/* <div className="">
          <select
            id="diagnosisYear"
            name="diagnosisYear"
            required
            className="w-full py-2  bg-transparent border-b"
          >
            <option value="">Damages Based Agreement</option>
          </select>
        </div>
        <div className="">
          <select
            id="diagnosisYear"
            name="diagnosisYear"
            required
            className="w-full py-2  bg-transparent border-b"
          >
            <option value="">Litigation management Agreement</option>
          </select>
        </div>
        <div className="">
          <select
            id="diagnosisYear"
            name="diagnosisYear"
            required
            className="w-full py-2  bg-transparent border-b"
          >
            <option value="">Data Subject Access Request Authority</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default Step2;
