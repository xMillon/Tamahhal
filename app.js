// من هنا نجيب العناصر من الصفحة
const messageInput = document.getElementById("message");
const checkButton = document.getElementById("check");
const senderInput = document.getElementById("sender");
const resultBox = document.getElementById("result");
const previewBox = document.getElementById("preview");


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

        if (
            text.includes("الاتصال")
        ) {
            score += 3;
            reasons.push("تمهل، لا تتصل بأي رقم مكتوب داخل رسالة. اتصل بالرقم المكتوب خلف بطاقتك أو في تطبيق البنك");
        }

        if (
            text.includes("تحديث بياناتك") ||
            text.includes("حدث بياناتك") ||
            text.includes("حدّث بياناتك") ||
            text.includes("أكد هويتك") ||
            text.includes("أكّد هويتك") ||
            text.includes("اكد هويتك")
        )   {
            score += 2;
            reasons.push("تمهّل، طلب تحديث البيانات قد يكون محاولة احتيال. حدّث بياناتك من تطبيق الجهة أو موقعها الرسمي فقط، وليس من أي رابط أو رقم داخل الرسالة.");
        }

        if (
            (
            text.includes("OTP") ||
            text.includes("otp") ||
            text.includes("التحقق")
        ) && (
            text.includes("ارسل") ||
            text.includes("أرسل") ||
            text.includes("زودنا") ||
            text.includes("ابعث")
                ) 
            ) {
            score += 4;
            reasons.push("تمهّل، لا توجد جهة رسمية تطلب منك رمز التحقق. من يملك الرمز يقدر يدخل حسابك. عند الشك، اتصل بالرقم الرسمي المعتمد لدى الجهة.");
        }

    if (/05\d{8}/.test(text)) {
        score += 2;
        reasons.push("تمهّل… مو كل رقم جوال جهة رسمية. الجهات تستخدم أرقامًا موحدة، خذ رقمها من تطبيقها أو موقعها الرسمي، مو من الرسالة.");
    }

    console.log(sender);
    if (sender.startsWith("05") || sender.startsWith("+9665")) {
        console.log("إشارة عالية : المرسل رقم جوال");
        score += 3;
        reasons.push("المرسل رقم جوال، والجهات الرسمية ترسل من اسم مسجّل.");
    }

    if (
        text.includes("https") ||
        text.includes("http") ||
        text.includes("www.")
    ) {
        score += 1;
        reasons.push("تمهّل… مو كل رابط يستاهل تضغطه. بدل الرابط، افتح تطبيق الجهة أو اكتب عنوان موقعها بنفسك.");
    }

    if (
        text.includes("bit.ly") ||
        text.includes("tinyurl") ||
        text.includes("t.co/") ||
        text.includes("cutt.ly")
    ) {
        score +=1;
        reasons.push("تمهّل… الرابط المختصر يخفي العنوان الحقيقي. قبل ما تضغط، تأكد من مصدره أو افتح موقع الجهة بنفسك.");
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

    previewBox.textContent = "";
    const word = "حظر";
    const start = text.indexOf(word);
    console.log("مكان الكلمة:", start);

    if (start !== -1) {
        const end = start + word.length;
        const before = text.slice(0, start);
        const middle = text.slice(start, end);
        const after = text.slice(end);
        previewBox.append(before);
        const mark = document.createElement("mark");
        mark.textContent = middle;
        previewBox.appendChild(mark);
        previewBox.append(after);
    }

});