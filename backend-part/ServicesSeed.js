import mongoose from "mongoose";
import Services from "./module/ServicesModule.js";

const FILE_GROUPS = [
    {
        title: "Дълбокотъканен масаж",
        info: "Интензивна техника, работеща в дълбоките мускулни слоеве — облекчава хронично напрежение и възстановява подвижността.",
        price: "45 € / 60 минути",
        image: "/img/Services/DeepTissueMassagePhoto.png"
    },
    {
        title: "Масаж на корем — ABS Sculpting",
        info: "Специализирана техника за оформяне на коремната зона чрез стимулиране на подкожните тъкани.",
        price: "25 € / 30 минути",
        image: "/img/Services/ABSscultingPhoto.png"
    },
    {
        title: "Класически масаж",
        info: "Цялостна релаксираща процедура за облекчаване на мускулното напрежение и подобряване на кръвообращението.",
        price: "40 € / 60 минути",
        image: "/img/Services/ClassicMassagePhoto.png"
    },
    {
        title: "Лечебен масаж",
        info: "Насочена терапия за конкретен проблемен участък — облекчава болка и възстановява функцията на засегнатата зона.",
        price: "40 € / 45 минути",
        image: "/img/Services/HealingMassagePhoto.png"
    },
    {
        title: "Лимфен дренаж с ботуши (Пресотерапия)",
        info: "Компресионна терапия с ботуши за подобряване на лимфния и венозния отток, намаляваща отоци и тежест в краката.",
        price: "10 € / 10 минути",
        image: "/img/Services/PresoTherapy.png"
    },
    {
        title: "Вендузотерапия",
        info: "Вакуумна терапия с вендузи за облекчаване на мускулно напрежение и подобряване на локалната циркулация.",
        price: "10 € / 10 минути",
        image: "/img/Services/VenduziTherapyPhoto.png"
    },
];

function buildFeedbackEntries() {
    const entries = [];

    for (let i = 0; i < FILE_GROUPS.length; i++) {
        const group = FILE_GROUPS[i];
        entries.push({
            title: group.title,
            info: group.info,
            price: group.price,
            image: group.image
        });
    }

    return entries;
}

async function seed() {
    await mongoose.connect("mongodb://localhost:27017/KinesiTherapy");

    const entries = buildFeedbackEntries();

    // По желание — изчистваме старите тестови записи, преди да качим новите
    await Services.deleteMany({});

    await Services.insertMany(entries);

    console.log(`✅ Добавени ${entries.length} SERVICES успешно.`);
    process.exit(0);
}

seed().catch(error => {
    console.error("❌ Грешка при seed-ване:", error);
    process.exit(1);
});
