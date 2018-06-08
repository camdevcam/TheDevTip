<?php

get_header(); ?>

	<div id="primary" class="content-area eight columns">

		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) : the_post();

			get_template_part( 'template-parts/content', get_post_format() );
            ?>
          <div class="sharethis-inline-share-buttons"></div>

            <?php
			//the_post_navigation();?>
            
            <div class="author_box">
            <span class="authr">About the Author</span>
            <center><a href="https://www.linkedin.com/in/cameron-c-808961105/" target="_blank" class="">
            <div class="pro_cont">
            <img src="http://www.thedevtip.com/notes/wp-content/uploads/2017/12/U8NyeYHK_400x400.jpg" class="lucky blurd" alt="Cameron Cashwell Web Developer">
            </div>
            </a>
            </center>
            <span class="authbio">   
                I build websites, web apps, and software. Wanna work together? <a href="http://thedevtip.com/#request" target="_blank" class="chat">Let's chat about your project!</a></span>
            </div>
            
			<?php
			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	
	</div><!-- #primary -->

