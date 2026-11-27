// Translation dictionary. Keep reviewer changes grouped here.
const translations = {
  EN: {
    accessibility: { skip: 'Skip to content' },
    meta: { title: 'MercyMed | Evidence-based care for the whole family' },
    badge: '',
    glossary: { evidence: 'Evidence-based medicine' },
    nav: { about: 'About', services: 'Services', team: 'Team', organisations: 'For Organisations', contact: 'Contact' },
    actions: { appointment: 'Request an appointment <span aria-hidden="true">↗</span>', discover: 'Discover MercyMed <span aria-hidden="true">↓</span>', consultation: 'Request a consultation ↗', talk: 'Talk to our team <span aria-hidden="true">↗</span>' },
    hero: { eyebrow: 'Private medical centre · Bishkek', title: 'Evidence-based care for <span>the whole family.</span>', intro: 'Modern medical knowledge, international experience and a human approach — all in one place.', cardTitle: 'Care that listens.', cardText: 'From first question to next step.' },
    values: { evidenceText: 'Clear recommendations grounded in modern medical knowledge.', evidenceHeading: 'Evidence-based medicine', evidenceLink: 'What does this mean?', evidenceExplanation: 'Medical decisions are guided by current research and international medical knowledge, rather than by tradition alone.', family: 'One family, one place', familyText: 'Adult and pediatric care with specialists who coordinate.', outreach: 'Care beyond the clinic', outreachText: 'Charitable mobile clinics are at the heart of MercyMed.' },
    about: { eyebrow: '01 / About MercyMed', title: 'Medicine with a <span>long view.</span>', text1: 'MercyMed is a private outpatient medical centre in Bishkek, providing high-quality care based on modern medical knowledge and international experience.', text2: 'Our story began with mobile clinics serving communities in different regions for over 10 years. The Bishkek clinic opened in October 2023.', work: 'How we work', workText: 'We focus on the right questions, fewer unnecessary tests and a clear next step.' },
    services: { eyebrow: '02 / What we do', title: 'Care built around <span>your needs.</span>', intro: 'From daily consultations to preventive check-ups, our team helps you understand what comes next.', daily: 'Daily consultations', dailyText: 'Adult and pediatric consultations in one centre.', preventive: 'Preventive check-ups', preventiveText: 'Growth and development, vision screening, EKG, anemia and diabetes screening, and laboratory tests.', additional: 'Additional services', additionalText: 'Ultrasound, EKG, vision testing, audiometry and birth preparation courses by a certified doula.' },
    language: { title: 'Care in your language', text: 'Consultations and medical reports are available in Kyrgyz, Russian, English, Chinese, German and French.' },
    team: { eyebrow: '03 / The people behind the care', title: 'Meet the <span>MercyMed team.</span>', intro: 'Experienced specialists and a shared belief that good medicine starts with listening.' },
    org: { eyebrow: '04 / For organisations', title: 'Healthier teams make <span>stronger communities.</span>', intro: 'MercyMed works with schools, companies, embassies and medical education partners.', staff: 'Staff check-ups', staffText: 'Yearly medical check-ups designed for your organisation.', students: 'Student deals', studentsText: 'Special deals for students and partner communities.', training: 'Training & education', trainingText: 'Training for doctors and medical students.' },
    appointment: { eyebrow: '05 / Your next step', title: 'Let’s find the <span>right care.</span>', intro: 'Enter your details and continue to WhatsApp with a prepared appointment request.' },
    contact: { eyebrow: '06 / Contact', title: 'We’re here to <span>help.</span>', clinic: 'MercyMed medical centre', location: 'Tunguch microdistrict, near Ayu Grand<br /><small>Approximate location</small>' }
  },
  RU: {
    accessibility: { skip: 'Перейти к содержимому' },
    badge: '', glossary: { evidence: 'Доказательная медицина' },
    nav: { about: 'О нас', services: 'Услуги', team: 'Команда', organisations: 'Для организаций', contact: 'Контакты' },
    actions: { appointment: 'Записаться на приём <span aria-hidden="true">↗</span>', discover: 'Узнать о MercyMed <span aria-hidden="true">↓</span>', consultation: 'Запросить консультацию ↗', talk: 'Связаться с нами <span aria-hidden="true">↗</span>' },
    hero: { eyebrow: 'Частный медицинский центр · Бишкек', title: 'Доказательная медицина для <span>всей семьи.</span>', intro: 'Современные медицинские знания, международный опыт и человеческий подход — в одном месте.', cardTitle: 'Забота, которая слушает.', cardText: 'От первого вопроса до следующего шага.' },
    values: { evidenceText: 'Понятные рекомендации на основе современных медицинских знаний.', evidenceHeading: 'Доказательная медицина', evidenceLink: 'Что это значит?', evidenceExplanation: 'Медицинские решения опираются на современные исследования и международные знания, а не только на привычные методы.', family: 'Одна семья — одно место', familyText: 'Помощь взрослым и детям у специалистов, которые работают сообща.', outreach: 'Забота за пределами клиники', outreachText: 'Благотворительные мобильные клиники — важная часть MercyMed.' },
    about: { eyebrow: '01 / О MercyMed', title: 'Медицина с <span>долгосрочным взглядом.</span>', text1: 'MercyMed — частный амбулаторный медицинский центр в Бишкеке, который оказывает качественную помощь на основе современных медицинских знаний и международного опыта.', text2: 'Наша история началась с мобильных клиник, которые более 10 лет помогают людям в разных регионах. Клиника в Бишкеке открылась в октябре 2023 года.', work: 'Как мы работаем', workText: 'Мы задаём правильные вопросы, избегаем ненужных обследований и определяем понятный следующий шаг.' },
    services: { eyebrow: '02 / Что мы делаем', title: 'Забота, созданная вокруг <span>ваших потребностей.</span>', intro: 'От ежедневных консультаций до профилактических осмотров — наша команда поможет понять, что делать дальше.', daily: 'Ежедневные консультации', dailyText: 'Консультации для взрослых и детей в одном центре.', preventive: 'Профилактические осмотры', preventiveText: 'Оценка роста и развития, проверка зрения, ЭКГ, скрининг анемии и диабета, лабораторные анализы.', additional: 'Дополнительные услуги', additionalText: 'УЗИ, ЭКГ, проверка зрения, аудиометрия и курсы подготовки к родам с сертифицированной доулой.' },
    language: { title: 'Забота на вашем языке', text: 'Консультации и медицинские заключения доступны на кыргызском, русском, английском, китайском, немецком и французском языках.' },
    team: { eyebrow: '03 / Люди, которые заботятся о вас', title: 'Познакомьтесь с <span>командой MercyMed.</span>', intro: 'Опытные специалисты и общее убеждение: хорошая медицина начинается с умения слушать.' },
    org: { eyebrow: '04 / Для организаций', title: 'Здоровые команды создают <span>сильные сообщества.</span>', intro: 'MercyMed сотрудничает со школами, компаниями, посольствами и образовательными медицинскими партнёрами.', staff: 'Осмотры сотрудников', staffText: 'Ежегодные медицинские осмотры для вашей организации.', students: 'Предложения для студентов', studentsText: 'Специальные условия для студентов и партнёрских сообществ.', training: 'Обучение и образование', trainingText: 'Обучение врачей и студентов-медиков.' },
    appointment: { eyebrow: '05 / Следующий шаг', title: 'Найдём <span>подходящую помощь.</span>', intro: 'Введите данные и перейдите в WhatsApp с подготовленным запросом на приём.' },
    contact: { eyebrow: '06 / Контакты', title: 'Мы готовы <span>помочь.</span>', clinic: 'Медицинский центр MercyMed', location: 'Микрорайон Тунгуч, рядом с Ayu Grand<br /><small>Примерное расположение</small>' }
  },
  KG: {
    accessibility: { skip: 'Мазмунга өтүү' },
    badge: '', glossary: { evidence: 'Далилдерге негизделген медицина' },
    nav: { about: 'Биз жөнүндө', services: 'Кызматтар', team: 'Команда', organisations: 'Уюмдар үчүн', contact: 'Байланыш' },
    actions: { appointment: 'Кабыл алууга жазылуу <span aria-hidden="true">↗</span>', discover: 'MercyMed жөнүндө <span aria-hidden="true">↓</span>', consultation: 'Кеңеш алууга суроо жөнөтүү ↗', talk: 'Биздин команда менен байланышуу <span aria-hidden="true">↗</span>' },
    hero: { eyebrow: 'Жеке медициналык борбор · Бишкек', title: 'Бүт үй-бүлө үчүн <span>далилдерге негизделген кам көрүү.</span>', intro: 'Заманбап медициналык билим, эл аралык тажрыйба жана адамга багытталган мамиле — баары бир жерде.', cardTitle: 'Уккан кам көрүү.', cardText: 'Биринчи суроодон кийинки кадамга чейин.' },
    values: { evidenceText: 'Заманбап медициналык билимге таянган түшүнүктүү сунуштар.', evidenceHeading: 'Далилдерге негизделген медицина', evidenceLink: 'Бул эмнени билдирет?', evidenceExplanation: 'Медициналык чечимдер салтка гана эмес, учурдагы изилдөөлөргө жана эл аралык медициналык билимге таянат.', family: 'Бир үй-бүлө — бир жер', familyText: 'Чоңдорго жана балдарга биргелешип иштеген адистер жардам берет.', outreach: 'Клиникадан тышкары кам көрүү', outreachText: 'Кайрымдуулук мобилдик клиникалары MercyMedдин жүрөгүндө.' },
    about: { eyebrow: '01 / MercyMed жөнүндө', title: 'Медицинада <span>узак мөөнөттүү көз караш.</span>', text1: 'MercyMed — Бишкектеги заманбап медициналык билимге жана эл аралык тажрыйбага негизделген сапаттуу жардам көрсөткөн жеке амбулатордук борбор.', text2: 'Биздин тарыхыбыз ар кайсы аймактардагы жамааттарга 10 жылдан ашык жардам берген мобилдик клиникалардан башталган. Бишкек клиникасы 2023-жылдын октябрында ачылган.', work: 'Кантип иштейбиз', workText: 'Туура суроолорго көңүл буруп, керексиз текшерүүлөрдү азайтып, кийинки кадамды так түшүндүрөбүз.' },
    services: { eyebrow: '02 / Биз эмне кылабыз', title: 'Сиздин <span>муктаждыктарыңызга ылайык кам көрүү.</span>', intro: 'Күнүмдүк кеңештен профилактикалык текшерүүгө чейин командабыз кийинки кадамды түшүнүүгө жардам берет.', daily: 'Күнүмдүк кеңештер', dailyText: 'Чоңдорго жана балдарга бир борбордо кеңеш берилет.', preventive: 'Профилактикалык текшерүүлөр', preventiveText: 'Өсүү жана өнүгүү, көрүү, ЭКГ, аз кандуулук жана диабет боюнча скрининг, лабораториялык анализдер.', additional: 'Кошумча кызматтар', additionalText: 'УЗИ, ЭКГ, көрүү текшерүүсү, аудиометрия жана сертификатталган дула менен төрөткө даярдык курстары.' },
    language: { title: 'Сиздин тилиңиздеги кам көрүү', text: 'Кеңештер жана медициналык корутундулар кыргыз, орус, англис, кытай, немис жана француз тилдеринде берилет.' },
    team: { eyebrow: '03 / Кам көргөн адамдар', title: 'MercyMed <span>командасы менен таанышыңыз.</span>', intro: 'Тажрыйбалуу адистер жана жакшы медицина угуу жөндөмүнөн башталат деген жалпы ишеним.' },
    org: { eyebrow: '04 / Уюмдар үчүн', title: 'Дени сак командалар <span>күчтүү коомдорду түзөт.</span>', intro: 'MercyMed мектептер, компаниялар, элчиликтер жана медициналык билим берүү өнөктөштөрү менен иштейт.', staff: 'Кызматкерлерди текшерүү', staffText: 'Уюмуңуз үчүн жылдык медициналык текшерүүлөр.', students: 'Студенттер үчүн сунуштар', studentsText: 'Студенттерге жана өнөктөш жамааттарга атайын шарттар.', training: 'Окутуу жана билим берүү', trainingText: 'Дарыгерлерди жана медицина студенттерин окутуу.' },
    appointment: { eyebrow: '05 / Кийинки кадам', title: '<span>Туура жардамды</span> табалы.', intro: 'Маалыматыңызды киргизип, даярдалган кабыл алуу суроосу менен WhatsAppка өтүңүз.' },
    contact: { eyebrow: '06 / Байланыш', title: 'Биз <span>жардам берүүгө даярбыз.</span>', clinic: 'MercyMed медициналык борбору', location: 'Тунгуч кичи району, Ayu Grand жанында<br /><small>Болжолдуу жайгашкан жер</small>' }
  }
};

