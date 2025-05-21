import React, { useState, createContext, useContext, useMemo, useEffect } from 'react';

// Sprachkontext erstellen
const LanguageContext = createContext();
// Datenkontext erstellen
const DataContext = createContext();

// Sprachprovider-Komponente
function LanguageProvider({ children }) {
  // Zustand für die aktuelle Sprache (Standard: Deutsch)
  const [language, setLanguage] = useState('de');

  // Objekt mit den Übersetzungen
  const translations = {
    de: {
      inventory: 'Inventar',
      expenses: 'Ausgaben',
      reports: 'Berichte',
      calculators: 'Rechner',
      finishedProducts: 'Fertige Produkte', // Neue Übersetzung
      settings: 'Einstellungen', // Neue Übersetzung
      inventoryManagement: 'Inventarverwaltung',
      inventoryPlaceholder: 'Hier kommt die Liste Ihrer Materialien (Filament, Harz etc.) und deren Bestand hin.',
      expensesManagement: 'Ausgabenverwaltung',
      expensesPlaceholder: 'Hier können Sie Ihre Geschäftsausgaben (Miete, Strom, Software etc.) erfassen.',
      reportsTitle: 'Berichte',
      reportsPlaceholder: 'Hier werden Berichte basierend auf Inventar, Ausgaben und Verkäufen angezeigt.',
      calculatorsTitle: 'Rechner',
      productionCostCalculator: 'Produktionskosten Rechner',
      materialCostPerGram: 'Materialkosten pro Gramm (€):',
      weightInGrams: 'Gewicht des Objekts (Gramm):',
      energyCostPerKWh: 'Energiekosten pro kWh (€):',
      energyConsumptionKWh: 'Energieverbrauch pro Druck (kWh):',
      machineTimeInHours: 'Maschinenzeit (Stunden):',
      machineHourlyRate: 'Stundensatz Maschine (€/Stunde):',
      designTimeInHours: 'Designzeit (Stunden):',
      designHourlyRate: 'Stundensatz Design (€/Stunde):',
      otherCosts: 'Sonstige Kosten (€):',
      calculateCost: 'Kosten berechnen',
      productionCost: 'Produktionskosten:',
      salePriceCalculator: 'Verkaufspreis Rechner',
      productionCostInput: 'Produktionskosten (€):',
      desiredProfitMargin: 'Gewünschte Gewinnmarge (%):',
      calculatePrice: 'Preis berechnen',
      salePrice: 'Verkaufspreis:',
      loginTitle: 'Login',
      username: 'Benutzername',
      password: 'Passwort',
      loginButton: 'Einloggen',
      logoutButton: 'Ausloggen',
      loginError: 'Ungültiger Benutzername oder Passwort',
      selectLanguage: 'Sprache wählen:',
      german: 'Deutsch',
      english: 'English',
      persian: 'Persisch',
      registerTitle: 'Registrieren',
      registerButton: 'Registrieren',
      confirmPassword: 'Passwort bestätigen',
      passwordMismatch: 'Passwörter stimmen nicht überein',
      registrationSuccess: 'Registrierung erfolgreich! Sie können sich jetzt einloggen.',
      userExists: 'Benutzername existiert bereits',
      switchToRegister: 'Noch kein Konto? Hier registrieren.',
      switchToLogin: 'Bereits registriert? Hier einloggen.',
      peopleManagement: 'Personenverwaltung',
      addPerson: 'Person hinzufügen',
      personName: 'Name',
      personContact: 'Kontaktinformationen',
      savePerson: 'Speichern',
      cancelEdit: 'Abbrechen',
      edit: 'Bearbeiten',
      delete: 'Löschen',
      noPeople: 'Noch keine Personen hinzugefügt.',
      addExpense: 'Ausgabe hinzufügen',
      expenseDescription: 'Beschreibung',
      expenseAmount: 'Betrag (€)',
      paidBy: 'Bezahlt von',
      selectPerson: 'Person auswählen',
      noExpenses: 'No expenses added yet.',
      shareEqually: 'Gleichmäßig aufteilen',
      sharedAmount: 'Aufgeteilt pro Person:',
      balanceReport: 'Ausgaben Saldo',
      owes: 'schuldet',
      getsBack: 'bekommt zurück',
      noBalance: 'Kein Saldo zu berichten.',
      totalBalance: 'Gesamtsaldo pro Person',
      totalOwed: 'Schuldet insgesamt',
      totalGetsBack: 'Bekommt insgesamt zurück',
      selectView: 'Ansicht wählen:',
      viewPeople: 'Personen verwalten',
      viewExpenses: 'Ausgaben verwalten',
      viewBalance: 'Saldo Bericht',
      // Weitere Übersetzungen für zukünftige Berichte/Ansichten hier hinzufügen
      viewInventoryReport: 'Inventar Bericht',
      viewCalculatorReport: 'Rechner Bericht',
      inventoryReportPlaceholder: 'Hier kommt der Inventarbericht hin.',
      calculatorReportPlaceholder: 'Hier kommt der Rechnerbericht hin.',
      expenseDate: 'Datum',
      editExpense: 'Ausgabe bearbeiten',
      saveExpense: 'Ausgabe speichern',
      cancelEditExpense: 'Bearbeitung abbrechen',
      inventoryCategories: 'Inventarkategorien',
      categoryFilament: 'Filament',
      categoryAccessories: 'Zubehör',
      categoryTools: 'Werkzeuge',
      addFilament: 'Filament hinzufügen',
      filamentType: 'Filament Typ',
      filamentBrand: 'Marke',
      filamentColor: 'Farbe',
      quantity: 'Stück',
      weightGrams: 'Gewicht (Gramm)',
      price: 'Preis (€)',
      orderDate: 'Bestelldatum',
      noFilament: 'Noch kein Filament hinzugefügt.',
      editFilament: 'Filament bearbeiten',
      saveFilament: 'Filament speichern',
      cancelEditFilament: 'Bearbeitung abbrechen',
      noAccessories: 'No accessories added yet.',
      noTools: 'No tools added yet.',
      addAccessory: 'Zubehör hinzufügen',
      addTool: 'Werkzeug hinzufügen',
      manageFilamentTypes: 'Filament Typen verwalten',
      manageFilamentBrands: 'Filament Marken verwalten',
      manageFilamentColors: 'Filament Farben verwalten',
      addType: 'Typ hinzufügen',
      addBrand: 'Marke hinzufügen',
      addColor: 'Farbe hinzufügen',
      newType: 'Neuer Typ',
      newBrand: 'Neue Marke',
      newColor: 'Neue Farbe',
      accessoryName: 'Name des Zubehörs',
      toolName: 'Name des Werkzeugs',
      editAccessory: 'Zubehör bearbeiten',
      saveAccessory: 'Zubehör speichern',
      cancelEditAccessory: 'Bearbeitung abbrechen',
      editTool: 'Werkzeug bearbeiten',
      saveTool: 'Werkzeug speichern',
      cancelEditTool: 'Bearbeitung abbrechen',
      reportFilament: 'Filament Bericht',
      reportAccessories: 'Zubehör Bericht',
      reportTools: 'Werkzeuge Bericht',
      reportFilamentPlaceholder: 'Hier kommt der Filamentbericht hin.',
      reportAccessoriesPlaceholder: 'Hier kommt der Zubehörbericht hin.',
      reportToolsPlaceholder: 'Hier kommt der Werkzeugebericht hin.',
      totalQuantity: 'Gesamtstück',
      totalWeight: 'Gesamtgewicht (Gramm)',
      totalPrice: 'Gesamtpreis (€)',
      latestOrderDate: 'Letztes Bestelldatum',
      viewProductCost: 'Produktkosten',
      viewSalePrice: 'Verkaufspreis',
      selectFilament: 'Filament auswählen',
      gramsUsed: 'Verbrauchte Menge (Gramm)',
      materialCost: 'Materialkosten',
      deductionSuccess: 'Bestand erfolgreich angepasst.',
      deductionError: 'Nicht genügend Bestand vorhanden.',
      selectFilamentForCalc: 'Filament für Berechnung auswählen',
      productName: 'Produktname',
      productDescription: 'Produktbeschreibung',
      saveProduct: 'Produkt speichern',
      productSavedSuccess: 'Produkt erfolgreich gespeichert!',
      viewProductsReport: 'Produkte Bericht',
      noProducts: 'Noch keine Produkte gespeichert.',
      selectProduct: 'Produkt auswählen',
      productImageURL: 'Produktbild URL',
      noImage: 'Kein Bild vorhanden',
      imageError: 'Bild konnte nicht geladen werden',
      lowStockWarning: 'Bestand unter 100g! Bitte nachbestellen.',
      quantityNote: '(Restgewicht dieser Rolle)',
      consumedWeight: 'Verbraucht (Gramm)',
      remainingWeight: 'Verbleibend (Gramm)',
      close: 'Schließen',
      saveSalesPrice: 'Verkaufspreis speichern',
      generateDescription: '✨ Beschreibung generieren',
      generatingDescription: 'Beschreibung wird generiert...',
      descriptionGenerationError: 'Fehler beim Generieren der Beschreibung.',
      finishedProductsTitle: 'Fertige Produkte',
      finishedProductsPlaceholder: 'Hier werden Ihre fertigen Produkte angezeigt.',
      saveProductQuestion: 'Ist das ein fertiges Produkt?', // Geänderte Übersetzung
      yes: 'Ja',
      no: 'Nein',
      salesPriceSavedSuccess: 'Verkaufspreis erfolgreich gespeichert!', // Neue Übersetzung
      editProduct: 'Produkt bearbeiten', // Neue Übersetzung
      saveProductChanges: 'Änderungen speichern', // Neue Übersetzung
      cancelProductEdit: 'Bearbeitung abbrechen', // Neue Übersetzung
      // Einstellungen Übersetzungen
      settingsTitle: 'Einstellungen',
      userProfile: 'Benutzerprofil',
      changePassword: 'Passwort ändern',
      currentPassword: 'Aktuelles Passwort',
      newPassword: 'Neues Passwort',
      confirmNewPassword: 'Neues Passwort bestätigen',
      updateProfile: 'Profil aktualisieren',
      profileUpdatedSuccess: 'Profil erfolgreich aktualisiert!',
      passwordChangedSuccess: 'Passwort erfolgreich geändert!',
      passwordChangeError: 'Fehler beim Ändern des Passworts.',
      backupRestore: 'Datensicherung & Wiederherstellung',
      createBackup: 'Backup erstellen',
      restoreBackup: 'Backup wiederherstellen',
      selectBackupFile: 'Backup-Datei auswählen',
      backupCreatedSuccess: 'Backup erfolgreich erstellt!',
      restoreSuccess: 'Daten erfolgreich wiederhergestellt!',
      restoreError: 'Fehler beim Wiederherstellen der Daten.',
      email: 'E-Mail',
      mobileNumber: 'Mobilnummer',
      name: 'Name',
    },
    en: {
      inventory: 'Inventory',
      expenses: 'Expenses',
      reports: 'Reports',
      calculators: 'Calculators',
      finishedProducts: 'Finished Products', // New translation
      settings: 'Settings', // New translation
      inventoryManagement: 'Inventory Management',
      inventoryPlaceholder: 'This is where the list of your materials (filament, resin, etc.) and their stock goes.',
      expensesManagement: 'Expenses Management',
      expensesPlaceholder: 'Here you can record your business expenses (rent, electricity, software, etc.).',
      reportsTitle: 'Reports',
      reportsPlaceholder: 'Reports based on inventory, expenses, and sales will be displayed here.',
      calculatorsTitle: 'Calculators',
      productionCostCalculator: 'Production Cost Calculator',
      materialCostPerGram: 'Material Cost per Gram (€):',
      weightInGrams: 'Object Weight (Grams):',
      energyCostPerKWh: 'Energy Cost per kWh (€):',
      energyConsumptionKWh: 'Energy Consumption per Print (kWh):',
      machineTimeInHours: 'Machine Time (Hours):',
      machineHourlyRate: 'Machine Hourly Rate (€/Hour):',
      designTimeInHours: 'Design Time (Hours):',
      designHourlyRate: 'Design Hourly Rate (€/Hour):',
      otherCosts: 'Other Costs (€):',
      calculateCost: 'Calculate Cost',
      productionCost: 'Production Cost:',
      salePriceCalculator: 'Sale Price Calculator',
      productionCostInput: 'Production Cost (€):',
      desiredProfitMargin: 'Desired Profit Margin (%):',
      calculatePrice: 'Calculate Price',
      salePrice: 'Sale Price:',
      loginTitle: 'Login',
      username: 'Username',
      password: 'Password',
      loginButton: 'Login',
      logoutButton: 'Logout',
      loginError: 'Invalid username or password',
      selectLanguage: 'Select Language:',
      german: 'German',
      english: 'English',
      persian: 'Persian',
      registerTitle: 'Register',
      registerButton: 'Register',
      confirmPassword: 'Confirm Password',
      passwordMismatch: 'Passwords do not match',
      registrationSuccess: 'Registration successful! You can now log in.',
      userExists: 'Username already exists',
      switchToRegister: 'Don\'t have an account? Register here.',
      switchToLogin: 'Already registered? Login here.',
      peopleManagement: 'People Management',
      addPerson: 'Add Person',
      personName: 'Name',
      personContact: 'Contact Information',
      savePerson: 'Save',
      cancelEdit: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      noPeople: 'No people added yet.',
      addExpense: 'Add Expense',
      expenseDescription: 'Description',
      expenseAmount: 'Amount (€)',
      paidBy: 'Paid By',
      selectPerson: 'Select Person',
      noExpenses: 'No expenses added yet.',
      shareEqually: 'Share Equally',
      sharedAmount: 'Shared per person:',
      balanceReport: 'Expense Balance',
      owes: 'owes',
      getsBack: 'gets back',
      noBalance: 'No balance to report.',
      totalBalance: 'Total Balance per Person',
      totalOwed: 'Total Owed',
      totalGetsBack: 'Total Gets Back',
      selectView: 'Select View:',
      viewPeople: 'Manage People',
      viewExpenses: 'Manage Expenses',
      viewBalance: 'Balance Report',
      // Add more translations for future reports/views here
      viewInventoryReport: 'Inventory Report',
      viewCalculatorReport: 'Calculator Report',
      inventoryReportPlaceholder: 'This is where the inventory report goes.',
      calculatorReportPlaceholder: 'This is where the calculator report goes.',
      expenseDate: 'Date',
      editExpense: 'Edit Expense',
      saveExpense: 'Save Expense',
      cancelEditExpense: 'Cancel Edit',
      inventoryCategories: 'Inventory Categories',
      categoryFilament: 'Filament',
      categoryAccessories: 'Accessories',
      categoryTools: 'Tools',
      addFilament: 'Add Filament',
      filamentType: 'Filament Type',
      filamentBrand: 'Brand',
      filamentColor: 'Color',
      quantity: 'Quantity',
      weightGrams: 'Weight (Grams)',
      price: 'Price (€)',
      orderDate: 'Order Date',
      noFilament: 'No filament added yet.',
      editFilament: 'Edit Filament',
      saveFilament: 'Save Filament',
      cancelEditFilament: 'Cancel Edit',
      noAccessories: 'No accessories added yet.',
      noTools: 'No tools added yet.',
      addAccessory: 'Add Accessory',
      addTool: 'Add Tool',
      manageFilamentTypes: 'Manage Filament Types',
      manageFilamentBrands: 'Manage Filament Brands',
      manageFilamentColors: 'Manage Filament Colors',
      addType: 'Add Type',
      addBrand: 'Add Brand',
      addColor: 'Add Color',
      newType: 'New Type',
      newBrand: 'New Brand',
      newColor: 'New Color',
      accessoryName: 'Accessory Name',
      toolName: 'Tool Name',
      editAccessory: 'Edit Accessory',
      saveAccessory: 'Save Accessory',
      cancelEditAccessory: 'Cancel Edit',
      editTool: 'Edit Tool',
      saveTool: 'Save Tool',
      cancelEditTool: 'Cancel Edit',
      reportFilament: 'Filament Report',
      reportAccessories: 'Accessories Report',
      reportTools: 'Tools Report',
      reportFilamentPlaceholder: 'This is where the filament report goes.',
      reportAccessoriesPlaceholder: 'This is where the accessories report goes.',
      reportToolsPlaceholder: 'This is where the tools report goes.',
      totalQuantity: 'Total Quantity',
      totalWeight: 'Total Weight (Grams)',
      totalPrice: 'Total Price (€)',
      latestOrderDate: 'Latest Order Date',
      viewProductCost: 'Product Cost',
      viewSalePrice: 'Sale Price',
      selectFilament: 'Select Filament',
      gramsUsed: 'Grams Used',
      materialCost: 'Material Cost',
      deductionSuccess: 'Stock successfully updated.',
      deductionError: 'Insufficient stock.',
      selectFilamentForCalc: 'Select filament for calculation',
      productName: 'Product Name',
      productDescription: 'Product Description',
      saveProduct: 'Save Product',
      productSavedSuccess: 'Product successfully saved!',
      viewProductsReport: 'Products Report',
      noProducts: 'No products saved yet.',
      selectProduct: 'Select Product',
      productImageURL: 'Product Image URL',
      noImage: 'No image available',
      imageError: 'Image failed to load',
      lowStockWarning: 'Stock below 100g! Please reorder.',
      quantityNote: '(remaining weight of this spool)',
      consumedWeight: 'Consumed (Grams)',
      remainingWeight: 'Remaining (Grams)',
      close: 'Close',
      saveSalesPrice: 'Save Sales Price',
      generateDescription: '✨ Generate Description',
      generatingDescription: 'Generating description...',
      descriptionGenerationError: 'Error generating description.',
      finishedProductsTitle: 'Finished Products',
      finishedProductsPlaceholder: 'Your finished products will be displayed here.',
      saveProductQuestion: 'Do you want to save this product?',
      yes: 'Yes',
      no: 'No',
    },
    fa: {
      inventory: 'موجودی',
      expenses: 'هزینه ها',
      reports: 'گزارشات',
      calculators: 'ماشین حساب ها',
      finishedProducts: 'محصولات نهایی', // New translation
      settings: 'تنظیمات', // New translation
      inventoryManagement: 'مدیریت موجودی',
      inventoryPlaceholder: 'اینجا جایی است که لیست مواد شما (فیلامنت، رزین و غیره) و موجودی آنها قرار می‌گیرد.',
      expensesManagement: 'مدیریت هزینه ها',
      expensesPlaceholder: 'در اینجا می‌توانید هزینه‌های کسب‌وکار خود (اجاره، برق، نرم‌افزار و غیره) را ثبت کنید.',
      reportsTitle: 'گزارشات',
      reportsPlaceholder: 'گزارشات بر اساس موجودی، هزینه ها و فروش در اینجا نمایش داده می شوند.',
      calculatorsTitle: 'ماشین حساب ها',
      productionCostCalculator: 'ماشین حساب هزینه تولید',
      materialCostPerGram: 'هزینه مواد در هر گرم (€):',
      weightInGrams: 'وزن شی (گرم):',
      energyCostPerKWh: 'هزینه انرژی در هر کیلووات وات (€):',
      energyConsumptionKWh: 'مصرف انرژی در هر چاپ (کیلووات ساعت):',
      machineTimeInHours: 'زمان ماشین (ساعت):',
      machineHourlyRate: 'نرخ ساعتی ماشین (€/ساعت):',
      designTimeInHours: 'زمان طراحی (ساعت):',
      designHourlyRate: 'نرخ ساعتی طراحی (€/ساعت):',
      otherCosts: 'سایر هزینه ها (€):',
      calculateCost: 'محاسبه هزینه',
      productionCost: 'هزینه تولید:',
      salePriceCalculator: 'ماشین حساب قیمت فروش',
      productionCostInput: 'هزینه تولید (€):',
      desiredProfitMargin: 'حاشیه سود مورد نظر (%):',
      calculatePrice: 'محاسبه قیمت',
      salePrice: 'قیمت فروش:',
      loginTitle: 'ورود',
      username: 'نام کاربری',
      password: 'رمز عبور',
      loginButton: 'ورود',
      logoutButton: 'خروج',
      loginError: 'نام کاربری یا رمز عبور نامعتبر است',
      selectLanguage: 'انتخاب زبان:',
      german: 'آلمانی',
      english: 'انگلیسی',
      persian: 'فارسی',
      registerTitle: 'ثبت نام',
      registerButton: 'ثبت نام',
      confirmPassword: 'تایید رمز عبور',
      passwordMismatch: 'رمزهای عبور مطابقت ندارند',
      registrationSuccess: 'ثبت نام موفقیت آمیز بود! اکنون می‌توانید وارد شوید.',
      userExists: 'نام کاربری از قبل موجود است',
      switchToRegister: 'حساب کاربری ندارید؟ اینجا ثبت نام کنید.',
      switchToLogin: 'قبلا ثبت نام کرده اید؟ اینجا وارد شوید.',
      peopleManagement: 'مدیریت افراد',
      addPerson: 'افزودن فرد',
      personName: 'نام',
      personContact: 'اطلاعات تماس',
      savePerson: 'ذخیره',
      cancelEdit: 'لغو',
      edit: 'ویرایش',
      delete: 'حذف',
      noPeople: 'هنوز فردی اضافه نشده است.',
      addExpense: 'افزودن هزینه',
      expenseDescription: 'توضیحات',
      expenseAmount: 'مبلغ (€)',
      paidBy: 'پرداخت شده توسط',
      selectPerson: 'انتخاب فرد',
      noExpenses: 'هنوز هزینه ای اضافه نشده است.',
      shareEqually: 'تقسیم مساوی',
      sharedAmount: 'تقسیم شده برای هر فرد:',
      balanceReport: 'مانده هزینه',
      owes: 'بدهکار است به',
      getsBack: 'پس می‌گیرد از',
      noBalance: 'هیچ مانده‌ای برای گزارش وجود ندارد.',
      totalBalance: 'مانده کل برای هر فرد',
      totalOwed: 'بدهی کل',
      totalGetsBack: 'دریافتی کل',
      selectView: 'انتخاب نما:',
      viewPeople: 'مدیریت افراد',
      viewExpenses: 'مدیریت هزینه ها',
      viewBalance: 'گزارش مانده',
      // Add more translations for future reports/views here
      viewInventoryReport: 'گزارش موجودی',
      viewCalculatorReport: 'گزارش ماشین حساب',
      inventoryReportPlaceholder: 'اینجا جایی است که گزارش موجودی قرار می‌گیرد.',
      calculatorReportPlaceholder: 'اینجا جایی است که گزارش ماشین حساب قرار می‌گیرد.',
      expenseDate: 'تاریخ',
      editExpense: 'ویرایش هزینه',
      saveExpense: 'ذخیره هزینه',
      cancelEditExpense: 'لغو ویرایش',
      inventoryCategories: 'دسته‌بندی‌های موجودی',
      categoryFilament: 'فیلامنت',
      categoryAccessories: 'لوازم جانبی',
      categoryTools: 'ابزار',
      addFilament: 'افزودن فیلامنت',
      filamentType: 'نوع فیلامنت',
      filamentBrand: 'برند',
      filamentColor: 'رنگ',
      quantity: 'تعداد',
      weightGrams: 'وزن (گرم)',
      price: 'قیمت (€)',
      orderDate: 'تاریخ سفارش',
      noFilament: 'هنوز فیلامنتی اضافه نشده است.',
      editFilament: 'ویرایش فیلامنت',
      saveFilament: 'ذخیره فیلامنت',
      cancelEditFilament: 'لغو ویرایش',
      noAccessories: 'هنوز لوازم جانبی اضافه نشده است.',
      noTools: 'هنوز ابزاری اضافه نشده است.',
      addAccessory: 'افزودن لوازم جانبی',
      addTool: 'افزودن ابزار',
      manageFilamentTypes: 'مدیریت انواع فیلامنت',
      manageFilamentBrands: 'مدیریت برندهای فیلامنت',
      manageFilamentColors: 'مدیریت رنگ‌های فیلامنت',
      addType: 'افزودن نوع',
      addBrand: 'افزودن برند',
      addColor: 'افزودن رنگ',
      newType: 'نوع جدید',
      newBrand: 'برند جدید',
      newColor: 'رنگ جدید',
      accessoryName: 'نام لوازم جانبی',
      toolName: 'نام ابزار',
      editAccessory: 'ویرایش لوازم جانبی',
      saveAccessory: 'ذخیره لوازم جانبی',
      cancelEditAccessory: 'لغو ویرایش',
      editTool: 'ویرایش ابزار',
      saveTool: 'ذخیره ابزار',
      cancelEditTool: 'لغو ویرایش',
      reportFilament: 'گزارش فیلامنت',
      reportAccessories: 'گزارش لوازم جانبی',
      reportTools: 'گزارش ابزار',
      reportFilamentPlaceholder: 'اینجا جایی است که گزارش فیلامنت قرار می‌گیرد.',
      reportAccessoriesPlaceholder: 'اینجا جایی است که گزارش لوازم جانبی قرار می‌گیرد.',
      reportToolsPlaceholder: 'اینجا جایی است که گزارش ابزار قرار می‌گیرد.',
      totalQuantity: 'تعداد کل',
      totalWeight: 'وزن کل (گرم)',
      totalPrice: 'قیمت کل (€)',
      latestOrderDate: 'آخرین تاریخ سفارش',
      viewProductCost: 'هزینه محصول',
      viewSalePrice: 'قیمت فروش',
      selectFilament: 'انتخاب فیلامنت',
      gramsUsed: 'مقدار مصرفی (گرم)',
      materialCost: 'هزینه مواد',
      deductionSuccess: 'موجودی با موفقیت به‌روز شد.',
      deductionError: 'موجودی کافی نیست.',
      selectFilamentForCalc: 'فیلامنت برای محاسبه را انتخاب کنید',
      productName: 'نام محصول',
      productDescription: 'توضیحات محصول',
      saveProduct: 'ذخیره محصول',
      productSavedSuccess: 'محصول با موفقیت ذخیره شد!',
      viewProductsReport: 'گزارش محصولات',
      noProducts: 'هنوز محصولی ذخیره نشده است.',
      selectProduct: 'انتخاب محصول',
      productImageURL: 'URL تصویر محصول',
      noImage: 'تصویری موجود نیست',
      imageError: 'بارگیری تصویر انجام نشد',
      lowStockWarning: 'موجودی کمتر از 100 گرم! لطفا دوباره سفارش دهید.',
      quantityNote: '(وزن باقیمانده این قرقره)',
      consumedWeight: 'مصرف شده (گرم)',
      remainingWeight: 'باقیمانده (گرم)',
      close: 'بستن',
      saveSalesPrice: 'ذخیره قیمت فروش',
      generateDescription: '✨ تولید توضیحات',
      generatingDescription: 'در حال تولید توضیحات...',
      descriptionGenerationError: 'خطا در تولید توضیحات.',
    },
  };

  // Funktion zum Ändern der Sprache
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook zur Verwendung des Sprachkontexts
function useLanguage() {
  return useContext(LanguageContext);
}

// Hook zur Verwendung des Datenkontexts
function useData() {
  return useContext(DataContext);
}


// Komponente für die Haupt-App
function App() {
  const [currentPage, setCurrentPage] = useState('expenses');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([{ username: 'admin', password: 'password', name: 'Admin User', email: 'admin@example.com', mobile: '123456789' }]);
  const [people, setPeople] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [inventory, setInventory] = useState({
    Filament: [],
    Accessories: [],
    Tools: [],
  });
  const [filamentTypes, setFilamentTypes] = useState(['PLA', 'ABS', 'PETG', 'TPU', 'Nylon']);
  const [filamentBrands, setFilamentBrands] = useState(['Prusa', ' filamentone', 'Esun', 'MatterHackers']);
  const [filamentColors, setFilamentColors] = useState(['Rot', 'Blau', 'Grün', 'Schwarz', 'Weiß', 'Grau']);
  const [products, setProducts] = useState([]);
  const [lowStockNotifications, setLowStockNotifications] = useState([]);
  const [notifiedFilamentIds, setNotifiedFilamentIds] = useState(new Set());

  const { translations, language, changeLanguage } = useLanguage();

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (isLoggedIn) {
      const newNotifications = [];
      inventory.Filament.forEach(filament => {
        if (filament.remainingWeight < 100 && !notifiedFilamentIds.has(filament.id)) {
          newNotifications.push(
            `${filament.type} ${filament.brand} ${filament.color} (${filament.remainingWeight.toFixed(2)}g): ${translations[language].lowStockWarning}`
          );
          setNotifiedFilamentIds(prev => new Set(prev).add(filament.id));
        }
      });
      if (newNotifications.length > 0) {
        setLowStockNotifications(newNotifications);
      }
    } else {
      setNotifiedFilamentIds(new Set());
      setLowStockNotifications([]);
    }
  }, [isLoggedIn, inventory.Filament, language, translations, notifiedFilamentIds]);

  const closeNotifications = () => {
    setLowStockNotifications([]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'inventory':
        return <Inventory />;
      case 'expenses':
        return <Expenses />;
      case 'reports':
        return <Reports />;
      case 'calculators':
        return <Calculators />;
      case 'finishedProducts':
        return <FinishedProducts />;
      case 'settings':
        return <Settings />;
      default:
        return <Expenses />;
    }
  };

  if (!isLoggedIn) {
    return <AuthPage setIsLoggedIn={setIsLoggedIn} users={users} setUsers={setUsers} />;
  }

  return (
    <DataContext.Provider value={{ people, setPeople, expenses, setExpenses, inventory, setInventory, filamentTypes, setFilamentTypes, filamentBrands, setFilamentBrands, filamentColors, setFilamentColors, products, setProducts, users, setUsers }}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 font-sans text-gray-800">
        <nav className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-xl rounded-2xl p-4 mb-8 flex justify-between items-center border border-gray-200">
           <img src="/uploaded/5830369769214298147.jpg" alt="[Image of 3D EVO Logo]" className="h-12 mr-6" />
          <ul className="flex space-x-6">
            <li>
              <button
                className={`flex flex-col items-center px-3 py-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  currentPage === 'expenses' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
                }`}
                onClick={() => navigateTo('expenses')}
              >
                <i className="fas fa-euro-sign text-xl mb-1"></i>
                <span className="text-xs sr-only sm:not-sr-only">{translations[language].expenses}</span>
              </button>
            </li>
            <li>
              <button
                className={`flex flex-col items-center px-3 py-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  currentPage === 'inventory' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
                }`}
                onClick={() => navigateTo('inventory')}
              >
                <i className="fas fa-boxes text-xl mb-1"></i>
                <span className="text-xs sr-only sm:not-sr-only">{translations[language].inventory}</span>
              </button>
            </li>
            <li>
              <button
                className={`flex flex-col items-center px-3 py-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  currentPage === 'calculators' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
                }`}
                onClick={() => navigateTo('calculators')}
              >
                <i className="fas fa-calculator text-xl mb-1"></i>
                <span className="text-xs sr-only sm:not-sr-only">{translations[language].calculators}</span>
              </button>
            </li>
            <li>
              <button
                className={`flex flex-col items-center px-3 py-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  currentPage === 'finishedProducts' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
                }`}
                onClick={() => navigateTo('finishedProducts')}
              >
                <i className="fas fa-box-open text-xl mb-1"></i>
                <span className="text-xs sr-only sm:not-sr-only">{translations[language].finishedProducts}</span>
              </button>
            </li>
            <li>
              <button
                className={`flex flex-col items-center px-3 py-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  currentPage === 'reports' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
                }`}
                onClick={() => navigateTo('reports')}
              >
                <i className="fas fa-chart-bar text-xl mb-1"></i>
                <span className="text-xs sr-only sm:not-sr-only">{translations[language].reports}</span>
              </button>
            </li>
            <li>
              <button
                className={`flex flex-col items-center px-3 py-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  currentPage === 'settings' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
                }`}
                onClick={() => navigateTo('settings')}
              >
                <i className="fas fa-cog text-xl mb-1"></i>
                <span className="text-xs sr-only sm:not-sr-only">{translations[language].settings}</span>
              </button>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
             <label htmlFor="language-select" className="text-gray-700">{translations[language].selectLanguage}</label>
             <select
               id="language-select"
               value={language}
               onChange={(e) => changeLanguage(e.target.value)}
               className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
             >
               <option value="de">{translations[language].german}</option>
               <option value="en">{translations[language].english}</option>
               <option value="fa">{translations[language].persian}</option>
             </select>
             <button
               onClick={() => setIsLoggedIn(false)}
               className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
             >
               {translations[language].logoutButton}
             </button>
          </div>
        </nav>

        <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-gray-200">
          {renderPage()}
        </div>

        {lowStockNotifications.length > 0 && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Bestandswarnung!</h3>
              <ul className="list-disc pl-5 mb-4">
                {lowStockNotifications.map((msg, index) => (
                  <li key={index} className="text-red-700 text-sm">{msg}</li>
                ))}
              </ul>
              <button
                onClick={closeNotifications}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {translations[language].close}
              </button>
            </div>
          </div>
        )}
      </div>
    </DataContext.Provider>
  );
}

