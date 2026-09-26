/**
 * القمة للمقاولات والديكور - ملف الجافاسكريبت الأساسي
 * Pure Vanilla JavaScript (مستقل بالكامل بدون أي مكتبات خارجية)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Scroll Effect & Mobile Menu
  const header = document.querySelector('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('bg-stone-950/95', 'shadow-2xl', 'py-3.5');
      header.classList.remove('bg-stone-950/60', 'py-5');
    } else {
      header.classList.remove('bg-stone-950/95', 'shadow-2xl', 'py-3.5');
      header.classList.add('bg-stone-950/60', 'py-5');
    }
  });

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Services Interactive Tab Switching
  const serviceTabs = document.querySelectorAll('.service-tab-btn');
  const serviceDetails = {
    '01': {
      number: '01',
      title: 'التصميم الداخلي والمعماري 3D',
      summary: 'نحول أفكاركم إلى مخططات واقعية مبهرة مع دراسات هندسية فراغية دقيقة ومطابقة للكود السعودي.',
      details: [
        'مخططات معمارية وتنفيذية تفصيلية (Shop Drawings)',
        'تصاميم ثلاثية الأبعاد بجودة 8K عالية الواقعية والوضوح',
        'دراسة وتوزيع الإضاءة المعمارية وهندسة الفراغات',
        'جداول حصر الكميات والمواصفات الفنية والمواد (BOQ)'
      ]
    },
    '02': {
      number: '02',
      title: 'أعمال التشطيبات الفاخرة (تسليم مفتاح)',
      summary: 'إدارة وتنفيذ مشاريع التشطيب السكني والتجاري بأعلى المواصفات الأوروبية وضمان شامل على كافة الأعمال.',
      details: [
        'تشطيبات ديلوكس، سوبر لوكس، وألترا VIP',
        'أعمال الرخام الطبيعي المستورد، الجرانيت، والبورسلان الكبير',
        'أحدث الدهانات الديكورية العصرية وتقنيات المايكروسمنت',
        'أعمال الأسقف الجبسية الحديثة ومسارات الإضاءة الذكية'
      ]
    },
    '03': {
      number: '03',
      title: 'المقاولات العامة والإنشاءات',
      summary: 'بناء الهياكل الإنشائية (عظم) للفلل والقصور والمنشآت التجارية تحت إشراف هندسي يومي صارم.',
      details: [
        'تنفيذ الهياكل الخرسانية المسلحة واختبارات الجودة للمواد',
        'أعمال العوازل المائية والحرارية المعتمدة بأحدث المواد',
        'تنفيذ المسابح والأسوار والملاحق الخارجية والقبب',
        'إدارة وتنسيق كافة مراحل البناء حتى مرحلة العظم بالمواد'
      ]
    },
    '04': {
      number: '04',
      title: 'الديكورات والتكسيات الجدارية الحديثة',
      summary: 'إضفاء لمسات فخامة وتفرد على الجدران والأسقف باستخدام أحدث المواد المعمارية العالمية.',
      details: [
        'تكسيات الخشب الطبيعي والصناعي وبديل الخشب (WPC)',
        'ألواح بديل الرخام (PVC Marble Sheets) والستانلس التيتانيوم',
        'أعمال الفوم والجبس بورد المعلق والبانوهات الفرنسية الكلاسيكية',
        'قواطع وأبواب الزجاج الاستركشر والبروفايل الألمنيوم الفاخر'
      ]
    },
    '05': {
      number: '05',
      title: 'الواجهات الخارجية وتنسيق اللاندسكيب',
      summary: 'إبراز جمال المبنى الخارجي بواجهات معمارية استثنائية وحدائق غناء تحاكي الطبيعة والهدوء.',
      details: [
        'تركيب واجهات الحجر الطبيعي الميكانيكي والرخام والترافرتين',
        'تصميم وتنفيذ الحدائق المنزلية وشبكات الري الأوتوماتيكية',
        'الشلالات الجدارية، النوافير، والمسطحات المائية المتدفقة',
        'الجلسات الخارجية المظلمة (برجولات) والممرات الحجرية'
      ]
    },
    '06': {
      number: '06',
      title: 'الترميم وإعادة التأهيل الشامل للمباني',
      summary: 'تجديد المباني والفلل القديمة وتحويلها إلى واحات عصرية فاخرة تواكب أحدث صيحات الهندسة.',
      details: [
        'معالجة وتدعيم الشروخ والهياكل الخرسانية وفق الأصول الهندسية',
        'إعادة التوزيع الداخلي للمساحات وفتح الصالات الواسعة',
        'تحديث شبكات السباكة والصرف الصحي والتمديدات الكهربائية بالكامل',
        'تحديث شامل للواجهات والديكورات الداخلية بأعلى عائد استثماري'
      ]
    }
  };

  const serviceNumberEl = document.getElementById('activeServiceNumber');
  const serviceTitleEl = document.getElementById('activeServiceTitle');
  const serviceSummaryEl = document.getElementById('activeServiceSummary');
  const serviceDetailsList = document.getElementById('activeServiceDetails');

  serviceTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      serviceTabs.forEach((t) => {
        t.classList.remove('bg-stone-800/90', 'border-amber-500/60');
        t.classList.add('bg-stone-950/60', 'border-stone-800');
      });
      tab.classList.add('bg-stone-800/90', 'border-amber-500/60');
      tab.classList.remove('bg-stone-950/60', 'border-stone-800');

      const sId = tab.dataset.service;
      const data = serviceDetails[sId];
      if (data && serviceNumberEl && serviceTitleEl && serviceSummaryEl && serviceDetailsList) {
        serviceNumberEl.textContent = data.number;
        serviceTitleEl.textContent = data.title;
        serviceSummaryEl.textContent = data.summary;
        serviceDetailsList.innerHTML = data.details
          .map(
            (d) => `
          <li class="flex items-start gap-3 text-stone-200 text-sm sm:text-base">
            <span class="mt-1 w-5 h-5 rounded-full bg-amber-400/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">✓</span>
            <span>${d}</span>
          </li>
        `
          )
          .join('');
      }
    });
  });

  // 3. Portfolio Category Filtering
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('bg-amber-400', 'text-stone-950');
        b.classList.add('text-stone-300');
      });
      btn.classList.add('bg-amber-400', 'text-stone-950');
      btn.classList.remove('text-stone-300');

      const cat = btn.dataset.category;
      projectCards.forEach((card) => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Interactive Before & After Slider
  const baContainer = document.getElementById('baContainer');
  const baBeforeLayer = document.getElementById('baBeforeLayer');
  const baHandle = document.getElementById('baHandle');
  let isDragging = false;

  const updateSlider = (clientX) => {
    if (!baContainer || !baBeforeLayer || !baHandle) return;
    const rect = baContainer.getBoundingClientRect();
    let x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;

    baBeforeLayer.style.width = `${percentage}%`;
    baHandle.style.left = `${percentage}%`;
  };

  if (baContainer) {
    baContainer.addEventListener('mousedown', () => { isDragging = true; });
    window.addEventListener('mouseup', () => { isDragging = false; });
    baContainer.addEventListener('mousemove', (e) => {
      if (isDragging) updateSlider(e.clientX);
    });

    baContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches[0]) updateSlider(e.touches[0].clientX);
    });
    window.addEventListener('touchend', () => { isDragging = false; });
    baContainer.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches[0]) updateSlider(e.touches[0].clientX);
    });
  }

  // 5. Smart Cost Calculator
  const calcArea = document.getElementById('calcArea');
  const calcAreaValue = document.getElementById('calcAreaValue');
  const totalCostEl = document.getElementById('calcTotalCost');
  const ratePerM2El = document.getElementById('calcRatePerM2');
  const durationEl = document.getElementById('calcDuration');
  const warrantyEl = document.getElementById('calcWarranty');
  const btnWhatsAppQuote = document.getElementById('btnWhatsAppQuote');

  const gradeRates = {
    standard: { base: 950, label: 'باقة لوكس الفاخرة', warranty: '5 سنوات ضمان' },
    super: { base: 1650, label: 'باقة سوبر ديلوكس VIP', warranty: '10 سنوات ضمان' },
    royal: { base: 2800, label: 'باقة ألترا لاكشري الملكية', warranty: '15 سنة ضمان شامل' }
  };

  const propertyMultipliers = {
    villa: { rate: 1.0, name: 'فيلا سكنية مستقلة', baseMonths: 6 },
    apartment: { rate: 0.9, name: 'شقة فاخرة / دوبلكس', baseMonths: 3.5 },
    office: { rate: 1.1, name: 'مكتب إداري', baseMonths: 4 },
    commercial: { rate: 1.25, name: 'معرض تجاري / عيادة', baseMonths: 5 }
  };

  let selectedProperty = 'villa';
  let selectedGrade = 'super';

  const updateCalculator = () => {
    if (!calcArea) return;
    const area = parseInt(calcArea.value, 10);
    if (calcAreaValue) calcAreaValue.textContent = `${area} م²`;

    const prop = propertyMultipliers[selectedProperty] || propertyMultipliers.villa;
    const grd = gradeRates[selectedGrade] || gradeRates.super;

    let addon = 0;
    if (document.getElementById('addon3D')?.checked) addon += 60;
    if (document.getElementById('addonSmart')?.checked) addon += 120;
    if (document.getElementById('addonCladding')?.checked) addon += 180;
    if (document.getElementById('addonLandscape')?.checked) addon += 150;

    const ratePerM2 = Math.round((grd.base + addon) * prop.rate);
    const total = Math.round(ratePerM2 * area);
    const months = Math.max(2.5, Math.round(prop.baseMonths + (area / 350) * 1.5));

    if (totalCostEl) totalCostEl.textContent = total.toLocaleString('ar-SA');
    if (ratePerM2El) ratePerM2El.textContent = `${ratePerM2.toLocaleString('ar-SA')} ر.س / م²`;
    if (durationEl) durationEl.textContent = `حوالي ${months} أشهر عمل`;
    if (warrantyEl) warrantyEl.textContent = grd.warranty;

    if (btnWhatsAppQuote) {
      const text = encodeURIComponent(
        `السلام عليكم ورحمة الله، قمت بحساب تقدير تكلفة عبر موقع القمة للمقاولات والديكور:\n` +
        `- نوع العقار: ${prop.name}\n` +
        `- المساحة: ${area} م²\n` +
        `- باقة التشطيب: ${grd.label}\n` +
        `- التكلفة التقديرية: حوالي ${total.toLocaleString('ar-SA')} ريال سعودي\n` +
        `أرغب في حجز موعد لمعاينة الموقع واستلام مقايسة هندسية رسمية.`
      );
      btnWhatsAppQuote.href = `https://wa.me/966500000000?text=${text}`;
    }
  };

  if (calcArea) {
    calcArea.addEventListener('input', updateCalculator);

    document.querySelectorAll('.prop-type-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.prop-type-btn').forEach((b) => {
          b.classList.remove('bg-amber-400', 'text-stone-950', 'border-amber-400');
          b.classList.add('bg-stone-950/70', 'border-stone-800', 'text-stone-300');
        });
        btn.classList.add('bg-amber-400', 'text-stone-950', 'border-amber-400');
        btn.classList.remove('bg-stone-950/70', 'border-stone-800', 'text-stone-300');
        selectedProperty = btn.dataset.prop;
        updateCalculator();
      });
    });

    document.querySelectorAll('.preset-area-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        calcArea.value = btn.dataset.area;
        updateCalculator();
      });
    });

    document.querySelectorAll('.grade-select-card').forEach((card) => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.grade-select-card').forEach((c) => {
          c.classList.remove('bg-amber-400/10', 'border-amber-500/80');
          c.classList.add('bg-stone-950/60', 'border-stone-800');
        });
        card.classList.add('bg-amber-400/10', 'border-amber-500/80');
        card.classList.remove('bg-stone-950/60', 'border-stone-800');
        selectedGrade = card.dataset.grade;
        updateCalculator();
      });
    });

    ['addon3D', 'addonSmart', 'addonCladding', 'addonLandscape'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('change', updateCalculator);
    });

    updateCalculator();
  }

  // 6. Consultation Modal Handlers
  const consultationModal = document.getElementById('consultationModal');
  const openConsultationBtns = document.querySelectorAll('.open-consultation-btn');
  const closeConsultationBtn = document.getElementById('closeConsultationBtn');
  const consultationForm = document.getElementById('consultationForm');
  const consultationSuccess = document.getElementById('consultationSuccess');

  const openModal = (presetService = '') => {
    if (consultationModal) {
      consultationModal.classList.add('active');
      if (presetService) {
        const serviceSelect = document.getElementById('modalService');
        if (serviceSelect) serviceSelect.value = presetService;
      }
    }
  };

  const closeModal = () => {
    if (consultationModal) consultationModal.classList.remove('active');
  };

  openConsultationBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      openModal(btn.dataset.service || '');
    });
  });

  if (closeConsultationBtn) closeConsultationBtn.addEventListener('click', closeModal);
  if (consultationModal) {
    consultationModal.addEventListener('click', (e) => {
      if (e.target === consultationModal) closeModal();
    });
  }

  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = 'QIMMA-' + Math.floor(1000 + Math.random() * 9000);
      document.getElementById('modalTicketCode').textContent = code;
      consultationForm.classList.add('hidden');
      consultationSuccess.classList.remove('hidden');
    });
  }

  // 7. Contact Section Form Submit
  const contactForm = document.getElementById('mainContactForm');
  const contactSuccess = document.getElementById('mainContactSuccess');

  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = 'QIMMA-' + Math.floor(1000 + Math.random() * 9000);
      document.getElementById('mainTicketCode').textContent = code;
      contactForm.classList.add('hidden');
      contactSuccess.classList.remove('hidden');
    });
  }

  // 8. Back to top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
