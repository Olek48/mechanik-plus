// Language translations
const translations = {
  cs: {
    navServices: 'Služby',
    navContact: 'Kontakt',
    navFotovideo: 'Fotografie našich prací',
    langBtn: 'Jazyk ▼',
    heroTitle: 'Vaše auto, naše péče',
    heroDesc: 'Profesionální opravy a servis vozidel, kterým můžete důvěřovat.',
    heroBtn: 'Objednat se',
    servicesTitle: 'Naše služby',
    service1Title: 'Diagnostika',
    service1Desc: 'Moderní vybavení pro přesné zjištění závad.',
    service2Title: 'Výměna oleje',
    service2Desc: 'Rychlá a spolehlivá výměna oleje a filtrů.',
    service3Title: 'Servis brzd',
    service3Desc: 'Bezpečná a efektivní kontrola a oprava brzd.',
    service4Title: 'Pneuservis',
    service4Desc: 'Přezutí, vyvážení a sezónní výměna pneumatik.',
    contactTitle: 'Kontaktujte nás',
    contactName: 'Jméno',
    contactPhone: 'Telefon',
    contactMessage: 'Zpráva',
    contactBtn: 'Odeslat',
    title: 'Mechanik Plus - Autoservis',
    footerContactTitle: 'Kontakt',
    footerPhone1: 'Telefon: +420 777 318 202',
    footerPhone2: 'Telefon: +420 773 977 965',
    footerEmail: 'Email: info@mechanikplus.cz',
    footerAddress: 'Líšný 2.díl 6, 468 22 Líšný-Železný Brod, Česko',
    footerMap: 'https://www.google.com/maps?q=Líšný+2.díl+6,+468+22+Líšný-Železný+Brod,+Česko&output=embed',
    footerHoursTitle: 'Otevírací doba',
    footerHoursMonFri: 'Pondělí–Pátek: 8:00–20:00',
    footerHoursSat: 'Sobota: 9:00–14:00',
    footerHoursSun: 'Neděle: po zápisu',
    repairHeadTitle: 'Oprava hlavy válců',
    galleryBMWTitle: 'Opravy motoru BMW',
    galleryFuelTitle: 'Diagnostika a oprava palivového systému',
    galleryDSGTitle: 'Opravy automatické převodovky DSG7',
    galleryTimingTitle: 'Výměna rozvodového řetězu',
    gallerySuspensionTitle: 'Oprava podvozku a pneumatického odpružení',
    galleryElectricsTitle: 'Diagnostika a oprava elektrických systémů',
    galleryHeatingTitle: 'Oprava topení a klimatizace',
    galleryOilPressureTitle: 'Měření tlaku oleje',
    galleryHeadlightTitle: 'Leštění světlometů',
    service5Title: 'Oprava podvozku a vzduchového podvozku',
    service5Desc: 'Oprava podvozku a pnemopodvozku jakékoli složitosti.',
    service6Title: 'Diagnostika a oprava palivového systému',
    service6Desc: 'Diagnostika a oprava palivového systému.',
    service7Title: 'Oprava motoru, převodovky, spojky',
    service7Desc: 'Profesionální oprava motoru, převodovky a spojky jakéhokoliv auta.',
    service8Title: 'Autoelektrikář',
    service8Desc: 'Diagnostika a oprava elektrických systémů automobilu.',
    service9Title: 'Montáž doplňkového vybavení',
    service9Desc: 'Montáž a výměna doplňkového vybavení a příslušenství.',
    service10Title: 'Leštění světlometů',
    service10Desc: 'Obnova průhlednosti a lesku světlometů pro lepší viditelnost.',
    service11Title: 'Antikorozní úprava',
    service11Desc: 'Profesionální antikorozní úprava karoserie a podvozku.',
    service12Title: 'Výměna prahů',
    service12Desc: 'Kvalitní výměna a oprava prahů automobilu.',
  },
  uk: {
    navServices: 'Послуги',
    navContact: 'Контакт',
    navFotovideo: 'Фото наших робіт',
    langBtn: 'Мова ▼',
    heroTitle: 'Ваш автомобіль, наша турбота',
    heroDesc: 'Професійний ремонт та сервіс, якому ви можете довіряти.',
    heroBtn: 'Записатися',
    servicesTitle: 'Наші послуги',
    service1Title: 'Діагностика',
    service1Desc: 'Сучасне обладнання для точного виявлення несправностей.',
    service2Title: 'Заміна оливи',
    service2Desc: 'Швидка та надійна заміна оливи та фільтрів.',
    service3Title: 'Сервіс гальм',
    service3Desc: 'Безпечна та ефективна перевірка і ремонт гальм.',
    service4Title: 'Шиномонтаж',
    service4Desc: 'Монтаж, балансування та сезонна заміна шин.',
    contactTitle: 'Звʼяжіться з нами',
    contactName: "Ім'я",
    contactPhone: 'Телефон',
    contactMessage: 'Повідомлення',
    contactBtn: 'Відправити',
    title: 'Mechanik Plus - Автосервіс',
    footerContactTitle: 'Контакт',
    footerPhone1: 'Телефон: +420 777 318 202',
    footerPhone2: 'Телефон: +420 773 977 965',
    footerEmail: 'Електронна пошта: info@mechanikplus.cz',
    footerAddress: 'Líšný 2.díl 6, 468 22 Líšný-Železný Brod, Чехія',
    footerMap: 'https://www.google.com/maps?q=Líšný+2.díl+6,+468+22+Líšný-Železný+Brod,+Чехія&output=embed',
    footerHoursTitle: 'Години роботи',
    footerHoursMonFri: 'Понеділок–Пʼятниця: 8:00–20:00',
    footerHoursSat: 'Субота: 9:00–14:00',
    footerHoursSun: 'Неділя: за записом',
    repairHeadTitle: 'Ремонт головки блока циліндрів',
    galleryBMWTitle: 'Ремонт двигуна BMW',
    galleryFuelTitle: 'Діагностика і ремонт паливної системи',
    galleryDSGTitle: 'Ремонт автоматичної коробки передач DSG7',
    galleryTimingTitle: 'Заміна ланцюга ГРМ',
    gallerySuspensionTitle: 'Ремонт підвіски та пневматичної підвіски',
    galleryElectricsTitle: 'Діагностика і ремонт електричних систем',
    galleryHeatingTitle: 'Ремонт опалення та кондиціювання',
    galleryOilPressureTitle: 'Вимірювання тиску олії',
    galleryHeadlightTitle: 'Полірування фар',
    service5Title: 'Ремонт підвіски і пневмопідвіски',
    service5Desc: 'Ремонт підвіски і пневмопідвіски будь-якої складності.',
    service6Title: 'Діагностика і ремонт паливної системи',
    service6Desc: 'Діагностика і ремонт паливної системи.',
    service7Title: 'Ремонт двигуна, коробки передач, зчеплення',
    service7Desc: 'Професійний ремонт двигуна, коробки передач та зчеплення будь-яких авто.',
    service8Title: 'Автоелектрик',
    service8Desc: 'Діагностика та ремонт електричних систем автомобіля.',
    service9Title: 'Встановлення додаткового обладнання',
    service9Desc: 'Монтаж та заміна додаткового обладнання та аксесуарів.',
    service10Title: 'Полірування фар',
    service10Desc: 'Відновлення прозорості та блиску фар для кращої видимості.',
    service11Title: 'Антикорозійна обробка',
    service11Desc: 'Професійна антикорозійна обробка кузова та підвіски.',
    service12Title: 'Заміна порогів',
    service12Desc: 'Якісна заміна та ремонт порогів автомобіля.',
  },
  en: {
    navServices: 'Services',
    navContact: 'Contact',
    navFotovideo: 'Photos of our work',
    langBtn: 'Language ▼',
    heroTitle: 'Your Car, Our Care',
    heroDesc: 'Professional auto repair & service you can trust.',
    heroBtn: 'Book Now',
    servicesTitle: 'Our Services',
    service1Title: 'Diagnostics',
    service1Desc: 'Modern equipment for accurate fault detection.',
    service2Title: 'Oil Change',
    service2Desc: 'Quick and reliable oil & filter replacement.',
    service3Title: 'Brake Service',
    service3Desc: 'Safe and efficient brake inspection & repair.',
    service4Title: 'Tire Service',
    service4Desc: 'Mounting, balancing, and seasonal tire change.',
    contactTitle: 'Contact Us',
    contactName: 'Name',
    contactPhone: 'Phone',
    contactMessage: 'Message',
    contactBtn: 'Send',
    title: 'Mechanik Plus - Car Service',
    footerContactTitle: 'Contact',
    footerPhone1: 'Phone: +420 777 318 202',
    footerPhone2: 'Phone: +420 773 977 965',
    footerEmail: 'Email: info@mechanikplus.cz',
    footerAddress: 'Líšný 2.díl 6, 468 22 Líšný-Železný Brod, Czechia',
    footerMap: 'https://www.google.com/maps?q=Líšný+2.díl+6,+468+22+Líšný-Železný+Brod,+Czechia&output=embed',
    footerHoursTitle: 'Opening Hours',
    footerHoursMonFri: 'Monday–Friday: 8:00–20:00',
    footerHoursSat: 'Saturday: 9:00–14:00',
    footerHoursSun: 'Sunday: by appointment',
    repairHeadTitle: 'Cylinder head repair',
    galleryBMWTitle: 'BMW engine repair',
    galleryFuelTitle: 'Fuel system diagnostics and repair',
    galleryDSGTitle: 'DSG7 automatic gearbox repair',
    galleryTimingTitle: 'Timing chain replacement',
    gallerySuspensionTitle: 'Suspension and pneumatic suspension repair',
    galleryElectricsTitle: 'Diagnostics and repair of electrical systems',
    galleryHeatingTitle: 'Heating and air conditioning repair',
    galleryOilPressureTitle: 'Oil pressure measurement',
    galleryHeadlightTitle: 'Headlight polishing',
    service5Title: 'Suspension and Air Suspension Repair',
    service5Desc: 'Repair of suspension and air suspension of any complexity.',
    service6Title: 'Fuel System Diagnostics and Repair',
    service6Desc: 'Diagnostics and repair of the fuel system.',
    service7Title: 'Engine, Gearbox, and Clutch Repair',
    service7Desc: 'Professional repair of engine, gearbox, and clutch for any car.',
    service8Title: 'Auto Electrician',
    service8Desc: 'Diagnostics and repair of vehicle electrical systems.',
    service9Title: 'Additional Equipment Installation',
    service9Desc: 'Installation and replacement of additional equipment and accessories.',
    service10Title: 'Headlight Polishing',
    service10Desc: 'Restoration of headlight clarity and shine for better visibility.',
    service11Title: 'Anti-corrosion Treatment',
    service11Desc: 'Professional anti-corrosion treatment of body and suspension.',
    service12Title: 'Sill Replacement',
    service12Desc: 'Quality replacement and repair of car sills.',
  }
};

