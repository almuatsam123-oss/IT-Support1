const markup = `<section id="reportsPage" class="app-page hidden">
        <section class="panel dashboard-panel">
          <div class="toolbar"><div><p class="section-label">Reports</p><h2>Export center</h2></div></div>
          <div class="filters stock-filters">
            <label class="search-field"><span>Employee</span><input id="reportEmployeeFilter" type="search" placeholder="Employee name"></label>
            <label>Company<select id="reportCompanyFilter"></select></label>
            <label>Asset Type<select id="reportAssetTypeFilter"></select></label>
            <label>Status<select id="reportStatusFilter"><option value="All">All statuses</option><option>Active</option><option>Assigned</option><option>In Storage</option><option>Maintenance</option><option>Retired</option></select></label>
          </div>
          <div class="report-actions">
            <button id="reportExportAssetsBtn" class="secondary-btn" type="button">Export Assets CSV</button>
            <button id="reportExportFilteredAssetsBtn" class="secondary-btn" type="button">Export Filtered Asset Report</button>
            <button id="reportExportStockBtn" class="secondary-btn" type="button">Export Stock CSV</button>
            <button id="reportExportMaintenanceBtn" class="secondary-btn" type="button">Export Maintenance CSV</button>
            <button id="reportExportIssuesBtn" class="secondary-btn" type="button">Export Issue History CSV</button>
            <button id="reportExportAuditBtn" class="secondary-btn" type="button">Export Audit Log CSV</button>
          </div>
        </section>
      </section>`;

export default function ReportsPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

