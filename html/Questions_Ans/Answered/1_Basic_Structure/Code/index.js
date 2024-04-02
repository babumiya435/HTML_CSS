var htmlDocument = `
<!DOCTYPE html>
<html>
    <head>
        <title>
            Title
        </title>
        <script>
            alert("Test JS");
        </script>
    </head>
    <body>
        <div>
            <h1> HTML body section </h1>
        </div>
    </body>
</html>
`;

alert("Print the HTML document + html DOM tree");

console.log("Static HTML Document: ", htmlDocument);
console.log("Real HTML Document: ", document);

var htmlDOMTree = `
-document
    -documentType: html
    -element: html
        -element: head
            -element: title
                -text: Title
            -element: script
                -text: alert("Test JS")
        -element: body
            -element: div
                -element: h1
                    -text: HTML body section
`;

console.log("HTML DOM(Document Object Model) Tree: ",htmlDOMTree);