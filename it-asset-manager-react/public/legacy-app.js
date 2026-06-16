const STORAGE_KEYS = {
  assets: "itAssetManager.assets",
  stock: "itAssetManager.stockItems",
  maintenance: "itAssetManager.maintenanceRecords",
  issues: "itAssetManager.issueHistory",
  suppliers: "itAssetManager.suppliers",
  audit: "itAssetManager.auditLog",
  handovers: "itAssetManager.handovers",
  language: "itAssetManager.language",
  requests: "itAssetManager.requests",
  requestDraft: "itAssetManager.requestDraft",
  users: "itAssetManager.users",
  session: "amjaad_logged_in_user",
  ticketCounter: "itAssetManager.ticketCounter"
};

const currentUser = "Al Motasim";
const stockCategories = ["RAM", "SSD", "HDD", "Keyboard", "Mouse", "Laptop Bag", "Charger", "HDMI Cable", "DisplayPort Cable", "LAN Cable", "USB Adapter", "Docking Station", "Printer Toner", "Other"];
const serviceCategories = ["Hardware Issue", "Software Issue", "Printer Issue", "Network Issue", "Email Issue", "Laptop Request", "Desktop Request", "RAM Upgrade", "SSD Upgrade", "Software Installation", "Software License", "General IT Support", "Other"];
const ticketStatuses = ["New", "Assigned", "In Progress", "Waiting for User", "Waiting for Parts", "Resolved", "Closed"];
const companyList = ["AMJAAD GROUP", "MASHEED", "RAZEEN", "LIOWAN", "AMJAAD DEVELOPMENT"];
const LOCALE_FILES = { en: "locales/en.json", ar: "locales/ar.json" };
const translations = {
  ar: {
    "Amjaad Asset & Inventory Management": "إدارة أصول ومخزون أمجاد",
    "Corporate IT Command": "مركز قيادة تقنية المعلومات",
    "Dashboard": "لوحة التحكم",
    "Assets": "الأصول",
    "Stock / Inventory": "المخزون",
    "Inventory": "المخزون",
    "Maintenance": "الصيانة",
    "Issue History": "سجل الصرف",
    "Suppliers": "الموردون",
    "Audit Log": "سجل التدقيق",
    "Reports": "التقارير",
    "Portfolio View": "عرض المحفظة",
    "Corporate IT": "تقنية معلومات الشركات",
    "Live asset, stock, issue, supplier, and maintenance tracking.": "متابعة مباشرة للأصول والمخزون والصرف والموردين والصيانة.",
    "Amjaad IT Tracking System": "نظام أمجاد لتتبع تقنية المعلومات",
    "Technology assets, managed with executive clarity.": "إدارة الأصول التقنية بوضوح تنفيذي.",
    "IT Asset Management System": "نظام إدارة الأصول التقنية",
    "Premium corporate command center for assets, inventory, maintenance, and IT service operations.": "مركز قيادة مؤسسي لإدارة الأصول والمخزون والصيانة وخدمات تقنية المعلومات.",
    "Asset registry and QR identification.": "سجل الأصول والتعريف برمز QR.",
    "Stock inventory with purchasing and issue controls.": "إدارة المخزون مع الشراء والصرف.",
    "Maintenance records connected to stock usage.": "سجلات الصيانة المرتبطة باستخدام المخزون.",
    "Issued stock history and departmental tracking.": "سجل صرف المخزون وتتبع الإدارات.",
    "Supplier directory for procurement visibility.": "دليل الموردين لتعزيز وضوح المشتريات.",
    "Audit trail for important IT operations.": "سجل تدقيق لعمليات تقنية المعلومات المهمة.",
    "Corporate exports for asset and inventory reporting.": "تصديرات مؤسسية لتقارير الأصول والمخزون.",
    "Language": "اللغة",
    "English": "English",
    "العربية": "العربية",
    "Export Current View": "تصدير العرض الحالي",
    "Total Assets": "إجمالي الأصول",
    "Total Stock Items": "إجمالي عناصر المخزون",
    "Low Stock Alerts": "تنبيهات انخفاض المخزون",
    "Items Issued Today": "العناصر المصروفة اليوم",
    "Items Under Maintenance": "العناصر تحت الصيانة",
    "A polished corporate dashboard for assets, inventory stock, low stock alerts, suppliers, issue history, audit activity, and maintenance usage with browser-based storage.": "لوحة تحكم مؤسسية للأصول والمخزون وتنبيهات الانخفاض والموردين وسجل الصرف والتدقيق والصيانة مع تخزين داخل المتصفح.",
    "Total assets": "إجمالي الأصول",
    "Active": "نشط",
    "RAM Available": "ذاكرة RAM متاحة",
    "SSD Available": "أقراص SSD متاحة",
    "Cables Available": "كيابل متاحة",
    "Stock Alerts": "تنبيهات المخزون",
    "Low stock watchlist": "قائمة مراقبة انخفاض المخزون",
    "Local browser storage": "تخزين محلي في المتصفح",
    "Asset Details": "تفاصيل الأصل",
    "Add IT asset": "إضافة أصل تقني",
    "Edit IT asset": "تعديل أصل تقني",
    "Cancel edit": "إلغاء التعديل",
    "Asset name": "اسم الأصل",
    "Asset tag": "رمز الأصل",
    "Device Type": "نوع الجهاز",
    "Choose category": "اختر التصنيف",
    "Laptop": "حاسب محمول",
    "Desktop": "حاسب مكتبي",
    "Monitor": "شاشة",
    "Phone": "هاتف",
    "Tablet": "جهاز لوحي",
    "Network": "شبكات",
    "Peripheral": "ملحقات",
    "Software": "برمجيات",
    "Other": "أخرى",
    "RAM": "ذاكرة RAM",
    "SSD": "قرص SSD",
    "HDD": "قرص HDD",
    "Keyboard": "لوحة مفاتيح",
    "Mouse": "فأرة",
    "Laptop Bag": "حقيبة حاسب محمول",
    "Charger": "شاحن",
    "HDMI Cable": "كيبل HDMI",
    "DisplayPort Cable": "كيبل DisplayPort",
    "LAN Cable": "كيبل شبكة",
    "USB Adapter": "محول USB",
    "Docking Station": "قاعدة توصيل",
    "Printer Toner": "حبر طابعة",
    "Brand": "العلامة التجارية",
    "Model": "الموديل",
    "Serial Number": "الرقم التسلسلي",
    "Assigned to": "اسم الموظف",
    "Purchase date": "تاريخ الشراء",
    "Status": "الحالة",
    "In Storage": "في المخزن",
    "Retired": "متقاعد",
    "Notes": "ملاحظات",
    "Add asset": "إضافة أصل",
    "Save changes": "حفظ التغييرات",
    "Inventory": "الجرد",
    "Export CSV": "تصدير CSV",
    "Search": "بحث",
    "All statuses": "كل الحالات",
    "All categories": "كل التصنيفات",
    "Asset": "الأصل",
    "Tag": "الرمز",
    "Type": "النوع",
    "Brand / Model": "العلامة / الموديل",
    "Assigned": "المخصص له",
    "Purchased": "تاريخ الشراء",
    "Actions": "الإجراءات",
    "No assets found": "لم يتم العثور على أصول",
    "Add your first IT asset or adjust the current search and filter.": "أضف أول أصل تقني أو عدّل البحث والفلتر الحالي.",
    "Stock Details": "تفاصيل المخزون",
    "Add stock item": "إضافة عنصر مخزون",
    "Edit stock item": "تعديل عنصر مخزون",
    "Save stock changes": "حفظ تعديلات المخزون",
    "Item Code": "رمز العنصر",
    "Item Name": "اسم العنصر",
    "Category": "التصنيف",
    "Store Location": "موقع التخزين",
    "Specification": "المواصفات",
    "Quantity": "الكمية",
    "Minimum Stock Level": "حد المخزون الأدنى",
    "Supplier": "المورد",
    "Purchase Date": "تاريخ الشراء",
    "Purchase Cost": "تكلفة الشراء",
    "Purchase Cost (OMR)": "تكلفة الشراء (ر.ع.)",
    "Invoice Number": "رقم الفاتورة",
    "Warranty Expiry Date": "تاريخ انتهاء الضمان",
    "Available": "متاح",
    "Reserved": "محجوز",
    "Discontinued": "متوقف",
    "Items": "العناصر",
    "Export Stock CSV": "تصدير المخزون CSV",
    "Stock Level": "مستوى المخزون",
    "All stock": "كل المخزون",
    "Low stock only": "منخفض فقط",
    "Qty": "الكمية",
    "Min": "الحد الأدنى",
    "Purchase": "الشراء",
    "Warranty": "الضمان",
    "Location": "الموقع",
    "No stock items found": "لم يتم العثور على عناصر مخزون",
    "Add an item or adjust the current search and filters.": "أضف عنصرًا أو عدّل البحث والفلاتر الحالية.",
    "Add maintenance record": "إضافة سجل صيانة",
    "Date": "التاريخ",
    "Technician": "الفني",
    "Stock Used": "المخزون المستخدم",
    "Stock item used": "عنصر المخزون المستخدم",
    "Quantity used": "الكمية المستخدمة",
    "Parts and accessories": "القطع والملحقات",
    "Add item": "إضافة عنصر",
    "Save maintenance and update stock": "حفظ الصيانة وتحديث المخزون",
    "Maintenance History": "سجل الصيانة",
    "Records": "السجلات",
    "No maintenance records yet": "لا توجد سجلات صيانة بعد",
    "Add a record to automatically reduce selected stock quantities.": "أضف سجلًا ليتم خصم كميات المخزون المحددة تلقائيًا.",
    "Issued stock records": "سجلات صرف المخزون",
    "Department": "القسم",
    "Item Code": "رمز العنصر",
    "Quantity Issued": "الكمية المصروفة",
    "Issued To": "مصروف إلى",
    "Purpose / Reason": "الغرض / السبب",
    "No issue records found": "لم يتم العثور على سجلات صرف",
    "Issue stock from the Stock / Inventory page to create history.": "اصرف المخزون من صفحة المخزون لإنشاء السجل.",
    "Issue stock from the Inventory page to create history.": "اصرف المخزون من صفحة المخزون لإنشاء السجل.",
    "Supplier Details": "تفاصيل المورد",
    "Add supplier": "إضافة مورد",
    "Edit supplier": "تعديل مورد",
    "Save supplier": "حفظ المورد",
    "Supplier Name": "اسم المورد",
    "Contact Person": "الشخص المسؤول",
    "Phone Number": "رقم الهاتف",
    "Email": "البريد الإلكتروني",
    "Address": "العنوان",
    "Items Supplied": "العناصر الموردة",
    "Vendor directory": "دليل الموردين",
    "Contact": "جهة الاتصال",
    "Phone": "الهاتف",
    "No suppliers found": "لم يتم العثور على موردين",
    "Add suppliers to build a procurement directory.": "أضف الموردين لبناء دليل مشتريات.",
    "System activity": "نشاط النظام",
    "Date and Time": "التاريخ والوقت",
    "User / Technician": "المستخدم / الفني",
    "Action Type": "نوع الإجراء",
    "Details": "التفاصيل",
    "No audit records yet": "لا توجد سجلات تدقيق بعد",
    "Important actions will appear here automatically.": "ستظهر الإجراءات المهمة هنا تلقائيًا.",
    "Export center": "مركز التصدير",
    "Export Assets CSV": "تصدير الأصول CSV",
    "Export Maintenance CSV": "تصدير الصيانة CSV",
    "Export Issue History CSV": "تصدير سجل الصرف CSV",
    "Export Audit Log CSV": "تصدير سجل التدقيق CSV",
    "Issue Item": "صرف عنصر",
    "Issue stock item": "صرف عنصر مخزون",
    "Close": "إغلاق",
    "Available Quantity": "الكمية المتاحة",
    "Quantity to Issue": "الكمية المراد صرفها",
    "Issue Date": "تاريخ الصرف",
    "Save issue and update stock": "حفظ الصرف وتحديث المخزون",
    "Asset QR Code": "رمز QR للأصل",
    "Generate QR Code": "إنشاء رمز QR",
    "Download PNG": "تنزيل PNG",
    "Print QR Code": "طباعة رمز QR",
    "Edit": "تعديل",
    "Delete": "حذف",
    "Issue": "صرف",
    "QR": "QR",
    "Remove": "إزالة",
    "Low Stock": "مخزون منخفض",
    "No low stock alerts": "لا توجد تنبيهات انخفاض",
    "All inventory levels are above the minimum threshold.": "كل مستويات المخزون أعلى من الحد الأدنى.",
    "No serial number": "لا يوجد رقم تسلسلي",
    "Not set": "غير محدد",
    "Unassigned": "غير مخصص",
    "No specification": "لا توجد مواصفات",
    "No notes": "لا توجد ملاحظات",
    "No address": "لا يوجد عنوان",
    "None": "لا شيء",
    "Asset ID": "معرّف الأصل",
    "Assigned Employee": "المخصص للموظف",
    "Choose asset": "اختر الأصل",
    "Choose stock item": "اختر عنصر مخزون",
    "available": "متاح",
    "Please choose an asset for this maintenance record.": "يرجى اختيار أصل لسجل الصيانة.",
    "Quantity to issue must be between 1 and the available quantity.": "يجب أن تكون كمية الصرف بين 1 والكمية المتاحة.",
    "does not have enough available quantity.": "لا يحتوي على كمية كافية متاحة.",
    "Delete": "حذف",
    "Search name, tag, user, category...": "ابحث بالاسم أو الرمز أو المستخدم أو التصنيف...",
    "Search code, item, brand, supplier...": "ابحث بالرمز أو العنصر أو العلامة أو المورد...",
    "Search item, person, department, purpose...": "ابحث بالعنصر أو الشخص أو القسم أو الغرض...",
    "All departments": "كل الأقسام",
    "Search supplier, contact, items...": "ابحث بالمورد أو جهة الاتصال أو العناصر...",
    "Search user, action, details...": "ابحث بالمستخدم أو الإجراء أو التفاصيل...",
    "Technology Supplier LLC": "شركة توريد التقنية",
    "Procurement Manager": "مدير المشتريات",
    "Dubai, UAE": "دبي، الإمارات",
    "RAM, SSD, Chargers": "RAM، SSD، شواحن",
    "Laptop repair or workstation setup": "إصلاح حاسب محمول أو تجهيز محطة عمل",
    "Repair notes, diagnosis, or follow-up action": "ملاحظات الإصلاح أو التشخيص أو إجراء المتابعة",
    "Supplier, warranty, reorder reference, or other notes": "المورد أو الضمان أو مرجع إعادة الطلب أو ملاحظات أخرى",
    "Warranty, location, or other context": "الضمان أو الموقع أو أي سياق آخر",
    "Main IT Store": "مخزن تقنية المعلومات الرئيسي",
    "Amjaad Technology Supplier": "مورد تقنية أمجاد"
    ,"Add Asset": "إضافة أصل",
    "Edit Asset": "تعديل أصل",
    "Delete Asset": "حذف أصل",
    "Add Stock Item": "إضافة عنصر مخزون",
    "Edit Stock Item": "تعديل عنصر مخزون",
    "Delete Stock Item": "حذف عنصر مخزون",
    "Issued Stock": "صرف مخزون",
    "Add Maintenance Record": "إضافة سجل صيانة",
    "Add Supplier": "إضافة مورد",
    "Edit Supplier": "تعديل مورد",
    "Delete Supplier": "حذف مورد"
  }
};
const reverseTranslations = Object.fromEntries(Object.entries(translations.ar).map(([en, ar]) => [ar, en]));
Object.assign(translations.ar, {
  "Submit Request": "إرسال طلب",
  "Track Request": "تتبع الطلب",
  "Users": "المستخدمون",
  "Save": "حفظ",
  "Save & New": "حفظ وجديد",
  "Cancel": "إلغاء",
  "Reset Form": "مسح النموذج",
  "Reset Form?": "هل تريد مسح النموذج؟",
  "Saved successfully": "تم الحفظ بنجاح",
  "Updated successfully": "تم التحديث بنجاح",
  "Request submitted successfully": "تم إرسال الطلب بنجاح",
  "Password reset successfully": "تم إعادة تعيين كلمة المرور بنجاح",
  "Are you sure you want to delete this record?": "هل أنت متأكد أنك تريد حذف هذا السجل؟",
  "You have unsaved changes. Are you sure you want to leave?": "لديك تغييرات غير محفوظة. هل أنت متأكد أنك تريد المغادرة؟",
  "Restore unsaved draft?": "هل تريد استرجاع المسودة غير المحفوظة؟",
  "Draft restored": "تم استرجاع المسودة",
  "Duplicate": "تكرار",
  "Submit and manage IT service requests.": "إرسال وإدارة طلبات خدمات تقنية المعلومات.",
  "Track request status and details.": "تتبع حالة الطلب وتفاصيله.",
  "Manage users and password resets.": "إدارة المستخدمين وإعادة تعيين كلمات المرور.",
  "Public Request Form": "نموذج الطلب العام",
  "Request Management": "إدارة الطلبات",
  "Requests": "الطلبات",
  "Requester Name": "اسم مقدم الطلب",
  "Request Type": "نوع الطلب",
  "Priority": "الأولوية",
  "Normal": "عادي",
  "High": "مرتفع",
  "Urgent": "عاجل",
  "Submitted": "مرسل",
  "Closed": "مغلق",
  "Request lookup": "البحث عن طلب",
  "No requests found": "لم يتم العثور على طلبات",
  "Submitted requests will appear here.": "ستظهر الطلبات المرسلة هنا.",
  "User Management": "إدارة المستخدمين",
  "Add User": "إضافة مستخدم",
  "Edit User": "تعديل مستخدم",
  "Full Name": "الاسم الكامل",
  "Role": "الدور",
  "Admin": "مدير",
  "Technician": "فني",
  "Viewer": "مشاهد",
  "System users": "مستخدمو النظام",
  "Reset Password": "إعادة تعيين كلمة المرور",
  "New Password": "كلمة المرور الجديدة",
  "No users found": "لم يتم العثور على مستخدمين",
  "Add users to manage system access.": "أضف مستخدمين لإدارة صلاحيات النظام.",
  "Submit Request": "إرسال طلب",
  "New Asset": "أصل جديد",
  "Stock Item": "عنصر مخزون",
  "Access": "صلاحية دخول",
  "Employee name": "اسم الموظف",
  "employee@example.com": "employee@example.com",
  "Choose request type": "اختر نوع الطلب",
  "Describe the request": "اكتب تفاصيل الطلب",
  "Search requester, type, status...": "ابحث باسم مقدم الطلب أو النوع أو الحالة...",
  "Save new record": "حفظ سجل جديد",
  "Update record": "تحديث سجل",
  "Reset form": "مسح النموذج",
  "Cancel with unsaved changes": "إلغاء مع تغييرات غير محفوظة",
  "Delete confirmed": "تأكيد الحذف",
  "Draft restored": "استرجاع المسودة",
  "Draft discarded": "حذف المسودة",
  "Stock item duplicated": "تكرار عنصر مخزون",
  "Request Management actions": "إجراءات إدارة الطلبات"
});
Object.assign(translations.ar, {
  "Login": "تسجيل الدخول",
  "Logout": "تسجيل الخروج",
  "Welcome back": "مرحبًا بعودتك",
  "Secure access portal": "بوابة دخول آمنة",
  "Username": "اسم المستخدم",
  "Password": "كلمة المرور",
    "Invalid username or password.": "اسم المستخدم أو كلمة المرور غير صحيحة.",
    "Item code already exists.": "رمز العنصر موجود مسبقاً.",
    "Quantity and minimum stock level must be zero or greater.": "يجب أن تكون الكمية والحد الأدنى للمخزون صفراً أو أكثر.",
    "Purchase cost must be zero or greater.": "يجب أن تكون تكلفة الشراء صفراً أو أكثر.",
    "Please enter a valid mobile number.": "يرجى إدخال رقم جوال صحيح.",
    "Please enter a valid email address.": "يرجى إدخال بريد إلكتروني صحيح.",
    "Only image and PDF attachments are allowed.": "المرفقات المسموحة هي الصور وملفات PDF فقط.",
    "Each attachment must be 10 MB or less.": "يجب ألا يتجاوز حجم كل مرفق 10 ميجابايت.",
    "Exported successfully": "تم التصدير بنجاح",
  "Settings": "الإعدادات",
  "System settings": "إعدادات النظام",
  "System settings and preferences.": "إعدادات النظام والتفضيلات.",
  "System Name": "اسم النظام",
  "Default Language": "اللغة الافتراضية",
  "Are you sure you want to reset this form?": "هل أنت متأكد أنك تريد إعادة تعيين هذا النموذج؟"
});
Object.assign(translations.ar, {
  "IT Helpdesk & Service Desk": "مكتب مساعدة وخدمات تقنية المعلومات",
  "Submit IT Request": "إرسال طلب تقنية معلومات",
  "Employee Information": "معلومات الموظف",
  "Employee Name": "اسم الموظف",
  "Employee ID": "رقم الموظف",
  "Site / Location": "الموقع",
  "Mobile Number": "رقم الجوال",
  "Email (optional)": "البريد الإلكتروني (اختياري)",
  "Request Information": "معلومات الطلب",
  "Subject": "الموضوع",
  "Description": "الوصف",
  "Upload Image / PDF": "رفع صورة / PDF",
  "Request submitted successfully.": "تم إرسال الطلب بنجاح.",
  "Your Request Number is:": "رقم الطلب هو:",
  "Request Number": "رقم الطلب",
  "Request Status": "حالة الطلب",
  "Assigned IT Staff": "موظف تقنية المعلومات المسؤول",
  "Last Update": "آخر تحديث",
  "Comments": "التعليقات",
  "Attachments": "المرفقات",
  "Completion Date": "تاريخ الإنجاز",
    "Service Desk": "خدمات الدعم",
  "Tickets": "التذاكر",
  "New Tickets": "التذاكر الجديدة",
  "Open Tickets": "التذاكر المفتوحة",
  "High Priority Tickets": "التذاكر عالية الأولوية",
  "Waiting for User": "بانتظار المستخدم",
  "Resolved Today": "تم حلها اليوم",
  "Waiting for Parts": "بانتظار قطع",
  "Resolved": "تم الحل",
  "New": "جديد",
  "Assigned": "تم التعيين",
  "In Progress": "قيد المعالجة",
  "Assign Ticket": "تعيين التذكرة",
  "Change Status": "تغيير الحالة",
  "Add Internal Notes": "إضافة ملاحظات داخلية",
  "Add Public Notes": "إضافة ملاحظات عامة",
  "Mark Resolved": "وضع علامة تم الحل",
  "Close Ticket": "إغلاق التذكرة",
  "Hardware Issue": "مشكلة أجهزة",
  "Software Issue": "مشكلة برامج",
  "Printer Issue": "مشكلة طابعة",
  "Network Issue": "مشكلة شبكة",
  "Email Issue": "مشكلة بريد إلكتروني",
  "Laptop Request": "طلب حاسب محمول",
  "Desktop Request": "طلب حاسب مكتبي",
  "RAM Upgrade": "ترقية RAM",
  "SSD Upgrade": "ترقية SSD",
  "Software Installation": "تثبيت برنامج",
  "Software License": "رخصة برنامج",
  "General IT Support": "دعم تقني عام",
  "Low": "منخفض",
  "Medium": "متوسط",
  "Ticket Created": "إنشاء تذكرة",
  "Ticket Assigned": "تعيين تذكرة",
  "Status Changed": "تغيير الحالة",
  "Ticket Resolved": "حل التذكرة",
  "Ticket Closed": "إغلاق التذكرة",
  "IT Helpdesk & Service Desk ticket management.": "إدارة تذاكر مكتب المساعدة وخدمات تقنية المعلومات.",
  "Submit without login": "إرسال بدون تسجيل دخول",
  "Employees can create IT requests and track them using the generated request number.": "يمكن للموظفين إنشاء طلبات تقنية ومتابعتها باستخدام رقم الطلب."
});
Object.assign(translations.ar, {
  "Amjaad Asset & Inventory Management": "إدارة أصول ومخزون أمجاد",
  "Corporate IT Command": "مركز قيادة تقنية المعلومات",
  "Dashboard": "لوحة التحكم",
  "Assets": "الأصول",
  "Stock / Inventory": "المخزون",
  "Maintenance": "الصيانة",
  "Suppliers": "الموردون",
  "Service Desk": "خدمات الدعم",
  "Users": "المستخدمون",
  "Reports": "التقارير",
  "Settings": "الإعدادات",
  "Issue History": "سجل الصرف",
  "Audit Log": "سجل التدقيق",
  "Portfolio View": "عرض المحفظة",
  "Corporate IT": "تقنية معلومات الشركات",
  "Live asset, stock, issue, supplier, and maintenance tracking.": "متابعة مباشرة للأصول والمخزون والصرف والموردين والصيانة.",
  "Amjaad IT Tracking System": "نظام أمجاد لتتبع تقنية المعلومات",
  "Technology assets, managed with executive clarity.": "إدارة الأصول التقنية بوضوح تنفيذي.",
  "Asset registry and QR identification.": "سجل الأصول والتعريف برمز QR.",
  "Stock inventory with purchasing and issue controls.": "إدارة المخزون مع الشراء والصرف.",
  "Maintenance records connected to stock usage.": "سجلات الصيانة المرتبطة باستخدام المخزون.",
  "Issued stock history and departmental tracking.": "سجل صرف المخزون وتتبع الإدارات.",
  "Supplier directory for procurement visibility.": "دليل الموردين لتعزيز وضوح المشتريات.",
  "Audit trail for important IT operations.": "سجل تدقيق لعمليات تقنية المعلومات المهمة.",
  "IT Helpdesk & Service Desk ticket management.": "إدارة تذاكر مكتب المساعدة وخدمات تقنية المعلومات.",
  "Manage users and password resets.": "إدارة المستخدمين وإعادة تعيين كلمات المرور.",
  "Corporate exports for asset and inventory reporting.": "تصديرات مؤسسية لتقارير الأصول والمخزون.",
  "System settings and preferences.": "إعدادات النظام والتفضيلات.",
  "Language": "اللغة",
  "English": "English",
  "العربية": "العربية",
  "Export Current View": "تصدير العرض الحالي",
  "Login": "تسجيل الدخول",
  "Logout": "تسجيل الخروج",
  "Welcome back": "مرحبًا بعودتك",
  "Secure access portal": "بوابة دخول آمنة",
  "Username": "اسم المستخدم",
  "Password": "كلمة المرور",
  "Invalid username or password.": "اسم المستخدم أو كلمة المرور غير صحيحة.",
  "Save": "حفظ",
  "Save & New": "حفظ وجديد",
  "Cancel": "إلغاء",
  "Reset Form": "مسح النموذج",
  "Reset Form?": "هل تريد مسح النموذج؟",
  "Are you sure you want to reset this form?": "هل أنت متأكد أنك تريد إعادة تعيين هذا النموذج؟",
  "Saved successfully": "تم الحفظ بنجاح",
  "Updated successfully": "تم التحديث بنجاح",
  "Request submitted successfully": "تم إرسال الطلب بنجاح",
  "Request submitted successfully.": "تم إرسال الطلب بنجاح.",
  "Your Request Number is:": "رقم الطلب هو:",
  "Password reset successfully": "تم إعادة تعيين كلمة المرور بنجاح",
  "Are you sure you want to delete this record?": "هل أنت متأكد أنك تريد حذف هذا السجل؟",
  "You have unsaved changes. Are you sure you want to leave?": "لديك تغييرات غير محفوظة. هل أنت متأكد أنك تريد المغادرة؟",
  "Restore unsaved draft?": "هل تريد استرجاع المسودة غير المحفوظة؟",
  "Draft restored": "تم استرجاع المسودة",
  "Draft discarded": "تم حذف المسودة",
  "Duplicate": "تكرار",
  "Total Assets": "إجمالي الأصول",
  "Total": "الإجمالي",
  "Unassigned Assets": "أجهزة غير مخصصة",
  "Under Maintenance": "أجهزة قيد الصيانة",
  "Open Support Tickets": "طلبات الدعم المفتوحة",
  "Total Stock Items": "إجمالي عناصر المخزون",
  "Low Stock Alerts": "تنبيهات انخفاض المخزون",
  "Items Issued Today": "العناصر المصروفة اليوم",
  "Items Under Maintenance": "العناصر تحت الصيانة",
  "A polished corporate dashboard for assets, inventory stock, low stock alerts, suppliers, issue history, audit activity, and maintenance usage with browser-based storage.": "لوحة تحكم مؤسسية للأصول والمخزون وتنبيهات الانخفاض والموردين وسجل الصرف والتدقيق والصيانة مع تخزين داخل المتصفح.",
  "Total assets": "إجمالي الأصول",
  "Active": "نشط",
  "In Storage": "في المخزن",
  "Retired": "متقاعد",
  "RAM Available": "ذاكرة RAM متاحة",
  "SSD Available": "أقراص SSD متاحة",
  "Cables Available": "كيابل متاحة",
  "Stock Alerts": "تنبيهات المخزون",
  "Low stock watchlist": "قائمة مراقبة انخفاض المخزون",
  "Local browser storage": "تخزين محلي في المتصفح",
  "Asset Details": "تفاصيل الأصل",
  "Add IT asset": "إضافة أصل تقني",
  "Edit IT asset": "تعديل أصل تقني",
  "Cancel edit": "إلغاء التعديل",
  "Asset name": "اسم الأصل",
  "Asset tag": "رمز الأصل",
  "Device Type": "نوع الجهاز",
  "Choose category": "اختر التصنيف",
  "Laptop": "حاسب محمول",
  "Desktop": "حاسب مكتبي",
  "Monitor": "شاشة",
  "Phone": "هاتف",
  "Tablet": "جهاز لوحي",
  "Network": "شبكات",
  "Peripheral": "ملحقات",
  "Software": "برمجيات",
  "Other": "أخرى",
  "RAM": "ذاكرة RAM",
  "SSD": "قرص SSD",
  "HDD": "قرص HDD",
  "Keyboard": "لوحة مفاتيح",
  "Mouse": "فأرة",
  "Laptop Bag": "حقيبة حاسب محمول",
  "Charger": "شاحن",
  "HDMI Cable": "كيبل HDMI",
  "DisplayPort Cable": "كيبل DisplayPort",
  "LAN Cable": "كيبل شبكة",
  "USB Adapter": "محول USB",
  "Docking Station": "قاعدة توصيل",
  "Printer Toner": "حبر طابعة",
  "Brand": "العلامة التجارية",
  "Model": "الموديل",
  "Serial Number": "الرقم التسلسلي",
  "Assigned to": "اسم الموظف",
  "Purchase date": "تاريخ الشراء",
  "Status": "الحالة",
  "Notes": "ملاحظات",
  "Add asset": "إضافة أصل",
  "Save changes": "حفظ التغييرات",
  "Inventory": "الجرد",
  "Export CSV": "تصدير CSV",
  "Search": "بحث",
  "All statuses": "كل الحالات",
  "All categories": "كل التصنيفات",
  "Asset": "الأصل",
  "Tag": "الرمز",
  "Type": "النوع",
  "Brand / Model": "العلامة / الموديل",
  "Assigned": "المخصص له",
  "Purchased": "تاريخ الشراء",
  "Actions": "الإجراءات",
  "No assets found": "لم يتم العثور على أصول",
  "Add your first IT asset or adjust the current search and filter.": "أضف أول أصل تقني أو عدّل البحث والفلتر الحالي.",
  "Stock Details": "تفاصيل المخزون",
  "Add stock item": "إضافة عنصر مخزون",
  "Edit stock item": "تعديل عنصر مخزون",
  "Save stock changes": "حفظ تعديلات المخزون",
  "Item Code": "رمز العنصر",
  "Item Name": "اسم العنصر",
  "Category": "التصنيف",
  "Store Location": "موقع التخزين",
  "Specification": "المواصفات",
  "Quantity": "الكمية",
  "Minimum Stock Level": "حد المخزون الأدنى",
  "Supplier": "المورد",
  "Purchase Date": "تاريخ الشراء",
  "Purchase Cost": "تكلفة الشراء",
  "Invoice Number": "رقم الفاتورة",
  "Warranty Expiry Date": "تاريخ انتهاء الضمان",
  "Available": "متاح",
  "Reserved": "محجوز",
  "Discontinued": "متوقف",
  "Items": "العناصر",
  "Export Stock CSV": "تصدير المخزون CSV",
  "Stock Level": "مستوى المخزون",
  "All stock": "كل المخزون",
  "Low stock only": "منخفض فقط",
  "Qty": "الكمية",
  "Min": "الحد الأدنى",
  "Purchase": "الشراء",
  "Warranty": "الضمان",
  "Location": "الموقع",
  "No stock items found": "لم يتم العثور على عناصر مخزون",
  "Add an item or adjust the current search and filters.": "أضف عنصرًا أو عدّل البحث والفلاتر الحالية.",
  "Add maintenance record": "إضافة سجل صيانة",
  "Date": "التاريخ",
  "Technician": "الفني",
  "Stock Used": "المخزون المستخدم",
  "Stock item used": "عنصر المخزون المستخدم",
  "Quantity used": "الكمية المستخدمة",
  "Parts and accessories": "القطع والملحقات",
  "Add item": "إضافة عنصر",
  "Save maintenance and update stock": "حفظ الصيانة وتحديث المخزون",
  "Maintenance History": "سجل الصيانة",
  "Records": "السجلات",
  "No maintenance records yet": "لا توجد سجلات صيانة بعد",
  "Add a record to automatically reduce selected stock quantities.": "أضف سجلًا ليتم خصم كميات المخزون المحددة تلقائيًا.",
  "Issued stock records": "سجلات صرف المخزون",
  "Department": "القسم",
  "Quantity Issued": "الكمية المصروفة",
  "Issued To": "مصروف إلى",
  "Purpose / Reason": "الغرض / السبب",
  "No issue records found": "لم يتم العثور على سجلات صرف",
  "Issue stock from the Stock / Inventory page to create history.": "اصرف المخزون من صفحة المخزون لإنشاء السجل.",
  "Issue stock from the Inventory page to create history.": "اصرف المخزون من صفحة المخزون لإنشاء السجل.",
  "Supplier Details": "تفاصيل المورد",
  "Add supplier": "إضافة مورد",
  "Edit supplier": "تعديل مورد",
  "Save supplier": "حفظ المورد",
  "Supplier Name": "اسم المورد",
  "Contact Person": "الشخص المسؤول",
  "Phone Number": "رقم الهاتف",
  "Email": "البريد الإلكتروني",
  "Address": "العنوان",
  "Items Supplied": "العناصر الموردة",
  "Vendor directory": "دليل الموردين",
  "Contact": "جهة الاتصال",
  "Phone": "الهاتف",
  "No suppliers found": "لم يتم العثور على موردين",
  "Add suppliers to build a procurement directory.": "أضف الموردين لبناء دليل مشتريات.",
  "System activity": "نشاط النظام",
  "Date and Time": "التاريخ والوقت",
  "User / Technician": "المستخدم / الفني",
  "Action Type": "نوع الإجراء",
  "Details": "التفاصيل",
  "No audit records yet": "لا توجد سجلات تدقيق بعد",
  "Important actions will appear here automatically.": "ستظهر الإجراءات المهمة هنا تلقائيًا.",
  "Export center": "مركز التصدير",
  "Export Assets CSV": "تصدير الأصول CSV",
  "Export Maintenance CSV": "تصدير الصيانة CSV",
  "Export Issue History CSV": "تصدير سجل الصرف CSV",
  "Export Audit Log CSV": "تصدير سجل التدقيق CSV",
  "Issue Item": "صرف عنصر",
  "Issue stock item": "صرف عنصر مخزون",
  "Close": "إغلاق",
  "Available Quantity": "الكمية المتاحة",
  "Quantity to Issue": "الكمية المراد صرفها",
  "Issue Date": "تاريخ الصرف",
  "Save issue and update stock": "حفظ الصرف وتحديث المخزون",
  "Asset QR Code": "رمز QR للأصل",
  "Generate QR Code": "إنشاء رمز QR",
  "Download PNG": "تنزيل PNG",
  "Print QR Code": "طباعة رمز QR",
  "Edit": "تعديل",
  "Delete": "حذف",
  "Issue": "صرف",
  "QR": "QR",
  "Remove": "إزالة",
  "Low Stock": "مخزون منخفض",
  "No low stock alerts": "لا توجد تنبيهات انخفاض",
  "All inventory levels are above the minimum threshold.": "كل مستويات المخزون أعلى من الحد الأدنى.",
  "No serial number": "لا يوجد رقم تسلسلي",
  "Not set": "غير محدد",
  "Unassigned": "غير مخصص",
  "No specification": "لا توجد مواصفات",
  "No notes": "لا توجد ملاحظات",
  "No address": "لا يوجد عنوان",
  "None": "لا شيء",
  "Asset ID": "معرّف الأصل",
  "Assigned Employee": "المخصص للموظف",
  "Assigned Employee ID": "رقم الموظف",
  "Assigned": "مخصص",
  "Choose asset": "اختر الأصل",
  "Choose stock item": "اختر عنصر مخزون",
  "available": "متاح",
  "Please choose an asset for this maintenance record.": "يرجى اختيار أصل لسجل الصيانة.",
  "Quantity to issue must be between 1 and the available quantity.": "يجب أن تكون كمية الصرف بين 1 والكمية المتاحة.",
  "does not have enough available quantity.": "لا يحتوي على كمية كافية متاحة.",
  "Search name, tag, user, category...": "ابحث بالاسم أو الرمز أو المستخدم أو التصنيف...",
  "Search code, item, brand, supplier...": "ابحث بالرمز أو العنصر أو العلامة أو المورد...",
  "Search item, person, department, purpose...": "ابحث بالعنصر أو الشخص أو القسم أو الغرض...",
  "All departments": "كل الأقسام",
  "Search supplier, contact, items...": "ابحث بالمورد أو جهة الاتصال أو العناصر...",
  "Search user, action, details...": "ابحث بالمستخدم أو الإجراء أو التفاصيل...",
  "Technology Supplier LLC": "شركة توريد التقنية",
  "Procurement Manager": "مدير المشتريات",
  "Dubai, UAE": "دبي، الإمارات",
  "RAM, SSD, Chargers": "RAM، SSD، شواحن",
  "Laptop repair or workstation setup": "إصلاح حاسب محمول أو تجهيز محطة عمل",
  "Repair notes, diagnosis, or follow-up action": "ملاحظات الإصلاح أو التشخيص أو إجراء المتابعة",
  "Supplier, warranty, reorder reference, or other notes": "المورد أو الضمان أو مرجع إعادة الطلب أو ملاحظات أخرى",
  "Warranty, location, or other context": "الضمان أو الموقع أو أي سياق آخر",
  "Main IT Store": "مخزن تقنية المعلومات الرئيسي",
  "Amjaad Technology Supplier": "مورد تقنية أمجاد",
  "Add Asset": "إضافة أصل",
  "Edit Asset": "تعديل أصل",
  "Delete Asset": "حذف أصل",
  "Add Stock Item": "إضافة عنصر مخزون",
  "Edit Stock Item": "تعديل عنصر مخزون",
  "Delete Stock Item": "حذف عنصر مخزون",
  "Issued Stock": "صرف مخزون",
  "Add Maintenance Record": "إضافة سجل صيانة",
  "Add Supplier": "إضافة مورد",
  "Edit Supplier": "تعديل مورد",
  "Delete Supplier": "حذف مورد",
  "Submit Request": "إرسال طلب",
  "Track Request": "تتبع الطلب",
  "Submit and manage IT service requests.": "إرسال وإدارة طلبات خدمات تقنية المعلومات.",
  "Track request status and details.": "تتبع حالة الطلب وتفاصيله.",
  "Public Request Form": "نموذج الطلب العام",
  "Request Management": "إدارة الطلبات",
  "Requests": "الطلبات",
  "Requester Name": "اسم مقدم الطلب",
  "Normal": "عادي",
  "Submitted": "مرسل",
  "Closed": "مغلق",
  "Request lookup": "البحث عن طلب",
  "No requests found": "لم يتم العثور على طلبات",
  "Submitted requests will appear here.": "ستظهر الطلبات المرسلة هنا.",
  "User Management": "إدارة المستخدمين",
  "Add User": "إضافة مستخدم",
  "Edit User": "تعديل مستخدم",
  "Full Name": "الاسم الكامل",
  "Role": "الدور",
  "Admin": "مدير",
  "Technician": "فني",
  "Viewer": "مشاهد",
  "System users": "مستخدمو النظام",
  "Reset Password": "إعادة تعيين كلمة المرور",
  "New Password": "كلمة المرور الجديدة",
  "No users found": "لم يتم العثور على مستخدمين",
  "Add users to manage system access.": "أضف مستخدمين لإدارة صلاحيات النظام.",
  "New Asset": "أصل جديد",
  "Stock Item": "عنصر مخزون",
  "Access": "صلاحية دخول",
  "Employee name": "اسم الموظف",
  "employee@example.com": "employee@example.com",
  "Choose request type": "اختر نوع الطلب",
  "Describe the request": "اكتب تفاصيل الطلب",
  "Search requester, type, status...": "ابحث باسم مقدم الطلب أو النوع أو الحالة...",
  "Save new record": "حفظ سجل جديد",
  "Update record": "تحديث سجل",
  "Reset form": "مسح النموذج",
  "Cancel with unsaved changes": "إلغاء مع تغييرات غير محفوظة",
  "Delete confirmed": "تأكيد الحذف",
  "Stock item duplicated": "تكرار عنصر مخزون",
  "Request Management actions": "إجراءات إدارة الطلبات",
  "System Name": "اسم النظام",
  "Default Language": "اللغة الافتراضية",
  "IT Helpdesk & Service Desk": "مكتب مساعدة وخدمات تقنية المعلومات",
  "Submit IT Request": "إرسال طلب تقنية معلومات",
  "Employee Information": "معلومات الموظف",
  "Employee Name": "اسم الموظف",
  "Employee ID": "رقم الموظف",
  "Site / Location": "الموقع",
  "Mobile Number": "رقم الجوال",
  "Email (optional)": "البريد الإلكتروني (اختياري)",
  "Request Information": "معلومات الطلب",
  "Request Type": "نوع الطلب",
  "Subject": "الموضوع",
  "Description": "الوصف",
  "Upload Image / PDF": "رفع صورة / PDF",
  "Request Number": "رقم الطلب",
  "Request Status": "حالة الطلب",
  "Assigned IT Staff": "موظف تقنية المعلومات المسؤول",
  "Last Update": "آخر تحديث",
  "Comments": "التعليقات",
  "Attachments": "المرفقات",
  "Completion Date": "تاريخ الإنجاز",
  "Tickets": "التذاكر",
  "New Tickets": "التذاكر الجديدة",
  "Open Tickets": "التذاكر المفتوحة",
  "High Priority Tickets": "التذاكر عالية الأولوية",
  "Waiting for User": "بانتظار المستخدم",
  "Resolved Today": "تم حلها اليوم",
  "Waiting for Parts": "بانتظار قطع",
  "Resolved": "تم الحل",
  "New": "جديد",
  "Assigned": "تم التعيين",
  "In Progress": "قيد المعالجة",
  "Assign Ticket": "تعيين التذكرة",
  "Change Status": "تغيير الحالة",
  "Add Internal Notes": "إضافة ملاحظات داخلية",
  "Add Public Notes": "إضافة ملاحظات عامة",
  "Mark Resolved": "وضع علامة تم الحل",
  "Close Ticket": "إغلاق التذكرة",
  "Hardware Issue": "مشكلة أجهزة",
  "Software Issue": "مشكلة برامج",
  "Printer Issue": "مشكلة طابعة",
  "Network Issue": "مشكلة شبكة",
  "Email Issue": "مشكلة بريد إلكتروني",
  "Laptop Request": "طلب حاسب محمول",
  "Desktop Request": "طلب حاسب مكتبي",
  "RAM Upgrade": "ترقية RAM",
  "SSD Upgrade": "ترقية SSD",
  "Software Installation": "تثبيت برنامج",
  "Software License": "رخصة برنامج",
  "General IT Support": "دعم تقني عام",
  "Low": "منخفض",
  "Medium": "متوسط",
  "High": "مرتفع",
  "Urgent": "عاجل",
  "Ticket Created": "إنشاء تذكرة",
  "Ticket Assigned": "تعيين تذكرة",
  "Status Changed": "تغيير الحالة",
  "Ticket Resolved": "حل التذكرة",
  "Ticket Closed": "إغلاق التذكرة",
  "Submit without login": "إرسال بدون تسجيل دخول",
  "Employees can create IT requests and track them using the generated request number.": "يمكن للموظفين إنشاء طلبات تقنية ومتابعتها باستخدام رقم الطلب.",
  "Public Request": "طلب عام",
  "Submission Guide": "إرشادات الإرسال",
  "Search tickets...": "ابحث في التذاكر...",
  "All priorities": "كل الأولويات",
  "All sites": "كل المواقع",
  "Head Office": "المكتب الرئيسي",
  "Short request subject": "موضوع مختصر للطلب",
  "Filter by category": "تصفية حسب التصنيف",
  "Filter by low stock": "تصفية حسب انخفاض المخزون",
  "Export stock list to Excel or CSV": "تصدير قائمة المخزون إلى Excel أو CSV",
  "Employee Name": "اسم الموظف",
  "Company": "الشركة",
  "Department": "القسم",
  "Location": "الموقع",
  "Return Date": "تاريخ الاستلام",
  "Assigned": "مسلّم",
  "Returned": "مستلم",
  "Choose company": "اختر الشركة",
  "All companies": "كل الشركات",
  "Search employee, company, asset...": "ابحث بالموظف أو الشركة أو الأصل...",
  "Search name, tag, employee, company, category...": "ابحث بالاسم أو الرمز أو الموظف أو الشركة أو التصنيف...",
  "Employee name": "اسم الموظف",
  "Asset Type": "نوع الأصل",
  "Export Filtered Asset Report": "تصدير تقرير الأصول المصفّى",
  "Return": "استلام",
  "Welcome 👋": "مرحباً 👋",
  "Welcome to IT Asset & Inventory Management System": "مرحباً بك في نظام إدارة الأصول والمخزون",
  "Assets by Status": "الأصول حسب الحالة",
  "Recent Assets": "الأصول الحديثة",
  "Recent Support Tickets": "طلبات الدعم الأخيرة",
  "Low Stock Items": "المخزون المنخفض",
  "View All": "عرض الكل",
  "User": "المستخدم",
  "Date Added": "تاريخ الإضافة",
  "Delivery Date": "تاريخ التسليم",
  "Ticket #": "رقم الطلب",
  "Created Date": "تاريخ الإنشاء",
  "Min Level": "الحد الأدنى",
  "Available Qty": "الكمية المتاحة",
  "All rights reserved © 2026 IT Asset & Inventory Management System": "جميع الحقوق محفوظة © 2026 نظام إدارة الأصول والمخزون",
  "System Version 1.0.0": "إصدار النظام 1.0.0",
  "Notifications": "الإشعارات",
  "Inventory": "المخزون",
  "Service Desk": "خدمات الدعم"
});
refreshReverseTranslations();

