// من هنا نجيب العناصر من الصفحة
const messageInput = document.getElementById("message");
const checkButton = document.getElementById("check");
const senderInput = document.getElementById("sender");
const resultBox = document.getElementById("result");


// هنا لما المستخدم يضغط الزر
checkButton.addEventListener("click", function () {
    const text = messageInput.value;
    const sender = senderInput.value;
    let score = 0;
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
        score += 2;
        }
    console.log(sender);
    if (sender.startsWith("05") || sender.startsWith("+9665")) {
        console.log("إشارة عالية : المرسل رقم جوال");
        score += 3;
    }
    console.log("الدرجة :", score);

    if (score >= 4) {
        resultBox.textContent = "علامات احتيال واضحة";
    } else if (score >= 1) {
        resultBox.textContent = "إشارات تستحق الانتباه";
    } else {
        resultBox.textContent = "لم نجد إشارات معروفة، وهذا لا يعني أنها آمنة";
    }
});