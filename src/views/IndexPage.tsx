import { categories, imagesAreas } from "../data/categories.ts"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function SampleNextArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }


function IndexPage() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <div>
        <section className="bg-[#111111] grid grid-cols-1 sm:grid-cols-2 items-center m-3 md:m-10 p-5 md:pb-10 md:px-20 rounded-md gap-10">

            <div className="space-y-10 flex flex-col items-center">
                <div className="space-y-5">
                    <h1 className="flex flex-wrap gap-3 text-4xl sm:text-5xl md:6xl lg:text-7xl leading-snug font-bold max-w-[400px]">
                        <span>Bienvenido</span><span>al</span><span>congreso</span>
                        <span className="bg-white text-[#111] rounded-md px-2">2025</span>
                    </h1>
                    <p className="text-[#797979] font-semibold">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sed impedit magni <br /> est consequatur, sunt amet!</p>
                </div>
                
                <div className="space-x-10">
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
                    { categories.map(category => (
                        <button key={category.id} className="border-[#797979] border-1 py-1 px-2 rounded-full">{category.name}</button>
                    ))}
                </div>
            </div>
            
            <div className="sm:col-span-2 w-full mx-auto my-5">
                <Slider {...settings}>
                    {imagesAreas.map(imageArea => (
                        <img key={imageArea.id} className="w-15 h-15 invert-50 object-contain" src={`areas/${imageArea.image}`} alt="img-area" />
                    ))}
                </Slider>
            </div>

        </section>
        
    </div>
  )
}

export default IndexPage