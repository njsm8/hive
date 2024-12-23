// types.ts
export interface DayPassDiscount {
    value: number;
    message: string;
  }
  
  export interface Workspace {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    google_maps_url?: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    description?: string | null;
    rules?: string | null;
    amenities?: string[];
    images: string[];
    working_hours_start: string;
    working_hours_end: string;
    contact_person_name?: string | null;
    facilities?: string | null;
    is_active: boolean;
    is_day_pass_enabled: boolean;
    day_pass_price: number;
    day_pass_discounts_percentage: Record<string, DayPassDiscount>;
    manager_id?: string | null;
    can_edit?: boolean;
  }
  