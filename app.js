// التأكد من أن Telegram Web Apps API موجود
if (window.Telegram.WebApp) {
    // الحصول على معلومات المستخدم من تليجرام
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    console.log("User data:", user);

    // إظهار الزر إذا كان متاحًا
    document.getElementById('play-button').style.display = 'block'; // عرض الزر "لعب"
    
    window.Telegram.WebApp.ready();

    // إضافة حدث للزر "لعب"
    document.getElementById('play-button').addEventListener('click', () => {
        // هنا يمكنك إضافة الكود الخاص باللعبة
        alert('استمتع باللعبة!'); // رسالة بسيطة عند الضغط على الزر
    });
} else {
    console.log("Telegram Web Apps API is not available.");
}
