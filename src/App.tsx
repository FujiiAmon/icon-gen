import "./App.css";

// import TestPage from "./pages/TestPage2.tsx";
import TestPage from "./pages/TestPage.tsx";

import EditPage from "./pages/EditPage.tsx";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/icon-gen" element={<TestPage />} />
                <Route path="/icon-gen/edit" element={<EditPage />} />
                {/* <TestPage/> */}
            </Routes>

            {/* <GeneratePages /> */}
            {/* <EditPage src="https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"/> */}
            {/* <ExplorePage/> */}
            {/* <RankingPage/> */}
        </>
    );
}

export default App;
