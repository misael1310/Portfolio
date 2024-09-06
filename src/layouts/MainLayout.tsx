import Header from "../components/Header";

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
