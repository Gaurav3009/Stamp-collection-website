$(document).ready(function()
{
$('.acc h3').click(function()
{
	$(this).next('.content').slideToggle();
	$(this).parent().addClass('active');
	$(this).parent().siblings().childeren('.content').slideUp();
	$(this).parent().siblings().removeClass('active');
});
});