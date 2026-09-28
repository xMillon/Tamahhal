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
    let reasons = [];
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
        reasons.push("الرسالة تحاول تخويفك بفقدان بطاقتك أو حسابك حتى تتصرف بسرعة. تمهل، وتحقق من تطبيق البنك مباشرة.");
        }
    console.log(sender);
    if (sender.startsWith("05") || sender.startsWith("+9665")) {
        console.log("إشارة عالية : المرسل رقم جوال");
        score += 3;
        reasons.push("المرسل رقم جوال، والجهات الرسمية ترسل من اسم مسجّل.");
    }
    console.log("الدرجة :", score);
    console.log(reasons);

    if (score >= 4) {
        resultBox.textContent = "علامات احتيال واضحة";
    } else if (score >= 1) {
        resultBox.textContent = "إشارات تستحق الانتباه";
    } else {
        resultBox.textContent = "لم نجد إشارات معروفة، وهذا لا يعني أنها آمنة";
    }

    resultBox.textContent += "\n\n" + reasons.join("\n");
});