// =========================================================
// Google Analytics event tracking
// =========================================================
function trackAthenaEvent(eventName, params = {}) {
    if (typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
    }
}

// Smooth Scroll

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const id = this.getAttribute("href");
        const section = document.querySelector(id);

        if (section) {
            event.preventDefault();

            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Scroll Animation

const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function() {

    elements.forEach(function(element) {

        const position = element.getBoundingClientRect().top;

        if (position < window.innerHeight - 50) {
            element.classList.add("show");
        }

    });

});


// Show first elements

window.addEventListener("load", function() {

    elements.forEach(function(element) {

        const position = element.getBoundingClientRect().top;

        if (position < window.innerHeight) {
            element.classList.add("show");
        }

    });

});


// Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", function() {

    if (!header) return;

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// Language Toggle

const translations = {

    en: {
        navServices: "Services",
        navDoctors: "Doctors",
        navReviews: "Reviews",
        navContact: "Contact",
        bookAppointment: "Book Appointment",
        mobileBook: "Book",

        heroSmall: "ATHENA DENTAL CLINIC",
        heroTitle: "Complete Dental Care",
        heroTitle2: "with a Gentle Touch.",
        heroText: "Professional dental care for you and your family in the 9th District of El Shorouk City.",
        heroBook: "Book an Appointment",
        heroServices: "Our Services",

        servicesSmall: "WHAT WE OFFER",
        servicesTitle: "Our Dental Services",
        servicesText: "Comprehensive dental services for you and your family.",

        service1Title: "General Dentistry",
        service1Text: "Check-ups, fillings & preventive care",
        service2Title: "Cosmetic Dentistry",
        service2Text: "Veneers, smile design & teeth whitening",
        service3Title: "Restorative Dentistry",
        service3Text: "Crowns, bridges, inlays & onlays",
        service4Title: "Dental Implants",
        service4Text: "Single, multiple & implant-supported restorations",
        service5Title: "Endodontics",
        service5Text: "Root canal treatment & dental pain management",
        service6Title: "Periodontics",
        service6Text: "Scaling, polishing & gum disease treatment",
        service7Title: "Oral Surgery",
        service7Text: "Teeth extraction, wisdom teeth removal & surgical procedures",
        service8Title: "Orthodontics",
        service8Text: "Braces, clear aligners & retainers.",
        service9Title: "Pediatric Dentistry",
        service9Text: "Complete dental care for children",
        service10Title: "Emergency Dentistry",
        service10Text: "Urgent care for pain, trauma & dental emergencies.",
        service11Title: "Full-Mouth Rehabilitation",
        service11Text: "Comprehensive treatment for complex cases",
        service12Title: "Digital Dentistry",
        service12Text: "Modern digital diagnostics & treatment planning",

        whySmall: "Experience Athena",
        whyTitle: "Why choose Athena",
        whyText: "We care about your experience just as much as your smile",
        why1Title: "01 — Multidisciplinary Team",
        why1Text: "All major specialties working together.",
        why2Title: "02 — Comprehensive Care",
        why2Text: "From prevention to complex rehabilitation.",
        why3Title: "03 — Personalized Treatment",
        why3Text: "A plan built around you.",
        why4Title: "04 — Natural Results",
        why4Text: "Healthy, functional and naturally beautiful.",
        why5Title: "05 — Modern Dentistry",
        why5Text: "Technology used where it genuinely matters.",
        why6Title: "06 — Conveniently Located",
        why6Text: "Easy to reach. Easy to return to. One place for your dental care.",

        doctorsSmall: "MEET THE TEAM",
        doctorsTitle: "Our Doctors",
        doctorsText: "A professional team caring for your smile.",
        doctor1Name: "Dr. Ahmed Okl",
        doctor2Name: "Dr. Basant Rafeat",
        doctor3Name: "Dr. Nourhan Tarik",
        doctor4Name: "Dr. Mohamed Mansour",
        doctor5Name: "Dr. Noran Tarek",
        doctorRole: "Dental Doctor",

        reviewsSmall: "PATIENT STORIES",
        reviewsTitle: "What Our Patients Say",
        review1: "الدكتورة بسنت شاطرة جدًا وبتشتغل بايد خفيفة وبتراعي راحة المريض طول الوقت.",
        review2: "Been all over different clinics for numerous years and thanks to Dr. Ahmed Okl and the crew I don't fear working out my teeth anymore.",
        review3: "One of the most professional doctors, very clean and very decent.",
        review4: "Very professional service and a comfortable experience from the first visit.",
        googleText: "Want to hear more from our patients?",
        googleButton: "See More Google Reviews",

        faqSmall: "NEED TO KNOW",
        faqTitle: "Frequently Asked Questions",
        faq1Title: "Where are you located?",
        faq1Text: "9th District, El Shorouk City, next to Dover School.",
        faq2Title: "What services do you offer?",
        faq2Text: "Fillings, root canal, orthodontics, whitening, implants, and more.",

        contactSmall: "WE'D LOVE TO SEE YOU",
        contactTitle: "Visit Athena Dental Clinic",
        contactAddress: "9th District, El Shorouk City, Cairo, next to Dover School.",
        mapButton: "Open Location on Google Maps",
        contactUs: "Contact Us",
        whatsappButton: "Book Your Appointment on WhatsApp",
        footer: "© 2026 Athena Dental Clinic | Dental Clinic in El Shorouk City"
    },

    ar: {
        navServices: "الخدمات",
        navDoctors: "الأطباء",
        navReviews: "آراء المرضى",
        navContact: "تواصل معنا",
        bookAppointment: "حجز موعد",
        mobileBook: "حجز",

        heroSmall: "عيادة أثينا لطب الأسنان",
        heroTitle: "رعاية متكاملة لأسنانك",
        heroTitle2: "بلمسة لطيفة.",
        heroText: "رعاية أسنان احترافية لك ولعائلتك في الحي التاسع بمدينة الشروق.",
        heroBook: "احجز موعدًا",
        heroServices: "خدماتنا",

        servicesSmall: "ما نقدمه",
        servicesTitle: "خدمات طب الأسنان لدينا",
        servicesText: "خدمات متكاملة لطب الأسنان لك ولعائلتك.",

        service1Title: "طب الأسنان العام",
        service1Text: "الفحوصات، الحشوات والعناية الوقائية.",
        service2Title: "طب الأسنان التجميلي",
        service2Text: "الفينير، تصميم الابتسامة وتبييض الأسنان.",
        service3Title: "طب الأسنان الترميمي",
        service3Text: "التيجان، الجسور، الحشوات الداخلية والخارجية.",
        service4Title: "زراعة الأسنان",
        service4Text: "زراعة سن واحد أو عدة أسنان وتركيبات مدعومة بالزرعات.",
        service5Title: "علاج جذور الأسنان",
        service5Text: "علاج العصب والسيطرة على آلام الأسنان.",
        service6Title: "علاج اللثة",
        service6Text: "إزالة الجير والتلميع وعلاج أمراض اللثة.",
        service7Title: "جراحة الفم",
        service7Text: "خلع الأسنان، ضروس العقل والإجراءات الجراحية.",
        service8Title: "تقويم الأسنان",
        service8Text: "التقويم الثابت، التقويم الشفاف والمثبتات.",
        service9Title: "طب أسنان الأطفال",
        service9Text: "رعاية متكاملة لأسنان الأطفال.",
        service10Title: "طوارئ الأسنان",
        service10Text: "رعاية عاجلة للألم، الإصابات وحالات طوارئ الأسنان.",
        service11Title: "إعادة تأهيل الفم بالكامل",
        service11Text: "علاج شامل للحالات المعقدة.",
        service12Title: "طب الأسنان الرقمي",
        service12Text: "تشخيص رقمي حديث وتخطيط متطور للعلاج.",

        whySmall: "تجربة أثينا",
        whyTitle: "لماذا تختار أثينا؟",
        whyText: "نهتم بتجربتك بقدر اهتمامنا بابتسامتك.",
        why1Title: "01 — فريق متعدد التخصصات",
        why1Text: "جميع التخصصات الرئيسية تعمل معًا.",
        why2Title: "02 — رعاية شاملة",
        why2Text: "من الوقاية إلى إعادة التأهيل للحالات المعقدة.",
        why3Title: "03 — علاج مخصص",
        why3Text: "خطة علاج مصممة خصيصًا لك.",
        why4Title: "04 — نتائج طبيعية",
        why4Text: "نتائج صحية ووظيفية وجميلة بشكل طبيعي.",
        why5Title: "05 — طب أسنان حديث",
        why5Text: "نستخدم التكنولوجيا حيث تضيف قيمة حقيقية للعلاج.",
        why6Title: "06 — موقع مميز",
        why6Text: "سهولة الوصول والعودة، ومكان واحد لكل احتياجات أسنانك.",

        doctorsSmall: "فريقنا الطبي",
        doctorsTitle: "أطباؤنا",
        doctorsText: "فريق متخصص يهتم بصحة ابتسامتك.",
        doctor1Name: "دكتور احمد العكل",
        doctor2Name: "دكتورة بسنت رفعت",
        doctor3Name: "دكتورة نورهان طارق",
        doctor4Name: "دكتور محمد منصور",
        doctor5Name: "دكتورة نوران طارق",
        doctorRole: "طبيب أسنان",

        reviewsSmall: "آراء المرضى",
        reviewsTitle: "ماذا يقول مرضاؤنا؟",
        review1: "الدكتورة بسنت شاطرة جدًا وبتشتغل بايد خفيفة وبتراعي راحة المريض طول الوقت.",
        review2: "اتعاملت مع عيادات مختلفة لسنين، وبفضل دكتور أحمد العكل والفريق بقيت مش بخاف من علاج أسناني.",
        review3: "من أكثر الأطباء احترافية، والعيادة نظيفة جدًا والتعامل راقٍ.",
        review4: "خدمة احترافية جدًا وتجربة مريحة من أول زيارة.",
        googleText: "هل ترغب في معرفة المزيد من آراء مرضانا؟",
        googleButton: "شاهد المزيد من تقييمات Google",

        faqSmall: "معلومات تهمك",
        faqTitle: "الأسئلة الشائعة",
        faq1Title: "أين تقع العيادة؟",
        faq1Text: "الحي التاسع، مدينة الشروق، بجوار مدرسة دوفر.",
        faq2Title: "ما الخدمات التي تقدمونها؟",
        faq2Text: "الحشوات، علاج العصب، التقويم، التبييض، زراعة الأسنان، والمزيد.",

        contactSmall: "يسعدنا زيارتك",
        contactTitle: "زُر عيادة أثينا لطب الأسنان",
        contactAddress: "الحي التاسع، مدينة الشروق، القاهرة، بجوار مدرسة دوفر.",
        mapButton: "افتح الموقع على خرائط Google",
        contactUs: "تواصل معنا",
        whatsappButton: "احجز موعدك عبر WhatsApp",
        footer: "© 2026 عيادة أثينا لطب الأسنان | عيادة أسنان في مدينة الشروق"
    }

};


