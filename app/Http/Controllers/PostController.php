<?php

namespace App\Http\Controllers;

use App\Models\Midia;
use App\Models\Post;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getAll() 
    {
        try{
            $posts = Post::all();
            return response()->json($posts);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    public function create(Request $request)
    {

        $image = $request->except('author', 'category', 'textContent');
        $postContent = $request->except('filename', 'url');

        $newPost = Post::create($postContent);
        if(!empty($image['filename'])){
            $newMidia = $newPost->midia()->create([
            'filename' => $image['filename'],
            'url' =>$image['url'],
            'post_id' =>$newPost['id']
            ]);
        };

        return "Post was created";

    }

    public function update(Request $request)
    {
        $image = $request->except('author', 'category', 'textContent','id');
        $postContent = $request->except('filename', 'url');

        $updatedPost = Post::where('id', $postContent['id'])->update([
            'author' => $postContent['author'],
            'category' => $postContent['category'],
            'textContent' => $postContent['textContent']
        ]);

        if (!empty($image['filename']) && !empty($image['url']))
        {
            Midia::where('post_id', $postContent['id'])->update([
                'filename' => $image['filename'],
                'url' => $image['url']
            ]);
        };
        
        return "Post was updated";
    }

    public function destroy( $id)
    {
        try{
            $result = Post::where('id', $id)->first()->delete();

            return '';
        }
        catch(Exception $e){
            Log::error($e);

        }
    }
};
