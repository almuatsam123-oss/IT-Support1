const markup = `<section id="settingsPage" class="app-page hidden">
        <section class="panel dashboard-panel">
          <form id="settingsForm">
            <div class="toolbar"><div><p class="section-label">Settings</p><h2>System settings</h2></div></div>
            <div class="two-col">
              <label>System Name<input id="settingsSystemName" type="text" value="Amjaad Asset & Inventory Management"></label>
              <label>Default Language<select id="settingsDefaultLanguage"><option value="en">English</option><option value="ar">العربية</option></select></label>
            </div>
          </form>
        </section>
      </section>`;

export default function SettingsPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

