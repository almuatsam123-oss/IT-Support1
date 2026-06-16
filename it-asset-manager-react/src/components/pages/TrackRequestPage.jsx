const markup = `<section id="trackRequestPage" class="app-page hidden">
        <section class="panel inventory-panel">
          <div class="toolbar"><div><p class="section-label">Track Request</p><h2>Request lookup</h2></div></div>
          <div class="filters"><label class="search-field"><span>Request Number</span><input id="trackRequestSearch" type="search" placeholder="REQ-2026-00001"></label></div>
          <div class="table-wrap"><table><thead><tr><th>Request Number</th><th>Request Status</th><th>Priority</th><th>Assigned IT Staff</th><th>Last Update</th><th>Comments</th><th>Attachments</th><th>Completion Date</th></tr></thead><tbody id="trackRequestTable"></tbody></table></div>
        </section>
      </section>`;

export default function TrackRequestPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

