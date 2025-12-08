document.addEventListener("DOMContentLoaded", function () {
    // Accordion behavior
    const acc = document.getElementsByClassName("accordion-btn");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            for (let j = 0; j < acc.length; j++) {
                if (j !== i) {
                    acc[j].classList.remove("active");
                    acc[j].nextElementSibling.style.display = "none";
                }
            }
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === "block") ? "none" : "block";
        });
    }

    // Load JSON
    fetch("/pohlab/assets/data/alumni.json")
        .then(response => response.json())
        .then(data => {
            populateTable("residents-table", data.residents);
            populateTable("dmd-table", data.dmd);
            populateTable("graduate-table", data.graduate);
            populateTable("undergrad-table", data.undergraduate);
        })
        .catch(err => console.error("JSON load error:", err));
});

function populateTable(id, list) {
    const tbody = document.getElementById(id);
    if (!tbody || !list) return;

    tbody.innerHTML = ""; // clear

    list.forEach(item => {
        const row = `
        <tr>
            <td>${item.program || ""}</td>
            <td>${item.last || ""}</td>
            <td>${item.first || ""}</td>
            <td>${item.year || ""}</td>
            <td>${item.current || item.institution || ""}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}