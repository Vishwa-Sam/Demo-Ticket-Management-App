**Ticket Management Demo App

A modern and interactive ticket management dashboard built with Angular. This app showcases real-time server status, IT ticket submission and tracking, and a visual dashboard for recent traffic data.

---

**Features
Live Server Status Dashboard

Displays current server status (online/offline) with updates every 4 seconds.

Real-time updates handled via setInterval for automated status changes.

IT Ticket Management

Users can submit support tickets using intuitive input fields (title and request).

All created tickets are listed in a dashboard.

Tickets can be marked as complete; completed tickets update their appearance/color instantly.

Traffic Monitoring Dashboard

Visual bar chart displays traffic for the last 7 days.

Bar heights represent relative traffic volume per day in a modern, eye-catching style.

---

**Technologies Used
Angular (main framework)

TypeScript, RxJS

Responsive, component-based UI

CSS (custom & framework for styling)

---

**How It Works
Server Status:
A card at the top-left displays live server status, changing state (and styles) every few seconds.

Traffic Bar Chart:
The center card displays an animated bar chart of traffic for the last 7 days.

Support Tickets:
Users can create new tickets. Each ticket can be marked as completed, dynamically updating its card color and status.
