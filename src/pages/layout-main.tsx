import { Outlet } from "react-router";
import MainHeader from "../components/main-header";
import MainContent from "../components/main-content";
import { Link, useLocation } from "react-router";

export default function LayoutMain() {
  const { pathname } = useLocation();
  if (pathname.includes("refund-details")) {
    console.log("✅ O path contém 'refund-details'");
  }

  return (
    <>
      <MainHeader className="mx-auto mt-9" />
      <div className="flex justify-center items-center">
        <MainContent size={pathname.includes("refund-details") ? "sm" : "md"}>
          <Outlet />
        </MainContent>
      </div>
    </>
  );
}
