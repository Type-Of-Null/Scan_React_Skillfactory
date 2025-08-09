export default function SliderElement({ text, image, className }) {
  return (
    <section
      className={`z-1 flex h-[218px] flex-col items-center rounded-[10px] shadow-[0px_0px_20px_0px_#00000033] sm:h-[225px] sm:w-1/3 ${className}`}
    >
      <div className="mt-2 flex h-[79px] items-center justify-center">
        <img
          src={image}
          alt="Изображение слайдера"
          className="mt-[8px] mb-[7px] ml-[1px] h-[64px] w-[64px]"
        />
      </div>
      <div className="default_text mt-2 max-w-[278px] text-center font-['Inter'] text-[16px] font-normal sm:max-h-[44px] sm:max-w-[313px] sm:text-[18px] p-4">
        {text}
      </div>
    </section>
  );
}
