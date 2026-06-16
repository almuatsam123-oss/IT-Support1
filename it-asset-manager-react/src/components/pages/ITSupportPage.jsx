const markup = `<section id="itSupportPage" class="app-page hidden">
        <section class="summary-grid executive-summary">
          <article class="summary-card"><span class="card-icon">T</span><p>Total Tickets</p><strong id="itSupportTotalTickets">0</strong></article>
          <article class="summary-card warning"><span class="card-icon">O</span><p>Open</p><strong id="itSupportOpenTickets">0</strong></article>
          <article class="summary-card"><span class="card-icon">P</span><p>In Progress</p><strong id="itSupportProgressTickets">0</strong></article>
          <article class="summary-card"><span class="card-icon">C</span><p>Closed</p><strong id="itSupportClosedTickets">0</strong></article>
        </section>

        <section class="asset-layout">
          <form id="itSupportTicketForm" class="panel asset-form">
            <div class="form-header">
              <div><p class="section-label">IT Support Tickets</p><h2>Create Ticket</h2></div>
              <button class="ghost-btn hidden" id="cancelItSupportTicketEditBtn" type="button">Cancel edit</button>
            </div>
            <div class="form-grid">
              <label>Ticket ID<input id="itSupportTicketId" type="text" readonly></label>
              <label>Created Date<input id="itSupportCreatedDate" type="date" required></label>
              <label>Employee Name<input id="itSupportEmployeeName" type="text" required placeholder="Employee Name"></label>
              <label>Department<input id="itSupportDepartment" type="text" required placeholder="Department"></label>
              <label>Category<select id="itSupportCategory" required>
                <option value="">Choose category</option>
                <option>Hardware</option>
                <option>Software</option>
                <option>Network</option>
                <option>Email</option>
                <option>Printer</option>
                <option>Access Request</option>
                <option>Other</option>
              </select></label>
              <label>Priority<select id="itSupportPriority" required>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select></label>
              <label>Status<select id="itSupportStatus">
                <option>Open</option>
                <option>In Progress</option>
                <option>Pending</option>
                <option>Resolved</option>
                <option>Closed</option>
              </select></label>
              <label class="full-width">Description<textarea id="itSupportDescription" rows="4" required placeholder="Description"></textarea></label>
            </div>
            <div class="form-actions">
              <button class="primary-btn" id="itSupportSubmitBtn" type="submit">Create Ticket</button>
              <button class="secondary-btn" type="reset">Reset Form</button>
            </div>
          </form>

          <section class="panel inventory-panel">
            <div class="toolbar">
              <div><p class="section-label">Tickets Dashboard</p><h2>IT Support Tickets</h2></div>
              <button class="ghost-btn" id="exportItSupportTicketsBtn" type="button">Export CSV</button>
            </div>
            <div class="filters stock-filters">
              <label class="search-field"><span>Search</span><input id="itSupportSearchInput" type="search" placeholder="Search tickets..."></label>
              <label>Status<select id="itSupportStatusFilter"><option value="All">All statuses</option></select></label>
              <label>Category<select id="itSupportCategoryFilter"><option value="All">All categories</option></select></label>
              <label>Priority<select id="itSupportPriorityFilter"><option value="All">All priorities</option></select></label>
            </div>
            <div class="table-wrap"><table class="stock-table"><thead><tr><th>Ticket ID</th><th>Employee Name</th><th>Department</th><th>Category</th><th>Priority</th><th>Status</th><th>Created Date</th><th>Description</th><th>Actions</th></tr></thead><tbody id="itSupportTicketTable"></tbody></table></div>
            <div id="itSupportTicketEmptyState" class="empty-state hidden"><h3>No tickets found</h3><p>Create a support ticket or adjust the current search and filters.</p></div>
          </section>
        </section>
      </section>`;

export default function ITSupportPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
