const Header = {
    render() {
        return `
        <div class="header_top bg-[#272f54] py-[13px]">
        <a href=""><img src="https://i.imgur.com/5EK1lFm.png" alt="" class="m-auto"></a>
    </div>
        <div class="bg-orange-500 flex ">
            <ul class="flex">
            <li><a href="/" class="block px-4 ml-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Trang chủ</a></li>
            <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Chương trình đào tạo</a></li>
            <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Góc sinh viên</a></li>
            <li><a href="/admin/dashboard" class="block px-6 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Admin</a></li>
            </ul>
            <form action="" class="from-search ml-28 pt-4">
            <input type="text" class="">
           
          </form>
          <ul class="flex">
          <li><a href="/signup" class="block px-4 ml-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Sigin</a></li>
          <li><a href="/signin" class="block px-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Signup</a></li>
         
          </ul>
        </div>
       

        `;
    },
};
export default Header;
