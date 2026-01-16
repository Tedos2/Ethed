import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, businessField } = body;

    // Validate required fields
    if (!name || !phone || !businessField) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    // Get service account credentials from environment
    const spreadsheetId = process.env.GOOGLE_SHEET_ID || '1qtwo0QYrZGbHdmPghNlNFedJfMbvDlFEuTY6KOlmJf4';

    const credentials = JSON.parse(
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'
    );

    if (!credentials.client_email) {
      return NextResponse.json(
        { error: 'Google Service Account not configured' },
        { status: 500 }
      );
    }

    // Create auth client with Service Account
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Get the current timestamp in Israel timezone
    const timestamp = new Date().toLocaleString('he-IL', {
      timeZone: 'Asia/Jerusalem',
    });

    // Prepare the row data (columns A-D)
    // A: שם מלא, B: טלפון, C: תחום העסק, D: תאריך
    const values = [[name, phone, businessField, timestamp]];

    // Append the data to the sheet (A1 notation will auto-detect the sheet)
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:D', // Just specify columns, will use first sheet
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
