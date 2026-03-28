import SectionWrapper from "../components/SectionWrapper";
import { TESTIMONIALS } from "../data/testimonials";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <SectionWrapper id="testimonials" className="py-24 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-700 dark:text-green-400">Testimonials</h2>
      <Slider {...settings}>
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="flex flex-col items-center text-center px-6">
            <Image src={t.image} alt={t.name} width={80} height={80} className="rounded-full mb-4 object-cover border-4 border-green-500" />
            <blockquote className="text-lg italic text-zinc-700 dark:text-zinc-200 mb-2">“{t.feedback}”</blockquote>
            <div className="font-bold text-green-700 dark:text-green-400">{t.name}</div>
            <div className="text-sm text-zinc-500">{t.role}</div>
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}
