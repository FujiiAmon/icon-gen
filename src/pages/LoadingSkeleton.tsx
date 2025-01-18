import React, { ReactNode, ReactElement, isValidElement } from "react";

interface LoadingSkeletonProps {
  isLoading: boolean;
  children: ReactNode;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ isLoading, children }) => {
  
  const renderSkeleton = (child: ReactNode): ReactNode => {
    if (!isValidElement(child)) return child;

    // `<img>` タグの場合、スケルトンを表示
    // <img>タグは下の画像が透けるみたい
    if (child.type === "img") {
        // childrenがclassNameのみを使ってスタイリングしている前提
        const { className } = child.props;
        return (
          <div
            className={`${className || ""} bg-gray-300 animate-pulse`}
            
          ></div>
        );
      }

    // 他の要素の場合、スケルトンスタイルを適用
    return React.cloneElement(child as ReactElement, {
      className: `${(child.props.className || "")} bg-gray-300 rounded-md animate-pulse`,
      style: {
        ...(child.props.style || {}),
        color: "transparent",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
      },
    });
  };

  return (
    <div>
      {isLoading
        ? React.Children.map(children, (child) => renderSkeleton(child)) // 子要素をスケルトン化
        : <div className="animate-fade">
            {children}
            </div>}
    </div>
  );
};

export default LoadingSkeleton;

// import React from "react";


// type LoadingSleletonProps = {
//     isLoading: boolean;
//     children: React.ReactNode;
// }

// const LoadingSleleton: React.FC<LoadingSleletonProps> = ({isLoading, children}) => {

//     return (
//         <div>

//             {isLoading ? (
//                 <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
//                     {children}
                
//                 </div>
                
//             ):(
//                 <div>
//                     {children}
//                 </div>
//             )}
            
//         </div>
    
//     )
// }

// export default LoadingSleleton;