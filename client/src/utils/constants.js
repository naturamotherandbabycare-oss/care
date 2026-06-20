export const SERVICES = [
  {
    id: '8d89e5a2-4c28-4e0e-92c2-75d3159dc8d1',
    name: 'Postnatal Mother Care',
    description: 'Comprehensive recovery support including nutrition planning, wound care, lactation guidance, and emotional wellness for new mothers.',
    price: 30000,
    duration: 'Daily/Shift basis',
    icon: '🤱',
    category: 'postnatal',
    features: ['Nutrition', 'Lactation', 'Recovery', 'Wound Care'],
  },
  {
    id: '3f46f3a3-b6d8-4a94-9b2f-92c13d8d6411',
    name: 'Newborn Baby Care',
    description: 'Expert newborn care covering feeding schedules, bath routines, sleep training, developmental milestones, and around-the-clock baby monitoring.',
    price: 18000,
    duration: 'Daily/Shift basis',
    icon: '👶',
    category: 'baby',
    features: ['Feeding', 'Sleep Training', 'Development', 'Monitoring'],
  },
  {
    id: '7a7b8c2c-8d1e-4f10-91a2-111111111111',
    name: 'Live-In Caretaker',
    description: 'Round-the-clock live-in support from certified caregivers so the whole family can rest, recover, and bond without worry.',
    price: 45000,
    duration: '24/7 Live-In',
    icon: '🏠',
    category: 'live-in',
    features: ['24/7 Support', 'Live-In Caregiver', 'Full Assistance', 'Bonding Support'],
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    name: 'Online Pre & Postnatal Consultation',
    description: 'Expert video consultations with our gynaecologists and paediatricians — available before and after birth. Get professional medical advice, birth planning support, and postnatal check-ins from home.',
    price: 1500,
    duration: '45 mins',
    icon: '💻',
    category: 'consultation',
    features: ['Prenatal OB-GYN', 'Postnatal Pediatrics', 'Video Call', 'Birth Planning'],
  },
  {
    id: '33333333-3333-3333-3333-333333333333',
    name: 'Postnatal Nutrition',
    description: 'Customized meal preparation with traditional healing foods, galactagogues for milk supply, and balanced recovery diets planned by nutritionists.',
    price: 8000,
    duration: 'Customized plans',
    icon: '🍲',
    category: 'nutrition',
    features: ['Meal Prep', 'Healing Foods', 'Galactagogues support', 'Nutritionist Planned'],
  },
  {
    id: '44444444-4444-4444-4444-444444444444',
    name: 'Holistic Mental & Emotional Healing',
    description: 'A nurturing, whole-person approach to postnatal mental health — combining professional counselling, mindfulness, breathwork, energy healing, and community support to gently overcome postpartum depression, anxiety, and emotional overwhelm.',
    price: 2500,
    duration: 'Per session',
    icon: '🧠',
    category: 'healing',
    features: ['Postpartum Depression support', 'Counselling', 'Mindfulness & Breathwork', 'Energy Healing'],
  },
  {
    id: '55555555-5555-5555-5555-555555555555',
    name: 'Postnatal Massage',
    description: 'Traditional and therapeutic postnatal massage to aid uterine recovery, reduce swelling, relieve muscle tension, and promote overall healing.',
    price: 1499,
    duration: '1 hour',
    icon: '💆',
    category: 'massage',
    features: ['Therapeutic Massage', 'Uterine Recovery', 'Relieve Swelling', 'Promote Healing'],
  },
  {
    id: '66666666-6666-6666-6666-666666666666',
    name: 'Trusted & Police Verified Nanny',
    description: 'We provide thoroughly background-checked and police verified nannies for your baby\'s daily care. Trained in infant care, hygiene, feeding, and early development.',
    price: 20000,
    duration: 'Full/Part time',
    icon: '👩&zwj;👧',
    category: 'nanny',
    features: ['Police Verified', 'Background Checked', 'Infant Care Training', 'Early Development'],
  },
  {
    id: '77777777-7777-7777-7777-777777777777',
    name: 'Babysitting at Your Doorstep',
    description: 'Trusted, certified babysitters come directly to your home so you can rest, recover, or step out with complete peace of mind. Trained in infant care, safety, and play-based development.',
    price: 1200,
    duration: 'Hourly/Daily',
    icon: '🍼',
    category: 'babysitting',
    features: ['At Home Care', 'Certified Sitters', 'Infant Care', 'Flexible Hours'],
  },
  {
    id: '88888888-8888-8888-8888-888888888888',
    name: 'Postnatal Yoga',
    description: 'Gentle, certified postnatal yoga sessions designed to rebuild core strength, improve pelvic floor recovery, ease back pain, and restore energy and balance after childbirth.',
    price: 1200,
    duration: 'Per class',
    icon: '🧘‍♀️',
    category: 'yoga',
    features: ['Core Strength', 'Pelvic Floor Recovery', 'Back Pain Relief', 'Flexibility'],
  },
];

