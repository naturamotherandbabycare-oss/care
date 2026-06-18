import { createClient } from '@supabase/supabase-js';
import env from './env.js';

// In-Memory Database for local mock mode
const DB = {
  users: [
    {
      id: 'admin-uuid-1234',
      name: 'Admin',
      email: 'admin@naturababycare.in',
      password_hash: '$2a$12$jupX4VW/UVwYlJAM4yBPWe.gvmUwGX.tDn6EZ7fnk2Q3kwyF3di62', // admin123
      phone: '+919898809630',
      role: 'admin',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  services: [
    { id: '8d89e5a2-4c28-4e0e-92c2-75d3159dc8d1', name: 'Postnatal Mother Care', description: 'Comprehensive recovery support...', category: 'postnatal', price: 30000.0, duration_minutes: 180, is_active: true, created_at: new Date().toISOString() },
    { id: '3f46f3a3-b6d8-4a94-9b2f-92c13d8d6411', name: 'Newborn Baby Care', description: 'Expert newborn care...', category: 'baby', price: 18000.0, duration_minutes: 120, is_active: true, created_at: new Date().toISOString() },
    { id: '7a7b8c2c-8d1e-4f10-91a2-111111111111', name: 'Live-In Caretaker', description: 'Round-the-clock live-in support...', category: 'live-in', price: 45000.0, duration_minutes: 240, is_active: true, created_at: new Date().toISOString() },
    { id: '22222222-2222-2222-2222-222222222222', name: 'Online Pre & Postnatal Consultation', description: 'Expert video consultations...', category: 'consultation', price: 1500.0, duration_minutes: 45, is_active: true, created_at: new Date().toISOString() },
    { id: '33333333-3333-3333-3333-333333333333', name: 'Postnatal Nutrition', description: 'Customized meal preparation...', category: 'nutrition', price: 8000.0, duration_minutes: 120, is_active: true, created_at: new Date().toISOString() },
    { id: '44444444-4444-4444-4444-444444444444', name: 'Holistic Mental & Emotional Healing', description: 'A nurturing, whole-person approach...', category: 'healing', price: 2500.0, duration_minutes: 90, is_active: true, created_at: new Date().toISOString() },
    { id: '55555555-5555-5555-5555-555555555555', name: 'Postnatal Massage', description: 'Traditional and therapeutic...', category: 'massage', price: 1499.0, duration_minutes: 60, is_active: true, created_at: new Date().toISOString() },
    { id: '66666666-6666-6666-6666-666666666666', name: 'Trusted & Police Verified Nanny', description: 'We provide thoroughly background-checked...', category: 'nanny', price: 20000.0, duration_minutes: 180, is_active: true, created_at: new Date().toISOString() },
    { id: '77777777-7777-7777-7777-777777777777', name: 'Babysitting at Your Doorstep', description: 'Trusted, certified babysitters...', category: 'babysitting', price: 1200.0, duration_minutes: 120, is_active: true, created_at: new Date().toISOString() },
    { id: '88888888-8888-8888-8888-888888888888', name: 'Postnatal Yoga', description: 'Gentle, certified postnatal yoga...', category: 'yoga', price: 1200.0, duration_minutes: 60, is_active: true, created_at: new Date().toISOString() },
  ],
  bookings: [],
  contact_messages: [],
};

class MockQueryBuilder {
  constructor(table) {
    this.table = table;
    this.data = DB[table] || [];
    this.filters = [];
    this.sortField = null;
    this.ascending = true;
    this.offset = 0;
    this.limitVal = null;
    this.isSingle = false;
    this.isCount = false;
    this._result = undefined;
  }

  select(fields, options = {}) {
    if (options.count) {
      this.isCount = true;
    }
    return this;
  }

  eq(field, value) {
    this.filters.push({ field, value, operator: 'eq' });
    return this;
  }

  order(field, { ascending } = { ascending: true }) {
    this.sortField = field;
    this.ascending = ascending;
    return this;
  }

  range(from, to) {
    this.offset = from;
    this.limitVal = to - from + 1;
    return this;
  }

  limit(val) {
    this.limitVal = val;
    return this;
  }

  single() {
    this.isSingle = true;
    return this;
  }

  insert(record) {
    const records = Array.isArray(record) ? record : [record];
    const inserted = [];
    for (let r of records) {
      const newRecord = {
        id: r.id || `${this.table.substring(0, 3)}-${Math.random().toString(36).substring(2, 11)}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...r,
      };
      this.data.push(newRecord);
      inserted.push(newRecord);
    }
    this._result = Array.isArray(record) ? inserted : inserted[0];
    return this;
  }

  update(updateData) {
    const records = this._getFilteredData();
    for (let r of records) {
      Object.assign(r, updateData, { updated_at: new Date().toISOString() });
    }
    this._result = this.isSingle ? records[0] : records;
    return this;
  }

  _getFilteredData() {
    let result = [...this.data];
    for (let filter of this.filters) {
      if (filter.operator === 'eq') {
        result = result.filter((item) => {
          const val = item[filter.field];
          if (typeof val === 'string' && typeof filter.value === 'string') {
            return val.toLowerCase() === filter.value.toLowerCase();
          }
          return val === filter.value;
        });
      }
    }

    if (this.sortField) {
      result.sort((a, b) => {
        const valA = a[this.sortField];
        const valB = b[this.sortField];
        if (valA < valB) return this.ascending ? -1 : 1;
        if (valA > valB) return this.ascending ? 1 : -1;
        return 0;
      });
    }

    return result;
  }

  then(onfulfilled, onrejected) {
    let resultData = this._result;
    if (resultData === undefined) {
      resultData = this._getFilteredData();
    }

    const resolveJoins = (item) => {
      if (!item) return item;
      const copy = { ...item };
      if (this.table === 'bookings') {
        const user = DB.users.find((u) => u.id === item.user_id);
        if (user) {
          const { password_hash, ...uNoPass } = user;
          copy.users = uNoPass;
        }
        const service = DB.services.find((s) => s.id === item.service_id);
        if (service) {
          copy.services = service;
        }
      }
      return copy;
    };

    if (Array.isArray(resultData)) {
      resultData = resultData.map(resolveJoins);
      if (this.offset || this.limitVal) {
        const start = this.offset || 0;
        const end = this.limitVal ? start + this.limitVal : resultData.length;
        resultData = resultData.slice(start, end);
      }
      if (this.isSingle) {
        resultData = resultData[0] || null;
      }
    } else if (resultData) {
      resultData = resolveJoins(resultData);
    } else if (this.isSingle) {
      resultData = null;
    }

    const count = this._getFilteredData().length;
    const response = {
      data: resultData,
      error: null,
      count: this.isCount ? count : null,
    };

    return Promise.resolve(response).then(onfulfilled, onrejected);
  }
}

const isPlaceholder =
  !env.supabaseUrl ||
  env.supabaseUrl.includes('placeholder') ||
  env.supabaseUrl.includes('your-project') ||
  !env.supabaseAnonKey ||
  env.supabaseAnonKey.includes('placeholder') ||
  env.supabaseAnonKey.includes('your-supabase') ||
  env.supabaseAnonKey.includes('anon-key-here');

let supabase;
let supabaseAdmin;

if (isPlaceholder) {
  console.log('🔌 Running database in in-memory Mock Mode (no Supabase keys configured)');
  const mockClient = {
    from: (table) => new MockQueryBuilder(table),
  };
  supabase = mockClient;
  supabaseAdmin = mockClient;
} else {
  supabase = createClient(
    env.supabaseUrl,
    env.supabaseAnonKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  supabaseAdmin = createClient(
    env.supabaseUrl,
    env.supabaseServiceKey || env.supabaseAnonKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}

export { supabase, supabaseAdmin };
export default supabase;
