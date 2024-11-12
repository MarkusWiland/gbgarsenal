import DashboardHeader from "./_components/dashboardHeader";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        <DashboardHeader /> 
        {children}
      </main>
  );
}