const sampleAssets = [
  { id: createId(), name: "MacBook Pro 14", tag: "IT-1001", category: "Laptop", brand: "Apple", model: "A2442", serialNumber: "C02AMJ1001", assignedTo: "Avery Johnson", company: "MASHEED", department: "Engineering", location: "Head Office", purchaseDate: "2025-04-18", status: "Active", notes: "Engineering laptop with AppleCare coverage." },
  { id: createId(), name: "Dell UltraSharp 27", tag: "IT-2043", category: "Monitor", brand: "Dell", model: "U2723QE", serialNumber: "MON2043", assignedTo: "Mina Patel", company: "AMJAAD GROUP", department: "Operations", location: "Workstation B12", purchaseDate: "2024-11-02", status: "Active", notes: "Docked at workstation B12." },
  { id: createId(), name: "Cisco Meraki MR46", tag: "NET-031", category: "Network", brand: "Cisco Meraki", model: "MR46", serialNumber: "MR46031", assignedTo: "", company: "AMJAAD DEVELOPMENT", department: "IT", location: "IT Closet", purchaseDate: "2023-08-09", status: "Maintenance", notes: "Pending firmware validation." }
];

const sampleStock = [
  { id: createId(), itemCode: "RAM-016", itemName: "RAM 16GB", category: "RAM", brand: "Kingston", model: "DDR4-3200", specification: "16GB DDR4 SODIMM", quantity: 12, minStock: 5, location: "Main IT Store", status: "Available", supplier: "Amjaad Technology Supplier", purchaseDate: "2026-01-20", purchaseCost: 145, invoiceNumber: "INV-RAM-001", warrantyExpiry: "2028-01-20", notes: "Compatible with standard business laptops." },
  { id: createId(), itemCode: "SSD-512", itemName: "SSD 512GB", category: "SSD", brand: "Samsung", model: "870 EVO", specification: "512GB SATA SSD", quantity: 4, minStock: 4, location: "Main IT Store", status: "Available", supplier: "Gulf Hardware LLC", purchaseDate: "2026-02-10", purchaseCost: 220, invoiceNumber: "INV-SSD-512", warrantyExpiry: "2029-02-10", notes: "Low stock threshold reached." },
  { id: createId(), itemCode: "CAB-HDMI", itemName: "HDMI Cable", category: "HDMI Cable", brand: "Belkin", model: "2M", specification: "2 meter HDMI 2.0 cable", quantity: 18, minStock: 6, location: "Cabinet A2", status: "Available", supplier: "Office Tech Trading", purchaseDate: "2026-03-04", purchaseCost: 35, invoiceNumber: "INV-CAB-044", warrantyExpiry: "2027-03-04", notes: "Meeting room and desk setup stock." }
];

