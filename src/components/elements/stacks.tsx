import { stacks } from "../../content/stacks.json";

const Stacks = () => {
   console.log(stacks);
   return (
      <div
         className="px-14 xl:px-4 py-12 lg:py-20 xl:py-28 relative z-20"
         id="stacks"
      >
         <section className="mx-auto max-w-[1080px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12">
               I built the web with
            </h2>

            <div className="flex flex-row flex-wrap gap-x-24 gap-y-14">
               {stacks.map((stack, index) => (
                  <div key={index} className="">
                     <h3 className="text-xl mb-4">{stack.groupName}</h3>

                     <ul className="flex flex-row flex-wrap items-center gap-4">
                        {stack.items.map((item, jndex) => (
                           <li key={jndex} className="relative group">
                              <figure className="w-[75px] h-[75px] rounded-full bg-white shadow-[0px_6px_21px_0px_rgba(0,0,0,0.25)] mb-8"></figure>
                              <p className="text-md lg:text-lg font-bold absolute left-1/2 transform -translate-x-1/2 text-center w-40 text-black bottom-0 lg:opacity-0 group-hover:opacity-100 transition duration-200 ease-[cubic-bezier(0.175,0.885,0.320,1.275)] group-hover:translate-y-0 lg:-translate-y-2">
                                 {item.name}
                              </p>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </section>
      </div>
   );
};

export default Stacks;
