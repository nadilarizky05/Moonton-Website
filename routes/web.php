<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('admin', function() {
//     return "Hi Admin";
// })->middleware('role:admin');

// Route::get('user', function() {
//     return "Hi User";
// })->middleware('role:user');

Route::redirect('/', '/prototype/login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::prefix('prototype')->name('prototype.')->group(function() {
    route::get('/login', function() {
        return Inertia::render('Prototype/Login');
    })->name('login');

    route::get('/register', function() {
        return Inertia::render('Prototype/Register');
    })->name('register');

    route::get('/dashboard', function() {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    route::get('/subscriptionPlan', function() {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscriptionPlan');

    route::get('/movie/{slug}', function() {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
