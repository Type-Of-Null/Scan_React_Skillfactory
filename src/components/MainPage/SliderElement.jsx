

export default function SliderElement({ text, image, className }) {
  return (
    <section
      className={`z-1 flex items-center h-[218px] w-[288px] flex-col rounded-[10px] shadow-[0px_0px_20px_0px_#00000033] sm:h-[225px] sm:w-[400px] ${className}`}
    >
      <div className="mt-[22px] ml-[19px] h-[79px] w-[65px] max-sm:w-[50%]">
        <img src={image} alt="Изображение слайдера" className="mt-[8px] mb-[7px] ml-[1px] h-[64px] w-[64px]" />
      </div>
      <div className="default_text mt-[11px] ml-[12px] max-w-[278px] font-['Inter'] text-[18px] font-normal sm:ml-[20px] sm:max-h-[44px] sm:max-w-[313px]">
        {text}
      </div>
    </section>
  );
}
