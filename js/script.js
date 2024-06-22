function display_menu(){
    $.getJSON('data/pizza.json', function(data){
        const menu = data.menu
    
        $.each(menu, function(index, values){
            $('#daftar_menu').append('<div class="col-md-4"><div class="card mb-3"><img src="gambar/'+values.gambar+'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+values.nama+'</h5><p class="card-text">'+values.topping+'</p> <h5 class="card-title">Rp. '+values.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        })
    })
}

display_menu()

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    
    let kategori = $(this).html();
    $('#h1awal').html(kategori)

    if (kategori == 'All Menu'){
        display_menu()
        return;
    }

    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu
        let content = ''

        $.each(menu, function(i,values){
            if(values.kategori == kategori){
                content += '<div class="col-md-4"><div class="card mb-3"><img src="gambar/'+values.gambar+'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+values.nama+'</h5><p class="card-text">'+values.topping+'</p> <h5 class="card-title">Rp. '+values.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
            }
        })
    $('#daftar_menu').html(content)
    })

})

