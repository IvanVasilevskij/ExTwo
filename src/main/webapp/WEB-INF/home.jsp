<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>

    <script src="../resources/jsTree/jquery.js"></script>
    <script src="../resources/jsTree/jquery-ui.custom.js"></script>

    <link href="../resources/skin-xp/ui.fancytree.css" rel="stylesheet">
    <script src="../resources/js/jquery.fancytree.js"></script>
    <script src="../resources/js/jquery.fancytree.dnd.js"></script>
    <script src="../resources/js/jquery.fancytree.edit.js"></script>

    <script src="../resources/js/buttons.js"></script>
    <script src="../resources/js/tree.js"></script>

</head>

    <body>
        <h2>Treeview</h2>
        <div id="tree" data-type="json">
            [{"title": "Item 1"},
            {"title": "Folder 1", "folder": true,
            "children": [
            {"title": "Sub-item 2.1"},
            {"title": "Sub-item 2.2"}
            ]
            },
            {"title": "Folder 2", "folder": true,
            "children": [
            {"title": "Sub-item 2.1"},
            {"title": "Sub-item 2.2"}
            ]
            },
            {"title": "Item 2"}]
        </div>

        <div id="tree2"></div>

        <div>Active node: <span id="echoActive">-</span></div>
        <div>Focused node: <span id="echoFocused">-</span></div>

        <button id = "makeFolder"> make folder </button>
        <button id = "makeFile"> make file </button></br>

        <button id = "addFolderInRoot"> add folder in root directory </button></br>
        <button id = "addFilderInActiveNode"> add folder in selected directory </button></br>

        <button id = "renameNode"> rename node </button></br>
        <button id = "deleteNode"> remove node </button></br>
    </body>
</html>