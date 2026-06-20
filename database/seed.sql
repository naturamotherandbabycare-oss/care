-- ============================================
-- Seed Data — Mother & Baby Care Services
-- ============================================

INSERT INTO services (id, name, description, category, price, duration_minutes, image_url, is_active) VALUES

('8d89e5a2-4c28-4e0e-92c2-75d3159dc8d1', 
 'Postnatal Mother Care', 
 'Comprehensive recovery support including nutrition planning, wound care, lactation guidance, and emotional wellness for new mothers.',
 'postnatal', 30000.00, 180, '/images/postnatal.jpg', true),

('3f46f3a3-b6d8-4a94-9b2f-92c13d8d6411', 
 'Newborn Baby Care', 
 'Expert newborn care covering feeding schedules, bath routines, sleep training, developmental milestones, and around-the-clock baby monitoring.',
 'baby', 18000.00, 120, '/images/baby.jpg', true),

('7a7b8c2c-8d1e-4f10-91a2-111111111111', 
 'Live-In Caretaker', 
 'Round-the-clock live-in support from certified caregivers so the whole family can rest, recover, and bond without worry.',
 'live-in', 45000.00, 240, '/images/livein.jpg', true),

('22222222-2222-2222-2222-222222222222', 
 'Online Pre & Postnatal Consultation', 
 'Expert video consultations with our gynaecologists and paediatricians — available before and after birth. Get professional medical advice, birth planning support, and postnatal check-ins from home.',
 'consultation', 1500.00, 45, '/images/consultation.jpg', true),

('33333333-3333-3333-3333-333333333333', 
 'Postnatal Nutrition', 
 'Customized meal preparation with traditional healing foods, galactagogues for milk supply, and balanced recovery diets planned by nutritionists.',
 'nutrition', 8000.00, 120, '/images/nutrition.jpg', true),

('44444444-4444-4444-4444-444444444444', 
 'Holistic Mental & Emotional Healing', 
 'A nurturing, whole-person approach to postnatal mental health — combining professional counselling, mindfulness, breathwork, energy healing, and community support to gently overcome postpartum depression, anxiety, and emotional overwhelm.',
 'healing', 2500.00, 90, '/images/healing.jpg', true),

('55555555-5555-5555-5555-555555555555', 
 'Postnatal Massage', 
 'Traditional and therapeutic postnatal massage to aid uterine recovery, reduce swelling, relieve muscle tension, and promote overall healing.',
 'massage', 1499.00, 60, '/images/massage.jpg', true),

('66666666-6666-6666-6666-666666666666', 
 'Trusted & Police Verified Nanny', 
 'We provide thoroughly background-checked and police verified nannies for your baby''s daily care. Trained in infant care, hygiene, feeding, and early development.',
 'nanny', 20000.00, 180, '/images/nanny.jpg', true),

('77777777-7777-7777-7777-777777777777', 
 'Babysitting at Your Doorstep', 
 'Trusted, certified babysitters come directly to your home so you can rest, recover, or step out with complete peace of mind. Trained in infant care, safety, and play-based development.',
 'babysitting', 1200.00, 120, '/images/babysitting.jpg', true),

('88888888-8888-8888-8888-888888888888', 
 'Postnatal Yoga', 
 'Gentle, certified postnatal yoga sessions designed to rebuild core strength, improve pelvic floor recovery, ease back pain, and restore energy and balance after childbirth.',
 'yoga', 1200.00, 60, '/images/yoga.jpg', true);

-- ============================================
-- Seed Admin User (password: admin123)
-- Hash generated with bcryptjs, 12 rounds
-- ============================================
-- NOTE: Run this AFTER setting up the database tables.
-- The password hash below is for 'admin123'
INSERT INTO users (name, email, password_hash, phone, role) VALUES
('Admin', 'naturamotherandbabycare@gmail.com', '$2a$12$jupX4VW/UVwYlJAM4yBPWe.gvmUwGX.tDn6EZ7fnk2Q3kwyF3di62', '+917984057063', 'admin');
