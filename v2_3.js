//Confetti is disabled after December 10th 2022
//Documentation for party.js: https://party.js.org/docs/

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
if(yyyy == "2022" && mm == "12") {
    if(dd <= "10") {
        if(localStorage.getItem("version2.3announcement") == undefined) {
            setTimeout(function() {
                party.confetti(document.body, {
                    count: party.variation.range(25, 75),
                });
            }, 1000);

            let container = document.createElement("div");
            container.id = "container2_3";

            let title = document.createElement("div");
            title.id = "title2_3";
            title.innerHTML = "This calculator has recently updated to";

            let subtext = document.createElement("div");
            subtext.id = "subtext2_3"
            subtext.innerHTML = "VERSION";

            let version = document.createElement("div");
            version.id = "version2_3";
            version.innerHTML = "2.3";

            document.body.appendChild(container);
            container.appendChild(title);
            container.appendChild(subtext);
            container.appendChild(version);

            setTimeout(function() {
                title.remove();
                subtext.remove();
                version.remove();

                let text = document.createElement("div");
                text.id = "text2_3";
                text.innerHTML = "You can view all major changes by clicking on this button.";

                let icon = document.createElement("span");
                icon.id = "icon2_3";
                icon.classList.add("material-icons");
                icon.innerHTML = "arrow_upward";

                container.appendChild(text);
                container.appendChild(icon);

                setTimeout(function() {
                    text.remove();
                    icon.remove();

                    let final = document.createElement("div");
                    final.id = "final2_3";
                    final.innerHTML = "Enjoy!";

                    container.appendChild(final);

                    setTimeout(function() {
                        container.remove();
                    }, 5000)
                }, 8250);
            }, 10000);

            localStorage.setItem("version2.3announcement", true);
        }
    }
}