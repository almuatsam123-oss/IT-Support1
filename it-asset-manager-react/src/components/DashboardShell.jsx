import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import AssetsPage from "./pages/AssetsPage.jsx";
import StockPage from "./pages/StockPage.jsx";
import MaintenancePage from "./pages/MaintenancePage.jsx";
import IssueHistoryPage from "./pages/IssueHistoryPage.jsx";
import SuppliersPage from "./pages/SuppliersPage.jsx";
import AuditLogPage from "./pages/AuditLogPage.jsx";
import SubmitRequestPage from "./pages/SubmitRequestPage.jsx";
import TrackRequestPage from "./pages/TrackRequestPage.jsx";
import ServiceDeskPage from "./pages/ServiceDeskPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import ReportsPage from "./pages/ReportsPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

export default function DashboardShell() {
  return (
    <div className="dashboard-shell">
      <Sidebar />
      <main className="app-shell">
        <Topbar />
        <DashboardPage />
        <AssetsPage />
        <StockPage />
        <MaintenancePage />
        <IssueHistoryPage />
        <SuppliersPage />
        <AuditLogPage />
        <SubmitRequestPage />
        <TrackRequestPage />
        <ServiceDeskPage />
        <UsersPage />
        <ReportsPage />
        <SettingsPage />
      </main>
    </div>
  );
}

