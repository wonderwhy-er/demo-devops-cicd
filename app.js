// DevOps CI/CD Demo Application
class DevOpsDemo {
    constructor() {
        this.init();
    }

    init() {
        this.updateDeployTime();
        this.simulateTestStatus();
        this.animateCounters();
        this.showPerformanceMetrics();
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

    showPerformanceMetrics() {
        const loadTimeElement = document.getElementById('load-time');
        if (loadTimeElement) {
            const loadTime = getPageLoadTime();
            if (loadTime > 0) {
                loadTimeElement.textContent = `${loadTime}ms`;
            } else {
                loadTimeElement.textContent = 'optimized ⚡';
            }
        }
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

// Performance metrics utility functions
function measurePerformance(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`Performance: ${name} took ${end - start} milliseconds`);
    return result;
}

function getPageLoadTime() {
    if (typeof performance !== 'undefined' && performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        return loadTime;
    }
    return 0;
}

function calculateThroughput(operations, timeMs) {
    return operations / (timeMs / 1000);
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

// Initialize the app when DOM is loaded (only in browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        new DevOpsDemo();
    });
}

// Export functions for testing (Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        add,
        multiply,
        validateEmail,
        formatDate,
        measurePerformance,
        getPageLoadTime,
        calculateThroughput
    };
}
