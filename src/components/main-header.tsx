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
    <Container
      as="header"
      className={cx("flex justify-between items-center gap-10", className)}
      {...props}
    >
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
    </Container>
  );
}