const defaultAdminUser = {
  id: "default-admin",
  username: "Admin",
  password: "Amjaad@2026",
  fullName: "Admin",
  email: "",
  role: "Admin",
  company: "AMJAAD GROUP",
  department: "Administration",
  permissions: [
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
};

const storage = {
  load(key, fallback) {
    if (window.amjaadStorageService) {
      return window.amjaadStorageService.loadArray(key, fallback);
    }
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return Array.isArray(fallback) ? [...fallback] : [];
    try {
      const parsedValue = JSON.parse(storedValue);
      return Array.isArray(parsedValue) ? parsedValue : (Array.isArray(fallback) ? [...fallback] : []);
    } catch {
      return Array.isArray(fallback) ? [...fallback] : [];
    }
  },
  save(key, value) {
    if (window.amjaadStorageService) {
      window.amjaadStorageService.saveArray(key, value);
      return;
    }
    localStorage.setItem(key, JSON.stringify(Array.isArray(value) ? value : []));
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const pageTitle = $("#pageTitle");
const navButtons = $$(".sidebar-nav button[data-page]");
const appPages = $$(".app-page");
const quickExportBtn = $("#quickExportBtn");
const loginPage = $("#loginPage");
const appShell = $(".dashboard-shell");
const publicPages = new Set(["submitRequestPage", "trackRequestPage"]);

const assetForm = $("#assetForm");
const handoverForm = $("#handoverForm");
const stockForm = $("#stockForm");
const maintenanceForm = $("#maintenanceForm");
const supplierForm = $("#supplierForm");
const issueForm = $("#issueForm");

let assets = storage.load(STORAGE_KEYS.assets, sampleAssets).map(migrateAsset);
let handovers = storage.load(STORAGE_KEYS.handovers, []).map(migrateHandover);
let stockItems = storage.load(STORAGE_KEYS.stock, sampleStock).map(migrateStock);
let maintenanceRecords = storage.load(STORAGE_KEYS.maintenance, []);
let issueHistory = storage.load(STORAGE_KEYS.issues, []);
let suppliers = storage.load(STORAGE_KEYS.suppliers, []);
let auditLog = storage.load(STORAGE_KEYS.audit, []);
let requests = storage.load(STORAGE_KEYS.requests, []);
let users = storage.load(STORAGE_KEYS.users, getDefaultUsers()).map(migrateUser);
let editingId = null;
let editingHandoverId = null;
let editingStockId = null;
let editingSupplierId = null;
let editingUserId = null;
let activePage = "dashboardPage";
let currentQrAsset = null;
let currentLanguage = localStorage.getItem(STORAGE_KEYS.language) || "ar";
let loggedInUser = getLoggedInUser();
let submitMode = "save";
const trackedForms = new Set();
const resetHandlers = {};

enforceDefaultAdminUser();
migrateLegacyAssetAssignments();
normalizeStoredCompanies();
setupCategoryOptions();
setDefaultDates();
installFormControls();
setupDirtyTracking();
setupRequestDraft();
renderAll();
applyLanguage();
initializeAuth();
loadLocaleFiles();

navButtons.forEach((button) => button.addEventListener("click", () => showPage(button.dataset.page)));
$$("[data-page-link]").forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  showPage(link.dataset.pageLink);
}));
quickExportBtn.addEventListener("click", exportActiveView);
$("#languageSelect").addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
  applyLanguage();
  setupCategoryOptions();
  renderAll();
  showPage(activePage);
});
$("#loginForm").addEventListener("submit", handleLogin);
$("#logoutBtn").addEventListener("click", logout);
$$("[data-public-page]").forEach((button) => button.addEventListener("click", () => showPage(button.dataset.publicPage)));
window.addEventListener("hashchange", () => {
  const requestedPage = getRequestedPage();
  if (requestedPage !== activePage) {
    showPage(requestedPage);
  }
});

