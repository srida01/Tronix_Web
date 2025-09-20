import { useNavigation, Outlet } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <Loader />}
      <Outlet /> {/* This renders the current page */}
    </>
  );
}

export default AppLayout;