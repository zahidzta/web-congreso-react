function IndexPage() {
  return (
    <div>
        <div className="bg-[#111111] lg:flex m-3 md:m-10 p-5 md:pb-10 md:px-20 rounded-md md:justify-between items-center space-y-15">
            <div className="space-y-10 flex flex-col items-center">
                <div className="space-y-5">
                    <h1 className="flex flex-wrap gap-3 text-4xl sm:text-5xl md:6xl lg:text-7xl leading-snug font-bold max-w-[400px]">
                        <span>Bienvenido</span><span>al</span><span>congreso</span>
                        <span className="bg-white text-[#111] rounded-md px-2">2025</span>
                    </h1>
                    <p className="text-[#797979] font-semibold">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sed impedit magni <br /> est consequatur, sunt amet!</p>
                </div>
                
                <div className="space-x-5">
                    <button className="bg-white text-[#111] font-medium rounded-full py-1 px-4 cursor-pointer">Lorem</button>
                    <button className="border-white border-1 font-medium rounded-full py-1 px-4 cursor-pointer">Lorem</button>
                </div>
                
            </div>
            <div className="space-y-5 flex flex-col items-center">
                <img 
                    className="w-lg rounded-lg"
                    src="https://cdn.prod.website-files.com/67500bfb33a314962eac96e5/67531311359326e09191a2de_hero01.avif" 
                    alt="img-congreso" />
                <div className="flex justify-around flex-wrap gap-2">
                    {/*Crear un vector*/}
                    <button className="border-[#797979] border-1 py-1 px-2 rounded-full">Email Marketing</button>
                    <button className="border-[#797979] border-1 py-1 px-2 rounded-full">Social Media</button>
                    <button className="border-[#797979] border-1 py-1 px-2 rounded-full">SEO Services</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndexPage