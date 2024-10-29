const baseUrl = "https://en.wikipedia.org/w/api.php";
const title = "List_of_ursids";

const params = {
    action: "parse",
    page: title,
    prop: "wikitext",
    section: 3,
    format: "json",
    origin: "*",
};

export const fetchImageUrl = async (fileName) => {
    const imageParams = {
        action: "query",
        titles: `File:${fileName}`,
        prop: "imageinfo",
        iiprop: "url",
        format: "json",
        origin: "*",
    };

    const url = `${baseUrl}?${new URLSearchParams(imageParams).toString()}`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
        const data = await res.json();
        const pages = data.query.pages;
        const imageInfo = Object.values(pages)[0].imageinfo;
        if (!imageInfo || !imageInfo.length) throw new Error('Image URL not found');
        return imageInfo[0].url;
    } catch (error) {
        console.error('Error fetching image URL:', error);
        return 'media/placeholder.jpg';
    }
};

export const extractBears = async (wikitext) => {
    const speciesTables = wikitext.split('{{Species table/end}}');
    const bears = [];

    for (const table of speciesTables) {
        try {
            const rows = table.split('{{Species table/row');
            for (const row of rows) {
                const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
                const binomialMatch = row.match(/\|binomial=(.*?)\n/);
                const imageMatch = row.match(/\|image=(.*?)\n/);
                const rangeMatch = row.match(/\|range=(.*?)(\||\n)/);

                if (nameMatch && binomialMatch && imageMatch && rangeMatch) {
                    const fileName = imageMatch[1].trim().replace('File:', '');
                    const imageUrl = await fetchImageUrl(fileName);

                    const bear = {
                        name: nameMatch[1],
                        binomial: binomialMatch[1],
                        image: imageUrl,
                        range: rangeMatch[1].trim(),
                    };
                    bears.push(bear);
                }
            }
        } catch (error) {
            console.error('Error extracting bear data:', error);
        }
    }

    const moreBearsSection = document.querySelector('.more_bears');
    bears.forEach((bear) => {
        const imageUrl = bear.image ? bear.image : 'media/placeholder.jpg';
        moreBearsSection.innerHTML += `
      <div>
        <h3>${bear.name} (${bear.binomial})</h3>
        <img src="${imageUrl}" alt="${bear.name}" style="width:200px; height:auto;">
        <p><strong>Range:</strong> ${bear.range}</p>
      </div>
    `;
    });
};

export const getBearData = async () => {
    const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
        const data = await res.json();
        const wikitext = data.parse.wikitext['*'];
        extractBears(wikitext);
    } catch (error) {
        console.error('Error fetching bear data:', error);
    }
};
