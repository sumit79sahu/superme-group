# 📦 Supreme Group Website

A modern, responsive, and accessible website for **Supreme Group**, built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project integrates **Ant Design** for UI components and includes **comprehensive test coverage** using **Jest** and **React Testing Library**.

---

## 🚀 Project Setup

### ✅ Prerequisites
- **Node.js** (v18 or later)
- **npm** 

### 📅 Installation

```bash
# 1. Clone the repository
git clone https://github.com/sumit79sahu/supreme-group.git
cd supreme-group

# 2. Install dependencies
npm install


# 3. Start the development server
npm run dev

```

> Open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Component Architecture

### 🧱 Core Components

#### 1. **Navbar**
`components/Navbar.tsx`
- Responsive navigation bar
- **Features**:
  - Mobile/desktop views
  - Language switcher
  - Contact button
  - LinkedIn integration
- **State**:
  - Drawer toggle
  - Scroll tracking
  - Visibility control

#### 2. **NavbarDrawer**
`components/NavbarDrawer.tsx`
- Mobile navigation drawer
- **Props**:
  - `open`: boolean
  - `onClose`: function
- **Features**:
  - Smooth transitions
  - Scroll locking

#### 3. **HeroSection**
`components/HeroSection.tsx`
- Landing section
- **Features**:
  - Hero image
  - Headline
  - Call-to-action (CTA) buttons
- Mobile-first, adaptive layout

#### 4. **AnimationSection**
`components/AnimationSection.tsx`
- Interactive showcase using Framer Motion
- **Features**:
  - Custom hooks
  - Motion effects
  - Mobile-responsive

#### 5. **ContactForm**
`components/ContactForm.tsx`
- Primary contact form
- **Fields**: Name, Email, Subject, Message
- **Features**:
  - Validation
  - Error/success handling

#### 6. **GetInTouchForm**
`components/GetInTouchForm.tsx`
- Quick contact form
- **Features**:
  - Social media integration
  - Simplified layout

#### 7. **Footer**
`components/Footer.tsx`
- **Sections**:
  - Main footer
  - Social links
  - Legal info

---

## 📂 Folder Structure

```
src/
├── app/
│   ├── components/
│   │   ├── AnimationSection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── GetInTouchForm.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   └── NavbarDrawer.tsx
│   ├── assets/
│   │   └── images/
│   └── styles/
└── ...
```

---

## 📱 Responsive Design

### 📏 Breakpoints
- **Mobile**: `<768px`
- **Tablet**: `≥780px` (`md:`)
- **Desktop**: `≥1024px` (`lg:`)

### Component Responsiveness

| Component       | Mobile                | Tablet               | Desktop                   |
|----------------|-----------------------|-----------------------|----------------------------|
| Navbar         | Hamburger menu        | Expanded layout       | Full nav + spacing         |
| HeroSection    | Stacked content       | Two-column layout     | Larger type, better spacing|
| AnimationSection | Simplified animations | Medium interaction    | Full interactive animation |
| Contact Forms  | Single-column         | Two-column            | Enhanced spacing           |
| Footer         | Stacked               | Grid layout           | Multi-column               |

---

## ⚡ Performance Optimization

### 🔍 Techniques

- **Image Optimization**:
  - Next.js `<Image />`
  - Responsive sizes
  - WebP support

- **Code Optimization**:
  - Lazy loading
  - Tree shaking
  - Bundle splitting

- **Animation Optimization**:
  - GPU acceleration
  - Debounced scroll events
  - `prefers-reduced-motion` support

- **Form Optimization**:
  - Debounced input validation
  - Async submission
  - Error boundaries

---

## ♿ Accessibility (a11y)

### ✅ Features Implemented

| Category             | Features                                                                              |
|----------------------|----------------------------------------------------------------------------------------|
| Semantic HTML        | Headings, `<section>`, `<nav>`, ARIA landmarks                                        |
| ARIA Attributes      | Roles on navigation, forms, buttons                                                   |
| Keyboard Navigation  | Focus traps, skip links, keyboard-friendly drawer                                     |
| Screen Reader Support| Alt text, ARIA live regions, proper form field labels                                 |

---

## 🧰 Third-Party Libraries

| Library           | Purpose                          |
|------------------|----------------------------------|
| **Next.js**       | Framework with SSR & routing     |
| **TypeScript**    | Static typing                    |
| **Tailwind CSS**  | Utility-first CSS styling        |
| **Ant Design**    | Modern, accessible UI components (used for forms and buttons) |
| **Framer Motion** | Animations                       |
| **React Icons**   | Icon library                     |
| **Jest**          | Unit testing framework           |
| **React Testing Library** | Component testing        |

---

## 📋 Key Design Decisions

### ⚙️ Technical Stack
- Chose **Next.js** for SSR and performance
- Used **Tailwind CSS** for fast, responsive design
- Adopted **TypeScript** for safer, scalable code
- Integrated **Ant Design** for reusable, accessible UI components

### 🧹 Component Design
- Follows atomic principles
- Small, reusable components
- Clear prop contracts

### 🎮 Animation Strategy
- Mobile-first performance
- GPU-accelerated
- Uses Framer Motion with fallback styles

---

## 💪 Testing

This project includes comprehensive unit tests using **Jest** and **React Testing Library**.

### 📊 Coverage

Test coverage includes:
- `Navbar` – Logo, buttons, drawer toggle, accessibility
- `GetInTouchForm` – Integration with `ContactForm`
- `Footer` -Logo ,links
-  `Hero Section` - Video, text
- Button roles and interactive elements

### 📁 File Structure

Test files are placed under:
```
src/app/__tests__/*.test.tsx
```

### 🚚 Commands

| Command               | Description                    |
|----------------------|--------------------------------|
| `npm run test`       | Run all test suites            |
| `npm run test:watch` | Run tests in watch mode        |
| `npm run test:coverage` | Generate coverage report   |

---

## 🛠️ Challenges & Solutions

| Challenge              | Solution                                                             |
|------------------------|----------------------------------------------------------------------|
| Mobile Drawer UX       | Custom drawer with scroll-locking and state sync                     |
| Animation Lag          | Reduced motion on mobile, Framer Motion performance tuning           |
| Form Validation        | Custom validation hooks and feedback messages                        |
| Responsive Layout Bugs | Mobile-first design using Tailwind’s breakpoints and flex utilities  |
| Third-Party Styling Conflicts | Scoped Tailwind classes alongside Ant Design overrides          |
| Testing with AntD      | Used `transformIgnorePatterns` to allow Jest to parse AntD modules   |

---

