export default function Hero(){
    return(
        <section className= "h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
            <h1 className= "text-6xl font-bold mb-4 animate-bounce">Hey, I'm Yoseph Tesfaye </h1>
            <p className= "text-2xl">I turn coffee into code and bugs into features.</p>
            <button className= "mt-8 px-6 py-3 bg-white text-purple-600 rounded-full font-bold hover:bg-purple-200 transition-all">
                Let''s Talk!
            </button>
        </section>
    )
}