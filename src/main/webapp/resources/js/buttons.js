$(function(){
    $("#addFolderInRoot").click(function() {
        var nodesname = prompt("Nodes name", "unknown");
        var rootNode = $("#tree").fancytree("getRootNode");
        var childNode = rootNode.addChildren({
            title: nodesname,
            folder: true
        });
    });
});
$(function(){
    $("#addFilderInActiveNode").click(function() {
        var nodesname = prompt("Nodes name", "unknown");
        var node = $("#tree").fancytree("getActiveNode");
        if( !node ) return;
        node.fromDict({
            folder: true
        });
        var childNode = node.addChildren({
            title: nodesname,
        });
    });
});
$(function(){
    $("#renameNode").click(function() {
        var nodesname = prompt("Nodes name", "unknown");
        var node = $("#tree").fancytree("getActiveNode");
        if( !node ) return;
        node.fromDict({
            title: nodesname
        });
    });
});
$(function(){
    $("#deleteNode").click(function() {
        var node = $("#tree").fancytree("getActiveNode");
        if( !node ) return;
        node.remove();
    });
});
$(function(){
    $("#makeFolder").click(function() {
        var node = $("#tree").fancytree("getActiveNode");
        if( !node ) return;
        node.fromDict({
            folder: true
        });
    });
});
$(function(){
    $("#makeFile").click(function() {
        var node = $("#tree").fancytree("getActiveNode");
        if( !node ) return;
        node.fromDict({
            folder: false
        });
    });
});