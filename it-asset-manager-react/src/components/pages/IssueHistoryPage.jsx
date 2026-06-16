const markup = `<section id="issueHistoryPage" class="app-page hidden">
        <section class="panel inventory-panel">
          <div class="toolbar"><div><p class="section-label">Issue History</p><h2>Issued stock records</h2></div><button id="exportIssueHistoryBtn" class="secondary-btn" type="button">Export CSV</button></div>
          <div class="filters">
            <label class="search-field"><span>Search</span><input id="issueSearchInput" type="search" placeholder="Search item, person, department, purpose..."></label>
            <label>Department<input id="issueDepartmentFilter" type="search" placeholder="All departments"></label>
          </div>
          <div class="table-wrap"><table><thead><tr><th>Date</th><th>Item Code</th><th>Item Name</th><th>Quantity Issued</th><th>Issued To</th><th>Department</th><th>Purpose / Reason</th><th>Notes</th></tr></thead><tbody id="issueHistoryTable"></tbody></table></div>
          <div id="issueHistoryEmptyState" class="empty-state hidden"><h3>No issue records found</h3><p>Issue stock from the Inventory page to create history.</p></div>
        </section>
      </section>`;

export default function IssueHistoryPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

