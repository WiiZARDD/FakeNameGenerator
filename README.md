![Logo](https://i.imgur.com/grAsmMo.png)

A modern, responsive web application that generates fake names using the [NameFake API](https://www.namefake.com/).
<br>
Built with HTML5, CSS3, JavaScript (ES6 modules), and Bootstrap 4.


⭐ **Star this repository if you found it helpful!**

## Features

- **Instant Name Generation**: Generate fake names with a single click
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **CORS Proxy Integration**: Uses corsproxy.io to handle API requests
- **GitHub Integration**: Direct link to project repository
- **Bootstrap 4**: Modern, mobile-first CSS framework

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - everything is loaded via CDN

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/WiiZARDD/FakeNameGenerator.git
   cd FakeNameGenerator
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server for development (RECOMMENDED):
     ```bash
     # Using Python 3
     python -m http.server 8080
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8080
     ```

3. **Access the application**
   - Navigate to `http://localhost:8080` (if using a local server)
   - Or open `index.html` directly in your browser

## Usage

1. **Generate a Name**: Click the "Generate" button to instantly create a fake name
2. **View Results**: The generated name will appear below the button
3. **Multiple Generations**: Click the button multiple times to generate different names

## 🏗️ Project Structure

```
FakeNameGenerator/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── btn.js             # Main JavaScript module
├── fetch.js           # API fetch functionality
└── README.md          # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Custom styling with animations and responsive design
- **JavaScript (ES6)**: Modern JavaScript with modules
- **Bootstrap 4**: CSS framework for responsive design
- **NameFake API**: External API for name generation
- **CORS Proxy**: Handles cross-origin requests

## File Descriptions

### `index.html`
- Main HTML structure with semantic elements
- Bootstrap 4 integration
- Responsive navbar with logo
- Main content area with generate button
- Footer with GitHub link

### `styles.css`
- Custom styling for buttons and components
- Responsive design rules
- Animation effects and hover states
- GitHub button styling
- Layout and typography rules

### `btn.js`
- Main JavaScript module
- Event listener for the generate button
- DOM content loaded handler
- Imports the fetch functionality

### `fetch.js`
- API integration module
- Handles requests to NameFake API via CORS proxy
- Updates DOM with generated names
- Error handling for failed requests

## Customization

### Adding New Features
1. **Additional Generators**: Add new buttons and corresponding API calls
2. **Styling**: Modify `styles.css` for custom themes
3. **Animations**: Enhance button hover effects and transitions

### API Integration
The application uses the NameFake API through a CORS proxy:
```javascript
fetch('https://corsproxy.io/?https://api.namefake.com/')
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

**WiiZARDD**
- GitHub: [@WiiZARDD](https://github.com/WiiZARDD)

## Acknowledgments

- [NameFake API](https://www.namefake.com/) for providing the name generation service
- [Bootstrap](https://getbootstrap.com/) for the responsive CSS framework
- [CORS Proxy](https://corsproxy.io/) for handling cross-origin requests

