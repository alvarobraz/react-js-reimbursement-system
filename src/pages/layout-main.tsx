import { Outlet } from "react-router";
import MainHeader from "../components/main-header";
import MainContent from "../components/main-content";
import { Link, useLocation } from "react-router";

export default function LayoutMain() {
  const { pathname } = useLocation();

  return (
    <>
      <MainHeader className="mx-auto mt-9" />
      <div className="flex justify-center items-center">
        <MainContent size={pathname.includes("refund") ? "sm" : "md"}>
          <Outlet />
        </MainContent>
      </div>
    </>
  );
}
