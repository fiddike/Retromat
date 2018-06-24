<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Debug\Debug;

// When working on a separate dev instance of retromat, you can comment out // the following block.
// Then you should be able to access https://yourDevInstance.canopus.uberspace.de/app_dev.php
// Make sure you do NOT commit this change to git.
//
// START BLOCK: Not needed for dev instance

// Whitelist includes 185.26.156.32 which belongs to avior, so that
// app_dev.php can be reached using a tunnel as described here:
// 1. Temporarily add a line to your local /etc/hosts file ...
// 127.0.0.1 		retromat.org
// ... so your browser will make a request to 127.0.0.1 using the correct domain name. Then:
// 2. Make sure you have a free local port 443 (i.e. no local webserver running on it).
// Verify by opening https://retromat.org, there should be a connection error.
// 3. Create the tunnel:
// sudo ssh -N -L 443:retromat.org:443 retromat@avior.uberspace.de
// Now you should be able to access https://retromat.org/app_dev.php
if (!(in_array(@$_SERVER['REMOTE_ADDR'], ['127.0.0.1', '::1', '185.26.156.32']) || PHP_SAPI === 'cli-server')
) {
    header('HTTP/1.0 403 Forbidden');
    exit('The debug controller can only be accessed using a SSH tunnel. See the file backend/web/app_dev.php for detailed instructions on how to setup the tunnel.');
}

// END BLOCK: Not needed for dev instance

/** @var \Composer\Autoload\ClassLoader $loader */
$loader = require __DIR__.'/../vendor/autoload.php';
Debug::enable();

$kernel = new AppKernel('dev', true);
if (PHP_VERSION_ID < 70000) {
    $kernel->loadClassCache();
}
$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
