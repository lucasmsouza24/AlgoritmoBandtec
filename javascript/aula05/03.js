var num = Number(display_num.innerHTML);
    function btn_increment() {
        if (num == 12) {
            alert("O usuário não vai gostar do próximo número!");
        }
        display_num.innerHTML = ++num;
    }