<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Spatie\Permission\PermissionServiceProvider;
use Spatie\Permission\Middleware\RoleMiddleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withProviders([
        PermissionServiceProvider::class,
    ])
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        // Mendaftarkan middleware aliases
        $middleware->alias([
            'role' => RoleMiddleware::class,
            'checkUserSubscription' => \App\Http\Middleware\CheckUserSubscription::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();