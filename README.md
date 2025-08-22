# Edura Client - React Frontend

The frontend application for Edura Learning Management System built with React 18, Vite, and modern web technologies.

## 🚀 Features

### Student Features

- **Course Discovery**: Browse and search courses by category, level, and language
- **Course Details**: View comprehensive course information including curriculum, pricing, and instructor details
- **Video Learning**: Watch course videos with progress tracking using React Player
- **Course Progress**: Track learning progress with visual indicators
- **Payment Integration**: Secure PayPal payment processing
- **Responsive Design**: Mobile-friendly interface for learning on any device

### Instructor Features

- **Course Management**: Create, edit, and publish courses
- **Curriculum Builder**: Add video lectures with free preview options
- **Dashboard Analytics**: View course statistics and student enrollment
- **Media Upload**: Upload course images and videos with Cloudinary integration
- **Student Management**: Track enrolled students and their progress

## 🛠️ Tech Stack

- **React 18** - UI library with hooks and modern features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Radix UI** - Accessible and customizable UI components
- **Framer Motion** - Animation library for smooth transitions
- **Axios** - HTTP client for API communication
- **React Player** - Video player component for course content
- **Lucide React** - Beautiful and consistent icon library
- **React Confetti** - Celebration animations for course completion

## 📁 Project Structure

```
client/
├── public/                 # Static assets
│   ├── banner-img.png     # Landing page banner
│   └── vite.svg          # Vite logo
├── src/
│   ├── api/
│   │   └── axiosInstance.js    # Axios configuration
│   ├── components/
│   │   ├── common-form/        # Reusable form components
│   │   ├── instructor-view/    # Instructor-specific components
│   │   ├── media-progress-bar/ # Video progress tracking
│   │   ├── route-guard/        # Authentication guards
│   │   ├── student-view/       # Student-specific components
│   │   ├── ui/                 # Base UI components (Radix UI)
│   │   └── video-player/       # Video player component
│   ├── config/
│   │   └── index.js           # Configuration constants
│   ├── context/
│   │   ├── auth-context/       # Authentication state management
│   │   ├── instructor-context/ # Instructor state management
│   │   └── student-context/    # Student state management
│   ├── hooks/
│   │   └── use-toast.js       # Custom toast hook
│   ├── lib/
│   │   └── utils.js           # Utility functions
│   ├── pages/
│   │   ├── auth/              # Authentication pages
│   │   ├── instructor/        # Instructor dashboard pages
│   │   ├── not-found/         # 404 page
│   │   └── student/           # Student pages
│   ├── services/
│   │   └── index.js           # API service functions
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── components.json          # Radix UI components configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the client directory**

   ```bash
   cd client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open your browser and go to: http://localhost:5173

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 UI Components

### Base Components (Radix UI)

- **Button** - Various button styles and variants
- **Card** - Content containers with shadows
- **Dialog** - Modal dialogs and popovers
- **Dropdown Menu** - Context menus and navigation
- **Input** - Form input fields
- **Label** - Form labels and accessibility
- **Select** - Dropdown selection components
- **Tabs** - Tabbed content organization
- **Toast** - Notification system
- **Switch** - Toggle components
- **Slider** - Range input components
- **Checkbox** - Checkbox input components
- **Textarea** - Multi-line text input
- **Table** - Data table components
- **Scroll Area** - Custom scrollable areas
- **Skeleton** - Loading state placeholders

### Custom Components

- **Video Player** - Enhanced video player with progress tracking
- **Media Progress Bar** - Visual progress indicators
- **Route Guard** - Authentication-based route protection
- **Common Form Controls** - Reusable form components

## 🔧 Configuration

### Environment Variables

The client application expects the following environment variables:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

### Tailwind CSS

The project uses Tailwind CSS for styling with custom configuration:

- Custom color palette
- Responsive breakpoints
- Animation utilities
- Component-specific styles

### Vite Configuration

- React plugin for JSX support
- Path aliases for clean imports
- Development server configuration
- Build optimization settings

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** - Full-featured experience
- **Tablet** - Touch-friendly interface
- **Mobile** - Optimized for small screens

## 🎯 Key Features Implementation

### Authentication System

- JWT token management
- Role-based access control (Student/Instructor)
- Protected routes with RouteGuard component
- Automatic token refresh

### Course Management

- Course creation and editing forms
- Curriculum management with video uploads
- Course publishing workflow
- Student enrollment tracking

### Video Learning

- React Player integration
- Progress tracking and persistence
- Free preview functionality
- Video quality controls

### Payment Integration

- PayPal payment processing
- Order confirmation handling
- Payment status tracking
- Course access management

## 🔒 Security Features

- JWT token validation
- Protected API routes
- Input sanitization
- XSS protection
- Secure file upload handling

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Static Hosting

The built application can be deployed to:

- Vercel
- Netlify
- AWS S3
- GitHub Pages
- Any static hosting service

### Environment Setup for Production

Make sure to set the correct environment variables for your production environment:

- API base URL
- Cloudinary credentials
- PayPal client ID

## 🧪 Development

### Code Style

- ESLint configuration for code quality
- Prettier for code formatting
- React hooks best practices
- Component composition patterns

### State Management

- React Context for global state
- Local state with useState
- Custom hooks for reusable logic
- API state management with Axios

### Performance Optimization

- Code splitting with React.lazy
- Memoization with React.memo
- Optimized re-renders
- Bundle size optimization

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for new components (if applicable)
3. Write meaningful commit messages
4. Test your changes thoroughly
5. Update documentation as needed

## 📝 License

This project is licensed under the ISC License.

---

**Edura Client** - Modern React frontend for the Learning Management System
