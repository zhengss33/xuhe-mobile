$(function(){
    //表单下拉框
    $('.select-txt').parent().click(function(){
        $('#serve-container').slideToggle('fast');
        $('.select-down').toggleClass('select-up');
    });

    $('#serve-container .option').click(function() {
        var $selected=$(this).text();
        $('.select-txt').val($selected);
        $('#serve-select').val($selected);
    });
});