assetForm.addEventListener("submit", saveAssetFromForm);
$("#cancelEditBtn").addEventListener("click", () => cancelForm(assetForm, resetAssetForm));
$("#searchInput").addEventListener("input", renderAssets);
$("#assetCompanyFilter").addEventListener("change", renderAssets);
$("#statusFilter").addEventListener("change", renderAssets);
$("#exportBtn").addEventListener("click", exportAssetsCsv);
$("#assetTable").addEventListener("click", handleAssetAction);

if (handoverForm) {
  handoverForm.addEventListener("submit", saveHandoverFromForm);
  $("#cancelHandoverEditBtn").addEventListener("click", () => cancelForm(handoverForm, resetHandoverForm));
  $("#handoverSearchInput").addEventListener("input", renderHandovers);
  $("#handoverStatusFilter").addEventListener("change", renderHandovers);
  $("#exportHandoversBtn").addEventListener("click", exportHandoversCsv);
  $("#handoverTable").addEventListener("click", handleHandoverAction);
}

stockForm.addEventListener("submit", saveStockFromForm);
$("#cancelStockEditBtn").addEventListener("click", () => cancelForm(stockForm, resetStockForm));
$("#stockSearchInput").addEventListener("input", renderStock);
$("#stockCategoryFilter").addEventListener("change", renderStock);
$("#lowStockFilter").addEventListener("change", renderStock);
$("#exportStockBtn").addEventListener("click", exportStockCsv);
$("#stockTable").addEventListener("click", handleStockAction);

$("#addUsedItemBtn").addEventListener("click", () => addUsedItemRow());
$("#usedItemsList").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='remove-used-item']");
  if (button) button.closest(".used-item-row").remove();
});
maintenanceForm.addEventListener("submit", saveMaintenanceRecord);
$("#exportMaintenanceBtn").addEventListener("click", exportMaintenanceCsv);
$("#maintenanceIssueExportBtn").addEventListener("click", exportIssuesCsv);

issueForm.addEventListener("submit", saveIssueRecord);
$("#closeIssueModalBtn").addEventListener("click", () => cancelForm(issueForm, closeIssueModal));
$("#issueSearchInput").addEventListener("input", renderIssueHistory);
$("#issueDepartmentFilter").addEventListener("input", renderIssueHistory);
$("#exportIssueHistoryBtn").addEventListener("click", exportIssuesCsv);

supplierForm.addEventListener("submit", saveSupplierFromForm);
$("#cancelSupplierEditBtn").addEventListener("click", () => cancelForm(supplierForm, resetSupplierForm));
$("#cancelUserEditBtn").addEventListener("click", () => cancelForm($("#userForm"), resetUserForm));
$("#supplierSearchInput").addEventListener("input", renderSuppliers);
$("#supplierTable").addEventListener("click", handleSupplierAction);

$("#auditSearchInput").addEventListener("input", renderAuditLog);
$("#exportAuditBtn").addEventListener("click", exportAuditCsv);
$("#closeQrModalBtn").addEventListener("click", closeQrModal);
$("#downloadQrBtn").addEventListener("click", downloadQrPng);
$("#printQrBtn").addEventListener("click", printQrCode);

$("#reportExportAssetsBtn").addEventListener("click", exportAssetsCsv);
$("#reportExportFilteredAssetsBtn").addEventListener("click", exportFilteredAssetsCsv);
$("#reportExportStockBtn").addEventListener("click", exportStockCsv);
$("#reportExportMaintenanceBtn").addEventListener("click", exportMaintenanceCsv);
$("#reportExportIssuesBtn").addEventListener("click", exportIssuesCsv);
$("#reportExportAuditBtn").addEventListener("click", exportAuditCsv);
["reportEmployeeFilter", "reportCompanyFilter", "reportAssetTypeFilter", "reportStatusFilter"].forEach((id) => {
  document.getElementById(id).addEventListener("input", renderAssets);
  document.getElementById(id).addEventListener("change", renderAssets);
});
$("#settingsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  markClean($("#settingsForm"));
  showToast(t("Saved successfully"));
  addAudit("Update record", "Updated settings");
});
$("#requestForm").addEventListener("submit", saveRequestFromForm);
$("#trackRequestSearch").addEventListener("input", renderRequests);
$("#ticketSearchInput").addEventListener("input", renderRequests);
$("#ticketStatusFilter").addEventListener("change", renderRequests);
$("#ticketDepartmentFilter").addEventListener("input", renderRequests);
$("#ticketSiteFilter").addEventListener("input", renderRequests);
$("#ticketPriorityFilter").addEventListener("change", renderRequests);
$("#ticketCategoryFilter").addEventListener("change", renderRequests);
$("#ticketTable").addEventListener("click", handleRequestAction);
$("#userForm").addEventListener("submit", saveUserFromForm);
$("#userTable").addEventListener("click", handleUserAction);
$("#resetPasswordForm").addEventListener("submit", savePasswordReset);
$("#closePasswordModalBtn").addEventListener("click", () => cancelForm($("#resetPasswordForm"), () => $("#passwordModal").classList.add("hidden")));
window.addEventListener("beforeunload", (event) => {
  if (hasActiveDirtyForm()) {
    event.preventDefault();
    event.returnValue = t("You have unsaved changes. Are you sure you want to leave?");
  }
});

function installFormControls() {
  Object.assign(resetHandlers, {
    resetAssetForm,
    resetHandoverForm,
    resetStockForm,
    resetMaintenanceForm,
    resetSupplierForm,
    resetIssueForm: () => issueForm.reset(),
    resetRequestForm,
    resetUserForm,
    resetPasswordForm
  });
  [
    ["assetForm", "resetAssetForm", () => showPage("assetsPage")],
    ["stockForm", "resetStockForm", () => showPage("stockPage")],
    ["maintenanceForm", "resetMaintenanceForm", () => showPage("maintenancePage")],
    ["supplierForm", "resetSupplierForm", () => showPage("suppliersPage")],
    ["issueForm", "resetIssueForm", closeIssueModal],
    ["requestForm", "resetRequestForm", () => showPage("submitRequestPage")],
    ["userForm", "resetUserForm", () => showPage("usersPage")],
    ["resetPasswordForm", "resetPasswordForm", () => $("#passwordModal").classList.add("hidden")],
    ["settingsForm", "resetSettingsForm", () => showPage("settingsPage")]
  ].forEach(([formId, resetName, cancelAction]) => {
    const form = document.getElementById(formId);
    if (!form || form.querySelector(".form-actions")) return;
    const actions = document.createElement("div");
    actions.className = "form-actions";
    actions.innerHTML = `
      <button class="primary-btn" type="submit" data-submit-mode="save">${t("Save")}</button>
      <button class="secondary-btn" type="submit" data-submit-mode="save-new">${t("Save & New")}</button>
      <button class="ghost-btn" type="button" data-form-action="cancel">${t("Cancel")}</button>
      <button class="ghost-btn" type="button" data-form-action="reset">${t("Reset Form")}</button>
    `;
    form.append(actions);
    actions.addEventListener("click", (event) => {
      const modeButton = event.target.closest("[data-submit-mode]");
      const actionButton = event.target.closest("[data-form-action]");
      if (modeButton) {
        submitMode = modeButton.dataset.submitMode;
      }
      if (actionButton?.dataset.formAction === "cancel") {
        cancelForm(form, cancelAction);
      }
      if (actionButton?.dataset.formAction === "reset") {
        resetTrackedForm(form, resetName);
      }
    });
  });
}

function setupDirtyTracking() {
  $$("form").forEach((form) => {
    trackedForms.add(form);
    form.dataset.dirty = "false";
    form.addEventListener("input", () => {
      form.dataset.dirty = "true";
    });
    form.addEventListener("change", () => {
      form.dataset.dirty = "true";
    });
  });
}

function setupRequestDraft() {
  const form = $("#requestForm");
  const draft = localStorage.getItem(STORAGE_KEYS.requestDraft);
  if (draft && confirm(t("Restore unsaved draft?"))) {
    const data = JSON.parse(draft);
    Object.entries(data).forEach(([id, value]) => {
      const input = document.getElementById(id);
      if (input) input.value = value;
    });
    addAudit("Draft restored", "Restored public request draft");
    showToast(t("Draft restored"));
  } else if (draft) {
    localStorage.removeItem(STORAGE_KEYS.requestDraft);
    addAudit("Draft discarded", "Discarded public request draft");
  }
  form.addEventListener("input", () => {
    const data = {};
    ["requesterName", "requestEmployeeId", "requestDepartment", "requestSite", "requestMobile", "requestEmail", "requestCategory", "requestType", "requestPriority", "requestSubject", "requestDetails"].forEach((id) => {
      data[id] = document.getElementById(id).value;
    });
    localStorage.setItem(STORAGE_KEYS.requestDraft, JSON.stringify(data));
  });
}

function markClean(form) {
  if (form) {
    form.dataset.dirty = "false";
  }
}

function hasActiveDirtyForm() {
  return [...trackedForms].some((form) => form.dataset.dirty === "true" && isFormVisible(form));
}

function isFormVisible(form) {
  const modal = form.closest(".modal");
  if (modal) {
    return !modal.classList.contains("hidden");
  }

  const page = form.closest(".app-page");
  if (page) {
    return !page.classList.contains("hidden");
  }

  return form.offsetParent !== null;
}

function showToast(message) {
  let toast = $("#appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast";
    document.body.append(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function cancelForm(form, afterCancel) {
  if (form.dataset.dirty === "true" && !confirm(t("You have unsaved changes. Are you sure you want to leave?"))) {
    return;
  }
  if (form.dataset.dirty === "true") {
    addAudit("Cancel with unsaved changes", `Cancelled ${form.id} with unsaved changes`);
  }
  form.reset();
  markClean(form);
  afterCancel?.();
}

function resetTrackedForm(form, resetName) {
  if (formHasData(form) && !confirm(t("Are you sure you want to reset this form?"))) {
    return;
  }
  if (typeof resetHandlers[resetName] === "function") {
    resetHandlers[resetName]();
  } else {
    form.reset();
  }
  markClean(form);
  addAudit("Reset form", `Reset ${form.id}`);
}

function formHasData(form) {
  return [...form.elements].some((element) => {
    if (!["INPUT", "SELECT", "TEXTAREA"].includes(element.tagName) || element.type === "hidden") return false;
    return Boolean(String(element.value || "").trim());
  });
}

function postSave(form, wasUpdate, resetFn, stayOpen = false) {
  markClean(form);
  showToast(t(wasUpdate ? "Updated successfully" : "Saved successfully"));
  if (submitMode === "save-new" || stayOpen) {
    resetFn?.();
    markClean(form);
  }
  submitMode = "save";
}

function confirmDelete() {
  return confirm(t("Are you sure you want to delete this record?"));
}

function t(text) {
  if (companyList.includes(text)) {
    return text;
  }
  if (currentLanguage === "ar") {
    return translations.ar[text] || text;
  }

  return reverseTranslations[text] || text;
}

function refreshReverseTranslations() {
  Object.keys(reverseTranslations).forEach((key) => delete reverseTranslations[key]);
  Object.assign(reverseTranslations, Object.fromEntries(Object.entries(translations.ar).filter(([en]) => !companyList.includes(en)).map(([en, ar]) => [ar, en])));
}

async function loadLocaleFiles() {
  try {
    const [enResponse, arResponse] = await Promise.all([fetch(LOCALE_FILES.en), fetch(LOCALE_FILES.ar)]);
    if (!enResponse.ok || !arResponse.ok) return;
    const [enLocale, arLocale] = await Promise.all([enResponse.json(), arResponse.json()]);
    if (arLocale && typeof arLocale === "object") {
      Object.assign(translations.ar, arLocale);
      companyList.forEach((company) => delete translations.ar[company]);
      refreshReverseTranslations();
      setupCategoryOptions();
  applyLanguage();
  applyReferenceSubtitles();
  renderAll();
  showPage(activePage);
    }
    window.amjaadLocales = { en: enLocale, ar: arLocale };
  } catch {
    window.amjaadLocales = { en: {}, ar: translations.ar };
  }
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", currentLanguage === "ar");
  document.title = t("Amjaad Asset & Inventory Management");
  $("#languageSelect").value = currentLanguage;
  lockSelectOptionValues();
  translateStaticText(document.body);
  applyReferenceSubtitles();
}

function applyReferenceSubtitles() {
  const subtitles = {
    dashboardPage: "Dashboard",
    assetsPage: "Assets",
    stockPage: "Stock / Inventory",
    maintenancePage: "Maintenance",
    suppliersPage: "Suppliers",
    serviceDeskPage: "Service Desk",
    usersPage: "Users",
    reportsPage: "Reports",
    settingsPage: "Settings"
  };
  navButtons.forEach((button) => {
    button.dataset.subtitle = subtitles[button.dataset.page] || "";
  });
  const cardSubtitles = ["Total Assets", "Unassigned Assets", "Under Maintenance", "Open Support Tickets"];
  $$("#dashboardPage .executive-summary .summary-card p").forEach((title, index) => {
    title.dataset.subtitle = cardSubtitles[index] || "";
  });
}

function lockSelectOptionValues() {
  $$("option").forEach((option) => {
    if (!option.dataset.valueLocked) {
      option.dataset.valueLocked = "true";
      option.dataset.originalText = option.textContent.trim();
      if (!option.hasAttribute("value")) {
        option.value = option.textContent.trim();
      }
    }
  });
}

function translateStaticText(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE", "CANVAS"].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const original = node.nodeValue.trim();
    const translated = t(original);
    if (translated !== original) {
      node.nodeValue = node.nodeValue.replace(original, translated);
    }
  });

  $$("[placeholder]").forEach((element) => {
    const original = element.dataset.originalPlaceholder || element.getAttribute("placeholder");
    element.dataset.originalPlaceholder = reverseTranslations[original] || original;
    element.setAttribute("placeholder", t(element.dataset.originalPlaceholder));
  });

  $$("[aria-label]").forEach((element) => {
    const original = element.dataset.originalAriaLabel || element.getAttribute("aria-label");
    element.dataset.originalAriaLabel = reverseTranslations[original] || original;
    element.setAttribute("aria-label", t(element.dataset.originalAriaLabel));
  });

  $$("option").forEach((option) => {
    option.textContent = t(option.dataset.originalText || option.textContent.trim());
  });
}

function migrateAsset(asset) {
  const migrated = { brand: "", model: "", serialNumber: "", employeeId: "", employeeName: "", assignedTo: "", company: "", department: "", location: "", deliveryDate: "", ...asset };
  migrated.employeeName = migrated.employeeName || migrated.assignedTo || "";
  migrated.assignedTo = migrated.assignedTo || migrated.employeeName || "";
  migrated.company = normalizeCompany(migrated.company);
  return migrated;
}

function migrateHandover(record) {
  const migrated = { id: createId(), assetId: "", assetName: "", employeeName: "", company: "", handoverDate: "", returnDate: "", status: "Assigned", ...record };
  migrated.company = normalizeCompany(migrated.company);
  return migrated;
}

function migrateStock(item) {
  return { supplier: "", purchaseDate: "", purchaseCost: "", invoiceNumber: "", warrantyExpiry: "", ...item };
}

function migrateUser(user) {
  return { company: "AMJAAD GROUP", ...user, company: normalizeCompany(user.company || "AMJAAD GROUP") };
}

function normalizeCompany(company) {
  const value = String(company || "").trim().toLowerCase();
  const aliases = {
    "amjaad group": "AMJAAD GROUP",
    "amjaad real estate": "AMJAAD GROUP",
    "amjaad facilities": "AMJAAD GROUP",
    "masheed": "MASHEED",
    "razeen": "RAZEEN",
    "liowan": "LIOWAN",
    "amjaad development": "AMJAAD DEVELOPMENT"
  };
  return aliases[value] || (companyList.includes(company) ? company : "AMJAAD GROUP");
}

function normalizeStoredCompanies() {
  assets = assets.map((asset) => ({ ...asset, company: normalizeCompany(asset.company) }));
  handovers = handovers.map((record) => ({ ...record, company: normalizeCompany(record.company) }));
  users = users.map(migrateUser);
  saveAssets();
  saveHandovers();
  saveUsers();
}

function setupCategoryOptions() {
  const companyOptions = `<option value="">${t("Choose company")}</option>${companyList.map((company) => `<option value="${company}">${t(company)}</option>`).join("")}`;
  $("#assetCompany").innerHTML = companyOptions;
  if ($("#handoverCompany")) $("#handoverCompany").innerHTML = companyOptions;
  $("#userCompany").innerHTML = companyOptions;
  $("#topCompanySelect").textContent = "AMJAAD GROUP";
  $("#assetCompanyFilter").innerHTML = `<option value="All">${t("All companies")}</option>${companyList.map((company) => `<option value="${company}">${t(company)}</option>`).join("")}`;
  $("#reportCompanyFilter").innerHTML = `<option value="All">${t("All companies")}</option>${companyList.map((company) => `<option value="${company}">${t(company)}</option>`).join("")}`;
  $("#reportAssetTypeFilter").innerHTML = `<option value="All">${t("All categories")}</option>${["Laptop", "Desktop", "Monitor", "Phone", "Tablet", "Network", "Peripheral", "Software", "Other"].map((category) => `<option value="${category}">${t(category)}</option>`).join("")}`;
  $("#stockCategory").innerHTML = `<option value="">${t("Choose category")}</option>${stockCategories.map((category) => `<option value="${category}">${t(category)}</option>`).join("")}`;
  $("#stockCategoryFilter").innerHTML = `<option value="All">${t("All categories")}</option>${stockCategories.map((category) => `<option value="${category}">${t(category)}</option>`).join("")}`;
  $("#requestCategory").innerHTML = `<option value="">${t("Choose category")}</option>${serviceCategories.map((category) => `<option value="${category}">${t(category)}</option>`).join("")}`;
  $("#ticketStatusFilter").innerHTML = `<option value="All">${t("All statuses")}</option>${ticketStatuses.map((status) => `<option value="${status}">${t(status)}</option>`).join("")}`;
  $("#ticketCategoryFilter").innerHTML = `<option value="All">${t("All categories")}</option>${serviceCategories.map((category) => `<option value="${category}">${t(category)}</option>`).join("")}`;
  populateEmployeeOptions();
}

function populateEmployeeOptions(selectedEmployeeId = "", selectedEmployeeName = "") {
  const employeeNameInput = $("#assetEmployee");
  const employeeIdInput = $("#assetEmployeeId");
  if (employeeNameInput) employeeNameInput.value = selectedEmployeeName || "";
  if (employeeIdInput) employeeIdInput.value = selectedEmployeeId || "";
}

function getEmployeeOptions() {
  return users.map((user) => ({
    id: user.id || user.username,
    name: user.fullName || user.username || "Admin"
  }));
}

function getSelectedEmployee() {
  const employeeId = $("#assetEmployeeId")?.value.trim() || "";
  const employeeName = $("#assetEmployee")?.value.trim() || "";
  return { id: employeeId, name: employeeName };
}

function setDefaultDates() {
  const today = new Date().toISOString().slice(0, 10);
  $("#maintenanceDate").value = today;
  $("#issueDate").value = today;
  if ($("#handoverDate")) $("#handoverDate").value = today;
}

function showPage(pageId) {
  if (!routeGuard(pageId)) return;
  if (location.hash !== `#${pageId}`) {
    history.pushState(null, "", `#${pageId}`);
  }
  if (isLoggedIn()) {
    showAuthenticatedApp();
  } else {
    loginPage.classList.add("hidden");
    appShell.classList.remove("hidden");
  }
  activePage = pageId;
  appPages.forEach((page) => page.classList.toggle("hidden", page.id !== pageId));
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.page === pageId));
  navButtons.forEach((button) => {
    if (!isLoggedIn() && !publicPages.has(button.dataset.page)) {
      button.classList.add("locked");
    } else {
      button.classList.remove("locked");
    }
  });
  const titles = {
    dashboardPage: "IT Asset Management System",
    assetsPage: "Asset registry and QR identification.",
    stockPage: "Stock inventory with purchasing and issue controls.",
    maintenancePage: "Maintenance records connected to stock usage.",
    issueHistoryPage: "Issued stock history and departmental tracking.",
    suppliersPage: "Supplier directory for procurement visibility.",
    submitRequestPage: "Submit and manage IT service requests.",
    trackRequestPage: "Track request status and details.",
    serviceDeskPage: "IT Helpdesk & Service Desk ticket management.",
    usersPage: "Manage users and password resets.",
    auditLogPage: "Audit trail for important IT operations.",
    reportsPage: "Corporate exports for asset and inventory reporting.",
    settingsPage: "System settings and preferences."
  };
  pageTitle.textContent = t(titles[pageId] || titles.dashboardPage);
  $("#logoutBtn").classList.toggle("hidden", !isLoggedIn());
  $("#userProfile").classList.toggle("hidden", !isLoggedIn());
  quickExportBtn.classList.toggle("hidden", !isLoggedIn());
}

