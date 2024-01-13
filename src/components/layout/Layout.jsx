import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={StyleSheet.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
