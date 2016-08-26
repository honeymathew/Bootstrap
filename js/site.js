/**
 * Created by honeymathew on 26-Aug-16.
 */
(function(){
    "use strict";

    var $pickButton = $("pickButton");

    $("#reasonDropdown li a").on("click",function(){
        var reason = $(this).text();
        $pickButton.text(reason);
    });


    })();
