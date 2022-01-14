const Header = {
    render() {
        return `
        <div class="bg-orange-500 flex ">
            <ul class="flex">
            <li><a href="/about" class="block px-4 ml-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Tuyển sinh</a></li>
            <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Chương trình đào tạo</a></li>
            <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Góc sinh viên</a></li>
            <li><a href="/admin/dashboard" class="block px-6 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Admin</a></li>
            </ul>
            <form action="" class="from-search ml-28 pt-1">
            <input type="text" class="">
            <input type="submit" value="Tìm kiếm " class="mt-4  gap-8 bg-indigo-900">
          </form>
        </div>
       

        `;
    },
};
export default Header;
