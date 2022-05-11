const Introduction = () => {
   return (
      <div className="min-h-[calc(100vh-133px)] relative overflow-hidden px-10 sm:px-4 flex items-center">
         <div className="max-w-5xl mx-auto relative z-20">
            <h1 className="text-black text-center text-4xl sm:text-5xl lg:text-7xl font-bold">
               Hi ! I'm Logan,
               <br />
               Front-end Developper
            </h1>

            <img
               src="/images/humans.svg"
               alt="humans"
               className="w-full h-auto mt-12 max-w-[689px]"
            />
         </div>

         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1611px] h-[592px]">
            <img
               src="/images/words.svg"
               alt="Words of stacks"
               className="w-full h-full object-cover"
            />
         </div>
      </div>
   );
};

export default Introduction;
