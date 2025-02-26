{/* 1️⃣ Centering text and ensuring proper spacing on all screens */}
<div className="flex justify-center mt-8 sm:mt-6 md:mt-10 lg:mt-12">
  <h2 className="font-mono text-sm sm:text-base md:text-lg lg:text-xl">
    I Love to Learn The New Technologies.
  </h2>
</div>

{/* 2️⃣ Image positioning with responsiveness */}
<div className="flex justify-center sm:justify-end -mt-32 sm:-mt-40 md:-mt-48 lg:-mt-64 mx-4 sm:mx-12 md:mx-20 lg:mx-24">
  <img
    className="h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 object-cover"
    src={image}
    alt="Coding"
  />
</div>