export const TRIAL_PACKAGES = [
  {
    name: '7-Day Starter',
    price: 9500,
    period: 'for 7 days · 8 hrs/day',
    description: 'Dedicated day caregiver for transitioning home.',
    features: [
      'Dedicated day caregiver',
      'Newborn baby care basics',
      'Mother recovery check-ins',
      'Feeding & sleep guidance',
      'WhatsApp support',
      'Upgrade to monthly anytime',
    ],
    popular: false,
  },
  {
    name: '14-Day Experience',
    price: 14500,
    period: 'for 14 days · 8 hrs/day',
    description: 'Full baby & mother care and support.',
    features: [
      'Dedicated day caregiver',
      'Full baby & mother care',
      'Postnatal nutrition guidance',
      '2 postnatal massage sessions',
      'Daily progress reports',
      'Priority upgrade to monthly',
    ],
    popular: true,
  },
];

export const MONTHLY_PACKAGES = [
  {
    name: 'Essentials',
    price: 18000,
    period: 'per month · 8 hrs/day',
    description: 'Daily support for baby care and mother wellness.',
    features: [
      'Dedicated day caregiver',
      'Baby care & feeding support',
      'Mother wellness check-ins',
      'Nutrition guidance',
      'WhatsApp support',
    ],
    popular: false,
  },
  {
    name: 'Complete Care',
    price: 30000,
    period: 'per month · 12 hrs/day',
    description: 'Extended daily support with specialized recovery features.',
    features: [
      'Dedicated caregiver (12 hrs)',
      'Full postnatal mother care',
      'Newborn specialist care',
      'Postnatal massage (6 sessions)',
      'Nutrition & meal planning',
      'Daily progress reports',
      '24/7 on-call support',
    ],
    popular: true,
  },
  {
    name: 'Premium Live-In',
    price: 45000,
    period: 'per month · 24/7 live-in',
    description: 'Elite round-the-clock support for total peace of mind.',
    features: [
      'Live-in caregiver (24/7)',
      'Two dedicated caregivers',
      'Complete postnatal recovery',
      'Unlimited massage sessions',
      'Chef-prepared postnatal meals',
      'Holistic mental & emotional healing',
      'Postpartum depression support',
      'Priority emergency support',
    ],
    popular: false,
  },
];

