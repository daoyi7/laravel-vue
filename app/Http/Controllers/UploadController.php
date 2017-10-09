<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    //
    public function upload(Request $request) {
        if($request->isMethod('POST')) {

            // var_dump($_FILES);
            $file = $request->file('source');
            // dd($file);
            if($file->isValid()) {

                $originalName = $file->getClientOriginalName();
                $ext = $file->getClientOriginalExtension();
                $type = $file->getClientMimeType();
                $realPath = $file->getRealPath();

                $fileName = date('Y-m-d-H-i-s') . '-' . uniqid() . '.' . $ext;

                Storage::disk('uploads')->put($fileName, file_get_contents($realPath));
            }

            exit;
        }

        // return view('index');
    }
}
