/**
 * Fetches HTML element file and allows it to be imported
 * @param {string} path - File path to HTML file
 * @param {string} elementId - ID of HTML element and file
 */

export const fetchElement = async (elementId) => {
  try {
    const path = `elements/${elementId}.html`
    const resp = await fetch(path);

    // Fetch element
    if (!resp.ok) {
      throw new Error(`Failed to fetch ${path}`);
    }

    // Insert element
    const html = await resp.text();
    const target = document.getElementById(elementId);

    if (target) {
      target.innerHTML = html;
    } else {
      console.error(`Error: Failed to find element of id ${elementId}`);
    }

  } catch (e) {
    console.error("Error inserting HMTL", e);
  }
};
