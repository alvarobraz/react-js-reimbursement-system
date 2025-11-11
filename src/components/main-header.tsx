import Container from "./container";
import Logo from "../assets/images/logo-refund.svg?react";
import { Link, useLocation } from "react-router";
import cx from "classnames";
import Button from "./button";
import Text from "./text";
// import PhotosSearch from "./photos-search";

// import PhotoNewDialog from "../contexts/photos/components/photo-new-dialog";
// import AlbumNewDialog from "../contexts/albums/components/album-new-dialog";

interface MainHeaderProps extends React.ComponentProps<typeof Container> {}

export default function MainHeader({ className, ...props }: MainHeaderProps) {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between items-center w-[74.0625rem] gap-10 mx-auto px-0 mt-10">
      <Link to="/">
        <Logo className="h-7" />
      </Link>

      <div className="flex items-center gap-8">
        <Link
          to="/"
          className={pathname === "/" ? "text-green-100 gap-4" : "gap-4"}
        >
          Solicitações de reenbolso
        </Link>
        <Button variant="primary" size="sm">
          Nova Solicitação
        </Button>
      </div>
    </div>
  );
}
