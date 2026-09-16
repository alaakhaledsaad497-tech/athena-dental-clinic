// =========================================================
// ATHENA DENTAL CLINIC — MAIN JAVASCRIPT
// =========================================================

"use strict";


// =========================================================
// Google Analytics
// =========================================================

function trackAthenaEvent(eventName, params = {}) {
    try {
        if (typeof window.gtag === "function") {
            window.gtag("event", eventName, params);
        }
    } catch (error) {
        // Analytics must never break the website.
    }
}


// =========================================================
// Smooth Scroll
// =========================================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const id = this.getAttribute("href");

        if (!id || id === "#") return;

        const section =
            document.getElementById(
                id.substring(1)
            );

        if (section) {

            event.preventDefault();

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================================================
// Scroll Reveal Animation
// =========================================================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(function (element) {

        const position =
            element.getBoundingClientRect().top;

        if (position < window.innerHeight - 50) {

            element.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll,
    {
        passive: true
    }
);


window.addEventListener(
    "load",
    revealOnScroll
);


// =========================================================
// Navbar Scroll Effect
// =========================================================

const header =
    document.querySelector("header");


function handleNavbar() {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    handleNavbar,
    {
        passive: true
    }
);


handleNavbar();


// =========================================================
// BILINGUAL WEBSITE
// =========================================================

const translations = {

    en: {

        navServices:
            "Services",

        navDoctors:
            "Doctors",

        navReviews:
            "Reviews",

        navContact:
            "Contact",

        bookAppointment:
            "Book Appointment",

        mobileBook:
            "Book",

        heroSmall:
            "ATHENA DENTAL CLINIC",

        heroTitle:
            "Complete Dental Care",

        heroTitle2:
            "with a Gentle Touch.",

        heroText:
            "Professional dental care for you and your family in the 9th District of El Shorouk City.",

        heroBook:
            "Book an Appointment",

        heroServices:
            "Our Services",


        servicesSmall:
            "WHAT WE OFFER",

        servicesTitle:
            "Our Dental Services",

        servicesText:
            "Comprehensive dental services for you and your family.",


        service1Title:
            "General Dentistry",

        service1Text:
            "Check-ups, fillings & preventive care",

        service2Title:
            "Cosmetic Dentistry",

        service2Text:
            "Veneers, smile design & teeth whitening",

        service3Title:
            "Restorative Dentistry",

        service3Text:
            "Crowns, bridges, inlays & onlays",

        service4Title:
            "Dental Implants",

        service4Text:
            "Single, multiple & implant-supported restorations",

        service5Title:
            "Endodontics",

        service5Text:
            "Root canal treatment & dental pain management",

        service6Title:
            "Periodontics",

        service6Text:
            "Scaling, polishing & gum disease treatment",

        service7Title:
            "Oral Surgery",

        service7Text:
            "Teeth extraction, wisdom teeth removal & surgical procedures",

        service8Title:
            "Orthodontics",

        service8Text:
            "Braces, clear aligners & retainers.",

        service9Title:
            "Pediatric Dentistry",

        service9Text:
            "Complete dental care for children",

        service10Title:
            "Emergency Dentistry",

        service10Text:
            "Urgent care for pain, trauma & dental emergencies.",

        service11Title:
            "Full-Mouth Rehabilitation",

        service11Text:
            "Comprehensive treatment for complex cases",

        service12Title:
            "Digital Dentistry",

        service12Text:
            "Modern digital diagnostics & treatment planning",


        whySmall:
            "Experience Athena",

        whyTitle:
            "Why choose Athena",

        whyText:
            "We care about your experience just as much as your smile",

        why1Title:
            "01 — Multidisciplinary Team",

        why1Text:
            "All major specialties working together.",

        why2Title:
            "02 — Comprehensive Care",

        why2Text:
            "From prevention to complex rehabilitation.",

        why3Title:
            "03 — Personalized Treatment",

        why3Text:
            "A plan built around you.",

        why4Title:
            "04 — Natural Results",

        why4Text:
            "Healthy, functional and naturally beautiful.",

        why5Title:
            "05 — Modern Dentistry",

        why5Text:
            "Technology used where it genuinely matters.",

        why6Title:
            "06 — Conveniently Located",

        why6Text:
            "Easy to reach. Easy to return to. One place for your dental care.",


        doctorsSmall:
            "MEET THE TEAM",

        doctorsTitle:
            "Our Doctors",

        doctorsText:
            "A professional team caring for your smile.",

        doctor1Name:
            "Dr. Ahmed Okl",

        doctor2Name:
            "Dr. passant Refaat",

        doctor3Name:
            "Dr. Nourhan Tarik",

        doctor4Name:
            "Dr. Mohamed Mansour",

        doctor5Name:
            "Dr. Noran Tarek",


        doctor1Role:
            "Prosthodontics",

        doctor2Role:
            "General Dentistry",

        doctor3Role:
            "Endodontics",

        doctor4Role:
            "Oral & Maxillofacial Surgery",

        doctor5Role:
            "Orthodontics",


        reviewsSmall:
            "PATIENT STORIES",

        reviewsTitle:
            "What Our Patients Say",

        review1:
            "الدكتورة بسنت شاطرة جدًا وبتشتغل بايد خفيفة وبتراعي راحة المريض طول الوقت.",

        review2:
            "Been all over different clinics for numerous years and thanks to Dr. Ahmed Okl and the crew I don't fear working out my teeth anymore.",

        review4:
            "Very professional service and a comfortable experience from the first visit.",


        googleText:
            "Want to hear more from our patients?",

        googleButton:
            "See More Google Reviews",


        faqSmall:
            "NEED TO KNOW",

        faqTitle:
            "Frequently Asked Questions",

        faq1Title:
            "Where are you located?",

        faq1Text:
            "9th District, El Shorouk City, next to Dover School.",

        faq2Title:
            "What services do you offer?",

        faq2Text:
            "Fillings, root canal, orthodontics, whitening, implants, and more.",


        contactSmall:
            "WE'D LOVE TO SEE YOU",

        contactTitle:
            "Visit Athena Dental Clinic",

        contactAddress:
            "9th District, El Shorouk City, Cairo, next to Dover School.",

        contactUs:
            "Contact Us",

        footer:
            "© 2026 Athena Dental Clinic | Dental Clinic in El Shorouk City"

    },


    // =====================================================
    // ARABIC
    // =====================================================

    ar: {

        navServices:
            "الخدمات",

        navDoctors:
            "الأطباء",

        navReviews:
            "آراء المرضى",

        navContact:
            "تواصل معنا",

        bookAppointment:
            "حجز موعد",

        mobileBook:
            "حجز",

        heroSmall:
            "عيادة أثينا لطب الأسنان",

        heroTitle:
            "رعاية متكاملة لأسنانك",

        heroTitle2:
            "بلمسة لطيفة.",

        heroText:
            "رعاية أسنان احترافية لك ولعائلتك في الحي التاسع بمدينة الشروق.",

        heroBook:
            "احجز موعدًا",

        heroServices:
            "خدماتنا",


        servicesSmall:
            "ما نقدمه",

        servicesTitle:
            "خدمات طب الأسنان لدينا",

        servicesText:
            "خدمات متكاملة لطب الأسنان لك ولعائلتك.",


        service1Title:
            "طب الأسنان العام",

        service1Text:
            "الفحوصات، الحشوات والعناية الوقائية.",

        service2Title:
            "طب الأسنان التجميلي",

        service2Text:
            "الفينير، تصميم الابتسامة وتبييض الأسنان.",

        service3Title:
            "طب الأسنان الترميمي",

        service3Text:
            "التيجان، الجسور، الحشوات الداخلية والخارجية.",

        service4Title:
            "زراعة الأسنان",

        service4Text:
            "زراعة سن واحد أو عدة أسنان وتركيبات مدعومة بالزرعات.",

        service5Title:
            "علاج جذور الأسنان",

        service5Text:
            "علاج العصب والسيطرة على آلام الأسنان.",

        service6Title:
            "علاج اللثة",

        service6Text:
            "إزالة الجير والتلميع وعلاج أمراض اللثة.",

        service7Title:
            "جراحة الفم",

        service7Text:
            "خلع الأسنان، ضروس العقل والإجراءات الجراحية.",

        service8Title:
            "تقويم الأسنان",

        service8Text:
            "التقويم الثابت، التقويم الشفاف والمثبتات.",

        service9Title:
            "طب أسنان الأطفال",

        service9Text:
            "رعاية متكاملة لأسنان الأطفال.",

        service10Title:
            "طوارئ الأسنان",

        service10Text:
            "رعاية عاجلة للألم، الإصابات وحالات طوارئ الأسنان.",

        service11Title:
            "إعادة تأهيل الفم بالكامل",

        service11Text:
            "علاج شامل للحالات المعقدة.",

        service12Title:
            "طب الأسنان الرقمي",

        service12Text:
            "تشخيص رقمي حديث وتخطيط متطور للعلاج.",


        whySmall:
            "تجربة أثينا",

        whyTitle:
            "لماذا تختار أثينا؟",

        whyText:
            "نهتم بتجربتك بقدر اهتمامنا بابتسامتك.",

        why1Title:
            "01 — فريق متعدد التخصصات",

        why1Text:
            "جميع التخصصات الرئيسية تعمل معًا.",

        why2Title:
            "02 — رعاية شاملة",

        why2Text:
            "من الوقاية إلى إعادة التأهيل للحالات المعقدة.",

        why3Title:
            "03 — علاج مخصص",

        why3Text:
            "خطة علاج مصممة خصيصًا لك.",

        why4Title:
            "04 — نتائج طبيعية",

        why4Text:
            "نتائج صحية ووظيفية وجميلة بشكل طبيعي.",

        why5Title:
            "05 — طب أسنان حديث",

        why5Text:
            "نستخدم التكنولوجيا حيث تضيف قيمة حقيقية للعلاج.",

        why6Title:
            "06 — موقع مميز",

        why6Text:
            "سهولة الوصول والعودة، ومكان واحد لكل احتياجات أسنانك.",


        doctorsSmall:
            "فريقنا الطبي",

        doctorsTitle:
            "أطباؤنا",

        doctorsText:
            "فريق متخصص يهتم بصحة ابتسامتك.",

        doctor1Name:
            "دكتور احمد العكل",

        doctor2Name:
            "دكتورة بسنت رفعت",

        doctor3Name:
            "دكتورة نورهان طارق",

        doctor4Name:
            "دكتور محمد منصور",

        doctor5Name:
            "دكتورة نوران طارق",


        doctor1Role:
            "تركيبات الأسنان",

        doctor2Role:
            "طب الأسنان العام",

        doctor3Role:
            "علاج جذور الأسنان وحشو العصب",

        doctor4Role:
            "جراحة الفم والوجه والفكين",

        doctor5Role:
            "تقويم الأسنان",


        reviewsSmall:
            "آراء المرضى",

        reviewsTitle:
            "ماذا يقول مرضاؤنا؟",

        review1:
            "الدكتورة بسنت شاطرة جدًا وبتشتغل بايد خفيفة وبتراعي راحة المريض طول الوقت.",

        review2:
            "اتعاملت مع عيادات مختلفة لسنين، وبفضل دكتور أحمد العكل والفريق بقيت مش بخاف من علاج أسناني.",

        review4:
            "خدمة احترافية جدًا وتجربة مريحة من أول زيارة.",


        googleText:
            "هل ترغب في معرفة المزيد من آراء مرضانا؟",

        googleButton:
            "شاهد المزيد من تقييمات Google",


        faqSmall:
            "معلومات تهمك",

        faqTitle:
            "الأسئلة الشائعة",

        faq1Title:
            "أين تقع العيادة؟",

        faq1Text:
            "الحي التاسع، مدينة الشروق، بجوار مدرسة دوفر.",

        faq2Title:
            "ما الخدمات التي تقدمونها؟",

        faq2Text:
            "الحشوات، علاج العصب، التقويم، التبييض، زراعة الأسنان، والمزيد.",


        contactSmall:
            "يسعدنا زيارتك",

        contactTitle:
            "زُر عيادة أثينا لطب الأسنان",

        contactAddress:
            "الحي التاسع، مدينة الشروق، القاهرة، بجوار مدرسة دوفر.",

        contactUs:
            "تواصل معنا",

        footer:
            "© 2026 عيادة أثينا لطب الأسنان | عيادة أسنان في مدينة الشروق"

    }

};
// =========================================================
// LANGUAGE CHANGE
// =========================================================

function changeLanguage(language) {

    if (
        language !== "en" &&
        language !== "ar"
    ) {
        return;
    }


    const elements =
        document.querySelectorAll("[data-key]");


    elements.forEach(function (element) {

        const key =
            element.getAttribute("data-key");

        if (!key) return;


        if (
            Object.prototype.hasOwnProperty.call(
                translations[language],
                key
            )
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    document.documentElement.lang =
        language;


    if (language === "ar") {

        document.documentElement.classList.add(
            "arabic"
        );


        const languageText =
            document.getElementById(
                "languageText"
            );


        if (languageText) {

            languageText.textContent =
                "English";

        }


        document.title =
            "عيادة أثينا لطب الأسنان | دكتور أسنان في مدينة الشروق";


        const description =
            document.querySelector(
                'meta[name="description"]'
            );


        if (description) {

            description.setAttribute(
                "content",
                "عيادة أثينا لطب الأسنان في الحي التاسع بمدينة الشروق، القاهرة. نقدم خدمات الحشوات وعلاج العصب والتقويم والتبييض والزراعة وغيرها."
            );

        }


        const ogTitle =
            document.querySelector(
                'meta[property="og:title"]'
            );


        if (ogTitle) {

            ogTitle.setAttribute(
                "content",
                "عيادة أثينا لطب الأسنان | مدينة الشروق"
            );

        }


        const ogDescription =
            document.querySelector(
                'meta[property="og:description"]'
            );


        if (ogDescription) {

            ogDescription.setAttribute(
                "content",
                "رعاية أسنان احترافية في الحي التاسع بمدينة الشروق، القاهرة."
            );

        }


        const ogLocale =
            document.querySelector(
                'meta[property="og:locale"]'
            );


        if (ogLocale) {

            ogLocale.setAttribute(
                "content",
                "ar_EG"
            );

        }

    } else {

        document.documentElement.classList.remove(
            "arabic"
        );


        const languageText =
            document.getElementById(
                "languageText"
            );


        if (languageText) {

            languageText.textContent =
                "العربية";

        }


        document.title =
            "Athena Dental Clinic | Dentist in El Shorouk City";


        const description =
            document.querySelector(
                'meta[name="description"]'
            );


        if (description) {

            description.setAttribute(
                "content",
                "Athena Dental Clinic in the 9th District of El Shorouk City, Cairo. Dental care including fillings, root canal treatment, orthodontics, whitening, implants and more."
            );

        }


        const ogTitle =
            document.querySelector(
                'meta[property="og:title"]'
            );


        if (ogTitle) {

            ogTitle.setAttribute(
                "content",
                "Athena Dental Clinic | Dentist in El Shorouk City"
            );

        }


        const ogDescription =
            document.querySelector(
                'meta[property="og:description"]'
            );


        if (ogDescription) {

            ogDescription.setAttribute(
                "content",
                "Professional dental care in the 9th District of El Shorouk City, Cairo."
            );

        }


        const ogLocale =
            document.querySelector(
                'meta[property="og:locale"]'
            );


        if (ogLocale) {

            ogLocale.setAttribute(
                "content",
                "en_EG"
            );

        }

    }


    try {

        localStorage.setItem(
            "athenaLanguage",
            language
        );

    } catch (error) {

        // Ignore storage errors.

    }


    document.dispatchEvent(
        new CustomEvent(
            "athenaLanguageChanged"
        )
    );

}


// =========================================================
// Language Button
// =========================================================

const languageBtn =
    document.getElementById(
        "languageBtn"
    );


if (languageBtn) {

    languageBtn.addEventListener(
        "click",
        function () {

            const current =
                document.documentElement.lang ||
                "en";


            changeLanguage(
                current === "en"
                    ? "ar"
                    : "en"
            );

        }
    );

}


// =========================================================
// Restore Saved Language
// =========================================================

let savedLanguage = null;


try {

    savedLanguage =
        localStorage.getItem(
            "athenaLanguage"
        );

} catch (error) {

    // Fall back to English.

}


changeLanguage(
    savedLanguage === "ar"
        ? "ar"
        : "en"
);


// =========================================================
// Analytics — Links & Buttons
// =========================================================

document.addEventListener(
    "click",
    function (event) {

        if (!(event.target instanceof Element)) {
            return;
        }


        const link =
            event.target.closest("a");


        if (!link) return;


        const href =
            link.getAttribute("href") || "";


        const isBooking =
            link.classList.contains(
                "book-btn"
            ) ||
            link.classList.contains(
                "main-btn"
            ) ||
            link.classList.contains(
                "mobile-book-btn"
            );


        // WhatsApp

        if (
            href.startsWith(
                "https://wa.me/"
            )
        ) {

            trackAthenaEvent(
                "whatsapp_click",
                {
                    link_location:
                        isBooking
                            ? "booking"
                            : "contact"
                }
            );

        }


        // Phone

        if (
            href.startsWith("tel:")
        ) {

            trackAthenaEvent(
                "phone_click",
                {
                    link_location:
                        link.closest(
                            "#contact"
                        )
                            ? "contact"
                            : "other"
                }
            );

        }


        // Google Maps

        if (
            href.includes(
                "google.com/maps"
            ) ||
            href.includes(
                "maps.app.goo.gl"
            )
        ) {

            trackAthenaEvent(
                "maps_click",
                {
                    link_location:
                        link.classList.contains(
                            "location-icon"
                        )
                            ? "contact_location"
                            : "google_reviews"
                }
            );

        }


        // Booking buttons

        if (isBooking) {

            trackAthenaEvent(
                "booking_click",
                {
                    button_text:
                        (
                            link.textContent ||
                            ""
                        ).trim()
                }
            );

        }

    }
);


// =========================================================
// CHATBOT
// =========================================================

(function () {

    const toggle =
        document.getElementById(
            "chatbotToggle"
        );


    const panel =
        document.getElementById(
            "chatbotPanel"
        );


    const closeBtn =
        document.getElementById(
            "chatbotClose"
        );


    const clearBtn =
        document.getElementById(
            "chatbotClear"
        );


    const messages =
        document.getElementById(
            "chatbotMessages"
        );


    const input =
        document.getElementById(
            "chatbotInput"
        );


    const sendBtn =
        document.getElementById(
            "chatbotSend"
        );


    const quickActions =
        document.getElementById(
            "chatbotQuickActions"
        );


    if (
        !toggle ||
        !panel ||
        !messages ||
        !input ||
        !sendBtn
    ) {

        return;

    }


    // =====================================================
    // Fixed / Allowlisted Links
    // =====================================================

    const whatsappUrl =
        "https://wa.me/201020367122";


    const mapsUrl =
        "https://maps.app.goo.gl/tURqvYFEUSzXCRQR9?g_st=com.google.maps.preview.copy";


    const phoneUrl =
        "tel:+201020367122";


    // =====================================================
    // State
    // =====================================================

    let activeLanguage =
        document.documentElement.lang ||
        "en";


    let openedOnce = false;


    // =====================================================
    // Chatbot Translations
    // =====================================================

    const chatTranslations = {

        en: {

            hello:
                "Hello! 👋 How can we help you today?",

            placeholder:
                "Type your message...",

            send:
                "Send",

            clear:
                "Clear",

            booking:
                "I'd like to book an appointment.",

            services:
                "What services do you offer?",

            doctors:
                "Tell me about your doctors.",

            location:
                "Where are you located?",

            contact:
                "How can I contact you?",

            hours:
                "What are your working hours?",

            reviews:
                "Can I see your reviews?",

            bookingReply:
                "Of course! You can contact us directly on WhatsApp to book your appointment.",

            servicesReply:
                "We offer general dentistry, cosmetic dentistry, restorative dentistry, implants, endodontics, periodontics, oral surgery, orthodontics, pediatric dentistry, emergency care, full-mouth rehabilitation and digital dentistry.",

            doctorsReply:
                "Our team includes Dr. Ahmed Okl, Dr. passant Refaat, Dr. Nourhan Tarik, Dr. Mohamed Mansour and Dr. Noran Tarek.",

            locationReply:
                "We are located in the 9th District of El Shorouk City, next to Dover School.",

            contactReply:
                "You can contact us by phone or WhatsApp at 01020367122.",

            hoursReply:
                "Please contact the clinic directly to confirm the latest working hours.",

            reviewsReply:
                "You can see more patient reviews through our Google Reviews link.",

            unknown:
                "I'm sorry, I didn't quite understand. You can ask me about our services, doctors, location, contact information, working hours or booking."

        },


        ar: {

            hello:
                "أهلًا بيك! 👋 إزاي نقدر نساعدك النهارده؟",

            placeholder:
                "اكتب رسالتك...",

            send:
                "إرسال",

            clear:
                "مسح",

            booking:
                "عاوز أحجز موعد.",

            services:
                "إيه الخدمات اللي بتقدموها؟",

            doctors:
                "عرفني بالأطباء.",

            location:
                "العيادة فين؟",

            contact:
                "إزاي أتواصل معاكم؟",

            hours:
                "مواعيد العمل إيه؟",

            reviews:
                "ممكن أشوف التقييمات؟",

            bookingReply:
                "طبعًا! تقدر تتواصل معانا مباشرة على واتساب لحجز موعدك.",

            servicesReply:
                "بنقدم طب الأسنان العام، الأسنان التجميلي، التركيبات، زراعة الأسنان، علاج جذور الأسنان، علاج اللثة، جراحة الفم، تقويم الأسنان، طب أسنان الأطفال، طوارئ الأسنان، إعادة تأهيل الفم بالكامل وطب الأسنان الرقمي.",

            doctorsReply:
                "فريقنا بيضم دكتور أحمد العكل، دكتورة بسنت رفعت، دكتورة نورهان طارق، دكتور محمد منصور ودكتورة نوران طارق.",

            locationReply:
                "موجودين في الحي التاسع بمدينة الشروق، بجوار مدرسة دوفر.",

            contactReply:
                "تقدر تتواصل معانا عن طريق الاتصال أو واتساب على رقم 01020367122.",

            hoursReply:
                "يفضل التواصل مع العيادة مباشرة للتأكد من أحدث مواعيد العمل.",

            reviewsReply:
                "تقدر تشوف المزيد من تقييمات المرضى من خلال رابط تقييمات Google.",

            unknown:
                "معلش، مش فاهم رسالتك بشكل كامل. تقدر تسألني عن الخدمات، الأطباء، المكان، طرق التواصل، مواعيد العمل أو الحجز."

        }

    };


    function t(key) {

        return (
            chatTranslations[
                activeLanguage
            ] &&
            chatTranslations[
                activeLanguage
            ][key]
        ) ||
        chatTranslations.en[key] ||
        "";

    }


    function syncChatLanguage() {

        activeLanguage =
            document.documentElement.lang === "ar"
                ? "ar"
                : "en";


        if (input) {

            input.placeholder =
                t("placeholder");

        }


        if (sendBtn) {

            sendBtn.setAttribute(
                "aria-label",
                t("send")
            );

        }


        if (clearBtn) {

            clearBtn.setAttribute(
                "aria-label",
                t("clear")
            );

        }

    }
        // =====================================================
    // Chatbot Message Helpers
    // =====================================================

    function currentTime() {

        const now = new Date();

        return now.toLocaleTimeString(
            activeLanguage === "ar"
                ? "ar-EG"
                : "en-US",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    }


    function addMessage(text, sender) {

        const row =
            document.createElement("div");

        row.className =
            "chatbot-message " + sender;


        const bubble =
            document.createElement("div");

        bubble.className =
            "chatbot-bubble";


        bubble.textContent =
            text;


        const time =
            document.createElement("span");

        time.className =
            "chatbot-time";

        time.textContent =
            currentTime();


        bubble.appendChild(time);

        row.appendChild(bubble);

        messages.appendChild(row);


        messages.scrollTop =
            messages.scrollHeight;

    }


    // =====================================================
    // Safe action link
    // =====================================================

    function addLinkMessage(text, url) {

        if (
            url !== whatsappUrl &&
            url !== mapsUrl &&
            url !== phoneUrl
        ) {
            return;
        }


        const row =
            document.createElement("div");

        row.className =
            "chatbot-message bot";


        const bubble =
            document.createElement("div");

        bubble.className =
            "chatbot-bubble";


        if (text) {

            const textElement =
                document.createElement("span");

            textElement.textContent =
                text;

            bubble.appendChild(textElement);

        }


        const breakElement =
            document.createElement("br");

        bubble.appendChild(breakElement);


        const link =
            document.createElement("a");

        link.href =
            url;


        if (
            url === whatsappUrl ||
            url === mapsUrl
        ) {

            link.target =
                "_blank";

            link.rel =
                "noopener noreferrer";

        }


        if (url === whatsappUrl) {

            link.textContent =
                t("bookingLink");

        } else if (url === mapsUrl) {

            link.textContent =
                t("mapLink");

        } else {

            link.textContent =
                t("phoneLink");

        }


        bubble.appendChild(link);


        const time =
            document.createElement("span");

        time.className =
            "chatbot-time";

        time.textContent =
            currentTime();


        bubble.appendChild(time);

        row.appendChild(bubble);

        messages.appendChild(row);


        messages.scrollTop =
            messages.scrollHeight;

    }


    // =====================================================
    // Typing animation
    // =====================================================

    function showTyping(callback) {

        const row =
            document.createElement("div");

        row.className =
            "chatbot-message bot";

        row.id =
            "athenaTyping";


        const typing =
            document.createElement("div");

        typing.className =
            "chatbot-typing";


        for (let i = 0; i < 3; i++) {

            const dot =
                document.createElement("span");

            typing.appendChild(dot);

        }


        row.appendChild(typing);

        messages.appendChild(row);


        messages.scrollTop =
            messages.scrollHeight;


        setTimeout(function () {

            const existing =
                document.getElementById(
                    "athenaTyping"
                );


            if (existing) {

                existing.remove();

            }


            callback();

        }, 500);

    }


    function addBotReply(text) {

        showTyping(function () {

            addMessage(
                text,
                "bot"
            );

        });

    }


    // =====================================================
    // Scroll section
    // =====================================================

    function scrollToSection(id) {

        const allowedSections = [
            "services",
            "doctors",
            "reviews",
            "contact"
        ];


        if (!allowedSections.includes(id)) {

            return;

        }


        const section =
            document.getElementById(id);


        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    }


    // =====================================================
    // Quick actions
    // =====================================================

    function handleAction(action) {

        trackAthenaEvent(
            "chatbot_action",
            {
                action: action
            }
        );


        const replies = {

            services: {

                user:
                    t("userServices"),

                reply:
                    t("serviceReply"),

                section:
                    "services"

            },


            booking: {

                user:
                    t("userBooking"),

                reply:
                    t("bookingReply"),

                url:
                    whatsappUrl

            },


            location: {

                user:
                    t("userLocation"),

                reply:
                    t("locationReply"),

                url:
                    mapsUrl,

                section:
                    "contact"

            },


            contact: {

                user:
                    t("userContact"),

                reply:
                    t("contactReply"),

                section:
                    "contact"

            }

        };


        const item =
            replies[action];


        if (!item) {

            return;

        }


        // =================================================
        // Open clinic location directly
        // =================================================

        if (action === "location") {

            window.open(
                mapsUrl,
                "_blank",
                "noopener,noreferrer"
            );

        }


        addMessage(
            item.user,
            "user"
        );


        showTyping(function () {

            addMessage(
                item.reply,
                "bot"
            );


            if (item.url) {

                addLinkMessage(
                    "",
                    item.url
                );

            }

        });


        if (item.section) {

            setTimeout(function () {

                scrollToSection(
                    item.section
                );

            }, 900);

        }

    }


    // =====================================================
    // Classify user message
    // =====================================================

    function classifyMessage(message) {

        const m =
            message
                .toLowerCase()
                .trim();


        if (
            m.includes("service") ||
            m.includes("services") ||
            m.includes("خدمات") ||
            m.includes("بتقدم") ||
            m.includes("بتقدمو")
        ) {

            return "services";

        }


        if (
            m.includes("book") ||
            m.includes("appointment") ||
            m.includes("booking") ||
            m.includes("حجز") ||
            m.includes("احجز") ||
            m.includes("موعد")
        ) {

            return "booking";

        }


        if (
            m.includes("location") ||
            m.includes("where") ||
            m.includes("address") ||
            m.includes("فين") ||
            m.includes("مكان") ||
            m.includes("عنوان") ||
            m.includes("الشروق")
        ) {

            return "location";

        }


        if (
            m.includes("contact") ||
            m.includes("phone") ||
            m.includes("whatsapp") ||
            m.includes("تواصل") ||
            m.includes("رقم") ||
            m.includes("واتساب")
        ) {

            return "contact";

        }


        if (
            m.includes("hour") ||
            m.includes("open") ||
            m.includes("opening") ||
            m.includes("مواعيد") ||
            m.includes("مفتوح") ||
            m.includes("العمل")
        ) {

            return "hours";

        }


        if (
            m.includes("doctor") ||
            m.includes("doctors") ||
            m.includes("دكتور") ||
            m.includes("أطباء") ||
            m.includes("اطباء")
        ) {

            return "doctors";

        }


        if (
            m.includes("review") ||
            m.includes("reviews") ||
            m.includes("rating") ||
            m.includes("تقييم") ||
            m.includes("آراء") ||
            m.includes("اراء")
        ) {

            return "reviews";

        }


        if (
            m === "hi" ||
            m === "hello" ||
            m === "hey" ||
            m.includes("welcome") ||
            m.includes("اهلا") ||
            m.includes("أهلا") ||
            m.includes("هاي") ||
            m.includes("سلام") ||
            m.includes("صباح") ||
            m.includes("مساء")
        ) {

            return "hello";

        }


        return "unknown";

    }


    // =====================================================
    // Handle typed message
    // =====================================================

    function handleText() {

        const raw =
            input.value.trim();


        if (!raw) {

            return;

        }


        const message =
            raw.slice(0, 500);


        addMessage(
            message,
            "user"
        );


        input.value =
            "";


        const type =
            classifyMessage(message);


        const responses = {

            hello:
                t("hello"),

            services:
                t("serviceReply"),

            booking:
                t("bookingReply"),

            location:
                t("locationReply"),

            contact:
                t("contactReply"),

            hours:
                t("hoursReply"),

            doctors:
                t("doctorsReply"),

            reviews:
                t("reviewsReply"),

            unknown:
                t("unknown")

        };


        showTyping(function () {

            addMessage(
                responses[type] ||
                responses.unknown,
                "bot"
            );


            if (type === "booking") {

                addLinkMessage(
                    "",
                    whatsappUrl
                );

            }


            if (type === "location") {

                addLinkMessage(
                    "",
                    mapsUrl
                );

            }

        });


        if (type === "services") {

            setTimeout(function () {

                scrollToSection(
                    "services"
                );

            }, 900);

        }


        if (type === "doctors") {

            setTimeout(function () {

                scrollToSection(
                    "doctors"
                );

            }, 900);

        }


        if (type === "reviews") {

            setTimeout(function () {

                scrollToSection(
                    "reviews"
                );

            }, 900);

        }


        if (
            type === "location" ||
            type === "contact"
        ) {

            setTimeout(function () {

                scrollToSection(
                    "contact"
                );

            }, 900);

        }

    }


    // =====================================================
    // Open chatbot
    // =====================================================

    function openChat() {

        trackAthenaEvent(
            "chatbot_open"
        );


        panel.classList.add(
            "open"
        );


        panel.setAttribute(
            "aria-hidden",
            "false"
        );


        toggle.classList.add(
            "open"
        );


        if (!openedOnce) {

            openedOnce = true;


            setTimeout(function () {

                addBotReply(
                    t("hello")
                );

            }, 200);

        }


        setTimeout(function () {

            if (input) {

                input.focus();

            }

        }, 300);

    }


    // =====================================================
    // Close chatbot
    // =====================================================

    function closeChat() {

        panel.classList.remove(
            "open"
        );


        panel.setAttribute(
            "aria-hidden",
            "true"
        );


        toggle.classList.remove(
            "open"
        );

    }


    // =====================================================
    // Clear chatbot
    // =====================================================

    function clearChat() {

        while (messages.firstChild) {

            messages.removeChild(
                messages.firstChild
            );

        }


        setTimeout(function () {

            addBotReply(
                t("hello")
            );

        }, 100);

    }


    // =====================================================
    // Events
    // =====================================================

    toggle.addEventListener(
        "click",
        function () {

            if (
                panel.classList.contains(
                    "open"
                )
            ) {

                closeChat();

            } else {

                openChat();

            }

        }
    );


    if (closeBtn) {

        closeBtn.addEventListener(
            "click",
            closeChat
        );

    }


    if (clearBtn) {

        clearBtn.addEventListener(
            "click",
            clearChat
        );

    }


    sendBtn.addEventListener(
        "click",
        handleText
    );


    input.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                handleText();

            }

        }
    );


    if (quickActions) {

        quickActions.addEventListener(
            "click",
            function (event) {

                if (
                    !(event.target instanceof Element)
                ) {

                    return;

                }


                const button =
                    event.target.closest(
                        "button[data-action]"
                    );


                if (!button) {

                    return;

                }


                const action =
                    button.getAttribute(
                        "data-action"
                    );


                handleAction(
                    action
                );

            }
        );

    }


    // =====================================================
    // Language change
    // =====================================================

    document.addEventListener(
        "athenaLanguageChanged",
        syncChatLanguage
    );


    // Initial chatbot language sync

    syncChatLanguage();

})();
    // =====================================================
    // Handle typed message — continued
    // =====================================================

            if (type === "location") {

                addLinkMessage(
                    "",
                    mapsUrl
                );

            }

        });


        if (type === "services") {

            setTimeout(function () {

                scrollToSection(
                    "services"
                );

            }, 900);

        }


        if (type === "doctors") {

            setTimeout(function () {

                scrollToSection(
                    "doctors"
                );

            }, 900);

        }


        if (type === "reviews") {

            setTimeout(function () {

                scrollToSection(
                    "reviews"
                );

            }, 900);

        }


        if (
            type === "location" ||
            type === "contact"
        ) {

            setTimeout(function () {

                scrollToSection(
                    "contact"
                );

            }, 900);

        }

    }


    // =====================================================
    // Open chatbot
    // =====================================================

    function openChat() {

        trackAthenaEvent(
            "chatbot_open"
        );


        panel.classList.add(
            "open"
        );


        panel.setAttribute(
            "aria-hidden",
            "false"
        );


        toggle.classList.add(
            "open"
        );


        if (!openedOnce) {

            openedOnce = true;


            setTimeout(function () {

                addBotReply(
                    t("hello")
                );

            }, 200);

        }


        setTimeout(function () {

            if (input) {

                input.focus();

            }

        }, 300);

    }


    // =====================================================
    // Close chatbot
    // =====================================================

    function closeChat() {

        panel.classList.remove(
            "open"
        );


        panel.setAttribute(
            "aria-hidden",
            "true"
        );


        toggle.classList.remove(
            "open"
        );

    }


    // =====================================================
    // Clear chatbot
    // =====================================================

    function clearChat() {

        while (messages.firstChild) {

            messages.removeChild(
                messages.firstChild
            );

        }


        setTimeout(function () {

            addBotReply(
                t("hello")
            );

        }, 100);

    }


    // =====================================================
    // Events
    // =====================================================

    toggle.addEventListener(
        "click",
        function () {

            if (
                panel.classList.contains(
                    "open"
                )
            ) {

                closeChat();

            } else {

                openChat();

            }

        }
    );


    if (closeBtn) {

        closeBtn.addEventListener(
            "click",
            closeChat
        );

    }


    if (clearBtn) {

        clearBtn.addEventListener(
            "click",
            clearChat
        );

    }


    sendBtn.addEventListener(
        "click",
        handleText
    );


    input.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                handleText();

            }

        }
    );


    if (quickActions) {

        quickActions.addEventListener(
            "click",
            function (event) {

                if (
                    !(event.target instanceof Element)
                ) {

                    return;

                }


                const button =
                    event.target.closest(
                        "button[data-action]"
                    );


                if (!button) return;


                const action =
                    button.getAttribute(
                        "data-action"
                    );


                handleAction(
                    action
                );

            }
        );

    }


    // =====================================================
    // Language change
    // =====================================================

    document.addEventListener(
        "athenaLanguageChanged",
        syncChatLanguage
    );


    // Initial chatbot language sync

    syncChatLanguage();

})();
