//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "330603277099";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RCMklDYjJhK0ZRdkhSc09hNjkvYUdGcWNIMThMdHdmOHFvMUgwWW5Vdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL25QRFVUdjRPUGNXNDN6YVBuU1pXNCt0TFEzZkJ5UGFUeFZNWDZuOEIxYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTTBCanpHOGYwcVZhcWlhYkJZM2YveWYrUWhpSURzUEtMampzQWE1dzJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1MnVWeGJuSVVmbllXMFJ1VWdrYU1ORTFIcjQ3UUg4NHNMZWdCWEs3SFY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDNmErWXV6MXF4M2kxeERVQ0dqazZtdGNiWGtSeFd0MERGNzd5NEt1bXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR0b2pQSGQweEt5NTRiZDhOUVdHcVhxaFk1bDd5alBnbjNBNEFjRVRyRVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk81WUVEa1piUDQ1dW9MVzBwRWlmMGhES3h0UkVHd3p4aDVzQVhoYXMyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3ZSbEJES2RDOVdzL1Rpck1ZVkZzNEpyMzQ4UmZZQlg1S2RpQk5aa3FYZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNHdmh0bDN1Yk00c29oMU9HQzFkQTdDVThkNmY5NmVPVjh1bFhOQlBvaUprZnZKVVJWbWhBNlk5TldqRDJkbUJtYlozZXFNb3J0YnNha1BvZmRSeGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6IlZUV21pZWFMeUJJak9uYldjOWRqc3k5cm1Fc3JjNDZxNXJCeDZEajVsVm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJta3NXREExU0hpMU05azM4a1doVmciLCJwaG9uZUlkIjoiOGJmZWQ0MDQtMWE1OC00MDdlLTk2NTAtM2RkMjc5ODZmOWFiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF4a2N1anFGL09OZllwK1ZWMm1mZzFMMVdQVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsTFBiTjNJSlNWeHZxUG5IZG5GdFJua3FFalE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUFQRlZXRVkiLCJtZSI6eyJpZCI6IjMzNjAzMjc3MDk5OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6In53aWx+In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJclBnTTBJRUt6QzdyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFUHU4VDh3dy9YVEVhb01IWXhwT0w0ZkkrU0J2dWxtay9SYzVxY2FOZGhBPSIsImFjY291bnRTaWduYXR1cmUiOiI1WW85Q1J6Q1A1c3JseTZPcEdQczQzNGdhQ0h2amNHWFY1ZTZreno4MWVCNUFVZnhnaTFWdzJua3BrdFEzQnQ0TUMwRUhiMEZwUW5UZzc4Rktob1Jodz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNWtuek15WFJqTlRhUVE1ditaM0doRXl6TlgvRFpMMzNMZldKcnpnLzFwY25yMlBRU2VZRm9jYkhINWlvVE4xUWF4Si93OCswVEdmaHVPS0NXY3Z1Z3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzMzYwMzI3NzA5OToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSRDd2RS9NTVAxMHhHcURCMk1hVGkrSHlQa2diN3BacFAwWE9hbkdqWFlRIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM1NzI1MzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFVTIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "eddy_wilfried",
  ownername: process.env.OWNER_NAME || "eddy_wilfried",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
