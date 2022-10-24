import Logo from "../assets/images/logo.svg"
function Navigation() {
  return (
    <nav className="container mx-auto flex justify-between items-center p-6">
     <div className="links space-x-12 text-GrayishViolet flex text-md font-bold font-Poppins">
      <a href="#"><img src={Logo} alt="logo"/></a>
      <a href="#" className="hidden md:flex">Features</a>
      <a href="#" className="hidden md:flex">Pricing</a>
      <a href="#" className="hidden md:flex">Resources</a>
     </div>
     <div className="hidden md:flex space-x-5 items-center">
      <a href="#" className="text-GrayishViolet font-bold font-Poppins">Login</a>
      <a href="#" className="bg-Cyan text-white rounded-full px-6 py-3 font-bold font-Poppins">Sign Up</a>
     </div>
    </nav>
  )
}

export default Navigation