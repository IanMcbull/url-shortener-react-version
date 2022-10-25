function Footer() {
  return (
    <footer className="min-h-[72px] bg-VeryDarkViolet">
      <div className="footer-container container mx-auto grid md:grid-cols-5 py-24 grid-cols-1 space-y-12 md:space-y-0 justify-center">
       <h3 className="text-white text-3xl font-bold font-Poppins text-center md:text-left">Shortly</h3>
        <div className="flex flex-col space-y-2 md:ml-24 ml-0 items-center">
            <h4 className="text-white font-bold font-Poppins mb-4">Features</h4>
            <a href="#" className="text-GrayishViolet font-Poppins">Link Shortening</a>
            <a href="#" className="text-GrayishViolet font-Poppins">Branded Links</a>
            <a href="#" className="text-GrayishViolet font-Poppins">Analytics</a>
            
        </div>

        <div className="flex flex-col space-y-2 items-center">
            <h4 className="text-white font-bold font-Poppins mb-4">Resources</h4>
            <a href="#" className="text-GrayishViolet font-Poppins">Blog</a>
            <a href="#" className="text-GrayishViolet font-Poppins">Developers</a>
            <a href="#" className="text-GrayishViolet font-Poppins">Support</a>
            
        </div>

        <div className="flex flex-col space-y-2 items-center">
            <h4 className="text-white font-bold font-Poppins mb-4">Company</h4>
            <a href="#" className="text-GrayishViolet font-Poppins">About</a>
            <a href="#" className="text-GrayishViolet font-Poppins">Our Teams</a>
            <a href="#" className="text-GrayishViolet font-Poppins">Careers</a>
            <a href="#" className="text-GrayishViolet font-Poppins">Contact</a>
        </div>

        <div className="flex space-x-6 text-white text-2xl justify-center">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-instagram"></i>

        </div>
      </div>
    </footer>
  )
}

export default Footer