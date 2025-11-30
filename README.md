# Saludador Expo

## 1. Datos del proyecto

- **Nombre:** Saludador Expo
- **Autor:** Juan Felipe Perez Perdomo
- **Fecha:** 30 de noviembre de 2025
- **Versión de Expo SDK:** 54.0.16
- **React Native:** 1.0.0
- **Plataformas:** Android

## 2. Tecnología elegida y justificación

**Tecnología:** React Native con Expo

**Justificación:**
- **Desarrollo multiplataforma:** Permite crear una aplicación que funciona tanto en Android como en iOS con un único código base, reduciendo tiempo y esfuerzo de desarrollo.
- **Expo:** Facilita el desarrollo al proporcionar herramientas preconstruidas como `expo-haptics` para feedback háptico y `expo-status-bar`, eliminando la necesidad de configuración nativa compleja.
- **Hot Reload:** Acelera el ciclo de desarrollo permitiendo ver cambios en tiempo real sin recompilar toda la aplicación.
- **TypeScript:** Proporciona tipado estático que mejora la detección de errores durante el desarrollo y facilita el mantenimiento del código.

## 3. Configuración del entorno y ejecución

### Requisitos previos
- Node.js (v18 o superior)
- npm o yarn
- Expo Go app instalada en el dispositivo móvil (opcional)
- Android Studio con emulador configurado (opcional)

### Instalación

1. **Clonar o descargar el proyecto:**
```bash
cd saludador-expo
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Instalar paquetes de Expo:**
```bash
npx expo install expo-haptics react-native-safe-area-context expo-linear-gradient
```

### Ejecución

**Opción 1: Dispositivo físico**
```bash
npx expo start
```
Escanea el código QR con la app Expo Go.

**Opción 2: Emulador Android**
```bash
npx expo start --android
```

**Opción 3: Simulador iOS (solo en macOS)**
```bash
npx expo start --ios
```

## 4. Estructura del proyecto
```
saludador-expo/
├── App.tsx                 # Componente principal de la aplicación
├── app.json               # Configuración de Expo
├── package.json           # Dependencias del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── assets/                # Recursos (imágenes, iconos)
└── node_modules/          # Módulos instalados
```

### Descripción de archivos principales:

- **App.tsx:** Contiene toda la lógica de la aplicación:
  - Estado para manejar el nombre del usuario (`name`)
  - Estado para el mensaje de salida (`textOutput`)
  - Validación del límite de caracteres (20 caracteres)
  - Feedback háptico al presionar el botón y al superar el límite
  - Estilos dinámicos que cambian el color del borde cuando se excede el límite
  
- **app.json:** Configuración de la aplicación (nombre, icono, splash screen, etc.)

- **package.json:** Lista de dependencias como `expo`, `react-native`, `expo-haptics`, etc.

## 5. Perfil de despliegue

- **SDK Target:** Android 34 (Android 14) / iOS 13+
- **Expo SDK:** 52
- **Dispositivo de prueba:** [Especificar dispositivo físico o emulador usado]
  - Ejemplo: Pixel 5 Emulator (Android 14)
  - Ejemplo: iPhone 14 Pro (iOS 17)
- **Resolución:** 1080 x 2340 px
- **Densidad:** 440 dpi (xxhdpi)

## 6. Funcionamiento de la app

La aplicación "Saludador Expo" es una app simple de saludo personalizado con las siguientes características:

### Funcionalidades principales:

1. **Campo de entrada de texto:**
   - Permite al usuario introducir su nombre
   - Límite de 20 caracteres
   - Validación en tiempo real

2. **Validación visual:**
   - El borde del campo de texto se vuelve rojo cuando se exceden los 20 caracteres
   - Contador de caracteres visible (formato: actual/límite)

3. **Botón "Saludar":**
   - Deshabilitado cuando el campo está vacío o contiene solo espacios
   - Cambia de color al presionarse (feedback visual)
   - Genera vibración háptica al presionarse

4. **Feedback háptico:**
   - Vibración fuerte al presionar el botón "Saludar"
   - Vibración media al intentar escribir más allá del límite + 2 caracteres

5. **Mensaje de salida:**
   - Muestra "Hola [nombre]! ¿Como Estas?" en color azul
   - Limpia automáticamente el campo de entrada después de saludar

### Captura de pantalla:
![photo_4999393202028612420_y](https://github.com/user-attachments/assets/996d4845-af26-4acf-8952-172f90223c55)
![photo_4999393202028612421_y](https://github.com/user-attachments/assets/b723b3b4-4691-4b1e-9995-436f99714756)


## 7. Conclusión y limitaciones

### Aprendizajes:

- **Gestión de estado con React Hooks:** Implementación efectiva de `useState` para manejar el estado de la aplicación de manera reactiva.
- **Validaciones en tiempo real:** Creación de lógica para validar la entrada del usuario mientras escribe.
- **Feedback háptico:** Integración de `expo-haptics` para mejorar la experiencia de usuario con respuesta táctil.
- **Estilos dinámicos:** Aplicación de estilos condicionales basados en el estado de la aplicación.
- **TypeScript en React Native:** Uso de tipado estático para prevenir errores y mejorar la mantenibilidad del código.

### Retos encontrados:

1. **Sincronización de estados:** Coordinar la validación del límite de caracteres con el feedback visual y háptico.
2. **Gestión del límite de caracteres:** Decidir si cortar el texto exactamente en el límite o permitir 2 caracteres adicionales antes de bloquear la entrada.

### Limitaciones:

1. **Feedback háptico en emuladores:** La vibración no funciona en emuladores, solo se puede probar en dispositivos físicos.
2. **Sin animaciones:** Las transiciones entre estados son instantáneas; se podrían agregar animaciones para mejorar la UX.
