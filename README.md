# 🚀 DevOps CI/CD Demo with GitHub Actions

[![CI](https://github.com/yourusername/demo-devops-cicd/actions/workflows/ci.yml/badge.svg)](https://github.com/yourusername/demo-devops-cicd/actions/workflows/ci.yml)
[![CD](https://github.com/yourusername/demo-devops-cicd/actions/workflows/cd.yml/badge.svg)](https://github.com/yourusername/demo-devops-cicd/actions/workflows/cd.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)](https://yourusername.github.io/demo-devops-cicd/)

A comprehensive demonstration of DevOps practices using GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD).

## 🌟 Features

- **🧪 Continuous Integration**: Automated testing on every push and pull request
- **🚀 Continuous Deployment**: Automatic deployment to GitHub Pages
- **📊 Test Coverage**: Comprehensive test suite with coverage reporting
- **🔍 Code Quality**: ESLint for code linting and quality checks
- **🔒 Security**: Automated security audits
- **📱 Responsive Design**: Mobile-friendly web interface

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Testing**: Jest
- **Linting**: ESLint
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## 🏗️ Project Structure

```
demo-devops-cicd/
├── .github/
│   └── workflows/
│       ├── ci.yml          # Continuous Integration
│       ├── cd.yml          # Continuous Deployment
│       └── pr.yml          # Pull Request Checks
├── index.html              # Main web page
├── style.css              # Styling
├── app.js                 # JavaScript application
├── app.test.js            # Test suite
├── package.json           # Node.js dependencies
├── .eslintrc.js           # ESLint configuration
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/demo-devops-cicd.git
   cd demo-devops-cicd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run tests**
   ```bash
   npm test
   ```

4. **Run linting**
   ```bash
   npm run lint
   ```

5. **Serve locally**
   ```bash
   npm run serve
   ```
   Open http://localhost:8000 in your browser

## 🔄 CI/CD Workflows

### Continuous Integration (CI)
Triggered on push to `main`/`develop` and pull requests to `main`:
- Multi-version Node.js testing (18.x, 20.x)
- Code linting with ESLint
- Test execution with coverage reporting
- Security audit scanning
- Lighthouse performance testing

### Continuous Deployment (CD)
Triggered on successful CI completion for `main` branch:
- Automated build process
- Deployment to GitHub Pages
- Deployment notifications

### Pull Request Checks
Enhanced checks for pull requests:
- Code quality validation
- Test coverage reporting
- Breaking change detection
- Preview environment setup

## 📊 Testing

The project includes comprehensive tests covering:
- Unit tests for utility functions
- Integration tests
- Email validation testing
- Date formatting verification

Run tests with coverage:
```bash
npm run test:coverage
```

## 🔧 Configuration

### ESLint
Code quality is enforced using ESLint with custom rules defined in `.eslintrc.js`.

### Jest
Testing framework configuration in `package.json` with coverage collection.

### GitHub Actions
Workflow configurations in `.github/workflows/` directory.

## 🌐 Live Demo

Visit the live demo: [https://yourusername.github.io/demo-devops-cicd/](https://yourusername.github.io/demo-devops-cicd/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📈 Monitoring

The project includes:
- GitHub Actions workflow status badges
- Test coverage reporting
- Performance monitoring with Lighthouse
- Security audit alerts

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- GitHub Actions for CI/CD automation
- Jest for testing framework
- ESLint for code quality
- GitHub Pages for hosting

---

Made with ❤️ for the DevOps community
