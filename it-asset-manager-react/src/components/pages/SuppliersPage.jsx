const markup = `<section id="suppliersPage" class="app-page hidden">
        <section class="layout-grid">
          <form id="supplierForm" class="panel asset-form">
            <div class="panel-heading"><div><p class="section-label">Supplier Details</p><h2 id="supplierFormTitle">Add supplier</h2></div><button type="button" id="cancelSupplierEditBtn" class="ghost-btn hidden">Cancel edit</button></div>
            <label>Supplier Name<input id="supplierName" type="text" required placeholder="Technology Supplier LLC"></label>
            <label>Contact Person<input id="supplierContact" type="text" placeholder="Procurement Manager"></label>
            <div class="two-col">
              <label>Phone Number<input id="supplierPhone" type="tel" placeholder="+971..."></label>
              <label>Email<input id="supplierEmail" type="email" placeholder="supplier@example.com"></label>
            </div>
            <label>Address<input id="supplierAddress" type="text" placeholder="Dubai, UAE"></label>
            <label>Items Supplied<input id="supplierItems" type="text" placeholder="RAM, SSD, Chargers"></label>
            <label>Notes<textarea id="supplierNotes" rows="3"></textarea></label>
            <button class="primary-btn" type="submit" id="supplierSubmitBtn">Add supplier</button>
          </form>
          <section class="panel inventory-panel">
            <div class="toolbar"><div><p class="section-label">Suppliers</p><h2>Vendor directory</h2></div></div>
            <div class="filters"><label class="search-field"><span>Search</span><input id="supplierSearchInput" type="search" placeholder="Search supplier, contact, items..."></label></div>
            <div class="table-wrap"><table><thead><tr><th>Supplier</th><th>Contact</th><th>Phone</th><th>Email</th><th>Items Supplied</th><th>Actions</th></tr></thead><tbody id="supplierTable"></tbody></table></div>
            <div id="supplierEmptyState" class="empty-state hidden"><h3>No suppliers found</h3><p>Add suppliers to build a procurement directory.</p></div>
          </section>
        </section>
      </section>`;

export default function SuppliersPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

