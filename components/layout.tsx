import ResponsiveAppBar from "./responsiveAppBar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean; // home prop remains, though not used in this basic layout
}) {
  return (
    <>
      <ResponsiveAppBar />
      <main className="mx-auto max-w-screen-lg px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
