<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package light_skeleton
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer ">
		<div class="site-info container">
           Copyright &copy; <?php echo date( Y ); ?> - <?php bloginfo( 'name' ); ?>.
            <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'light-skeleton' ) ); ?>"><?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'light-skeleton' ), 'WordPress' );
			?></a>

        </div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

<script>
$(document).ready(function() {

$('article').prepend('<span class="close">X</span>'); // add the button	
    
$('.tagcloud a').addClass("pulse");
    
$('.vcard').text("Cameron Cashwell");

$('span.close').on("click", function () {
    $(this).parents('article').fadeOut(1400); // use this to access parent only
});
	$('.cta').fadeIn("slow");
      setTimeout(function(){
        $('.cta').effect("bounce", {
            times: 2,
            distance: 80
        }, 1400);
       }, 1500);

if(window.location.href === "http://www.cdev.co/notes/services/"){
    $('.bannr h1').text('cdev.co /./ SERVICES /');
}
    
});	
</script>
</body>
</html>
