import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import Providers from "@/components/admin-panel/Providers";
export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <AdminPanelLayout>{children}</AdminPanelLayout>
    </Providers>
  );
}
