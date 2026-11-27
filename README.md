# Cổng hướng dẫn Công dân số Đak Đoa

Bản mẫu website tĩnh, responsive, tập trung hướng dẫn người dân tích hợp 5 nhóm thông tin cơ bản trên VNeID; ưu tiên tài khoản hưởng an sinh xã hội.

## Cấu trúc
- `index.html`: nội dung và cấu trúc trang
- `assets/css/style.css`: giao diện, responsive cho điện thoại/máy tính
- `assets/js/app.js`: chuyển bước hướng dẫn, cửa sổ hướng dẫn 5 nhóm thông tin, menu di động
- `README.md`: hướng dẫn cài đặt

## Chạy thử trên máy tính
Mở trực tiếp `index.html` bằng Chrome/Edge. Website không cần cài Node.js, không cần máy chủ và không có backend.

## Đưa lên GitHub Pages
1. Giải nén ZIP.
2. Mở repository GitHub của đơn vị.
3. Upload toàn bộ nội dung bên trong thư mục `dakdoa-congdan-so` lên thư mục gốc repository (để `index.html` nằm ngay thư mục gốc).
4. Commit changes.
5. Vào Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
6. Chờ GitHub Pages triển khai, sau đó mở URL được GitHub hiển thị.

## Cấu hình trước khi công bố
- Xác minh tên gọi cơ quan, địa giới hành chính, số điện thoại, địa điểm hỗ trợ và người chịu trách nhiệm nội dung.
- Thay nội dung “điểm hỗ trợ” bằng lịch/địa điểm đã được đơn vị phê duyệt.
- Kiểm tra lại quy trình VNeID trên phiên bản ứng dụng đang triển khai tại thời điểm công bố.
- Chỉ công bố với danh nghĩa Công an xã sau khi được người có thẩm quyền phê duyệt.
- Kiểm tra giấy phép, quyền sử dụng ảnh/logo và nội dung từ các nguồn bên ngoài. Bản mẫu không sử dụng logo chính thức của lực lượng Công an.

## An toàn dữ liệu
Website chỉ cung cấp hướng dẫn tĩnh. Không có form thu thập dữ liệu, không lưu CCCD, số tài khoản ngân hàng, mật khẩu, passcode, OTP hoặc dữ liệu sức khỏe. Không thêm các trường dữ liệu nhạy cảm vào website công khai.

## Lưu ý nội dung
Giao diện VNeID và tên chức năng có thể thay đổi. Hướng dẫn tài khoản thanh toán/ASXH được xây dựng theo thông tin công bố của Cổng Thông tin điện tử Chính phủ và nguồn cơ quan nhà nước trong năm 2026. Luôn rà soát lại hướng dẫn chính thức trước khi phát hành.

## Giao diện
Bản cập nhật bổ sung hệ thống nút bo tròn có hiệu ứng nổi 3D (hover/nhấn), tăng độ rõ của các thẻ hướng dẫn, trạng thái bước và hiệu ứng focus cho bàn phím. Có hỗ trợ prefers-reduced-motion.
