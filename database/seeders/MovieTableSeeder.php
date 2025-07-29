<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => '',
                'thumbnail' => '',
                'rating' => 9.3,
                'is_featured' => 1
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => '',
                'thumbnail' => '',
                'rating' => 9.2,
                'is_featured' => 0
            ],
            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Drama',
                'video_url' => '',
                'thumbnail' => '',
                'rating' => 9.0,
                'is_featured' => 0
            ],
        ];
        Movie::insert($movies);
    }
}
