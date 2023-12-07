import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageMain from "./pages/pageMain";
import NotFound from "./pages/NotFound";
import DialogUpdate from "./dialogs/dialogUpdate";
import { useSelector } from "react-redux";


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
