/*
1. Mục tiêu:
Viết một chương trình JavaScript để tính chỉ số BMI (Body Mass Index) và đưa ra kết luận về tình trạng cơ thể dựa trên chỉ số BMI.

2. Yêu cầu:
- Tạo một hàm calculateBMI nhận hai tham số:
    + cân nặng (kg)
    + chiều cao (m)
- Tính chỉ số BMI theo công thức: BMI = cân nặng / (chiều cao * chiều cao)
- Làm tròn kết quả BMI đến số nguyên gần nhất.
- Đưa ra kết luận về tình trạng cơ thể dựa trên chỉ số BMI:
    + BMI < 18.5: Underweight
    + 18.5 ≤ BMI ≤ 24.9: Normal weight
    + BMI > 24.9: Overweight
3. In kết quả ra màn hình.
- Ghi chú:
    + Sử dụng console.log để in kết quả.
    + Thử nghiệm với các giá trị khác nhau của cân nặng và chiều cao để kiểm tra kết quả.
*/

function calculateBMI(weight, height) {
    // Calculate BMI using the formula: weight / (height * height)
    let bmi = Math.round(weight / (height * height));
    var interpretation;

    if (bmi < 18.5) {
        interpretation = `Your BMI is ${bmi} so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9)
        interpretation = `Your BMI is ${bmi} so you have a normal weight.`;
    else if (bmi > 24.9)
        interpretation = `Your BMI is ${bmi} so you are overweight.`;
    return interpretation;
}

var bmi = calculateBMI(70, 1.75)

document.getElementById("result").innerHTML = bmi