$(".btn_agree").on("click", function() {
    var thisInput = $(this).attr("data-agree");
    $(thisInput).prop("checked", "checked");
    $(this).closest(".modal").fadeOut().removeClass(".modal_show");
})