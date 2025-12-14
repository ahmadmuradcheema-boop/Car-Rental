# Car Rental Reservation Platform

A complete, professional static website for car rental reservations built with vanilla HTML, CSS, and JavaScript.

## Features

- 🚗 **Browse Cars**: Filter and search through a fleet of 10 vehicles
- 📅 **Easy Booking**: Multi-step reservation form with real-time price calculation
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ♿ **Accessible**: WCAG 2.1 Level AA compliant with keyboard navigation
- 💾 **Client-Side Storage**: Bookings saved in localStorage
- 🎨 **Modern UI**: Professional design with smooth animations

## Project Structure

```
ict726/
├── index.html              # Homepage
├── pages/
│   ├── cars.html          # Car listing with filters
│   ├── car-details.html   # Individual car details
│   ├── reservation.html   # Multi-step booking form
│   ├── my-booking.html    # Booking management
│   ├── about.html         # About us page
│   ├── contact.html       # Contact form
│   └── faq.html           # FAQ accordion
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── app.js         # Main JavaScript
│   ├── img/               # Image assets (SVG placeholders)
│   └── video/             # Video assets (optional)
├── report/
│   ├── report.md          # Project report (1500 words)
│   └── ai-declaration.md  # AI use declaration
└── README.md              # This file
```

## Getting Started

### Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in a web browser
   - Simply double-click the file, or
   - Use a local server: `python -m http.server` or `npx serve`

That's it! No build process, no dependencies, no installation required.

### Using a Local Server (Recommended)

For the best experience, use a local server to avoid CORS issues:

**Python:**

```bash
python -m http.server 8000
```

Then open http://localhost:8000

**Node.js (npx):**

```bash
npx serve
```

**PHP:**

```bash
php -S localhost:8000
```

## Usage Guide

### Making a Reservation

1. **Browse Cars**: Visit the "Cars" page to see all available vehicles
2. **Filter & Search**: Use filters to find your perfect car
3. **View Details**: Click on any car to see full details
4. **Reserve**: Click "Reserve Now" or go to the Reservation page
5. **Complete Form**: Fill out the multi-step form
6. **Review**: Check your booking details and confirm
7. **Manage**: View your booking on the "My Booking" page

### Features Overview

- **Homepage**: Search widget, featured cars, testimonials, FAQ teaser
- **Cars Page**: Filter by price, transmission, seats, fuel, rating; sort options
- **Car Details**: Image gallery, specifications, pricing, reserve button
- **Reservation**: 3-step form with validation and real-time price updates
- **My Booking**: View, edit dates, cancel, or print receipt
- **Contact**: Form with validation and character counter
- **FAQ**: Accessible accordion with keyboard navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## Deployment

### Netlify

1. Push code to GitHub/GitLab/Bitbucket
2. Sign up at [netlify.com](https://netlify.com)
3. Connect your repository
4. Deploy (no build settings needed for static site)

### GitHub Pages

1. Push code to a GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `username.github.io/repository-name`

### Other Hosting

Any static hosting service works:

- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Traditional web hosting (cPanel, etc.)

## Technical Details

### Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **LocalStorage**: Client-side data persistence
- **Google Fonts**: Inter font family

### Key Features Implementation

- **Responsive Design**: Mobile-first with CSS Grid and Flexbox
- **Dark Mode**: CSS variables with localStorage persistence
- **Form Validation**: Client-side validation with helpful error messages
- **Dynamic Content**: JavaScript renders car cards and booking details
- **Accessibility**: ARIA labels, keyboard navigation, focus management

## Project Requirements Met

✅ **Functionality**: All features work without backend  
✅ **Layout**: Professional, modern design  
✅ **Rich Media**: SVG placeholders (optimized for static site)  
✅ **Code Quality**: Clean, commented, organized code  
✅ **Responsiveness**: Mobile-first, works 320px to 4K  
✅ **Accessibility**: WCAG 2.1 Level AA compliant  
✅ **Hosting Ready**: Can deploy to any static host  
✅ **Documentation**: Complete report and README

## Notes

- This is a **static website** - no backend server required
- Bookings are stored in **localStorage** (browser storage)
- Images use **SVG data URIs** (no external image hosting needed)
- All functionality works **offline** after initial load
- No external dependencies except Google Fonts (optional)

## License

This project is created for educational assessment purposes.

## Contact

For questions about this project, please refer to the contact page or review the project report in the `/report` directory.

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