const additions = {
  EN: {
    actions: { menu: 'Menu', book: 'Book' },
    hero: { draft: '', trust: 'For local families, expats and travellers' },
    appointment: { intro: 'Enter your details and continue to WhatsApp with a prepared appointment request.' },
    services: { dailyText: 'Adult and pediatric consultations in one centre.', specialists: 'Choose a specialist to preselect them in your appointment request:', preventiveSpecialists: 'For growth and development checks, start with a pediatric consultation; for adult check-ups, choose family medicine or internal medicine. The team will advise which tests are right for you.', ultrasoundBy: 'Ultrasound:', birthPreparationBy: 'birth preparation:', physicalTherapyBy: 'physical therapy:', additionalRouting: 'Additional services are not booked directly. First request a doctor consultation; the doctor will advise you and help arrange the appropriate service.' },
    about: { mobile: 'Mobile clinics · the heart of MercyMed', years: 'Years of mobile outreach', yearsText: 'Charitable clinics have brought medical support to communities across different regions.', opened: 'Bishkek clinic opened', openedText: 'An outpatient centre for families, local residents and international visitors.' },
    team: { note: 'MercyMed team profiles.', m1Role: 'Director / Doula', m1Bio: 'Supporting families from preparation to care.', m2Role: 'Chief Doctor / Pediatrics', m2Bio: 'Care for children and their families.', m3Role: 'Pediatrics / Family Medicine', m3Bio: 'Whole-family care across every stage.', m4Role: 'Internal Medicine / Pulmonology', m4Bio: 'Thoughtful care for lasting health.', m5Role: 'Pediatric / Intensivist', m5Bio: 'Calm, attentive pediatric expertise.', m6Role: 'Pediatrics', m6Bio: 'Helping young patients feel at ease.', m7Role: 'Pediatrics / Oncology', m7Bio: 'International experience, close to home.', m8Role: 'Physical Therapist', m8Bio: 'Supporting movement and recovery.', m9Role: 'Gynecology', m9Bio: "Respectful care for women's health.", m10Role: 'Ultrasound', m10Bio: 'Clear imaging for confident next steps.' },
    form: { surname: 'Surname <span>*</span>', name: 'Name <span>*</span>', birthdate: 'Date of birth <span>*</span>', phone: 'Phone number <span>*</span>', doctor: 'Preferred doctor or consultation', choose: 'Choose an option', adult: 'General adult consultation', pediatric: 'General pediatric consultation', jonathan: 'Jonathan Williams — Pediatrics', irina: 'Irina Pak — Family Medicine', nasyikat: 'Nasyikat Dononbaeva — Internal Medicine / Pulmonology', nabat: 'Nabat Gasimova — Pediatrics / Intensivist', nancy: 'Nancy Yau — Pediatrics', lukas: 'Lukas Meyer-Landholt — Pediatrics / Oncology', simbat: 'Simbat Sadyrbaeva — Gynecology', other: 'Other / not sure yet', preview: 'Continue to WhatsApp <span aria-hidden="true">↗</span>', missing: { surname: 'Please enter your surname.', name: 'Please enter your name.', birthdate: 'Please enter your date of birth.', phone: 'Please enter your phone number.' }, invalidDate: 'Please enter a valid date of birth.', futureDate: 'Date of birth cannot be in the future.', invalidPhone: 'Please enter a valid phone number, for example +996 770 231 813.', doctorDefault: 'General consultation', awaitingReview: 'Request ready', awaitingReviewText: 'WhatsApp will open with a prepared message for MercyMed.', whatsappMessage: 'Hello MercyMed, I would like to request an appointment.%0AName: {name} {surname}%0ADate of birth: {birthdate}%0APhone: {phone}%0AConsultation: {doctor}' },
    contact: { phone: '☎ Call MercyMed: +996 770 231 813', email: '✉ Email MercyMed: medicalcenter@mercymed.kg', whatsapp: '▣ Chat with MercyMed on WhatsApp', instagram: 'Follow us on Instagram', instagramText: '@mercymed.kg · See updates and news', locationTitle: 'Find MercyMed', digisTitle: '2GIS location', openGoogle: 'Open Google Maps ↗', open2gis: 'Open 2GIS ↗' },
    footer: { tagline: 'Evidence-based care for the whole family.', note: '© 2026 MercyMed' }
  },
  RU: {
    meta: { title: 'MercyMed | Доказательная медицина для всей семьи' },
    actions: { menu: 'Меню', book: 'Записаться' },
    hero: { draft: '', trust: 'Для местных семей, экспатов и путешественников' },
    appointment: { intro: 'Введите данные и перейдите в WhatsApp с подготовленным запросом на приём.' },
    services: { dailyText: 'Консультации для взрослых и детей в одном центре.', specialists: 'Выберите специалиста — его имя появится в запросе на приём:', preventiveSpecialists: 'Для оценки роста и развития начните с консультации педиатра. Для взрослых выберите семейную медицину или терапию. Команда подскажет, какие обследования подойдут.', ultrasoundBy: 'УЗИ:', birthPreparationBy: 'подготовка к родам:', physicalTherapyBy: 'физиотерапия:', additionalRouting: 'Дополнительные услуги нельзя забронировать напрямую. Сначала запросите консультацию врача — он подскажет, какая услуга подойдёт, и поможет её организовать.' },
    about: { mobile: 'Мобильные клиники · сердце MercyMed', years: 'Лет мобильной помощи', yearsText: 'Благотворительные клиники помогают людям в разных регионах.', opened: 'Клиника в Бишкеке открылась', openedText: 'Амбулаторный центр для семей, жителей города и иностранных гостей.' },
    team: { note: 'Профили команды MercyMed.', m1Role: 'Директор / доула', m1Bio: 'Поддержка семей от подготовки до лечения.', m2Role: 'Главный врач / педиатрия', m2Bio: 'Помощь детям и их семьям.', m3Role: 'Педиатрия / семейная медицина', m3Bio: 'Помощь всей семье на каждом этапе.', m4Role: 'Терапия / пульмонология', m4Bio: 'Внимательная забота о здоровье.', m5Role: 'Педиатр / реаниматолог', m5Bio: 'Спокойная и внимательная помощь детям.', m6Role: 'Педиатрия', m6Bio: 'Помогаем маленьким пациентам чувствовать себя спокойно.', m7Role: 'Педиатрия / онкология', m7Bio: 'Международный опыт рядом с вами.', m8Role: 'Физиотерапевт', m8Bio: 'Поддержка движения и восстановления.', m9Role: 'Гинекология', m9Bio: 'Бережная забота о женском здоровье.', m10Role: 'УЗИ', m10Bio: 'Понятная диагностика для уверенных следующих шагов.' },
    form: { surname: 'Фамилия <span>*</span>', name: 'Имя <span>*</span>', birthdate: 'Дата рождения <span>*</span>', phone: 'Номер телефона <span>*</span>', doctor: 'Предпочтительный врач или консультация', choose: 'Выберите вариант', adult: 'Общая консультация для взрослых', pediatric: 'Общая консультация для детей', jonathan: 'Jonathan Williams — педиатрия', irina: 'Irina Pak — семейная медицина', nasyikat: 'Nasyikat Dononbaeva — терапия / пульмонология', nabat: 'Nabat Gasimova — педиатр / реаниматолог', nancy: 'Nancy Yau — педиатрия', lukas: 'Lukas Meyer-Landholt — педиатрия / онкология', simbat: 'Simbat Sadyrbaeva — гинекология', other: 'Другое / пока не уверены', preview: 'Перейти в WhatsApp <span aria-hidden="true">↗</span>', missing: { surname: 'Введите фамилию.', name: 'Введите имя.', birthdate: 'Введите дату рождения.', phone: 'Введите номер телефона.' }, invalidDate: 'Введите корректную дату рождения.', futureDate: 'Дата рождения не может быть в будущем.', invalidPhone: 'Введите корректный номер телефона, например +996 770 231 813.', doctorDefault: 'Общая консультация', awaitingReview: 'Запрос готов', awaitingReviewText: 'WhatsApp откроется с подготовленным сообщением для MercyMed.', whatsappMessage: 'Здравствуйте, MercyMed! Хочу записаться на приём.%0AИмя: {name} {surname}%0AДата рождения: {birthdate}%0AТелефон: {phone}%0AКонсультация: {doctor}' },
    contact: { phone: '☎ Позвонить в MercyMed: +996 770 231 813', email: '✉ Написать MercyMed: medicalcenter@mercymed.kg', whatsapp: '▣ Написать в WhatsApp', instagram: 'Мы в Instagram', instagramText: '@mercymed.kg · Новости и обновления', locationTitle: 'Найти MercyMed', digisTitle: 'Расположение в 2GIS', openGoogle: 'Открыть Google Maps ↗', open2gis: 'Открыть 2GIS ↗' },
    footer: { tagline: 'Доказательная медицина для всей семьи.', note: '© 2026 MercyMed, прототип · Ничего не отправляется.' }
  },
  KG: {
    meta: { title: 'MercyMed | Бүт үй-бүлө үчүн далилдүү медицина' },
    actions: { menu: 'Меню', book: 'Жазылуу' },
    hero: { draft: '', trust: 'Жергиликтүү үй-бүлөлөр, экспаттар жана саякатчылар үчүн' },
    appointment: { intro: 'Маалыматыңызды киргизип, даярдалган кабыл алуу суроосу менен WhatsAppка өтүңүз.' },
    services: { dailyText: 'Чоңдорго жана балдарга бир борбордо кеңеш берилет.', specialists: 'Адисти тандасаңыз, анын аты кабыл алуу сурооңузга кошулат:', preventiveSpecialists: 'Өсүү жана өнүгүүнү текшерүү үчүн педиатрга кайрылыңыз; чоңдор үй-бүлөлүк медицина же ички оорулар дарыгерин тандай алышат. Команда ылайыктуу текшерүүлөрдү сунуштайт.', ultrasoundBy: 'УЗИ:', birthPreparationBy: 'төрөткө даярдык:', physicalTherapyBy: 'физиотерапия:', additionalRouting: 'Кошумча кызматтарды түздөн-түз жаздырууга болбойт. Адегенде дарыгердин кеңешине суроо жөнөтүңүз; дарыгер ылайыктуу кызматты сунуштап, аны уюштурууга жардам берет.' },
    about: { mobile: 'Мобилдик клиникалар · MercyMedдин жүрөгү', years: 'Мобилдик жардамдын жылдары', yearsText: 'Кайрымдуулук клиникалары ар кайсы аймактардагы адамдарга жардам берди.', opened: 'Бишкек клиникасы ачылды', openedText: 'Үй-бүлөлөр, жергиликтүү тургундар жана чет элдик коноктор үчүн амбулатордук борбор.' },
    team: { note: 'MercyMed командасынын профилдери.', m1Role: 'Директор / дула', m1Bio: 'Үй-бүлөлөргө даярдыктан кам көрүүгө чейин колдоо.', m2Role: 'Башкы дарыгер / педиатрия', m2Bio: 'Балдарга жана алардын үй-бүлөлөрүнө жардам.', m3Role: 'Педиатрия / үй-бүлөлүк медицина', m3Bio: 'Ар бир этапта бүт үй-бүлөгө жардам.', m4Role: 'Ички оорулар / пульмонология', m4Bio: 'Ден соолукка көңүл бурулган кам көрүү.', m5Role: 'Педиатр / реаниматолог', m5Bio: 'Балдарга тынч жана кылдат жардам.', m6Role: 'Педиатрия', m6Bio: 'Кичинекей бейтаптарга өзүн эркин сезүүгө жардам беребиз.', m7Role: 'Педиатрия / онкология', m7Bio: 'Эл аралык тажрыйба сизге жакын.', m8Role: 'Физиотерапевт', m8Bio: 'Кыймылга жана калыбына келүүгө колдоо.', m9Role: 'Гинекология', m9Bio: 'Аялдардын ден соолугуна сый мамиле.', m10Role: 'УЗИ', m10Bio: 'Кийинки кадамды ишенимдүү тандоо үчүн так сүрөттөө.' },
    form: { surname: 'Фамилия <span>*</span>', name: 'Аты <span>*</span>', birthdate: 'Туулган күнү <span>*</span>', phone: 'Телефон номери <span>*</span>', doctor: 'Каалаган дарыгер же кеңеш', choose: 'Вариантты тандаңыз', adult: 'Чоңдор үчүн жалпы кеңеш', pediatric: 'Балдар үчүн жалпы кеңеш', jonathan: 'Jonathan Williams — педиатрия', irina: 'Irina Pak — үй-бүлөлүк медицина', nasyikat: 'Nasyikat Dononbaeva — ички оорулар / пульмонология', nabat: 'Nabat Gasimova — педиатр / реаниматолог', nancy: 'Nancy Yau — педиатрия', lukas: 'Lukas Meyer-Landholt — педиатрия / онкология', simbat: 'Simbat Sadyrbaeva — гинекология', other: 'Башка / азырынча билбейм', preview: 'WhatsAppка өтүү <span aria-hidden="true">↗</span>', missing: { surname: 'Фамилияңызды жазыңыз.', name: 'Атыңызды жазыңыз.', birthdate: 'Туулган күнүңүздү жазыңыз.', phone: 'Телефон номериңизди жазыңыз.' }, invalidDate: 'Туулган күнүңүздү туура жазыңыз.', futureDate: 'Туулган күн келечекте боло албайт.', invalidPhone: 'Телефон номериңизди туура жазыңыз, мисалы +996 770 231 813.', doctorDefault: 'Жалпы кеңеш', awaitingReview: 'Суроо даяр', awaitingReviewText: 'WhatsApp MercyMed үчүн даярдалган билдирүү менен ачылат.', whatsappMessage: 'Саламатсызбы, MercyMed! Кабыл алууга жазылгым келет.%0AАты-жөнү: {name} {surname}%0AТуулган күнү: {birthdate}%0AТелефон: {phone}%0AКеңеш: {doctor}' },
    contact: { phone: '☎ MercyMedге чалуу: +996 770 231 813', email: '✉ MercyMedге жазуу: medicalcenter@mercymed.kg', whatsapp: '▣ WhatsApp аркылуу жазуу', instagram: 'Биз Instagramдабыз', instagramText: '@mercymed.kg · Жаңылыктар жана маалымат', locationTitle: 'MercyMedди табыңыз', digisTitle: '2GISтеги жайгашкан жер', openGoogle: 'Google Maps ачуу ↗', open2gis: '2GIS ачуу ↗' },
    footer: { tagline: 'Бүт үй-бүлө үчүн далилдерге негизделген медицина.', note: '© 2026 MercyMed, прототип · Эч нерсе жөнөтүлбөйт.' }
  }
};
Object.assign(additions.EN.form, {
  generalRequest: 'General request — choose a doctor or leave blank',
  doctor: 'Preferred doctor or team member',
  mahabat: 'Mahabat Alieva — Doula / birth preparation (after doctor consultation)',
  madison: 'Madison Smith — Physical therapy (after doctor consultation)',
  nargiza: 'Nargiza Islamova — Ultrasound (after doctor consultation)',
  requestNote: 'You can request any team member. Ultrasound, physical therapy and doula services are discussed with a doctor first; this sends a request, not a confirmed booking.',
  requestDoctor: 'Request appointment'
});
Object.assign(additions.RU.form, {
  generalRequest: 'Общий запрос — выберите врача или оставьте поле пустым',
  doctor: 'Предпочтительный врач или специалист команды',
  mahabat: 'Mahabat Alieva — доула / подготовка к родам (после консультации врача)',
  madison: 'Madison Smith — физиотерапия (после консультации врача)',
  nargiza: 'Nargiza Islamova — УЗИ (после консультации врача)',
  requestNote: 'Можно выбрать любого специалиста команды. УЗИ, физиотерапия и услуги доулы обсуждаются сначала с врачом; форма отправляет запрос, а не подтверждает запись.',
  requestDoctor: 'Записаться к врачу'
});
Object.assign(additions.KG.form, {
  generalRequest: 'Жалпы суроо — дарыгерди тандаңыз же бош калтырыңыз',
  doctor: 'Каалаган дарыгер же команда мүчөсү',
  mahabat: 'Mahabat Alieva — дула / төрөткө даярдык (дарыгердин кеңешинен кийин)',
  madison: 'Madison Smith — физиотерапия (дарыгердин кеңешинен кийин)',
  nargiza: 'Nargiza Islamova — УЗИ (дарыгердин кеңешинен кийин)',
  requestNote: 'Команданын каалаган мүчөсүнө суроо жөнөтө аласыз. УЗИ, физиотерапия жана дуланын кызматтары адегенде дарыгер менен талкууланат; бул форма суроо жөнөтөт, кабыл алууну ырастабайт.',
  requestDoctor: 'Дарыгерге жазылуу'
});
Object.assign(additions.EN.form, {
  year: 'Year', month: 'Month', day: 'Day',
  selectYear: 'Select year', selectMonth: 'Select month', selectDay: 'Select day'
});
Object.assign(additions.RU.form, {
  year: 'Год', month: 'Месяц', day: 'День',
  selectYear: 'Выберите год', selectMonth: 'Выберите месяц', selectDay: 'Выберите день'
});
Object.assign(additions.KG.form, {
  year: 'Жыл', month: 'Ай', day: 'Күн',
  selectYear: 'Жылды тандаңыз', selectMonth: 'Айды тандаңыз', selectDay: 'Күндү тандаңыз'
});
Object.assign(additions.EN.contact, {
  phone: '+996 770 231 813',
  email: 'medicalcenter@mercymed.kg',
  whatsapp: 'WhatsApp',
  instagram: '@mercymed.kg'
});
Object.assign(additions.RU.contact, {
  phone: '+996 770 231 813',
  email: 'medicalcenter@mercymed.kg',
  whatsapp: 'WhatsApp',
  instagram: '@mercymed.kg'
});
Object.assign(additions.KG.contact, {
  phone: '+996 770 231 813',
  email: 'medicalcenter@mercymed.kg',
  whatsapp: 'WhatsApp',
  instagram: '@mercymed.kg'
});
Object.assign(additions.EN.team, {
  intro: 'Meet MercyMed’s clinicians and care team, with specialties and background from the clinic’s materials.',
  note: 'The client materials do not specify years of experience for most clinicians. They mention a receptionist who coordinates requests, but do not name them; contact MercyMed to confirm current experience and language availability.',
  languageNote: 'The clinic interview lists Kyrgyz, Russian and English; Nancy Yau speaks Chinese, and Lukas Meyer-Landholt speaks German and French.',
  m1Role: 'Nurse / Director / Doula',
  m1Bio: 'Kyrgyz nurse, clinic director and doula. Helped start MercyMed’s mobile-clinic work with Jonathan over 10 years ago.',
  m2Bio: 'Chief doctor and pediatrician. Helped start MercyMed’s mobile-clinic work with Mahabat over 10 years ago.',
  m3Bio: 'Pediatrics and family medicine. The materials do not state her years of experience or languages.',
  m4Bio: 'Internal medicine and pulmonology. The materials do not state her years of experience or languages.',
  m5Bio: 'Pediatrics and intensive care. The materials do not state her years of experience or languages.',
  m6Bio: 'Pediatrics; speaks Chinese. The materials do not state her years of experience.',
  m7Bio: 'Pediatrician and pediatric oncologist. Worked at MercyMed for just over a year at the time of the interview; speaks German and French.',
  m8Bio: 'Physical therapist. The materials do not state her years of experience or languages.',
  m9Bio: 'Gynecologist. The materials do not state her years of experience or languages.',
  m10Bio: 'Provides ultrasound. The materials do not state her years of experience or languages.'
});
Object.assign(additions.RU.team, {
  intro: 'Врачи и специалисты MercyMed: направления и сведения из материалов клиники.',
  note: 'В материалах не указаны годы опыта большинства специалистов. Упоминается администратор, который координирует запросы, но его имя не приводится. Уточните у MercyMed актуальный опыт специалистов и доступные языки.',
  languageNote: 'В интервью названы кыргызский, русский и английский языки; Nancy Yau говорит по-китайски, а Lukas Meyer-Landholt — по-немецки и по-французски.',
  m1Role: 'Медсестра / директор / доула',
  m1Bio: 'Медсестра из Кыргызстана, директор клиники и доула. Более 10 лет назад вместе с Jonathan начала работу мобильных клиник MercyMed.',
  m2Bio: 'Главный врач и педиатр. Более 10 лет назад вместе с Mahabat начал работу мобильных клиник MercyMed.',
  m3Bio: 'Педиатрия и семейная медицина. В материалах не указаны годы опыта и языки.',
  m4Bio: 'Терапия и пульмонология. В материалах не указаны годы опыта и языки.',
  m5Bio: 'Педиатрия и интенсивная терапия. В материалах не указаны годы опыта и языки.',
  m6Bio: 'Педиатрия; говорит по-китайски. Стаж работы в материалах не указан.',
  m7Bio: 'Педиатр и детский онколог. На момент интервью работал в MercyMed чуть больше года; говорит по-немецки и по-французски.',
  m8Bio: 'Физиотерапевт. В материалах не указаны годы опыта и языки.',
  m9Bio: 'Гинеколог. В материалах не указаны годы опыта и языки.',
  m10Bio: 'Проводит УЗИ. В материалах не указаны годы опыта и языки.'
});
Object.assign(additions.KG.team, {
  intro: 'MercyMed дарыгерлери жана кам көрүү командасы: клиниканын материалдарындагы адистиктер жана маалыматтар.',
  note: 'Материалдарда көпчүлүк адистердин иш тажрыйбасынын жылдары көрсөтүлгөн эмес. Суроо-талаптарды координациялаган администратор айтылат, бирок аты көрсөтүлгөн эмес. Учурдагы тажрыйба жана тилдер тууралуу MercyMedден тактаңыз.',
  languageNote: 'Маекте кыргыз, орус жана англис тилдери айтылган; Nancy Yau кытайча, Lukas Meyer-Landholt немисче жана французча сүйлөйт.',
  m1Role: 'Медайым / директор / дула',
  m1Bio: 'Кыргызстандык медайым, клиниканын директору жана дула. MercyMedдин көчмө клиникаларын Jonathan менен 10 жылдан ашык убакыт мурун баштаган.',
  m2Bio: 'Башкы дарыгер жана педиатр. MercyMedдин көчмө клиникаларын Mahabat менен 10 жылдан ашык убакыт мурун баштаган.',
  m3Bio: 'Педиатрия жана үй-бүлөлүк медицина. Материалдарда иш тажрыйбасынын жылдары жана тилдери көрсөтүлгөн эмес.',
  m4Bio: 'Ички оорулар жана пульмонология. Материалдарда иш тажрыйбасынын жылдары жана тилдери көрсөтүлгөн эмес.',
  m5Bio: 'Педиатрия жана интенсивдүү терапия. Материалдарда иш тажрыйбасынын жылдары жана тилдери көрсөтүлгөн эмес.',
  m6Bio: 'Педиатрия; кытайча сүйлөйт. Иш тажрыйбасынын жылдары материалдарда көрсөтүлгөн эмес.',
  m7Bio: 'Педиатр жана балдар онкологу. Маек учурунда MercyMedде бир жылдан бир аз ашык убакыт иштеген; немисче жана французча сүйлөйт.',
  m8Bio: 'Физиотерапевт. Материалдарда иш тажрыйбасынын жылдары жана тилдери көрсөтүлгөн эмес.',
  m9Bio: 'Гинеколог. Материалдарда иш тажрыйбасынын жылдары жана тилдери көрсөтүлгөн эмес.',
  m10Bio: 'УЗИ жүргүзөт. Материалдарда иш тажрыйбасынын жылдары жана тилдери көрсөтүлгөн эмес.'
});
Object.keys(additions).forEach((language) => {
  Object.keys(additions[language]).forEach((section) => Object.assign(translations[language][section] ||= {}, additions[language][section]));
});

