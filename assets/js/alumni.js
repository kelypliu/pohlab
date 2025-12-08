document.addEventListener("DOMContentLoaded", function () {
    // --------------------------------------------
    // PART 1 — ACCORDION BEHAVIOR
    // --------------------------------------------
    var acc = document.getElementsByClassName("accordion-btn");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {

            // Close all other panels
            for (let j = 0; j < acc.length; j++) {
                if (j !== i) {
                    acc[j].classList.remove("active");
                    acc[j].nextElementSibling.style.display = "none";
                }
            }

            // Toggle this panel
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === "block") ? "none" : "block";
        });
    }

    // --------------------------------------------
    // PART 2 — LOAD JSON DATA INTO TABLES
    // --------------------------------------------

    const url = "{{ '/assets/data/alumni.json' | relative_url }}";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Loaded alumni JSON:", data);

            populateTable("residents-table", data.residents);
            populateTable("dmd-table", data.dmd);
            populateTable("graduate-table", data.graduate);
            populateTable("undergraduate-table", data.undergraduate);
        })
        .catch(error => console.error("JSON load error:", error));

    // --------------------------------------------
    // Helper function to fill tables
    // --------------------------------------------
    function populateTable(tableId, items) {
        const tbody = document.getElementById(tableId);
        if (!tbody) return;

        tbody.innerHTML = ""; // clear any placeholder rows

        items.forEach(item => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.program || ""}</td>
                <td>${item.last || ""}</td>
                <td>${item.first || ""}</td>
                <td>${item.year || ""}</td>
                <td>${item.current || ""}</td>
            `;

            tbody.appendChild(row);
        });
    }
});