<script>
// Divi CTA Card Snippets
jQuery(document).ready(function(){

    // Add a spinner
    jQuery(".trg-spinner a" ).click(function() {
        jQuery(this).parent().append("<div class='trg-spinner-container'></div>");
    });

    // Append an overlay element
    jQuery(".trg-overlay-container").append("<div class='trg-overlay'><div class='overlay-content'></div></div>" );

    // Wrap the element in a container
    jQuery( ".trg-wrap" ).wrap( "<div class='trg-wrap-container'></div>" );
    // Move the description and the button to the new container
    jQuery(function(){
        jQuery(".trg-wrap .et_pb_promo_description").each(function(){
            jQuery(this).insertAfter(jQuery(this).parent())
        })
        jQuery(".trg-wrap .et_pb_promo_button").each(function(){
            jQuery(this).insertAfter(jQuery(this).parent())
        })
    })

});
</script>