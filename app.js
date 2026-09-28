// من هنا نجيب العناصر من الصفحة
const messageInput = document.getElementById("message");
const checkButton = document.getElementById("check");
const senderInput = document.getElementById("sender");


// هنا لما المستخدم يضغط الزر
checkButton.addEventListener("click", function () {
    const text = messageInput.value;
    const sender = senderInput.value;
    console.log(text);
    if (
        text.includes("حظر") ||
        text.includes("توقف") ||
        text.includes("إيقاف") ||
        text.includes("ايقاف") ||
        text.includes("تعليق") ||
        text.includes("تجميد") ||
        text.includes("إغلاق") ||
        text.includes("اغلاق") ||
        text.includes("مصادرة") ||
        text.includes("إبطال") ||
        text.includes("إنهاء") ||
        text.includes("انهاء") ||
        text.includes("تقييد")
    ) {
        console.log("إشارة متوسطة : تهديد بفقدان شيء");
        }
    console.log(sender);
    if (sender.startsWith("05") || sender.startsWith("+9665")) {
        console.log("إشارة عالية : المرسل رقم جوال");
    }
});