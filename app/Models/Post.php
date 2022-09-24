<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [ 'author', 'category','textContent'];

    protected $guarded = [];

    public function midia(){
        return $this->hasOne(Midia::class);
    }
}