function changeLanguage(language) {

    const texts = document.querySelectorAll("[data-key]");

    texts.forEach(function(element) {

        const key = element.getAttribute("data-key");

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });

    document.documentElement.lang = language === "ar" ? "ar" : "en";

    if (language === "ar") {
        document.documentElement.classList.add("arabic");
        document.getElementById("languageText").textContent = "English";

        document.title = "عيادة أثينا لطب الأسنان | دكتور أسنان في مدينة الشروق";

        document.querySelector('meta[name="description"]').setAttribute(
            "content",
            "عيادة أثينا لطب الأسنان في الحي التاسع بمدينة الشروق، القاهرة. نقدم خدمات الحشوات وعلاج العصب والتقويم والتبييض والزراعة وغيرها."
        );

        document.querySelector('meta[property="og:title"]').setAttribute(
            "content",
            "عيادة أثينا لطب الأسنان | مدينة الشروق"
        );

        document.querySelector('meta[property="og:description"]').setAttribute(
            "content",
            "رعاية أسنان احترافية في الحي التاسع بمدينة الشروق، القاهرة."
        );

        document.querySelector('meta[property="og:locale"]').setAttribute(
            "content",
            "ar_EG"
        );

    } else {
        document.documentElement.classList.remove("arabic");
        document.getElementById("languageText").textContent = "العربية";

        document.title = "Athena Dental Clinic | Dentist in El Shorouk City";

        document.querySelector('meta[name="description"]').setAttribute(
            "content",
            "Athena Dental Clinic in the 9th District of El Shorouk City, Cairo. Dental care including fillings, root canal treatment, orthodontics, whitening, implants and more."
        );

        document.querySelector('meta[property="og:title"]').setAttribute(
            "content",
            "Athena Dental Clinic | Dentist in El Shorouk City"
        );

        document.querySelector('meta[property="og:description"]').setAttribute(
            "content",
            "Professional dental care in the 9th District of El Shorouk City, Cairo."
        );

        document.querySelector('meta[property="og:locale"]').setAttribute(
            "content",
            "en_EG"
        );
    }

    localStorage.setItem("athenaLanguage", language);
}


