const steps = [
  {kicker:"BƯỚC 01 · TRUY CẬP CHỨC NĂNG",title:"Mở ứng dụng VNeID và chọn “Ví giấy tờ”",desc:"Đăng nhập tài khoản định danh điện tử mức độ 2 đang hoạt động. Tại màn hình chính, chọn “Ví giấy tờ”.",tip:"Chỉ thao tác trên điện thoại của chính công dân. Không cung cấp mật khẩu, passcode hoặc OTP cho người khác.",menu:["Ví giấy tờ","An sinh xã hội"]},
  {kicker:"BƯỚC 02 · TẠO YÊU CẦU",title:"Chọn “Tích hợp giấy tờ” và “Tạo mới yêu cầu”",desc:"Trong Ví giấy tờ, mở chức năng Tích hợp giấy tờ, sau đó chọn Tạo mới yêu cầu. Chọn nhóm thông tin tài khoản theo giao diện ứng dụng.",tip:"Nếu tên mục trên điện thoại khác với hướng dẫn, hãy đọc kỹ nội dung trên VNeID và tham khảo hướng dẫn chính thức.",menu:["Tích hợp giấy tờ","Tạo mới yêu cầu"]},
  {kicker:"BƯỚC 03 · KHAI BÁO THÔNG TIN",title:"Chọn nhà cung cấp và nhập thông tin tài khoản",desc:"Chọn loại thông tin tài khoản thanh toán; chọn nhà cung cấp phù hợp và nhập số tài khoản/thẻ/ví theo yêu cầu. Kiểm tra chính xác trước khi xác nhận.",tip:"Chỉ nhập thông tin trên ứng dụng VNeID chính thức. Không gửi số tài khoản, ảnh chụp giấy tờ hoặc thông tin ngân hàng vào website hướng dẫn này.",menu:["Thông tin tài khoản","Nhà cung cấp"]},
  {kicker:"BƯỚC 04 · GỬI VÀ THEO DÕI",title:"Xác nhận và gửi yêu cầu tích hợp",desc:"Đọc lại thông tin, tích xác nhận thông tin đã khai báo là đúng và nhấn Gửi yêu cầu. Theo dõi kết quả tra cứu, đối chiếu trên VNeID.",tip:"Gửi yêu cầu thành công không đồng nghĩa dữ liệu đã được phê duyệt ngay. Hãy kiểm tra trạng thái xử lý trong ứng dụng.",menu:["Kiểm tra thông tin","Gửi yêu cầu"]},
  {kicker:"BƯỚC 05 · CHỌN TÀI KHOẢN HƯỞNG ASXH",title:"Đặt tài khoản vừa tích hợp làm tài khoản hưởng ASXH",desc:"Khi tài khoản thanh toán đã hiển thị trong VNeID, chọn tài khoản đó và chọn “Chọn làm tài khoản hưởng An sinh xã hội” hoặc mục liên kết tương ứng trong phần tùy chỉnh thông tin. Xác nhận và xác thực theo yêu cầu.",tip:"Có thể cần passcode hoặc xác thực vân tay/khuôn mặt tùy thiết bị. Công dân tự thực hiện bước xác thực, không đọc mã cho người hỗ trợ.",menu:["Chọn làm tài khoản hưởng ASXH","Xác nhận liên kết"]}
];
let currentStep = 0;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function renderStep(){
  const s=steps[currentStep];
  $("#detailKicker").textContent=s.kicker;
  $("#stepNumber").textContent=String(currentStep+1).padStart(2,"0");
  $("#stepTitle").textContent=s.title;
  $("#stepDescription").textContent=s.desc;
  $("#stepTip").innerHTML="<b>Lưu ý:</b> "+s.tip;
  $("#progressText").textContent=`Bước ${currentStep+1}/5`;
  $("#progressBar").style.width=((currentStep+1)*20)+"%";
  $("#prevStep").disabled=currentStep===0;
  $("#nextStep").textContent=currentStep===4?"Xem lại từ đầu ↺":"Bước tiếp theo →";
  $$(".step-tab").forEach((b,i)=>b.classList.toggle("active",i===currentStep));
  $$("#stepDots span").forEach((d,i)=>d.classList.toggle("on",i===currentStep));
  const illustration=$("#stepIllustration");
  illustration.innerHTML=`<div class="mock-phone"><div class="mock-bar"></div><div class="mock-line short"></div><div class="mock-menu selected"><span>▣</span><b>${s.menu[0]}</b><i>›</i></div><div class="mock-menu"><span>♡</span><b>${s.menu[1]}</b><i>›</i></div><div class="mock-line"></div><div class="mock-line mid"></div></div><div class="tap-hint">Thao tác theo hướng dẫn trên VNeID</div>`;
}
$$(".step-tab").forEach(b=>b.addEventListener("click",()=>{currentStep=Number(b.dataset.step);renderStep()}));
$("#prevStep").addEventListener("click",()=>{if(currentStep>0){currentStep--;renderStep()}});
$("#nextStep").addEventListener("click",()=>{currentStep=currentStep===4?0:currentStep+1;renderStep()});

