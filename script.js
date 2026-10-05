const body = document.querySelector("body");
const modeToggle = document.querySelector(".mode-toggle");
const sidebar = document.querySelector("nav");
const sidebarToggle = document.querySelector(".sidebar-toggle");

const navLinks = document.querySelectorAll(".nav-links li a");
const dashboardContent = document.querySelector(".dash-content");
const searchInput = document.querySelector(".search-box input");


// ======================================================
// DARK MODE
// ======================================================

let getMode = localStorage.getItem("mode");

if (getMode === "dark") {
    body.classList.add("dark");
}

if (modeToggle) {
    modeToggle.addEventListener("click", () => {

        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }

    });
}


// ======================================================
// SIDEBAR TOGGLE
// ======================================================

let getStatus = localStorage.getItem("status");

if (getStatus === "close") {
    sidebar.classList.add("close");
}

if (sidebarToggle) {

    sidebarToggle.addEventListener("click", () => {

        sidebar.classList.toggle("close");

        if (sidebar.classList.contains("close")) {
            localStorage.setItem("status", "close");
        } else {
            localStorage.setItem("status", "open");
        }

    });

}


// ======================================================
// PAGE CONTENT
// ======================================================

const pages = {

    Dashboard: `
        <div class="overview">

            <div class="title">
                <i class="uil uil-tachometer-fast-alt"></i>
                <span class="text">Identity & Access Overview</span>
            </div>

            <div class="boxes">

                <div class="box box1">
                    <i class="uil uil-users-alt"></i>
                    <span class="text">Active Users</span>
                    <span class="number">12,480</span>
                </div>

                <div class="box box2">
                    <i class="uil uil-server-network"></i>
                    <span class="text">API Requests</span>
                    <span class="number">84,320</span>
                </div>

                <div class="box box3">
                    <i class="uil uil-shield-check"></i>
                    <span class="text">Security Events</span>
                    <span class="number">24</span>
                </div>

            </div>

        </div>


        <div class="activity">

            <div class="title">
                <i class="uil uil-clock-three"></i>
                <span class="text">Recent Activity</span>
            </div>

            <div class="activity-data">

                <div class="data names">
                    <span class="data-title">User</span>
                    <span class="data-list">Aarav Sharma</span>
                    <span class="data-list">Priya Mehta</span>
                    <span class="data-list">Rahul Verma</span>
                    <span class="data-list">Sneha Patil</span>
                    <span class="data-list">Vikram Joshi</span>
                </div>

                <div class="data email">
                    <span class="data-title">Application</span>
                    <span class="data-list">Control Hub</span>
                    <span class="data-list">Webex</span>
                    <span class="data-list">Control Hub</span>
                    <span class="data-list">Webex</span>
                    <span class="data-list">Identity API</span>
                </div>

                <div class="data joined">
                    <span class="data-title">Action</span>
                    <span class="data-list">Role Updated</span>
                    <span class="data-list">User Provisioned</span>
                    <span class="data-list">Login Attempt</span>
                    <span class="data-list">Permission Changed</span>
                    <span class="data-list">API Authentication</span>
                </div>

                <div class="data type">
                    <span class="data-title">Time</span>
                    <span class="data-list">2 min ago</span>
                    <span class="data-list">5 min ago</span>
                    <span class="data-list">12 min ago</span>
                    <span class="data-list">18 min ago</span>
                    <span class="data-list">24 min ago</span>
                </div>

                <div class="data status">
                    <span class="data-title">Status</span>
                    <span class="data-list">Success</span>
                    <span class="data-list">Success</span>
                    <span class="data-list">Success</span>
                    <span class="data-list">Warning</span>
                    <span class="data-list">Success</span>
                </div>

            </div>

        </div>
    `,


    Users: `
        <div class="overview">

            <div class="title">
                <i class="uil uil-users-alt"></i>
                <span class="text">User Management</span>
            </div>

            <div class="boxes">

                <div class="box box1">
                    <i class="uil uil-users-alt"></i>
                    <span class="text">Total Users</span>
                    <span class="number">15,820</span>
                </div>

                <div class="box box2">
                    <i class="uil uil-user-check"></i>
                    <span class="text">Active Users</span>
                    <span class="number">12,480</span>
                </div>

                <div class="box box3">
                    <i class="uil uil-user-plus"></i>
                    <span class="text">New Users</span>
                    <span class="number">342</span>
                </div>

            </div>

        </div>

        <div class="activity">

            <div class="title">
                <i class="uil uil-users-alt"></i>
                <span class="text">User Directory</span>
            </div>

            <div class="activity-data">

                <div class="data names">
                    <span class="data-title">Name</span>
                    <span class="data-list">Aarav Sharma</span>
                    <span class="data-list">Priya Mehta</span>
                    <span class="data-list">Rahul Verma</span>
                    <span class="data-list">Sneha Patil</span>
                </div>

                <div class="data email">
                    <span class="data-title">Role</span>
                    <span class="data-list">Administrator</span>
                    <span class="data-list">Developer</span>
                    <span class="data-list">User</span>
                    <span class="data-list">Security Admin</span>
                </div>

                <div class="data joined">
                    <span class="data-title">Application</span>
                    <span class="data-list">Control Hub</span>
                    <span class="data-list">Webex</span>
                    <span class="data-list">Control Hub</span>
                    <span class="data-list">Identity API</span>
                </div>

                <div class="data status">
                    <span class="data-title">Status</span>
                    <span class="data-list">Active</span>
                    <span class="data-list">Active</span>
                    <span class="data-list">Active</span>
                    <span class="data-list">Active</span>
                </div>

            </div>

        </div>
    `,


    Applications: `
        <div class="overview">

            <div class="title">
                <i class="uil uil-apps"></i>
                <span class="text">Application Management</span>
            </div>

            <div class="boxes">

                <div class="box box1">
                    <i class="uil uil-apps"></i>
                    <span class="text">Applications</span>
                    <span class="number">86</span>
                </div>

                <div class="box box2">
                    <i class="uil uil-check-circle"></i>
                    <span class="text">Healthy</span>
                    <span class="number">82</span>
                </div>

                <div class="box box3">
                    <i class="uil uil-exclamation-triangle"></i>
                    <span class="text">Issues</span>
                    <span class="number">4</span>
                </div>

            </div>

        </div>

        <div class="activity">

            <div class="title">
                <i class="uil uil-apps"></i>
                <span class="text">Connected Applications</span>
            </div>

            <div class="activity-data">

                <div class="data names">
                    <span class="data-title">Application</span>
                    <span class="data-list">Webex</span>
                    <span class="data-list">Control Hub</span>
                    <span class="data-list">Identity API</span>
                    <span class="data-list">Directory Sync</span>
                </div>

                <div class="data email">
                    <span class="data-title">Type</span>
                    <span class="data-list">Enterprise</span>
                    <span class="data-list">Enterprise</span>
                    <span class="data-list">API Service</span>
                    <span class="data-list">Integration</span>
                </div>

                <div class="data status">
                    <span class="data-title">Status</span>
                    <span class="data-list">Healthy</span>
                    <span class="data-list">Healthy</span>
                    <span class="data-list">Healthy</span>
                    <span class="data-list">Healthy</span>
                </div>

            </div>

        </div>
    `,


    "Roles & Permissions": `
        <div class="overview">

            <div class="title">
                <i class="uil uil-shield-check"></i>
                <span class="text">Roles & Permissions</span>
            </div>

            <div class="boxes">

                <div class="box box1">
                    <i class="uil uil-shield-check"></i>
                    <span class="text">Total Roles</span>
                    <span class="number">24</span>
                </div>

                <div class="box box2">
                    <i class="uil uil-key-skeleton"></i>
                    <span class="text">Permissions</span>
                    <span class="number">128</span>
                </div>

                <div class="box box3">
                    <i class="uil uil-user-check"></i>
                    <span class="text">Admins</span>
                    <span class="number">48</span>
                </div>

            </div>

        </div>

        <div class="activity">

            <div class="title">
                <i class="uil uil-shield-check"></i>
                <span class="text">Role Configuration</span>
            </div>

            <div class="activity-data">

                <div class="data names">
                    <span class="data-title">Role</span>
                    <span class="data-list">Administrator</span>
                    <span class="data-list">Developer</span>
                    <span class="data-list">Security Admin</span>
                    <span class="data-list">Viewer</span>
                </div>

                <div class="data joined">
                    <span class="data-title">Permissions</span>
                    <span class="data-list">Full Access</span>
                    <span class="data-list">API Access</span>
                    <span class="data-list">Security Access</span>
                    <span class="data-list">Read Only</span>
                </div>

                <div class="data status">
                    <span class="data-title">Users</span>
                    <span class="data-list">48</span>
                    <span class="data-list">124</span>
                    <span class="data-list">18</span>
                    <span class="data-list">340</span>
                </div>

            </div>

        </div>
    `,


    Authentication: `
        <div class="overview">

            <div class="title">
                <i class="uil uil-lock"></i>
                <span class="text">Authentication Monitoring</span>
            </div>

            <div class="boxes">

                <div class="box box1">
                    <i class="uil uil-check-circle"></i>
                    <span class="text">Successful Logins</span>
                    <span class="number">98.7%</span>
                </div>

                <div class="box box2">
                    <i class="uil uil-shield-check"></i>
                    <span class="text">MFA Enabled</span>
                    <span class="number">91%</span>
                </div>

                <div class="box box3">
                    <i class="uil uil-exclamation-triangle"></i>
                    <span class="text">Failed Attempts</span>
                    <span class="number">124</span>
                </div>

            </div>

        </div>

        <div class="activity">

            <div class="title">
                <i class="uil uil-lock"></i>
                <span class="text">Authentication Activity</span>
            </div>

            <div class="activity-data">

                <div class="data names">
                    <span class="data-title">User</span>
                    <span class="data-list">Aarav Sharma</span>
                    <span class="data-list">Priya Mehta</span>
                    <span class="data-list">Rahul Verma</span>
                    <span class="data-list">Sneha Patil</span>
                </div>

                <div class="data joined">
                    <span class="data-title">Method</span>
                    <span class="data-list">SSO + MFA</span>
                    <span class="data-list">OAuth2</span>
                    <span class="data-list">SSO + MFA</span>
                    <span class="data-list">Password + MFA</span>
                </div>

                <div class="data status">
                    <span class="data-title">Result</span>
                    <span class="data-list">Success</span>
                    <span class="data-list">Success</span>
                    <span class="data-list">Success</span>
                    <span class="data-list">Warning</span>
                </div>

            </div>

        </div>
    `,


    "API Monitoring": `
        <div class="overview">

            <div class="title">
                <i class="uil uil-server-network"></i>
                <span class="text">API Monitoring</span>
            </div>

            <div class="boxes">

                <div class="box box1">
                    <i class="uil uil-server-network"></i>
                    <span class="text">API Requests</span>
                    <span class="number">84,320</span>
                </div>

                <div class="box box2">
                    <i class="uil uil-check-circle"></i>
                    <span class="text">Success Rate</span>
                    <span class="number">99.4%</span>
                </div>

                <div class="box box3">
                    <i class="uil uil-clock"></i>
                    <span class="text">Avg Response</span>
                    <span class="number">182ms</span>
                </div>

            </div>

        </div>

        <div class="activity">

            <div class="title">
                <i class="uil uil-server-network"></i>
                <span class="text">API Services</span>
            </div>

            <div class="activity-data">

                <div class="data names">
                    <span class="data-title">Service</span>
                    <span class="data-list">Identity API</span>
                    <span class="data-list">User API</span>
                    <span class="data-list">Role API</span>
                    <span class="data-list">Authentication API</span>
                </div>

                <div class="data joined">
                    <span class="data-title">Requests</span>
                    <span class="data-list">32,420</span>
                    <span class="data-list">21,830</span>
                    <span class="data-list">14,220</span>
                    <span class="data-list">15,850</span>
                </div>

                <div class="data status">
                    <span class="data-title">Status</span>
                    <span class="data-list">Healthy</span>
                    <span class="data-list">Healthy</span>
                    <span class="data-list">Healthy</span>
                    <span class="data-list">Healthy</span>
                </div>

            </div>

        </div>
    `,


    "Audit Logs": `
        <div class="overview">

            <div class="title">
                <i class="uil uil-file-alt"></i>
                <span class="text">Audit Logs</span>
            </div>

            <div class="boxes">

                <div class="box box1">
                    <i class="uil uil-file-alt"></i>
                    <span class="text">Total Events</span>
                    <span class="number">8,420</span>
                </div>

                <div class="box box2">
                    <i class="uil uil-shield-check"></i>
                    <span class="text">Security Events</span>
                    <span class="number">24</span>
                </div>

                <div class="box box3">
                    <i class="uil uil-exclamation-triangle"></i>
                    <span class="text">Warnings</span>
                    <span class="number">18</span>
                </div>

            </div>

        </div>

        <div class="activity">

            <div class="title">
                <i class="uil uil-file-alt"></i>
                <span class="text">Recent Audit Events</span>
            </div>

            <div class="activity-data">

                <div class="data names">
                    <span class="data-title">User</span>
                    <span class="data-list">Aarav Sharma</span>
                    <span class="data-list">Priya Mehta</span>
                    <span class="data-list">Rahul Verma</span>
                    <span class="data-list">Sneha Patil</span>
                </div>

                <div class="data joined">
                    <span class="data-title">Event</span>
                    <span class="data-list">Role Updated</span>
                    <span class="data-list">User Created</span>
                    <span class="data-list">Login</span>
                    <span class="data-list">Permission Changed</span>
                </div>

                <div class="data type">
                    <span class="data-title">Time</span>
                    <span class="data-list">2 min ago</span>
                    <span class="data-list">8 min ago</span>
                    <span class="data-list">12 min ago</span>
                    <span class="data-list">18 min ago</span>
                </div>

            </div>

        </div>
    `
};


