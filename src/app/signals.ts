    export class Signals {
        ma10: string;
        ma20: string;
        ma50: string;
        ma100: string;
        macd: string;
        bbands: string;
        ichimoku: string;
        stochastic: string;
        williams: string;
        zigzag: string;
        pair: string;
        pair_: string;
        group_id: number;
        group_name: string;
        group_actual_time_hours: number;
        date: string;
        recommendation: string;
        recommendation_text: string;
        is_actual: number;
        sort: string;
        allowed_languages: string[];
    }

    export class MultSignals {
        pair: string;
        signal: Signals;
    }