function renderAll() {
  renderAssets();
  renderHandovers();
  renderStock();
  renderMaintenance();
  renderIssueHistory();
  renderSuppliers();
  renderRequests();
  renderUsers();
  renderAuditLog();
  renderDashboard();
}

function renderDashboard() {
  const today = new Date().toISOString().slice(0, 10);
  const lowItems = stockItems.filter(isLowStock);
  const issuedToday = issueHistory.filter((record) => record.date === today).reduce((sum, record) => sum + readNumber(record.quantity), 0);
  const maintenanceCount = assets.filter((asset) => asset.status === "Maintenance").length;
  const activeAssetCount = assets.filter((asset) => ["Active", "Assigned"].includes(asset.status)).length;
  const newTicketCount = requests.filter((ticket) => ticket.status === "New").length;
  const openTicketCount = requests.filter((ticket) => !["Resolved", "Closed"].includes(ticket.status)).length;
  const highTicketCount = requests.filter((ticket) => ["High", "Urgent"].includes(ticket.priority)).length;
  const waitingUserCount = requests.filter((ticket) => ticket.status === "Waiting for User").length;
  const resolvedTodayCount = requests.filter((ticket) => ticket.status === "Resolved" && String(ticket.completionDate || "").startsWith(today)).length;

  $("#dashboardTotalAssets").textContent = assets.length;
  $("#dashboardUnassignedAssets").textContent = assets.filter((asset) => !getAssetEmployee(asset)).length;
  $("#dashboardOpenTickets").textContent = openTicketCount;
  $("#totalAssets").textContent = assets.length;
  $("#activeAssets").textContent = activeAssetCount;
  $("#maintenanceAssets").textContent = maintenanceCount;
  $("#totalStockItems").textContent = stockItems.length;
  $("#lowStockItems").textContent = lowItems.length;
  $("#itemsIssuedToday").textContent = issuedToday;
  $("#itemsUnderMaintenance").textContent = maintenanceCount;
  $("#ramAvailable").textContent = getAvailableByCategory(["RAM"]);
  $("#ssdAvailable").textContent = getAvailableByCategory(["SSD"]);
  $("#cablesAvailable").textContent = getAvailableByCategory(["HDMI Cable", "DisplayPort Cable", "LAN Cable"]);
  $("#newTickets").textContent = newTicketCount;
  $("#openTickets").textContent = openTicketCount;
  $("#highPriorityTickets").textContent = highTicketCount;
  $("#waitingUserTickets").textContent = waitingUserCount;
  $("#resolvedTodayTickets").textContent = resolvedTodayCount;
  $("#ticketBadge").textContent = `${newTicketCount} ${t("New")}`;

  $("#lowStockList").innerHTML = lowItems.length ? lowItems.map((item) => `
    <article class="watchlist-item">
      <div><strong>${escapeHtml(item.itemName)}</strong><span>${escapeHtml(item.itemCode)} - ${escapeHtml(t(item.category))}</span></div>
      <span class="warning-badge">${t("Low Stock")}</span>
      <small>${item.quantity} / ${t("Min").toLowerCase()} ${item.minStock}</small>
    </article>
  `).join("") : `<div class="empty-state compact-empty"><h3>${t("No low stock alerts")}</h3><p>${t("All inventory levels are above the minimum threshold.")}</p></div>`;

  const statusSegments = [
    { label: "Active", color: "#16a34a", value: activeAssetCount },
    { label: "In Storage", color: "#0d6efd", value: assets.filter((asset) => asset.status === "In Storage").length },
    { label: "Maintenance", color: "#f59e0b", value: maintenanceCount },
    { label: "Retired", color: "#ef4444", value: assets.filter((asset) => asset.status === "Retired").length }
  ];
  const totalForChart = Math.max(assets.length, 1);
  let chartCursor = 0;
  const gradientStops = statusSegments.map((segment) => {
    const start = chartCursor;
    chartCursor += (segment.value / totalForChart) * 100;
    return `${segment.color} ${start}% ${chartCursor}%`;
  }).join(", ");
  $("#assetStatusDonut").style.background = `conic-gradient(${gradientStops || "#e5e7eb 0 100%"})`;
  $("#assetStatusLegend").innerHTML = statusSegments.map((segment) => {
    const percent = assets.length ? Math.round((segment.value / assets.length) * 100) : 0;
    return `<div><span style="background:${segment.color}"></span><strong>${t(segment.label)}</strong><small>${segment.value} (${percent}%)</small></div>`;
  }).join("") + `<div class="chart-total"><strong>${t("Total")}</strong><small>${assets.length}</small></div>`;

  $("#dashboardRecentAssets").innerHTML = assets.slice(0, 5).map((asset) => `
    <tr>
      <td><span class="asset-name">${escapeHtml(asset.name)}<small>${escapeHtml(asset.tag)}</small></span></td>
      <td>${escapeHtml(t(asset.category))}</td>
      <td>${escapeHtml(getAssetEmployee(asset) || t("Unassigned"))}</td>
      <td>${escapeHtml(getAssetCompany(asset) || "AMJAAD GROUP")}</td>
      <td>${formatDate(asset.purchaseDate)}</td>
    </tr>
  `).join("");

  $("#dashboardTickets").innerHTML = requests.slice(0, 4).map((ticket) => `
    <tr>
      <td>${escapeHtml(ticket.requestNumber)}</td>
      <td>${escapeHtml(ticket.subject || ticket.type || t("Not set"))}</td>
      <td>${escapeHtml(ticket.requester || t("Unassigned"))}</td>
      <td><span class="status-pill status-reserved">${escapeHtml(t(ticket.status))}</span></td>
      <td>${formatDateTime(ticket.date)}</td>
    </tr>
  `).join("") || `<tr><td colspan="5">${t("No requests found")}</td></tr>`;

  $("#dashboardLowStockTable").innerHTML = lowItems.slice(0, 4).map((item) => `
    <tr>
      <td><span class="asset-name">${escapeHtml(item.itemName)}<small>${escapeHtml(item.itemCode)}</small></span></td>
      <td>${item.minStock}</td>
      <td>${item.quantity}</td>
      <td><span class="warning-badge">${t("Low Stock")}</span></td>
    </tr>
  `).join("") || `<tr><td colspan="4">${t("No low stock alerts")}</td></tr>`;
}

function saveAssetFromForm(event) {
  event.preventDefault();
  const selectedEmployee = getSelectedEmployee();
  const requestedStatus = $("#assetStatus").value;
  const asset = {
    id: editingId || createId(),
    name: $("#assetName").value.trim(),
    tag: $("#assetTag").value.trim(),
    category: $("#assetCategory").value,
    brand: $("#assetBrand").value.trim(),
    model: $("#assetModel").value.trim(),
    serialNumber: $("#assetSerial").value.trim(),
    employeeId: selectedEmployee.id,
    employeeName: selectedEmployee.name,
    assignedTo: selectedEmployee.name,
    company: $("#assetCompany").value,
    department: $("#assetDepartment").value.trim(),
    location: $("#assetLocation").value.trim(),
    purchaseDate: $("#purchaseDate").value,
    deliveryDate: $("#deliveryDate").value,
    status: selectedEmployee.id || selectedEmployee.name ? "Assigned" : requestedStatus,
    notes: $("#assetNotes").value.trim()
  };

  if (editingId) {
    assets = assets.map((item) => item.id === editingId ? asset : item);
    addAudit("Edit Asset", `Edited asset ${asset.name}`);
    addAudit("Update record", `Updated asset ${asset.name}`);
  } else {
    assets.unshift(asset);
    addAudit("Add Asset", `Added asset ${asset.name}`);
    addAudit("Save new record", `Saved asset ${asset.name}`);
  }
  saveAssets();
  postSave(assetForm, Boolean(editingId), resetAssetForm);
  renderAll();
}

function renderAssets() {
  const visibleAssets = getVisibleAssets();
  $("#assetTable").innerHTML = visibleAssets.map((asset) => `
    <tr>
      <td><span class="asset-name">${escapeHtml(asset.name)}<small>${escapeHtml(asset.serialNumber || asset.location || t("No serial number"))}</small></span></td>
      <td>${escapeHtml(asset.tag)}</td>
      <td>${escapeHtml(t(asset.category))}</td>
      <td>${escapeHtml([asset.brand, asset.model].filter(Boolean).join(" / ") || t("Not set"))}</td>
      <td>${escapeHtml(getAssetEmployee(asset) || t("Unassigned"))}</td>
      <td>${escapeHtml(t(getAssetCompany(asset) || "Not set"))}</td>
      <td><span class="status-pill ${getStatusClass(asset.status)}">${escapeHtml(t(asset.status))}</span></td>
      <td>${formatDate(asset.purchaseDate)}</td>
      <td>${formatDate(asset.deliveryDate)}</td>
      <td><div class="actions">
        <button class="action-btn" type="button" data-action="edit" data-id="${asset.id}">${t("Edit")}</button>
        <button class="action-btn" type="button" data-action="qr" data-id="${asset.id}">${t("QR")}</button>
        <button class="action-btn delete" type="button" data-action="delete" data-id="${asset.id}">${t("Delete")}</button>
      </div></td>
    </tr>
  `).join("");
  $("#emptyState").classList.toggle("hidden", visibleAssets.length > 0);
}

function handleAssetAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  if (button.dataset.action === "edit") startAssetEdit(button.dataset.id);
  if (button.dataset.action === "delete") deleteAsset(button.dataset.id);
  if (button.dataset.action === "qr") openQrModal(button.dataset.id);
}

function startAssetEdit(assetId) {
  const asset = assets.find((item) => item.id === assetId);
  if (!asset) return;
  editingId = asset.id;
  $("#assetName").value = asset.name;
  $("#assetTag").value = asset.tag;
  $("#assetCategory").value = asset.category;
  $("#assetBrand").value = asset.brand || "";
  $("#assetModel").value = asset.model || "";
  $("#assetSerial").value = asset.serialNumber || "";
  populateEmployeeOptions(asset.employeeId || "", getAssetEmployee(asset));
  $("#assetCompany").value = asset.company || "";
  $("#assetDepartment").value = asset.department || "";
  $("#assetLocation").value = asset.location || "";
  $("#purchaseDate").value = asset.purchaseDate;
  $("#deliveryDate").value = asset.deliveryDate || "";
  $("#assetStatus").value = asset.status;
  $("#assetNotes").value = asset.notes;
  $("#formTitle").textContent = t("Edit IT asset");
  $("#submitBtn").textContent = t("Save changes");
  $("#cancelEditBtn").classList.remove("hidden");
}

function deleteAsset(assetId) {
  const asset = assets.find((item) => item.id === assetId);
  if (!asset || !confirmDelete()) return;
  assets = assets.filter((item) => item.id !== assetId);
  addAudit("Delete Asset", `Deleted asset ${asset.name}`);
  addAudit("Delete confirmed", `Deleted asset ${asset.name}`);
  if (editingId === assetId) resetAssetForm();
  saveAssets();
  renderAll();
}

function resetAssetForm() {
  editingId = null;
  assetForm.reset();
  $("#assetStatus").value = "Active";
  populateEmployeeOptions("");
  $("#assetCompany").value = "";
  $("#formTitle").textContent = t("Add IT asset");
  $("#submitBtn").textContent = t("Add asset");
  $("#cancelEditBtn").classList.add("hidden");
}

function saveHandoverFromForm(event) {
  event.preventDefault();
  const asset = assets.find((item) => item.id === $("#handoverAsset").value);
  if (!asset) return;
  const record = {
    id: editingHandoverId || createId(),
    assetId: asset.id,
    assetName: asset.name,
    employeeName: $("#handoverEmployee").value.trim(),
    company: $("#handoverCompany").value,
    handoverDate: $("#handoverDate").value,
    returnDate: $("#returnDate").value,
    status: $("#handoverStatus").value
  };
  if (record.status === "Assigned") {
    handovers = handovers.map((item) => item.assetId === record.assetId && item.id !== record.id && item.status === "Assigned" ? { ...item, status: "Returned", returnDate: record.handoverDate } : item);
  }

  if (editingHandoverId) {
    handovers = handovers.map((item) => item.id === editingHandoverId ? record : item);
    addAudit("Update record", `Updated handover for ${record.assetName}`);
  } else {
    handovers.unshift(record);
    addAudit("Save new record", `Assigned ${record.assetName} to ${record.employeeName}`);
  }

  syncAssetAssignment(record);
  saveHandovers();
  saveAssets();
  postSave(handoverForm, Boolean(editingHandoverId), resetHandoverForm);
  renderAll();
}

