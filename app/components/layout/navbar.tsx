export default function Navbar() {
    return (
      <nav
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        lang="th"
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
  
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            {/* โลโก้ */}
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
              <img src="" alt="" />
            </div>
  
            {/* H1 */}
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">
              Rak Pom
            </h1>
          </div>
  
          {/* Menu */}
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
            >
              หน้าหลัก
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
            >
              ดูของ
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
            >
              ทรงผมยอดนิยม
            </a>
  
            {/* Button */}
            <a
              href="#"
              className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
            >
              เข้าสู่ระบบ
            </a>
          </div>
        </div>
      </nav>
    );
  }
  