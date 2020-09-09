<?php

namespace App\Exports;

use App\Product;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;


class ProductExport implements FromQuery
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function query()
    {
        return Product::query()->where('name', 'like', '%'. $this->name);
    }
}
