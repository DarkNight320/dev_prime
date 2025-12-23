# Dev Prime - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing full stack development projects and expertise. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Features

- **Hero Section**: Eye-catching introduction with animated background
- **About Section**: Professional biography and skills overview
- **Skills Showcase**: Categorized technical skills with visual icons
- **Projects Gallery**: Featured projects with descriptions and technologies used
- **Contact Section**: Multiple ways to get in touch with placeholder links
- **Responsive Design**: Fully responsive on all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Dark Theme**: Modern dark mode design with gradient accents

## 🛠️ Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion, React Intersection Observer
- **3D Effects**: Three.js, React Three Fiber
- **Icons**: Heroicons, React Icons
- **Email**: EmailJS

## 📋 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Update placeholder links in `constants/index.ts`:
   - Replace contact email placeholder
   - Update GitHub, LinkedIn, and social media links

4. Update Contact component with your actual contact information

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build for production:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── main/           # Main section components
│   └── sub/            # Sub/utility components
├── constants/          # Configuration and constants
├── public/             # Static assets
├── utils/              # Utility functions
└── styles/             # Global styles
```

## 🎨 Customization

### Update Your Information

1. **Name & Title**: Edit `components/sub/HeroContent.tsx`
2. **About Section**: Update `components/main/About.tsx`
3. **Contact Links**: Update `constants/index.ts` and `components/main/Contact.tsx`
4. **Projects**: Add your projects to `components/main/Projects.tsx`
5. **Skills**: Update skill categories in `constants/index.ts`
6. **Metadata**: Update `app/layout.tsx` with your portfolio title and description

### Add Your Project Links

Replace placeholder `#` URLs in `components/main/Projects.tsx` with actual project links:

```tsx
url="https://your-project-url.com"
```

## 📱 Sections

- **Hero**: Animated introduction with call-to-action
- **About**: Professional biography and what you do
- **Skills**: Organized technical skills by category
- **Projects**: Showcase of your best work
- **Contact**: Multiple contact methods with placeholder info

## 🔗 Links to Update

- Replace all `#resume` links with your actual resume URL
- Update social media links in `constants/index.ts`
- Add actual project URLs in the Projects section

## 📝 License

This project is open source and available for personal use.

## 👨‍💻 Author

Dev Prime - Full Stack Developer
