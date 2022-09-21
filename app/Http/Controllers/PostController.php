<?php

namespace App\Http\Controllers;

use App\Models\Midia;
use App\Models\Post;
use Exception;
use GrahamCampbell\ResultType\Success;
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

    }

    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
      
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
