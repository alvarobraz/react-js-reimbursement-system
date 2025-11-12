import { BrowserRouter, Routes, Route } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PageRefund from "./pages/page-refund";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/refund-request/:id" element={<PageRefund />} />
          <Route path="/refund-request/" element={<PageRefund />} />
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
