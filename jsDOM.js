//mengubah teks elemen html
document.getElementById("judul").innerHTML = "JavaScript DOM";
document.getElementById("paragraf").innerHTML = "Paragraf telah diubah";

//mengubah atribut gambar
function ubahGambar() {
    document.getElementById("gambar").src = "https://www.meme-arsenal.com/memes/866e9fc0cdfd43590a8b1a57d5f23e34.jpg";
}

//mengubah style css
function ubahTeks() {
    document.getElementById("teks").style.color = "red";
    document.getElementById("teks").style.fontSize = "24px";
}

//menghapus element html
function hapusElemen() {
    document.getElementById("hapus").remove();
}

//menambah elemen html baru
function tambahElemen() {
    let p = document.createElement("p");
    p.innerHTML = "Ini adalah paragraf baru.";
    document.getElementById("area").appendChild(p);
}

//menangani event onclick
document.getElementById("tombol").addEventListener("click", function() {
    alert("Tombol telah diklik!");
});

//membuat event baru
document.getElementById("btn").addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
});