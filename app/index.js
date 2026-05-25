const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {

  if (req.url === '/style.css') {
    const cssPath = path.join(__dirname, '../public/style.css');

    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading CSS');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });

    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Sanjay DevOps Portfolio</title>
      <link rel="stylesheet" href="/style.css">
    </head>

    <body>
      <div class="container">

        <h1>🚀 Sanjay's DevOps Portfolio</h1>

        <p class="tagline">
          Learning Linux, AWS, Docker, GitHub Actions & CI/CD
        </p>

        <div class="card">
          <h2>📚 Skills</h2>
          <ul>
            <li>Linux</li>
            <li>AWS EC2</li>
            <li>IAM</li>
            <li>VPC</li>
            <li>Docker</li>
            <li>Git & GitHub</li>
            <li>CI/CD</li>
          </ul>
        </div>

        <div class="card">
          <h2>🛠 Projects Completed</h2>
          <ul>
            <li>Linux Administration Project</li>
            <li>AWS VPC Setup</li>
            <li>EC2 SSH Configuration</li>
            <li>Dockerized Node.js App</li>
            <li>GitHub Actions CI Pipeline</li>
          </ul>
        </div>

        <div class="card">
          <h2>💻 Server Information</h2>
          <p><strong>Hostname:</strong> ${os.hostname()}</p>
          <p><strong>Platform:</strong> ${os.platform()}</p>
          <p><strong>Architecture:</strong> ${os.arch()}</p>
        </div>

        <div class="footer">
          Built with Node.js + Docker + GitHub Actions
        </div>

      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});