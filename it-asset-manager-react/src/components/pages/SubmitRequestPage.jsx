const markup = `<section id="submitRequestPage" class="app-page hidden">
        <section class="layout-grid">
          <form id="requestForm" class="panel asset-form">
            <div class="panel-heading"><div><p class="section-label">IT Helpdesk & Service Desk</p><h2>Submit IT Request</h2></div></div>
            <p class="hero-copy">Employee Information</p>
            <label>Employee Name<input id="requesterName" type="text" required placeholder="Employee name"></label>
            <label>Employee ID<input id="requestEmployeeId" type="text" required placeholder="EMP-001"></label>
            <div class="two-col">
              <label>Department<input id="requestDepartment" type="text" placeholder="Department"></label>
              <label>Site / Location<input id="requestSite" type="text" placeholder="Head Office"></label>
            </div>
            <div class="two-col">
              <label>Mobile Number<input id="requestMobile" type="tel" required placeholder="+971..."></label>
              <label>Email (optional)<input id="requestEmail" type="email" placeholder="employee@example.com"></label>
            </div>
            <p class="hero-copy">Request Information</p>
            <label>Category<select id="requestCategory" required></select></label>
            <label>Request Type<input id="requestType" type="text" required placeholder="Request type"></label>
            <label>Priority<select id="requestPriority"><option>Low</option><option>Medium</option><option>High</option><option>Urgent</option></select></label>
            <label>Subject<input id="requestSubject" type="text" required placeholder="Short request subject"></label>
            <label>Description<textarea id="requestDetails" rows="4" required placeholder="Describe the request"></textarea></label>
            <label>Upload Image / PDF<input id="requestAttachments" type="file" accept="image/*,.pdf" multiple></label>
            <div id="requestSuccess" class="success-panel hidden"></div>
          </form>

          <section class="panel inventory-panel">
            <div class="toolbar"><div><p class="section-label">Public Request</p><h2>Submission Guide</h2></div></div>
            <div class="empty-state compact-empty"><h3>Submit without login</h3><p>Employees can create IT requests and track them using the generated request number.</p></div>
            <div id="requestEmptyState" class="empty-state hidden"><h3>No requests found</h3><p>Submitted requests will appear here.</p></div>
          </section>
        </section>
      </section>`;

export default function SubmitRequestPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