function renderHandovers() {
  if (!$("#handoverTable")) return;
  populateHandoverAssetOptions();
  const visibleHandovers = getVisibleHandovers();
  $("#handoverTable").innerHTML = visibleHandovers.map((record) => `
    <tr>
      <td>${escapeHtml(getAssetTag(record.assetId) || record.assetId)}</td>
      <td>${escapeHtml(record.assetName)}</td>
      <td>${escapeHtml(record.employeeName)}</td>
      <td>${escapeHtml(t(record.company || "Not set"))}</td>
      <td>${formatDate(record.handoverDate)}</td>
      <td>${formatDate(record.returnDate)}</td>
      <td><span class="status-pill ${record.status === "Returned" ? "storage" : "active"}">${escapeHtml(t(record.status))}</span></td>
      <td><div class="actions">
        <button class="action-btn" type="button" data-action="edit" data-id="${record.id}">${t("Edit")}</button>
        ${record.status === "Assigned" ? `<button class="action-btn" type="button" data-action="return" data-id="${record.id}">${t("Return")}</button>` : ""}
        <button class="action-btn delete" type="button" data-action="delete" data-id="${record.id}">${t("Delete")}</button>
      </div></td>
    </tr>
  `).join("");
  $("#handoverEmptyState").classList.toggle("hidden", visibleHandovers.length > 0);
}

function handleHandoverAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  if (button.dataset.action === "edit") startHandoverEdit(button.dataset.id);
  if (button.dataset.action === "delete") deleteHandover(button.dataset.id);
  if (button.dataset.action === "return") returnHandover(button.dataset.id);
}

function startHandoverEdit(recordId) {
  const record = handovers.find((item) => item.id === recordId);
  if (!record) return;
  editingHandoverId = record.id;
  populateHandoverAssetOptions();
  $("#handoverAsset").value = record.assetId;
  $("#handoverEmployee").value = record.employeeName;
  $("#handoverCompany").value = record.company;
  $("#handoverDate").value = record.handoverDate;
  $("#returnDate").value = record.returnDate;
  $("#handoverStatus").value = record.status;
  $("#handoverFormTitle").textContent = t("Edit handover");
  $("#cancelHandoverEditBtn").classList.remove("hidden");
}

function deleteHandover(recordId) {
  const record = handovers.find((item) => item.id === recordId);
  if (!record || !confirmDelete()) return;
  handovers = handovers.filter((item) => item.id !== recordId);
  clearAssetAssignmentIfCurrent(record);
  saveHandovers();
  saveAssets();
  addAudit("Delete confirmed", `Deleted handover for ${record.assetName}`);
  renderAll();
}

function returnHandover(recordId) {
  const record = handovers.find((item) => item.id === recordId);
  if (!record) return;
  record.status = "Returned";
  record.returnDate = record.returnDate || new Date().toISOString().slice(0, 10);
  clearAssetAssignmentIfCurrent(record);
  saveHandovers();
  saveAssets();
  addAudit("Update record", `Returned ${record.assetName} from ${record.employeeName}`);
  renderAll();
}

function resetHandoverForm() {
  if (!handoverForm) return;
  editingHandoverId = null;
  handoverForm.reset();
  populateHandoverAssetOptions();
  $("#handoverDate").value = new Date().toISOString().slice(0, 10);
  $("#handoverStatus").value = "Assigned";
  $("#handoverFormTitle").textContent = t("Asset handover");
  $("#cancelHandoverEditBtn").classList.add("hidden");
}

function saveStockFromForm(event) {
  event.preventDefault();
  const itemCode = $("#stockItemCode").value.trim();
  const quantity = readNumber($("#stockQuantity").value);
  const minStock = readNumber($("#stockMinLevel").value);
  const purchaseCost = $("#stockPurchaseCost").value === "" ? "" : readNumber($("#stockPurchaseCost").value);
  const duplicateCode = stockItems.some((stockItem) => stockItem.itemCode.toLowerCase() === itemCode.toLowerCase() && stockItem.id !== editingStockId);
  if (duplicateCode) {
    alert(t("Item code already exists."));
    return;
  }
  if (quantity < 0 || minStock < 0) {
    alert(t("Quantity and minimum stock level must be zero or greater."));
    return;
  }
  if (purchaseCost !== "" && purchaseCost < 0) {
    alert(t("Purchase cost must be zero or greater."));
    return;
  }
  const item = {
    id: editingStockId || createId(),
    itemCode,
    itemName: $("#stockItemName").value.trim(),
    category: $("#stockCategory").value,
    brand: $("#stockBrand").value.trim(),
    model: $("#stockModel").value.trim(),
    specification: $("#stockSpecification").value.trim(),
    quantity,
    minStock,
    location: $("#stockLocation").value.trim(),
    status: $("#stockStatus").value,
    supplier: $("#stockSupplier").value.trim(),
    purchaseDate: $("#stockPurchaseDate").value,
    purchaseCost,
    invoiceNumber: $("#stockInvoiceNumber").value.trim(),
    warrantyExpiry: $("#stockWarrantyExpiry").value,
    notes: $("#stockNotes").value.trim()
  };
  if (editingStockId) {
    stockItems = stockItems.map((stockItem) => stockItem.id === editingStockId ? item : stockItem);
    addAudit("Edit Stock Item", `Edited stock item ${item.itemName}`);
    addAudit("Update record", `Updated stock item ${item.itemName}`);
  } else {
    stockItems.unshift(item);
    addAudit("Add Stock Item", `Added ${item.quantity} ${item.itemName}`);
    addAudit("Save new record", `Saved stock item ${item.itemName}`);
  }
  saveStock();
  postSave(stockForm, Boolean(editingStockId), resetStockForm);
  renderAll();
}

function renderStock() {
  const visibleStock = getVisibleStock();
  $("#stockTable").innerHTML = visibleStock.map((item) => {
    const lowStock = isLowStock(item);
    return `
      <tr class="${lowStock ? "low-stock-row" : ""}">
        <td><span class="asset-name">${escapeHtml(item.itemName)}<small>${escapeHtml(item.itemCode)} - ${escapeHtml(item.specification || t("No specification"))}</small></span></td>
        <td>${escapeHtml(t(item.category))}</td>
        <td>${escapeHtml([item.brand, item.model].filter(Boolean).join(" / ") || t("Not set"))}</td>
        <td><strong>${item.quantity}</strong>${lowStock ? `<span class="warning-badge">${t("Low Stock")}</span>` : ""}</td>
        <td>${item.minStock}</td>
        <td>${escapeHtml(item.supplier || t("Not set"))}<small class="cell-note">${escapeHtml(item.invoiceNumber || "")}</small></td>
        <td>${formatDate(item.purchaseDate)}<small class="cell-note">${formatCurrency(item.purchaseCost)}</small></td>
        <td>${formatDate(item.warrantyExpiry)}</td>
        <td>${escapeHtml(item.location || t("Not set"))}</td>
        <td><span class="status-pill ${getStatusClass(item.status)}">${escapeHtml(t(item.status))}</span></td>
        <td><div class="actions">
          <button class="action-btn" type="button" data-action="issue" data-id="${item.id}">${t("Issue")}</button>
          <button class="action-btn" type="button" data-action="duplicate" data-id="${item.id}">${t("Duplicate")}</button>
          <button class="action-btn" type="button" data-action="edit" data-id="${item.id}">${t("Edit")}</button>
          <button class="action-btn delete" type="button" data-action="delete" data-id="${item.id}">${t("Delete")}</button>
        </div></td>
      </tr>`;
  }).join("");
  $("#stockEmptyState").classList.toggle("hidden", visibleStock.length > 0);
  renderMaintenanceOptions();
}

function handleStockAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  if (button.dataset.action === "edit") startStockEdit(button.dataset.id);
  if (button.dataset.action === "delete") deleteStockItem(button.dataset.id);
  if (button.dataset.action === "issue") openIssueModal(button.dataset.id);
  if (button.dataset.action === "duplicate") duplicateStockItem(button.dataset.id);
}

function startStockEdit(stockId) {
  const item = stockItems.find((stockItem) => stockItem.id === stockId);
  if (!item) return;
  editingStockId = item.id;
  $("#stockItemCode").value = item.itemCode;
  $("#stockItemName").value = item.itemName;
  $("#stockCategory").value = item.category;
  $("#stockBrand").value = item.brand;
  $("#stockModel").value = item.model;
  $("#stockSpecification").value = item.specification;
  $("#stockQuantity").value = item.quantity;
  $("#stockMinLevel").value = item.minStock;
  $("#stockLocation").value = item.location;
  $("#stockStatus").value = item.status;
  $("#stockSupplier").value = item.supplier || "";
  $("#stockPurchaseDate").value = item.purchaseDate || "";
  $("#stockPurchaseCost").value = item.purchaseCost || "";
  $("#stockInvoiceNumber").value = item.invoiceNumber || "";
  $("#stockWarrantyExpiry").value = item.warrantyExpiry || "";
  $("#stockNotes").value = item.notes;
  $("#stockFormTitle").textContent = t("Edit stock item");
  $("#stockSubmitBtn").textContent = t("Save stock changes");
  $("#cancelStockEditBtn").classList.remove("hidden");
}

function deleteStockItem(stockId) {
  const item = stockItems.find((stockItem) => stockItem.id === stockId);
  if (!item || !confirmDelete()) return;
  stockItems = stockItems.filter((stockItem) => stockItem.id !== stockId);
  addAudit("Delete Stock Item", `Deleted stock item ${item.itemName}`);
  addAudit("Delete confirmed", `Deleted stock item ${item.itemName}`);
  if (editingStockId === stockId) resetStockForm();
  saveStock();
  renderAll();
}

function duplicateStockItem(stockId) {
  const item = stockItems.find((stockItem) => stockItem.id === stockId);
  if (!item) return;
  editingStockId = null;
  $("#stockItemCode").value = "";
  $("#stockItemName").value = item.itemName;
  $("#stockCategory").value = item.category;
  $("#stockBrand").value = item.brand || "";
  $("#stockModel").value = item.model || "";
  $("#stockSpecification").value = item.specification || "";
  $("#stockQuantity").value = item.quantity;
  $("#stockMinLevel").value = item.minStock;
  $("#stockLocation").value = item.location || "";
  $("#stockStatus").value = item.status || "Available";
  $("#stockSupplier").value = item.supplier || "";
  $("#stockPurchaseDate").value = item.purchaseDate || "";
  $("#stockPurchaseCost").value = item.purchaseCost || "";
  $("#stockInvoiceNumber").value = item.invoiceNumber || "";
  $("#stockWarrantyExpiry").value = item.warrantyExpiry || "";
  $("#stockNotes").value = item.notes || "";
  $("#stockFormTitle").textContent = t("Add stock item");
  $("#stockSubmitBtn").textContent = t("Add stock item");
  stockForm.dataset.dirty = "true";
  addAudit("Stock item duplicated", `Duplicated stock item ${item.itemName}`);
  showPage("stockPage");
  $("#stockItemCode").focus();
}

function resetStockForm() {
  editingStockId = null;
  stockForm.reset();
  $("#stockQuantity").value = 0;
  $("#stockMinLevel").value = 0;
  $("#stockStatus").value = "Available";
  $("#stockFormTitle").textContent = t("Add stock item");
  $("#stockSubmitBtn").textContent = t("Add stock item");
  $("#cancelStockEditBtn").classList.add("hidden");
}

function openIssueModal(stockId) {
  const item = stockItems.find((stockItem) => stockItem.id === stockId);
  if (!item) return;
  $("#issueStockId").value = item.id;
  $("#issueItemName").value = item.itemName;
  $("#issueAvailableQuantity").value = item.quantity;
  $("#issueQuantity").value = item.quantity > 0 ? 1 : 0;
  $("#issueDate").value = new Date().toISOString().slice(0, 10);
  $("#issueModal").classList.remove("hidden");
}

function closeIssueModal() {
  $("#issueModal").classList.add("hidden");
  issueForm.reset();
}

function saveIssueRecord(event) {
  event.preventDefault();
  const stockId = $("#issueStockId").value;
  const item = stockItems.find((stockItem) => stockItem.id === stockId);
  const quantity = readNumber($("#issueQuantity").value);
  if (!item) return;
  if (quantity < 1 || quantity > item.quantity) {
    alert(t("Quantity to issue must be between 1 and the available quantity."));
    return;
  }
  stockItems = stockItems.map((stockItem) => stockItem.id === stockId ? { ...stockItem, quantity: stockItem.quantity - quantity } : stockItem);
  const record = {
    id: createId(),
    date: $("#issueDate").value,
    itemCode: item.itemCode,
    itemName: item.itemName,
    quantity,
    issuedTo: $("#issueIssuedTo").value.trim(),
    department: $("#issueDepartment").value.trim(),
    purpose: $("#issuePurpose").value.trim(),
    notes: $("#issueNotes").value.trim()
  };
  issueHistory.unshift(record);
  addAudit("Issued Stock", `Issued ${quantity} ${item.itemName} to ${record.issuedTo}`);
  addAudit("Save new record", `Saved issue record for ${item.itemName}`);
  saveStock();
  saveIssues();
  markClean(issueForm);
  showToast(t("Saved successfully"));
  if (submitMode === "save-new") {
    issueForm.reset();
    $("#issueStockId").value = item.id;
    $("#issueItemName").value = item.itemName;
    $("#issueAvailableQuantity").value = Math.max(0, item.quantity - quantity);
    $("#issueQuantity").value = Math.max(0, item.quantity - quantity) > 0 ? 1 : 0;
    $("#issueDate").value = new Date().toISOString().slice(0, 10);
  } else {
    closeIssueModal();
  }
  submitMode = "save";
  renderAll();
}

function saveMaintenanceRecord(event) {
  event.preventDefault();
  const asset = assets.find((item) => item.id === $("#maintenanceAsset").value);
  const usedItems = getSelectedUsedItems();
  if (!asset) {
    alert(t("Please choose an asset for this maintenance record."));
    return;
  }
  const insufficientItem = usedItems.find((usedItem) => {
    const stockItem = stockItems.find((item) => item.id === usedItem.stockId);
    return stockItem && usedItem.quantity > stockItem.quantity;
  });
  if (insufficientItem) {
    alert(`${insufficientItem.itemName} ${t("does not have enough available quantity.")}`);
    return;
  }
  stockItems = stockItems.map((stockItem) => {
    const usedItem = usedItems.find((item) => item.stockId === stockItem.id);
    return usedItem ? { ...stockItem, quantity: Math.max(0, stockItem.quantity - usedItem.quantity) } : stockItem;
  });
  maintenanceRecords.unshift({
    id: createId(),
    assetId: asset.id,
    assetName: `${asset.name} (${asset.tag})`,
    date: $("#maintenanceDate").value,
    technician: $("#maintenanceTechnician").value.trim(),
    usedItems,
    notes: $("#maintenanceNotes").value.trim()
  });
  addAudit("Add Maintenance Record", `Added maintenance record for ${asset.name}`);
  addAudit("Save new record", `Saved maintenance record for ${asset.name}`);
  saveStock();
  saveMaintenance();
  postSave(maintenanceForm, false, resetMaintenanceForm, submitMode === "save-new");
  renderAll();
}

function resetMaintenanceForm() {
  maintenanceForm.reset();
  $("#usedItemsList").innerHTML = "";
  setDefaultDates();
  addUsedItemRow();
}

function renderMaintenance() {
  renderMaintenanceOptions();
  $("#maintenanceTable").innerHTML = maintenanceRecords.map((record) => `
    <tr><td>${formatDate(record.date)}</td><td>${escapeHtml(record.assetName)}</td><td>${escapeHtml(record.technician || t("Not set"))}</td><td>${escapeHtml(record.usedItems.map((item) => `${item.itemName} x${item.quantity}`).join(", ") || t("None"))}</td><td>${escapeHtml(record.notes || t("No notes"))}</td></tr>
  `).join("");
  $("#maintenanceEmptyState").classList.toggle("hidden", maintenanceRecords.length > 0);
}

function renderMaintenanceOptions() {
  const selectedAssetId = $("#maintenanceAsset").value;
  $("#maintenanceAsset").innerHTML = `<option value="">${t("Choose asset")}</option>${assets.map((asset) => `<option value="${asset.id}">${escapeHtml(asset.name)} (${escapeHtml(asset.tag)})</option>`).join("")}`;
  $("#maintenanceAsset").value = selectedAssetId;
  if (!$("#usedItemsList").children.length) addUsedItemRow();
  $$("#usedItemsList select").forEach((select) => {
    const currentValue = select.value;
    select.innerHTML = getStockOptionsHtml();
    select.value = currentValue;
  });
}

function addUsedItemRow() {
  const row = document.createElement("div");
  row.className = "used-item-row";
  row.innerHTML = `<select aria-label="${t("Stock item used")}">${getStockOptionsHtml()}</select><input type="number" min="1" step="1" value="1" aria-label="${t("Quantity used")}"><button class="action-btn delete" type="button" data-action="remove-used-item">${t("Remove")}</button>`;
  $("#usedItemsList").append(row);
}

function getSelectedUsedItems() {
  return $$("#usedItemsList .used-item-row").map((row) => {
    const select = row.querySelector("select");
    const input = row.querySelector("input");
    const stockItem = stockItems.find((item) => item.id === select.value);
    if (!stockItem) return null;
    return { stockId: stockItem.id, itemCode: stockItem.itemCode, itemName: stockItem.itemName, category: stockItem.category, quantity: Math.max(1, readNumber(input.value)) };
  }).filter(Boolean);
}

function getStockOptionsHtml() {
  return `<option value="">${t("Choose stock item")}</option>${stockItems.map((item) => `<option value="${item.id}">${escapeHtml(item.itemName)} - ${escapeHtml(item.specification || t(item.category))} (${item.quantity} ${t("available")})</option>`).join("")}`;
}

