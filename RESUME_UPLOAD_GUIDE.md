# Resume Upload Guide

## How to Change Your Resume

To upload a new resume and make it available for download:

### Step 1: Add Your Resume File
1. Place your new PDF resume file in the `public/` folder
2. Name it something descriptive (e.g., `john-doe-resume.pdf`)

### Step 2: Update the Configuration
1. Open `src/data/profile.js`
2. Update the `resumeFileName` field with your new file name:
   ```javascript
   resumeFileName: "your-new-resume.pdf",
   ```

### Step 3: Remove Old Resume (Optional)
- Delete the old resume file from the `public/` folder to keep it clean

## Example
If you want to upload a resume named `updated-resume-2024.pdf`:

1. Copy `updated-resume-2024.pdf` to `public/updated-resume-2024.pdf`
2. In `src/data/profile.js`, change:
   ```javascript
   resumeFileName: "updated-resume-2024.pdf",
   ```
3. Save the file and refresh your browser

The download button will now serve your new resume!

## Important Notes
- Resume files must be in the `public/` folder (not `src/Public/`)
- Only PDF files are recommended for professional resumes
- File names should not contain spaces or special characters (use hyphens or underscores)