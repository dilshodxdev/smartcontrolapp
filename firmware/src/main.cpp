#include <WiFi.h>
#include <PubSubClient.h>
#include "config.h"

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  // WiFi-ga ulanish logikasi
  // MQTT-ga ulanish logikasi
  pinMode(32, OUTPUT); // Rele uchun pin
}

void loop() {
  if (!client.connected()) {
    // Reconnect logikasi
  }
  client.loop();
  
  // Sensorlardan ma'lumot o'qish va MQTT-ga jo'natish (JSON formatda)
}