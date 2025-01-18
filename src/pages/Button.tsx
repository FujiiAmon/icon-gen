import React from "react"

// PropでIconを受け取るようにする


export type ButtonProps = {
    name?: string,
    onClick: () => void,
}
const Button: React.FC<ButtonProps> = ({name, onClick}) =>{
    
    

    return (

        <button type="button" className="font-medium text-white rounded-lg text-sm px-4 py-2  bg-violet-600 hover:bg-violet-700  active:bg-violet-800 active:scale-105"
        onClick={onClick}>
            {/* <svg></svg> */}
            <span>{name}</span>
        </button>
    )
}

export default Button;


// focus:shadow-md focus:outline-none focus:ring-4 focus:ring-violet-300focus:bg-violet-600 dark:focus:ring-purple-900

// 