const languageBtn = document.getElementById("languageBtn");

if (languageBtn) {
    languageBtn.addEventListener("click", function() {

        const currentLanguage = document.documentElement.lang;

        if (currentLanguage === "en") {
            changeLanguage("ar");
        } else {
            changeLanguage("en");
        }

        // Keep the chatbot language in sync with the page.
        document.dispatchEvent(new CustomEvent("athenaLanguageChanged"));
    });
}


// Remember the user's language choice

const savedLanguage = localStorage.getItem("athenaLanguage");

if (savedLanguage === "ar") {
    changeLanguage("ar");
} else {
    changeLanguage("en");
}


// =========================================================
// Google Analytics — website interaction tracking
// =========================================================
document.addEventListener("click", function(event) {
    const link = event.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const isBooking = link.classList.contains("book-btn") ||
                      link.classList.contains("main-btn") ||
                      link.classList.contains("mobile-book-btn") ||
                      link.getAttribute("data-key") === "bookAppointment" ||
                      link.getAttribute("data-key") === "heroBook" ||
                      link.getAttribute("data-key") === "mobileBook";

    if (href.startsWith("https://wa.me/")) {
        trackAthenaEvent("whatsapp_click", {
            link_location: isBooking ? "booking" : "contact"
        });
    }

    if (href.startsWith("tel:")) {
        trackAthenaEvent("phone_click", {
            link_location: link.closest("#contact") ? "contact" : "other"
        });
    }

    if (href.includes("google.com/maps")) {
        trackAthenaEvent("maps_click", {
            link_location: link.classList.contains("location-icon") ? "contact_location" : "google_reviews"
        });
    }

    if (isBooking) {
        trackAthenaEvent("booking_click", {
            button_text: (link.textContent || "").trim()
        });
    }
});