const langBtn = document.getElementById('lang-btn');
const langList = document.getElementById('lang-list');

function setLanguage(lang) {
  const t = translations[lang];
  // Update only if element exists
  if (document.getElementById('nav-services')) document.getElementById('nav-services').textContent = t.navServices;
  if (document.getElementById('nav-contact')) document.getElementById('nav-contact').textContent = t.navContact;
  if (document.getElementById('nav-fotovideo')) document.getElementById('nav-fotovideo').textContent = t.navFotovideo;
  if (document.getElementById('lang-btn')) langBtn.textContent = t.langBtn;
  if (document.getElementById('hero-title')) document.getElementById('hero-title').textContent = t.heroTitle;
  if (document.getElementById('hero-desc')) document.getElementById('hero-desc').textContent = t.heroDesc;
  if (document.getElementById('hero-btn')) document.getElementById('hero-btn').textContent = t.heroBtn;
  if (document.getElementById('services-title')) document.getElementById('services-title').textContent = t.servicesTitle;
  if (document.getElementById('service1-title')) document.getElementById('service1-title').textContent = t.service1Title;
  if (document.getElementById('service1-desc')) document.getElementById('service1-desc').textContent = t.service1Desc;
  if (document.getElementById('service2-title')) document.getElementById('service2-title').textContent = t.service2Title;
  if (document.getElementById('service2-desc')) document.getElementById('service2-desc').textContent = t.service2Desc;
  if (document.getElementById('service3-title')) document.getElementById('service3-title').textContent = t.service3Title;
  if (document.getElementById('service3-desc')) document.getElementById('service3-desc').textContent = t.service3Desc;
  if (document.getElementById('service4-title')) document.getElementById('service4-title').textContent = t.service4Title;
  if (document.getElementById('service4-desc')) document.getElementById('service4-desc').textContent = t.service4Desc;
  if (document.getElementById('service5-title')) document.getElementById('service5-title').textContent = t.service5Title;
  if (document.getElementById('service5-desc')) document.getElementById('service5-desc').textContent = t.service5Desc;
  if (document.getElementById('service6-title')) document.getElementById('service6-title').textContent = t.service6Title;
  if (document.getElementById('service6-desc')) document.getElementById('service6-desc').textContent = t.service6Desc;
  if (document.getElementById('service7-title')) document.getElementById('service7-title').textContent = t.service7Title;
  if (document.getElementById('service7-desc')) document.getElementById('service7-desc').textContent = t.service7Desc;
  if (document.getElementById('service8-title')) document.getElementById('service8-title').textContent = t.service8Title;
  if (document.getElementById('service8-desc')) document.getElementById('service8-desc').textContent = t.service8Desc;
  if (document.getElementById('service9-title')) document.getElementById('service9-title').textContent = t.service9Title;
  if (document.getElementById('service9-desc')) document.getElementById('service9-desc').textContent = t.service9Desc;
  if (document.getElementById('service10-title')) document.getElementById('service10-title').textContent = t.service10Title;
  if (document.getElementById('service10-desc')) document.getElementById('service10-desc').textContent = t.service10Desc;
  if (document.getElementById('service11-title')) document.getElementById('service11-title').textContent = t.service11Title;
  if (document.getElementById('service11-desc')) document.getElementById('service11-desc').textContent = t.service11Desc;
  if (document.getElementById('service12-title')) document.getElementById('service12-title').textContent = t.service12Title;
  if (document.getElementById('service12-desc')) document.getElementById('service12-desc').textContent = t.service12Desc;
  if (document.getElementById('contact-title')) document.getElementById('contact-title').textContent = t.contactTitle;
  if (document.getElementById('contact-name')) document.getElementById('contact-name').placeholder = t.contactName;
  if (document.getElementById('contact-phone')) document.getElementById('contact-phone').placeholder = t.contactPhone;
  if (document.getElementById('contact-message')) document.getElementById('contact-message').placeholder = t.contactMessage;
  if (document.getElementById('contact-btn')) document.getElementById('contact-btn').textContent = t.contactBtn;
  if (document.getElementById('footer-contact-title')) document.getElementById('footer-contact-title').textContent = t.footerContactTitle;
  if (document.getElementById('footer-phone-1')) document.getElementById('footer-phone-1').textContent = t.footerPhone1;
  if (document.getElementById('footer-phone-2')) document.getElementById('footer-phone-2').textContent = t.footerPhone2;
  // Fallback for old single footer-phone element
  if (document.getElementById('footer-phone')) document.getElementById('footer-phone').textContent = t.footerPhone1 || t.footerPhone;
  if (document.getElementById('footer-email')) document.getElementById('footer-email').textContent = t.footerEmail;
  if (document.getElementById('footer-address')) document.getElementById('footer-address').textContent = t.footerAddress;
  if (document.getElementById('footer-map')) document.getElementById('footer-map').src = t.footerMap;
  if (document.getElementById('footer-hours-title')) document.getElementById('footer-hours-title').textContent = t.footerHoursTitle;
  if (document.getElementById('footer-hours-monfri')) document.getElementById('footer-hours-monfri').textContent = t.footerHoursMonFri;
  if (document.getElementById('footer-hours-sat')) document.getElementById('footer-hours-sat').textContent = t.footerHoursSat;
  if (document.getElementById('footer-hours-sun')) document.getElementById('footer-hours-sun').textContent = t.footerHoursSun;
  if (document.getElementById('fotovideo-title')) document.getElementById('fotovideo-title').textContent = t.navFotovideo;
  // Update gallery group titles if present
  if (document.getElementById('gallery-group-title')) document.getElementById('gallery-group-title').textContent = t.repairHeadTitle;
  if (document.getElementById('gallery-group2-title')) document.getElementById('gallery-group2-title').textContent = t.galleryBMWTitle;
  if (document.getElementById('gallery-fuel-title')) document.getElementById('gallery-fuel-title').textContent = t.galleryFuelTitle;
  if (document.getElementById('gallery-group3-title')) document.getElementById('gallery-group3-title').textContent = t.galleryDSGTitle;
  if (document.getElementById('gallery-group4-title')) document.getElementById('gallery-group4-title').textContent = t.galleryTimingTitle;
  if (document.getElementById('gallery-suspension-title')) document.getElementById('gallery-suspension-title').textContent = t.gallerySuspensionTitle;
  if (document.getElementById('gallery-electrics-title')) document.getElementById('gallery-electrics-title').textContent = t.galleryElectricsTitle;
  if (document.getElementById('gallery-heating-title')) document.getElementById('gallery-heating-title').textContent = t.galleryHeatingTitle;
  if (document.getElementById('gallery-oilpressure-title')) document.getElementById('gallery-oilpressure-title').textContent = t.galleryOilPressureTitle;
  if (document.getElementById('gallery-headlight-title')) document.getElementById('gallery-headlight-title').textContent = t.galleryHeadlightTitle;
  document.title = t.title;
}

