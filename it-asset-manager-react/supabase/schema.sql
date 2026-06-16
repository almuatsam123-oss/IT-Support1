create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Requested core tables.
create table if not exists public.employees (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.assets (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.handovers (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.maintenance (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.requests (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.settings (
  key text primary key,
  value jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Additional tables required by the existing modules.
create table if not exists public.stock_items (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.suppliers (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.issue_history (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists employees_set_updated_at on public.employees;
create trigger employees_set_updated_at before update on public.employees
for each row execute function public.set_updated_at();

drop trigger if exists assets_set_updated_at on public.assets;
create trigger assets_set_updated_at before update on public.assets
for each row execute function public.set_updated_at();

drop trigger if exists handovers_set_updated_at on public.handovers;
create trigger handovers_set_updated_at before update on public.handovers
for each row execute function public.set_updated_at();

drop trigger if exists maintenance_set_updated_at on public.maintenance;
create trigger maintenance_set_updated_at before update on public.maintenance
for each row execute function public.set_updated_at();

drop trigger if exists requests_set_updated_at on public.requests;
create trigger requests_set_updated_at before update on public.requests
for each row execute function public.set_updated_at();

drop trigger if exists settings_set_updated_at on public.settings;
create trigger settings_set_updated_at before update on public.settings
for each row execute function public.set_updated_at();

drop trigger if exists stock_items_set_updated_at on public.stock_items;
create trigger stock_items_set_updated_at before update on public.stock_items
for each row execute function public.set_updated_at();

drop trigger if exists suppliers_set_updated_at on public.suppliers;
create trigger suppliers_set_updated_at before update on public.suppliers
for each row execute function public.set_updated_at();

drop trigger if exists audit_logs_set_updated_at on public.audit_logs;
create trigger audit_logs_set_updated_at before update on public.audit_logs
for each row execute function public.set_updated_at();

drop trigger if exists issue_history_set_updated_at on public.issue_history;
create trigger issue_history_set_updated_at before update on public.issue_history
for each row execute function public.set_updated_at();

alter table public.employees enable row level security;
alter table public.assets enable row level security;
alter table public.handovers enable row level security;
alter table public.maintenance enable row level security;
alter table public.requests enable row level security;
alter table public.settings enable row level security;
alter table public.stock_items enable row level security;
alter table public.suppliers enable row level security;
alter table public.audit_logs enable row level security;
alter table public.issue_history enable row level security;

-- Development/demo policies for anon-key CRUD. Tighten these before production with real auth roles.
do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'employees',
    'assets',
    'handovers',
    'maintenance',
    'requests',
    'settings',
    'stock_items',
    'suppliers',
    'audit_logs',
    'issue_history'
  ]
  loop
    execute format('drop policy if exists "%s_anon_crud" on public.%I', table_name, table_name);
    execute format(
      'create policy "%s_anon_crud" on public.%I for all to anon using (true) with check (true)',
      table_name,
      table_name
    );
  end loop;
end $$;

insert into public.employees (id, payload)
values (
  'default-admin',
  '{
    "id": "default-admin",
    "username": "Admin",
    "password": "Amjaad@2026",
    "fullName": "Admin",
    "email": "",
    "role": "Admin",
    "company": "AMJAAD GROUP",
    "department": "Administration",
    "permissions": [
      "Full access to all pages",
      "Can manage assets",
      "Can manage asset handover",
      "Can manage stock / inventory",
      "Can manage requests",
      "Can manage maintenance",
      "Can manage suppliers",
      "Can manage audit log",
      "Can manage reports",
      "Can manage users",
      "Can reset passwords"
    ]
  }'::jsonb
)
on conflict (id) do update set
  payload = public.employees.payload || excluded.payload,
  updated_at = now();
