<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    //
    protected $fillable = [
        'title',
        'intro',
        'content',
        'like_counts',
        'view_counts',
        'is_hide',
        'published_at',
    ];
}
