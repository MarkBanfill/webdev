			<!-- footer -->
			<footer class="footer section8" role="contentinfo">

				<!-- footer widget added by me -->
				<div id="widgetized-area">
					<!-- copyright -->
					<p class="copyright">
						&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>
					</p>
					<!-- /copyright -->

					<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('footer-widget-area')) : else : ?>
						<div class="pre-widget">
							<p><strong>Widgetized Area</strong></p>
							<p>This panel is active and ready for you to add some widgets via the WP Admin</p>
						</div>
					<?php endif; ?>

					<p class="back2top"><a href="#top"><i class='fas fa-caret-square-up'></i></a></p>
				</div>

			</footer>
			<!-- /footer -->

		</div>
		<!-- /wrapper -->

		<?php wp_footer(); ?>

		<!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
