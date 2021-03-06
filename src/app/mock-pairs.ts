import { Pair } from './pair';

export const PAIRS: Pair[] =[
	{name: "EUR/USD", symbol: "EURUSD", country: ["us","eu"] }, 
	{name: "GBP/USD", symbol: "GBPUSD", country: ["gb","us"] }, 
	{name: "USD/JPY", symbol: "USDJPY", country: ["us","jp"] }, 
	{name: "AUD/USD", symbol: "AUDUSD", country: ["au","us"] }, 
	{name: "NZD/USD", symbol: "NZDUSD", country: ["nz","us"] }, 
	{name: "USD/CAD", symbol: "USDCAD", country: ["us","ca"] }, 
	{name: "USD/CHF", symbol: "USDCHF", country: ["us","cn"] }, 
	{name: "EUR/JPY", symbol: "EURJPY", country: ["eu","jp"] }, 
	{name: "GBP/JPY", symbol: "GBPJPY", country: ["gb","jp"] }, 
	{name: "AUD/JPY", symbol: "AUDJPY", country: ["au","jp"] }, 
	{name: "EUR/GBP", symbol: "EURGBP", country: ["eu","gb"] }, 
	{name: "USD/TRY", symbol: "USDTRY", country: ["us","tr"] }, 
	{name: "EUR/TRY", symbol: "EURTRY", country: ["eu","tr"] }, 
	{name: "GBP/TRY", symbol: "GBPTRY", country: ["gb","tr"] }, 
	{name: "Silver", symbol: "Silver", country: ["us","ru"] }, 
	{name: "BRENT", symbol: "BRENT", country: ["us","ru"] }, 
	{name: "USCrude", symbol: "USCrude", country: ["us","ru"] }, 
	{name: "Gold", symbol: "XAUUSD", country: ["us","ru"] }, 
/*	{name: "Stocks", symbol: "Stocks" }, 
	{name: "FTSE", symbol: "FTSE" }, 
	{name: "FDAX", symbol: "FDAX" }, 
	{name: "SX5E", symbol: "SX5E" }, 
	{name: "SPX", symbol: "SPX" }, 
	{name: "YM", symbol: "YM" }, 
	{name: "CAC", symbol: "CAC" }, 
	{name: "NQ", symbol: "NQ" }, 
	{name: "#AFKS", symbol: "#AFKS" }, 
	{name: "#BANE", symbol: "#BANE" }, 
	{name: "#BANEP", symbol: "#BANEP" }, 
	{name: "#ALRS", symbol: "#ALRS" }, 
	{name: "#AFLT", symbol: "#AFLT" }, 
	{name: "#TATN", symbol: "#TATN" }, 
	{name: "#TATNP", symbol: "#TATNP" }, 
	{name: "#TRNFP", symbol: "#TRNFP" }, 
	{name: "#NVTK", symbol: "#NVTK" }, 
	{name: "#IRAO", symbol: "#IRAO" }, 
	{name: "#RASP", symbol: "#RASP" }, 
	{name: "#HYDR", symbol: "#HYDR" }, 
	{name: "#FEES", symbol: "#FEES" }, 
	{name: "#RSTI", symbol: "#RSTI" }, 
	{name: "#CHMF", symbol: "#CHMF" }, 
	{name: "#GAZP", symbol: "#GAZP" }, 
	{name: "#GMKN", symbol: "#GMKN" }, 
	{name: "#LKOH", symbol: "#LKOH" }, 
	{name: "#MAGN", symbol: "#MAGN" }, 
	{name: "#MTSS", symbol: "#MTSS" }, 
	{name: "#MGNT", symbol: "#MGNT" }, 
	{name: "Московская биржа", symbol: "#MOEX" }, 
	{name: "#MFON", symbol: "#MFON" }, 
	{name: "#MTLR", symbol: "#MTLR" }, 
	{name: "#MVID", symbol: "#MVID" }, 
	{name: "#NLMK", symbol: "#NLMK" }, 
	{name: "#SBER", symbol: "#SBER" }, 
	{name: "#PHOR", symbol: "#PHOR" }, 
	{name: "#PLZL", symbol: "#PLZL" }, 
	{name: "#POLY", symbol: "#POLY" }, 
	{name: "#ROLO", symbol: "#ROLO" }, 
	{name: "#ROSN", symbol: "#ROSN" }, 
	{name: "#RTKM", symbol: "#RTKM" }, 
	{name: "#RUALR", symbol: "#RUALR" }, 
	{name: "#SIBN", symbol: "#SIBN" }, 
	{name: "#SNGS", symbol: "#SNGS" }, 
	{name: "#UPRO", symbol: "#UPRO" }, 
	{name: "#URKA", symbol: "#URKA" }, 
	{name: "#VTBR", symbol: "#VTBR" }, 
	{name: "#YNDX", symbol: "#YNDX" }, 
	{name: "AUDCAD", symbol: "AUDCAD" }, 
	{name: "AUDCHF", symbol: "AUDCHF" }, 
	{name: "AUDNZD", symbol: "AUDNZD" }, 
	{name: "CADCHF", symbol: "CADCHF" }, 
	{name: "CADJPY", symbol: "CADJPY" }, 
	{name: "CHFJPY", symbol: "CHFJPY" }, 
	{name: "EURAUD", symbol: "EURAUD" }, 
	{name: "EURCAD", symbol: "EURCAD" }, 
	{name: "EURCHF", symbol: "EURCHF" }, 
	{name: "EURNZD", symbol: "EURNZD" }, 
	{name: "EURPLN", symbol: "EURPLN" }, 
	{name: "EURRUB", symbol: "EURRUB" }, 
	{name: "GBPAUD", symbol: "GBPAUD" }, 
	{name: "GBPCAD", symbol: "GBPCAD" }, 
	{name: "GBPCHF", symbol: "GBPCHF" }, 
	{name: "GBPDKK", symbol: "GBPDKK" }, 
	{name: "GBPNZD", symbol: "GBPNZD" }, 
	{name: "GBPSEK", symbol: "GBPSEK" }, 
	{name: "GBPZAR", symbol: "GBPZAR" }, 
	{name: "NZDJPY", symbol: "NZDJPY" }, 
	{name: "USDCNH", symbol: "USDCNH" }, 
	{name: "USDCZK", symbol: "USDCZK" }, 
	{name: "USDDKK", symbol: "USDDKK" }, 
	{name: "USDHUF", symbol: "USDHUF" }, 
	{name: "USDMXN", symbol: "USDMXN" }, 
	{name: "USDNOK", symbol: "USDNOK" }, 
	{name: "USDPLN", symbol: "USDPLN" }, 
	{name: "USDRUB", symbol: "USDRUB" }, 
	{name: "USDSEK", symbol: "USDSEK" }, 
	{name: "USDSGD", symbol: "USDSGD" }, 
	{name: "USDZAR", symbol: "USDZAR" }, 
	{name: "HK50", symbol: "HK50" }, 
	{name: "NI225", symbol: "NI225" }, 
	{name: "IBEX35", symbol: "IBEX35" }, 
	{name: "ASX200", symbol: "ASX200" }, 
	{name: "EURCZK", symbol: "EURCZK" }, 
	{name: "EURDKK", symbol: "EURDKK" }, 
	{name: "EURHUF", symbol: "EURHUF" }, 
	{name: "EURNOK", symbol: "EURNOK" }, 
	{name: "EURSEK", symbol: "EURSEK" }, 
	{name: "GBPCZK", symbol: "GBPCZK" }, 
	{name: "GBPHUF", symbol: "GBPHUF" }, 
	{name: "GBPNOK", symbol: "GBPNOK" }, 
	{name: "GBPPLN", symbol: "GBPPLN" }, 
	{name: "USDILS", symbol: "USDILS" }, 
	{name: "XPTUSD", symbol: "XPTUSD" }, 
	{name: "XPDUSD", symbol: "XPDUSD" }, 
	{name: "NED25", symbol: "NED25" }, 
	{name: "SWISS2", symbol: "SWISS20" }, 
	{name: "#MMM", symbol: "#MMM" }, 
	{name: "#T", symbol: "#T" }, 
	{name: "#ADBE", symbol: "#ADBE" }, 
	{name: "#AA", symbol: "#AA" }, 
	{name: "#ADS", symbol: "#ADS" }, 
	{name: "#BABA", symbol: "#BABA" }, 
	{name: "#BOS3", symbol: "#BOS3" }, 
	{name: "#MO", symbol: "#MO" }, 
	{name: "#AXP", symbol: "#AXP" }, 
	{name: "#AAPL", symbol: "#AAPL" }, 
	{name: "#BMW", symbol: "#BMW" }, 
	{name: "#BAC", symbol: "#BAC" }, 
	{name: "#BA", symbol: "#BA" }, 
	{name: "CISCO", symbol: "#CSCO" }, 
	{name: "#CAT", symbol: "#CAT" }, 
	{name: "#EBAY", symbol: "#EBAY" }, 
	{name: "#XOM", symbol: "#XOM" }, 
	{name: "#FB", symbol: "#FB" }, 
	{name: "#GE", symbol: "#GE" }, 
	{name: "GOOGLE", symbol: "#GOOG" }, 
	{name: "#HPQ", symbol: "#HPQ" }, 
	{name: "#HD", symbol: "#HD" }, 
	{name: "#IBM", symbol: "#IBM" }, 
	{name: "#INTC", symbol: "#INTC" }, 
	{name: "#JPM", symbol: "#JPM" }, 
	{name: "Johnson & Johnson Service Inc.", symbol: "#JNJ" }, 
	{name: "#MA", symbol: "#MA" }, 
	{name: "#MCD", symbol: "#MCD" }, 
	{name: "#MSFT", symbol: "#MSFT" }, 
	{name: "#NFLX", symbol: "#NFLX" }, 
	{name: "#PYPL", symbol: "#PYPL" }, 
	{name: "#PFE", symbol: "#PFE" }, 
	{name: "#PG", symbol: "#PG" }, 
	{name: "#SNAP", symbol: "#SNAP" }, 
	{name: "#SBUX", symbol: "#SBUX" }, 
	{name: "#TSLA", symbol: "#TSLA" }, 
	{name: "#UTX", symbol: "#UTX" }, 
	{name: "#VZ", symbol: "#VZ" }, 
	{name: "#V", symbol: "#V" }, 
	{name: "#VOW", symbol: "#VOW" }, 
	{name: "#WMT", symbol: "#WMT" }, 
	{name: "#DIS", symbol: "#DIS" }, 
	{name: "Bitcoin", symbol: "Bitcoin" }, 
	{name: "Ethereum", symbol: "Ethereum" }, 
	{name: "ETHUSD", symbol: "ETHUSD" }, 
	{name: "BCHBTC", symbol: "BCHBTC" }, 
	{name: "BCHETH", symbol: "BCHETH" }, 
	{name: "BCHUSD", symbol: "BCHUSD" }, 
	{name: "DSHBTC", symbol: "DSHBTC" }, 
	{name: "DSHUSD", symbol: "DSHUSD" }, 
	{name: "ETCBTC", symbol: "ETCBTC" }, 
	{name: "ETCUSD", symbol: "ETCUSD" }, 
	{name: "BTCUSD", symbol: "BTCUSD" }, 
	{name: "ETHBTC", symbol: "ETHBTC" }, 
	{name: "ETHLTC", symbol: "ETHLTC" }, 
	{name: "LTCBTC", symbol: "LTCBTC" }, 
	{name: "LTCUSD", symbol: "LTCUSD" }, 
	{name: "XMRBTC", symbol: "XMRBTC" }, 
	{name: "XMRUSD", symbol: "XMRUSD" }, 
	{name: "XRPUSD", symbol: "XRPUSD" }, 
	{name: "XAIUSD", symbol: "XAIUSD" }, 
	{name: "ZECBTC", symbol: "ZECBTC" }, 
	{name: "ZECUSD", symbol: "ZECUSD" }, */
];
