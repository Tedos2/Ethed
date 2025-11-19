# Google Sheets Integration - Setup Instructions

## What Was Done

I've successfully integrated your CTA form with Google Sheets. Here's what was implemented:

### 1. **Installed Dependencies**
- Added `googleapis` package for Google Sheets API integration

### 2. **Created API Route**
- Created `/src/app/api/submit-form/route.ts`
- This handles form submissions and sends data to Google Sheets
- Includes error handling and validation

### 3. **Updated CTABanner Component**
- Modified `/src/components/sections/CTABanner.tsx`
- Added form submission logic that sends data to the API
- Added loading states and success/error feedback
- Form fields are cleared after successful submission

### 4. **Created Documentation**
- Created `GOOGLE_SHEETS_SETUP.md` with detailed setup instructions
- Created `.env.local.example` as a template for credentials

---

## How to Complete the Setup

### Step 1: Create Google Cloud Project & Enable API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### Step 2: Create Service Account

1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Name it (e.g., "ethed-form-handler")
4. Click "Create and Continue"
5. Skip optional steps and click "Done"

### Step 3: Create Service Account Key

1. Click on the service account you created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose **JSON** format
5. Click "Create" - a JSON file will be downloaded

### Step 4: Share Your Google Sheet

1. Open your sheet: https://docs.google.com/spreadsheets/d/1qtwo0QYrZGbHdmPghNlNFedJfMbvDlFEuTY6KOlmJf4/edit
2. Click the "Share" button
3. Copy the service account email from the downloaded JSON file
   - It looks like: `xxx@xxx.iam.gserviceaccount.com`
4. Paste it in the share dialog
5. Set permission to **Editor**
6. **Uncheck** "Notify people"
7. Click "Share"

### Step 5: Set Up Environment Variable

1. Open the JSON file you downloaded in Step 3
2. Copy the **ENTIRE** JSON content (should be one long line)
3. Create a file named `.env.local` in your project root:

```bash
# In your terminal, at the project root:
touch .env.local
```

4. Open `.env.local` and add this line (paste your actual JSON):

```
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"your-project","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"xxx@xxx.iam.gserviceaccount.com",...}
```

**Important:** The entire JSON must be on ONE line with NO line breaks!

### Step 6: Verify Sheet Structure

Your Google Sheet should have this header row (row 1):
- **Column A:** שם מלא (Full Name)
- **Column B:** טלפון (Phone)
- **Column C:** עיסוק (Business Field)
- **Column D:** מקור ליד (Lead Source/Timestamp)

The form data will automatically append to new rows starting from row 2.

### Step 7: Restart Development Server

```bash
# Stop the current dev server (Ctrl+C)
# Then restart it:
npm run dev
```

### Step 8: Test the Integration

1. Open your site: http://localhost:3000
2. Scroll to the CTA form
3. Fill in the fields:
   - שם (Name)
   - טלפון (Phone)
   - תחום העסק (Business Field)
4. Click "שליחה" (Submit)
5. You should see a success message
6. Check your Google Sheet - a new row should appear!

---

## Troubleshooting

### Error: "Requested entity was not found"
- **Solution:** Make sure you shared the Google Sheet with the service account email (step 4)
- Double-check the spreadsheet ID in the code

### Error: "Invalid credentials"
- **Solution:**
  - Verify the JSON in `.env.local` is complete and valid
  - Make sure there are no extra spaces or line breaks
  - Restart your dev server after adding the env variable

### No data appearing in the sheet
- **Solution:**
  - Check browser console for errors (F12 > Console tab)
  - Check your terminal/server logs
  - Verify the sheet name is "Sheet1" (or update the code if different)

### Form shows error message
- **Solution:**
  - Check that all fields are filled out
  - Verify the `.env.local` file exists and is formatted correctly
  - Make sure the dev server restarted after adding credentials

---

## File Structure

```
/Users/tedos/Documents/GitHub/Ethed/
├── .env.local                          # Your credentials (DO NOT COMMIT)
├── .env.local.example                  # Template for credentials
├── GOOGLE_SHEETS_SETUP.md             # Detailed setup guide
├── SETUP_INSTRUCTIONS.md              # This file
├── src/
│   ├── app/
│   │   └── api/
│   │       └── submit-form/
│   │           └── route.ts           # API handler
│   └── components/
│       └── sections/
│           └── CTABanner.tsx          # Updated form component
```

---

## Security Notes

- ✅ `.env.local` is already in `.gitignore` - it won't be committed
- ✅ The service account has minimal permissions (only Sheets access)
- ✅ Form data is validated before submission
- ✅ API route includes error handling

---

## Next Steps

Once setup is complete:
1. Test the form multiple times to ensure it works consistently
2. Consider adding a success modal instead of alert()
3. Consider adding email notifications when forms are submitted
4. Monitor your Google Sheets for incoming leads!

---

## Support

If you need help with setup, refer to:
- `GOOGLE_SHEETS_SETUP.md` - Step-by-step guide
- [Google Cloud Console](https://console.cloud.google.com/)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
