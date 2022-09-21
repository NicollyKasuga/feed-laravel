<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Midia extends Model
{
    use HasFactory;

    protected $fillable =['filename','url','post_author'];

    public function post(){
        return $this->belongsTo(Post::class);
    }
}