// Komponente für die Authentifizierungsseite (Login und Registrierung)
function AuthPage({ setIsLoggedIn, users, setUsers }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { translations, language, changeLanguage } = useLanguage();

  const handleLogin = () => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      setError('');
      setSuccessMessage('');
    } else {
      setError(translations[language].loginError);
      setSuccessMessage('');
    }
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError(translations[language].passwordMismatch);
      setSuccessMessage('');
      return;
    }
    if (users.find(user => user.username === username)) {
      setError(translations[language].userExists);
      setSuccessMessage('');
      return;
    }

    setUsers([...users, { username, password, name: '', email: '', mobile: '' }]);
    setError('');
    setSuccessMessage(translations[language].registrationSuccess);
    setIsLogin(true);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleKeyPressAuth = (event) => {
    if (event.key === 'Enter') {
      if (isLogin) {
        handleLogin();
      } else {
        handleRegister();
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-800">
      <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-10 rounded-2xl shadow-xl w-full max-w-sm border border-gray-200">
         <div className="flex justify-center mb-8">
            <img src="/uploaded/5830369769214298147.jpg" alt="[Image of 3D EVO Logo]" className="h-24 mx-auto" />
         </div>
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          {isLogin ? translations[language].loginTitle : translations[language].registerTitle}
        </h2>
         <div className="mb-6 text-center">
           <label htmlFor="language-select-auth" className="text-gray-700 mr-2">{translations[language].selectLanguage}</label>
           <select
             id="language-select-auth"
             value={language}
             onChange={(e) => changeLanguage(e.target.value)}
             className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
           >
             <option value="de">{translations[language].german}</option>
             <option value="en">{translations[language].english}</option>
             <option value="fa">{translations[language].persian}</option>
           </select>
         </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">{translations[language].username}:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPressAuth}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{translations[language].password}:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPressAuth}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">{translations[language].confirmPassword}:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyPress={handleKeyPressAuth}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
            </div>
          )}

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

          {isLogin ? (
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
            >
              {translations[language].loginButton}
            </button>
          ) : (
            <button
              onClick={handleRegister}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
            >
              {translations[language].registerButton}
            </button>
          )}
        </div>
        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setError('');
            setSuccessMessage('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
          }}
          className="mt-6 w-full text-blue-700 hover:underline text-sm"
        >
          {isLogin ? translations[language].switchToRegister : translations[language].switchToLogin}
        </button>
      </div>
    </div>
  );
}


