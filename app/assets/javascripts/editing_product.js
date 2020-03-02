window.addEventListener("load", function(){
  $(function(){
    $( '.edit-input-default' ).on('click', function(){
      let name = $(this).val();
      if(name == 0){
        $('.edit-input-default').css('border-color','red');
        $('.edit-no-product-name').text('入力してください');
      }else{
        $('.edit-input-default').css('border-color','');
        $('.edit-no-product-name').text('');
      };
    });
    $( '.edit-input-default' ).on('change',function(){
      let name = $(this).val();
      if(name == 0){
        $('.edit-input-default').css('border-color','red');
        $('.edit-no-product-name').text('入力してください');
      }else{
        $('.edit-input-default').css('border-color','');
        $('.edit-no-product-name').text('');
      };
    });
  })

  $('.edit-textarea-default').on('click',function(){
    let description = $(this).val();
    if(description == 0){
      $('.edit-textarea-default').css('border-color','red')
      $('.edit-no-product2').text('入力してください')
    }else{
      $('.edit-textarea-default').css('border-color','')
      $('.edit-no-product2').text('')
    }
  });
  $('.edit-textarea-default').on('change',function(){
    let description = $(this).val();
    if(description == 0){
      $('.edit-textarea-default').css('border-color','red')
      $('.edit-no-product2').text('入力してください')
    }else{
      $('.edit-textarea-default').css('border-color','')
      $('.edit-no-product2').text('')
    }
  });
  $('.edit-default02').on('click',function(){
    let status = $(this).val();
    if(status == 0){
      $('.edit-default02').css('border-color','red')
      $('.edit-no-product4').text('選択してください')
    }else{
      $('.edit-default02').css('border-color','')
      $('.edit-no-product4').text('')
    }
  });
  $('.edit-default02').on('change',function(){
    let status = $(this).val();
    if(status == 0){
      $('.edit-default02').css('border-color','red')
      $('.edit-no-product4').text('選択してください')
    }else{
      $('.edit-default02').css('border-color','')
      $('.edit-no-product4').text('')
    }
  });

  $('.edit-default03').on('click',function(){
    let send_price = $(this).val();
    if(send_price == 0){
      $('.edit-default03').css('border-color','red')
      $('.edit-no-product5').text('選択してください')
    }else{
      $('.edit-default03').css('border-color','')
      $('.edit-no-product5').text('')
    }
  });
  $('.edit-default03').on('change',function(){
    let send_price = $(this).val();
    if(send_price == 0){
      $('.edit-').css('border-color','red')
      $('.edit-no-product5').text('選択してください')
    }else{
      $('.edit-default03').css('border-color','')
      $('.edit-no-product5').text('')
    }
  });
  $( '.edit-tk-price' ).on('click', function(){
    let price = $(this).val();
    if( price == 0){
      $('.edit-tk-price').css('border-color','red')
      $('.edit-no-product2').text('300以上9999999以下で入力してください')
    }else{
      $('.edit-tk-price').css('border-color','')
      $('.edit-no-product2').text('')
    }
  });
  $( '.edit-tk-price' ).on('change',function(){
    let price = $(this).val();
    if( price == 0){
      $('.edit-tk-price').css('border-color','red')
      $('.edit-no-product2').text('300以上9999999以下で入力してください')
    }else{
      $('.edit-tk-price').css('border-color','')
      $('.edit-no-product2').text('')
    }
  });
  $('.edit-default05').on('click',function(){
    let ship_day = $(this).val();
    if(ship_day == 0){
      $('.edit-default05').css('border-color','red')
      $('.edit-no-product7').text('選択してください')
    }else{
      $('.edit-default05').css('border-color','')
      $('.edit-no-product7').text('')
    }
  });
  $('.edit-default05').on('change',function(){
    let ship_day = $(this).val();
    if(ship_day == 0){
      $('.edit-default05').css('border-color','red')
      $('.edit-no-product7').text('選択してください')
    }else{
      $('.edit-default05').css('border-color','')
      $('.edit-no-product7').text('')
    }
  });

  $(function(){
    let buildPrompt = `<option value>---</option>`
    let buildHtmlOption = function(parent) {
      let option = `<option value ="${parent.id}">${parent.name}</option>`
      return option
    }
    $('#parent').change(function() {
      let parent_id = $(this).val();
      $.ajax({
        type: 'GET',
        url: '/products/new/mid_category',
        data: {big_category_id: parent_id},
        dataType: 'json'
      })
      .done(function(parent) {
        $('.child').css('display', 'block');
        $('#child').empty();
        $('.grand_child').css('display', 'none');
        $('#child').append(buildPrompt);

        parent.forEach(function(child) {
          var html_option = buildHtmlOption(child);
          $('#child').append(html_option);
        });
      })
      .fail(function() {
        alert('aaaa')
      });
    });

    $(this).on("change", "#child", function() {
      let parent_id = $("#parent").val();
      let child_id = $("#child").val();

      $.ajax({
          type: 'GET',
          url: '/products/new/small_category',
          data: {
            big_category_id: parent_id,
            mid_category_id: child_id
          },
          dataType: 'json'
      })
      .done(function(parent) {
        $('.grand_child').css('display', 'block');
        $('#grand_child').empty();
        $('#grand_child').append(buildPrompt);

        parent.forEach(function(child) {
          var html_option = buildHtmlOption(child);
          $('#grand_child').append(html_option);
        });
      })
    });
  })
  $(function(){
    const buildFileField = (index_box, src)=>{
      let html;
      let index = Math.min(...index_box);

      if (index_box.length == 1) {
         html = `<div class='item-image'>
                  <div class=' item-image__content'>
                    <div class='item-image__content--icon'>
                      <img src=${src} width="114" height="80" >
                    </div>
                  </div>
                  <div class='item-image__operetion'>
                    <div class='item-image__operetion--delete' data-index="${index}">削除</div>
                  </div>
                </div>`
      }else{
        html = `<div class='item-image'>
                  <div class=' item-image__content'>
                    <div class='item-image__content--icon'>
                      <img src=${src} width="114" height="80" >
                    </div>
                  </div>
                  <div class='item-image__operetion'>
                    <div class='item-image__operetion--delete' data-index="${index}">削除</div>
                  </div>
                  <input value="" class="sell-upload-drop-file" id="product_images_attributes_${index}_name" type="file" name="product[images_attributes][${index}][name]">
                </div>`
      }
      return html;
    }
    let file_index = [0,1,2,3,4,5,6,7,8,9];

    $('#edit-image-box-1').on('change', '.sell-upload-drop-file', (e)=>{
      let file = e.target.files[0]
      let file_url = window.URL.createObjectURL(file);

      if (file_index.length != 0){
        $('#edit-image-box__container').hide();
        $('#edit-image-box__container').before(buildFileField(file_index, file_url))
        file_index.shift();
      }
    })
    $('#edit-image-box-1').on('click', '.item-image__operetion--delete', function(){
      let delete_image_id = parseInt($(this).attr('data-index'))

      file_index.push(delete_image_id);
      file_index.sort();

      if (file_index.length == 10) {
        $('#edit-image-box__container').show();
      }else if(file_index.length == 1){
        let html = `<input value="" class="sell-upload-drop-file" id="product_images_attributes_${delete_image_id}_name" type="file" name="product[images_attributes][${delete_image_id}][name]">`
        $('#edit-image-box-1').append(html);
      }
      $(this).parent().parent().remove();
    })
  })
})