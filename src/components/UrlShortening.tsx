import background from '../assets/images/bg-shorten-desktop.svg';
function UrlShortening() {
    const style = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",  

    }
  return (
    <section className="container mx-auto rounded-xl p-12 flex items-center justify-center bg-DarkViolet mt-16 relative top-16" style={style}>
        <form className="w-full flex items-center justify-evenly md:justify-evenly flex-col md:flex-row">
            <input type="text" placeholder="Shorten a link here..." className="w-full md:w-3/4 rounded-md p-4 text-GrayishViolet font-bold font-Poppins"/>
            <button className="bg-Cyan text-white rounded-md md:px-10 md:py-4 font-bold font-Poppins text-center">Shorten It!</button>
        </form>
    </section>
  )
}

export default UrlShortening;