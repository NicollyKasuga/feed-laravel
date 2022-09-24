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

    public function update(Post $request, $id)
    {
        try{
            $post = Post::find($id);
            $post->author = $request->input('edit_author');
            $post->category = $request->input('edit_category');
            $post->textContent = $request->input('edit_textContent');
            $post->save();


        }catch(Exception $e){
            Log::error($e);
        }

          
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
