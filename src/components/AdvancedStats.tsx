import brandRecognition from "../assets/images/icon-brand-recognition.svg";
function AdvancedStats() {
  return (
    <section className="bg-[#f0f1f6] h-72">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <h2 className="mt-32 text-center font-Poppins text-5xl font-bold">
          Advanced Statistics
        </h2>
        <p className="font-Poppins text-GrayishViolet text-center text-2xl font-bold mt-5">
          Track how your links are performimg with our advanced statistics
          dashboard
        </p>
           
           {/* <div className="flex basis-1 gap-4">
                <div className="flex flex-col items-center justify-center">
                    <img src={brandRecognition} alt="brand recognition" />
                    <h3 className="font-Poppins text-GrayishViolet text-center text-2xl font-bold mt-5">
                        Brand Recognition
                    </h3>
                    </div>
           </div>    */}
      </div>
    </section>
  );
}

export default AdvancedStats;
