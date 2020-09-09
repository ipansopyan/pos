<table>
 <thead>
     <tr>
         <th>no</th>
         <th>name</th>
         <th>kode</th>
         <th>jml</th>
         <th>count</th>
         <th>qty</th>
     </tr>
 </thead>
 <tbody>
 @php $no = 1 @endphp
 @foreach($products as $product)
     <tr>
         <td>{{ $no++ }}</td>
         <td>{{ $product->name }}</td>
         <td>{{ $product->kode }}</td>
         <td>{{ $product->jml }}</td>
         <td>{{ $product->count }}</td>
         <td>{{ $product->qty }}</td>
     </tr>
 @endforeach
 </tbody>
</table>