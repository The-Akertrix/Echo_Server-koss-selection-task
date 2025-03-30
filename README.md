<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Echo Server - README</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1, h2 { color: #333; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; }
        code { font-family: Consolas, monospace; color: #d63384; }
        ul { list-style-type: square; }
    </style>
</head>
<body>
    <h1>Echo Server (Node.js + EJS)</h1>
    <p>This project is a part of task given by Kharagpur Open Source Society.  </p>
    
    <h2>🚀 Features</h2>
    <ul>
        <li>✅ <strong>Unique session URL for each user</strong></li>
        <li>✅ <strong>Works without WebSockets</strong> (only Express, HTTP, and Node.js)</li>
        <li>✅ <strong>Lightweight and efficient</strong></li>
    </ul>

    <h2>🛠️ Tech Stack</h2>
    <ul>
        <li><strong>Node.js</strong> (Backend)</li>
        <li><strong>Express.js</strong> (Routing & Server)</li>
        <li><strong>EJS</strong> (Templating Engine)</li>
        <li><strong>Vanilla JavaScript, CSS</strong> (Frontend)</li>
    </ul>

    <h2>⚙️ How It Works</h2>
    <ol>
        <li>The user can send messages, which the server <strong>echoes back</strong> dynamically.</li>
        <li>Each session remains <strong>independent</strong> without explicit backend storage.</li>
    </ol>

    <h2>📦 Installation & Setup</h2>
            <li>After cloning project , to run server ,run "node app" .</li>
        <li> You can view frontend at localhost port 3000 just by surfing "http://localhost:3000/echo-server" in browser.</li>
       

    <h2>🔒 Future Improvements</h2>
    <ul>
        <li>🔹 Import websockets features  to give chating experience with server.</li>
        <li>🔹 Improving UI/UX for a better user experience.</li>
        <li>🔹 Adding optional authentication for session tracking.</li>
        <li>🔹 Adding cookies to enhance functionality</li>
      
    </ul

    
</body>
</html>
