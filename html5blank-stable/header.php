<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800" rel="stylesheet">
		<link href="//www.google-analytics.com" rel="dns-prefetch">
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
		<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon-16x16.png">
		<link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/img/icons/site.webmanifest">
		<link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/img/icons/safari-pinned-tab.svg" color="#999966">
		<script defer src="https://use.fontawesome.com/releases/v5.8.2/js/all.js" integrity="sha384-DJ25uNYET2XCl5ZF++U8eNxPWqcKohUUBUpKGlNLMchM7q4Wjg2CUpjHLaL8yYPH" crossorigin="anonymous"></script>
		<script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<meta name="msapplication-TileColor" content="#2b5797">
		<meta name="theme-color" content="#000">

		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper">

			<!-- header -->
			<header class="header clear" role="banner">

					<!-- logo -->
					<div class="logo">
						<img src="<?php echo get_template_directory_uri(); ?>/img/icons/favicon-32x32.png" alt="Logo">
						<p>
							<a href="<?php echo home_url(); ?>">
								re<span>Mark</span>able websites
							</a>
						</p>
					</div>
					<!-- /logo -->

					<!-- hamburger -->
					<button class="hamburger hamburger--spring" type="button">
					  <span class="hamburger-box">
					    <span class="hamburger-inner"></span>
					  </span>
					</button>
					<!-- /hamburger -->

					<!-- nav -->
					<nav class="nav" role="navigation">
						<?php html5blank_nav(); ?>
						<div class="social-links">
							<ul>
								<li><a href="https://www.linkedin.com/in/mark-banfill-web-designer/"><i class="fab fa-linkedin-in"></i></a></li>
								<li><a href="https://github.com/MarkBanfill"><i class="fab fa-github"></i></a></li>
								<li><a href="https://codepen.io/Zen777/"><i class="fab fa-codepen"></i></a></li>
							</ul>
						</div>
					</nav>
					<!-- /nav -->

			</header>
			<!-- /header -->

			<div class="screen-wipe"></div>
			<p class="current-section"><a href="#top">01</a></p>
