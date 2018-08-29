export class Event {
    time_value: string;
    previous_value: string;
    actual_value: string;
    forecast_value: string;
}

export class Calendar {
	id: string;
    time: string;
    country_code: string;
    country_name: string;
    event: string;
    priority: string;
    priority_: string;
    period?: any;
    previous?: any;
    forecast?: any;
    actual?: any;
    events?: Event[];
    lang: string;
    event_description?: string;
    event_source?: any;
    created_at: string;
    allowed_languages: string[];

}

