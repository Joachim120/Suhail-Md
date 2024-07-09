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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_32_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAzNixcbiAgICAgICAgMjA5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQyLFxuICAgICAgICA5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDNzZPNkdTNmZpbjBkcnhlZ1VQZGFtekNIcTUyajFMME92cVhlNXdMd0wwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0MU5GQ1ltMlFiU2xObFNtVlRYNUxBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhiOTc0Zjk0LWI3MTktNDhkYy1hOGMwLWIxZDE0YjA2M2NlMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICA2OCxcbiAgICAgIDE5MCxcbiAgICAgIDEsXG4gICAgICA5NyxcbiAgICAgIDEwLFxuICAgICAgMjA1LFxuICAgICAgMTQ1LFxuICAgICAgMjAxLFxuICAgICAgMjA5LFxuICAgICAgMTcsXG4gICAgICAyMTAsXG4gICAgICA5NSxcbiAgICAgIDEwMixcbiAgICAgIDEwMCxcbiAgICAgIDE5NyxcbiAgICAgIDEwNixcbiAgICAgIDgzLFxuICAgICAgMTE5LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAxNTQsXG4gICAgICAyNTEsXG4gICAgICAyMTcsXG4gICAgICAyNDQsXG4gICAgICAxNTUsXG4gICAgICAxNzAsXG4gICAgICAxOTgsXG4gICAgICAxMTMsXG4gICAgICA2OCxcbiAgICAgIDEwNyxcbiAgICAgIDE2NSxcbiAgICAgIDAsXG4gICAgICAzMCxcbiAgICAgIDE5OSxcbiAgICAgIDQ4LFxuICAgICAgMjEsXG4gICAgICAxMjAsXG4gICAgICAyMyxcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0llZDBNRUdFS21Lc3JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNnRSYXVabFkzOEYwdVVBcE43SFRzOFcvdGkzL2gwd01DanhaR1lDMjZ6UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNclJHWTJOaGU5czBnbGVFZEpXSTVWTGhuWnA3VGg5Y1cyT3daaXVxVHd0ZURqa1lhZGRYeGxSbUtEU3NMZ1dPSTR1ck9VV1h4MEk0dUhpbFl3VGdEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJINW5YV0lmbThtWUlTNFF2cUd1SG9ad3RqT29ld2JIRnRTdFRGV21CYnhGbDFtaWRFU204WStFL1VIRHVFaTQvc2V4bjBHOVFvZk9naDNHMHF1TStoQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1NTE1Njc4NToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTExMjY2Mzk5MzE2Mzg6MTNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTUxNTY3ODU6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ4NTE2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd5TVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3lMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWUZEbTRBM1gwMTU3UDNTb1dhbGpwZlR0SllWMkppaWpnWlp0VDVNeEdVQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQ4MjQyMDUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHeU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRR0c2Vjl4ellyTVhxRG9aR1pEZ3pMZmlkb0V1QWhLd2RCTjBTTXBoQW1JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDgyNDIwNTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5MjUxNzg5OTZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHeU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpbmlFaXFxUE5oNEtvSnJNVER0UHEwODhVSFN6eU9VN0FYQmF1ck40U20wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDgyNDIwNTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTkyNTMyMzU4OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd5Ty5qc29uIjogIntcImtleURhdGFcIjpcInZPZXBTSFY4SytiK2VBNkFLZzUxcWJlRVptTlBSd0lGNkJ5dGV3OHViWmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc0ODI0MjA1NCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3lQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRDBxeTY3NVZSU1VjUklVRFVwZ2dTRVRXazNYZmNsc3VnbFNzZXp5NTI5bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQ4MjQyMDU0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5OTQ4MTgwNDE0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3lRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN0NIbVRHOW5UazY5SnVzcXVhZGpDMTRRVUhXOEFUQ0FucEUwZTRGcm1PST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQ4MjQyMDU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5NTc3NTY3ODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MrX",


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
