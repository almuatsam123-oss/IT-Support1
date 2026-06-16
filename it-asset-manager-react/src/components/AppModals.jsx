const markup = `<div id="issueModal" class="modal hidden" role="dialog" aria-modal="true" aria-labelledby="issueModalTitle">
    <form id="issueForm" class="modal-card">
      <div class="modal-header">
        <div>
          <p class="section-label">Issue Item</p>
          <h2 id="issueModalTitle">Issue stock item</h2>
        </div>
        <button id="closeIssueModalBtn" class="ghost-btn" type="button">Close</button>
      </div>
      <input id="issueStockId" type="hidden">
      <div class="two-col">
        <label>Item Name<input id="issueItemName" type="text" readonly></label>
        <label>Available Quantity<input id="issueAvailableQuantity" type="number" readonly></label>
      </div>
      <div class="two-col">
        <label>Quantity to Issue<input id="issueQuantity" type="number" min="1" step="1" value="1" required></label>
        <label>Issue Date<input id="issueDate" type="date" required></label>
      </div>
      <div class="two-col">
        <label>Issued To<input id="issueIssuedTo" type="text" placeholder="Shahad" required></label>
        <label>Department<input id="issueDepartment" type="text" placeholder="Finance"></label>
      </div>
      <label>Purpose / Reason<input id="issuePurpose" type="text" placeholder="Laptop repair or workstation setup"></label>
      <label>Notes<textarea id="issueNotes" rows="3"></textarea></label>
      <button class="primary-btn" type="submit">Save issue and update stock</button>
    </form>
  </div>

  <div id="qrModal" class="modal hidden" role="dialog" aria-modal="true" aria-labelledby="qrModalTitle">
    <div class="modal-card qr-card">
      <div class="modal-header">
        <div><p class="section-label">Asset QR Code</p><h2 id="qrModalTitle">Generate QR Code</h2></div>
        <button id="closeQrModalBtn" class="ghost-btn" type="button">Close</button>
      </div>
      <canvas id="qrCanvas" width="260" height="260" aria-label="Asset QR code"></canvas>
      <pre id="qrPayload" class="qr-payload"></pre>
      <div class="report-actions">
        <button id="downloadQrBtn" class="secondary-btn" type="button">Download PNG</button>
        <button id="printQrBtn" class="secondary-btn" type="button">Print QR Code</button>
      </div>
    </div>
  </div>

  <div id="passwordModal" class="modal hidden" role="dialog" aria-modal="true" aria-labelledby="passwordModalTitle">
    <form id="resetPasswordForm" class="modal-card">
      <div class="modal-header">
        <div><p class="section-label">Reset Password</p><h2 id="passwordModalTitle">Reset Password</h2></div>
        <button id="closePasswordModalBtn" class="ghost-btn" type="button">Close</button>
      </div>
      <input id="passwordUserId" type="hidden">
      <label>User<input id="passwordUserName" type="text" readonly></label>
      <label>New Password<input id="newPassword" type="password" required placeholder="Enter new password"></label>
    </form>
  </div>`;

export default function AppModals() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

