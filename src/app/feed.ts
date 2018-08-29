export class Feed {
        public id: string;
        public title: string;
        public short: string;
        public trading_tips: string;
        public blacklist: string[];
        public whitelist?: any;
        public text: string;
        public pair: string[];
        public pair_: string;
        public type: string;
        public type_: string;
        public direction: string;
        public direction_: string;
        public recommendation: string;
        public recommendation_: string;
        public in_points: string;
        public take_profit: string;
        public stop_loss: string;
        public key_levels: string;
        public rev_points?: any;
        public alt_recommendation: string;
        public alt_recommendation_: string;
        public alt_in_points: string;
        public alt_take_profit: string;
        public alt_stop_loss: string;
        public alt_key_levels: string;
        public alt_rev_points?: any;
        public is_expired: string;
        public is_expired_: string;
        public seo_title?: any;
        public seo_description?: any;
        public seo_keywords?: any;
        public img: string;
        public lang: string;
        public created_at: string;
        public rel_id: string;
        public allow: string;
        public sms_sending_signals: string;
        public strategy: string;
        public strategy_text: string;
        public author: string;
        public guest_analyst?: any;
        public is_strategy: boolean;        
        public volume_analysis_type?: any;
        public volume_analysis_type_?: any;
        public volume_analysis_entry_point?: any;
        public volume_analysis_stop_loss?: any;
        public volume_analysis_take_profit?: any;
        public volume_analysis_support_level?: any;
        public volume_analysis_resistance_level?: any;
        public volume_analysis_duration_open_position?: any;
        public volume_analysis_duration_open_position_?: any;
        public volume_analysis_duration_open_position_hours?: any;
        public volume_analysis_justification?: any;
        public allowed_languages: string[];
}

export interface Record {
	[id: string]: Feed; 
}