# Proyecto Aun Sin Nombre
## Definición de la App
### Módulos del proyecto
- Expo 48
- Screens
- Stack
- Drawer
- firebase
- expo calentar / React Native Calendars 

### Pantallas
- login title - touchable -> Drawer - Menu
- Menu
- Recordatorios
- Calendario
- Mochila
- Horario
- Resultados
    - TODO
    - Calendar
![Initial WireFrame](https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0b37f44368a4f1b2d1456a4488097439)

### Menus
- stack
    - Login
    - Drawer
        Menu - initial
        Re...
![NavScreen Tree](https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e07454784909c3630d65fa355eb37e9d)

### Definición de la app
- Usuarios
- Base de datos

### Components
- TODO_Card
- Search

### Recordatorios
- La imagen es dinámina o hardcodeada?
- firebase: user/UUID/recordatorios
    - Title:
    - Description
    - Status
    - Deadline (Fecha límite)
    - created_at
    - Image?? need URL
- firebase: user/UUID/calentar
    - Title
    - Description
    - date
    - start_time
    - end_time
    - created_at
- firebase: user/UUID/materias
    - Materia
    - requisitos
- firebase: user/UUID/horario
    - hora: 0
    - dia:
    - materia:
nota: puedes tener hardcodeado array de horas
horas : {'7:00 - 8:00', '8:00 - 9:00'}
horas[0] // 7:...

## Casos de uso

### Login

Introducir nombre de usuario y contraseña para acceder a la app, si no estás registrado, ir al registro.

- **LS001**: Escribir tu correo
- **LS002**: Escribir tu contraseña
- **LS003**: Botón "Entrar"
- **LS004**: Registrarse

Campo inputtext

inputpassword

Touchable

    text ¿No estás registrado? ¡Regístrate!

Touchable

    Entrar

### Main

Se requieren 4 botones que llevarán a Recordatorios, calendario, mochila y horario.

- **MS001**: Un componente de tipo touchable que reciba la ruta y me lleve a una pantalla


### Recordatorios

El usuario creará un recordatorio clicqueando agregar nuevo recordatorio.
El nuevo recordatorio contará con los siguientes campos:

- Titulo del recordatorio
- Descripción
- Fecha
- Hora
- Estado (Hecho o no)

La pantaalla mostrará una imagen seguida de una lista de pendientes a realizar ordenados por pendientes más cercanos a concluirse (5 max) se ponen el gris los que ya se han realizado.

- **RS001**: FlatList de recordatorios
- **RS002**: Componente para agregar recordatorios
- **RS003**: Componente para búsqueda (Nos manda a Resultados Screen)

- FlatList
    - Titulo, fecha, estado
    - Link a descripción.
        - RecordatorioCard (Nueva Screen)

- Component
    - campos para agregar recordatorio


### Recordatorio Card

Es una pantalla que muestra el título del recordatorio, la descripción, los detalles de cuándo fue creado, cuándo es la fecha límite para hacerlo, y si está hecho o no.

- **RCS001**: Crear pantalla de detalle del recordatorio

### Calendario

Es una pantalla que muestra el calendario en el mes actual con el día en curso seleccinado.

### Mochila

Muestra una lista de cosas requeridas para llevar al día siguiente. Se pueden agregar y quitar cosas según lo requerido. 

- **BPS001**: Agregar una flatlist con los elementos a agregar. Cada día se deben de deseleccionar para que se pueda seleccionar el elemento diariamente. Se deben de poder eleminar los elementos
- **BPS002**: Un botón de agregar elemento 
- **BPS003**: Componente "Agregar elemento" mostrado en una ventana modal.

### Horario

Se muestra un grid ordenado por horas/días de lunes a viernes, con una materia asignada a cada hora correspondiente, un color para cada materia.

- **HS001**: Grid de hora/día con las materias organizadas y cargadas
- **HS002**: Asignar un color aleatorio a cada materia, que se guarde el color y que se pinte la celda de ese color.
- **HS003**: Componente para agregar materia y que se asigne su color.
- **HS004**: Componente para agregar materia a las horas que le corresponden. Mostrar una lista de las materias, seleccionar la materia y seleccionar los horarios en los días que le corresponden.


### Resultados

Nos muestra todos los recordatorios actuales y pasados que contentan el término buscado

- **RSS001**: Flatlist con todos los resultados que contentan ese término y su estado... tal vez se puede reusar el flatlist del mismo componente de Recordatorios...