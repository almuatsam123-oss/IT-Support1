const markup = `<section id="stockPage" class="app-page hidden">
        <section class="layout-grid stock-layout">
          <form id="stockForm" class="panel asset-form">
            <div class="panel-heading">
              <div><p class="section-label">Stock Details</p><h2 id="stockFormTitle">Add stock item</h2></div>
              <button type="button" id="cancelStockEditBtn" class="ghost-btn hidden">Cancel edit</button>
            </div>

            <div class="two-col">
              <label>Item Code<input id="stockItemCode" type="text" placeholder="RAM-016" required></label>
              <label>Item Name<input id="stockItemName" type="text" placeholder="RAM 16GB" required></label>
            </div>
            <div class="two-col">
              <label>Category<select id="stockCategory" required></select></label>
              <label>Brand<input id="stockBrand" type="text" placeholder="Kingston"></label>
            </div>
            <div class="two-col">
              <label>Model<input id="stockModel" type="text" placeholder="DDR4-3200"></label>
              <label>Store Location<input id="stockLocation" type="text" placeholder="Main IT Store"></label>
            </div>
            <label>Specification<input id="stockSpecification" type="text" placeholder="16GB DDR4 SODIMM"></label>
            <div class="two-col">
              <label>Quantity<input id="stockQuantity" type="number" min="0" step="1" value="0" required></label>
              <label>Minimum Stock Level<input id="stockMinLevel" type="number" min="0" step="1" value="0" required></label>
            </div>
            <div class="two-col">
              <label>Supplier<input id="stockSupplier" type="text" placeholder="Amjaad Technology Supplier"></label>
              <label>Purchase Date<input id="stockPurchaseDate" type="date"></label>
            </div>
            <div class="two-col">
              <label>Purchase Cost (OMR)<input id="stockPurchaseCost" type="number" min="0" step="0.001" placeholder="0.000"></label>
              <label>Invoice Number<input id="stockInvoiceNumber" type="text" placeholder="INV-2026-001"></label>
            </div>
            <div class="two-col">
              <label>Warranty Expiry Date<input id="stockWarrantyExpiry" type="date"></label>
              <label>Status<select id="stockStatus" required><option>Available</option><option>Reserved</option><option>Discontinued</option></select></label>
            </div>
            <label>Notes<textarea id="stockNotes" rows="3" placeholder="Supplier, warranty, reorder reference, or other notes"></textarea></label>
            <button class="primary-btn" type="submit" id="stockSubmitBtn">Add stock item</button>
          </form>

          <section class="panel inventory-panel">
            <div class="toolbar">
              <div><p class="section-label">Inventory</p><h2>Items</h2></div>
              <button id="exportStockBtn" class="secondary-btn" type="button">Export Stock CSV</button>
            </div>
            <div class="filters stock-filters">
              <label class="search-field"><span>Search</span><input id="stockSearchInput" type="search" placeholder="Search code, item, brand, supplier..."></label>
              <label>Category<select id="stockCategoryFilter"></select></label>
              <label>Stock Level<select id="lowStockFilter"><option value="All">All stock</option><option value="Low">Low stock only</option></select></label>
            </div>
            <div class="table-wrap">
              <table class="stock-table">
                <thead><tr><th>Item</th><th>Category</th><th>Brand / Model</th><th>Qty</th><th>Min</th><th>Supplier</th><th>Purchase</th><th>Warranty</th><th>Location</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody id="stockTable"></tbody>
              </table>
            </div>
            <div id="stockEmptyState" class="empty-state hidden"><h3>No stock items found</h3><p>Add an item or adjust the current search and filters.</p></div>
          </section>
        </section>
      </section>`;

export default function StockPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

