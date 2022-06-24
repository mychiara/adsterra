type='text/javascript'>
$(window).bind("load", function() {

    // kotak pesan akan tampil saat halaman telah selesai dimuat
    $('#kotak-pesan').animate({top:"150px"}, 1000);

    // menghilangkan kotak pesan saat tombol (x) diklik
    $('a.close').click(function() {
        $(this).parent().fadeOut();
        return false;
    });
});
