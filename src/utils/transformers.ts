import DOMPurify from 'isomorphic-dompurify';
export function componentPreviewHtml(
  rawHTML: string,
  darkmode: boolean,
  showPattern: boolean,
  fullPage: boolean
) {
  const componentHtml = DOMPurify.sanitize(rawHTML);
  const initialHtmlClass = darkmode ? 'dark' : '';
  const bodyClass = `flex items-center flex-1 w-full overflow-x-hidden min-h-full bg-white dark:bg-black`;
  const isFullPage = fullPage
    ? `w-full`
    : `w-full max-w-lg mx-auto p-4 overflow-x-auto flex flex-col items-center justify-center`;
  const pattern = showPattern ? `pattern` : '';

  return `
<!DOCTYPE html>
<html class="h-full ${initialHtmlClass} transition-all">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Component Preview</title> 

    
    <!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> -->
    <link href="/main.css" rel="stylesheet">

    <style>
        :root {
            --line-color: #e5e5e5;
        }
        html.dark {
            --line-color: #333333;
        }

        .lines {
            background-image: repeating-linear-gradient(45deg, var(--line-color) 0, var(--line-color) 1px, transparent 0, transparent 50%);
            background-size: 12px 12px;
        }

        a, button {
            pointer-event: none;
            cursor: pointer;
        }

        .pattern {
          background-image: radial-gradient(var(--line-color) 1px, transparent 1px), radial-gradient(var(--line-color) 1px, transparent 1px);
          background-size: calc(20 * 1px) calc(20 * 1px);
          background-position: 0 0, calc(10 * 1px) calc(10 * 1px);
        }
    </style>

    
    <script>
      function removeLinks() {
        document.querySelectorAll("a").forEach(link => link.removeAttribute("href"));
        // document.addEventListener('click', (e) => e.preventDefault())
        // document.addEventListener('keydown', (e) => e.preventDefault())
      }
    </script>
</head>
<body class="${bodyClass} ${pattern}" style="height: min-content;" onload="removeLinks()">
    <div class="${isFullPage}">
        ${componentHtml}
    </div>
</body>
</html>
`;
}

export function rawToJsx(formatedJSX: string) {
  return formatedJSX
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/viewBox=/g, 'viewBox=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-opacity=/g, 'strokeOpacity=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/<!--/g, '{/*')
    .replace(/-->/g, '*/}');
}
