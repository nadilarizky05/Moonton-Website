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
                'name' => 'Upin Ipin Keris Siamang Tunggal',
                'slug' => 'upin-ipin-keris-siamang-tunggal',
                'category' => 'Adventure',
                'video_url' => 'https://www.youtube.com/watch?v=wM8ic6PNMYA',
                'thumbnail' => 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7511/1457511-i-2911ebb1afc8',
                'rating' => 4.3,
                'is_featured' => 0
            ],
            [
                'name' => 'Jumbo',
                'slug' => 'jumbo',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=yMqDgbZmBdk',
                'thumbnail' => 'https://raciniga.com/wp-content/uploads/2025/02/Film-Animasi-JUMBO-Resmi-Merilis-Poster-dan-Trailer.png',
                'rating' => 4.2,
                'is_featured' => 0
            ],
            [
                'name' => 'Moana 2',
                'slug' => 'moana-2',
                'category' => 'Adventure',
                'video_url' => 'https://www.youtube.com/watch?v=LKFuXETZUsI',
                'thumbnail' => 'https://cdn.rri.co.id/berita/Atambua/o/1731159523803-NSBUC46XCJF2JPAICEHSCJWLPY/cexfp76x1si0r99.avif',
                'rating' => 4.5,
                'is_featured' => 1
            ],
        ];
        Movie::insert($movies);
    }
}