// ======================================================
// NAVIGATION CLICK
// ======================================================

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const pageName = this.querySelector(".link-name").textContent.trim();

        if (pages[pageName]) {

            dashboardContent.innerHTML = pages[pageName];

        }

        // Remove active state
        navLinks.forEach(item => {
            item.parentElement.classList.remove("active");
        });

        // Add active state
        this.parentElement.classList.add("active");

        // Close sidebar on smaller screens
        if (window.innerWidth < 768) {
            sidebar.classList.add("close");
        }

    });

});


// ======================================================
// SEARCH - FILTER COMPLETE ROWS
// ======================================================

function filterActivityData() {

    if (!searchInput) {
        return;
    }

    const searchValue = searchInput.value
        .trim()
        .toLowerCase();

    const activitySections = document.querySelectorAll(".activity-data");

    activitySections.forEach(activity => {

        const columns = activity.querySelectorAll(".data");

        if (columns.length === 0) {
            return;
        }

        // Get the number of rows
        const firstColumnLists =
            columns[0].querySelectorAll(".data-list");

        const rowCount = firstColumnLists.length;


        // Check every row
        for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {

            let completeRowText = "";


            // Collect text from every column
            columns.forEach(column => {

                const lists =
                    column.querySelectorAll(".data-list");

                if (lists[rowIndex]) {

                    completeRowText +=
                        " " +
                        lists[rowIndex].textContent.toLowerCase();

                }

            });


            // Decide whether this row should be visible
            const showRow =
                searchValue === "" ||
                completeRowText.includes(searchValue);


            // Show/hide the same row across ALL columns
            columns.forEach(column => {

                const lists =
                    column.querySelectorAll(".data-list");

                if (lists[rowIndex]) {

                    lists[rowIndex].style.display =
                        showRow ? "" : "none";

                }

            });

        }

    });

}


// Run search whenever user types
if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterActivityData
    );

}


// ======================================================
// LOGOUT
// ======================================================

const logoutButton = document.querySelector(".logout-mode li:first-child a");

if (logoutButton) {

    logoutButton.addEventListener("click", function(event) {

        event.preventDefault();

        alert("You have been logged out successfully.");

    });

}