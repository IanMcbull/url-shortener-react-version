import brandShorten from "../assets/images/bg-shorten-desktop.svg";
const style = {
  backgroundImage: `url(${brandShorten})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
function BoostLinks() {
  return (
    <section className="bg-DarkViolet min-h-[72px] mt-6 p-28 flex flex-col items-center space-y-6" style={style}>
      <h3 className="text-center text-white font-Poppins font-[700] text-4xl">Boost your links today</h3>
      <button className="px-16 py-2 bg-Cyan text-white text-center rounded-full">Get Started</button>
    </section>
  );
}

export default BoostLinks;
