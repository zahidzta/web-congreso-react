function IndexPage() {
  return (
    <div className="w-screen">
        <div className="bg-[#111111] md:flex m-5 p-8 rounded-md md:justify-between">
            <div className="">
                <div>
                    <h1 className="text-6xl font-black">Bienvenido <br /> al congreso <br /> <span className="bg-white text-[#111] rounded-md">2025</span></h1>
                    <p className="text-[#797979] font-semibold">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sed impedit magni <br /> est consequatur, sunt amet!</p>
                </div>
                <div className="space-x-4">
                    <button className="bg-white text-[#111] font-medium rounded-full py-1 px-4 cursor-pointer">Lorem</button>
                    <button className="border-white border-1 font-medium rounded-full py-1 px-4 cursor-pointer">Lorem</button>
                </div>
            </div>
            <div className="space-y-5">
                <img 
                    className="w-lg rounded-lg"
                    src="https://cdn.prod.website-files.com/67500bfb33a314962eac96e5/67531311359326e09191a2de_hero01.avif" 
                    alt="img-congreso" />
                <div className="flex justify-around">
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