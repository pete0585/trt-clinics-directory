export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function generateListingSlug(clinicName: string, city: string, state: string): string {
  return slugify(`${clinicName} ${city} ${state}`)
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  if (cleaned.length === 11 && cleaned[0] === '1') {
    return `(${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
  }
  return phone
}

export function stateNameToSlug(state: string): string {
  return state.toLowerCase().replace(/\s+/g, '-')
}

export function cityToSlug(city: string): string {
  return city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export const US_STATES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri',
  MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
  OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
}

export function getStateName(abbr: string): string {
  return US_STATES[abbr.toUpperCase()] ?? abbr
}

export const TREATMENT_LABELS: Record<string, string> = {
  injections: 'Injections',
  pellets: 'Pellets',
  cream: 'Cream/Gel',
  oral: 'Oral',
  enclomiphene: 'Enclomiphene',
  peptides: 'Peptides',
}

export const CLINIC_TYPE_LABELS: Record<string, string> = {
  in_person: 'In-Person',
  telehealth: 'Telehealth',
  hybrid: 'In-Person + Telehealth',
}

export const CREDENTIAL_LABELS: Record<string, string> = {
  MD: 'MD (Physician)',
  DO: 'DO (Physician)',
  NP: 'NP (Nurse Practitioner)',
  PA: 'PA (Physician Assistant)',
}

export const PRICE_RANGE_LABELS: Record<string, string> = {
  budget: 'Budget-Friendly',
  moderate: 'Moderate',
  premium: 'Premium',
}
