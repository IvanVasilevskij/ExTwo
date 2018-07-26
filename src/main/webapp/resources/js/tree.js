$(function(){
    $("#tree").fancytree({
        selectMode: 3,
        extensions: ["dnd", "edit"],
        dnd: {
            autoExpandMS: 400,
            focusOnClick: true,
            preventVoidMoves: true,
            preventRecursiveMoves: true,
            dragStart: function(node, data) {
                return true;
            },
            dragEnter: function(node, data) {
                return true;
            },
            dragDrop: function(node, data) {
                data.otherNode.moveTo(node, data.hitMode);
            }
        },
        activate: function(event, data) {
            $("#echoActive").text(data.node.title);
            if( data.node.url )
                window.open(data.node.url, data.node.target);
        },
        deactivate: function(event, data) {
            $("#echoSelected").text("-");
        },
        focus: function(event, data) {
            $("#echoFocused").text(data.node.title);
        },
        blur: function(event, data) {
            $("#echoFocused").text("-");
        }
    });
});