// Ensure UI behavior is initialized after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Re-query elements to be robust
  const langBtnEl = document.getElementById('lang-btn');
  const langListEl = document.getElementById('lang-list');

  // Initialize language from localStorage or default
  const savedLang = localStorage.getItem('siteLang') || 'cs';
  setLanguage(savedLang);

  // Highlight current nav item
  const navIds = ['nav-services', 'nav-fotovideo', 'nav-contact'];
  navIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active-nav');
  });
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage === 'index.html' || currentPage === '') {
    const navServices = document.getElementById('nav-services');
    if (navServices) navServices.classList.add('active-nav');
  } else if (currentPage === 'fotovideo.html') {
    const navFotovideo = document.getElementById('nav-fotovideo');
    if (navFotovideo) navFotovideo.classList.add('active-nav');
  }

  // Language dropdown logic
  if (langBtnEl && langListEl) {
    langBtnEl.addEventListener('click', function(e) {
      e.stopPropagation();
      langListEl.classList.toggle('show');
    });

    // Click on a language option
    langListEl.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', function(e) {
        const selected = this.dataset.lang;
        if (selected) {
          setLanguage(selected);
          localStorage.setItem('siteLang', selected);
          // close list
          langListEl.classList.remove('show');
        }
      });
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', function(e) {
      if (!langBtnEl.contains(e.target) && !langListEl.contains(e.target)) {
        langListEl.classList.remove('show');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        langListEl.classList.remove('show');
      }
    });
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});


