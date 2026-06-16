const markup = `<section id="serviceDeskPage" class="app-page hidden">
        <section class="summary-grid executive-summary">
          <article class="summary-card"><span class="card-icon">N</span><p>New Tickets</p><strong id="newTickets">0</strong></article>
          <article class="summary-card"><span class="card-icon">O</span><p>Open Tickets</p><strong id="openTickets">0</strong></article>
          <article class="summary-card warning"><span class="card-icon">H</span><p>High Priority Tickets</p><strong id="highPriorityTickets">0</strong></article>
          <article class="summary-card"><span class="card-icon">W</span><p>Waiting for User</p><strong id="waitingUserTickets">0</strong></article>
          <article class="summary-card"><span class="card-icon">R</span><p>Resolved Today</p><strong id="resolvedTodayTickets">0</strong></article>
        </section>
        <section class="panel inventory-panel">
          <div class="toolbar">
            <div><p class="section-label">IT Helpdesk & Service Desk</p><h2>Tickets</h2></div>
            <div class="report-actions">
              <button class="ghost-btn" type="button" data-public-page="submitRequestPage">Submit IT Request</button>
              <button class="ghost-btn" type="button" data-public-page="trackRequestPage">Track Request</button>
              <span id="ticketBadge" class="notification-badge">0 New</span>
            </div>
          </div>
          <div class="filters stock-filters">
            <label class="search-field"><span>Search</span><input id="ticketSearchInput" type="search" placeholder="Search tickets..."></label>
            <label>Status<select id="ticketStatusFilter"><option value="All">All statuses</option></select></label>
            <label>Department<input id="ticketDepartmentFilter" type="search" placeholder="All departments"></label>
            <label>Site<input id="ticketSiteFilter" type="search" placeholder="All sites"></label>
            <label>Priority<select id="ticketPriorityFilter"><option value="All">All priorities</option><option>Low</option><option>Medium</option><option>High</option><option>Urgent</option></select></label>
            <label>Category<select id="ticketCategoryFilter"><option value="All">All categories</option></select></label>
          </div>
          <div class="table-wrap"><table class="stock-table"><thead><tr><th>Request Number</th><th>Employee</th><th>Department</th><th>Site</th><th>Category</th><th>Priority</th><th>Status</th><th>Assigned IT Staff</th><th>Last Update</th><th>Actions</th></tr></thead><tbody id="ticketTable"></tbody></table></div>
          <div id="ticketEmptyState" class="empty-state hidden"><h3>No tickets found</h3><p>Submitted IT requests will appear here.</p></div>
        </section>
      </section>`;

export default function ServiceDeskPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

