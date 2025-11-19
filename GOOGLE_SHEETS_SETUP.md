# Google Sheets Integration Setup Guide

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" at the top, then "New Project"
3. Name your project (e.g., "Ethed Landing Page")
4. Click "Create"

## Step 2: Enable Google Sheets API

1. In your project, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Create a Service Account

1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Name it (e.g., "ethed-form-handler")
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Create Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. Click "Create" - this will download a JSON file

## Step 5: Share Your Google Sheet

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1qtwo0QYrZGbHdmPghNlNFedJfMbvDlFEuTY6KOlmJf4/edit
2. Click "Share" button
3. Copy the service account email from the JSON file (looks like: `xxx@xxx.iam.gserviceaccount.com`)
4. Paste it in the share dialog
5. Give it "Editor" permissions
6. Uncheck "Notify people"
7. Click "Share"

## Step 6: Set Up Environment Variable

1. Open the JSON file you downloaded in step 4
2. Copy the ENTIRE contents (it should be one line of JSON)
3. Create a file named `.env.local` in your project root
4. Add this line (replace with your actual JSON):

```
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"..."}
```

**Important:** Make sure the entire JSON is on one line with no line breaks!

## Step 7: Verify Your Sheet Structure

Your Google Sheet should have these columns in row 1:
- Column A: שם מלא (Full Name)
- Column B: טלפון (Phone)
- Column C: עיסוק (Business Field)
- Column D: מקור ליד (Lead Source / Timestamp)

The form data will be automatically appended to new rows starting from row 2.

## Step 8: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Fill out the form on your website
3. Submit it
4. Check your Google Sheet - a new row should appear!

## Troubleshooting

**Error: "Requested entity was not found"**
- Make sure you shared the sheet with the service account email
- Double-check the spreadsheet ID in the code matches your sheet

**Error: "Invalid credentials"**
- Verify the JSON in `.env.local` is valid and complete
- Make sure there are no extra spaces or line breaks
- Restart your dev server after adding the env variable

**No data appearing:**
- Check the browser console for errors
- Check your server logs
- Verify the sheet name matches (default is "Sheet1")
