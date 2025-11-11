import { Outlet } from "react-router";
import Text from "../components/text";

export default function LayoutMain() {
  return (
    <>
      <Text variant="title-bold">Layout main!</Text>
      <hr />
      <Outlet />
    </>
  );
}