function renderIssueHistory() {
  const records = getVisibleIssues();
  const rows = records.map((record) => `
    <tr><td>${formatDate(record.date)}</td><td>${escapeHtml(record.itemCode)}</td><td>${escapeHtml(record.itemName)}</td><td>${record.quantity}</td><td>${escapeHtml(record.issuedTo)}</td><td>${escapeHtml(record.department || t("Not set"))}</td><td>${escapeHtml(record.purpose || t("Not set"))}</td><td>${escapeHtml(record.notes || t("No notes"))}</td></tr>
  `).join("");
  $("#issueHistoryTable").innerHTML = rows;
  $("#maintenanceIssueTable").innerHTML = rows;
  $("#issueHistoryEmptyState").classList.toggle("hidden", records.length > 0);
}

function saveSupplierFromForm(event) {
  event.preventDefault();
  const supplier = {
    id: editingSupplierId || createId(),
    name: $("#supplierName").value.trim(),
    contact: $("#supplierContact").value.trim(),
    phone: $("#supplierPhone").value.trim(),
    email: $("#supplierEmail").value.trim(),
    address: $("#supplierAddress").value.trim(),
    itemsSupplied: $("#supplierItems").value.trim(),
    notes: $("#supplierNotes").value.trim()
  };
  if (editingSupplierId) {
    suppliers = suppliers.map((item) => item.id === editingSupplierId ? supplier : item);
    addAudit("Edit Supplier", `Edited supplier ${supplier.name}`);
    addAudit("Update record", `Updated supplier ${supplier.name}`);
  } else {
    suppliers.unshift(supplier);
    addAudit("Add Supplier", `Added supplier ${supplier.name}`);
    addAudit("Save new record", `Saved supplier ${supplier.name}`);
  }
  saveSuppliers();
  postSave(supplierForm, Boolean(editingSupplierId), resetSupplierForm);
  renderAll();
}

function renderSuppliers() {
  const query = $("#supplierSearchInput").value.trim().toLowerCase();
  const visibleSuppliers = suppliers.filter((supplier) => [supplier.name, supplier.contact, supplier.phone, supplier.email, supplier.address, supplier.itemsSupplied, supplier.notes].join(" ").toLowerCase().includes(query));
  $("#supplierTable").innerHTML = visibleSuppliers.map((supplier) => `
    <tr><td><span class="asset-name">${escapeHtml(supplier.name)}<small>${escapeHtml(supplier.address || t("No address"))}</small></span></td><td>${escapeHtml(supplier.contact || t("Not set"))}</td><td>${escapeHtml(supplier.phone || t("Not set"))}</td><td>${escapeHtml(supplier.email || t("Not set"))}</td><td>${escapeHtml(supplier.itemsSupplied || t("Not set"))}</td><td><div class="actions"><button class="action-btn" type="button" data-action="edit" data-id="${supplier.id}">${t("Edit")}</button><button class="action-btn delete" type="button" data-action="delete" data-id="${supplier.id}">${t("Delete")}</button></div></td></tr>
  `).join("");
  $("#supplierEmptyState").classList.toggle("hidden", visibleSuppliers.length > 0);
}

function handleSupplierAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const supplier = suppliers.find((item) => item.id === button.dataset.id);
  if (!supplier) return;
  if (button.dataset.action === "edit") {
    editingSupplierId = supplier.id;
    $("#supplierName").value = supplier.name;
    $("#supplierContact").value = supplier.contact;
    $("#supplierPhone").value = supplier.phone;
    $("#supplierEmail").value = supplier.email;
    $("#supplierAddress").value = supplier.address;
    $("#supplierItems").value = supplier.itemsSupplied;
    $("#supplierNotes").value = supplier.notes;
    $("#supplierFormTitle").textContent = t("Edit supplier");
    $("#supplierSubmitBtn").textContent = t("Save supplier");
    $("#cancelSupplierEditBtn").classList.remove("hidden");
  }
  if (button.dataset.action === "delete" && confirmDelete()) {
    suppliers = suppliers.filter((item) => item.id !== supplier.id);
    addAudit("Delete Supplier", `Deleted supplier ${supplier.name}`);
    addAudit("Delete confirmed", `Deleted supplier ${supplier.name}`);
    saveSuppliers();
    renderAll();
  }
}

function resetSupplierForm() {
  editingSupplierId = null;
  supplierForm.reset();
  $("#supplierFormTitle").textContent = t("Add supplier");
  $("#supplierSubmitBtn").textContent = t("Add supplier");
  $("#cancelSupplierEditBtn").classList.add("hidden");
}

function saveRequestFromForm(event) {
  event.preventDefault();
  const mobile = $("#requestMobile").value.trim();
  const email = $("#requestEmail").value.trim();
  const files = [...$("#requestAttachments").files];
  if (!isValidMobile(mobile)) {
    alert(t("Please enter a valid mobile number."));
    return;
  }
  if (email && !isValidEmail(email)) {
    alert(t("Please enter a valid email address."));
    return;
  }
  if (files.some((file) => !isAllowedAttachment(file))) {
    alert(t("Only image and PDF attachments are allowed."));
    return;
  }
  if (files.some((file) => file.size > 10 * 1024 * 1024)) {
    alert(t("Each attachment must be 10 MB or less."));
    return;
  }
  const requestNumber = generateRequestNumber();
  const attachments = files.map((file) => ({ name: file.name, type: file.type, size: file.size }));
  const request = {
    id: createId(),
    requestNumber,
    date: new Date().toISOString(),
    requester: $("#requesterName").value.trim(),
    employeeId: $("#requestEmployeeId").value.trim(),
    department: $("#requestDepartment").value.trim(),
    site: $("#requestSite").value.trim(),
    mobile,
    email,
    category: $("#requestCategory").value,
    type: $("#requestType").value,
    priority: $("#requestPriority").value,
    subject: $("#requestSubject").value.trim(),
    details: $("#requestDetails").value.trim(),
    attachments,
    status: "New",
    assignedTo: "Unassigned",
    lastUpdate: new Date().toISOString(),
    comments: "",
    internalNotes: "",
    publicNotes: "",
    completionDate: ""
  };
  requests.unshift(request);
  saveRequests();
  localStorage.removeItem(STORAGE_KEYS.requestDraft);
  addAudit("Ticket Created", `Created ticket ${requestNumber} by ${request.requester}`);
  addAudit("Save new record", `Saved ticket ${requestNumber}`);
  markClean($("#requestForm"));
  $("#requestSuccess").innerHTML = `${t("Request submitted successfully.")}<br>${t("Your Request Number is:")} <strong>${requestNumber}</strong>`;
  $("#requestSuccess").classList.remove("hidden");
  showToast(t("Request submitted successfully"));
  if (submitMode === "save-new") {
    resetRequestForm();
  }
  submitMode = "save";
  renderAll();
}

function renderRequests() {
  const tickets = getVisibleTickets();
  const trackNumber = $("#trackRequestSearch")?.value.trim().toLowerCase() || "";
  const tracked = trackNumber ? requests.filter((request) => request.requestNumber?.toLowerCase() === trackNumber) : [];

  $("#ticketTable").innerHTML = tickets.map((ticket) => `
    <tr>
      <td><span class="asset-name">${escapeHtml(ticket.requestNumber)}<small>${formatDateTime(ticket.date)}</small></span></td>
      <td>${escapeHtml(ticket.requester)}<small class="cell-note">${escapeHtml(ticket.employeeId || "")}</small></td>
      <td>${escapeHtml(ticket.department || t("Not set"))}</td>
      <td>${escapeHtml(ticket.site || t("Not set"))}</td>
      <td>${escapeHtml(t(ticket.category || "Other"))}</td>
      <td><span class="status-pill ${ticket.priority === "Urgent" || ticket.priority === "High" ? "status-maintenance" : "status-available"}">${escapeHtml(t(ticket.priority))}</span></td>
      <td><span class="status-pill status-reserved">${escapeHtml(t(ticket.status))}</span></td>
      <td>${escapeHtml(ticket.assignedTo || t("Unassigned"))}</td>
      <td>${formatDateTime(ticket.lastUpdate || ticket.date)}</td>
      <td><div class="actions">
        <button class="action-btn" type="button" data-action="assign" data-id="${ticket.id}">${t("Assign Ticket")}</button>
        <button class="action-btn" type="button" data-action="status" data-id="${ticket.id}">${t("Change Status")}</button>
        <button class="action-btn" type="button" data-action="internal" data-id="${ticket.id}">${t("Add Internal Notes")}</button>
        <button class="action-btn" type="button" data-action="public" data-id="${ticket.id}">${t("Add Public Notes")}</button>
        <button class="action-btn" type="button" data-action="resolved" data-id="${ticket.id}">${t("Mark Resolved")}</button>
        <button class="action-btn delete" type="button" data-action="close" data-id="${ticket.id}">${t("Close Ticket")}</button>
      </div></td>
    </tr>
  `).join("");

  $("#trackRequestTable").innerHTML = tracked.map((ticket) => `
    <tr>
      <td>${escapeHtml(ticket.requestNumber)}</td>
      <td><span class="status-pill status-reserved">${escapeHtml(t(ticket.status))}</span></td>
      <td>${escapeHtml(t(ticket.priority))}</td>
      <td>${escapeHtml(ticket.assignedTo || t("Unassigned"))}</td>
      <td>${formatDateTime(ticket.lastUpdate || ticket.date)}</td>
      <td>${escapeHtml(ticket.publicNotes || ticket.comments || t("No notes"))}</td>
      <td>${escapeHtml((ticket.attachments || []).map((file) => file.name).join(", ") || t("None"))}</td>
      <td>${ticket.completionDate ? formatDateTime(ticket.completionDate) : t("Not set")}</td>
    </tr>
  `).join("");
  $("#ticketEmptyState").classList.toggle("hidden", tickets.length > 0);
}

function handleRequestAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const request = requests.find((item) => item.id === button.dataset.id);
  if (!request) return;
  const action = button.dataset.action;
  if (action === "assign") {
    const assignedTo = prompt(t("Assigned IT Staff"), request.assignedTo || "");
    if (assignedTo === null) return;
    request.assignedTo = assignedTo.trim() || "Unassigned";
    request.status = request.status === "New" ? "Assigned" : request.status;
    addAudit("Ticket Assigned", `Assigned ${request.requestNumber} to ${request.assignedTo}`);
  }
  if (action === "status") {
    const status = prompt(`${t("Change Status")}: ${ticketStatuses.join(", ")}`, request.status);
    if (!status || !ticketStatuses.includes(status)) return;
    request.status = status;
    addAudit("Status Changed", `Changed ${request.requestNumber} to ${status}`);
  }
  if (action === "internal") {
    const note = prompt(t("Add Internal Notes"), request.internalNotes || "");
    if (note === null) return;
    request.internalNotes = note;
  }
  if (action === "public") {
    const note = prompt(t("Add Public Notes"), request.publicNotes || "");
    if (note === null) return;
    request.publicNotes = note;
    request.comments = note;
  }
  if (action === "resolved") {
    request.status = "Resolved";
    request.completionDate = new Date().toISOString();
    addAudit("Ticket Resolved", `Resolved ${request.requestNumber}`);
  }
  if (action === "close") {
    request.status = "Closed";
    request.completionDate = request.completionDate || new Date().toISOString();
    addAudit("Ticket Closed", `Closed ${request.requestNumber}`);
  }
  request.lastUpdate = new Date().toISOString();
  saveRequests();
  showToast(t("Updated successfully"));
  renderAll();
}

function resetRequestForm() {
  $("#requestForm").reset();
  $("#requestSuccess").classList.add("hidden");
  localStorage.removeItem(STORAGE_KEYS.requestDraft);
}

function generateRequestNumber() {
  const year = new Date().getFullYear();
  const currentCounter = readNumber(localStorage.getItem(STORAGE_KEYS.ticketCounter)) + 1;
  localStorage.setItem(STORAGE_KEYS.ticketCounter, String(currentCounter));
  return `REQ-${year}-${String(currentCounter).padStart(5, "0")}`;
}

function saveUserFromForm(event) {
  event.preventDefault();
  const user = {
    ...defaultAdminUser,
    fullName: $("#userFullName").value.trim() || "Admin",
    email: $("#userEmail").value.trim(),
    role: "Admin",
    company: $("#userCompany").value || "AMJAAD GROUP",
    department: $("#userDepartment").value.trim() || "Administration"
  };
  users = [{ ...user, permissions: [...defaultAdminUser.permissions] }];
  addAudit("Update record", "Updated default Admin account");
  saveUsers();
  postSave($("#userForm"), true, resetUserForm);
  renderAll();
}

function renderUsers() {
  $("#userTable").innerHTML = users.map((user) => `
    <tr><td><span class="asset-name">${escapeHtml(user.username)}<small>${escapeHtml(user.fullName)}</small></span></td><td>${escapeHtml(user.password)}</td><td>${escapeHtml(t(user.company || "AMJAAD GROUP"))}</td><td>${escapeHtml(t(user.role))}</td><td>${escapeHtml(user.permissions.join(", "))}</td><td><div class="actions"><button class="action-btn" type="button" data-action="edit" data-id="${user.id}">${t("Edit")}</button><button class="action-btn" type="button" data-action="password" data-id="${user.id}">${t("Reset Password")}</button></div></td></tr>
  `).join("");
  $("#userEmptyState").classList.toggle("hidden", users.length > 0);
}

function handleUserAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const user = users.find((item) => item.id === button.dataset.id);
  if (!user) return;
  if (button.dataset.action === "edit") {
    editingUserId = user.id;
    $("#userFullName").value = user.fullName;
    $("#userEmail").value = user.email;
    $("#userRole").value = "Admin";
    $("#userCompany").value = normalizeCompany(user.company || "AMJAAD GROUP");
    $("#userDepartment").value = user.department;
    $("#userFormTitle").textContent = t("Edit User");
    $("#cancelUserEditBtn").classList.remove("hidden");
  }
  if (button.dataset.action === "password") {
    $("#passwordUserId").value = user.id;
    $("#passwordUserName").value = user.fullName;
    $("#newPassword").value = "";
    $("#passwordModal").classList.remove("hidden");
  }
}

function resetUserForm() {
  editingUserId = null;
  $("#userForm").reset();
  $("#userRole").value = "Admin";
  $("#userCompany").value = "AMJAAD GROUP";
  $("#userFormTitle").textContent = t("Add User");
  $("#cancelUserEditBtn").classList.add("hidden");
}

function savePasswordReset(event) {
  event.preventDefault();
  const user = users.find((item) => item.id === $("#passwordUserId").value);
  if (user) {
    users = users.map((item) => item.id === user.id ? { ...item, password: $("#newPassword").value || item.password || defaultAdminUser.password } : item);
    saveUsers();
  }
  addAudit("Reset Password", `Reset password for ${user?.username || "Admin"}`);
  markClean($("#resetPasswordForm"));
  $("#passwordModal").classList.add("hidden");
  $("#resetPasswordForm").reset();
  showToast(t("Password reset successfully"));
}

function resetPasswordForm() {
  $("#resetPasswordForm").reset();
}

function resetSettingsForm() {
  $("#settingsForm").reset();
}

function getLoggedInUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.session));
  } catch {
    return null;
  }
}

function isLoggedIn() {
  const session = getLoggedInUser();
  return Boolean(session && session.username === defaultAdminUser.username && session.role === "Admin");
}

function initializeAuth() {
  loggedInUser = getLoggedInUser();
  const requestedPage = getRequestedPage();
  if (isLoggedIn()) {
    showAuthenticatedApp();
    showPage(requestedPage);
  } else if (publicPages.has(requestedPage)) {
    showPage(requestedPage);
  } else {
    showLogin();
  }
}

function getRequestedPage() {
  const hashPage = location.hash.replace("#", "");
  if (hashPage === "handoverPage") return "dashboardPage";
  return document.getElementById(hashPage)?.classList.contains("app-page") ? hashPage : "dashboardPage";
}

function showLogin() {
  loggedInUser = null;
  loginPage.classList.remove("hidden");
  appShell.classList.add("hidden");
  appPages.forEach((page) => page.classList.add("hidden"));
  $("#loginUsername").focus();
}

function showAuthenticatedApp() {
  loginPage.classList.add("hidden");
  appShell.classList.remove("hidden");
  loggedInUser = getLoggedInUser();
  $("#currentUserName").textContent = loggedInUser?.username || "Admin";
  $("#currentUserRole").textContent = loggedInUser?.role || "Admin";
}

function handleLogin(event) {
  event.preventDefault();
  const username = $("#loginUsername").value.trim();
  const password = $("#loginPassword").value;
  if (username === defaultAdminUser.username && password === defaultAdminUser.password) {
    const session = { username: "Admin", role: "Admin", loginAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
    $("#loginError").classList.add("hidden");
    $("#loginForm").reset();
    showAuthenticatedApp();
    showPage("dashboardPage");
    return;
  }
  $("#loginError").classList.remove("hidden");
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.session);
  loggedInUser = null;
  activePage = "loginPage";
  history.replaceState(null, "", location.pathname);
  showLogin();
}

function canAccessPage(pageId) {
  return publicPages.has(pageId) || isLoggedIn();
}

function routeGuard(pageId) {
  if (pageId === "handoverPage") {
    showPage("dashboardPage");
    return false;
  }
  if (canAccessPage(pageId)) return true;
  showLogin();
  return false;
}

function getDefaultUsers() {
  return [{ ...defaultAdminUser, permissions: [...defaultAdminUser.permissions] }];
}

function enforceDefaultAdminUser() {
  if (!Array.isArray(users) || users.length === 0) {
    users = getDefaultUsers();
    saveUsers();
    return;
  }
  users = users.map(migrateUser);
  saveUsers();
}

function addAudit(actionType, details, user = currentUser) {
  auditLog.unshift({ id: createId(), timestamp: new Date().toISOString(), user, actionType, details });
  saveAudit();
}

