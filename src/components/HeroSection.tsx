import Illustration from "../assets/images/illustration-working.svg"
function HeroSection() {
  return (
    <div className="grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 items-center justify-center">
        <header className="container mx-auto max-w-xl flex flex-col items-center justify-center">
           <h1 className="text-5xl md:text-7xl font-Poppins font-[700] text-center md:text-left">More than just shorter links</h1> 
           <p className="text-GrayishViolet text-lg md:text-2xl font-bold text-center md:text-left">Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button className="bg-Cyan text-white rounded-full px-10 py-3 font-bold font-Poppins md:self-start mt-10 text-center  md:text-left">Get Started</button>
        </header>
        <div>
            <img src={Illustration} alt="illustration" className="w-full"/>
        </div>
    </div>
  )
}

export default HeroSection