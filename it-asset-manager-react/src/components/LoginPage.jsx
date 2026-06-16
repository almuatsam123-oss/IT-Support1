const markup = `<section id="loginPage" class="login-page">
    <form id="loginForm" class="login-card">
      <div class="brand-block login-brand">
        <div class="logo-mark">AG</div>
        <div>
          <strong>Amjaad Asset & Inventory Management</strong>
          <span>Secure access portal</span>
        </div>
      </div>
      <div>
        <p class="section-label">Login</p>
        <h1>Welcome back</h1>
      </div>
      <label>Username<input id="loginUsername" type="text" autocomplete="username" required></label>
      <label>Password<input id="loginPassword" type="password" autocomplete="current-password" required></label>
      <p id="loginError" class="form-error hidden">Invalid username or password.</p>
      <button class="primary-btn" type="submit">Login</button>
      <div class="public-links">
        <button type="button" class="ghost-btn" data-public-page="submitRequestPage">Submit Request</button>
        <button type="button" class="ghost-btn" data-public-page="trackRequestPage">Track Request</button>
      </div>
    </form>
  </section>`;

export default function LoginPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

