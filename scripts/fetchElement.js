/**
 * Fetches HTML element file and allows it to be imported
 * @param {string} path - File path to HTML file
 * @param {string} elementId - ID of HTML element and file
 */


export const fetchElement = async (elementId) => {
  try {
    const path = `elements/${elementId}.html`;
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

      if (fetchStylesheet(elementId)) {
        target.rel = "stylesheet";
        target.href = fetchStylesheet(elementId);
        document.head.appendChild(element);
      }
    } else {
      console.error(`Error: Failed to find element of id ${elementId}`);
    }

  } catch (e) {
    console.error("Error inserting HMTL", e);
  }
};

// Styles in /styles must match elementId
// Ex. /elements/foo.html -> /styles/foo.css
const fetchStylesheet = async (elementId) => {
  const path = `/styles/${elementId}.css`;
  const resp = await fetch(path);

  // Fetch style
  if (!resp.ok) {
    console.error(`Error: Failed to find stylesheet for element: "${elementId}"`);
    return false;
  }

  console.log("Found: " + path);
  // Found corresponding stylesheet
  return path;
};