// Komponente für die Inventarverwaltung
function Inventory() {
  const { translations, language } = useLanguage();
  const { inventory, setInventory, filamentTypes, setFilamentTypes, filamentBrands, setFilamentBrands, filamentColors, setFilamentColors } = useData();

  const [currentCategory, setCurrentCategory] = useState('Filament');

  const [filamentType, setFilamentType] = useState('');
  const [filamentBrand, setFilamentBrand] = useState('');
  const [filamentColor, setFilamentColor] = useState('');
  const [filamentQuantity, setFilamentQuantity] = useState('');
  const [filamentWeight, setFilamentWeight] = useState('');
  const [filamentPrice, setFilamentPrice] = useState('');
  const [filamentOrderDate, setFilamentOrderDate] = useState('');
  const [editingFilamentId, setEditingFilamentId] = useState(null);

  const [accessoryName, setAccessoryName] = useState('');
  const [accessoryPrice, setAccessoryPrice] = useState('');
  const [accessoryOrderDate, setAccessoryOrderDate] = useState('');
  const [editingAccessoryId, setEditingAccessoryId] = useState(null);

  const [toolName, setToolName] = useState('');
  const [toolPrice, setToolPrice] = useState('');
  const [toolOrderDate, setToolOrderDate] = useState('');
  const [editingToolId, setEditingToolId] = useState(null);


  const [newType, setNewType] = useState('');
  const [newBrand, setNewBrand] = useState('');
  const [newColor, setNewColor] = useState('');


  const handleAddType = () => {
    if (newType.trim() !== '' && !filamentTypes.includes(newType.trim())) {
      setFilamentTypes([...filamentTypes, newType.trim()]);
      setNewType('');
    }
  };

  const handleDeleteType = (typeToDelete) => {
    setFilamentTypes(filamentTypes.filter(type => type !== typeToDelete));
  };

  const handleAddBrand = () => {
    if (newBrand.trim() !== '' && !filamentBrands.includes(newBrand.trim())) {
      setFilamentBrands([...filamentBrands, newBrand.trim()]);
      setNewBrand('');
    }
  };

  const handleDeleteBrand = (brandToDelete) => {
    setFilamentBrands(filamentBrands.filter(brand => brand !== brandToDelete));
  };

  const handleAddColor = () => {
    if (newColor.trim() !== '' && !filamentColors.includes(newColor.trim())) {
      setFilamentColors([...filamentColors, newColor.trim()]);
      setNewColor('');
    }
  };

  const handleDeleteColor = (colorToDelete) => {
    setFilamentColors(filamentColors.filter(color => color !== colorToDelete));
  };


  const handleAddOrUpdateFilament = () => {
    if (filamentType.trim() === '' || filamentBrand.trim() === '' || filamentColor.trim() === '' ||
        parseFloat(filamentQuantity) <= 0 || parseFloat(filamentWeight) <= 0 || parseFloat(filamentPrice) <= 0 || filamentOrderDate.trim() === '') {
      return;
    }

    if (editingFilamentId !== null) {
      setInventory(prevInventory => ({
        ...prevInventory,
        Filament: prevInventory.Filament.map(item =>
          item.id === editingFilamentId
            ? {
                ...item,
                type: filamentType,
                brand: filamentBrand,
                color: filamentColor,
                quantity: parseInt(filamentQuantity),
                initialWeight: parseFloat(filamentWeight),
                pricePerUnit: parseFloat(filamentPrice),
                orderDate: filamentOrderDate,
              }
            : item
        ),
      }));
      setEditingFilamentId(null);
    } else {
      const newFilamentEntries = [];
      for (let i = 0; i < parseInt(filamentQuantity); i++) {
        newFilamentEntries.push({
          id: Date.now() + i,
          type: filamentType,
          brand: filamentBrand,
          color: filamentColor,
          quantity: 1,
          initialWeight: parseFloat(filamentWeight),
          remainingWeight: parseFloat(filamentWeight),
          pricePerUnit: parseFloat(filamentPrice),
          orderDate: filamentOrderDate,
        });
      }
      setInventory(prevInventory => ({
        ...prevInventory,
        Filament: [...prevInventory.Filament, ...newFilamentEntries],
      }));
    }

    setFilamentType('');
    setFilamentBrand('');
    setFilamentColor('');
    setFilamentQuantity('');
    setFilamentWeight('');
    setFilamentPrice('');
    setFilamentOrderDate('');
  };

  const startEditingFilament = (filament) => {
    setEditingFilamentId(filament.id);
    setFilamentType(filament.type);
    setFilamentBrand(filament.brand);
    setFilamentColor(filament.color);
    setFilamentQuantity(filament.quantity.toString());
    setFilamentWeight(filament.initialWeight.toString());
    setFilamentPrice(filament.pricePerUnit.toString());
    setFilamentOrderDate(filament.orderDate);
  };

  const cancelEditingFilament = () => {
    setEditingFilamentId(null);
    setFilamentType('');
    setFilamentBrand('');
    setFilamentColor('');
    setFilamentQuantity('');
    setFilamentWeight('');
    setFilamentPrice('');
    setFilamentOrderDate('');
  };

  const deleteFilament = (filamentId) => {
    setInventory({
      ...inventory,
      Filament: inventory.Filament.filter(item => item.id !== filamentId),
    });
  };

  const handleAddOrUpdateAccessory = () => {
      if (accessoryName.trim() === '' || parseFloat(accessoryPrice) <= 0 || accessoryOrderDate.trim() === '') {
          return;
      }

      const newAccessoryEntry = {
          id: editingAccessoryId !== null ? editingAccessoryId : Date.now(),
          name: accessoryName,
          price: parseFloat(accessoryPrice),
          orderDate: accessoryOrderDate,
      };

      if (editingAccessoryId !== null) {
          setInventory({
              ...inventory,
              Accessories: inventory.Accessories.map(item =>
                  item.id === editingAccessoryId ? newAccessoryEntry : item
              ),
          });
          setEditingAccessoryId(null);
      } else {
          setInventory({
              ...inventory,
              Accessories: [...inventory.Accessories, newAccessoryEntry],
          });
      }

      setAccessoryName('');
      setAccessoryPrice('');
      setAccessoryOrderDate('');
  };

  const startEditingAccessory = (accessory) => {
      setEditingAccessoryId(accessory.id);
      setAccessoryName(accessory.name);
      setAccessoryPrice(accessory.price.toString());
      setAccessoryOrderDate(accessory.orderDate);
  };

  const cancelEditingAccessory = () => {
      setEditingAccessoryId(null);
      setAccessoryName('');
      setAccessoryPrice('');
      setAccessoryOrderDate('');
  };

  const deleteAccessory = (accessoryId) => {
      setInventory({
          ...inventory,
          Accessories: inventory.Accessories.filter(item => item.id !== accessoryId),
      });
  };

  const handleAddOrUpdateTool = () => {
      if (toolName.trim() === '' || parseFloat(toolPrice) <= 0 || toolOrderDate.trim() === '') {
          return;
      }

      const newToolEntry = {
          id: editingToolId !== null ? editingToolId : Date.now(),
          name: toolName,
          price: parseFloat(toolPrice),
          orderDate: toolOrderDate,
      };

      if (editingToolId !== null) {
          setInventory({
              ...inventory,
              Tools: inventory.Tools.map(item =>
                  item.id === editingToolId ? newToolEntry : item
              ),
          });
          setEditingToolId(null);
      } else {
          setInventory({
              ...inventory,
              Tools: [...inventory.Tools, newToolEntry],
          });
      }

      setToolName('');
      setToolPrice('');
      setToolOrderDate('');
  };

  const startEditingTool = (tool) => {
      setEditingToolId(tool.id);
      setToolName(tool.name);
      setToolPrice(tool.price.toString());
      setToolOrderDate(tool.orderDate);
  };

  const cancelEditingTool = () => {
      setToolName('');
      setToolPrice('');
      setToolOrderDate('');
  };

  const deleteTool = (toolId) => {
      setInventory({
          ...inventory,
          Tools: inventory.Tools.filter(item => item.id !== toolId),
      });
  };


  const handleKeyPress = (event, action) => {
    if (event.key === 'Enter') {
      action();
    }
  };


  const renderCategoryView = () => {
    switch (currentCategory) {
      case 'Filament':
        return (
          <>
             <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
               <h3 className="text-xl font-semibold mb-4">{translations[language].manageFilamentTypes}</h3>
               <div className="flex space-x-2 mb-4">
                 <input
                   type="text"
                   value={newType}
                   onChange={(e) => setNewType(e.target.value)}
                   onKeyPress={(e) => handleKeyPress(e, handleAddType)}
                   placeholder={translations[language].newType}
                   className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                 />
                 <button
                   onClick={handleAddType}
                   className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                 >
                   {translations[language].addType}
                 </button>
               </div>
               <div className="flex flex-wrap gap-2">
                 {filamentTypes.map(type => (
                   <span key={type} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                     {type}
                     <button
                       onClick={() => handleDeleteType(type)}
                       className="ml-1 text-red-600 hover:text-red-800"
                     >
                       &times;
                     </button>
                   </span>
                 ))}
               </div>

               <h3 className="text-xl font-semibold mt-8 mb-4">{translations[language].manageFilamentBrands}</h3>
                <div className="flex space-x-2 mb-4">
                 <input
                   type="text"
                   value={newBrand}
                   onChange={(e) => setNewBrand(e.target.value)}
                   onKeyPress={(e) => handleKeyPress(e, handleAddBrand)}
                   placeholder={translations[language].newBrand}
                   className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                 />
                 <button
                   onClick={handleAddBrand}
                   className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                 >
                   {translations[language].addBrand}
                 </button>
               </div>
               <div className="flex flex-wrap gap-2">
                 {filamentBrands.map(brand => (
                   <span key={brand} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                     {brand}
                     <button
                       onClick={() => handleDeleteBrand(brand)}
                       className="ml-1 text-red-600 hover:text-red-800"
                     >
                       &times;
                     </button>
                   </span>
                 ))}
               </div>

               <h3 className="text-xl font-semibold mt-8 mb-4">{translations[language].manageFilamentColors}</h3>
                <div className="flex space-x-2 mb-4">
                 <input
                   type="text"
                   value={newColor}
                   onChange={(e) => setNewColor(e.target.value)}
                   onKeyPress={(e) => handleKeyPress(e, handleAddColor)}
                   placeholder={translations[language].newColor}
                   className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                 />
                 <button
                   onClick={handleAddColor}
                   className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                 >
                   {translations[language].addColor}
                 </button>
               </div>
               <div className="flex flex-wrap gap-2">
                 {filamentColors.map(color => (
                   <span key={color} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                     {color}
                     <button
                       onClick={() => handleDeleteColor(color)}
                       className="ml-1 text-red-600 hover:text-red-800"
                     >
                       &times;
                     </button>
                   </span>
                 ))}
               </div>

             </div>


            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">
                {editingFilamentId !== null ? translations[language].editFilament : translations[language].addFilament}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{translations[language].filamentType}:</label>
                  <select
                    value={filamentType}
                    onChange={(e) => setFilamentType(e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  >
                    <option value="">{translations[language].selectView}</option>
                    {filamentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700">{translations[language].filamentBrand}:</label>
                  <select
                    value={filamentBrand}
                    onChange={(e) => setFilamentBrand(e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  >
                    <option value="">{translations[language].selectView}</option>
                    {filamentBrands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700">{translations[language].filamentColor}:</label>
                  <select
                    value={filamentColor}
                    onChange={(e) => setFilamentColor(e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  >
                    <option value="">{translations[language].selectView}</option>
                    {filamentColors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{translations[language].quantity}:</label>
                  <input
                    type="number"
                    step="1"
                    value={filamentQuantity}
                    onChange={(e) => setFilamentQuantity(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, handleAddOrUpdateFilament)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700">{translations[language].weightGrams}:</label>
                  <input
                    type="number"
                    step="0.01"
                    value={filamentWeight}
                    onChange={(e) => setFilamentWeight(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, handleAddOrUpdateFilament)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700">{translations[language].price}:</label>
                  <input
                    type="number"
                    step="0.01"
                    value={filamentPrice}
                    onChange={(e) => setFilamentPrice(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, handleAddOrUpdateFilament)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700">{translations[language].orderDate}:</label>
                  <input
                    type="date"
                    value={filamentOrderDate}
                    onChange={(e) => setFilamentOrderDate(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, handleAddOrUpdateFilament)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddOrUpdateFilament}
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                  >
                    {editingFilamentId !== null ? translations[language].saveFilament : translations[language].addFilament}
                  </button>
                   {editingFilamentId !== null && (
                     <button
                       onClick={cancelEditingFilament}
                       className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                     >
                       {translations[language].cancelEditFilament}
                     </button>
                   )}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Filament Liste</h4>
              {inventory.Filament.length === 0 ? (
                <p className="text-gray-500">{translations[language].noFilament}</p>
              ) : (
                <ul className="space-y-4">
                  {inventory.Filament.map(filament => (
                    <li key={filament.id} className={`bg-white p-4 rounded-xl shadow border border-gray-200 flex justify-between items-center ${filament.remainingWeight <= 0 ? 'opacity-50 text-gray-500' : ''}`}>
                      <div>
                        <p className="font-semibold">{filament.type} - {filament.brand} - {filament.color}</p>
                        <p className="text-sm text-gray-600">
                          {translations[language].quantity}: {filament.quantity} Stk. ({translations[language].remainingWeight}: {filament.remainingWeight.toFixed(2)}g / {filament.initialWeight.toFixed(2)}g) | {translations[language].price}: {filament.pricePerUnit.toFixed(2)} €/Stk
                        </p>
                        <p className="text-sm text-gray-600">{translations[language].orderDate}: {filament.orderDate}</p>
                        {/* Warnung bei niedrigem Bestand */}
                        {filament.remainingWeight < 100 && filament.remainingWeight > 0 && (
                          <p className="text-sm text-red-600 font-semibold mt-1">
                            {translations[language].lowStockWarning}
                          </p>
                        )}
                         {filament.remainingWeight <= 0 && (
                           <p className="text-sm text-red-600 font-semibold mt-1">
                             Vollständig verbraucht.
                           </p>
                         )}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => startEditingFilament(filament)}
                          className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                        >
                          {translations[language].edit}
                        </button>
                        <button
                          onClick={() => deleteFilament(filament.id)}
                          className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                        >
                          {translations[language].delete}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        );
      case 'Accessories':
        return (
          <>
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">{translations[language].categoryAccessories}</h3>
               <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-6 border border-gray-200">
                 <h4 className="text-lg font-medium mb-4">
                   {editingAccessoryId !== null ? translations[language].editAccessory : translations[language].addAccessory}
                 </h4>
                 <div className="space-y-4">
                   <div>
                     <label className="block text-sm font-medium text-gray-700">{translations[language].accessoryName}:</label>
                     <input
                       type="text"
                       value={accessoryName}
                       onChange={(e) => setAccessoryName(e.target.value)}
                       onKeyPress={(e) => handleKeyPress(e, handleAddOrUpdateAccessory)}
                       className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700">{translations[language].price}:</label>
                     <input
                       type="number"
                       step="0.01"
                       value={accessoryPrice}
                       onChange={(e) => setAccessoryPrice(e.target.value)}
                       onKeyPress={(e) => handleKeyPress(e, handleAddOrUpdateAccessory)}
                       className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     />
                   </div>
                    <div>
                     <label className="block text-sm font-medium text-gray-700">{translations[language].orderDate}:</label>
                     <input
                       type="date"
                       value={accessoryOrderDate}
                       onChange={(e) => setAccessoryOrderDate(e.target.value)}
                       onKeyPress={(e) => handleKeyPress(e, handleAddOrUpdateAccessory)}
                       className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     />
                   </div>
                   <div className="flex space-x-4">
                     <button
                       onClick={handleAddOrUpdateAccessory}
                       className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                     >
                       {editingAccessoryId !== null ? translations[language].saveAccessory : translations[language].addAccessory}
                     </button>
                      {editingAccessoryId !== null && (
                        <button
                          onClick={cancelEditingAccessory}
                          className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                        >
                          {translations[language].cancelEditAccessory}
                        </button>
                      )}
                   </div>
                 </div>
               </div>

               <div className="mt-8">
                 <h4 className="text-lg font-medium mb-4">Zubehör Liste</h4>
                 {inventory.Accessories.length === 0 ? (
                   <p className="text-gray-500">{translations[language].noAccessories}</p>
                 ) : (
                   <ul className="space-y-4">
                     {inventory.Accessories.map(accessory => (
                       <li key={accessory.id} className="bg-white p-4 rounded-xl shadow border border-gray-200 flex justify-between items-center">
                         <div>
                           <p className="font-semibold">{accessory.name}: {accessory.price.toFixed(2)} €</p>
                           <p className="text-sm text-gray-600">{translations[language].orderDate}: {accessory.orderDate}</p>
                         </div>
                         <div className="flex space-x-2">
                           <button
                             onClick={() => startEditingAccessory(accessory)}
                             className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                           >
                             {translations[language].edit}
                           </button>
                           <button
                             onClick={() => deleteAccessory(accessory.id)}
                             className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                           >
                             {translations[language].delete}
                           </button>
                         </div>
                       </li>
                     ))}
                   </ul>
                 )}
               </div>
            </div>
          </>
        );
      case 'Tools':
        return (
          <>
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">{translations[language].categoryTools}</h3>
               <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-6 border border-gray-200">
                 <h4 className="text-lg font-medium mb-4">
                   {editingToolId !== null ? translations[language].editTool : translations[language].addTool}
                 </h4>
                 <div className="space-y-4">
                   <div>
                     <label className="block text-sm font-medium text-gray-700">{translations[language].toolName}:</label>
                     <input
                       type="text"
                       value={toolName}
                       onChange={(e) => setToolName(e.target.value)}
                       onKeyPress={(e) => handleKeyPress(e, handleAddOrUpdateTool)}
                       className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700">{translations[language].price}:</label>
                     <input
                       type="number"
                       step="0.01"
                       value={toolPrice}
                       onChange={(e) => setToolPrice(e.target.value)}
                       onKeyPress={(e) => handleKeyPress(e, handleAddOrUpdateTool)}
                       className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     />
                   </div>
                    <div>
                     <label className="block text-sm font-medium text-gray-700">{translations[language].orderDate}:</label>
                     <input
                       type="date"
                       value={toolOrderDate}
                       onChange={(e) => setToolOrderDate(e.target.value)}
                       onKeyPress={(e) => handleKeyPress(e, handleAddOrUpdateTool)}
                       className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     />
                   </div>
                   <div className="flex space-x-4">
                     <button
                       onClick={handleAddOrUpdateTool}
                       className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                     >
                       {editingToolId !== null ? translations[language].saveTool : translations[language].addTool}
                     </button>
                      {editingToolId !== null && (
                        <button
                          onClick={cancelEditingTool}
                          className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                        >
                          {translations[language].cancelEditTool}
                        </button>
                      )}
                   </div>
                 </div>
               </div>

               <div className="mt-8">
                 <h4 className="text-lg font-medium mb-4">Werkzeuge Liste</h4>
                 {inventory.Tools.length === 0 ? (
                   <p className="text-gray-500">{translations[language].noTools}</p>
                 ) : (
                   <ul className="space-y-4">
                     {inventory.Tools.map(tool => (
                       <li key={tool.id} className="bg-white p-4 rounded-xl shadow border border-gray-200 flex justify-between items-center">
                         <div>
                           <p className="font-semibold">{tool.name}: {tool.price.toFixed(2)} €</p>
                           <p className="text-sm text-gray-600">{translations[language].orderDate}: {tool.orderDate}</p>
                         </div>
                         <div className="flex space-x-2">
                           <button
                             onClick={() => startEditingTool(tool)}
                             className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                           >
                             {translations[language].edit}
                           </button>
                           <button
                             onClick={() => deleteTool(tool.id)}
                             className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                           >
                             {translations[language].delete}
                           </button>
                         </div>
                       </li>
                     ))}
                   </ul>
                 )}
               </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{translations[language].inventoryManagement}</h2>
      <p className="mb-6">{translations[language].inventoryPlaceholder}</p>

      <div className="mb-4">
        <label htmlFor="inventory-category-select" className="text-gray-700 mr-2">{translations[language].inventoryCategories}:</label>
        <select
          id="inventory-category-select"
          value={currentCategory}
          onChange={(e) => setCurrentCategory(e.target.value)}
          className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
        >
          <option value="Filament">{translations[language].categoryFilament}</option>
          <option value="Accessories">{translations[language].categoryAccessories}</option>
          <option value="Tools">{translations[language].categoryTools}</option>
        </select>
      </div>

      {renderCategoryView()}
    </div>
  );
}

// Komponente für die Ausgabenverwaltung (mit Personen- und Ausgabenverwaltung)
function Expenses() {
  const { translations, language } = useLanguage();
  const { people, setPeople, expenses, setExpenses } = useData();

  const [currentView, setCurrentView] = useState('manageExpenses');

  const [newPersonName, setNewPersonName] = useState('');
  const [newPersonContact, setNewPersonContact] = useState('');
  const [editingPersonId, setEditingPersonId] = useState(null);

  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [selectedPersonId, setSelectedPersonId] = useState('');
  const [editingExpenseId, setEditingExpenseId] = useState(null);


  const handleAddOrUpdatePerson = () => {
    if (newPersonName.trim() === '') {
      return;
    }

    if (editingPersonId !== null) {
      setPeople(people.map(person =>
        person.id === editingPersonId
          ? { ...person, name: newPersonName, contact: newPersonContact }
          : person
      ));
      setEditingPersonId(null);
    } else {
      const newPerson = {
        id: Date.now(),
        name: newPersonName,
        contact: newPersonContact,
      };
      setPeople([...people, newPerson]);
    }

    setNewPersonName('');
    setNewPersonContact('');
  };

  const startEditingPerson = (person) => {
    setEditingPersonId(person.id);
    setNewPersonName(person.name);
    setNewPersonContact(person.contact);
  };

  const cancelEditingPerson = () => {
    setEditingPersonId(null);
    setNewPersonName('');
    setNewPersonContact('');
  };

  const deletePerson = (personId) => {
    setPeople(people.filter(person => person.id !== personId));
    setExpenses(expenses.filter(expense => expense.paidBy !== people.find(p => p.id === personId)?.name));
  };

  const handleKeyPressPerson = (event) => {
    if (event.key === 'Enter') {
      handleAddOrUpdatePerson();
    }
  };

  const handleAddOrUpdateExpense = () => {
    if (expenseDescription.trim() === '' || parseFloat(expenseAmount) <= 0 || selectedPersonId === '' || expenseDate.trim() === '') {
      return;
    }

    const paidByPerson = people.find(person => person.id === parseInt(selectedPersonId));

    if (editingExpenseId !== null) {
      setExpenses(expenses.map(expense =>
        expense.id === editingExpenseId
          ? { ...expense, description: expenseDescription, amount: parseFloat(expenseAmount), paidBy: paidByPerson ? paidByPerson.name : 'Unbekannt', date: expenseDate }
          : expense
      ));
      setEditingExpenseId(null);
    } else {
      const newExpense = {
        id: Date.now(),
        description: expenseDescription,
        amount: parseFloat(expenseAmount),
        paidBy: paidByPerson ? paidByPerson.name : 'Unbekannt',
        date: expenseDate,
        sharedAmount: null,
      };
      setExpenses([...expenses, newExpense]);
    }


    setExpenseDescription('');
    setExpenseAmount('');
    setExpenseDate('');
    setSelectedPersonId('');
  };

  const startEditingExpense = (expense) => {
    setEditingExpenseId(expense.id);
    setExpenseDescription(expense.description);
    setExpenseAmount(expense.amount.toString());
    setExpenseDate(expense.date);
    const paidByPerson = people.find(person => person.name === expense.paidBy);
    setSelectedPersonId(paidByPerson ? paidByPerson.id.toString() : '');
  };


  const cancelEditingExpense = () => {
    setEditingExpenseId(null);
    setExpenseDescription('');
    setExpenseAmount('');
    setExpenseDate('');
    setSelectedPersonId('');
  };


  const deleteExpense = (expenseId) => {
    setExpenses(expenses.filter(expense => expense.id !== expenseId));
  };


  const handleKeyPressExpense = (event) => {
    if (event.key === 'Enter') {
      handleAddOrUpdateExpense();
    }
  };

  const handleShareExpense = (expenseId) => {
    const expenseToShare = expenses.find(expense => expense.id === expenseId);
    if (!expenseToShare || people.length === 0) {
      return;
    }

    const sharedAmountPerPerson = expenseToShare.amount / people.length;

    setExpenses(expenses.map(expense =>
      expense.id === expenseId
        ? { ...expense, sharedAmount: sharedAmountPerPerson }
        : expense
    ));
  };

  const renderView = () => {
    switch (currentView) {
      case 'managePeople':
        return (
           <>
             <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
               <h3 className="text-xl font-semibold mb-4">{translations[language].peopleManagement}</h3>

               <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-6 border border-gray-200">
                 <h4 className="text-lg font-medium mb-4">
                   {editingPersonId !== null ? translations[language].edit : translations[language].addPerson}
                 </h4>
                 <div className="space-y-4">
                   <div>
                     <label className="block text-sm font-medium text-gray-700">{translations[language].personName}:</label>
                     <input
                       type="text"
                       value={newPersonName}
                       onChange={(e) => setNewPersonName(e.target.value)}
                       onKeyPress={handleKeyPressPerson}
                       className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700">{translations[language].personContact}:</label>
                     <input
                       type="text"
                       value={newPersonContact}
                       onChange={(e) => setNewPersonContact(e.target.value)}
                       onKeyPress={handleKeyPressPerson}
                       className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     />
                   </div>
                   <div className="flex space-x-4">
                     <button
                       onClick={handleAddOrUpdatePerson}
                       className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                     >
                       {translations[language].savePerson}
                     </button>
                     {editingPersonId !== null && (
                       <button
                         onClick={cancelEditingPerson}
                         className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                       >
                         {translations[language].cancelEdit}
                       </button>
                     )}
                   </div>
                 </div>
               </div>

               <div className="mt-8">
                 <h4 className="text-lg font-medium mb-4">Personenliste</h4>
                 {people.length === 0 ? (
                   <p className="text-gray-500">{translations[language].noPeople}</p>
                 ) : (
                   <ul className="space-y-4">
                     {people.map(person => (
                       <li key={person.id} className="bg-white p-4 rounded-xl shadow border border-gray-200 flex justify-between items-center">
                         <div>
                           <p className="font-semibold">{person.name}</p>
                           <p className="text-sm text-gray-600">{person.contact}</p>
                         </div>
                         <div className="flex space-x-2">
                           <button
                             onClick={() => startEditingPerson(person)}
                             className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                           >
                             {translations[language].edit}
                           </button>
                           <button
                             onClick={() => deletePerson(person.id)}
                             className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                           >
                             {translations[language].delete}
                           </button>
                         </div>
                       </li>
                     ))}
                   </ul>
                 )}
               </div>
             </div>
           </>
        );
      case 'manageExpenses':
        return (
           <>
             <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">{translations[language].expenseDescription}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{translations[language].expenseDescription}:</label>
                    <input
                      type="text"
                      value={expenseDescription}
                      onChange={(e) => setExpenseDescription(e.target.value)}
                      onKeyPress={handleKeyPressExpense}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{translations[language].expenseAmount}:</label>
                    <input
                      type="number"
                      step="0.01"
                      value={expenseAmount}
                      onChange={(e) => setExpenseAmount(e.target.value)}
                      onKeyPress={handleKeyPressExpense}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    />
                  </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700">{translations[language].expenseDate}:</label>
                     <input
                       type="date"
                       value={expenseDate}
                       onChange={(e) => setExpenseDate(e.target.value)}
                       onKeyPress={handleKeyPressExpense}
                       className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     />
                   </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{translations[language].paidBy}:</label>
                    <select
                      value={selectedPersonId}
                      onChange={(e) => setSelectedPersonId(e.target.value)}
                      onKeyPress={handleKeyPressExpense}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    >
                      <option value="">{translations[language].selectPerson}</option>
                      {people.map(person => (
                        <option key={person.id} value={person.id}>{person.name}</option>
                      ))}
                    </select>
                  </div>
                   <div className="flex space-x-4">
                     <button
                       onClick={handleAddOrUpdateExpense}
                       className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                     >
                       {editingExpenseId !== null ? translations[language].saveExpense : translations[language].addExpense}
                     </button>
                     {editingExpenseId !== null && (
                       <button
                         onClick={cancelEditingExpense}
                         className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
                       >
                         {translations[language].cancelEditExpense}
                       </button>
                     )}
                   </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Ausgabenliste</h4>
                  {expenses.length === 0 ? (
                    <p className="text-gray-500">{translations[language].noExpenses}</p>
                  ) : (
                    <ul className="space-y-4">
                      {expenses.map(expense => (
                        <li key={expense.id} className="bg-white p-4 rounded-xl shadow border border-gray-200 flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{expense.description}: {expense.amount.toFixed(2)} €</p>
                            <p className="text-sm text-gray-600">{translations[language].paidBy}: {expense.paidBy}</p>
                             <p className="text-sm text-gray-600">{translations[language].expenseDate}: {expense.date}</p>
                            {expense.sharedAmount !== null && (
                              <p className="text-sm text-gray-600">{expense.sharedAmount.toFixed(2)} €</p>
                            )}
                          </div>
                          <div className="flex space-x-2">
                             <button
                               onClick={() => handleShareExpense(expense.id)}
                               className="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                             >
                               {translations[language].shareEqually}
                             </button>
                             <button
                               onClick={() => startEditingExpense(expense)}
                               className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                             >
                               {translations[language].edit}
                             </button>
                             <button
                               onClick={() => deleteExpense(expense.id)}
                               className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                             >
                               {translations[language].delete}
                             </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
           </>
        );
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{translations[language].expensesManagement}</h2>
      <p className="mb-6">{translations[language].expensesPlaceholder}</p>

      <div className="mb-4">
        <label htmlFor="expenses-view-select" className="text-gray-700 mr-2">{translations[language].selectView}</label>
        <select
          id="expenses-view-select"
          value={currentView}
          onChange={(e) => setCurrentView(e.target.value)}
          className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
        >
          <option value="manageExpenses">{translations[language].viewExpenses}</option>
          <option value="managePeople">{translations[language].viewPeople}</option>
        </select>
      </div>

      {renderView()}
    </div>
  );
}

// Komponente für die Berichte (mit Saldenbericht und Inventarberichten)
function Reports() {
  const { translations, language } = useLanguage();
  const { people, expenses, inventory, products } = useData();

  const [currentView, setCurrentView] = useState('balanceReport');

  const { balanceReport, totalBalanceSummary } = useMemo(() => {
    const balance = {};

    people.forEach(person => {
      balance[person.name] = 0;
    });

    expenses.forEach(expense => {
      const paidBy = expense.paidBy;
      const amount = expense.amount;
      const sharedAmount = expense.sharedAmount;

      if (paidBy && balance.hasOwnProperty(paidBy)) {
        if (sharedAmount !== null) {
          balance[paidBy] += amount;
          people.forEach(person => {
            if (person.name !== paidBy) {
              balance[person.name] -= sharedAmount;
            }
          });
        } else {
           balance[paidBy] += amount;
        }
      }
    });


    const transactions = [];
    const creditors = [];
    const debtors = [];

    for (const personName in balance) {
      if (balance[personName] > 0) {
        creditors.push({ name: personName, amount: balance[personName] });
      } else if (balance[personName] < 0) {
        debtors.push({ name: personName, amount: Math.abs(balance[personName]) });
      }
    }

    let i = 0;
    let j = 0;

    while (i < debtors.length && j < creditors.length) {
        const debtor = debtors[i];
        const creditor = creditors[j];
        const minAmount = Math.min(debtor.amount, creditor.amount);

        if (minAmount > 0) {
            transactions.push({
                from: debtor.name,
                to: creditor.name,
                amount: minAmount
            });

            debtor.amount -= minAmount;
            creditor.amount -= minAmount;
        }

        if (debtor.amount === 0) {
            i++;
        }
        if (creditor.amount === 0) {
            j++;
        }
    }

    const totalBalance = {};
    people.forEach(person => {
        totalBalance[person.name] = 0;
    });

    expenses.forEach(expense => {
        const paidBy = expense.paidBy;
        const amount = expense.amount;
        const sharedAmount = expense.sharedAmount;

        if (paidBy && totalBalance.hasOwnProperty(paidBy)) {
             if (sharedAmount !== null) {
                totalBalance[paidBy] += amount * (1 - 1 / people.length);
                people.forEach(person => {
                    if (person.name !== paidBy) {
                         totalBalance[person.name] -= sharedAmount;
                    }
                });
             } else {
                 totalBalance[paidBy] += amount;
             }
        }
    });


     const totalBalanceSummary = [];
     for (const personName in totalBalance) {
         if (totalBalance[personName] !== 0) {
             totalBalanceSummary.push({
                 name: personName,
                 amount: totalBalance[personName]
             });
         }
     }


    return { balanceReport: transactions, totalBalanceSummary };

  }, [people, expenses]);

  const aggregatedFilamentReport = useMemo(() => {
      const aggregated = {};

      inventory.Filament.forEach(item => {
          const key = `${item.type}-${item.brand}-${item.color}`;
          if (!aggregated[key]) {
              aggregated[key] = {
                  type: item.type,
                  brand: item.brand,
                  color: item.color,
                  totalInitialWeight: 0,
                  totalRemainingWeight: 0,
                  totalConsumedWeight: 0,
                  totalPrice: 0,
                  latestOrderDate: '',
              };
          }
          aggregated[key].totalInitialWeight += item.initialWeight;
          aggregated[key].totalRemainingWeight += item.remainingWeight;
          aggregated[key].totalConsumedWeight += (item.initialWeight - item.remainingWeight);
          aggregated[key].totalPrice += item.pricePerUnit;
          if (item.orderDate > aggregated[key].latestOrderDate) {
              aggregated[key].latestOrderDate = item.orderDate;
          }
      });

      return Object.values(aggregated);
  }, [inventory.Filament]);


  const renderView = () => {
    switch (currentView) {
      case 'balanceReport':
        return (
           <>
             <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
               <h3 className="text-xl font-semibold mb-4">{translations[language].balanceReport}</h3>

               {balanceReport.length === 0 ? (
                 <p className="text-gray-500">{translations[language].noBalance}</p>
               ) : (
                 <ul className="space-y-4">
                   {balanceReport.map((item, index) => (
                     <li key={index} className="bg-gray-50 p-4 rounded-xl shadow-inner border border-gray-200">
                       <p>
                         <span className="font-semibold">{item.from}</span> {translations[language].owes} <span className="font-semibold">{item.to}</span>: <span className={item.amount > 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{item.amount.toFixed(2)} €</span>
                       </p>
                     </li>
                   ))}
                 </ul>
               )}
             </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                 <h3 className="text-xl font-semibold mb-4">{translations[language].totalBalance}</h3>
                 {totalBalanceSummary.length === 0 ? (
                   <p className="text-gray-500">{translations[language].noBalance}</p>
                 ) : (
                   <table className="min-w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                       <tr>
                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           {translations[language].personName}
                         </th>
                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           {translations[language].totalOwed}
                         </th>
                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           {translations[language].totalGetsBack}
                         </th>
                       </tr>
                     </thead>
                     <tbody className="bg-white divide-y divide-200">
                       {totalBalanceSummary.map((item, index) => (
                         <tr key={index}>
                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                             {item.name}
                           </td>
                           <td className={`px-6 py-4 whitespace-nowrap text-sm ${item.amount < 0 ? 'text-red-600 font-bold' : 'text-gray-900'}`}>
                             {item.amount < 0 ? Math.abs(item.amount).toFixed(2) + ' €' : '-'}
                           </td>
                           <td className={`px-6 py-4 whitespace-nowrap text-sm ${item.amount > 0 ? 'text-green-600 font-bold' : 'text-gray-900'}`}>
                             {item.amount > 0 ? item.amount.toFixed(2) + ' €' : '-'}
                           </td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 )}
              </div>
           </>
        );
      case 'inventoryFilament':
        return (
           <>
             <h3 className="text-xl font-semibold mb-4">{translations[language].reportFilament}</h3>
             {aggregatedFilamentReport.length === 0 ? (
               <p className="text-gray-500">{translations[language].noFilament}</p>
             ) : (
               <ul className="space-y-4">
                 {aggregatedFilamentReport.map((filament, index) => (
                   <li key={index} className="bg-white p-4 rounded-xl shadow border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                     <div className="mb-2 sm:mb-0">
                       <p className="font-semibold">{filament.type} - {filament.brand} - {filament.color}</p>
                       <p className="text-sm text-gray-600">
                         {translations[language].totalQuantity}: {filament.totalQuantity} Stk. |
                         {translations[language].totalPrice}: {filament.totalPrice.toFixed(2)} €
                       </p>
                       <p className="text-sm text-gray-600">{translations[language].latestOrderDate}: {filament.latestOrderDate}</p>
                     </div>
                     <div className="text-right sm:ml-auto">
                       <p className="text-sm text-green-600 font-semibold">{translations[language].remainingWeight}: {filament.totalRemainingWeight.toFixed(2)}g</p>
                       <p className="text-sm text-red-600 font-semibold">{translations[language].consumedWeight}: {filament.totalConsumedWeight.toFixed(2)}g</p>
                     </div>
                   </li>
                 ))}
               </ul>
             )}
           </>
        );
      case 'inventoryAccessories':
        return (
           <>
             <h3 className="text-xl font-semibold mb-4">{translations[language].reportAccessories}</h3>
              {inventory.Accessories.length === 0 ? (
                <p className="text-gray-500">{translations[language].noAccessories}</p>
              ) : (
                <ul className="space-y-4">
                  {inventory.Accessories.map(accessory => (
                    <li key={accessory.id} className="bg-white p-4 rounded-xl shadow border border-gray-200">
                      <p className="font-semibold">{accessory.name}: {accessory.price.toFixed(2)} €</p>
                      <p className="text-sm text-gray-600">{translations[language].orderDate}: {accessory.orderDate}</p>
                    </li>
                  ))}
                </ul>
              )}
           </>
        );
      case 'inventoryTools':
        return (
           <>
             <h3 className="text-xl font-semibold mb-4">{translations[language].reportTools}</h3>
              {inventory.Tools.length === 0 ? (
                <p className="text-gray-500">{translations[language].noTools}</p>
              ) : (
                <ul className="space-y-4">
                  {inventory.Tools.map(tool => (
                    <li key={tool.id} className="bg-white p-4 rounded-xl shadow border border-gray-200">
                      <p className="font-semibold">{tool.name}: {tool.price.toFixed(2)} €</p>
                      <p className="text-sm text-gray-600">{translations[language].orderDate}: {tool.orderDate}</p>
                    </li>
                  ))}
                </ul>
              )}
           </>
        );
      case 'calculatorReport':
        return (
           <>
             <h3 className="text-xl font-semibold mb-4">{translations[language].viewCalculatorReport}</h3>
             <p>{translations[language].calculatorReportPlaceholder}</p>
           </>
        );
      case 'productsReport':
        return (
            <>
                <h3 className="text-xl font-semibold mb-4">{translations[language].viewProductsReport}</h3>
                {products.length === 0 ? (
                    <p className="text-gray-500">{translations[language].noProducts}</p>
                ) : (
                    <ul className="space-y-4">
                        {products.map(product => (
                            <li key={product.id} className="bg-white p-4 rounded-xl shadow border border-gray-200 flex items-center">
                                {product.imageUrl ? (
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-20 h-20 object-cover rounded-lg mr-4"
                                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/cccccc/000000?text=No+Image"; }}
                                    />
                                ) : (
                                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 mr-4">
                                        {translations[language].noImage}
                                    </div>
                                )}
                                <div>
                                    <p className="font-semibold">{translations[language].productName}: {product.name}</p>
                                    <p className="text-sm text-gray-600">{product.description}</p>
                                    <p className="text-sm text-gray-600">{translations[language].productionCost}: {product.productionCost.toFixed(2)} €</p>
                                    {product.salesPrice !== null && (
                                        <p className="text-sm text-gray-600">{translations[language].salePrice}: {product.salesPrice.toFixed(2)} €</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
      default:
         return (
           <>
             <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
               <h3 className="text-xl font-semibold mb-4">{translations[language].balanceReport}</h3>

               {balanceReport.length === 0 ? (
                 <p className="text-gray-500">{translations[language].noBalance}</p>
               ) : (
                 <ul className="space-y-4">
                   {balanceReport.map((item, index) => (
                     <li key={index} className="bg-gray-50 p-4 rounded-xl shadow-inner border border-gray-200">
                       <p>
                         <span className="font-semibold">{item.from}</span> {translations[language].owes} <span className="font-semibold">{item.to}</span>: <span className={item.amount > 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{item.amount.toFixed(2)} €</span>
                       </p>
                     </li>
                   ))}
                 </ul>
               )}
             </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                 <h3 className="text-xl font-semibold mb-4">{translations[language].totalBalance}</h3>
                 {totalBalanceSummary.length === 0 ? (
                   <p className="text-gray-500">{translations[language].noBalance}</p>
                 ) : (
                   <table className="min-w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                       <tr>
                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           {translations[language].personName}
                         </th>
                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           {translations[language].totalOwed}
                         </th>
                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           {translations[language].totalGetsBack}
                         </th>
                       </tr>
                     </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                       {totalBalanceSummary.map((item, index) => (
                         <tr key={index}>
                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                             {item.name}
                           </td>
                           <td className={`px-6 py-4 whitespace-nowrap text-sm ${item.amount < 0 ? 'text-red-600 font-bold' : 'text-gray-900'}`}>
                             {item.amount < 0 ? Math.abs(item.amount).toFixed(2) + ' €' : '-'}
                           </td>
                           <td className={`px-6 py-4 whitespace-nowrap text-sm ${item.amount > 0 ? 'text-green-600 font-bold' : 'text-gray-900'}`}>
                             {item.amount > 0 ? item.amount.toFixed(2) + ' €' : '-'}
                           </td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 )}
              </div>
           </>
        );
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{translations[language].reportsTitle}</h2>
      <p className="mb-6">{translations[language].reportsPlaceholder}</p>

      <div className="mb-4">
        <label htmlFor="reports-view-select" className="text-gray-700 mr-2">{translations[language].selectView}</label>
        <select
          id="reports-view-select"
          value={currentView}
          onChange={(e) => setCurrentView(e.target.value)}
          className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
        >
          <option value="balanceReport">{translations[language].viewBalance}</option>
          <option value="inventoryFilament">{translations[language].reportFilament}</option>
          <option value="inventoryAccessories">{translations[language].reportAccessories}</option>
          <option value="inventoryTools">{translations[language].reportTools}</option>
          <option value="productsReport">{translations[language].viewProductsReport}</option>
          <option value="calculatorReport">{translations[language].viewCalculatorReport}</option>
        </select>
      </div>

      {renderView()}
    </div>
  );
}

// Komponente für die verschiedenen Rechner
function Calculators() {
   const { translations, language } = useLanguage();
  const [currentView, setCurrentView] = useState('productCost');

  const renderView = () => {
    switch (currentView) {
      case 'productCost':
        return (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <ProductionPriceCalculator />
           </div>
        );
      case 'salePrice':
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SalePriceCalculator />
            </div>
        );
      default:
         return (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <ProductionPriceCalculator />
           </div>
        );
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{translations[language].calculatorsTitle}</h2>
      <p className="mb-6">Hier finden Sie verschiedene Rechner für Ihr Geschäft.</p>

       <div className="mb-4">
         <label htmlFor="calculators-view-select" className="text-gray-700 mr-2">{translations[language].selectView}</label>
         <select
           id="calculators-view-select"
           value={currentView}
           onChange={(e) => setCurrentView(e.target.value)}
           className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
         >
           <option value="productCost">{translations[language].viewProductCost}</option>
           <option value="salePrice">{translations[language].viewSalePrice}</option>
         </select>
       </div>

      {renderView()}
    </div>
  );
}

// Komponente für den Produktionskostenrechner
function ProductionPriceCalculator() {
  const { translations, language } = useLanguage();
  const { inventory, setInventory, products, setProducts } = useData();

  const [selectedFilamentId, setSelectedFilamentId] = useState('');
  const [gramsUsed, setGramsUsed] = useState('');
  const [energyCostPerKWh, setEnergyCostPerKWh] = useState('');
  const [energyConsumptionKWh, setEnergyConsumptionKWh] = useState('');
  const [machineTimeInHours, setMachineTimeInHours] = useState('');
  const [machineHourlyRate, setMachineHourlyRate] = useState('');
  const [designTimeInHours, setDesignTimeInHours] = useState('');
  const [designHourlyRate, setDesignHourlyRate] = useState('');
  const [otherCosts, setOtherCosts] = useState('');

  const [productionCost, setProductionCost] = useState(null);
  const [deductionMessage, setDeductionMessage] = useState('');

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImageURL, setProductImageURL] = useState('');
  const [saveProductMessage, setSaveProductMessage] = useState('');

  const [showSaveProductPrompt, setShowSaveProductPrompt] = useState(false);
  const [tempCalculatedCost, setTempCalculatedCost] = useState(null);
  const [deductionDetailsForConfirmation, setDeductionDetailsForConfirmation] = useState(null);
  const [canSaveProductDetails, setCanSaveProductDetails] = useState(false);


  const calculateProductionCost = () => {
    setDeductionMessage('');
    setSaveProductMessage('');
    setCanSaveProductDetails(false);
    setProductionCost(null);

    const selectedFilament = inventory.Filament.find(f => f.id === parseInt(selectedFilamentId));
    const parsedGramsUsed = parseFloat(gramsUsed);

    if (!selectedFilament || parsedGramsUsed <= 0 || isNaN(parsedGramsUsed)) {
      setDeductionMessage(translations[language].selectFilamentForCalc);
      return;
    }

    const totalGramsAvailableInSelectedRoll = selectedFilament.remainingWeight;

    if (parsedGramsUsed > totalGramsAvailableInSelectedRoll) {
      setDeductionMessage(translations[language].deductionError);
      return;
    }

    const costPerGram = selectedFilament.pricePerUnit / selectedFilament.initialWeight;
    const material = parsedGramsUsed * costPerGram;

    const energy = parseFloat(energyCostPerKWh || 0) * parseFloat(energyConsumptionKWh || 0);
    const machine = parseFloat(machineTimeInHours || 0) * parseFloat(machineHourlyRate || 0);
    const design = parseFloat(designTimeInHours || 0) * parseFloat(designHourlyRate || 0);
    const other = parseFloat(otherCosts || 0);

    const totalCost = material + energy + machine + design + other;

    setTempCalculatedCost(totalCost);
    setDeductionDetailsForConfirmation({
      filamentId: selectedFilament.id,
      gramsUsed: parsedGramsUsed,
      newRemainingWeight: selectedFilament.remainingWeight - parsedGramsUsed,
    });
    setProductionCost(totalCost);
    setShowSaveProductPrompt(true);
  };

  const handleConfirmSaveProduct = () => {
    setCanSaveProductDetails(true);
    setShowSaveProductPrompt(false);
  };

  const handleCancelSaveProduct = () => {
    setProductionCost(null);
    setCanSaveProductDetails(false);
    setShowSaveProductPrompt(false);
    setTempCalculatedCost(null);
    setDeductionDetailsForConfirmation(null);
    setDeductionMessage('');
  };


  const saveProductAndDeductStock = () => {
    if (productionCost === null || productName.trim() === '' || deductionDetailsForConfirmation === null) {
      setSaveProductMessage('Bitte Produktkosten berechnen und Produktnamen eingeben.');
      return;
    }

    setInventory(prevInventory => ({
      ...prevInventory,
      Filament: prevInventory.Filament.map(item =>
        item.id === deductionDetailsForConfirmation.filamentId
          ? { ...item, remainingWeight: deductionDetailsForConfirmation.newRemainingWeight > 0.001 ? deductionDetailsForConfirmation.newRemainingWeight : 0 }
          : item
      )
    }));

    const newProduct = {
      id: Date.now(),
      name: productName,
      description: productDescription,
      productionCost: productionCost,
      imageUrl: productImageURL,
      salesPrice: null,
    };

    setProducts([...products, newProduct]);
    setSaveProductMessage(translations[language].productSavedSuccess);
    setProductName('');
    setProductDescription('');
    setProductImageURL('');
    setProductionCost(null);
    setTempCalculatedCost(null);
    setDeductionDetailsForConfirmation(null);
    setCanSaveProductDetails(false);
  };

  const generateProductDescription = async () => {
    if (productName.trim() === '') {
      setSaveProductMessage(translations[language].descriptionGenerationError + ' (Produktname fehlt)');
      return;
    }
    setSaveProductMessage(translations[language].generatingDescription);
    try {
      const prompt = `Generiere eine kreative, kurze Produktbeschreibung für ein 3D-gedrucktes Produkt namens "${productName}". Die Beschreibung sollte ansprechend und marketingorientiert sein.`;
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setProductDescription(text);
        setSaveProductMessage('');
      } else {
        setSaveProductMessage(translations[language].descriptionGenerationError + ' (Keine Beschreibung erhalten)');
      }
    } catch (error) {
      console.error('Fehler beim Aufruf der Gemini API:', error);
      setSaveProductMessage(translations[language].descriptionGenerationError + ' (API-Fehler)');
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">{translations[language].productionCostCalculator}</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].selectFilament}:</label>
          <select
            value={selectedFilamentId}
            onChange={(e) => setSelectedFilamentId(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          >
            <option value="">{translations[language].selectFilamentForCalc}</option>
            {inventory.Filament.map(filament => (
              <option key={filament.id} value={filament.id}>
                {filament.type} - {filament.brand} - {filament.color} (noch {filament.remainingWeight.toFixed(2)}g von {filament.initialWeight.toFixed(2)}g)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].gramsUsed}:</label>
          <input
            type="number"
            step="0.01"
            value={gramsUsed}
            onChange={(e) => setGramsUsed(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].energyCostPerKWh}:</label>
          <input
            type="number"
            step="0.01"
            value={energyCostPerKWh}
            onChange={(e) => setEnergyCostPerKWh(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].energyConsumptionKWh}:</label>
          <input
            type="number"
            step="0.01"
            value={energyConsumptionKWh}
            onChange={(e) => setEnergyConsumptionKWh(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
         <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].machineTimeInHours}:</label>
          <input
            type="number"
            step="0.01"
            value={machineTimeInHours}
            onChange={(e) => setMachineTimeInHours(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
         <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].machineHourlyRate}:</label>
          <input
            type="number"
            step="0.01"
            value={machineHourlyRate}
            onChange={(e) => setMachineHourlyRate(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
         <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].designTimeInHours}:</label>
          <input
            type="number"
            step="0.01"
            value={designTimeInHours}
            onChange={(e) => setDesignTimeInHours(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
         <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].designHourlyRate}:</label>
          <input
            type="number"
            step="0.01"
            value={designHourlyRate}
            onChange={(e) => setDesignHourlyRate(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
         <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].otherCosts}:</label>
          <input
            type="number"
            step="0.01"
            value={otherCosts}
            onChange={(e) => setOtherCosts(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>

        <button
          onClick={calculateProductionCost}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
        >
          {translations[language].calculateCost}
        </button>

        {productionCost !== null && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <strong>{translations[language].productionCost}:</strong> {productionCost.toFixed(2)} €
          </div>
        )}
        {deductionMessage && (
          <p className={`mt-2 text-sm ${deductionMessage.includes(translations[language].deductionSuccess) ? 'text-green-600' : 'text-red-600'}`}>
            {deductionMessage}
          </p>
        )}

        {productionCost !== null && canSaveProductDetails && (
          <div className="mt-8 p-6 bg-white rounded-xl shadow-inner border border-gray-200">
            <h4 className="text-lg font-semibold mb-4">{translations[language].saveProduct}</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">{translations[language].productName}:</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{translations[language].productDescription}:</label>
                <textarea
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  rows="3"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                ></textarea>
                <button
                  onClick={generateProductDescription}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold text-sm"
                >
                  {saveProductMessage === translations[language].generatingDescription ? translations[language].generatingDescription : translations[language].generateDescription}
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{translations[language].productImageURL}:</label>
                <input
                  type="text"
                  value={productImageURL}
                  onChange={(e) => setProductImageURL(e.target.value)}
                  placeholder="https://placehold.co/80x80/cccccc/000000?text=No+Image"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              </div>
              <button
                onClick={saveProductAndDeductStock}
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
              >
                {translations[language].saveProduct}
              </button>
              {saveProductMessage && (
                <p className={`mt-2 text-sm ${saveProductMessage.includes(translations[language].productSavedSuccess) ? 'text-green-600' : 'text-red-600'}`}>
                  {saveProductMessage}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      {showSaveProductPrompt && tempCalculatedCost !== null && (
        <ProductSavePromptModal
          cost={tempCalculatedCost}
          onConfirm={handleConfirmSaveProduct}
          onCancel={handleCancelSaveProduct}
        />
      )}
    </div>
  );
}

// Komponente für den Verkaufspreisrechner
function SalePriceCalculator() {
  const { translations, language } = useLanguage();
  const { products, setProducts } = useData();

  const [selectedProductId, setSelectedProductId] = useState('');
  const [productionCost, setProductionCost] = useState('');
  const [desiredProfitMargin, setDesiredProfitMargin] = useState('');

  const [salePrice, setSalePrice] = useState(null);
  const [saveSalesPriceMessage, setSaveSalesPriceMessage] = useState('');

  React.useEffect(() => {
    const product = products.find(p => p.id === parseInt(selectedProductId));
    if (product) {
      setProductionCost(product.productionCost.toFixed(2));
    } else {
      setProductionCost('');
    }
    setSaveSalesPriceMessage('');
  }, [selectedProductId, products]);

  const calculateSalePrice = () => {
    const cost = parseFloat(productionCost || 0);
    const profitMargin = parseFloat(desiredProfitMargin || 0) / 100;

    if (cost > 0) {
      const price = cost / (1 - profitMargin);
      setSalePrice(price);
    } else {
      setSalePrice(0);
    }
    setSaveSalesPriceMessage('');
  };

  const handleSaveSalesPrice = () => {
    if (salePrice === null || selectedProductId === '') {
      setSaveSalesPriceMessage('Bitte Produkt auswählen und Verkaufspreis berechnen.');
      return;
    }

    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === parseInt(selectedProductId)
          ? { ...product, salesPrice: salePrice }
          : product
      )
    );
    setSaveSalesPriceMessage(translations[language].salesPriceSavedSuccess);
  };


  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">{translations[language].salePriceCalculator}</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].selectProduct}:</label>
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          >
            <option value="">{translations[language].selectProduct}</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name} ({product.productionCost.toFixed(2)} €)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].productionCostInput}:</label>
          <input
            type="number"
            step="0.01"
            value={productionCost}
            readOnly
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">{translations[language].desiredProfitMargin}</label>
          <input
            type="number"
            step="0.1"
            value={desiredProfitMargin}
            onChange={(e) => setDesiredProfitMargin(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>

        <button
          onClick={calculateSalePrice}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
        >
          {translations[language].calculatePrice}
        </button>

        {salePrice !== null && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <strong>{translations[language].salePrice}:</strong> {salePrice.toFixed(2)} €
          </div>
        )}

        {salePrice !== null && selectedProductId !== '' && (
          <button
            onClick={handleSaveSalesPrice}
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold mt-4"
          >
            {translations[language].saveSalesPrice}
          </button>
        )}
        {saveSalesPriceMessage && (
          <p className={`mt-2 text-sm ${saveSalesPriceMessage.includes(translations[language].salesPriceSavedSuccess) ? 'text-green-600' : 'text-red-600'}`}>
            {saveSalesPriceMessage}
          </p>
        )}
      </div>
    </div>
  );
}

// Komponente für die neue Seite "Fertige Produkte"
function FinishedProducts() {
  const { translations, language } = useLanguage();
  const { products, setProducts } = useData();

  const [editingProductId, setEditingProductId] = useState(null);
  const [editProductName, setEditProductName] = useState('');
  const [editProductDescription, setEditProductDescription] = useState('');
  const [editProductImageURL, setEditProductImageURL] = useState('');
  const [editProductionCost, setEditProductionCost] = useState('');
  const [editSalesPrice, setEditSalesPrice] = useState('');

  const startEditingProduct = (product) => {
    setEditingProductId(product.id);
    setEditProductName(product.name);
    setEditProductDescription(product.description);
    setEditProductImageURL(product.imageUrl || '');
    setEditProductionCost(product.productionCost.toFixed(2));
    setEditSalesPrice(product.salesPrice !== null ? product.salesPrice.toFixed(2) : '');
  };

  const handleUpdateProduct = () => {
    if (editingProductId === null || editProductName.trim() === '') {
      return;
    }

    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === editingProductId
          ? {
              ...product,
              name: editProductName,
              description: editProductDescription,
              imageUrl: editProductImageURL,
              productionCost: parseFloat(editProductionCost),
              salesPrice: editSalesPrice !== '' ? parseFloat(editSalesPrice) : null,
            }
          : product
      )
    );
    setEditingProductId(null);
    setEditProductName('');
    setEditProductDescription('');
    setEditProductImageURL('');
    setEditProductionCost('');
    setEditSalesPrice('');
  };

  const cancelEditingProduct = () => {
    setEditingProductId(null);
    setEditProductName('');
    setEditProductDescription('');
    setEditProductImageURL('');
    setEditProductionCost('');
    setEditSalesPrice('');
  };

  const handleDeleteProduct = (productId) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };


  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{translations[language].finishedProductsTitle}</h2>
      {products.length === 0 ? (
        <p className="text-gray-500">{translations[language].finishedProductsPlaceholder}</p>
      ) : (
        <ul className="space-y-4">
          {products.map(product => (
            <li key={product.id} className="bg-white p-4 rounded-xl shadow border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/cccccc/000000?text=No+Image"; }}
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 mr-4">
                    {translations[language].noImage}
                  </div>
                )}
                <div>
                  <p className="font-semibold">{translations[language].productName}: {product.name}</p>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-sm text-gray-600">{translations[language].productionCost}: {product.productionCost.toFixed(2)} €</p>
                  {product.salesPrice !== null && (
                    <p className="text-sm text-gray-600">{translations[language].salePrice}: {product.salesPrice.toFixed(2)} €</p>
                  )}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEditingProduct(product)}
                  className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition duration-300"
                >
                  {translations[language].edit}
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition duration-300"
                >
                  {translations[language].delete}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {editingProductId !== null && (
        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">{translations[language].editProduct}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">{translations[language].productName}:</label>
              <input
                type="text"
                value={editProductName}
                onChange={(e) => setEditProductName(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{translations[language].productDescription}:</label>
              <textarea
                value={editProductDescription}
                onChange={(e) => setEditProductDescription(e.target.value)}
                rows="3"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{translations[language].productImageURL}:</label>
              <input
                type="text"
                value={editProductImageURL}
                onChange={(e) => setEditProductImageURL(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{translations[language].productionCost}:</label>
              <input
                type="number"
                step="0.01"
                value={editProductionCost}
                onChange={(e) => setEditProductionCost(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{translations[language].salePrice}:</label>
              <input
                type="number"
                step="0.01"
                value={editSalesPrice}
                onChange={(e) => setEditSalesPrice(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleUpdateProduct}
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
              >
                {translations[language].saveProductChanges}
              </button>
              <button
                onClick={cancelEditingProduct}
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
              >
                {translations[language].cancelProductEdit}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Komponente für die Einstellungen
function Settings() {
  const { translations, language } = useLanguage();
  const { users, setUsers, inventory, expenses, people, products, setInventory, setExpenses, setPeople, setProducts } = useData(); // Destructure products here

  // Annahme: Der aktuell eingeloggte Benutzer ist der erste in der Liste (für diese Demo)
  const currentUser = users[0];
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [profileMessage, setProfileMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [backupRestoreMessage, setBackupRestoreMessage] = useState('');

  const [editName, setEditName] = useState(currentUser.name);
  const [editEmail, setEditEmail] = useState(currentUser.email);
  const [editMobile, setEditMobile] = useState(currentUser.mobile);

  // Benutzerprofil aktualisieren
  const handleUpdateProfile = () => {
    setUsers(prevUsers => prevUsers.map(user =>
      user.username === currentUser.username
        ? { ...user, name: editName, email: editEmail, mobile: editMobile }
        : user
    ));
    setProfileMessage(translations[language].profileUpdatedSuccess);
  };

  // Passwort ändern
  const handleChangePassword = () => {
    if (currentPassword !== currentUser.password) {
      setPasswordMessage(translations[language].passwordChangeError + ' (Aktuelles Passwort falsch)');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setPasswordMessage(translations[language].passwordMismatch);
      return;
    }
    if (newPassword === '') {
      setPasswordMessage(translations[language].passwordChangeError + ' (Neues Passwort darf nicht leer sein)');
      return;
    }

    setUsers(prevUsers => prevUsers.map(user =>
      user.username === currentUser.username
        ? { ...user, password: newPassword }
        : user
    ));
    setPasswordMessage(translations[language].passwordChangedSuccess);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  // Backup erstellen
  const handleCreateBackup = () => {
    // Access products directly from the destructured variable
    const dataToBackup = {
      users: users,
      inventory: inventory,
      expenses: expenses,
      people: people,
      products: products, // products is now directly in scope
    };
    const jsonString = JSON.stringify(dataToBackup, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `3d_print_business_app_backup_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setBackupRestoreMessage(translations[language].backupCreatedSuccess);
  };

  // Backup wiederherstellen
  const handleRestoreBackup = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setBackupRestoreMessage(translations[language].restoreError + ' (Keine Datei ausgewählt)');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const restoredData = JSON.parse(e.target.result);
        console.log('Restored Data:', restoredData); // Log the parsed data
        if (restoredData.users && restoredData.inventory && restoredData.expenses && restoredData.people && restoredData.products) {
          setUsers(restoredData.users);
          setInventory(restoredData.inventory);
          setExpenses(restoredData.expenses);
          setPeople(restoredData.people);
          setProducts(restoredData.products);
          setBackupRestoreMessage(translations[language].restoreSuccess);
        } else {
          setBackupRestoreMessage(translations[language].restoreError + ' (Ungültiges Dateiformat oder fehlende Daten)');
        }
      } catch (error) {
        setBackupRestoreMessage(translations[language].restoreError + ' (Fehler beim Parsen der Datei)');
        console.error('Error parsing backup file:', error); // Log the parsing error
      }
    };
    reader.onerror = (error) => {
      setBackupRestoreMessage(translations[language].restoreError + ' (Fehler beim Lesen der Datei)');
      console.error('Error reading file:', error);
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">{translations[language].settingsTitle}</h2>

      {/* Benutzerprofil */}
      <div className="mb-8 p-6 bg-gray-50 rounded-xl shadow-inner border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">{translations[language].userProfile}</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">{translations[language].name}:</label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{translations[language].email}:</label>
            <input
              type="email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{translations[language].mobileNumber}:</label>
            <input
              type="text"
              value={editMobile}
              onChange={(e) => setEditMobile(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          <button
            onClick={handleUpdateProfile}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
          >
            {translations[language].updateProfile}
          </button>
          {profileMessage && <p className="mt-2 text-sm text-green-600">{profileMessage}</p>}
        </div>
      </div>

      {/* Passwort ändern */}
      <div className="mb-8 p-6 bg-gray-50 rounded-xl shadow-inner border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">{translations[language].changePassword}</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">{translations[language].currentPassword}:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{translations[language].newPassword}:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{translations[language].confirmNewPassword}:</label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          <button
            onClick={handleChangePassword}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
          >
            {translations[language].changePassword}
          </button>
          {passwordMessage && (
            <p className={`mt-2 text-sm ${passwordMessage.includes(translations[language].passwordChangedSuccess) ? 'text-green-600' : 'text-red-600'}`}>
              {passwordMessage}
            </p>
          )}
        </div>
      </div>

      {/* Datensicherung & Wiederherstellung */}
      <div className="p-6 bg-gray-50 rounded-xl shadow-inner border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">{translations[language].backupRestore}</h3>
        <div className="space-y-4">
          <button
            onClick={handleCreateBackup}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
          >
            {translations[language].createBackup}
          </button>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{translations[language].restoreBackup}:</label>
            <input
              type="file"
              accept=".json"
              onChange={handleRestoreBackup}
              className="block w-full text-sm text-gray-700
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>
          {backupRestoreMessage && (
            <p className={`mt-2 text-sm ${backupRestoreMessage.includes(translations[language].backupCreatedSuccess) || backupRestoreMessage.includes(translations[language].restoreSuccess) ? 'text-green-600' : 'text-red-600'}`}>
              {backupRestoreMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}


// Popup-Komponente für die Speicherbestätigung (außerhalb der Hauptkomponente)
const ProductSavePromptModal = ({ cost, onConfirm, onCancel }) => {
  const { translations, language } = useLanguage();
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <h3 className="text-xl font-semibold mb-4">{translations[language].saveProductQuestion}</h3>
        <p className="mb-4">Die Produktionskosten betragen: {cost.toFixed(2)} €</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 transition duration-300"
          >
            {translations[language].no}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
          >
            {translations[language].yes}
          </button>
        </div>
      </div>
    </div>
  );
};


// Exportieren der Hauptkomponente, um den Sprach- und Datenprovider zu umschließen
export default function WrappedApp() {
  return (
    // LanguageProvider umschließt den Datenprovider und die App
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}
