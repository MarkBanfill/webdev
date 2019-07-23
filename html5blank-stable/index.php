<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>

			<h1><?php _e( 'Latest Posts', 'html5blank' ); ?></h1>

			<!-- INSERT BLOG INTRO -->
			<?php
			  $posts_page_id = get_option('page_for_posts');
			  $posts_page = get_post($posts_page_id);
			  if( $posts_page->post_content ){
			    echo wpautop( $posts_page->post_content );
			  }
			?>

			<?php get_template_part('loop'); ?>

			<?php get_template_part('pagination'); ?>

		</section>
		<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
