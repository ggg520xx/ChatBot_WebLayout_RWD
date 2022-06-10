// $(document).ready(function () {
//   // 內容
// });

// $(document).ready(function () {
//   $('.price_btn').click(function () {
//     console.log('.user_amount')
//     alert(123)

//   })
// });
// 除錯用


// -------此處測試-以下開始----------------------
// ---------------------------------------------







// 前置
$(document).ready(function () {

  // '控制器' . 事件操作  
  $('.btn_up').click(function () {
    //對哪個對象  執行何種動作
    $('body, html').animate({ scrollTop: 0 }, 500);
    // $('html').scrollTop(0);
  })
});








// 問題的滑動
$(document).ready(function () {

  $('.qa_title').click(function () {

    // 判斷 若該物件沒有此class  顏色切換框框顯示
    // 或用toggleclass來做切換
    // 驚嘆號為反

    if (!$(this).hasClass('clolr_switch')) {

      $(this).addClass('clolr_switch');
      $(this).siblings('.qa_content').stop().slideDown(1000);  //設置運動毫秒時間

      // 非this的點擊移除顏色變化
      $('.qa_title').not(this).removeClass('clolr_switch');
      $('.qa_content').not($(this).siblings('.qa_content')).stop().slideUp(500);
      // 非this的內容 同層元素停止並回復






      // ＋－變換 把運作邏輯打出來才想通
      $(this).children('.plus_sign').text('-');
      $('.qa_title').not(this).children('.plus_sign').text('+');
      // 若點擊外框 沒有此class加上   然後＋號變為－號


      // 整層邏輯如下

      // 點擊外框 如果沒有這個變換顏色的類別 就必須上變更的類別 因為點擊了
      // 同時必須把其他的 外框並非 點擊的這個 移除此類別
      // 同時內容物 並非外框 點擊的這個 也必須上移

      // 同時原本呈現的＋號 必須變為－號
      // 同時原本呈現的其他－號   那些外框底下的子層 必須轉變回為＋號



    } else {

      // 判斷反之 若該物件有此class  顏色移除後 框框隱藏

      $(this).removeClass('clolr_switch');
      $(this).siblings('.qa_content').stop().slideUp(1000);
      // 純紀錄  此為同層尋找元素  非下層不需要find
      // $(this).find('.qa_content').stop().slideUp(1000);



      // ＋－變換
      $(this).children('.plus_sign').text('+');


    }
  })
})

// 只可記錄當下點擊
// .stop必加  , 否則會連續紀錄點擊事件N次












// ---------------------------------------------
// ---------------------------------------------

// 試寫 成功取到val

// $(document).ready(function () {
//   $('.price_btn').click(function () {
//     console.log($(this).val())
//   })
// });

// $(document).ready(function () {
//   $('.price_btn').click(function () {
//     var x = ($(this).val());
//     if (x == '10000') {
//       console.log('ok')
//     }
//   })
// });

// ---------------------------------------------



$(document).ready(function () {
  $('.price_btn').click(function () {
    var x = ($(this).val());
    if (x == '10000') {
      $('.user_amount').text('10000')
      $('.cost_amount').text('600')
      $('.cost_amount_standard').text('1600')
    } else if (x == '15000') {
      $('.user_amount').text('15000')
      $('.cost_amount').text('900')
      $('.cost_amount_standard').text('2400')
    } else if (x == '20000') {
      $('.user_amount').text('20000')
      $('.cost_amount').text('1200')
      $('.cost_amount_standard').text('3200')
    } else if (x == '25000') {
      $('.user_amount').text('25000')
      $('.cost_amount').text('1500')
      $('.cost_amount_standard').text('4000')
    } else if (x == '>25000') {
      $('.user_amount').text('>25000')
      $('.cost_amount').text('1800')
      $('.cost_amount_standard').text('4800')
    }
  })
});









