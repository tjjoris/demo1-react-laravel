<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

//home page route handled by the index method of PostController
Route::get('/', [PostController::class, 'index']);



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('posts/create', [PostController::class, 'create']);
});


//creates a set of RESTful routes for the posts resource handled by PostCointroller 
//except the index method
Route::resource('posts', PostController::class)->except('index', 'create');


Route::get('demo', function () {
    // sleep(2);
    return Inertia::render('demo');
});

Route::get('home', function () {
    // sleep(2);
    return Inertia::render('home');
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
