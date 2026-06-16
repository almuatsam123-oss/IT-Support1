const markup = `<section id="usersPage" class="app-page hidden">
        <section class="layout-grid">
          <form id="userForm" class="panel asset-form">
            <div class="panel-heading"><div><p class="section-label">User Management</p><h2 id="userFormTitle">Add User</h2></div><button type="button" id="cancelUserEditBtn" class="ghost-btn hidden">Cancel edit</button></div>
            <label>Full Name<input id="userFullName" type="text" required placeholder="User full name"></label>
            <div class="two-col">
              <label>Email<input id="userEmail" type="email" required placeholder="user@example.com"></label>
              <label>Role<select id="userRole"><option>Admin</option><option>Technician</option><option>Viewer</option></select></label>
            </div>
            <div class="two-col">
              <label>Company<select id="userCompany"></select></label>
              <label>Department<input id="userDepartment" type="text" placeholder="Department"></label>
            </div>
          </form>

          <section class="panel inventory-panel">
            <div class="toolbar"><div><p class="section-label">Users</p><h2>System users</h2></div></div>
            <div class="table-wrap"><table><thead><tr><th>Username</th><th>Password</th><th>Company</th><th>Role</th><th>Permissions</th><th>Actions</th></tr></thead><tbody id="userTable"></tbody></table></div>
            <div id="userEmptyState" class="empty-state hidden"><h3>No users found</h3><p>Add users to manage system access.</p></div>
          </section>
        </section>
      </section>`;

export default function UsersPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

