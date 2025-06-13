// DevOps CI/CD Demo Application
class DevOpsDemo {
    constructor() {
        this.init();
    }

    init() {
        this.updateDeployTime();
        this.simulateTestStatus();
        this.animateCounters();
    }

    updateDeployTime() {
        const deployTimeElement = document.getElementById('deploy-time');
        const now = new Date();
        deployTimeElement.textContent = now.toLocaleString();
    }

    simulateTestStatus() {
        const testStatusElement = document.getElementById('test-status');
        
        // Simulate test running
        testStatusElement.textContent = 'Running tests...';
        testStatusElement.className = 'loading';
        
        setTimeout(() => {
            testStatusElement.textContent = 'All tests passed! ✅';
            testStatusElement.className = '';
        }, 2000);
    }

    animateCounters() {
        this.animateCounter('build-count', 42);
        this.animateCounter('test-count', 156);
    }

    animateCounter(elementId, target) {
        const element = document.getElementById(elementId);
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 50);
    }
}

// Utility functions for testing
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US').format(date);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DevOpsDemo();
});

// Export functions for testing (Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        add,
        multiply,
        validateEmail,
        formatDate
    };
}
