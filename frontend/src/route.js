import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageMain from "./pages/pageMain";
import NotFound from "./pages/NotFound";


function AppRoute() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageMain/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;