const docInfo={
 birth:{title:"Giấy khai sinh",intro:"Tích hợp thông tin hộ tịch để thuận tiện tra cứu và sử dụng trong các thủ tục phù hợp.",steps:["Mở VNeID và đăng nhập tài khoản của công dân.","Vào Ví giấy tờ → Tích hợp giấy tờ → Tạo mới yêu cầu (nếu chức năng hiển thị theo lộ trình này).","Chọn loại thông tin Giấy khai sinh và thực hiện khai báo/đối chiếu theo yêu cầu của ứng dụng.","Gửi yêu cầu và theo dõi kết quả xử lý trên VNeID."]},
 payment:{title:"Thông tin tài khoản thanh toán",intro:"Có thể bao gồm thông tin thẻ ngân hàng, tài khoản thanh toán, ví điện tử hoặc tài khoản tiền di động theo danh mục nhà cung cấp được ứng dụng hỗ trợ.",steps:["Đăng nhập VNeID bằng tài khoản định danh điện tử mức độ 2 đang hoạt động.","Chọn Ví giấy tờ → Tích hợp giấy tờ → Tạo mới yêu cầu.","Chọn loại thông tin Tài khoản; chọn nhà cung cấp và nhập số tài khoản/thẻ/ví theo yêu cầu.","Xác nhận thông tin chính xác, nhấn Gửi yêu cầu và theo dõi kết quả."]},
 social:{title:"Tài khoản hưởng an sinh xã hội",intro:"Đây là nội dung ưu tiên. Tài khoản thanh toán đã tích hợp có thể được lựa chọn làm tài khoản nhận các khoản chi trả an sinh xã hội theo hướng dẫn hiện hành.",steps:["Đảm bảo tài khoản định danh điện tử mức độ 2 đang hoạt động và đã có tài khoản thanh toán được tích hợp/hiển thị trên VNeID.","Mở thông tin tài khoản thanh toán vừa tích hợp.","Chọn “Chọn làm tài khoản hưởng An sinh xã hội” hoặc mở phần tùy chỉnh thông tin → “Liên kết tài khoản hưởng An sinh xã hội” (tên mục có thể khác theo phiên bản).","Nhấn xác nhận và xác thực bằng passcode hoặc sinh trắc học theo yêu cầu của ứng dụng.","Kiểm tra mục An sinh xã hội để xác nhận tài khoản đã được đánh dấu là tài khoản hưởng ASXH."]},
 mobile:{title:"Thông tin thuê bao di động",intro:"Thông tin thuê bao di động được đối chiếu với dữ liệu của doanh nghiệp viễn thông và hệ thống có thẩm quyền.",steps:["Cập nhật VNeID lên phiên bản mới nhất và đăng nhập tài khoản của công dân.","Mở Ví giấy tờ → Tích hợp thông tin/giấy tờ và kiểm tra danh mục loại thông tin đang được hỗ trợ.","Chọn thông tin thuê bao di động nếu có; thực hiện chọn nhà mạng hoặc khai báo theo hướng dẫn hiển thị.","Gửi yêu cầu và theo dõi trạng thái. Nếu thông tin chưa chính xác, liên hệ nhà mạng để rà soát chính chủ."]},
 health:{title:"Sổ sức khỏe điện tử",intro:"Sổ sức khỏe điện tử hỗ trợ hiển thị thông tin sức khỏe được liên thông từ các hệ thống y tế theo phạm vi dữ liệu được chia sẻ.",steps:["Đăng nhập VNeID bằng tài khoản của chính công dân.","Tìm chức năng Sổ sức khỏe điện tử trong nhóm tiện ích/dịch vụ trên ứng dụng.","Kiểm tra thông tin cá nhân và dữ liệu sức khỏe được hiển thị.","Nếu dữ liệu thiếu hoặc sai, liên hệ cơ sở khám chữa bệnh/cơ quan y tế có thẩm quyền để rà soát nguồn dữ liệu."]}
};
const modal=$("#docModal");
$$(".doc-open").forEach(b=>b.addEventListener("click",()=>{
 const d=docInfo[b.dataset.doc];$("#modalTitle").textContent=d.title;$("#modalIntro").textContent=d.intro;
 $("#modalSteps").innerHTML=d.steps.map(x=>`<li>${x}</li>`).join("");
 modal.classList.add("show");modal.setAttribute("aria-hidden","false");$("#modalClose").focus();
}));
function closeModal(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true")}
$("#modalClose").addEventListener("click",closeModal);$("#modalDone").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
$("#menuToggle").addEventListener("click",()=>{const nav=$("#mainNav");const open=nav.classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open))});
$$(".main-nav a").forEach(a=>a.addEventListener("click",()=>{$("#mainNav").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false")}));
$("#year").textContent=new Date().getFullYear();
renderStep();
