const markup = `<section id="auditLogPage" class="app-page hidden">
        <section class="panel inventory-panel">
          <div class="toolbar"><div><p class="section-label">Audit Log</p><h2>System activity</h2></div><button id="exportAuditBtn" class="secondary-btn" type="button">Export CSV</button></div>
          <div class="filters"><label class="search-field"><span>Search</span><input id="auditSearchInput" type="search" placeholder="Search user, action, details..."></label></div>
          <div class="table-wrap"><table><thead><tr><th>Date and Time</th><th>User / Technician</th><th>Action Type</th><th>Details</th></tr></thead><tbody id="auditTable"></tbody></table></div>
          <div id="auditEmptyState" class="empty-state hidden"><h3>No audit records yet</h3><p>Important actions will appear here automatically.</p></div>
        </section>
      </section>`;

export default function AuditLogPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

