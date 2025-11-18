const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Uji Kompetensi Sistem Integrator</title>
        <style>
            /* CSS untuk membuat tampilan bagus */
            body {
                font-family: 'Arial', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f4f7f6; /* Latar belakang lembut */
            }
            .container {
                text-align: center;
                padding: 40px;
                border-radius: 12px;
                background-color: #ffffff;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* Bayangan elegan */
                max-width: 500px;
                width: 90%;
            }
            h1 {
                color: #2c3e50; /* Warna gelap untuk judul utama */
                margin-bottom: 10px;
                font-size: 2.5em;
            }
            h2 {
                color: #16a085; /* Warna hijau teal yang segar */
                margin-bottom: 25px;
                font-size: 1.5em;
            }
            p {
                color: #7f8c8d;
                font-size: 1.1em;
                margin-top: 30px;
            }
            .version-tag {
                display: inline-block;
                padding: 5px 15px;
                background-color: #ecf0f1;
                color: #34495e;
                border-radius: 50px;
                font-weight: bold;
                font-size: 0.9em;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>🎉 Selamat!</h2>
            <h1>Uji Kompetensi System Integrator Berhasil</h1>
            <p>Implementasi berhasil dikerjakan. Aplikasi web sederhana ini menunjukkan bahwa sistem Anda berfungsi dengan baik.</p>
            <span class="version-tag">Versi: 1.0 (Improved Look)</span>
        </div>
    </body>
    </html>
    `;

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});