/* =========================================================
   ATHENA SMART CHATBOT — ADD-ON ONLY
   No backend / API required — works on GitHub Pages.
   ========================================================= */
(function(){
    const toggle=document.getElementById("chatbotToggle");
    const panel=document.getElementById("chatbotPanel");
    const closeBtn=document.getElementById("chatbotClose");
    const clearBtn=document.getElementById("chatbotClear");
    const messages=document.getElementById("chatbotMessages");
    const input=document.getElementById("chatbotInput");
    const sendBtn=document.getElementById("chatbotSend");
    const quickActions=document.getElementById("chatbotQuickActions");
    if(!toggle||!panel||!messages)return;

    const whatsappUrl="https://wa.me/201020367122";
    const mapsUrl="https://www.google.com/maps/place/Athena+Dental+Clinic/@30.1696288,31.5968089,17z";
    const phoneUrl="tel:+201020367122";
    let activeLanguage=document.documentElement.lang==="ar"?"ar":"en";
    let openedOnce=false;

    const chatTranslations={
        en:{
            assistantName:"Athena Assistant",online:"Online",
            welcomeTitle:"How can we help?",
            welcomeText:"Ask me about our services, location, or booking an appointment.",
            quickTitle:"Quick options",services:"Our Services",booking:"Book Appointment",
            location:"Clinic Location",contact:"Contact Us",placeholder:"Type your question...",
            footer:"Athena Assistant • Clinic information only",
            hello:"Hi! 👋 Welcome to Athena Dental Clinic. I'm here to help you find information quickly.",
            serviceReply:"We offer a wide range of dental care including general dentistry, cosmetic dentistry, restorative dentistry, implants, root canal treatment, gum care, oral surgery, orthodontics, pediatric dentistry, emergency dentistry, full-mouth rehabilitation and digital dentistry.",
            bookingReply:"I'd be happy to help you book. You can contact Athena directly on WhatsApp and the clinic team can arrange your appointment.",
            locationReply:"Athena Dental Clinic is in the 9th District of El Shorouk City, Cairo, next to Dover School.",
            contactReply:"You can reach Athena by phone or WhatsApp. The clinic's social links are also available in the Contact section.",
            hoursReply:"For appointment availability and clinic hours, please contact the clinic directly on WhatsApp.",
            doctorsReply:"Athena has a multidisciplinary dental team. You can see the doctors listed in the Our Doctors section.",
            reviewsReply:"You can read patient stories on this page and see more reviews through the Google Reviews button.",
            unknown:"I can help with clinic information, services, doctors, reviews, location, contact, and appointments. Try one of the quick options below. ✨",
            bookingLink:"Open WhatsApp",mapLink:"Open Google Maps",phoneLink:"Call the clinic",
            userServices:"What services do you offer?",userBooking:"I want to book an appointment.",
            userLocation:"Where is the clinic?",userContact:"How can I contact you?",
            userHours:"What are your opening hours?",userDoctors:"Tell me about the doctors.",
            userReviews:"Where can I see reviews?"
        },
        ar:{
            assistantName:"مساعد أثينا",online:"متاح الآن",
            welcomeTitle:"إزاي نقدر نساعدك؟",
            welcomeText:"اسألني عن الخدمات أو المكان أو حجز الموعد.",
            quickTitle:"اختيارات سريعة",services:"خدماتنا",booking:"حجز موعد",
            location:"موقع العيادة",contact:"تواصل معنا",placeholder:"اكتب سؤالك...",
            footer:"مساعد أثينا • معلومات عن العيادة فقط",
            hello:"أهلًا بيك 👋 في عيادة أثينا لطب الأسنان. أنا هنا عشان أساعدك تعرف المعلومات اللي محتاجها بسرعة.",
            serviceReply:"بنقدم مجموعة كبيرة من خدمات الأسنان، منها طب الأسنان العام والتجميلي والترميمي، زراعة الأسنان، علاج العصب، علاج اللثة، جراحات الفم، التقويم، أسنان الأطفال، طوارئ الأسنان، إعادة تأهيل الفم بالكامل وطب الأسنان الرقمي.",
            bookingReply:"أكيد أقدر أساعدك في الوصول للحجز. تقدر تتواصل مباشرة مع عيادة أثينا على WhatsApp وفريق العيادة هيساعدك في تحديد الموعد.",
            locationReply:"عيادة أثينا موجودة في الحي التاسع بمدينة الشروق، القاهرة، بجوار مدرسة دوفر.",
            contactReply:"تقدر تتواصل مع عيادة أثينا عن طريق الهاتف أو WhatsApp، وكمان هتلاقي روابط السوشيال ميديا في قسم تواصل معنا.",
            hoursReply:"لمعرفة مواعيد العمل والأوقات المتاحة للحجز، الأفضل تتواصل مباشرة مع العيادة على WhatsApp.",
            doctorsReply:"في أثينا فريق طبي متعدد التخصصات. تقدر تشوف أسماء الأطباء في قسم أطباؤنا.",
            reviewsReply:"تقدر تقرأ آراء المرضى الموجودة في الصفحة، وكمان تشوف المزيد من التقييمات من خلال زر Google Reviews.",
            unknown:"أقدر أساعدك في معلومات العيادة والخدمات والأطباء والتقييمات والموقع والتواصل والحجز. جرب واحدة من الاختيارات السريعة تحت. ✨",
            bookingLink:"فتح WhatsApp",mapLink:"فتح خرائط Google",phoneLink:"الاتصال بالعيادة",
            userServices:"إيه الخدمات اللي بتقدموها؟",userBooking:"عايزة أحجز موعد.",
            userLocation:"فين مكان العيادة؟",userContact:"إزاي أتواصل معاكم؟",
            userHours:"مواعيد العمل إيه؟",userDoctors:"قولي عن الأطباء.",
            userReviews:"فين أقدر أشوف التقييمات؟"
        }
    };

    function t(key){return (chatTranslations[activeLanguage]||chatTranslations.en)[key]||key}
    function syncChatLanguage(){
        activeLanguage=document.documentElement.lang==="ar"?"ar":"en";
        document.querySelectorAll("[data-chat]").forEach(el=>{
            const key=el.getAttribute("data-chat");
            if(t(key))el.textContent=t(key);
        });
        if(input)input.placeholder=t("placeholder");
    }
    function currentTime(){
        return new Date().toLocaleTimeString(activeLanguage==="ar"?"ar-EG":"en-EG",{hour:"2-digit",minute:"2-digit"});
    }
    function scrollMessages(){messages.scrollTop=messages.scrollHeight}
    function addMessage(text,type,allowHtml){
        const row=document.createElement("div");
        row.className="chatbot-message "+type;
        const bubble=document.createElement("div");
        bubble.className="chatbot-bubble";
        if(allowHtml)bubble.innerHTML=text;else bubble.textContent=text;
        const time=document.createElement("span");
        time.className="chatbot-time";time.textContent=currentTime();
        bubble.appendChild(time);row.appendChild(bubble);messages.appendChild(row);scrollMessages();
    }
    function showTyping(callback){
        const row=document.createElement("div");
        row.className="chatbot-message bot";row.id="athenaTyping";
        row.innerHTML='<div class="chatbot-typing" aria-label="Typing"><span></span><span></span><span></span></div>';
        messages.appendChild(row);scrollMessages();
        setTimeout(()=>{
            const typing=document.getElementById("athenaTyping");
            if(typing)typing.remove();
            callback();
        },550);
    }
    function addBotReply(text,html){showTyping(()=>addMessage(text,"bot",!!html))}
    function scrollToSection(id){
        const section=document.getElementById(id);
        if(section)section.scrollIntoView({behavior:"smooth"});
    }

    function handleAction(action){
        trackAthenaEvent("chatbot_action", { action: action });
        const replies={
            services:{user:t("userServices"),reply:t("serviceReply"),section:"services"},
            booking:{user:t("userBooking"),reply:t("bookingReply"),link:`<a href="${whatsappUrl}" target="_blank" rel="noopener">${t("bookingLink")} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`},
            location:{user:t("userLocation"),reply:t("locationReply"),link:`<a href="${mapsUrl}" target="_blank" rel="noopener">${t("mapLink")} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`,section:"contact"},
            contact:{user:t("userContact"),reply:t("contactReply"),link:`<a href="${phoneUrl}">${t("phoneLink")} <i class="fa-solid fa-phone"></i></a>`,section:"contact"}
        };
        const item=replies[action];if(!item)return;
        addMessage(item.user,"user",false);
        addBotReply(item.reply+(item.link?"<br><br>"+item.link:""),true);
        if(item.section)setTimeout(()=>scrollToSection(item.section),800);
    }

    function classifyMessage(message){
        const m=message.toLowerCase();
        if(m.includes("service")||m.includes("services")||m.includes("خدمات")||m.includes("بتقدم")||m.includes("بتقدمو"))return"services";
        if(m.includes("book")||m.includes("appointment")||m.includes("booking")||m.includes("حجز")||m.includes("احجز")||m.includes("موعد"))return"booking";
        if(m.includes("location")||m.includes("where")||m.includes("address")||m.includes("فين")||m.includes("مكان")||m.includes("عنوان")||m.includes("الشروق"))return"location";
        if(m.includes("contact")||m.includes("phone")||m.includes("whatsapp")||m.includes("تواصل")||m.includes("رقم")||m.includes("واتساب"))return"contact";
        if(m.includes("hour")||m.includes("open")||m.includes("opening")||m.includes("مواعيد")||m.includes("مفتوح")||m.includes("العمل"))return"hours";
        if(m.includes("doctor")||m.includes("doctors")||m.includes("دكتور")||m.includes("أطباء")||m.includes("اطباء"))return"doctors";
        if(m.includes("review")||m.includes("reviews")||m.includes("rating")||m.includes("تقييم")||m.includes("آراء")||m.includes("اراء"))return"reviews";
        if(m==="hi"||m==="hello"||m==="hey"||m.includes("welcome")||m.includes("اهلا")||m.includes("أهلا")||m.includes("هاي")||m.includes("سلام")||m.includes("صباح")||m.includes("مساء"))return"hello";
        return"unknown";
    }

    function handleText(){
        const raw=input.value.trim();if(!raw)return;
        addMessage(raw,"user",false);input.value="";
        const type=classifyMessage(raw);
        const responses={
            hello:t("hello"),
            services:t("serviceReply"),
            booking:t("bookingReply")+`<br><br><a href="${whatsappUrl}" target="_blank" rel="noopener">${t("bookingLink")} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`,
            location:t("locationReply")+`<br><br><a href="${mapsUrl}" target="_blank" rel="noopener">${t("mapLink")} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`,
            contact:t("contactReply")+`<br><br><a href="${phoneUrl}">${t("phoneLink")} <i class="fa-solid fa-phone"></i></a>`,
            hours:t("hoursReply"),doctors:t("doctorsReply"),reviews:t("reviewsReply"),unknown:t("unknown")
        };
        addBotReply(responses[type]||responses.unknown,true);
        if(type==="services")setTimeout(()=>scrollToSection("services"),800);
        else if(type==="doctors")setTimeout(()=>scrollToSection("doctors"),800);
        else if(type==="reviews")setTimeout(()=>scrollToSection("reviews"),800);
        else if(type==="location"||type==="contact")setTimeout(()=>scrollToSection("contact"),800);
    }

    function openChat(){
        trackAthenaEvent("chatbot_open");
        panel.classList.add("open");panel.setAttribute("aria-hidden","false");toggle.classList.add("open");
        if(!openedOnce){openedOnce=true;setTimeout(()=>addBotReply(t("hello"),false),200)}
        setTimeout(()=>{if(input)input.focus()},320);
    }
    function closeChat(){panel.classList.remove("open");panel.setAttribute("aria-hidden","true");toggle.classList.remove("open")}
    function clearChat(){messages.innerHTML="";setTimeout(()=>addBotReply(t("hello"),false),120)}

    toggle.addEventListener("click",()=>panel.classList.contains("open")?closeChat():openChat());
    closeBtn.addEventListener("click",closeChat);
    clearBtn.addEventListener("click",clearChat);
    sendBtn.addEventListener("click",handleText);
    input.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();handleText()}});
    quickActions.addEventListener("click",e=>{
        const button=e.target.closest("button[data-action]");
        if(button)handleAction(button.getAttribute("data-action"));
    });

    // Hook into the existing bilingual switch without replacing its behavior.
    const originalChangeLanguage=window.changeLanguage;
    if(typeof originalChangeLanguage==="function"){
        window.changeLanguage=function(language){
            originalChangeLanguage(language);
            syncChatLanguage();
        };
    }

    document.addEventListener("athenaLanguageChanged", syncChatLanguage);
    syncChatLanguage();
})();
