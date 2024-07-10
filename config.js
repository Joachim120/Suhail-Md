const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237697615729";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_02_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDcyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgzLFxuICAgICAgICA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MixcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUXBWY3FCaWVJY0NobWpjbmcrL0pPQVR0d1RSMDhDdEg4Nlo4amgyUThjYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVnBrZXJlN2hSYnkxTFBIdkVxOUNCQVwiLFxuICBcInBob25lSWRcIjogXCJkMjUxM2FkYi05ZDVmLTQ1OGEtYTJhZS00MDg2YTcyYmE2ODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAxMDMsXG4gICAgICAzMSxcbiAgICAgIDYzLFxuICAgICAgMTE2LFxuICAgICAgMTkzLFxuICAgICAgMjMxLFxuICAgICAgMTQyLFxuICAgICAgMTY3LFxuICAgICAgMjM1LFxuICAgICAgNTIsXG4gICAgICA3MCxcbiAgICAgIDEyOSxcbiAgICAgIDE2NSxcbiAgICAgIDIwOCxcbiAgICAgIDE4MixcbiAgICAgIDE5NCxcbiAgICAgIDY5LFxuICAgICAgMzksXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgMTMxLFxuICAgICAgMjQxLFxuICAgICAgODYsXG4gICAgICA4MyxcbiAgICAgIDE4NixcbiAgICAgIDI0OCxcbiAgICAgIDI0LFxuICAgICAgMjYsXG4gICAgICAxOSxcbiAgICAgIDI2LFxuICAgICAgMTYwLFxuICAgICAgOTgsXG4gICAgICAwLFxuICAgICAgMTI5LFxuICAgICAgMjUzLFxuICAgICAgMTM2LFxuICAgICAgMTY1LFxuICAgICAgMTg0LFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1dWSEhQTDNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5NzYxNTcyOToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDM5ODA5MDEzNzYwOTY6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1heElFQ0VNQ3h0TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzOFdsYU5jNWRCbEpMcjNnMHU0aGhzTk5MaFJnYkkrNm82WmJtQjhYRVhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9rc0psMzVDdWpmTUhGYTRMaHhyYkRWOStQckFwajhXSTlVQjV3N0ZOZkh3QzZ6V3NlMEhOUnhDbTBHZVJQMFhrYWo2TnpCcDRNMGczRm1UNUgrRENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInB1WndnVHJhZHE0U3o1ZTk4MjBlaUR6Yjkzb0FBQnNpcjV5NitzM3piOTkxdEcrL3ZpQm43aFpveHR2VlhwRUN5ci9uSmhmUjMxOGNqYTRxQm00dmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5NzYxNTcyOToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTIyOTQ4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mr X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