export const MEDICAL_TEAM = [
  {
    name: 'Dr. Nargis Gohil',
    role: 'Senior Gynaecologist',
    experience: '15 years of experience',
    desc: 'Specialises in postnatal care, C-section wound care, lactation support, and full maternal recovery management.',
    specialties: ['OB-GYN', 'C-Section Care', 'Lactation Support', 'Postnatal Recovery'],
    emoji: '👩‍⚕️',
  },
  {
    name: 'Dr. Rajesh Gohil',
    role: 'Senior Paediatrician',
    experience: '15 years of experience',
    desc: 'Offers online video consultations for infant check-ups, developmental assessments, vaccination guidance, and newborn medical queries.',
    specialties: ['Online Consultation', 'Newborn Health', 'Developmental Assessments'],
    emoji: '👨‍⚕️',
  },
  {
    name: 'Dr. Shivangi Desai',
    role: 'Senior Homeopathy & Dietician',
    experience: '15 years of experience',
    desc: 'Combines advanced homeopathic treatment with expert dietary guidance for postnatal recovery, baby health, and hormonal balance.',
    specialties: ['Senior Homeopathy', 'Dietician', 'Holistic Healing', 'Postnatal Recovery'],
    emoji: '👩‍⚕️',
  },
  {
    name: 'Shreya Oza',
    role: 'Dietician',
    experience: 'Certified dietician',
    desc: 'Specialises in postnatal nutrition, lactation-boosting meal plans, and recovery diets tailored to restore mother\'s strength.',
    specialties: ['Postnatal Nutrition', 'Lactation Diet', 'Meal Planning'],
    emoji: '👩‍🍳',
  },
  {
    name: 'Ayushi Desai',
    role: 'Physiotherapist & Yoga Instructor',
    experience: 'Expert in postnatal rehab',
    desc: 'Helps mothers rebuild core strength, heal pelvic floor muscles, ease back pain, and restore flexibility after delivery.',
    specialties: ['Physiotherapy', 'Postnatal Yoga', 'Pelvic Floor Rehab'],
    emoji: '🧘‍♀️',
  },
];

export const THE_PROCESS = [
  {
    step: '01',
    title: 'Free Consultation',
    description: 'Book a complimentary consultation to discuss your needs, birth plan, and any special requirements. We match you with the perfect caregiver.',
  },
  {
    step: '02',
    title: 'Personalized Care Plan',
    description: 'Our team creates a tailored care plan covering mother\'s recovery, baby\'s routines, nutrition, and emotional support — designed just for you.',
  },
  {
    step: '03',
    title: 'Meet Your Caregiver',
    description: 'Meet and approve your dedicated caregiver before they begin. All our caregivers are certified, background-verified, and deeply trained.',
  },
  {
    step: '04',
    title: 'Care Begins at Home',
    description: 'Your caregiver arrives at your home ready to provide seamless, warm support. We monitor progress and adapt the plan as you and baby grow.',
  },
];

export const PROCESS_BADGES = [
  { icon: '🔒', title: 'Background Verified', desc: 'Every caregiver is police-verified and reference-checked' },
  { icon: '📋', title: 'Certified Professionals', desc: 'Trained in postnatal care, infant care & first aid' },
  { icon: '📱', title: 'Daily Progress Reports', desc: 'Real-time updates via our app — always stay informed' },
  { icon: '🔄', title: 'Flexible & Replaceable', desc: 'Not a good fit? We\'ll replace your caregiver within 24hrs' },
];

export const STATS = [
  { value: '500+', label: 'Families Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '50+', label: 'Certified Caregivers' },
  { value: '7+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
];

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Mother of Newborn, Ahmedabad',
    text: 'Natura was a lifesaver! The caregiver was incredibly warm and trained. My lactation doubts and recovery were handled so professionally.',
    rating: 5,
  },
  {
    name: 'Rajesh Patel',
    role: 'Father of Twins, Surat',
    text: 'We opted for the Premium Live-In package for our twins. Having police-verified, expert caregivers gave us absolute peace of mind and rest.',
    rating: 5,
  },
  {
    name: 'Anita Desai',
    role: 'Postpartum Mother, Rajkot',
    text: 'The postnatal massages and traditional recovery diets helped me gain my strength back so quickly. Highly recommend their trial packages!',
    rating: 5,
  },
];

export const NAV_LINKS = [
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/#how' },
  { name: 'Our Team', path: '/about#team' },
];
