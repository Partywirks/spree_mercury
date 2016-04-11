//= require spree/backend


//#TODO: use this?
// SpreeMercury = {
//   hideSettings: function(paymentMethod) {
//     if (SpreeMercury.paymentMethodID && paymentMethod.val() == SpreeMercury.paymentMethodID) {
//       $('.payment-method-settings').children().hide();
//       $('#payment_amount').prop('disabled', 'disabled');
//       $('button[type="submit"]').prop('disabled', 'disabled');
//       $('#mercury-warning').show();
//     } else if (SpreeMercury.paymentMethodID) {
//       $('.payment-method-settings').children().show();
//       $('button[type=submit]').prop('disabled', '');
//       $('#payment_amount').prop('disabled', '')
//       $('#mercury-warning').hide();
//     }
//   }
// }

// $(document).ready(function() {
  
//   checkedPaymentMethod = $('[data-hook="payment_method_field"] input[type="radio"]:checked');
//   SpreeMercury.hideSettings(checkedPaymentMethod);
//   paymentMethods = $('[data-hook="payment_method_field"] input[type="radio"]').click(function (e) {
//     SpreeMercury.hideSettings($(e.target));
//   });

// })
