<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/16xt0YzjG9JvVJFwVf8suSwyzV-KVywex

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

This project is configured for easy deployment to Vercel:

1. **Push your code to GitHub** (or GitLab/Bitbucket)

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository
   - Vercel will automatically detect the Vite framework

3. **Configure Environment Variables:**
   - In your Vercel project settings, go to "Environment Variables"
   - Add `GEMINI_API_KEY` with your Gemini API key value
   - Get your API key from: https://makersuite.google.com/app/apikey

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app
   - Your site will be live at `https://your-project.vercel.app`

**Note:** The project uses `BrowserRouter` for clean URLs. All routes are configured to work with Vercel's SPA routing via `vercel.json`.
