import express from "express";
import { createServer as createViteServer } from "vite";
import { google } from "googleapis";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Google Sheets API Setup
  // IMPORTANT: The user must provide these credentials in .env
  const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || "1r9joDB3VKnSwRvEr55kZjJ-UAo5yZCg6HStha-gP75o";
  
  // Try to initialize Google Auth only if credentials exist
  let sheets: any = null;
  try {
    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle newlines in env var
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      sheets = google.sheets({ version: 'v4', auth });
    }
  } catch (error) {
    console.warn("Google Sheets API initialization failed (credentials missing?)", error);
  }

  // API Route for Form Submission
  app.post("/api/submit-form", async (req, res) => {
    if (!sheets) {
      return res.status(500).json({ error: "Google Sheets integration not configured on server." });
    }

    const { name, phone, email } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "Página1!A:C", // Adjust sheet name if necessary
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[name, phone, email, new Date().toISOString()]],
        },
      });
      res.json({ success: true, message: "Data saved to Google Sheet" });
    } catch (error: any) {
      console.error("Error saving to Google Sheet:", error);
      res.status(500).json({ error: "Failed to save data", details: error.message });
    }
  });

  // Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
