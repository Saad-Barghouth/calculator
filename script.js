const operatorSelect = document.getElementById('operator');
const num2Input = document.getElementById('num2');
const labelNum2 = document.getElementById('labelNum2');
const resultDiv = document.getElementById('result');

// إظهار أو إخفاء الرقم الثاني بناءً على العملية المختارة
operatorSelect.addEventListener('change', () => {
  const op = operatorSelect.value;
  const needsSecond = ['+', '-', '*', '/', '%', '^'];
  if (needsSecond.includes(op)) {
    num2Input.style.display = 'block';
    labelNum2.style.display = 'block';
  } else {
    num2Input.style.display = 'none';
    labelNum2.style.display = 'none';
    num2Input.value = '';
    resultDiv.innerText = '';
  }
});

function calculate() {
  const x = parseFloat(document.getElementById('num1').value);
  const op = operatorSelect.value;
  let y = parseFloat(num2Input.value);
  let res = '';

  if (isNaN(x)) {
    res = 'يرجى إدخال الرقم الأول بشكل صحيح.';
    resultDiv.innerText = res;
    return;
  }

  if (['+', '-', '*', '/', '%', '^'].includes(op)) {
    if (isNaN(y)) {
      res = 'يرجى إدخال الرقم الثاني بشكل صحيح.';
      resultDiv.innerText = res;
      return;
    }
  }

  switch(op) {
    case '+': res = x + y; break;
    case '-': res = x - y; break;
    case '*': res = x * y; break;
    case '/': 
      res = (y !== 0) ? (x / y) : 'خطأ: القسمة على صفر غير مسموحة'; 
      break;
    case '%': 
      res = (y !== 0) ? (x % y) : 'خطأ: باقي القسمة على صفر غير مسموح'; 
      break;
    case '^': res = Math.pow(x, y); break;
    case 'r': 
      res = (x >= 0) ? Math.sqrt(x) : 'خطأ: الجذر التربيعي لعدد سالب غير معرف'; 
      break;
    case 's': res = Math.sin(x); break;
    case 'c': res = Math.cos(x); break;
    case 't': res = Math.tan(x); break;
    case 'l': 
      res = (x > 0) ? Math.log10(x) : 'خطأ: اللوغاريتم أساس 10 غير معرف لعدد ≤ 0'; 
      break;
    case 'n': 
      res = (x > 0) ? Math.log(x) : 'خطأ: اللوغاريتم الطبيعي غير معرف لعدد ≤ 0'; 
      break;
    case 'a': res = Math.abs(x); break;
    default: res = 'عملية غير معروفة'; 
  }

  if (typeof res === 'number') {
    res = res.toFixed(5);
  }

  resultDiv.innerText = 'النتيجة: ' + res;
}

// تهيئة الواجهة عند تحميل الصفحة
window.onload = () => {
  operatorSelect.dispatchEvent(new Event('change'));
};