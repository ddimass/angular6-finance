export class Cer {
    "from": string;
    "from_name": string;
    "to": string;
    "to_name": string;
    "exchange_rate": string;
    "refreshed": string;
    "timezone": string;
}

export class Resp {
    rcr: Cer;
}
