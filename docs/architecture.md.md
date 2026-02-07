# SmartControl – To‘liq Texnik Hujjatlar

## 1. Loyiha haqida umumiy ma’lumot

**SmartControl** — bu IoT asosidagi boshqaruv tizimi bo‘lib, real vaqt rejimida qurilmalarni (motor, rele, sensorlar) boshqarish, monitoring qilish va avtomatlashtirish uchun mo‘ljallangan.

Loyiha quyidagi platformalarni qamrab oladi:

* Web (Frontend)
* Backend (API + biznes mantiq)
* Firmware (ESP32 / Arduino)
* Mobile (Android / iOS)

---

## 2. Umumiy arxitektura

Ma’lumot oqimi quyidagi tartibda ishlaydi:

Firmware (ESP32)  →  MQTT Broker  →  Backend API  →  Frontend / Mobile

* ESP32 sensorlardan ma’lumot oladi va MQTT orqali yuboradi
* Backend MQTT subscriber sifatida ma’lumotni qabul qiladi
* Backend ma’lumotni DB ga yozadi va API orqali uzatadi
* Frontend va Mobile API/WebSocket orqali ko‘rsatadi

---

## 3. Papkalar strukturasi

```txt
project-root/
├─ frontend/
├─ backend/
├─ firmware/
├─ mobile/
├─ docs/
└─ README.md
```

---

## 4. Frontend (Web)

### Texnologiyalar

* React
* TypeScript
* Vite
* TailwindCSS

### Strukturasi

```txt
frontend/src/
├─ features/
│  ├─ auth/
│  ├─ devices/
│  ├─ telemetry/
│  └─ users/
├─ shared/
│  ├─ ui/
│  ├─ hooks/
│  └─ utils/
├─ pages/
└─ main.tsx
```

### Asosiy vazifalar

* Qurilmalar ro‘yxatini ko‘rsatish
* Real-time holat (on/off, temperatura)
* Boshqaruv (rele, motor)
* Login / role-based access

---

## 5. Backend (API)

### Texnologiyalar

* Node.js / NestJS
* PostgreSQL / MySQL
* MQTT
* REST API
* WebSocket

### Strukturasi

```txt
backend/src/
├─ modules/
│  ├─ auth/
│  ├─ users/
│  ├─ devices/
│  └─ telemetry/
├─ common/
├─ config/
└─ main.ts
```

### Backend vazifalari

* Auth (JWT)
* Qurilmalarni boshqarish
* MQTT dan ma’lumot qabul qilish
* DB ga yozish
* API va WebSocket orqali uzatish

---

## 6. Firmware (ESP32)

### Texnologiyalar

* ESP32
* PlatformIO
* C++

### Strukturasi

```txt
firmware/esp32/
├─ src/
│  ├─ main.cpp
│  ├─ wifi.cpp
│  ├─ mqtt.cpp
│  ├─ sensors/
│  └─ relays/
├─ include/
└─ platformio.ini
```

### Firmware vazifalari

* WiFi ga ulanish
* MQTT brokerga ulanish
* Sensor ma’lumotlarini o‘qish
* Rele/motorlarni boshqarish

---

## 7. MQTT arxitekturasi

### Topic strukturasi

```txt
smartcontrol/{deviceId}/status
smartcontrol/{deviceId}/telemetry
smartcontrol/{deviceId}/command
```

### Misol

* `telemetry` → temperatura, tok, holat
* `command` → ON / OFF / SET_VALUE
* `status` → online / offline

---

## 8. Mobile ilova

### Texnologiyalar

* React Native
* TypeScript

### Strukturasi

```txt
mobile/src/
├─ features/
│  ├─ auth/
│  ├─ devices/
│  └─ profile/
├─ navigation/
└─ App.tsx
```

### Vazifalar

* Web bilan bir xil funksional
* Push notification
* Real-time monitoring

---

## 9. Xavfsizlik

* JWT token
* Role-based access (admin/user)
* MQTT authentication
* HTTPS

---

## 10. Kengaytirish imkoniyatlari

* AI monitoring
* Avtomatik ssenariylar
* Cloud deployment
* Multi-device support

---

## 11. Xulosa

SmartControl loyihasi professional, kengaytiriladigan va real sanoat muammolariga mos ishlab chiqilgan. Ushbu hujjat loyiha rivoji davomida asosiy tayanch sifatida ishlatiladi.

---