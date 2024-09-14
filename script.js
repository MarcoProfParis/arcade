document.addEventListener('DOMContentLoaded', () => {
    const pizzaContent = `
        <!--ARCADE EMBED START-->
        <div style="position: relative; padding-bottom: calc(67.0103092783505% + 41px); height: 0; width: 100%;">
            <iframe src="https://demo.arcade.software/15ioqgBFS07tzcByFzjL?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true" 
                    title="Pizza Nouveau Champs" frameborder="0" loading="lazy" 
                    webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color-scheme: light;">
            </iframe>
        </div>
        <!--ARCADE EMBED END-->
    `;

    const cjdContent = `
        <!--ARCADE EMBED START-->
        <div style="position: relative; padding-bottom: calc(82.17562254259502% + 41px); height: 0; width: 100%;">
            <iframe src="https://demo.arcade.software/Q73FX2c4gu213uagy490?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true" 
                    title="CJD Commissions - Groupes Commissions" frameborder="0" loading="lazy" 
                    webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color-scheme: light;">
            </iframe>
        </div>
        <!--ARCADE EMBED END-->
    `;

    const contentDiv = document.getElementById('content');

    document.getElementById('pizzaLink').addEventListener('click', (e) => {
        e.preventDefault();
        contentDiv.innerHTML = pizzaContent;
    });

    document.getElementById('cjdLink').addEventListener('click', (e) => {
        e.preventDefault();
        contentDiv.innerHTML = cjdContent;
    });

    // Default to Pizza content
    contentDiv.innerHTML = pizzaContent;
});
