$(function(){
	// WEV Loading Modules
    $("[data-include]").each(function(){
        var Item = $(this);
        Item.load(Item.data('include'), function(){
            Item.contents().unwrap();
        }); 
    });

})
