import Sidebar from '@components/sidebar/Sidebar';
import Navbar from '@components/navbar/Navbar';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex lg:h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-scroll">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}