const getValue = (language, key) => key.split('.').reduce((value, part) => value?.[part], translations[language]);
const savedLanguage = localStorage.getItem('mercymed-language');
let currentLanguage = translations[savedLanguage] ? savedLanguage : 'EN';

function updateLanguage(language) {
  currentLanguage = translations[language] ? language : 'EN';
  localStorage.setItem('mercymed-language', currentLanguage);
  document.documentElement.lang = currentLanguage === 'KG' ? 'ky' : currentLanguage.toLowerCase();
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getValue(currentLanguage, element.dataset.i18n);
    if (value !== undefined) element.innerHTML = value;
  });
  populateBirthdateMonths();
  document.querySelectorAll('[data-translation-badge]').forEach((badge) => {
    badge.textContent = translations[currentLanguage].badge;
  });
  document.title = translations[currentLanguage].meta.title;
  document.querySelectorAll('[data-glossary-key]').forEach((term) => {
    term.textContent = translations[currentLanguage].glossary[term.dataset.glossaryKey];
    term.title = term.textContent;
  });
  document.querySelectorAll('[data-language]').forEach((option) => {
    const active = option.dataset.language === currentLanguage;
    option.classList.toggle('active', active);
    option.setAttribute('aria-pressed', String(active));
  });
}

document.querySelectorAll('[data-language]').forEach((option) => {
  option.addEventListener('click', () => updateLanguage(option.dataset.language));
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  siteNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const form = document.querySelector('#appointment-form');
const formMessage = document.querySelector('#form-message');
const birthYearInput = document.querySelector('#birth-year');
const birthMonthInput = document.querySelector('#birth-month');
const birthDayInput = document.querySelector('#birth-day');
const doctorSelect = document.querySelector('#doctor');
document.querySelectorAll('.services-list details').forEach((details) => {
  const summary = details.querySelector('summary');
  const content = details.querySelector('.details-content');
  if (!summary || !content) return;

  let isOpen = details.open;
  let animation;
  summary.addEventListener('click', (event) => {
    event.preventDefault();
    const startHeight = details.open ? content.getBoundingClientRect().height : 0;
    const startOpacity = details.open
      ? Number.parseFloat(getComputedStyle(content).opacity)
      : 0;
    animation?.cancel();
    isOpen = !isOpen;
    if (isOpen) details.open = true;

    if (typeof content.animate !== 'function') {
      details.open = isOpen;
      return;
    }

    const currentAnimation = content.animate(
      [
        { height: `${startHeight}px`, opacity: startOpacity },
        { height: `${isOpen ? content.scrollHeight : 0}px`, opacity: Number(isOpen) }
      ],
      {
        duration: matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 320,
        easing: 'ease',
        fill: 'both'
      }
    );
    animation = currentAnimation;
    currentAnimation.onfinish = () => {
      if (animation !== currentAnimation) return;
      if (!isOpen) details.open = false;
      currentAnimation.cancel();
      animation = null;
    };
  });
});

const nameInputs = form?.querySelectorAll('#name, #surname') ?? [];
const invalidNameCharacters = /[^\p{L}\p{M} '\u2019-]/gu;

nameInputs.forEach((input) => {
  input.addEventListener('input', () => {
    const cursorPosition = input.selectionStart;
    const cleanedValue = input.value.replace(invalidNameCharacters, '');
    if (cleanedValue !== input.value) {
      const cleanedCursorPosition = input.value
        .slice(0, cursorPosition)
        .replace(invalidNameCharacters, '').length;
      input.value = cleanedValue;
      input.setSelectionRange(cleanedCursorPosition, cleanedCursorPosition);
    }
  });
});

document.querySelectorAll('[data-booking-doctor]').forEach((link) => {
  link.addEventListener('click', () => {
    if (doctorSelect) doctorSelect.value = link.dataset.bookingDoctor;
  });
});
const today = new Date();
const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
const recentYears = document.createElement('optgroup');
recentYears.label = `2000–${today.getFullYear()}`;
const earlierYears = document.createElement('optgroup');
earlierYears.label = '1900–1999';
for (let year = 2000; year <= today.getFullYear(); year += 1) {
  recentYears.append(new Option(String(year), String(year)));
}
for (let year = 1999; year >= 1900; year -= 1) {
  earlierYears.append(new Option(String(year), String(year)));
}
birthYearInput?.append(recentYears, earlierYears);

function populateBirthdateMonths() {
  if (!birthMonthInput) return;
  const selectedMonth = birthMonthInput.value;
  const locale = { EN: 'en', RU: 'ru', KG: 'ky' }[currentLanguage];
  const monthOptions = Array.from({ length: 12 }, (_, index) => {
    const month = String(index + 1).padStart(2, '0');
    const label = new Intl.DateTimeFormat(locale, { month: 'long', timeZone: 'UTC' })
      .format(new Date(Date.UTC(2000, index, 1)));
    return new Option(label, month);
  });
  birthMonthInput.replaceChildren(birthMonthInput.options[0], ...monthOptions);
  birthMonthInput.value = selectedMonth;
}

function updateBirthDays() {
  if (!birthDayInput) return;
  const selectedDay = birthDayInput.value;
  const year = Number(birthYearInput?.value);
  const month = Number(birthMonthInput?.value);
  const maxDay = year && month ? new Date(year, month, 0).getDate() : 31;
  birthDayInput.replaceChildren(
    birthDayInput.options[0],
    ...Array.from({ length: maxDay }, (_, index) => {
      const day = String(index + 1).padStart(2, '0');
      return new Option(String(index + 1), day);
    })
  );
  birthDayInput.value = selectedDay;
}

birthYearInput?.addEventListener('change', updateBirthDays);
birthMonthInput?.addEventListener('change', updateBirthDays);
updateBirthDays();

const isValidBirthdate = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return year >= 1900
    && year <= today.getFullYear()
    && month >= 1
    && month <= 12
    && day >= 1
    && day <= 31
    && date.getUTCFullYear() === year
    && date.getUTCMonth() === month - 1
    && date.getUTCDate() === day;
};

const isValidPhone = (value) => {
  const digits = value.replace(/\D/g, '');
  return /^996\d{9}$/.test(digits) || /^0\d{9}$/.test(digits);
};

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const requiredFields = [...form.querySelectorAll('[required]')];
  const missingField = requiredFields.find((field) => !field.value.trim());
  if (missingField) {
    formMessage.textContent = translations[currentLanguage].form.missing[missingField.dataset.validationId || missingField.id];
    formMessage.className = 'form-message error';
    missingField.setAttribute('aria-invalid', 'true');
    missingField.focus();
    return;
  }
  const data = new FormData(form);
  const birthdate = `${birthYearInput.value}-${birthMonthInput.value}-${birthDayInput.value}`;
  if (!isValidBirthdate(birthdate)) {
    formMessage.textContent = translations[currentLanguage].form.invalidDate;
    formMessage.className = 'form-message error';
    birthDayInput?.focus();
    return;
  }
  if (birthdate > todayString) {
    formMessage.textContent = translations[currentLanguage].form.futureDate;
    formMessage.className = 'form-message error';
    birthYearInput?.focus();
    return;
  }
  if (!isValidPhone(data.get('phone'))) {
    formMessage.textContent = translations[currentLanguage].form.invalidPhone;
    formMessage.className = 'form-message error';
    document.querySelector('#phone')?.focus();
    return;
  }
  requiredFields.forEach((field) => field.removeAttribute('aria-invalid'));
  const doctor = doctorSelect?.value
    ? doctorSelect.selectedOptions[0].textContent
    : translations[currentLanguage].form.doctorDefault;
  const message = translations[currentLanguage].form.whatsappMessage
    .replace('{name}', data.get('name'))
    .replace('{surname}', data.get('surname'))
    .replace('{birthdate}', birthdate)
    .replace('{phone}', data.get('phone'))
    .replace('{doctor}', doctor);
  formMessage.innerHTML = `<strong>${translations[currentLanguage].form.awaitingReview}</strong><br>${translations[currentLanguage].form.awaitingReviewText}`;
  formMessage.className = 'form-message success';
  window.setTimeout(() => {
    window.location.assign(`https://wa.me/996770231813?text=${encodeURIComponent(message.replaceAll('%0A', '\n'))}`);
  }, 150);
});

updateLanguage(currentLanguage);
