const markup = `<section id="assetsPage" class="app-page hidden">
        <section class="layout-grid">
          <form id="assetForm" class="panel asset-form">
            <div class="panel-heading">
              <div>
                <p class="section-label">Asset Details</p>
                <h2 id="formTitle">Add IT asset</h2>
              </div>
              <button type="button" id="cancelEditBtn" class="ghost-btn hidden">Cancel edit</button>
            </div>

            <label>Asset name<input id="assetName" type="text" placeholder="MacBook Pro 14" required></label>
            <label>Asset tag<input id="assetTag" type="text" placeholder="IT-1024" required></label>

            <div class="two-col">
              <label>
                Device Type
                <select id="assetCategory" required>
                  <option value="">Choose category</option>
                  <option>Laptop</option><option>Desktop</option><option>Monitor</option><option>Phone</option><option>Tablet</option><option>Network</option><option>Peripheral</option><option>Software</option><option>Other</option>
                </select>
              </label>
              <label>Brand<input id="assetBrand" type="text" placeholder="Apple"></label>
            </div>

            <div class="two-col">
              <label>Model<input id="assetModel" type="text" placeholder="A2442"></label>
              <label>Serial Number<input id="assetSerial" type="text" placeholder="C02ABC123"></label>
            </div>

            <div class="two-col">
              <label>Assigned Employee<input id="assetEmployee" type="text" placeholder="Employee name"></label>
              <label>Employee ID<input id="assetEmployeeId" type="text" placeholder="EMP-001"></label>
            </div>

            <div class="two-col">
              <label>Company<select id="assetCompany"></select></label>
              <label>Department<input id="assetDepartment" type="text" placeholder="IT"></label>
            </div>

            <div class="two-col">
              <label>Location<input id="assetLocation" type="text" placeholder="Head Office"></label>
              <label>Purchase date<input id="purchaseDate" type="date"></label>
            </div>

            <div class="two-col">
              <label>Delivery Date<input id="deliveryDate" type="date"></label>
              <label>
                Status
                <select id="assetStatus" required>
                  <option>Active</option><option>Assigned</option><option>In Storage</option><option>Maintenance</option><option>Retired</option>
                </select>
              </label>
            </div>

            <label>Notes<textarea id="assetNotes" rows="3" placeholder="Warranty, location, or other context"></textarea></label>
            <button class="primary-btn" type="submit" id="submitBtn">Add asset</button>
          </form>

          <section class="panel inventory-panel">
            <div class="toolbar">
              <div>
                <p class="section-label">Inventory</p>
                <h2>Assets</h2>
              </div>
              <button id="exportBtn" class="secondary-btn" type="button">Export CSV</button>
            </div>
            <div class="filters">
              <label class="search-field"><span>Search</span><input id="searchInput" type="search" placeholder="Search name, tag, employee, company, category..."></label>
              <label>Company<select id="assetCompanyFilter"></select></label>
              <label>Status<select id="statusFilter"><option value="All">All statuses</option><option>Active</option><option>Assigned</option><option>In Storage</option><option>Maintenance</option><option>Retired</option></select></label>
            </div>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Asset</th><th>Tag</th><th>Type</th><th>Brand / Model</th><th>Employee Name</th><th>Company</th><th>Status</th><th>Purchased</th><th>Delivery Date</th><th>Actions</th></tr></thead>
                <tbody id="assetTable"></tbody>
              </table>
            </div>
            <div id="emptyState" class="empty-state hidden"><h3>No assets found</h3><p>Add your first IT asset or adjust the current search and filter.</p></div>
          </section>
        </section>
      </section>`;

export default function AssetsPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

