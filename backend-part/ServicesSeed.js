import mongoose from "mongoose";
import Services from "./module/ServicesModule.js";

const FILE_GROUPS = [
    {
        title: "Кинезитерапия",
        info: "Лечебна физкултура и функционална рехабилитация, насочена към възстановяване на движението и намаляване на болката.",
        price: "35 € / 60 минути",
        image: "/img/services/KinesitherapyPhoto.png"
    },
    {
        title: "Дълбокотъканен масаж",
        info: "Интензивна техника, работеща в дълбоките мускулни слоеве — облекчава хронично напрежение и възстановява подвижността.",
        price: "45 € / 60 минути",
        image: "/img/services/DeepTissueMassagePhoto.png"
    },
    {
        title: "Спортен масаж",
        info: "Подготвя мускулите преди натоварване и ускорява възстановяването след тренировка или състезание.",
        price: "45 € / 60 минути",
        image: "/img/services/SportMassagePhoto.png"
    },
    {
        title: "Класически масаж",
        info: "Цялостна релаксираща процедура за облекчаване на мускулното напрежение и подобряване на кръвообращението.",
        price: "40 € / 60 минути",
        image: "/img/services/ClassicMassagePhoto.png"
    },
    {
        title: "Лечебен масаж",
        info: "Насочена терапия за конкретен проблемен участък — облекчава болка и възстановява функцията на засегнатата зона.",
        price: "40 € / 45 минути",
        image: "/img/services/HealingMassagePhoto.png"
    },
    {
        title: "Частичен масаж",
        info: "Кратка терапия, фокусирана върху една зона по избор — идеална при локално напрежение или ограничено време.",
        price: "30 € / 30 минути",
        image: "/img/services/PartialMassagePhoto.png"
    },
    {
        title: "Антицелулитен масаж",
        info: "Стимулираща техника за подобряване на локалното кръвообращение и лимфен дренаж, с видим ефект върху кожата.",
        price: "25 € / 30 минути · 35 € / 45 минути",
        image: "/img/services/AntiCelluliteMassagePhoto.png"
    },
    {
        title: "Масаж на корем — ABS Sculpting",
        info: "Специализирана техника за оформяне на коремната зона чрез стимулиране на подкожните тъкани.",
        price: "25 € / 30 минути",
        image: "/img/services/ABSsculptingPhoto.png"
    },
    {
        title: "Вендузотерапия",
        info: "Вакуумна терапия с вендузи за облекчаване на мускулно напрежение и подобряване на локалната циркулация.",
        price: "10 € / 10 минути",
        image: "/img/services/VenduziTherapyPhoto.png"
    },
    {
        title: "Кинезитерапия",
        info: "Лечебна физкултура и функционална рехабилитация, насочена към възстановяване на движението и намаляване на болката.",
        price: "35 € / 60 минути",
        image: "/img/services/KinesitherapyPhoto.png"
    },
    {
        title: "Частичен масаж",
        info: "Кратка терапия, фокусирана върху една зона по избор — идеална при локално напрежение или ограничено време.",
        price: "30 € / 30 минути",
        image: "/img/services/PartialMassagePhoto.png"
    },
    {
        title: "Масаж за бременни",
        info: "Щадяща и безопасна техника, съобразена с нуждите на бременната жена — облекчава напрежение в гърба и краката.",
        price: "35 € / 60 минути",
        image: "/img/services/PregnancyMassagePhoto.png"
    },
    {
        title: "Масаж на лице",
        info: "Освежаваща процедура за стимулиране на кръвообращението и лимфния поток в областта на лицето.",
        price: "20 € / 30 минути",
        image: "/img/services/FaceMassagePhoto.png"
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
