import Header from "../components/common/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Header />

      <main>{props.children}</main>
    </>
  );
}

export { MainLayout };
