import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import GeneratePages from "./Components/GeneratePage.tsx";
import APIRequestTest from "./Components/APIRequestTest.tsx";

// import TestPage from "./pages/TestPage2.tsx";
import TestPage from "./pages/TestPage.tsx";
import TestPage2 from "./pages/TestPage2.tsx";
import EditPage from "./pages/EditPage.tsx";
import ExplorePage from "./pages/ExplorePage.tsx";
function App() {
    return (
        <>
            {/* <GeneratePages /> */}
            {/* <TestPage/> */}
            <EditPage src="https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"/>
            {/* <ExplorePage/> */}
        </>
    );
}

export default App;
