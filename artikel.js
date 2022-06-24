type='text/javascript'>
$(function() {
    $('button.open').click(function() {
        $('#kotak-pesan').animate({top:"200px"}, 1000);
        return false;
    });
    $('a.close').click(function() {
        $(this).parent().animate({top:"-600px"}, 1000);
        return false;
    });
});

<div id='kotak-pesan'>

Tulis Pesan Anda Disini....

<a class='close' href='' title='Close'>&times;</a>
</div>

<button class="open">Buka Teks Pesan</button>
