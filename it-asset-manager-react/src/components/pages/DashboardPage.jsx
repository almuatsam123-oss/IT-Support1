const markup = `<section id="dashboardPage" class="app-page">
        <section class="welcome-panel dashboard-hero-compact">
          <div class="amjaad-banner-copy">
            <span class="banner-kicker">AMJAAD GROUP</span>
            <h2>IT Asset Management System</h2>
            <p>Technology assets, managed with executive clarity.</p>
            <small>Premium corporate command center for assets, inventory, maintenance, and IT service operations.</small>
          </div>
          <div class="amjaad-banner-mark" aria-hidden="true">
            <span>AG</span>
          </div>
        </section>

        <section class="summary-grid executive-summary dashboard-kpis">
          <article class="summary-card">
            <span class="card-icon">TA</span>
            <p>Total Assets</p>
            <strong id="dashboardTotalAssets">0</strong>
            <a href="#assetsPage" data-page-link="assetsPage">View All</a>
          </article>
          <article class="summary-card">
            <span class="card-icon">UA</span>
            <p>Unassigned Assets</p>
            <strong id="dashboardUnassignedAssets">0</strong>
            <a href="#assetsPage" data-page-link="assetsPage">View All</a>
          </article>
          <article class="summary-card">
            <span class="card-icon">UM</span>
            <p>Under Maintenance</p>
            <strong id="itemsUnderMaintenance">0</strong>
            <a href="#maintenancePage" data-page-link="maintenancePage">View All</a>
          </article>
          <article class="summary-card">
            <span class="card-icon">OS</span>
            <p>Open Support Tickets</p>
            <strong id="dashboardOpenTickets">0</strong>
            <a href="#serviceDeskPage" data-page-link="serviceDeskPage">View All</a>
          </article>
        </section>

        <section class="dashboard-main-grid">
          <section class="panel dashboard-panel chart-panel">
            <div class="toolbar">
              <div>
                <h2>Assets by Status</h2>
                <p class="section-label">Assets by Status</p>
              </div>
            </div>
            <div class="chart-card-body">
              <div id="assetStatusDonut" class="donut-chart"></div>
              <div id="assetStatusLegend" class="chart-legend"></div>
            </div>
          </section>

          <section class="panel dashboard-panel recent-panel">
            <div class="toolbar">
              <a href="#assetsPage" data-page-link="assetsPage">View All</a>
              <div>
                <h2>Recent Assets</h2>
                <p class="section-label">Recent Assets</p>
              </div>
            </div>
            <div class="table-wrap compact-table">
              <table>
                <thead><tr><th>Asset</th><th>Type</th><th>User</th><th>Company</th><th>Date Added</th></tr></thead>
                <tbody id="dashboardRecentAssets"></tbody>
              </table>
            </div>
          </section>
        </section>

        <section class="dashboard-bottom-grid">
          <section class="panel dashboard-panel recent-activity-panel">
            <div class="toolbar">
              <a href="#auditLogPage" data-page-link="auditLogPage">View All</a>
              <div>
                <h2>Recent Activity</h2>
                <p class="section-label">System activity</p>
              </div>
            </div>
            <div class="table-wrap compact-table">
              <table>
                <thead><tr><th>Date and Time</th><th>User / Technician</th><th>Action Type</th><th>Details</th></tr></thead>
                <tbody id="dashboardRecentActivity"></tbody>
              </table>
            </div>
          </section>

          <section class="panel dashboard-panel">
            <div class="toolbar">
              <a href="#serviceDeskPage" data-page-link="serviceDeskPage">View All</a>
              <div>
                <h2>Recent Support Tickets</h2>
                <p class="section-label">Recent Support Tickets</p>
              </div>
            </div>
            <div class="table-wrap compact-table">
              <table>
                <thead><tr><th>Ticket #</th><th>Subject</th><th>User</th><th>Status</th><th>Created Date</th></tr></thead>
                <tbody id="dashboardTickets"></tbody>
              </table>
            </div>
          </section>
        </section>

        <section class="dashboard-bottom-grid dashboard-stock-row">
          <section class="panel dashboard-panel">
            <div class="toolbar">
              <a href="#stockPage" data-page-link="stockPage">View All</a>
              <div>
                <h2>Low Stock Items</h2>
                <p class="section-label">Low Stock Items</p>
              </div>
            </div>
            <div class="table-wrap compact-table">
              <table>
                <thead><tr><th>Item</th><th>Min Level</th><th>Available Qty</th><th>Status</th></tr></thead>
                <tbody id="dashboardLowStockTable"></tbody>
              </table>
            </div>
          </section>
        </section>

        <footer class="dashboard-footer">
          <span>All rights reserved © 2026 IT Asset & Inventory Management System</span>
          <span>System Version 1.0.0</span>
        </footer>

        <div class="hidden">
          <span id="totalAssets">0</span>
          <span id="activeAssets">0</span>
          <span id="maintenanceAssets">0</span>
          <span id="totalStockItems">0</span>
          <span id="lowStockItems">0</span>
          <span id="itemsIssuedToday">0</span>
          <span id="ramAvailable">0</span>
          <span id="ssdAvailable">0</span>
          <span id="cablesAvailable">0</span>
          <div id="lowStockList"></div>
        </div>
      </section>`;

export default function DashboardPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
