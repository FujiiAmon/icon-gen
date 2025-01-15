import React from "react";


type LoadingSleletonProps = {
    isLoading: boolean;
    children: React.ReactNode;
}

const LoadingSleleton: React.FC<LoadingSleletonProps> = ({isLoading, children}) => {

    return (
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            {children}
        </div>
    )
}

export default LoadingSleleton;