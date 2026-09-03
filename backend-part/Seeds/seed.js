import mongoose from "mongoose";
import dotenv from "dotenv";
import Feedback from "../module/FeedbacksModule.js"

dotenv.config();

"този префикс на файл + колко броя = кой вид масаж"
const FILE_GROUPS = [
    { prefix: "ABSsculpting", count: 8, massageType: "Масаж на корем (ABS SCULPTING)" },
    { prefix: "AntiCellulite", count: 4, massageType: "Антицелулитен масаж" },
    { prefix: "classicMassage", count: 2, massageType: "Класически масаж" },
    { prefix: "DeepTissue", count: 6, massageType: "Дълбокотъканен масаж" },
    { prefix: "HealingMassage", count: 7, massageType: "Лечебен масаж" }
    // ако имаш още файлове след HealingMassage7, добави тук допълнителен ред
    // или коригирай count-а нагоре
];

function buildFeedbackEntries() {
    const entries = [];

    FILE_GROUPS.forEach(group => {
        for (let i = 1; i <= group.count; i++) {
            entries.push({
                imageUrl: `/img/imgFeedbacks/${group.prefix}${i}.jpg`,
                massageType: group.massageType
            });
        }
    });

    return entries;
}

async function seed() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error("MONGODB_URI не е зададен в environment variables");
    }

    await mongoose.connect(uri);

    const entries = buildFeedbackEntries();

    // По желание — изчистваме старите тестови записи, преди да качим новите
    await Feedback.deleteMany({});

    await Feedback.insertMany(entries);

    console.log(`✅ Добавени ${entries.length} отзива успешно.`);
    process.exit(0);
}

seed().catch(error => {
    console.error("❌ Грешка при seed-ване:", error);
    process.exit(1);
});