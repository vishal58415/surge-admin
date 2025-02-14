import { body } from "express-validator";

export const UserValidation = () => {
  // customLog("UserValidation call ");
  return [
    body("username")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("username is Required!")
      .bail(),
    body("password")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("password is Required!")
      .bail()
  ];
};

export const GenerateTokenValidation = () => {
  // customLog("GenerateTokenValidation call ");
  return [
    body("api_totp")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Totp is Required!")
      .bail()
  ];
};

export const UpdateTokenValidation = () => {
  // customLog("UpdateTokenValidation call ");
  return [
    body("api_token")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Token is Required!")
      .bail()
  ];
};

export const UpdatePsValidation = () => {
  return [
    body("insId")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Id is Required!")
      .bail(),
    body("insStatus")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Status is Required!")
      .bail()
  ];
};

export const updateInstrumentPositionExitModeValidation = () => {
  return [
    body("insId")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Id is Required!")
      .bail(),
    body("insPeMode")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("PeMode is Required!")
      .bail()
  ];
};

export const createNoteValidation = () => {
  return [
    body("note_title")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Title is Required!")
      .bail(),
    body("note_description")
      .trim()
      .not(),
    body("note_link")
      .trim()
      .not()
  ];
};

export const updateIndexInfo = () => {
  return [
    body("index_id")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Id is Required!")
      .bail(),
    body("index_lot_qty")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Lot Qty is Required!")
      .isInt()
      .withMessage('Only Numeric allowed')
      .bail(),
    body("index_trading_capital")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Capital is Required!")
      .isInt()
      .withMessage('Only Numeric allowed')
      .bail(),
    body("index_position_status")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Position Status is Required!")
      .isInt()
      .withMessage('Only Numeric allowed')
      .bail(),
    body("index_is_tradable")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Is Traable is Required!")
      .isInt()
      .withMessage('Only Numeric allowed')
      .bail(),
  ];
};

export const updateAppConfigsInfo = () => {
  return [
    body("app_config_name")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Config Name is Required!")
      .bail(),
    body("app_config_value")
      .trim()
      .bail(),
  ];
};

export const updateGeneralConfigsInfo = () => {
  return [
    body("general_config_name")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Config Name is Required!")
      .bail(),
    body("general_config_value")
      .trim()
      .bail(),
  ];
};

export const upsertRedisKeyInfo = () => {
  return [
    body("redis_key_name")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Redis Key Name is Required!")
      .bail(),
    body("redis_key_type")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Redis Key Type is Required!")
      .bail(),
    body("redis_key_value")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Redis Key Value is Required!")
      .bail(),
  ];
};

export const updateIndexStrikeInfo = () => {
  return [
    body("index_name")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Index is Required!")
      .bail(),
    body("index_mon_max_ltp")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Mon Ltp is Required!")
      .isInt()
      .withMessage('Mon Only Numeric allowed')
      .bail(),
    body("index_tue_max_ltp")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Tue is Required!")
      .isInt()
      .withMessage('Tue Only Numeric allowed')
      .bail(),
    body("index_wed_max_ltp")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Wed is Required!")
      .isInt()
      .withMessage('Wed Only Numeric allowed')
      .bail(),
    body("index_thurs_max_ltp")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Thu is Required!")
      .isInt()
      .withMessage('Thu Only Numeric allowed')
      .bail(),
    body("index_fri_max_ltp")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Fri is Required!")
      .isInt()
      .withMessage('Fri Only Numeric allowed')
      .bail(),
  ];
};

export const updateFetInfo = () => {
  return [
    body("fet_symbol")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Symbol is Required!")
      .bail(),
    body("fet_start_time")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Start Time is Required!")
      .bail(),
    body("fet_end_time")
      .trim()
      .not()
      .isEmpty()
      .withMessage("End Time is Required!")
      .bail()
  ];
};

export const getOptionChainValidation = () => {
  return [
    body("index_symbol")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Symbol is Required!")
      .bail()
  ];
};

export const insRsLevelsValidation = () => {
  return [
    body("insTk")
      .trim()
      .not()
      .isEmpty()
      .withMessage("insTk is Required!")
      .bail()
  ];
};

export const insPCRValidation = () => {
  return [
    body("index_symbol")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Symbol is Required!")
      .bail(),
    body("interval")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Interval is Required!")
      .bail(),
  ];
};

export const insOiValidation = () => {
  return [
    body("index_symbol")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Symbol is Required!")
      .bail(),
    body("interval")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Interval is Required!")
      .bail(),
  ];
};

export const insLcValidation = () => {
  return [
    body("index_symbol")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Symbol is Required!")
      .bail()
  ];
};

export const insMarketTradeValidation = () => {
  return [
    body("index_symbol")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Symbol is Required!")
      .bail(),
    body("interval")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Interval is Required!")
      .bail(),
  ];
};

export const submitMarketAnalysisValidation = () => {
  return [
    body("ins_symbol")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Instrument is Required!")
      .bail(),
    body("market_analysis_date")
      .trim()
      .bail(),
    body("market_opening")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Market Opening is Required!")
      .bail(),
    body("market_trend")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Market Trend is Required!")
      .bail(),
    body("market_opening_reason")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Market Opening Reason is Required!")
      .bail(),
    body("day_analysis")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Day Analysis is Required!")
      .bail(),
    body("next_day_analysis")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Next Day Analysis is Required!")
      .bail(),
  ];
};
