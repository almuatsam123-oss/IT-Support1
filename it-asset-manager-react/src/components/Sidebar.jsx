const markup = `<aside class="sidebar">
      <div class="brand-block">
        <div class="logo-mark">AG</div>
        <div>
          <strong>AMJAAD GROUP</strong>
          <span>IT Asset Management</span>
        </div>
      </div>

      <nav class="sidebar-nav" aria-label="Primary navigation">
        <button class="active" type="button" data-page="dashboardPage">Dashboard</button>
        <button type="button" data-page="assetsPage">Assets</button>
        <button type="button" data-page="stockPage">Stock / Inventory</button>
        <button type="button" data-page="maintenancePage">Maintenance</button>
        <button type="button" data-page="suppliersPage">Suppliers</button>
        <button type="button" data-page="serviceDeskPage">Service Desk</button>
        <button type="button" data-page="itSupportPage">IT Support</button>
        <button type="button" data-page="usersPage">Users</button>
        <button type="button" data-page="reportsPage">Reports</button>
        <button type="button" data-page="settingsPage">Settings</button>
      </nav>

      <div class="sidebar-card">
        <p>Portfolio View</p>
        <strong>Corporate IT</strong>
        <span>Live asset, stock, issue, supplier, and maintenance tracking.</span>
      </div>
    </aside>`;

export default function Sidebar() {
  return <div className='contents' dangerouslySetInnerHTML={{ __html: markup }} />;
}

