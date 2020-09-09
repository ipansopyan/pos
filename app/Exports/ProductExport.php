<?php

namespace App\Exports;

use App\Product;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;




class ProductExport implements FromView
{
    /**
    * @return \Illuminate\Support\Collection
    */
    use Exportable;
    
    public function view(): View
    {
        return view('product', [
            'products' => Product::all()
        ]);
    }
}
