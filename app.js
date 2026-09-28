// من هنا نجيب العناصر من الصفحة
const messageInput = document.getElementById("message");
const checkButton = document.getElementById("check");
const senderInput = document.getElementById("sender");


// هنا لما المستخدم يضغط الزر
checkButton.addEventListener("click", function () {
    const text = messageInput.value;
    const sender = senderInput.value;
    console.log(text);
    console.log(sender);
    if (sender.startsWith("05") || sender.startsWith("+9665")) {
        console.log("إشارة عالية : المرسل رقم جوال");
    }
});