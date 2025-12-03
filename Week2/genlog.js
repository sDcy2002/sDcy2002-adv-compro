function createLogEntry(message) {
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH');

    const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();

    const logMessage = message.toUpperCase();

    return `[${timestamp}] [Event ID: ${eventId}] - ${logMessage}`;
}

const log = createLogEntry("User logged in successfully.");
console.log(log);