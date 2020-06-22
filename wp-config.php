<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'safetycine' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'T:yY1# zm!9l+1<J+:QjTGL 9Jq]R]w3x;>T.]U7M9TZ%D~+US0EMKXf!:IW,c<^' );
define( 'SECURE_AUTH_KEY',  ']sjU$MSoKX[~-DQgAUX_:@Lg8$TP~Eoz9%QN< bZdA,,}B+-*j9_?6FpnVqex9s4' );
define( 'LOGGED_IN_KEY',    'hQb(a.>ujs!o55f;vx$O)V#x6NT6s+4C0Z&?@p~iA:Pe,^[DOIVxGgh?isbhQS#.' );
define( 'NONCE_KEY',        'kO6$BF]0MEqf?~Ag+ ,y)J*PQ7DfFa59ArbjO)_0E~ZB..;u]=1on{m7vt9DR}{%' );
define( 'AUTH_SALT',        '^g(fS`%p:%$!#Pvtz^OX)#y/ge)]g2Q0j?uW&EqH.%YcivVrnxUX1RVH~X0=GW}y' );
define( 'SECURE_AUTH_SALT', 'OK}a)vb/<q`Jv%:aCwRd`mu%h& (<~B[X=) $T0G${idG1`clv0U)(]B+t|8+$r)' );
define( 'LOGGED_IN_SALT',   '4TBCrVLFIh^Tm:]%x%0w|,JTglT:CV]|gq$?J::K5Ns0w[6db8_-BT52x9R%DKkZ' );
define( 'NONCE_SALT',       'r{ohaYarOR$oz-q>1i|D6bSr(&r=Qyo#R=0x_rg`~7VTV>6#abfhU!tDp,b2r 6E' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
