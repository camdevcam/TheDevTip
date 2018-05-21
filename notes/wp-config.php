<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

define('WP_HOME','http://thedevtip.com/notes/');
define('WP_SITEURL','http://thedevtip.com/notes/');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cdev99_wp1');

/** MySQL database username */
define('DB_USER', 'cdev99_wp1');

/** MySQL database password */
define('DB_PASSWORD', 'D*kTf3(AT[tunX3KCG*70.(5');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'DPPGMtwtmU4uoVQZEes8aaWsbMQd36wmnkcHgwRGyAy8oaVSgWQCXH9IPO8GPKLm');
define('SECURE_AUTH_KEY',  'ZVFGIDm381VKhccN3lCKdrPkDslbfxB5TVpn9cbkzKrlOvCBvFNqzbPI0Vmhj0k4');
define('LOGGED_IN_KEY',    'iTioc5ofg5ZjsPmzoOxhp4Q0L23Q4omblSXroZIYxbWc8blYnmcliAdIAHx4FROC');
define('NONCE_KEY',        'htnVXPz5SGSE45swa9fuKhRATtVD0R7gORUrmzH26aN0ZArTsdmhW7nYfk2v4wRh');
define('AUTH_SALT',        'uoQbhPA2r0weQrgAhSTrh7UsIYzCzA2SomCyFwuqRa1OGfpNMtkuZNYGxXbHFODM');
define('SECURE_AUTH_SALT', 'BjyGFApQwoatymPF8zxe2LDnIls7h6j8SBRhaD4tLzxShhkBoivuklUjnoN2KCJP');
define('LOGGED_IN_SALT',   'hZlY93brnQf4XbfOIyriNcv6X2nT6cMd7ecQ4mhCL96ZDwtDRTtFBrxUeYva18Yb');
define('NONCE_SALT',       'EP7Pmu82I4MePEHvVB3bNErHhoXxp7m7hQbnQDF8VUwXBWmKwCwQIeQ83XYUanTm');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
