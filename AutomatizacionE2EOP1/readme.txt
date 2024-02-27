{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs32 \cf2 \expnd0\expndtw0\kerning0
Aqu\'ed est\'e1 el paso a paso de las instrucciones para el c\'f3digo proporcionado:\
\'a0\
1.Importar Librer\'edas:\
\'a0\
Importa las clases necesarias de Selenium y TestNG.\
Importa la clase BaseScript.\
\
2. Definir la Clase del Test:\
\'a0\
Declara una clase llamada E2ETest que extiende de BaseScript.\
\
3. Definir el M\'e9todo de Prueba:\
\'a0\
Define un m\'e9todo de prueba llamado e2eOption1() con la anotaci\'f3n @Test.\
Maneja las excepciones de E/S.\
\
4.Navegar a la P\'e1gina Base:\
\'a0\
Usa driver.get(baseURL) para abrir la URL base.\
\
5.Agregar Art\'edculos al Carrito:\
\'a0\
Encuentra el primer art\'edculo y haz clic en \'e9l.\
Encuentra el bot\'f3n "Agregar al carrito" y haz clic en \'e9l.\
Espera un momento (pause()).\
Acepta la alerta.\
Navega de regreso a la p\'e1gina principal.\
\
6.Repita el Proceso para el Segundo Art\'edculo:\
\'a0\
Encuentra el segundo art\'edculo y haz clic en \'e9l.\
Encuentra el bot\'f3n "Agregar al carrito" y haz clic en \'e9l.\
Espera un momento (pause()).\
Acepta la alerta.\
\
7.Verificar el Carrito:\
\'a0\
Haz clic en el icono del carrito.\
Espera un momento (pause()).\
\
8.Verificar el Total del Carrito:\
\'a0\
Encuentra el elemento que muestra el total del carrito.\
Verifica que el total sea "1180" usando Assert.assertEquals().\
\
9.Procesar la Orden:\
\'a0\
Haz clic en el bot\'f3n "Realizar Pedido".\
\
10.Llenar el Formulario:\
\'a0\
Encuentra los campos del formulario (nombre, pa\'eds, ciudad, tarjeta de cr\'e9dito, mes y a\'f1o).\
Llena cada campo con la informaci\'f3n correspondiente.\
\
11.Finalizar la Compra:\
\'a0\
Haz clic en el bot\'f3n "Finalizar".\
Verifica que se muestre el mensaje "Thank you for your purchase!".\
Haz clic en el bot\'f3n "OK" para cerrar el mensaje.\
\
Estas son las acciones que realiza el c\'f3digo proporcionado. Cada paso ejecuta una serie de interacciones con la p\'e1gina web utilizando Selenium WebDriver y TestNG para realizar pruebas de extremo a extremo.\
}