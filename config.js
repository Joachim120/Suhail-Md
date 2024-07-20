jeconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_54_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICA0MyxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxODksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxLFxuICAgICAgICA3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiODZycWs3WGNCT2k0SG9iZkJ4WDBsUWtIcGpDdDE4SHBHVWI4a2l6WDloYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibk4tNUlKLVBTQXVBWW5LanFfOHFnUVwiLFxuICBcInBob25lSWRcIjogXCIyNzQzOTVjZS1jZjRkLTQ3Y2QtODI0Zi1kOWI2OWNjNDExZjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMTI1LFxuICAgICAgMTY0LFxuICAgICAgMTMsXG4gICAgICAyMzQsXG4gICAgICAyMjEsXG4gICAgICAxNDIsXG4gICAgICAxMjQsXG4gICAgICAxNTYsXG4gICAgICA4OSxcbiAgICAgIDExOCxcbiAgICAgIDIwMSxcbiAgICAgIDEwNixcbiAgICAgIDY0LFxuICAgICAgMTAyLFxuICAgICAgMjA1LFxuICAgICAgMTE1LFxuICAgICAgMTc3LFxuICAgICAgMjM1LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgNjQsXG4gICAgICA0MCxcbiAgICAgIDIzMSxcbiAgICAgIDE0NixcbiAgICAgIDU5LFxuICAgICAgMjUyLFxuICAgICAgNCxcbiAgICAgIDI0OSxcbiAgICAgIDEyMyxcbiAgICAgIDE1MyxcbiAgICAgIDIzNCxcbiAgICAgIDQ1LFxuICAgICAgMjQ3LFxuICAgICAgNzksXG4gICAgICA1OCxcbiAgICAgIDE1NyxcbiAgICAgIDUsXG4gICAgICA3NCxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZYNUJMN1NZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTc2MTU3Mjk6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzOTgwOTAxMzc2MDk2OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l1YXhJRUNFS2lZdWJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMzhXbGFOYzVkQmxKTHIzZzB1NGhoc05OTGhSZ2JJKzZvNlpibUI4WEVYbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJETGhXMmRscjhiSzBTL2RJc2IyclJGWmRUZGk5SDhyZTVZbm1kSGZqOVpQc29NeGswQnREa3RNdlBwQW10K3ZoMDVrVzNMU3NKaVZqSkQ2NTdmbzNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2SVdpK3dVL09GbWM5QnYxL0J2ZFBKUG5DeVBabTN3bDNBSXUyaWJlVVZVK3h0aTRkOWpqMEdDcWkzUnhtbStXbmtWd1JKMXRCR2Z0T056NkY2dmZpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTc2MTU3Mjk6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYwMTY0NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
