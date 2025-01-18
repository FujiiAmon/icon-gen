import React, { useEffect, useRef } from "react";
import LoadingSkeleton from "./LoadingSkeleton";


type IconData = {
    src: string,
    downloadCount: number,
}

export function useHorizontalScroll(): React.RefObject<HTMLDivElement> {
    const elRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e: WheelEvent) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
        };
  
        el.addEventListener("wheel", onWheel);
  
        return () => {
          el.removeEventListener("wheel", onWheel);
        };
      }
    }, []);
  
    return elRef;
  }

const sampleIconsData: IconData[] = Array.from({length: 30}, (_, i) => ({
    src: `https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg`,
    downloadCount: Math.floor(Math.random() * 100),
}))

const RankingPage: React.FC = () => {
    const [icons, setIcons] = React.useState(sampleIconsData);
    const [isLoading, setLoading] = React.useState(true);

    const scrollContainerRef = useHorizontalScroll();

    const fetchIcons = async () => {    
        try{
            sampleIconsData.sort((a, b) => b.downloadCount - a.downloadCount);
            setIcons(sampleIconsData);
        }catch(error){
            console.log("Failed to fetch icons", error);
            
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchIcons();
    
    }, []);
    


    return (
        <div  className="m-4 space-y-4 flex flex-col items-center justify-center ">
                    <div ref={scrollContainerRef}className="flex overflow-x-auto space-x-4 w-full snap-x snap-mandatory" >
                    
                       

                        {icons.map((item, index) => (
                            <div key={index} className={`first:scale-100 scale-75 snap-center shrink-0 p-4`}>
                                <LoadingSkeleton isLoading={isLoading}>
                           
                                    <img src={item.src} alt="random image" className="w-24 h-24 rounded-full object-cover "/>
                            </LoadingSkeleton>

                            {index === 0 && (
                                <div className="absolute -top-[0.075rem] -right-[0.075rem] w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                                        />
                                    </svg>
                                </div>
                            )}

                            <div className="flex flex-col items-center justify-center text-white">
                                <span className="text-lg font-bold">{index + 1}</span>
                                <span className="text-sm">Downloads: {item.downloadCount}</span>
                                </div>
                            </div>
                            
                        ))}
                       
                    </div>
            </div>



    )
}

export default RankingPage;