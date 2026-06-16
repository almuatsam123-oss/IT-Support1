const markup = `<header class="topbar">
        <div class="topbar-title">
          <p class="eyebrow">AMJAAD GROUP</p>
          <h1 id="pageTitle">IT Asset Management System</h1>
        </div>
        <div class="topbar-actions">
          <button class="icon-btn notification-btn" type="button" aria-label="Notifications">🔔<span>6</span></button>
          <label class="language-switcher">
            <span>Language</span>
            <select id="languageSelect" aria-label="Language">
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </label>
          <div class="company-switcher fixed-company" aria-label="Company">
            <span>Company</span>
            <strong id="topCompanySelect">AMJAAD GROUP</strong>
          </div>
          <div id="userProfile" class="user-profile">
            <div class="user-avatar">AG</div>
            <strong id="currentUserName">Admin</strong>
            <small id="currentUserRole">Admin</small>
          </div>
          <button id="logoutBtn" class="ghost-btn" type="button">Logout</button>
          <button id="quickExportBtn" class="secondary-btn" type="button">Export Current View</button>
        </div>
      </header>`;

export default function Topbar() {
  return <div className='contents' dangerouslySetInnerHTML={{ __html: markup }} />;
}

