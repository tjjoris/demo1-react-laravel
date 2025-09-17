<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('hello', function () {
    sleep(2);
    return Inertia::render('demo');
});

Route::get('wave', function () {
    return Inertia::render('wave');
})->name('wave');

Route::get('salute', function () {
    sleep(2);
    return Inertia::render('salute', ['name'=>'Sam']);
})->name('salute');

Route::inertia('about', 'about/about');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
