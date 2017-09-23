<?php

namespace App;

use Carbon\Carbon;
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

    public function scopePublished($query)
    {
        $query->where([
            ['published_at', '<=', Carbon::now()],
            ['is_hide', false]
        ]);
    }
}