function renderAuditLog() {
  const query = $("#auditSearchInput").value.trim().toLowerCase();
  const records = auditLog.filter((record) => [record.timestamp, record.user, record.actionType, record.details].join(" ").toLowerCase().includes(query));
  $("#auditTable").innerHTML = records.map((record) => `<tr><td>${formatDateTime(record.timestamp)}</td><td>${escapeHtml(record.user)}</td><td>${escapeHtml(t(record.actionType))}</td><td>${escapeHtml(record.details)}</td></tr>`).join("");
  $("#auditEmptyState").classList.toggle("hidden", records.length > 0);
}

function openQrModal(assetId) {
  const asset = assets.find((item) => item.id === assetId);
  if (!asset) return;
  currentQrAsset = asset;
  const payload = [`${t("Asset ID")}: ${asset.id}`, `${t("Device Type")}: ${t(asset.category)}`, `${t("Brand")}: ${asset.brand || "N/A"}`, `${t("Model")}: ${asset.model || "N/A"}`, `${t("Serial Number")}: ${asset.serialNumber || "N/A"}`, `${t("Assigned Employee")}: ${getAssetEmployee(asset) || t("Unassigned")}`, `${t("Company")}: ${t(getAssetCompany(asset) || "Not set")}`].join("\n");
  $("#qrPayload").textContent = payload;
  drawQrLikeCode(payload);
  $("#qrModal").classList.remove("hidden");
}

function closeQrModal() {
  $("#qrModal").classList.add("hidden");
}

function drawQrLikeCode(payload) {
  const canvas = $("#qrCanvas");
  const context = canvas.getContext("2d");
  const size = canvas.width;
  const cells = 29;
  const cellSize = Math.floor(size / cells);
  context.fillStyle = "#fffdf8";
  context.fillRect(0, 0, size, size);
  context.fillStyle = "#111b2d";
  drawFinder(context, 1, 1, cellSize);
  drawFinder(context, cells - 8, 1, cellSize);
  drawFinder(context, 1, cells - 8, cellSize);
  const hash = hashText(payload);
  for (let y = 0; y < cells; y += 1) {
    for (let x = 0; x < cells; x += 1) {
      if (isFinderArea(x, y, cells)) continue;
      const bit = ((hash + x * 37 + y * 71 + payload.charCodeAt((x + y) % payload.length)) % 7) < 3;
      if (bit) context.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1);
    }
  }
  context.fillStyle = "#b68a35";
  context.fillRect(11 * cellSize, 11 * cellSize, 7 * cellSize, 7 * cellSize);
  context.fillStyle = "#111b2d";
  context.font = "bold 15px system-ui";
  context.textAlign = "center";
  context.fillText("AG", size / 2, size / 2 + 5);
}

function drawFinder(context, x, y, cellSize) {
  context.fillRect(x * cellSize, y * cellSize, 7 * cellSize, 7 * cellSize);
  context.fillStyle = "#fffdf8";
  context.fillRect((x + 1) * cellSize, (y + 1) * cellSize, 5 * cellSize, 5 * cellSize);
  context.fillStyle = "#111b2d";
  context.fillRect((x + 2) * cellSize, (y + 2) * cellSize, 3 * cellSize, 3 * cellSize);
}

function isFinderArea(x, y, cells) {
  return (x < 9 && y < 9) || (x > cells - 10 && y < 9) || (x < 9 && y > cells - 10);
}

function downloadQrPng() {
  const link = document.createElement("a");
  link.download = `${currentQrAsset?.tag || "asset"}-qr.png`;
  link.href = $("#qrCanvas").toDataURL("image/png");
  link.click();
}

function printQrCode() {
  const image = $("#qrCanvas").toDataURL("image/png");
  const payload = escapeHtml($("#qrPayload").textContent);
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`<html><head><title>Asset QR</title></head><body style="font-family:Arial;text-align:center"><img src="${image}" width="260" height="260"><pre style="text-align:left;display:inline-block">${payload}</pre><script>window.print();<\/script></body></html>`);
  printWindow.document.close();
}

function populateHandoverAssetOptions() {
  if (!$("#handoverAsset")) return;
  const currentValue = $("#handoverAsset").value;
  $("#handoverAsset").innerHTML = `<option value="">${t("Choose asset")}</option>${assets.map((asset) => `<option value="${asset.id}">${escapeHtml(asset.tag)} - ${escapeHtml(asset.name)}</option>`).join("")}`;
  if (assets.some((asset) => asset.id === currentValue)) {
    $("#handoverAsset").value = currentValue;
  }
}

function getCurrentHandover(assetId) {
  return handovers.find((record) => record.assetId === assetId && record.status === "Assigned") || null;
}

function getAssetEmployee(asset) {
  return getCurrentHandover(asset.id)?.employeeName || asset.employeeName || asset.assignedTo || "";
}

function getAssetCompany(asset) {
  return getCurrentHandover(asset.id)?.company || asset.company || "";
}

function getAssetTag(assetId) {
  return assets.find((asset) => asset.id === assetId)?.tag || "";
}

function syncAssetAssignment(record) {
  assets = assets.map((asset) => {
    if (asset.id !== record.assetId) return asset;
    return {
      ...asset,
      employeeId: record.status === "Assigned" ? (asset.employeeId || "") : "",
      employeeName: record.status === "Assigned" ? record.employeeName : "",
      assignedTo: record.status === "Assigned" ? record.employeeName : "",
      status: record.status === "Assigned" ? "Assigned" : asset.status,
      company: record.company || asset.company
    };
  });
}

function clearAssetAssignmentIfCurrent(record) {
  const current = getCurrentHandover(record.assetId);
  if (current && current.id !== record.id) return;
  assets = assets.map((asset) => asset.id === record.assetId ? { ...asset, employeeId: "", employeeName: "", assignedTo: "" } : asset);
}

function migrateLegacyAssetAssignments() {
  if (handovers.length) return;
  const legacyHandovers = assets
    .filter((asset) => asset.assignedTo)
    .map((asset) => ({
      id: createId(),
      assetId: asset.id,
      assetName: asset.name,
      employeeName: asset.assignedTo,
      company: normalizeCompany(asset.company || "MASHEED"),
      handoverDate: asset.purchaseDate || new Date().toISOString().slice(0, 10),
      returnDate: "",
      status: "Assigned"
    }));
  if (legacyHandovers.length) {
    handovers = legacyHandovers;
    saveHandovers();
  }
}

function getVisibleAssets() {
  const query = $("#searchInput").value.trim().toLowerCase();
  const selectedCompany = $("#assetCompanyFilter").value;
  const selectedStatus = $("#statusFilter").value;
  return assets.filter((asset) => [asset.name, asset.tag, asset.category, asset.brand, asset.model, asset.serialNumber, getAssetEmployee(asset), getAssetCompany(asset), asset.department, asset.location, asset.status, asset.notes].join(" ").toLowerCase().includes(query) && (selectedCompany === "All" || getAssetCompany(asset) === selectedCompany) && (selectedStatus === "All" || asset.status === selectedStatus));
}

function getVisibleHandovers() {
  if (!$("#handoverSearchInput")) return handovers;
  const query = $("#handoverSearchInput").value.trim().toLowerCase();
  const status = $("#handoverStatusFilter").value;
  return handovers.filter((record) => [record.assetId, record.assetName, getAssetTag(record.assetId), record.employeeName, record.company, record.handoverDate, record.returnDate, record.status].join(" ").toLowerCase().includes(query) && (status === "All" || record.status === status));
}

function getReportFilteredAssets() {
  const employee = $("#reportEmployeeFilter").value.trim().toLowerCase();
  const company = $("#reportCompanyFilter").value;
  const type = $("#reportAssetTypeFilter").value;
  const status = $("#reportStatusFilter").value;
  return assets.filter((asset) => {
    const assetEmployee = getAssetEmployee(asset);
    const assetCompany = getAssetCompany(asset);
    return (!employee || assetEmployee.toLowerCase().includes(employee))
      && (company === "All" || assetCompany === company)
      && (type === "All" || asset.category === type)
      && (status === "All" || asset.status === status);
  });
}

function getVisibleStock() {
  const query = $("#stockSearchInput").value.trim().toLowerCase();
  const selectedCategory = $("#stockCategoryFilter").value;
  const lowOnly = $("#lowStockFilter").value === "Low";
  return stockItems.filter((item) => [item.itemCode, item.itemName, item.category, item.brand, item.model, item.specification, item.location, item.status, item.supplier, item.invoiceNumber, item.notes].join(" ").toLowerCase().includes(query) && (selectedCategory === "All" || item.category === selectedCategory) && (!lowOnly || isLowStock(item)));
}

function getVisibleIssues() {
  const query = $("#issueSearchInput").value.trim().toLowerCase();
  const department = $("#issueDepartmentFilter").value.trim().toLowerCase();
  return issueHistory.filter((record) => [record.date, record.itemCode, record.itemName, record.issuedTo, record.department, record.purpose, record.notes].join(" ").toLowerCase().includes(query) && (!department || record.department.toLowerCase().includes(department)));
}

function getVisibleTickets() {
  const query = $("#ticketSearchInput")?.value.trim().toLowerCase() || "";
  const status = $("#ticketStatusFilter")?.value || "All";
  const department = $("#ticketDepartmentFilter")?.value.trim().toLowerCase() || "";
  const site = $("#ticketSiteFilter")?.value.trim().toLowerCase() || "";
  const priority = $("#ticketPriorityFilter")?.value || "All";
  const category = $("#ticketCategoryFilter")?.value || "All";
  return requests.filter((ticket) => {
    const searchable = [ticket.requestNumber, ticket.requester, ticket.employeeId, ticket.department, ticket.site, ticket.mobile, ticket.email, ticket.category, ticket.type, ticket.priority, ticket.subject, ticket.details, ticket.status, ticket.assignedTo].join(" ").toLowerCase();
    return searchable.includes(query)
      && (status === "All" || ticket.status === status)
      && (!department || String(ticket.department || "").toLowerCase().includes(department))
      && (!site || String(ticket.site || "").toLowerCase().includes(site))
      && (priority === "All" || ticket.priority === priority)
      && (category === "All" || ticket.category === category);
  });
}

function exportActiveView() {
  if (activePage === "stockPage") exportStockCsv();
  else if (activePage === "handoverPage") exportAssetsCsv();
  else if (activePage === "maintenancePage") exportMaintenanceCsv();
  else if (activePage === "serviceDeskPage") exportTicketsCsv();
  else if (activePage === "issueHistoryPage") exportIssuesCsv();
  else if (activePage === "auditLogPage") exportAuditCsv();
  else exportAssetsCsv();
}

function exportAssetsCsv() {
  downloadCsv(["Asset Name", "Asset Tag", "Device Type", "Brand", "Model", "Serial Number", "Assigned Employee ID", "Employee Name", "Company", "Department", "Location", "Purchase Date", "Delivery Date", "Status", "Notes"], getVisibleAssets().map((asset) => [asset.name, asset.tag, asset.category, asset.brand, asset.model, asset.serialNumber, asset.employeeId, getAssetEmployee(asset), getAssetCompany(asset), asset.department, asset.location, asset.purchaseDate, asset.deliveryDate, asset.status, asset.notes]), "amjaad-assets");
}

function exportFilteredAssetsCsv() {
  downloadCsv(["Asset Name", "Asset Tag", "Device Type", "Brand", "Model", "Serial Number", "Assigned Employee ID", "Employee Name", "Company", "Department", "Location", "Purchase Date", "Delivery Date", "Status", "Notes"], getReportFilteredAssets().map((asset) => [asset.name, asset.tag, asset.category, asset.brand, asset.model, asset.serialNumber, asset.employeeId, getAssetEmployee(asset), getAssetCompany(asset), asset.department, asset.location, asset.purchaseDate, asset.deliveryDate, asset.status, asset.notes]), "amjaad-filtered-assets");
}

function exportHandoversCsv() {
  downloadCsv(["Asset ID", "Asset Name", "Employee Name", "Company", "Handover Date", "Return Date", "Status"], getVisibleHandovers().map((record) => [getAssetTag(record.assetId) || record.assetId, record.assetName, record.employeeName, record.company, record.handoverDate, record.returnDate, record.status]), "amjaad-handovers");
}

function exportStockCsv() {
  downloadCsv(["Item Code", "Item Name", "Category", "Brand", "Model", "Specification", "Quantity", "Minimum Stock Level", "Supplier", "Purchase Date", "Purchase Cost (OMR)", "Invoice Number", "Warranty Expiry Date", "Store Location", "Status", "Low Stock", "Notes"], getVisibleStock().map((item) => [item.itemCode, item.itemName, item.category, item.brand, item.model, item.specification, item.quantity, item.minStock, item.supplier, item.purchaseDate, formatCurrency(item.purchaseCost), item.invoiceNumber, item.warrantyExpiry, item.location, item.status, isLowStock(item) ? "Low Stock" : "", item.notes]), "amjaad-stock");
}

function exportMaintenanceCsv() {
  downloadCsv(["Date", "Asset", "Technician", "Stock Used", "Notes"], maintenanceRecords.map((record) => [record.date, record.assetName, record.technician, record.usedItems.map((item) => `${item.itemName} x${item.quantity}`).join(", "), record.notes]), "amjaad-maintenance");
}

function exportIssuesCsv() {
  downloadCsv(["Date", "Item Code", "Item Name", "Quantity Issued", "Issued To", "Department", "Purpose / Reason", "Notes"], getVisibleIssues().map((record) => [record.date, record.itemCode, record.itemName, record.quantity, record.issuedTo, record.department, record.purpose, record.notes]), "amjaad-issue-history");
}

function exportAuditCsv() {
  downloadCsv(["Date and Time", "User / Technician", "Action Type", "Details"], auditLog.map((record) => [formatDateTime(record.timestamp), record.user, record.actionType, record.details]), "amjaad-audit-log");
}

function exportTicketsCsv() {
  downloadCsv(
    ["Request Number", "Date", "Employee Name", "Employee ID", "Department", "Site / Location", "Category", "Request Type", "Priority", "Subject", "Status", "Assigned IT Staff", "Last Update", "Comments"],
    getVisibleTickets().map((ticket) => [
      ticket.requestNumber,
      ticket.createdAt,
      ticket.requester,
      ticket.employeeId,
      ticket.department,
      ticket.site,
      ticket.category,
      ticket.type,
      ticket.priority,
      ticket.subject,
      ticket.status,
      ticket.assignedTo,
      ticket.lastUpdate,
      ticket.comments
    ]),
    "amjaad-service-desk-tickets"
  );
}

function downloadCsv(headers, rows, filePrefix) {
  const csv = "\uFEFF" + [headers, ...rows].map((row) => row.map(formatCsvCell).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filePrefix}-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(t("Exported successfully"));
}

function saveAssets() { storage.save(STORAGE_KEYS.assets, assets); }
function saveHandovers() { storage.save(STORAGE_KEYS.handovers, handovers); }
function saveStock() { storage.save(STORAGE_KEYS.stock, stockItems); }
function saveMaintenance() { storage.save(STORAGE_KEYS.maintenance, maintenanceRecords); }
function saveIssues() { storage.save(STORAGE_KEYS.issues, issueHistory); }
function saveSuppliers() { storage.save(STORAGE_KEYS.suppliers, suppliers); }
function saveAudit() { storage.save(STORAGE_KEYS.audit, auditLog); }
function saveRequests() { storage.save(STORAGE_KEYS.requests, requests); }
function saveUsers() {
  users = users.length ? [{ ...defaultAdminUser, ...migrateUser(users[0]), id: "default-admin", username: "Admin", role: "Admin", permissions: [...defaultAdminUser.permissions] }] : getDefaultUsers();
  storage.save(STORAGE_KEYS.users, users);
}

function getAvailableByCategory(categories) {
  return stockItems.filter((item) => categories.includes(item.category)).reduce((total, item) => total + readNumber(item.quantity), 0);
}
function isLowStock(item) { return readNumber(item.quantity) <= readNumber(item.minStock); }
function readNumber(value) { const number = Number(value); return Number.isFinite(number) ? number : 0; }
function isValidMobile(value) { return /^\+?[0-9\s()-]{7,20}$/.test(value); }
function isValidEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
function isAllowedAttachment(file) { return file.type.startsWith("image/") || file.type === "application/pdf" || /\.pdf$/i.test(file.name); }
function createId() { return window.crypto && typeof window.crypto.randomUUID === "function" ? window.crypto.randomUUID() : `item-${Date.now()}-${Math.random().toString(16).slice(2)}`; }
function hashText(text) { return [...text].reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) >>> 0, 2166136261); }
function formatCsvCell(value = "") {
  const text = String(value ?? "");
  const safeText = /^[=+\-@]/.test(text) ? `'${text}` : text;
  return `"${safeText.replace(/"/g, '""')}"`;
}
function formatCurrency(value) {
  if (value === "" || value === null || value === undefined) return "";
  const amount = Number(value);
  if (!Number.isFinite(amount)) return "";
  return currentLanguage === "ar" ? `${amount.toFixed(3)} ر.ع.` : `${amount.toFixed(3)} OMR`;
}
function formatDate(value) {
  if (!value) return t("Not set");
  return new Intl.DateTimeFormat(currentLanguage === "ar" ? "ar" : "en", { year: "numeric", month: "short", day: "numeric" }).format(new Date(`${value}T00:00:00`));
}
function formatDateTime(value) {
  if (!value) return t("Not set");
  return new Intl.DateTimeFormat(currentLanguage === "ar" ? "ar" : "en", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}
function getStatusClass(status = "") { return `status-${status.toLowerCase().replace(/\s+/g, "-")}`; }
function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}

