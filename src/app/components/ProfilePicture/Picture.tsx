import Image from "next/image";

export default function Picture() {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src="/Image.jpg" 
          alt="Profile Picture"
          width={192}
          height={192}
          className="w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-purple-900 shadow-2xl shadow-purple-900"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-900 text-center mt-4 font-[Antonsc] drop-shadow-xl">
        Zahim Farooqi
      </h1>

      <div className="text-center mt-2">
        <p className="text-gray-600 font-[Lora] text-sm sm:text-base">
          Karachi, 75300 Pakistan
        </p>
        <p className="text-gray-600 font-[Lora] text-sm sm:text-base">
          +923198081424
        </p>
        <p className="text-gray-600 font-[Lora] text-sm sm:text-base">
          zahimfarooqi@gmail.com
        </p>
      </div>
    </>
  );
}
