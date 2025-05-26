# Project Noble

## About the Project

This project is aiming to provide a virtual alternative to physical poker chips for in-person Texas Hold Em games. Users will be able to all join a game lobby on each of their devices seperately and the service will handle all of their chips, side pots, and winnings virtually. The card game will still be performed in person, but with users using their device as a chip management system.

This service is aiming to make poker more accessible to all.

## Dev Notes

This is the info page for Chip Champ. It will be built using Vite, React + Typescript, copying a django project that worked but became a mess and was difficult to deploy

## Deployment

This project is configured for deployment on Vercel. To deploy:

### Prerequisites
- A Vercel account
- Git repository (GitHub, GitLab, or Bitbucket)

### Deploy to Vercel

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in and click "New Project"
   - Import your Git repository

3. **Configure the project:**
   - Vercel will automatically detect this as a Vite project
   - Build Command: `npm run build` (automatically detected)
   - Output Directory: `dist` (automatically detected)
   - Install Command: `npm install` (automatically detected)

4. **Deploy:**
   - Click "Deploy" and Vercel will build and deploy your project
   - You'll get a live URL for your application

### Manual Deployment (Alternative)

If you prefer to deploy manually using Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

### Configuration Files

- `vercel.json`: Contains deployment configuration and routing rules for client-side routing
- `.vercelignore`: Specifies files to exclude from deployment

## PLEASE NOTE

This service will handle NO ACTUAL TRANSFERS OF MONEY!!! It will aim to show each user how much they owe the pot/have won by the time they decide to leave the game.

## Credits

[Adam Montgomery](adam-montgomery.ca)