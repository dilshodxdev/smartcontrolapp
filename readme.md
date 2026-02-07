# 🚀 SmartControl IoT Platform

SmartControl — bu **IoT (Internet of Things)** asosidagi professional boshqaruv va monitoring platformasi. Loyiha real vaqt rejimida qurilmalarni (ESP32/Arduino), sensorlarni va motor/relelarni web hamda mobile ilovalar orqali boshqarish imkonini beradi.

Bu loyiha **kengaytiriladigan, modulga asoslangan va sanoat darajasida** loyihalashgan.

---

## 📌 Asosiy imkoniyatlar

* 🔐 Foydalanuvchi autentifikatsiyasi (JWT, role-based)
* 📡 Real-time monitoring (MQTT, WebSocket)
* 🎛 Qurilmalarni masofadan boshqarish (rele, motor, dimmer)
* 🌡 Sensor ma’lumotlarini yig‘ish (temperatura, holat, tok)
* 💻 Web dashboard (React)
* 📱 Mobile ilova (React Native)
* ⚙️ Firmware (ESP32 / Arduino)

---

## 🧱 Loyiha arxitekturasi

```txt
Firmware (ESP32)
      ↓ MQTT
Backend (API + DB)
      ↓ REST / WebSocket
Frontend (Web) & Mobile
```

* Firmware qurilmalar bilan ishlaydi
* Backend markaziy mantiq va xavfsizlikni boshqaradi
* Frontend va Mobile foydalanuvchi interfeysi vazifasini bajaradi

---

## 📂 Papkalar strukturasi

```txt
project-root/
├─ frontend/        # Web ilova (React)
├─ backend/         # API va biznes mantiq
├─ firmware/        # ESP32 / Arduino kodlari
├─ mobile/          # Android / iOS ilova
├─ docs/            # Texnik hujjatlar
└─ README.md        # Ushbu fayl
```

---

## 🖥 Frontend (Web)

**Texnologiyalar:**

* React + TypeScript
* Vite
* TailwindCSS

**Vazifalar:**

* Qurilmalar ro‘yxati
* Real-time holatni ko‘rsatish
* Qurilmalarni boshqarish
* Admin va user rollar

---

## 🔧 Backend (API)

**Texnologiyalar:**

* Node.js / NestJS
* REST API
* WebSocket
* MQTT
* PostgreSQL / MySQL

**Vazifalar:**

* Auth (JWT)
* Qurilmalarni boshqarish
* MQTT subscriber/publisher
* Ma’lumotlarni DB ga yozish

---

## 📟 Firmware

**Texnologiyalar:**

* ESP32 / Arduino
* PlatformIO
* C++

**Vazifalar:**

* WiFi va MQTT ga ulanish
* Sensorlarni o‘qish
* Rele va motorlarni boshqarish
* Backend bilan real-time aloqa

---

## 📱 Mobile ilova

**Texnologiyalar:**

* React Native
* TypeScript

**Imkoniyatlar:**

* Web bilan bir xil funksional
* Push notification
* Mobil monitoring

---

## 🔐 Xavfsizlik

* JWT tokenlar
* Role-based access (admin / user)
* MQTT autentifikatsiyasi
* HTTPS

---

## 📚 Hujjatlar

Batafsil texnik hujjatlar `docs/` papkasida:

* `architecture.md` — tizim arxitekturasi
* `api.md` — API endpointlar
* `mqtt.md` — MQTT topiclar
* `database.md` — ma’lumotlar bazasi sxemasi

---

## 🚀 Ishga tushirish (tezkor)

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm run start:dev
```

---

## 🔮 Kengaytirish rejasi

* AI asosida monitoring
* Avtomatik ssenariylar
* Cloud deployment
* Multi-tenant tizim

---

## 👤 Muallif

*dilshodxdev

---

