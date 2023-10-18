const tabButtons = document.querySelectorAll(".nav-list__link");
const tabs = document.querySelectorAll(".tab");

tabButtons.forEach((tabButton) =>
    tabButton.addEventListener("click", (event) => {
        if (!tabButton.classList.contains("nav-list__link_active")) {
            const currentTabId = tabButton.getAttribute("id");
            tabButtons.forEach((btn) => {
                btn.classList.toggle("nav-list__link_active");
            });

            tabs.forEach((tab) => {
                const isSelected =
                    tab.getAttribute("data-tab") === currentTabId;
                tab.classList.toggle("active-tab", isSelected);
            });
        }
    })
);
