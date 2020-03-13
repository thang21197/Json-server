// const axios = require('axios');

// // Phương thức GET thường dùng để lấy dữ liệu từ server về, có thể làm ngược lại nhưng không bảo mật nên không ai làm thế cả 
// // thay vào đó ta dùng phưng thức POST. Qua bài này ta có thể hiểu GET dùng để lấy giữ liệu, POST đẩy dữ liệu lên ( Cập nhật) Server,
// //  PATCH và PUT dùng để sửa nhưng PUT là sửa toàn bộ xong ghi đẻ, còn PATCH là sửa 1 phần

// // axios.get('http://localhost:3000/comments')
// //   .then(function (response) {
// //     // handle success
// //     console.log(JSON.stringify(response.data));
// // })

// // Khi thê 1 trường id vào mà k khai báo id thì id sẽ tự tăng, dựa vào id ta mới có thể sửa hoặc xóa được phần tử
// // axios.post('http://localhost:3000/comments/',{
// //     title:'comment 4',
// //     author:'typicode'
// // })
// //   .then(function (response) {
// //     // handle success
// //     console.log(response.data);
// // })
// // .catch(function(err) {
// //         console.log('Loi o dau roi');
// //     });

// // Ta dùng PATCH VÀ PUT để sửa dữ liệu đều bỏ postID đi nhưng PATCH thì dữ lại ( chỉ sửa 1 phần), còn PATCH thì bị mất do ghi đè
// // axios.put('http://localhost:3000/comments/2',{
// //     id:2,
// //     body:'Comment 2',
// // 
// // })
// //   .then(function (response) {
// //     // handle success
// //     console.log(response.data);
// // })
// // .catch(function(err) {
// //         console.log('Loi o dau roi');
// // });
// // axios.patch('http://localhost:3000/comments/2',{
// //     id:2,
// //     body:'Comment 1'
// // })
// //   .then(function (response) {
// //     // handle success
// //     console.log(response.data);
// // })
// // .catch(function(err) {
// //         console.log('Loi o dau roi');
// // });
// axios.delete('http://localhost:3000/comments/3')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
// })
// .catch(function(err) {
//         console.log('Loi o dau roi');
// });
