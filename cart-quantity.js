let quantity = 0;

// ฟังก์ชันสำหรับแสดงผลหน้าจอ
function display() {
    const element = document.getElementById("result");
 
        element.innerHTML = "Current Quantity: " + quantity;
}

function updateQuantity(number) {
    if (quantity + number < 0) {
        alert("ตะกร้าว่างเปล่าแล้ว!");
        return;
    }

    quantity += number;
    console.log(`Cart Quantity: ${quantity}`);
    
    // เรียกใช้ฟังก์ชันแสดงผล    
    display();
}

function updateQuantityMinus(number) {
   quantity -= number

   display();
   
}

function resetCart() {
    quantity = 0;
    console.log("Cart was reset.");
    
    // เรียกใช้ฟังก์ชันแสดงผล
    display();
}