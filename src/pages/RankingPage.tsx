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

const sampleIcons = ["https://images.unsplash.com/photo-1708738743926-4e2413fd4258?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1471488738053-f147befc0689?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1504697200476-72afc388a101?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541689221361-ad95003448dc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1665952050057-49931a9c1f3b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1539613119332-934546db1e0e?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1539613119332-934546db1e0e?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


]

const sampleIconsData: IconData[] = Array.from({length: sampleIcons.length}, (_, i) => ({
    src: sampleIcons[i],
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
                           
                                    <img src={item.src} alt="random image" className="w-24 h-24 rounded-full object-cover hover:scale-105 transition focus:"/>
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