<p>DEBUG: {{ site.data.alumni | jsonify }}</p>

---
layout: default
title: "Alumni"
permalink: /alumni/
---

<div class="page-wide page-top alumni-page">
    <h1>Alumni</h1>
    <p>Browse past members of Poh Lab.</p>

    <div class="alumni-accordion grid-2">

        <!-- Residents -->
        <div class="accordion-item">
            <button class="accordion-btn">Residents</button>
            <div class="accordion-panel">
                <table>
                    <thead>
                        <tr><th>Program</th><th>Last Name</th><th>First Name</th><th>Year</th><th>Current</th></tr>
                    </thead>
                    <tbody>
                        {% for item in site.data.alumni.residents %}
                    <tr>
                        <td>{{ item.program }}</td>
                        <td>{{ item.last }}</td>
                        <td>{{ item.first }}</td>
                        <td>{{ item.year }}</td>
                        <td>{{ item.current }}</td>
                    </tr>
                    {% endfor %}
                </tbody>
            </table>
            </div>
        </div>

        <!-- DMD -->
        <div class="accordion-item">
            <button class="accordion-btn">DMD Students</button>
            <div class="accordion-panel">
                <table>
                    <thead>
                        <tr><th>Program</th><th>Last Name</th><th>First Name</th><th>Year</th><th>Current</th></tr>
                    </thead>
                    <tbody>
                        {% for item in site.data.alumni.dmd %}
                    <tr>
                        <td>{{ item.program }}</td>
                        <td>{{ item.last }}</td>
                        <td>{{ item.first }}</td>
                        <td>{{ item.year }}</td>
                        <td>{{ item.current }}</td>
                    </tr>
                    {% endfor %}
                </tbody>
            </table>
            </div>
        </div>

        <!-- Graduate Students -->
        <div class="accordion-item">
            <button class="accordion-btn">Graduate Students</button>
            <div class="accordion-panel">
                <table>
                    <thead>
                        <tr><th>Program</th><th>Last Name</th><th>First Name</th><th>Year</th><th>Current</th></tr>
                    </thead>
                <tbody>
                    {% for item in site.data.alumni.graduate %}
                <tr>
                    <td>{{ item.program }}</td>
                    <td>{{ item.last }}</td>
                    <td>{{ item.first }}</td>
                    <td>{{ item.year }}</td>
                    <td>{{ item.current }}</td>
                </tr>
                {% endfor %}
                </tbody>
            </table>
            </div>
        </div>

        <!-- Undergraduates -->
        <div class="accordion-item">
            <button class="accordion-btn">Undergraduates</button>
            <div class="accordion-panel">
                <table>
                    <thead>
                        <tr><th>Program</th><th>Last Name</th><th>First Name</th><th>Year</th><th>Current</th></tr>
                    </thead>
                <tbody>
                    {% for item in site.data.alumni.undergraduate %}
                <tr>
                    <td>{{ item.program }}</td>
                    <td>{{ item.last }}</td>
                    <td>{{ item.first }}</td>
                    <td>{{ item.year }}</td>
                    <td>{{ item.current }}</td>
                </tr>
                    {% endfor %}
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>

<style>
:root {
  --card-bg: #f8fbff;
  --card-border: #d9e4ef;
  --card-text: #1f2937;
  --card-hover: #e6f0fa;
  --table-header-bg: #e5ecf3;
  --table-header-text: #1f2937;
  --table-row-bg: #ffffff;
  --table-row-text: #1f2937;
  --table-border: #c3ccd5;
}

[data-theme="dark"] {
  --card-bg: #0f172a;
  --card-border: #1f2a44;
  --card-text: #e2e8f0;
  --card-hover: #1a2b4a;
  --table-header-bg: #334155;
  --table-header-text: #e2e8f0;
  --table-row-bg: #1e293b;
  --table-row-text: #e2e8f0;
  --table-border: #475569;
}

.alumni-page h1,
.alumni-page p {
    text-align: center;
}

.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1.5rem;
}

.accordion-item {
    display: flex;
    flex-direction: column;
}

.accordion-btn {
    background-color: var(--card-bg);
    color: var(--card-text);
    border: 1px solid var(--card-border);
    cursor: pointer;
    padding: 1.2rem 1.4rem;
    width: 100%;
    text-align: left;
    outline: none;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 1rem;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.06);
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.accordion-btn:hover {
    background-color: var(--card-hover);
    transform: translateY(-2px);
}

.accordion-btn.active {
    background-color: var(--card-hover);
}

.accordion-panel {
    display: none;
    padding: 0 12px;
    margin-top: 6px;
}

.accordion-panel table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem
}

.accordion-panel th {
    background-color: var(--table-header-bg);
    color: var(--table-header-text);
    font-weight: 600;
    padding: 8px;
    border: 1px solid var(--table-border);
    text-align: left;
}

.accordion-panel td {
    background-color: var(--table-row-bg);
    color: var(--table-row-text);
    padding: 8px;
    border: 1px solid var(--table-border);
}

.accordion-panel tr:hover td {
    background-color: rgba(180, 200, 255, 0.15);
}

</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
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
});
</script>