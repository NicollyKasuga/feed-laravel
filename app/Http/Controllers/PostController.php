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
            $posts = Post::with('midia')->latest('created_at')->get();
            return response()->json($posts);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    public function create(Request $request)
    {
        try{

            $file = $request->file('file');
            $postContent = $request->except('file');
    
            $newPost = Post::create($postContent);
            if(!empty($file)){
                $path = 'public/images';
                $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
                $new_file_name = md5(time()).".".$extension; 
                $file->move($path, $new_file_name);
    
                $newMidia = $newPost->midia()->create([
                'filename' => $file['filename'],
                'url' => $new_file_name,
                'post_id' =>$newPost['id']
                ]);
            };
    
        }catch(Exception $e){
            Log::error($e);
        }

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
