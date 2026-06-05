import { Link } from 'react-router-dom';

export default function Wishlist() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Navigation Bar */}
          <header className="flex items-center justify-between border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4 sticky top-0 z-50">
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-3 text-primary">
                <div className="size-8 galaxy-gradient rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-tight dark:text-white">MobileStore</h2>
              </Link>
              <nav className="hidden lg:flex items-center gap-8">
                <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">Trang chủ</Link>
                <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">Điện thoại</a>
                <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">Máy tính bảng</a>
                <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" href="#">Phụ kiện</a>
              </nav>
            </div>
            <div className="flex flex-1 justify-end gap-4 md:gap-6 items-center">
              <div className="hidden md:flex w-full max-w-xs relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-sm" placeholder="Tìm kiếm sản phẩm..." type="text" />
              </div>
              <div className="flex gap-2">
                <Link to="/wishlist" className="relative flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">favorite</span>
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">4</span>
                </Link>
                <Link to="/cart" className="flex size-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all">
                  <span className="material-symbols-outlined">shopping_cart</span>
                </Link>
              </div>
              <Link to="/profile" className="size-10 rounded-full border-2 border-primary/20 bg-cover bg-center" data-alt="User profile avatar placeholder" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKxR1bCXXvGGyttCXFqW3GzSOK33oGhprguyidi0P_PUTZ41XuwPEFRa8yQ72NmGyoELwaVlg01Q4XqG5BO0Ob59EU21IKcJaOr8VN0hpKfpm32a_Hj7FUA9ouU2_tHAAS-c7caccD-h8wI1YoTWNVwuBDnQXZkQPSDr5Ptk7Gzk55Y4q6aQbQEqB4QnQ3t7rmNKVhNlA8_ECJf0A8Ju2tyUFhZVLdp9K741oIPop76YaCDvc6I8Vx-UoQrUMTz7DeoR2FLFAVAMk")' }}></Link>
            </div>
          </header>
          <main className="max-w-[1200px] mx-auto w-full px-6 py-10">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">auto_awesome</span>
                  <span className="text-sm font-bold uppercase tracking-widest">Của riêng bạn</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight dark:text-white">Danh sách yêu thích</h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-lg">Nơi lưu trữ những siêu phẩm công nghệ mà bạn đang khao khát sở hữu tại MobileStore.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
                  <span className="material-symbols-outlined text-sm">shopping_bag</span>
                  Mua tất cả
                </button>
              </div>
            </div>
            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 gap-6">
              {/* Item 1 */}
              <div className="group relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm">
                <div className="w-full md:w-48 aspect-square rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img alt="iPhone 15 Pro Max Deep Purple" className="object-contain w-full h-full p-4 group-hover:scale-110 transition-transform duration-500" data-alt="Smartphone iPhone 15 Pro Max in deep purple color" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzAaWQNYPbuLnjlBhtaopOo3bk5a_hmeKq--8T7mO9Ts_HxUXoGWWQpY_Ge4CfPDdZ-0REaE4Q2RvPZu1PqNL5aPMNYxx8AexbB6yTRKfrXZ-2lzpqtSol75U56ttZJT9nGLzruwUHFJ8T3bbrDHKRWQdzPYKwS9y-sgWfby7SrSUUZi0ehgXF35zs8osEaAwcjupxV_NMqDM8xCsQ2_cnc5P3YGrQkkyto7Mg4Ge6MZC3Amk1GjlibhKVqCHJ8ZWeEmK0_4PrJSg" />
                </div>
                <div className="flex flex-1 flex-col gap-2 w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded uppercase">Bán chạy</span>
                      <h3 className="text-xl font-bold mt-2 dark:text-white">iPhone 15 Pro Max 256GB</h3>
                      <p className="text-slate-500 text-sm mt-1">Titan Tự Nhiên | Chính hãng VN/A</p>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors p-2" title="Xóa khỏi danh sách">
                      <span className="material-symbols-outlined">delete_forever</span>
                    </button>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-black text-primary">29.490.000₫</p>
                      <p className="text-sm text-slate-400 line-through">34.990.000₫</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined text-sm">shopping_cart</span>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="group relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm">
                <div className="w-full md:w-48 aspect-square rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img alt="Samsung Galaxy S24 Ultra" className="object-contain w-full h-full p-4 group-hover:scale-110 transition-transform duration-500" data-alt="Samsung Galaxy S24 Ultra smartphone in titanium violet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjtsU7yzA-IWOYNwCy7rjaQkQnRE9TXQqLwhGVD3tJPZiswiuFNvOdwXsW6Dbnt6bsRIi4F_7AII7E4p5HqwjLVxInZWLjNvNkvGZ_BwP9QAWSX3U7Z5gbqaV_nJz9WB8hRy0G99RVtUW9Hajy4U5Z4esLupmdcI7ZsGU7uKou8OuxZ4LwDIQqgav177qZKcNmI3x1G5WK9oHxA5WPpZ7jeyHexIHJ7UWEy_2S7h_4T43i6gVyR3kQA69xC9FntleDuqxoFzLBVnE" />
                </div>
                <div className="flex flex-1 flex-col gap-2 w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded uppercase">Mới nhất</span>
                      <h3 className="text-xl font-bold mt-2 dark:text-white">Samsung Galaxy S24 Ultra</h3>
                      <p className="text-slate-500 text-sm mt-1">Titanium Violet | 12GB/512GB</p>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors p-2" title="Xóa khỏi danh sách">
                      <span className="material-symbols-outlined">delete_forever</span>
                    </button>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-black text-primary">31.990.000₫</p>
                      <p className="text-sm text-slate-400 line-through">37.490.000₫</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined text-sm">shopping_cart</span>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="group relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm">
                <div className="w-full md:w-48 aspect-square rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img alt="Sony WH-1000XM5" className="object-contain w-full h-full p-4 group-hover:scale-110 transition-transform duration-500" data-alt="Premium wireless noise cancelling headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0aSpMDSKEba9DJz5If60YGA1k9d2zug789pvKxo-v1mnTa-SVLKqOW2YsKhu3D_tHAMlxtB-1IeSGLQVFwVeNjikpLNJuu4m-PXTyc2KpdOXbHCLGhfRQ0oj3nrinIvAvC6r4cg3gq9if1PgUpHqCnfHDpwcdtX6Xlxg6-wGgnvXVFuDFKb62Hj6OXtR2WhPnojKLAzIJeb9ivkm_Nr5LTzINnJ5IUzUa4pSfXQnUF68ALJBSkOq0sjosiPWHPXPA6X3Xnfg6UjA" />
                </div>
                <div className="flex flex-1 flex-col gap-2 w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded uppercase">Phụ kiện</span>
                      <h3 className="text-xl font-bold mt-2 dark:text-white">Sony WH-1000XM5 Wireless</h3>
                      <p className="text-slate-500 text-sm mt-1">Midnight Blue | Chống ồn đỉnh cao</p>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors p-2" title="Xóa khỏi danh sách">
                      <span className="material-symbols-outlined">delete_forever</span>
                    </button>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-black text-primary">7.490.000₫</p>
                      <p className="text-sm text-slate-400 line-through">9.990.000₫</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined text-sm">shopping_cart</span>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 4 */}
              <div className="group relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm">
                <div className="w-full md:w-48 aspect-square rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img alt="iPad Pro M2" className="object-contain w-full h-full p-4 group-hover:scale-110 transition-transform duration-500" data-alt="Apple iPad Pro with M2 chip and liquid retina display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAj0nxAOILpelCgAC3ESonwEYcQd73j3yea8d0cANdPsulhtsS7co90LhAZS5ppLLKoHM3v0Ctds0Zs6E525W-d6U484kP1b7BoMYK7_vblY7DzC89HMhiAcYvhMN8VAivxXPQtPVGTwbGbII2hdPV9_FYo6LSfjorKEdOo42Q2lO_wizjfWB_6cQqmzRQWU-ujDC6CnmVIf0oLh2WFuDQe3Rc8rFdVJm7bQQ47ZnR3wOZQsr4EInT_XhiGN_vM6WzAyBFvuQJNZU" />
                </div>
                <div className="flex flex-1 flex-col gap-2 w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded uppercase">Đồ họa</span>
                      <h3 className="text-xl font-bold mt-2 dark:text-white">iPad Pro 11 inch M2 WiFi</h3>
                      <p className="text-slate-500 text-sm mt-1">Space Gray | 128GB</p>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors p-2" title="Xóa khỏi danh sách">
                      <span className="material-symbols-outlined">delete_forever</span>
                    </button>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-black text-primary">20.190.000₫</p>
                      <p className="text-sm text-slate-400 line-through">23.990.000₫</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined text-sm">shopping_cart</span>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Suggested Products */}
            <section className="mt-20">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold dark:text-white">Có thể bạn quan tâm</h2>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Suggestion 1 */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
                  <div className="aspect-square bg-slate-50 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden">
                    <img alt="Apple Watch Ultra 2" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" data-alt="Apple Watch Ultra 2 with ocean band" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzG5Xe-jPbd9lYNvzzro17Lh5P2lxl09S8t00dK4dWeVBBlEDsCpHQCiygltIMjvLErysvBKuQmu6Ua4a8RPMKmfdHs41ukYw_Hx4_vw-_UX6ghpAfFeKjZyheW3iFURxCdkm6mi67NgILCSu-UrWZ-SYOKSkN_aFmZI8_VRXHd5ZiHiXMF1LPE49vsDCpnnZjFPiE5Kcjc4JipF7r0b2mAWETUEfqd7dtQKC2lJ-T7ocO9f0WNisaKCNIw953CoM0ElRQpng6p-c" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm line-clamp-1">Apple Watch Ultra 2</h4>
                  <p className="text-primary font-bold mt-1">21.490.000₫</p>
                </div>
                {/* Suggestion 2 */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
                  <div className="aspect-square bg-slate-50 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden">
                    <img alt="MacBook Pro M3" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" data-alt="Apple MacBook Pro with M3 chip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_RneKXtgUyq0uK_5TNgFR7KHbIA-LEhFHxou3dIdgu9rBvILmFoQxyfFAt-Qvk493v3ICNr_f1sxLj7c3g9jZl9l4JRtzqwdhVfaOMov59W1jZE42opWEfVumgt4u_YoHkYFqlLV5KJiA0CHbyE1RUgf2nG9qkZYoGJ9SM46Wu2cTxqQRlXYJnilRLCfDBTFkaQwiBglr3hARPMvWzgzBJaohbZHP4ctkw4NGUpT35Hl6H3-mRR1Rhm6BjavTug4ScVB7dgIyUok" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm line-clamp-1">MacBook Pro 14 M3</h4>
                  <p className="text-primary font-bold mt-1">39.990.000₫</p>
                </div>
                {/* Suggestion 3 */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
                  <div className="aspect-square bg-slate-50 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden">
                    <img alt="AirPods Pro 2" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" data-alt="Apple AirPods Pro 2 with USB-C case" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCMaXk8H89hzWnKnkjVwEGK6FcgweXzrAne4MGWh--YwWhS8VHBzSo1FDlFih_NSDpben0KLjJlwIKEp6zqj_RGmh03MlKae4q84EVoa3wo-mQtneBukR1DtqCXd2RP1YEz5eAD0iQPsdKIByekHO6kEwtEEk9rHOY0kykPrhFu-qEQJ6KGZlbpX_YGBE9EDdhI_n-LAo2WU5u6jMVWcoBbyfT9pjlO-wO7jJl2lIAEIxJOZKF90kb-fCp8WK4Wa9dHf1MBycQTyw" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm line-clamp-1">AirPods Pro Gen 2 MagSafe</h4>
                  <p className="text-primary font-bold mt-1">5.890.000₫</p>
                </div>
                {/* Suggestion 4 */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
                  <div className="aspect-square bg-slate-50 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden">
                    <img alt="MagSafe Charger" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" data-alt="Apple MagSafe wireless charger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPT5hXPeeshEY4ClRHZA_z10I_M5AO7hKN_Rd9qdi0XSfFB8G5U1mJOn4NGb4mKY1jWFqxAyWtTKZT4Zb4vhu1l_uYGDo6clPV60h-X76HuIJ8o9piHqUcBPh-LDybnUhmEsm7aISJIlnd9TEH5quyIM5zXVBaaJ6omxK8UGISSqn7JCsJe0uzsKH-bqL6qSlipJXbFICCsUroXwGeyU9WOcHkk9D-YcHmAogzCPmEt-_9w80a6dpGhx-31qcyCuqIhttZR4EHflA" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm line-clamp-1">Sạc MagSafe Apple</h4>
                  <p className="text-primary font-bold mt-1">1.090.000₫</p>
                </div>
              </div>
            </section>
          </main>
          {/* Footer */}
          <footer className="bg-slate-100 dark:bg-slate-900/50 mt-20 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <div className="size-6 galaxy-gradient rounded flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-xs">rocket_launch</span>
                  </div>
                  <h3 className="text-lg font-bold dark:text-white">MobileStore</h3>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Trải nghiệm công nghệ đỉnh cao với chuỗi cửa hàng di động uy tín hàng đầu Việt Nam.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 dark:text-white">Sản phẩm</h4>
                <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><a className="hover:text-primary transition-colors" href="#">iPhone</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Samsung</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Xiaomi</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Phụ kiện</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 dark:text-white">Hỗ trợ</h4>
                <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><a className="hover:text-primary transition-colors" href="#">Chính sách bảo hành</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Giao hàng &amp; đổi trả</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Hướng dẫn mua hàng</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 dark:text-white">Liên hệ</h4>
                <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <p>Hotline: 1800 6601</p>
                  <p>Email: contact@mobilestore.vn</p>
                  <div className="flex gap-4 mt-2">
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">social_leaderboard</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">video_library</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">campaign</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500">
              <p>© 2024 MobileStore. All rights reserved. Designed with Galaxy Purple Theme.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
