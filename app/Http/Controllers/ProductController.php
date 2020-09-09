<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Product;
use Excel;
use App\Imports\ProductsImport;
use App\Jobs\ImportJob;
use App\Exports\ProductExport;



class ProductController extends Controller
{
    public function index()
    {
        $product = Product::all();
        return $product;
    }
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name'   => 'required|max:100',
            'kode'   => 'required',
            'jml'   => 'required|integer',
            'count'   => 'required|integer',
            'user_id'   => 'required|integer',
        ]);

        $product->name    = $request->name;
        $product->kode        = $request->kode;
        $product->jml        = $request->jml;
        $product->count        = $request->count;
        $product->user_id        = $request->user_id;
        $product->save();

        return response()->json([
            'data'  => $product,
            'status'=> 'success'
        ], 201);
    }
    public function create(Request $request)
    {
        $request->validate([
            'name'   => 'required|max:100',
            'kode'   => 'required',
            'jml'   => 'required|integer',
            'count'   => 'required|integer',
            'user_id'   => 'required|integer',
        ]);

        $product                 = new Product;
        $product->name    = $request->name;
        $product->kode        = $request->kode;
        $product->jml        = $request->jml;
        $product->count        = $request->count;
        $product->user_id        = $request->user_id;
        $product->save();

        return response()->json(['status' => 'success'], 200);
    }
    public function storeData(Request $request)
    {
        //VALIDASI
        // return response()->json(['stasstus' => $request->hasFile('file')]);
        // die;
        // dd($request->file('file')->getClientOriginalExtension());
        $this->validate($request, [
            'file' => 'required|mimes:xls,xlsx'
        ]);

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->storeAs(
                'public', $filename
            );
            
            //MEMBUAT JOBS DENGAN MENGIRIMKAN PARAMETER FILENAME
            ImportJob::dispatch($filename);
            return response()->json(['status' => 'berhasil']);
        }  
        return response()->json(['status' => 'gagal']);
    }
    public function exportData() 
    {
        return Excel::download(new ProductExport(''), 'products.xlsx');
    }
}
