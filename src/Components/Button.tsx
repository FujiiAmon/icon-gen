// 汎用ボタンコンポーネント
import React from 'react'

const Button: React.FC = () => {
    return (
        <button type="button" className="focus:shadow-md focus:outline-none text-white bg-violet-500 hover:bg-violet-600 focus:ring-4  focus:ring-violet-300  font-medium active:bg-violet-700 rounded-lg text-sm px-4 py-2 m-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:bg-violet-600 dark:focus:ring-purple-900">Generate</button>
    )
}

export default Button