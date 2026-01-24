# Marriage Memory 💍

A beautiful and intuitive web application to capture, store, and celebrate your most precious wedding memories. Share your special moments with loved ones and create lasting digital memories.

---

## 🌟 Features

- **Memory Submission Form** - Easy-to-use form for uploading wedding photos, videos, and stories
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Cloud Storage** - Secure storage using Supabase backend
- **Thank You Page** - Beautiful confirmation page after memory submission
- **Modern UI** - Clean and elegant interface with Bootstrap styling
- **Fast Performance** - Built with Vite for lightning-fast development and production builds

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/marriage-memory.git
   cd mirriage-memory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

---

## 📦 Project Structure

```
mirriage-memory/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation header
│   │   └── MemoryForm.jsx     # Memory submission form
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── ThankYou.jsx       # Confirmation page
│   │   ├── home.css           # Home page styles
│   │   └── thankyou.css       # Thank you page styles
│   ├── assets/                # Static assets
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global styles
│   ├── index.css              # Base styles
│   ├── main.jsx               # Entry point
│   └── supabaseClient.js      # Supabase configuration
├── public/                    # Public assets
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
└── eslint.config.js           # ESLint rules
```

---

## 🛠 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module reloading (HMR).

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality and style.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally before deployment.

---

## 🔧 Tech Stack

- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Bootstrap 5.3.8
- **Routing**: React Router DOM 7.12.0
- **Backend**: Supabase (PostgreSQL database)
- **Linting**: ESLint 9.39.1
- **Code Quality**: ESLint with React plugin rules

---

## 🎨 Customization

### Modify Styling
- Global styles are in `src/index.css` and `src/App.css`
- Component-specific styles are in their respective CSS files
- Bootstrap classes are used throughout for consistency

### Update Content
- Edit `src/pages/Home.jsx` for the landing page content
- Modify `src/components/MemoryForm.jsx` for form fields
- Update `src/components/Header.jsx` for navigation

---

## 📝 Environment Variables

Create a `.env.local` file with the following variables:

```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

These variables are used in `src/supabaseClient.js` to initialize the Supabase client.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel settings
4. Deploy with a single click

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `dist`
5. Add environment variables and deploy

### Deploy to GitHub Pages
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🐛 Troubleshooting

**Issue**: Supabase connection error
- **Solution**: Verify your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env.local`

**Issue**: Styles not loading
- **Solution**: Ensure Bootstrap is installed: `npm install bootstrap`

**Issue**: Port 5173 already in use
- **Solution**: Kill the process or specify a different port: `npm run dev -- --port 3000`

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 💬 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Support

For questions or support, please reach out to: support@marriagememory.com

---

## 🙏 Acknowledgments

- Built with React and Vite
- Database powered by Supabase
- Styled with Bootstrap
- Made with ❤️ for special moments
