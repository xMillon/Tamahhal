// من هنا نجيب العناصر من الصفحة
const messageInput = document.getElementById("message");
const checkButton = document.getElementById("check");


// هنا لما المستخدم يضغط الزر
checkButton.addEventListener("click", function () {
    const text = messageInput.value;
    console.log(text);
});