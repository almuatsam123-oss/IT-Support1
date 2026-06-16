const markup = `<section id="maintenancePage" class="app-page hidden">
        <section class="layout-grid maintenance-layout">
          <form id="maintenanceForm" class="panel asset-form">
            <div class="panel-heading"><div><p class="section-label">Maintenance</p><h2>Add maintenance record</h2></div></div>
            <label>Asset<select id="maintenanceAsset" required></select></label>
            <div class="two-col">
              <label>Date<input id="maintenanceDate" type="date" required></label>
              <label>Technician<input id="maintenanceTechnician" type="text" placeholder="Al Motasim"></label>
            </div>
            <div class="used-items-block">
              <div class="toolbar compact-toolbar"><div><p class="section-label">Stock Used</p><h2>Parts and accessories</h2></div><button id="addUsedItemBtn" class="ghost-btn" type="button">Add item</button></div>
              <div id="usedItemsList" class="used-items-list"></div>
            </div>
            <label>Notes<textarea id="maintenanceNotes" rows="3" placeholder="Repair notes, diagnosis, or follow-up action"></textarea></label>
            <button class="primary-btn" type="submit">Save maintenance and update stock</button>
          </form>
          <section class="panel inventory-panel">
            <div class="toolbar"><div><p class="section-label">Maintenance History</p><h2>Records</h2></div><button id="exportMaintenanceBtn" class="secondary-btn" type="button">Export CSV</button></div>
            <div class="table-wrap"><table><thead><tr><th>Date</th><th>Asset</th><th>Technician</th><th>Stock Used</th><th>Notes</th></tr></thead><tbody id="maintenanceTable"></tbody></table></div>
            <div id="maintenanceEmptyState" class="empty-state hidden"><h3>No maintenance records yet</h3><p>Add a record to automatically reduce selected stock quantities.</p></div>
          </section>
        </section>
        <section class="panel inventory-panel related-panel">
          <div class="toolbar"><div><p class="section-label">Issue History</p><h2>Issued stock records</h2></div><button id="maintenanceIssueExportBtn" class="secondary-btn" type="button">Export Issue History CSV</button></div>
          <div class="table-wrap"><table><thead><tr><th>Date</th><th>Item Code</th><th>Item Name</th><th>Quantity Issued</th><th>Issued To</th><th>Department</th><th>Purpose / Reason</th><th>Notes</th></tr></thead><tbody id="maintenanceIssueTable"></tbody></table></div>
        </section>
      </section>`;

export default function MaintenancePage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

