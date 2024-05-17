document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate");
    const bmiValueElement = document.getElementById("bmi-Value");
    const bmiCategoryElement = document.getElementById("bmi-Category");

    calculateButton.addEventListener("click", function() {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100;

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const bmi = (weight / (height * height)).toFixed(2);
            bmiValueElement.textContent = bmi;

            let category;
            if(bmi<18.5) {
                category = "Under-weight";
            } else if(bmi => 18.5 && bmi < 24.9) {
                category = "Healthy-weight";
            } else if(bmi => 25 && bmi < 29.9) {
                category = "Over-weight";
            } else if(bmi => 29.9) {
                category = "Obese";
            }
            bmiCategoryElement.textContent = category;
        } else {
            bmiValueElement.textContent = "Invalid input";
            bmiCategoryElement.textContent = "";
        }
    });
});