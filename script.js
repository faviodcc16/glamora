const STORAGE_KEY = "GLOW_CLUB_orders_v1";
const SESSION_KEY = "GLOW_CLUB_session_v1";
const SUPABASE_SESSION_KEY = "GLOW_CLUB_supabase_session_v1";

const defaultUsers = [];

let users = [];

let products = [
  {
    "sku": "ACC-100A",
    "name": "SET VINCHA Y COLAS DE CABELLO BEAU VISAGE ROSADO",
    "brand": "BEAU VISAGE",
    "category": "Cabello",
    "subcategory": "Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-M200-3",
    "name": "LECHE CORPORAL DE FRUTAS - GRAPEFRUIT 3",
    "brand": "BEAU VISAGE",
    "category": "Cuidado Corporal",
    "subcategory": "Hidratación Corporal",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-M200-1",
    "name": "LECHE CORPORAL DE FRUTAS - KIWI 1",
    "brand": "BEAU VISAGE",
    "category": "Cuidado Corporal",
    "subcategory": "Hidratación Corporal",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-M200-4",
    "name": "LECHE CORPORAL DE FRUTAS - PEACH 4",
    "brand": "BEAU VISAGE",
    "category": "Cuidado Corporal",
    "subcategory": "Hidratación Corporal",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYW-500-02",
    "name": "ILUMINADOR CORPORAL CREMOSO BRONCE 02",
    "brand": "BEAU VISAGE",
    "category": "Cuidado Corporal",
    "subcategory": "Iluminadores Corporales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYW-500-01",
    "name": "ILUMINADOR CORPORAL CREMOSO GOLD 01",
    "brand": "BEAU VISAGE",
    "category": "Cuidado Corporal",
    "subcategory": "Iluminadores Corporales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JMP-02",
    "name": "SET DE BAÑO WHISPER INC. GEL DE DUCHA, CREMA CORPORAL Y SPLASH PERFUMADO - NECESER NARANJA BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado Corporal",
    "subcategory": "Sets de Baño",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JMP-01",
    "name": "SET DE BAÑO WHISPER INC. GEL DE DUCHA, CREMA CORPORAL Y SPLASH PERFUMADO - NECESER ROSADO BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado Corporal",
    "subcategory": "Sets de Baño",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYD-06",
    "name": "SERUM DERMATLOGICO BAKUCHIOL",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYD-02",
    "name": "SERUM DERMATOLOGICO DE ACIDO SALICILICO",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYD-01",
    "name": "SERUM DERMATOLOGICO GLUTATHIONE",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYD-04",
    "name": "SERUM DERMATOLOGICO NIACINANIDA",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYD-03",
    "name": "SERUM DERMATOLOGICO PEELING",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYD-05",
    "name": "SERUM DERMATOLOGICO RETINOL",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-602",
    "name": "SERUM FACIAL ANTIACNE",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-W901-4",
    "name": "SERUM FACIAL JUICY LIV SKIN - LAVANDA",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-W901-3",
    "name": "SERUM FACIAL JUICY LIV SKIN - PEPTIDO",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-W901-1",
    "name": "SERUM FACIAL JUICY LIV SKIN - TE VERDE",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-W901-2",
    "name": "SERUM FACIAL JUICY LIV SKIN - VITAMINA C",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Serums Faciales",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-078",
    "name": "SERUM DE CRECIMIENTO DE CEJAS Y PESTAÑAS BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Dermocosmética",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JEG-101",
    "name": "BROCHA MULTIPROPOSITO",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "HYG1033",
    "name": "BROCHA PARA APLICAR MASCARILLA",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LSJ-109",
    "name": "BROCHA DUO PARA CEJAS",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LSJ-102",
    "name": "BROCHA PARA BASE DE MAQUILLAJE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LSJ-104",
    "name": "BROCHA PARA COLORETE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LSJ-103",
    "name": "BROCHA PARA CONTORNO",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LSJ-105",
    "name": "BROCHA PARA CORRECTOR",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LSJ-108",
    "name": "BROCHA PARA DIFUMINAR",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LSJ-100",
    "name": "BROCHA PARA POLVOS",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LSJ-107",
    "name": "BROCHA PARA SOMBRAS DE OJOS",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLZ-100",
    "name": "BROCHA PLANA PARA BASE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BGE-002",
    "name": "ESPONJA DE MAQUILLAJE CON JABONCILLO BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "ADH-080A",
    "name": "NECESER PLASTICO CON 2 DIVISIONES - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "ADH-P003",
    "name": "NECESER ROSADO DE CUERO BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "TF-203",
    "name": "PERFILADORAS",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "TF-204",
    "name": "PRENSA PESTAÑAS",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SLJ-101",
    "name": "SET DE BROCHA DE MAQUILLAJE PARA OJOS X6 UNID BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SLJ-102",
    "name": "SET DE BROCHAS MY STIGUE BRUSHES X6 UNID - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SJ-100",
    "name": "SET DE BROCHAS SYMPHONY BRUSHES + CARTUCHERA BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BRJ-103",
    "name": "SET DE BROCHAS WHITE BRUSHES - ESTUCHE REDONDO",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLZ-012",
    "name": "SET DE ESPONJAS PARA MAQUILLAJE - 2 BLENDER 1 ESPONJA TRIANGULAR",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLZ-010",
    "name": "SET DE ESPONJAS PARA MAQUILLAJE - 3 BLENDER",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BRJ-102",
    "name": "SET DE MAQUILLAJE ESPONJAS VARIADAS X3 UNID",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLZ-099",
    "name": "SET DE TIJERA Y PERFILADORA PARA CEJAS - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Herramientas y Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-605",
    "name": "BRILLO MAGICO PARA LABIOS",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PLB-001-1",
    "name": "DELINEADOR DE LABIOS DARLING RED - TONO 1 BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PLB-001-2",
    "name": "DELINEADOR DE LABIOS DARLING RED - TONO 2 BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PLB-001-3",
    "name": "DELINEADOR DE LABIOS DARLING RED - TONO 3 BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PLB-001-4",
    "name": "DELINEADOR DE LABIOS DARLING RED-TONO 4 BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PLB-001-5",
    "name": "DELINEADOR DE LABIOS DARLING RED-TONO 5 BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PLB-001-6",
    "name": "DELINEADOR DE LABIOS DARLING RED-TONO 6 BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PLB-001-7",
    "name": "DELINEADOR DE LABIOS DARLING RED-TONO 7 BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PLB-001-8",
    "name": "DELINEADOR DE LABIOS DARLING RED-TONO 8 BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-612-1",
    "name": "LABIAL BRILLO GLAM GLOSS - TONO 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-612-2",
    "name": "LABIAL BRILLO GLAM GLOSS - TONO 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-612-3",
    "name": "LABIAL BRILLO GLAM GLOSS - TONO 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-612-4",
    "name": "LABIAL BRILLO GLAM GLOSS - TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-612-5",
    "name": "LABIAL BRILLO GLAM GLOSS - TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-612-6",
    "name": "LABIAL BRILLO GLAM GLOSS - TONO 6",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-325-1",
    "name": "LABIAL EN BARRA CREAMY JUICE NUEVO TONO 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-325-2",
    "name": "LABIAL EN BARRA CREAMY JUICE NUEVO TONO 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-325-3",
    "name": "LABIAL EN BARRA CREAMY JUICE NUEVO TONO 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-325-4",
    "name": "LABIAL EN BARRA CREAMY JUICE NUEVO TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-325-5",
    "name": "LABIAL EN BARRA CREAMY JUICE NUEVO TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-325-6",
    "name": "LABIAL EN BARRA CREAMY JUICE NUEVO - TONO 6",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-603-02",
    "name": "LABIAL EN BARRA RETRACTIL BIG SMILE 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-603-04",
    "name": "LABIAL EN BARRA RETRACTIL HONEYDEW 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-603-06",
    "name": "LABIAL EN BARRA RETRACTIL IN LOVE 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-603-05",
    "name": "LABIAL EN BARRA RETRACTIL PINK SUGAR 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-603-01",
    "name": "LABIAL EN BARRA RETRACTIL POP SONG 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPG-603-03",
    "name": "LABIAL EN BARRA RETRACTIL PRINCESS DREAM 03.",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-322-01",
    "name": "LABIAL EN BARRA RETRACTIL MORADO-01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-322-02",
    "name": "LABIAL EN BARRA RETRACTIL MORADO - 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-322-03",
    "name": "LABIAL EN BARRA RETRACTIL MORADO - 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-322-04",
    "name": "LABIAL EN BARRA RETRACTIL MORADO-04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-322-05",
    "name": "LABIAL EN BARRA RETRACTIL MORADO - 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-322-06",
    "name": "LABIAL EN BARRA RETRACTIL MORADO - 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LIP-325-1",
    "name": "LABIAL LÍQUIDO MATE CON DESTELLOS - TONO 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LIP-325-2",
    "name": "LABIAL LÍQUIDO MATE CON DESTELLOS - TONO 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LIP-325-3",
    "name": "LABIAL LÍQUIDO MATE CON DESTELLOS - TONO 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LIP-325-4",
    "name": "LABIAL LÍQUIDO MATE CON DESTELLOS - TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LIP-325-5",
    "name": "LABIAL LÍQUIDO MATE CON DESTELLOS - TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LIP-325-6",
    "name": "LABIAL LÍQUIDO MATE CON DESTELLOS - TONO 6",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-701-02",
    "name": "LABIAL LIQUIDO MATTE CAPUCCINO 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-701-04",
    "name": "LABIAL LIQUIDO MATTE DATE 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-701-06",
    "name": "LABIAL LIQUIDO MATTE FLIRTY 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-701-01",
    "name": "LABIAL LIQUIDO MATTE PASSION 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-701-05",
    "name": "LABIAL LIQUIDO MATTE RELAX 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-701-03",
    "name": "LABIAL LIQUIDO MATTE TANGO 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-1",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-10",
    "name": "LABIAL Y DELINEADOR LIPSYP- TONO 10",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-11",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 11",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-12",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 12",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-2",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-3",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-4",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-5",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-6",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 6",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-7",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 7",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-8",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 8",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-101-9",
    "name": "LABIAL Y DELINEADOR LIPSYP - TONO 9",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-200-1",
    "name": "LIP GLOSS CALIFORNIA - TONOS 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-200-2",
    "name": "LIP GLOSS CALIFORNIA - TONOS 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-200-3",
    "name": "LIP GLOSS CALIFORNIA - TONOS 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-200-4",
    "name": "LIP GLOSS CALIFORNIA - TONOS 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-200-5",
    "name": "LIP GLOSS CALIFORNIA - TONOS 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-200-6",
    "name": "LIP GLOSS CALIFORNIA - TONOS 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-200-7",
    "name": "LIP GLOSS CALIFORNIA - TONOS 07",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-200-8",
    "name": "LIP GLOSS CALIFORNIA - TONOS 08",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-045",
    "name": "LIPS GLOSS MAXIMIZER BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LIP-326-1",
    "name": "MAGIC LIP OIL ROLLON - TONO 1 GRAPE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LIP-326-2",
    "name": "MAGIC LIP OIL ROLLON - TONO 2 WATERMELON",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LIP-326-3",
    "name": "MAGIC LIP OIL ROLLON - TONO 3 MINT",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PL-0916-01",
    "name": "PH LIP OIL ACEITE PARA LABIOS - TONO 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PL-0916-02",
    "name": "PH LIP OIL ACEITE PARA LABIOS - TONO 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PL-0916-03",
    "name": "PH LIP OIL ACEITE PARA LABIOS - TONO 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PL-0916-04",
    "name": "PH LIP OIL ACEITE PARA LABIOS - TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "PL-0916-05",
    "name": "PH LIP OIL ACEITE PARA LABIOS - TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-300-2",
    "name": "SET TRIO DE LABIALES MATE TIPO CRAYON - AURORA PINK",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-300-1",
    "name": "SET TRIO DE LABIALES MATE TIPO CRAYON - WILD ROSE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-400-01",
    "name": "TINTA DE LABIOS IT'S YOU - 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-400-02",
    "name": "TINTA DE LABIOS IT'S YOU - 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-400-03",
    "name": "TINTA DE LABIOS IT'S YOU - 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-400-04",
    "name": "TINTA DE LABIOS IT'S YOU - 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-400-5",
    "name": "TINTA DE LABIOS IT'S YOU - 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-400-6",
    "name": "TINTA DE LABIOS IT'S YOU - 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-400-7",
    "name": "TINTA DE LABIOS IT'S YOU - 07",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LP-400-8",
    "name": "TINTA DE LABIOS IT'S YOU - 08",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Labios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-701-06",
    "name": "DELINEADOR DE GLITTER SAY HI-CELESTE 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-701-02",
    "name": "DELINEADOR DE GLITTER SAY HI - DORADO 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-701-05",
    "name": "DELINEADOR DE GLITTER SAY HI - MORADO 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-701-01",
    "name": "DELINEADOR DE GLITTER SAY HI - PLATEADO 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-701-04",
    "name": "DELINEADOR DE GLITTER SAY HI ROJO 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-701-03",
    "name": "DELINEADOR DE GLITTER SAY HI - ROSADO 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FE-411",
    "name": "DELINEADOR LIQUIDO OH LA LA - A PRUEBA DE AGUA",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SF-122-02",
    "name": "GEL DE CEJAS BEAU VISAGE - BROWN",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SF-122-03",
    "name": "GEL DE CEJAS BEAU VISAGE - DARK BROWN",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-005",
    "name": "GEL FIJADOR PARA CEJAS BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BW-007",
    "name": "KIT MINI PALETA PARA CEJAS",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LJS-1406",
    "name": "KIT PARA CEJAS Y PESTAÑAS LEXIE - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-017-5",
    "name": "LAPIZ DELINEADOR RAINBOW RETRACTIL AMARILLO - 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-017-2",
    "name": "LAPIZ DELINEADOR RAINBOW RETRACTIL BLANCO-02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-017-7",
    "name": "LAPIZ DELINEADOR RAINBOW RETRACTIL CELESTE - 07",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-017-4",
    "name": "LAPIZ DELINEADOR RAINBOW RETRACTIL MELON - 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-017-8",
    "name": "LAPIZ DELINEADOR RAINBOW RETRACTIL MORADO - 08",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-017-1",
    "name": "LAPIZ DELINEADOR RAINBOW RETRACTIL NEGRO - 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-017-3",
    "name": "LAPIZ DELINEADOR RAINBOW RETRACTIL ROSADO-03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-017-6",
    "name": "LAPIZ DELINEADOR RAINBOW RETRACTIL VERDE - 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-046-01",
    "name": "LAPIZ Y GEL PARA CEJAS - DARK BROWN 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-046-02",
    "name": "LAPIZ Y GEL PARA CEJAS - MEDIUM BROWN 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-002",
    "name": "MASCARA DE PESTAÑAS Y PLUMON BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LJS-3109",
    "name": "PEGAMENTO PARA PESTAÑAS COLOR NEGRO BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS-300",
    "name": "PESTAÑAS, CAROLINE PUNTO X PUNTO",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-1",
    "name": "PESTAÑAS, CHARLOTTE 3D 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-2",
    "name": "PESTAÑAS, CHARLOTTE 3D 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-3",
    "name": "PESTAÑAS, CHARLOTTE 3D 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-4",
    "name": "PESTAÑAS, CHARLOTTE 3D 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-5",
    "name": "PESTAÑAS, CHARLOTTE 3D 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-6",
    "name": "PESTAÑAS, CHARLOTTE 3D 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-7",
    "name": "PESTAÑAS, CHARLOTTE 3D 07",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-8",
    "name": "PESTAÑAS, CHARLOTTE 3D 08",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-9",
    "name": "PESTAÑAS, CHARLOTTE 3D 09",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-10",
    "name": "PESTAÑAS, CHARLOTTE 3D 10",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-11",
    "name": "PESTAÑAS, CHARLOTTE 3D 11",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-12",
    "name": "PESTAÑAS, CHARLOTTE 3D 12",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-13",
    "name": "PESTAÑAS, CHARLOTTE 3D 13",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-14",
    "name": "PESTAÑAS, CHARLOTTE 3D 14",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS3D-15",
    "name": "PESTAÑAS, CHARLOTTE 3D 15",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS-200-1",
    "name": "PESTAÑAS, MIMI 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS-200-2",
    "name": "PESTAÑAS, MIMI 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS-200-3",
    "name": "PESTAÑAS, MIMI 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS-200-4",
    "name": "PESTAÑAS, MIMI 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS-200-5",
    "name": "PESTAÑAS, MIMI 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS-200-6",
    "name": "PESTAÑAS, MIMI 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS-200-JV-SHI",
    "name": "PESTAÑAS, MIMI SHI 07",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LAS-200-JV-WIS",
    "name": "PESTAÑAS, MIMI WIS 08",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "HW-800-2",
    "name": "SOMBRA DE OJOS APRESTO",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "HW-800-1",
    "name": "SOMBRA DE OJOS CIAO",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-020",
    "name": "SOMBRA DE OJOS COLORFULL LIFE BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "GLO-010",
    "name": "SOMBRA DE OJOS FLAMINGO BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-016",
    "name": "SOMBRA DE OJOS FOREVER YOUNG",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-019",
    "name": "SOMBRA DE OJOS MIAMI BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-0816-1",
    "name": "SOMBRA DE OJOS PINKY PROMISE 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-0816-2",
    "name": "SOMBRA DE OJOS PINKY PROMISE 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-0816-3",
    "name": "SOMBRA DE OJOS PINKY PROMISE 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-9125-2",
    "name": "SOMBRA DE OJOS RETRO LATE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-9125-1",
    "name": "SOMBRA DE OJOS RETRO PINK",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "HW-709-1",
    "name": "SOMBRA DE OJOS SWEET DAISY BEIGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "HW-709-2",
    "name": "SOMBRA DE OJOS SWEET DAISY CELESTE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-302",
    "name": "SOMBRA DE OJOS TEKILA BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-300",
    "name": "SOMBRA DE OJOS TONO CHOCOLATE, BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-016-1",
    "name": "SOMBRA LIQUIDA TONO 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-016-2",
    "name": "SOMBRA LIQUIDA TONO 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-016-3",
    "name": "SOMBRA LIQUIDA TONO 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-016-4",
    "name": "SOMBRA LIQUIDA TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FAV-016-5",
    "name": "SOMBRA LIQUIDA TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-007-2",
    "name": "SOMBRA SHIMMER BABY DORADO",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-007-1",
    "name": "SOMBRA SHIMMER BABY PLATEADA",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Ojos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-9126",
    "name": "PALETA BEAU VISAGE BORN TO SHINE SOMBRAS DE OJOS, ILUMINADORES Y RUBORES",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Paletas",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "23005",
    "name": "PALETA DE CONTORNO EN CREMA BEAU VISAGE 23005",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Paletas",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-013",
    "name": "PALETA DE CONTORNO NATURAL SOLID BEAU VISAGE JAV-013",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Paletas",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-1",
    "name": "BASE LIQUIDA BEAU VISAGE - ALL CHANTILLI 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-7",
    "name": "BASE LIQUIDA BEAU VISAGE - CARAMEL 07",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-9",
    "name": "BASE LIQUIDA BEAU VISAGE - CHOCOLATE 09",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-8",
    "name": "BASE LIQUIDA BEAU VISAGE - CINNAMONZ 08",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-6",
    "name": "BASE LIQUIDA BEAU VISAGE - DEEP COFFEE 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-2",
    "name": "BASE LIQUIDA BEAU VISAGE - FAIR CARAMEL 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-3",
    "name": "BASE LIQUIDA BEAU VISAGE - LIGHT NUDE 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-4",
    "name": "BASE LIQUIDA BEAU VISAGE - MEDIUM CHOCOLATE 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-5",
    "name": "BASE LIQUIDA BEAU VISAGE - TAN CINNAMON 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-1N",
    "name": "BASE LIQUIDA NUEVA BEAU VISAGE - TONO 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-2N",
    "name": "BASE LIQUIDA NUEVA BEAU VISAGE - TONO 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-3N",
    "name": "BASE LIQUIDA NUEVA BEAU VISAGE - TONO 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-4N",
    "name": "BASE LIQUIDA NUEVA BEAU VISAGE - TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-5N",
    "name": "BASE LIQUIDA NUEVA BEAU VISAGE - TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-040-6N",
    "name": "BASE LIQUIDA NUEVA BEAU VISAGE - TONO 6",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-050-1",
    "name": "BASE LIQUIDA SHE GOLDEN BEAU VISAGE TONO 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-050-2",
    "name": "BASE LIQUIDA SHE GOLDEN BEAU VISAGE TONO 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-050-3",
    "name": "BASE LIQUIDA SHE GOLDEN BEAU VISAGE TONO 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-050-4",
    "name": "BASE LIQUIDA SHE GOLDEN BEAU VISAGE TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-050-5",
    "name": "BASE LIQUIDA SHE GOLDEN BEAU VISAGE TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-050-6",
    "name": "BASE LIQUIDA SHE GOLDEN BEAU VISAGE TONO 6",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-067A-4",
    "name": "CORRECTOR DE OJERAS LIQUIDO TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-067A-5",
    "name": "CORRECTOR DE OJERAS LIQUIDO TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-067A-6",
    "name": "CORRECTOR DE OJERAS LIQUIDO TONO 6",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-067B-7",
    "name": "CORRECTOR DE OJERAS LIQUIDO TONO 7",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-067B-8",
    "name": "CORRECTOR DE OJERAS LIQUIDO TONO 8",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-067B-9",
    "name": "CORRECTOR DE OJERAS LIQUIDO TONO 9",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FM-501-1",
    "name": "CORRECTOR EN BARRA MALIBU, TONOS 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FM-501-2",
    "name": "CORRECTOR EN BARRA MALIBU, TONOS 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FM-501-3",
    "name": "CORRECTOR EN BARRA MALIBU, TONOS 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FM-501-4",
    "name": "CORRECTOR EN BARRA MALIBU, TONOS 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FM-501-5",
    "name": "CORRECTOR EN BARRA MALIBU, TONOS 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FM-501-6",
    "name": "CORRECTOR EN BARRA MALIBU, TONOS 6",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-067-3",
    "name": "CORRECTOR LIQUIDO INDIVIDUAL- TONO 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-067-4",
    "name": "CORRECTOR LIQUIDO INDIVIDUAL - TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-067-5",
    "name": "CORRECTOR LIQUIDO INDIVIDUAL-TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-W400A",
    "name": "FIJADOR MATIFICANTE BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LV-016-6",
    "name": "ILUMINADOR EN POLVO CORAZON - COFFEE BEAN 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LV-016-3",
    "name": "ILUMINADOR EN POLVO CORAZON - GLAMOUR GOLD 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LV-016-1",
    "name": "ILUMINADOR EN POLVO CORAZON - PLATINUM FROSTING 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LV-016-2",
    "name": "ILUMINADOR EN POLVO CORAZON - ROSE GOLD 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LV-016-4",
    "name": "ILUMINADOR EN POLVO CORAZON - SHADOW CARAMEL 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LV-016-5",
    "name": "ILUMINADOR EN POLVO CORAZON - SHADOW SHEEN 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-041-1",
    "name": "POLVO COMPACTO BEAU VISAGE - ALL CHANTILLI 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-041-7",
    "name": "POLVO COMPACTO BEAU VISAGE - CARAMEL 07",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-041-9",
    "name": "POLVO COMPACTO BEAU VISAGE - CHOCOLATE 09",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-041-8",
    "name": "POLVO COMPACTO BEAU VISAGE - CINNAMONZ 08",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-041-6",
    "name": "POLVO COMPACTO BEAU VISAGE - DEEP COFFEE 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-041-2",
    "name": "POLVO COMPACTO BEAU VISAGE - FAIR CARAMEL 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-041-3",
    "name": "POLVO COMPACTO BEAU VISAGE - LIGHT NUDE 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-041-4",
    "name": "POLVO COMPACTO BEAU VISAGE - MEDIUM CHOCOLATE 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-041-5",
    "name": "POLVO COMPACTO BEAU VISAGE - TAN CINNAMON 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FS-101",
    "name": "POLVO FIJADOR TRASLUCIDO DURAZNO - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FS-100",
    "name": "POLVO FIJADOR TRASLUCIDO PINK ROSA - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FA-400",
    "name": "POLVO MATIFICANTE TRASLUCIDO DULL COMÐ ÐÐ¡Ð¢Ðž",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "AR-305-B",
    "name": "POLVO SUELTO BANANA BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "AR-305-T",
    "name": "POLVO SUELTO TRASLUCIDO BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "58866",
    "name": "PRIMER BEAU VISAGE BRIGHTEN HYDRATING",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "FE-308",
    "name": "PRIMER POROS BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-2401-1",
    "name": "RUBOR CREMOSO REDDISH-CRYSTAL ROSE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-2401-3",
    "name": "RUBOR CREMOSO REDDISH- MORNING GLORY",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-2401-5",
    "name": "RUBOR CREMOSO REDDISH-PRIMORE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-2401-2",
    "name": "RUBOR CREMOSO REDDISH-SHELL CORAL",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "LPS-2401-4",
    "name": "RUBOR CREMOSO REDDISH-TROPICAL PEACH",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLS-101-6",
    "name": "RUBOR EN POLVO DEARLY LOVED - BOLD 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLS-101-2",
    "name": "RUBOR EN POLVO DEARLY LOVED - GODDESS 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLS-101-3",
    "name": "RUBOR EN POLVO DEARLY LOVED - HATEFUL 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLS-101-1",
    "name": "RUBOR EN POLVO DEARLY LOVED - SPRING 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLS-101-5",
    "name": "RUBOR EN POLVO DEARLY LOVED-NAUGHTY 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLS-101-4",
    "name": "RUBOR EN POLVO DEARLY LOVED-TENDER 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLC-600-05",
    "name": "RUBOR LIQUIDO CAKE - CANDY PINK 05",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLC-600-06",
    "name": "RUBOR LIQUIDO CAKE - CHERRY CLOSSOM 06",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLC-600-02",
    "name": "RUBOR LIQUIDO CAKE CONCH SHELL 02",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLC-600-01",
    "name": "RUBOR LIQUIDO CAKE - GERANIUM PINK 01",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLC-600-03",
    "name": "RUBOR LIQUIDO CAKE - QUARTZ PINK 03",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLC-600-04",
    "name": "RUBOR LIQUIDO CAKE - ROSE SHADOW 04",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLZ-601-01",
    "name": "RUBOR LIQUIDO CON APLICADOR LOVE STRONG BEAU VISAGE - TONO 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLZ-601-02",
    "name": "RUBOR LIQUIDO CON APLICADOR LOVE STRONG BEAU VISAGE - TONO 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLZ-601-03",
    "name": "RUBOR LIQUIDO CON APLICADOR LOVE STRONG BEAU VISAGE - TONO 3",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLZ-601-04",
    "name": "RUBOR LIQUIDO CON APLICADOR LOVE STRONG BEAU VISAGE - TONO 4",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLZ-601-05",
    "name": "RUBOR LIQUIDO CON APLICADOR LOVE STRONG BEAU VISAGE - TONO 5",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLZ-601-06",
    "name": "RUBOR LIQUIDO CON APLICADOR LOVE STRONG BEAU VISAGE - TONO 6",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLS-2010-1",
    "name": "RUBOR Y TINTA DE LABIOS EN BARRA - THE CHEEKS - TONO 1 PINKESQUE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLS-2010-2",
    "name": "RUBOR Y TINTA DE LABIOS EN BARRA - THE CHEEKS - TONO 2 MARYS ROSE",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLS-2010-3",
    "name": "RUBOR Y TINTA DE LABIOS EN BARRA - THE CHEEKS - TONO 3 FARFAIT PINK",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "BLS-2010-4",
    "name": "RUBOR Y TINTA DE LABIOS EN BARRA - THE CHEEKS - TONO 4 BARELI PINK",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "JAV-023",
    "name": "SELLADOR SPRAY",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-069-1",
    "name": "SET DE CONTORNO, ILUMINADOR, CORRECTOR LIQUIDO - TONO 1",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "CON-069-2",
    "name": "SET DE CONTORNO, ILUMINADOR, CORRECTOR LIQUIDO - TONO 2",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Rostro",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "TRA-100",
    "name": "SET BASICO DE MAQUILLAJE, SELLADOR, MASCARA, PRIMER POROS, BRILLO LABIAL, PALETA SOMBRAS",
    "brand": "BEAU VISAGE",
    "category": "Maquillaje",
    "subcategory": "Sets",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "HYG1035",
    "name": "CEPILLO FACIAL DE SILICONA Y CEPILLO PARA MASCARILLA DOBLE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Accesorios",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-W400B",
    "name": "AGUA HIDRATANTE DE ROSAS BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Hidratación",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-075",
    "name": "EYE CONTOUR CREAM BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Hidratación",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-085",
    "name": "FACIAL CREAM FOR DAY",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Hidratación",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-086",
    "name": "FACIAL CREAM FOR NIGHT",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Hidratación",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-001",
    "name": "BALSAMO DESMAQUILLANTE BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-604",
    "name": "ESPUMA FACIAL ANTIANCE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYB-204-03",
    "name": "ESPUMA FACIAL BAMBOO",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYB-204-02",
    "name": "ESPUMA FACIAL GRAPEFRUIT",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYB-204-04",
    "name": "ESPUMA FACIAL LAVENDER",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKYB-204-01",
    "name": "ESPUMA FACIAL WATERMELON",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-F100",
    "name": "EXFOLIANTE KIWI",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-F103",
    "name": "EXFOLIANTE WATERMELON",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SK-020",
    "name": "EXFOLIATING SCRUB LIV COCOA LOVE BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-D01",
    "name": "LIV AGUA MICELLAR",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-W050",
    "name": "TOALLAS DESMAQUILLANTE AGUA MICELAR Y EXTRACTO DE HIALURON - BLANCO",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-W051",
    "name": "TOALLAS DESMAQUILLANTE EXTRACTO DE MANZANILLA, CARBON ACTIVADO Y CALENDULA",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-W052",
    "name": "TOALLAS DESMAQUILLANTE EXTRACTO DE PEPINO, TE VERDE Y ALOE VERA",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-W054",
    "name": "TOALLAS DESMAQUILLANTE EXTRACTO DE UVA, NARANJA Y VITAMINA C - NARANJA",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Limpieza",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-070",
    "name": "PROTECTOR SOLAR GEL",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Protección Solar",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKB14",
    "name": "TONIC WATER LIV ROSAS - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tónicos",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-603",
    "name": "CREMA FACIAL ANTI-ACNE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-605",
    "name": "CREMA PARA PUNTOS DE ACNE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SCH-001",
    "name": "DUO BALSAMO Y EXFOLIANTE DE LABIOS BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-S201",
    "name": "HEART PATCHES PARA EL ACNE - CORAZON X 24 UNID - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-S202",
    "name": "HEART PATCHES PARA EL ACNE - ESTRELLITAS X 24 UNID - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-S203",
    "name": "HEART PATCHES PARA EL ACNE - FLORES X 24 UNID BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKB02",
    "name": "LIV KIWI MASK BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKB01",
    "name": "LIV WATERMELON MASK BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-601",
    "name": "MASCARILLA DE VELO, ANTI-ACNE X UNID",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SK-E002",
    "name": "PARCHES PARA NARIZ CON ACIDO SALICILICO - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SK-E003",
    "name": "PARCHES PARA NARIZ PARA CARBON ACTIVADO - BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "DK-201",
    "name": "SET FACIAL CARE ACLARANTE BEAU VISAGE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "SKY-800",
    "name": "SET DE SERUM Y PRIMER DE AGUACATE",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "DKT-100",
    "name": "SET SKINCARE ACIDO HIALURONICO ALWAYS SWEET INCLUYE GEL LIMPIADOR, TONICO, CREMA PARA CONTORNO DE OJOS, CREMA HIDRATANTE Y ACLARANTE, SERUM",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  },
  {
    "sku": "KT-200",
    "name": "ORANGE JUICE KIT, INCLUYE GEL LIMPIADOR, TONICO, CREMA DE CONTORNO DE OJOS, SERUM, CREMA HIDRATANTE CON VITAMINA C",
    "brand": "BEAU VISAGE",
    "category": "Cuidado de la Piel",
    "subcategory": "Tratamiento",
    "price": 0,
    "stock": 0
  }
];

const navItems = [
  { id: "dashboard", label: "Dashboard", title: "Resumen comercial", roles: ["management", "supervisor", "consultant"], icon: "grid" },
  { id: "order", label: "Nuevo pedido", title: "Registrar pedido", roles: ["management", "supervisor", "consultant"], icon: "bag" },
  { id: "orders", label: "Pedidos", title: "Registro de pedidos", roles: ["management", "supervisor", "consultant"], icon: "clipboard" },
  { id: "reports", label: "Reportes", title: "Reportes comerciales", roles: ["management", "supervisor", "consultant"], icon: "chart" },
  { id: "catalog", label: "Catálogo", title: "Productos Glow Club", roles: ["management", "supervisor", "consultant"], icon: "tag" },
  { id: "users", label: "Equipo", title: "Jerarquía comercial", roles: ["management", "supervisor"], icon: "users" }
];

const statusLabels = {
  received: "Recibido",
  preparing: "En preparacion",
  shipped: "Enviado",
  delivered: "Entregado",
  cancelled: "Cancelado"
};

const paymentLabels = {
  pending: "Pendiente",
  review: "En revision",
  confirmed: "Confirmado"
};

const formatMoney = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN"
});

const formatDate = new Intl.DateTimeFormat("es-PE", {
  dateStyle: "medium",
  timeStyle: "short"
});

const supabaseSettings = window.BEAU_VISAGE_SUPABASE || window.GLOW_CLUB_SUPABASE || null;

const appConfig = {
  dataMode: supabaseSettings?.enabled ? "supabase" : "localStorage",
  apiBaseUrl: "",
  supabase: supabaseSettings,
  company: {
    ruc: "20613278851",
    legalName: "SCH BEAUTY IMPORT E.I.R.L.",
    tradeName: "Glow Club",
    address: "AV. LA ENCALADA NRO. 1010 INT. 706 URB. CENTRO COMERCIAL MONTERRICO LIMA - LIMA - SANTIAGO DE SURCO",
    ticketPrefix: "GC"
  }
};

let state = loadState();
users = state.users;
let currentUser = null;
let currentView = "dashboard";
let currentReceipt = null;
let selectedReportConsultant = null;
let selectedReportSupervisor = null;
let toastTimer = null;
let catalogPage = 1;
let catalogPageSize = 5;
let catalogQuickFilter = "all";
let pendingCatalogSku = "";

const authScreen = document.querySelector("#auth-screen");
const appShell = document.querySelector("#app-shell");
const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
const loginError = document.querySelector("#login-error");
const userCard = document.querySelector("#user-card");
const navMenu = document.querySelector("#nav-menu");
const pageTitle = document.querySelector("#page-title");
const currentSection = document.querySelector("#current-section");
const sidebar = document.querySelector("#sidebar");
const sidebarOverlay = document.querySelector("#sidebar-overlay");
const toast = document.querySelector("#toast");
const orderDialog = document.querySelector("#order-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogContent = document.querySelector("#dialog-content");
const passwordDialog = document.querySelector("#password-dialog");
const passwordForm = document.querySelector("#password-form");
const newPasswordInput = document.querySelector("#new-password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordError = document.querySelector("#password-error");

let pendingPasswordUser = null;
let pendingPasswordCurrent = "";

document.addEventListener("DOMContentLoaded", init);

async function init() {
  loginForm.addEventListener("submit", handleLogin);
  document.querySelector("#logout-btn").addEventListener("click", logout);
  document.querySelector("#menu-toggle").addEventListener("click", toggleSidebar);
  sidebarOverlay?.addEventListener("click", closeSidebar);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSidebar();
  });
  document.addEventListener("click", handlePasswordToggle);
document.querySelector("#quick-order-btn")?.addEventListener("click", handleTopbarAction);
  document.querySelector("#close-dialog").addEventListener("click", () => orderDialog.close());
  passwordForm?.addEventListener("submit", handlePasswordChange);
  passwordDialog?.addEventListener("cancel", (event) => event.preventDefault());

  if (isSupabaseMode()) {
    const restored = await restoreSupabaseSession();
    if (restored) return;
    authScreen.classList.remove("hidden");
    return;
  }

  const sessionId = localStorage.getItem(SESSION_KEY);
  if (sessionId) {
    const user = users.find((item) => item.id === sessionId);
    if (user) {
      currentUser = user;
      openApp();
      return;
    }
  }

  authScreen.classList.remove("hidden");
}

function toggleSidebar() {
  if (sidebar.classList.contains("open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.hidden = false;
  document.body.classList.add("menu-open");
  document.querySelector("#menu-toggle")?.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  if (sidebarOverlay) sidebarOverlay.hidden = true;
  document.body.classList.remove("menu-open");
  document.querySelector("#menu-toggle")?.setAttribute("aria-expanded", "false");
}

function handleTopbarAction() {
  const button = document.querySelector("#quick-order-btn");
  if (button?.dataset.action === "new-access") {
    showView("users");
    window.setTimeout(() => document.querySelector("#new-consultant-name")?.focus(), 80);
    return;
  }
  showView("order");
}

function handlePasswordToggle(event) {
  const button = event.target.closest("[data-toggle-password]");
  if (!button) return;
  const input = document.querySelector(`#${button.dataset.togglePassword}`);
  if (!input) return;
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  button.textContent = show ? "Ocultar" : "Mostrar";
  button.setAttribute("aria-label", `${show ? "Ocultar" : "Mostrar"} contraseña`);
}

function loadState() {
  if (isSupabaseMode()) {
    return { users: [], orders: [] };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      const normalized = normalizeState(parsed);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      return normalized;
    } catch (error) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  const seeded = { users: cloneDefaultUsers(), orders: seedOrders() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
  return seeded;
}

function isSupabaseMode() {
  return appConfig.dataMode === "supabase" && Boolean(appConfig.supabase?.url && appConfig.supabase?.anonKey);
}

function orderEmailSettings() {
  return appConfig.supabase?.orderEmail || {};
}

function canSendOrderEmail() {
  const settings = orderEmailSettings();
  return isSupabaseMode() && settings.enabled === true && Boolean(settings.functionName);
}

function supabaseSession() {
  try {
    return JSON.parse(localStorage.getItem(SUPABASE_SESSION_KEY) || "null");
  } catch (error) {
    return null;
  }
}

function supabaseHeaders({ auth = true, json = true } = {}) {
  const session = supabaseSession();
  const headers = {
    apikey: appConfig.supabase.anonKey
  };
  if (auth) {
    headers.Authorization = `Bearer ${session?.access_token || appConfig.supabase.anonKey}`;
  }
  if (json) {
    headers["Content-Type"] = "application/json";
  }
  return headers;
}

async function supabaseFetch(path, options = {}) {
  const response = await fetch(`${appConfig.supabase.url}${path}`, {
    ...options,
    headers: {
      ...supabaseHeaders({ auth: options.auth !== false, json: options.json !== false }),
      ...(options.headers || {})
    }
  });
  if (!response.ok) {
    let message = response.statusText;
    try {
      const payload = await response.json();
      message = payload.message || payload.error_description || payload.error || JSON.stringify(payload) || message;
    } catch (error) {
      message = await response.text() || message;
    }
    throw new Error(message);
  }
  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function friendlyDatabaseError(error) {
  const message = error?.message || String(error);
  if (/row-level security|violates row-level|policy|permission denied|schema cache|does not exist|not found|login_app_user|change_app_password|create_app_user|create_order_with_inventory|update_order_payment_status|update_order_status/i.test(message)) {
    return `${message}. Ejecuta primero glow-club-01-reiniciar-base.sql y luego products-seed-glow-club.sql en Supabase SQL Editor.`;
  }
  return message;
}

async function restoreSupabaseSession() {
  const session = supabaseSession();
  if (!session?.userId) return false;
  try {
    await loadSupabaseData();
    const user = users.find((item) => item.id === session.userId);
    if (!user) {
      throw new Error("Usuario no encontrado.");
    }
    if (user.mustChangePassword) {
      localStorage.removeItem(SUPABASE_SESSION_KEY);
      return false;
    }
    currentUser = user;
    openApp();
    return true;
  } catch (error) {
    localStorage.removeItem(SUPABASE_SESSION_KEY);
    return false;
  }
}

async function supabaseAppLogin(email, password) {
  const rows = await supabaseFetch("/rest/v1/rpc/login_app_user", {
    method: "POST",
    body: JSON.stringify({
      p_email: email,
      p_password: password
    })
  });
  const user = rows[0];
  if (!user) {
    throw new Error("Correo o contrasena incorrectos, o la base aun no tiene el usuario de gerencia.");
  }
  return mapAppUser(user);
}

async function loadSupabaseData() {
  const [appUsers, remoteProducts, orders, items, receipts] = await Promise.all([
    fetchAppUsers("/rest/v1/app_user_profiles?select=id,name,email,role,phone,zone,supervisor_id,active,must_change_password&active=eq.true&order=name.asc"),
    fetchProducts(),
    supabaseFetch("/rest/v1/orders?select=*&order=created_at.desc"),
    supabaseFetch("/rest/v1/order_items?select=*"),
    supabaseFetch("/rest/v1/payment_receipts?select=*")
  ]);

  users = appUsers.map(mapAppUser);
  products = remoteProducts.map(mapProduct);
  state = {
    users,
    orders: mapRemoteOrders(orders, items, receipts)
  };
}

async function fetchAppUsers(path) {
  try {
    return await supabaseFetch(path);
  } catch (error) {
    if (!String(error.message).includes("supervisor_id")) {
      throw error;
    }
    return supabaseFetch(path.replace(",supervisor_id", "")).then((rows) => rows.map((row) => ({ ...row, supervisor_id: "" })));
  }
}

async function fetchProducts() {
  return supabaseFetch("/rest/v1/products?select=sku,name,brand,category,subcategory,price,stock,active&active=eq.true&order=category.asc,name.asc");
}

function mapAppUser(profile) {
  const role = profile.role === "admin" ? "management" : profile.role;
  return {
    id: profile.id,
    name: profile.name,
    email: profile.email,
    role,
    phone: profile.phone || "",
    zone: profile.zone || "",
    supervisorId: profile.supervisor_id || profile.supervisorId || "",
    mustChangePassword: Boolean(profile.must_change_password ?? profile.mustChangePassword)
  };
}

function mapProduct(product) {
  return {
    sku: product.sku,
    name: product.name,
    brand: product.brand || "BEAU VISAGE",
    category: product.category || "Sin categoria",
    subcategory: product.subcategory || "",
    stock: Number(product.stock || 0),
    price: Number(product.price || 0)
  };
}

function mapRemoteOrders(orders, items, receipts) {
  const itemsByOrder = groupBy(items, "order_id");
  const receiptsByOrder = groupBy(receipts, "order_id");
  return orders.map((order) => {
    const mappedItems = (itemsByOrder[order.id] || []).map((item) => ({
      sku: item.sku,
      name: item.product_name,
      price: Number(item.unit_price || 0),
      quantity: Number(item.quantity || 0)
    }));
    const receipt = receiptsByOrder[order.id]?.[0];
    return {
      id: order.id,
      createdAt: order.created_at,
      consultantId: order.consultant_id,
      customerName: order.customer_name,
      customerDocument: order.customer_document || "",
      customerPhone: order.customer_phone || "",
      district: order.district || "",
      deliveryType: order.delivery_type || "",
      address: order.address || "",
      notes: order.notes || "",
      status: order.status,
      paymentStatus: order.payment_status,
      paymentMethod: order.payment_method || "",
      receipt: receipt ? {
        name: receipt.file_name,
        type: receipt.mime_type,
        dataUrl: receipt.storage_url?.startsWith("http") || receipt.storage_url?.startsWith("data:")
          ? receipt.storage_url
          : `${appConfig.supabase.url}/storage/v1/object/public/${appConfig.supabase.receiptBucket}/${receipt.storage_url}`,
        storageUrl: receipt.storage_url
      } : null,
      items: mappedItems,
      subtotal: Number(order.subtotal || 0),
      discount: Number(order.discount || 0),
      total: Number(order.total || 0)
    };
  });
}

function groupBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key];
    acc[value] = acc[value] || [];
    acc[value].push(row);
    return acc;
  }, {});
}

function normalizeState(data) {
  return {
    users: mergeUsers(Array.isArray(data?.users) ? data.users : []),
    orders: Array.isArray(data?.orders) ? migrateOrders(data.orders) : seedOrders()
  };
}

function migrateOrders(orders) {
  const validSkus = new Set(products.map((product) => product.sku));
  return orders.filter((order) => {
    if (!Array.isArray(order.items) || !order.items.length) return false;
    return order.items.every((item) => validSkus.has(item.sku));
  });
}

function cloneDefaultUsers() {
  return defaultUsers.map((user) => ({ ...user }));
}

function mergeUsers(storedUsers) {
  const merged = new Map();
  cloneDefaultUsers().forEach((user) => merged.set(user.id, user));
  storedUsers.forEach((user) => {
    if (!user?.id) return;
    merged.set(user.id, normalizeUser({ ...merged.get(user.id), ...user }));
  });
  return [...merged.values()];
}

function normalizeUser(user) {
  return {
    ...user,
    role: user.role === "admin" ? "management" : user.role,
    supervisorId: user.supervisorId || user.supervisor_id || "",
    mustChangePassword: Boolean(user.mustChangePassword ?? user.must_change_password)
  };
}

function seedOrders() {
  return [];
}

function saveState() {
  if (isSupabaseMode()) return;
  state.users = users;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

async function handleLogin(event) {
  event.preventDefault();
  const email = loginEmail.value.trim().toLowerCase();
  const password = loginPassword.value.trim();
  if (isSupabaseMode()) {
    loginError.textContent = "";
    try {
      const user = await supabaseAppLogin(email, password);
      currentUser = user;
      await loadSupabaseData();
      currentUser = users.find((item) => item.id === user.id) || user;
      if (currentUser.mustChangePassword) {
        pendingPasswordUser = currentUser;
        pendingPasswordCurrent = password;
        showPasswordDialog();
        return;
      }
      localStorage.setItem(SUPABASE_SESSION_KEY, JSON.stringify({ userId: user.id }));
      openApp();
    } catch (error) {
      loginError.textContent = `No se pudo iniciar sesion: ${friendlyDatabaseError(error)}`;
    }
    return;
  }

  const user = users.find((item) => item.email === email && item.password === password);

  if (!user) {
    loginError.textContent = "Correo o contraseña incorrectos.";
    return;
  }

  currentUser = user;
  if (user.mustChangePassword) {
    pendingPasswordUser = user;
    pendingPasswordCurrent = password;
    showPasswordDialog();
    return;
  }
  localStorage.setItem(SESSION_KEY, user.id);
  loginError.textContent = "";
  openApp();
}

function showPasswordDialog() {
  authScreen.classList.add("hidden");
  appShell.classList.add("hidden");
  passwordError.textContent = "";
  newPasswordInput.value = "";
  confirmPasswordInput.value = "";
  passwordDialog.showModal();
  window.setTimeout(() => newPasswordInput.focus(), 80);
}

async function handlePasswordChange(event) {
  event.preventDefault();
  const newPassword = newPasswordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (newPassword.length < 8) {
    passwordError.textContent = "La nueva contraseña debe tener al menos 8 caracteres.";
    return;
  }

  if (newPassword !== confirmPassword) {
    passwordError.textContent = "Las contraseñas no coinciden.";
    return;
  }

  if (newPassword === pendingPasswordCurrent) {
    passwordError.textContent = "La nueva contraseña debe ser diferente a la temporal.";
    return;
  }

  try {
    if (isSupabaseMode()) {
      await supabaseFetch("/rest/v1/rpc/change_app_password", {
        method: "POST",
        body: JSON.stringify({
          p_user_id: pendingPasswordUser.id,
          p_current_password: pendingPasswordCurrent,
          p_new_password: newPassword
        })
      });
      await loadSupabaseData();
      currentUser = users.find((item) => item.id === pendingPasswordUser.id) || {
        ...pendingPasswordUser,
        mustChangePassword: false
      };
      localStorage.setItem(SUPABASE_SESSION_KEY, JSON.stringify({ userId: currentUser.id }));
    } else {
      currentUser.password = newPassword;
      currentUser.mustChangePassword = false;
      users = users.map((user) => user.id === currentUser.id ? currentUser : user);
      state.users = users;
      saveState();
      localStorage.setItem(SESSION_KEY, currentUser.id);
    }

    pendingPasswordUser = null;
    pendingPasswordCurrent = "";
    passwordDialog.close();
    loginPassword.value = "";
    showToast("Contraseña actualizada.");
    openApp();
  } catch (error) {
    passwordError.textContent = `No se pudo cambiar la contraseña: ${friendlyDatabaseError(error)}`;
  }
}

function openApp() {
  authScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  renderShell();
  showView(currentView);
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(SUPABASE_SESSION_KEY);
  closeSidebar();
  currentUser = null;
  pendingPasswordUser = null;
  pendingPasswordCurrent = "";
  currentView = "dashboard";
  users = isSupabaseMode() ? [] : users;
  state = isSupabaseMode() ? { users: [], orders: [] } : state;
  if (passwordDialog?.open) passwordDialog.close();
  appShell.classList.add("hidden");
  authScreen.classList.remove("hidden");
  loginPassword.value = "";
}

function svgIcon(name) {
  const icons = {
    grid: '<rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect>',
    bag: '<path d="M6 8h12l-1 12H7L6 8Z"></path><path d="M9 8a3 3 0 0 1 6 0"></path>',
    clipboard: '<rect x="6" y="5" width="12" height="16" rx="2"></rect><path d="M9 5a3 3 0 0 1 6 0"></path><path d="M9 12h6"></path><path d="M9 16h5"></path>',
    chart: '<path d="M5 19V9"></path><path d="M12 19V5"></path><path d="M19 19v-7"></path><path d="M4 19h16"></path>',
    tag: '<path d="M4 5v6l8.5 8.5a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8L11 4H5a1 1 0 0 0-1 1Z"></path><path d="M8 8h.01"></path>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="9.5" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    plus: '<path d="M12 5v14"></path><path d="M5 12h14"></path>',
    crown: '<path d="m4 9 4 3 4-7 4 7 4-3-2 10H6L4 9Z"></path>',
    receipt: '<path d="M7 3h10v18l-2-1-2 1-2-1-2 1-2-1V3Z"></path><path d="M9 8h6"></path><path d="M9 12h6"></path>',
    target: '<circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3"></path><path d="M22 12h-3"></path>',
    box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"></path><path d="M4 7.5 12 12l8-4.5"></path><path d="M12 21v-9"></path>',
    search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>',
    download: '<path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path>',
    flame: '<path d="M12 22c4 0 7-3 7-7 0-4-4-6-5-10-3 2-7 6-7 10 0 4 3 7 5 7Z"></path>',
    sparkle: '<path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"></path>',
    list: '<path d="M8 6h12"></path><path d="M8 12h12"></path><path d="M8 18h12"></path><path d="M4 6h.01"></path><path d="M4 12h.01"></path><path d="M4 18h.01"></path>',
    chevron: '<path d="m6 9 6 6 6-6"></path>',
    x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
  };
  return `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.grid}</svg>`;
}

function renderShell() {
  userCard.innerHTML = `
    <div class="user-avatar">${initials(currentUser.name)}</div>
    <div>
      <strong>${escapeHtml(currentUser.name)}</strong>
      <span>${roleLabel(currentUser.role)} · ${escapeHtml(currentUser.zone || "Sin zona")}</span>
    </div>
    <span class="user-card-caret">${svgIcon("chevron")}</span>
  `;
  configureTopbarAction();

  navMenu.innerHTML = navItems
    .filter((item) => item.roles.includes(currentUser.role))
    .map((item) => `<button type="button" data-view="${item.id}">${svgIcon(item.icon)}<span>${item.label}</span></button>`)
    .join("");

  navMenu.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });
}

function configureTopbarAction() {
  const button = document.querySelector("#quick-order-btn");
  if (!button || !currentUser) return;

  button.onclick = null;

  if (currentView === "users" && canManageTeam()) {
    button.hidden = false;
    button.dataset.action = "new-access";
    button.innerHTML = `${svgIcon("plus")}<span>Nuevo acceso</span>`;

    button.onclick = () => {
      document.querySelector("#new-user-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    return;
  }

  button.hidden = !canRegisterOrders();
  button.dataset.action = "new-order";
  button.innerHTML = `${svgIcon("plus")}<span>Nuevo pedido</span>`;

  button.onclick = () => {
    showView("order");
  };
}

function showView(viewId) {
  const allowed = navItems.find((item) => item.id === viewId && item.roles.includes(currentUser.role));
  currentView = allowed ? viewId : "dashboard";

  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
  document.querySelector(`#${currentView}-view`).classList.add("active-view");

  navMenu.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === currentView);
  });

  const nav = navItems.find((item) => item.id === currentView);
  pageTitle.textContent = nav.title;
  currentSection.textContent = nav.label;
  closeSidebar();
  configureTopbarAction();

  renderCurrentView();
  window.scrollTo({ top: 0, left: 0 });
}

function renderCurrentView() {
  if (currentView === "dashboard") renderDashboard();
  if (currentView === "order") renderOrderForm();
  if (currentView === "orders") renderOrders();
  if (currentView === "reports") renderReports();
  if (currentView === "catalog") renderCatalog();
  if (currentView === "users") renderUsers();
}

function visibleOrders() {
  if (currentUser.role === "management") return [...state.orders];

  if (currentUser.role === "supervisor") {
    const teamIds = new Set(teamConsultants(currentUser.id).map((user) => user.id));
    return state.orders.filter((order) => {
      return order.consultantId === currentUser.id || teamIds.has(order.consultantId);
    });
  }

  return state.orders.filter((order) => order.consultantId === currentUser.id);
}

function roleLabel(role) {
  return {
    management: "Gerencia",
    supervisor: "Supervisora",
    consultant: "Consultora"
  }[role] || "Usuario";
}

function canManageAll() {
  return currentUser?.role === "management";
}

function canManageTeam() {
  return currentUser?.role === "management" || currentUser?.role === "supervisor";
}

function canRegisterOrders() {
  return currentUser?.role === "management" || currentUser?.role === "consultant";
}

function canUpdateOrders() {
  return currentUser?.role === "management";
}

function visibleConsultants() {
  if (currentUser?.role === "management") return consultants();
  if (currentUser?.role === "supervisor") return teamConsultants(currentUser.id);
  if (currentUser?.role === "consultant") return consultants().filter((user) => user.id === currentUser.id);
  return [];
}

function dashboardTitle() {
  if (currentUser.role === "management") return "Vista general";
  if (currentUser.role === "supervisor") return "Avance de mi equipo";
  return "Mi resumen";
}

function dashboardCopy() {
  if (currentUser.role === "management") return "Pedidos consolidados de toda la organizacion.";
  if (currentUser.role === "supervisor") return "Ventas y pagos de las consultoras asignadas a tu equipo.";
  return "Pedidos registrados con tu usuario.";
}

function filterStrip(items, extraClass = "") {
  return `
    <div class="filters-strip ${extraClass}">
      ${items.map((item) => `
        <div class="filter-control">
          ${item.icon ? svgIcon(item.icon) : ""}
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function paymentSummaryPanel(orders) {
  const review = orders.filter((order) => order.paymentStatus !== "confirmed").length;
  const confirmed = orders.filter((order) => order.paymentStatus === "confirmed").length;
  const total = Math.max(1, review + confirmed);
  const reviewPercent = Math.round((review / total) * 100);
  return `
    <article class="panel payment-summary-card">
      <div class="section-title-row">
        <div>
          <p class="section-kicker">Pagos</p>
          <h3>Resumen de pagos</h3>
          <p class="panel-copy">Estado de pagos por revisar vs. revisados.</p>
        </div>
      </div>
      <div class="payment-summary-layout">
        <div class="donut" style="--value:${reviewPercent}">
          <strong>${review + confirmed}</strong>
          <span>Total</span>
        </div>
        <div class="payment-mini-grid">
          <div><span>Por revisar</span><strong>${review}</strong><small>${reviewPercent}% del total</small></div>
          <div><span>Revisados</span><strong>${confirmed}</strong><small>${100 - reviewPercent}% del total</small></div>
        </div>
      </div>
    </article>
  `;
}

function monthlyGoalPanel(total) {
  const goal = 2000;
  const percent = Math.min(100, Math.round((total / goal) * 100));
  return `
    <article class="panel goal-card">
      <div class="section-title-row">
        <div>
          <p class="section-kicker">Meta</p>
          <h3>Meta mensual</h3>
          <p class="panel-copy">Seguimiento de la meta de ventas del mes.</p>
        </div>
        <button class="ghost-btn mini-action" type="button" data-action="reports">Ver detalle</button>
      </div>
      <div class="goal-line">
        <div><span>Meta: ${formatMoney.format(goal)}</span><strong>${percent}%</strong></div>
        <div class="bar-track"><div class="bar-fill" style="width:${Math.max(4, percent)}%"></div></div>
        <span>Avance: ${formatMoney.format(total)}</span>
      </div>
    </article>
  `;
}

function renderDashboard() {
  const orders = visibleOrders();
  const total = sum(orders, "total");
  const pending = orders.filter((order) => order.paymentStatus !== "confirmed").length;
  const receipts = orders.filter((order) => order.receipt).length;
  const latest = [...orders].sort(byDateDesc).slice(0, 5);
  const report = canManageTeam() ? consultantReport(orders, visibleConsultants()) : productReport(orders);
  const heading = canManageTeam() ? "Rendimiento por consultora" : "Productos vendidos";

  document.querySelector("#dashboard-view").innerHTML = `
    <div class="view-head page-hero">
      <div>
        <p class="section-kicker">Dashboard</p>
        <h3>Resumen comercial</h3>
        <p>${dashboardCopy()}</p>
      </div>
      ${canRegisterOrders() ? `<button class="primary-btn" type="button" data-action="new-order">${svgIcon("plus")}<span>Nuevo pedido</span></button>` : ""}
    </div>
    ${filterStrip([
      { icon: "clipboard", label: "Periodo", value: currentMonthPeriod().label },
      { icon: "list", label: "Estado", value: "Todos los estados" },
      { icon: "users", label: "Consultora", value: canManageTeam() ? "Todas las consultoras" : currentUser.name }
    ], "dashboard-filters")}
    ${metricGrid([
      { label: "Ventas totales", value: formatMoney.format(total), note: `${orders.length} pedidos`, icon: "bag", tone: "pink" },
      { label: "Ticket promedio", value: formatMoney.format(orders.length ? total / orders.length : 0), note: "Promedio operativo", icon: "tag", tone: "pink" },
      { label: "Pagos por revisar", value: pending, note: "Pendientes o en revision", icon: "receipt", tone: "orange" },
      { label: canManageTeam() ? "Consultoras activas" : "Comprobantes", value: canManageTeam() ? visibleConsultants().length : receipts, note: canManageTeam() ? "Usuarios de venta" : "Archivos adjuntos", icon: "users", tone: "violet" }
    ])}
    <div class="panel-grid">
      <article class="panel">
        <div class="section-title-row">
          <div>
            <p class="section-kicker">Pedidos</p>
            <h3>Ultimos pedidos</h3>
            <p>Registro trazable por folio, cliente y estado.</p>
          </div>
          <button class="ghost-btn mini-action" type="button" data-action="orders">Ver todos</button>
        </div>
        ${orderList(latest)}
      </article>
      <article class="panel">
        <div class="section-title-row">
          <div>
            <p class="section-kicker">Rendimiento</p>
            <h3>${heading}</h3>
            <p class="panel-copy">${canManageTeam() ? "Comparativo de ventas acumuladas." : "Detalle de venta por producto."}</p>
          </div>
        </div>
        ${barChart(report)}
      </article>
    </div>
    <div class="panel-grid dashboard-bottom-grid">
      ${paymentSummaryPanel(orders)}
      ${monthlyGoalPanel(total)}
    </div>
  `;

  document.querySelector("[data-action='new-order']")?.addEventListener("click", () => showView("order"));
  document.querySelector("[data-action='orders']")?.addEventListener("click", () => showView("orders"));
  document.querySelector("[data-action='reports']")?.addEventListener("click", () => showView("reports"));
  bindOrderOpeners("#dashboard-view");
}

function metricGrid(items, extraClass = "") {
  return `
    <div class="metrics-grid ${extraClass}">
      ${items
        .map((item) => {
          const metric = Array.isArray(item)
            ? { label: item[0], value: item[1], note: item[2], icon: item[3] || "bag", tone: item[4] || "pink" }
            : item;
          return `
          <article class="metric-card metric-${metric.tone || "pink"}">
            <div class="metric-icon">${svgIcon(metric.icon || "bag")}</div>
            <div class="metric-copy">
              <span>${metric.label}</span>
              <strong>${metric.value}</strong>
              <small>${metric.note}</small>
            </div>
            <div class="metric-sparkline" aria-hidden="true"></div>
          </article>
        `;
        })
        .join("")}
    </div>
  `;
}

function renderOrderForm() {
  currentReceipt = null;
  const consultantOptions = orderResponsibleOptions();
  const orderEmail = orderEmailSettings();
  const canNotifyCompany = canSendOrderEmail();
  const companyEmail = orderEmail.companyEmail || "correo de la empresa";

  document.querySelector("#order-view").innerHTML = `
    <div class="view-head page-hero">
      <div>
        <p class="section-kicker">Pedido</p>
        <h3>Nuevo pedido</h3>
        <p>Cliente, productos, pago y comprobante quedan vinculados al folio.</p>
      </div>
    </div>
    <form id="order-form" class="order-form">
      <section class="form-section">
        <h4>Cliente</h4>
        <div class="form-row">
          <label>Nombre completo<input id="customer-name" required placeholder="Nombre de cliente"></label>
          <label>DNI/RUC<input id="customer-document" placeholder="Documento del cliente"></label>
          <label>Telefono<input id="customer-phone" required placeholder="999 999 999"></label>
          <label>Distrito<input id="customer-district" required placeholder="Distrito o ciudad"></label>
          <label>Pedido registrado por
  <select id="consultant-id" ${currentUser.role === "consultant" ? "disabled" : ""}>${consultantOptions}</select>
</label>
          <label>Tipo de entrega
            <select id="delivery-type">
              <option>Delivery</option>
              <option>Recojo</option>
              <option>Envio provincia</option>
            </select>
          </label>
          <label>Direccion<input id="customer-address" placeholder="Direccion de entrega"></label>
        </div>
      </section>

<section class="form-section">
  <div class="view-head product-section-head">
    <div>
      <h4>Productos</h4>
      <p>Primero busca el producto, selecciónalo en la barra y luego añádelo al pedido.</p>
    </div>
  </div>

  <div class="product-picker-tools product-picker-tools-add">
    <label>Buscar producto o SKU
      <input id="product-search" type="search" list="order-product-suggestions" autocomplete="off" placeholder="Escribe nombre o SKU, ej. SERUM, JEG-101">
      <datalist id="order-product-suggestions"></datalist>
    </label>

    <button id="add-line" class="secondary-btn add-selected-product" type="button">
      ${svgIcon("plus")}<span>Añadir producto</span>
    </button>

    <div class="product-picker-note">
      <strong id="order-product-count">${products.length}</strong>
      <span>coincidencias</span>
    </div>
  </div>

  <p class="product-helper">Busca un producto, elígelo desde la barra y presiona <strong>Añadir producto</strong>.</p>

  <div id="line-items" class="line-items empty-products">
    <p class="empty-lines-message">Aún no agregaste productos al pedido.</p>
  </div>
</section>

      <section class="form-section">
        <h4>Pago</h4>
        <div class="form-row">
          <label>Metodo
            <select id="payment-method">
              <option>Yape</option>
              <option>Plin</option>
              <option>Transferencia</option>
              <option>Efectivo</option>
            </select>
          </label>
        <label>Descuento automático empresa
          <input id="discount" type="text" value="20% aplicado" readonly>
        </label>
        </div>
        <label class="file-drop">
          <input id="receipt-file" type="file" accept="image/*" capture="environment">
          <strong>Subir captura o comprobante</strong>
          <span>Foto desde celular o imagen guardada</span>
        </label>
        <div id="receipt-preview" class="receipt-preview"></div>
      </section>

      <section class="form-section">
        <h4>Notas</h4>
        <textarea id="order-notes" rows="3" placeholder="Indicaciones de entrega, preferencias o comentarios"></textarea>
      </section>

      <section class="form-section notify-section">
        <h4>Notificacion por correo</h4>
        <label class="check-option">
          <input id="notify-company-email" type="checkbox" ${canNotifyCompany ? "checked" : "disabled"}>
          <span>
            <strong>Enviar este pedido al correo de la empresa</strong>
            <small>${canNotifyCompany ? `Se enviara automaticamente a ${escapeHtml(companyEmail)} despues de guardar.` : "Activa la Edge Function send-order-email y configura Resend para usar esta opcion."}</small>
          </span>
        </label>
      </section>

      <div class="order-summary" aria-live="polite">
      <div><span>Subtotal catálogo</span><strong id="summary-subtotal">S/ 0.00</strong></div>
      <div><span>Descuento automático 20%</span><strong id="summary-discount">S/ 0.00</strong></div>
      <div class="grand-total"><span>Total a cobrar / recibe empresa</span><strong id="summary-total">S/ 0.00</strong></div>
      </div>

      <div class="form-actions">
        <button class="ghost-btn" type="reset">Limpiar</button>
        <button class="primary-btn" type="submit">Guardar pedido</button>
      </div>
    </form>
  `;

  const form = document.querySelector("#order-form");
  const lineItems = document.querySelector("#line-items");
  const addLine = document.querySelector("#add-line");
  const productSearch = document.querySelector("#product-search");
  const receiptFile = document.querySelector("#receipt-file");
  const receiptPreview = document.querySelector("#receipt-preview");

renderProductSuggestions("");

addLine.addEventListener("click", () => {
  const product = productFromSearchValue(productSearch.value);

  if (!product) {
    showToast("Busca y selecciona un producto antes de añadirlo.");
    productSearch.focus();
    return;
  }

  addLineItem(lineItems, { sku: product.sku, quantity: 1 });
  productSearch.value = "";
  renderProductSuggestions("");
  productSearch.focus();
});

productSearch.addEventListener("input", () => {
  renderProductSuggestions(productSearch.value);
});

productSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addLine.click();
  }
});
  form.addEventListener("input", updateOrderSummary);
  form.addEventListener("change", updateOrderSummary);
  form.addEventListener("reset", () => {
    window.setTimeout(() => {
      currentReceipt = null;
      receiptPreview.classList.remove("active");
      receiptPreview.innerHTML = "";
lineItems.innerHTML = `<p class="empty-lines-message">Aún no agregaste productos al pedido.</p>`;
lineItems.classList.add("empty-products");
productSearch.value = "";
renderProductSuggestions("");
updateOrderSummary();
    }, 0);
  });

  receiptFile.addEventListener("change", async () => {
    const file = receiptFile.files[0];
    if (!file) return;

    try {
      currentReceipt = await readReceipt(file);
      receiptPreview.classList.add("active");
      receiptPreview.innerHTML = `<img src="${currentReceipt.dataUrl}" alt="Comprobante cargado">`;
      showToast("Comprobante adjuntado.");
    } catch (error) {
      currentReceipt = null;
      receiptPreview.classList.remove("active");
      receiptPreview.innerHTML = "";
      showToast(error.message || "No se pudo cargar el comprobante.");
    }
  });

  form.addEventListener("submit", handleOrderSubmit);
if (pendingCatalogSku) {
  addLineItem(lineItems, { sku: pendingCatalogSku, quantity: 1 });
  pendingCatalogSku = "";
} else {
  lineItems.innerHTML = `<p class="empty-lines-message">Aún no agregaste productos al pedido.</p>`;
  lineItems.classList.add("empty-products");
}
updateOrderSummary();
}

function addLineItem(container, line = {}) {
  const product = productBySku(line.sku);

  if (!product) {
    showToast("Selecciona un producto válido.");
    return;
  }

  const emptyMessage = container.querySelector(".empty-lines-message");
  if (emptyMessage) emptyMessage.remove();
  container.classList.remove("empty-products");

  const row = document.createElement("div");
  row.className = "line-item";

  row.innerHTML = `
    <div class="line-product-block">
      <input class="line-product-sku" type="hidden" value="${escapeHtml(product.sku)}">
      <div class="selected-product-card">
        <strong>${escapeHtml(product.sku)} · ${escapeHtml(product.name)}</strong>
        <span>${escapeHtml(product.category || "Sin categoría")} · ${formatMoney.format(Number(product.price || 0))} · Stock ${product.stock ?? 0}</span>
      </div>
      <div class="line-product-meta"></div>
    </div>

    <label class="line-quantity-field">Cantidad
      <input class="line-quantity" type="number" min="1" step="1" value="${line.quantity || 1}">
    </label>

    <label class="line-price-field">P. unitario
      <input class="line-price" value="S/ 0.00" readonly>
    </label>

    <label class="line-subtotal-field">Importe
      <input class="line-subtotal" value="S/ 0.00" readonly>
    </label>

    <button class="remove-line" type="button" aria-label="Quitar producto">${svgIcon("x")}</button>
  `;

  row.querySelector(".line-quantity").addEventListener("input", () => {
    syncLineProduct(row);
    updateOrderSummary();
  });

  row.querySelector(".remove-line").addEventListener("click", () => {
    row.remove();

    if (!container.querySelector(".line-item")) {
      container.innerHTML = `<p class="empty-lines-message">Aún no agregaste productos al pedido.</p>`;
      container.classList.add("empty-products");
    }

    updateOrderSummary();
  });

  container.appendChild(row);
  syncLineProduct(row);
  updateOrderSummary();
}
function orderProductLabel(product) {
  return `${product.sku} · ${product.name} · ${formatMoney.format(Number(product.price || 0))} · Stock ${product.stock ?? 0}`;
}

function renderProductSuggestions(search = "") {
  const datalist = document.querySelector("#order-product-suggestions");
  const countNode = document.querySelector("#order-product-count");
  const filtered = filteredOrderProducts(search);

  if (countNode) countNode.textContent = filtered.length;

  if (!datalist) return;

  datalist.innerHTML = filtered
    .slice(0, 40)
    .map((product) => `<option value="${escapeHtml(orderProductLabel(product))}"></option>`)
    .join("");
}

function productFromSearchValue(value) {
  const query = normalizeProductSearch(value);

  if (!query) return null;

  const exactMatch = products.find((product) => {
    return normalizeProductSearch(orderProductLabel(product)) === query ||
      normalizeProductSearch(product.sku) === query;
  });

  if (exactMatch) return exactMatch;

  return filteredOrderProducts(value)[0] || null;
}
function productOptions(selected, search = "") {
  const filtered = filteredOrderProducts(search, selected);
  if (!filtered.length) {
    return `<option value="">Sin productos encontrados</option>`;
  }
  return filtered
    .map((product) => {
      const label = `${product.sku} · ${product.name} · ${formatMoney.format(product.price)} · Stock ${product.stock ?? 0}`;
      return `<option value="${product.sku}" ${product.sku === selected ? "selected" : ""}>${escapeHtml(label)}</option>`;
    })
    .join("");
}

function filteredOrderProducts(search = "", selected = "") {
  const query = normalizeProductSearch(search);

  if (!query) return products;

  return products.filter((product) => {
    const haystack = normalizeProductSearch(orderProductLabel(product));
    return haystack.includes(query) || product.sku === selected;
  });
}

function normalizeProductSearch(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function productBySku(sku) {
  return products.find((item) => item.sku === sku) || null;
}

function refreshLineProductOptions(search = "") {
  const count = filteredOrderProducts(search).length;
  const countNode = document.querySelector("#order-product-count");
  if (countNode) countNode.textContent = count;
  document.querySelectorAll(".line-product").forEach((select) => {
    const selected = select.value;
    select.innerHTML = productOptions(selected, search);
    if ([...select.options].some((option) => option.value === selected)) {
      select.value = selected;
    }
    syncLineProduct(select.closest(".line-item"));
  });
  updateOrderSummary();
}

function syncLineProduct(row) {
  if (!row) return;

  const sku = row.querySelector(".line-product-sku")?.value || "";
  const product = productBySku(sku);
  const price = Number(product?.price || 0);
  const quantity = Math.max(1, Number(row.querySelector(".line-quantity")?.value || 1));
  const priceInput = row.querySelector(".line-price");
  const subtotalInput = row.querySelector(".line-subtotal");
  const meta = row.querySelector(".line-product-meta");

  if (priceInput) priceInput.value = formatMoney.format(price);
  if (subtotalInput) subtotalInput.value = formatMoney.format(price * quantity);

  if (meta) {
    meta.innerHTML = product
      ? `<span>SKU ${escapeHtml(product.sku)}</span><span>${escapeHtml(product.category || "Sin categoría")}</span><span>Stock ${product.stock ?? 0}</span>`
      : `<span>Producto no disponible.</span>`;

    meta.classList.toggle("missing-price", Boolean(product && price <= 0));
  }
}

function collectLines() {
  return [...document.querySelectorAll(".line-item")]
    .map((row) => {
      const sku = row.querySelector(".line-product-sku")?.value || "";
      const quantity = Math.max(1, Number(row.querySelector(".line-quantity").value || 1));
      const product = productBySku(sku);
      if (!product) return null;
      const price = Math.max(0, Number(product.price || 0));
      return {
        sku,
        name: product.name,
        price,
        quantity
      };
    })
    .filter((line) => line && line.quantity > 0);
}

function updateOrderSummary() {
  const lineRows = [...document.querySelectorAll(".line-item")];
  lineRows.forEach((row) => {
    syncLineProduct(row);
  });

  const totals = totalsFor(collectLines(), Number(document.querySelector("#discount")?.value || 0));
  const subtotal = document.querySelector("#summary-subtotal");
  const discount = document.querySelector("#summary-discount");
  const total = document.querySelector("#summary-total");
  if (!subtotal) return;
  subtotal.textContent = formatMoney.format(totals.subtotal);
  discount.textContent = formatMoney.format(totals.discount);
  total.textContent = formatMoney.format(totals.total);
}

function totalsFor(items) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = Number((subtotal * 0.20).toFixed(2));
  const total = Number((subtotal - discount).toFixed(2));

  return {
    subtotal,
    discount,
    total
  };
}

async function readReceipt(file) {
  if (!file.type.startsWith("image/")) {
    throw new Error("El comprobante debe ser una imagen.");
  }

  const dataUrl = await fileToDataUrl(file);
  const compressed = await compressImage(dataUrl);
  return {
    name: file.name,
    type: "image/jpeg",
    dataUrl: compressed
  };
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("No se pudo leer el archivo."));
    reader.readAsDataURL(file);
  });
}

function compressImage(dataUrl) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const maxSize = 1100;
      const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.78));
    };
    image.onerror = () => resolve(dataUrl);
    image.src = dataUrl;
  });
}

async function handleOrderSubmit(event) {
  event.preventDefault();
  const items = collectLines();
  if (!items.length) {
    showToast("Agrega al menos un producto.");
    return;
  }
  if (items.some((item) => item.price <= 0)) {
    showToast("Hay productos sin precio configurado en la base de datos.");
    return;
  }

  const consultantId = document.querySelector("#consultant-id")?.value || currentUser.id;
  const discount = Number(document.querySelector("#discount").value || 0);
  const order = {
    id: nextOrderId(),
    createdAt: new Date().toISOString(),
    consultantId,
    customerName: document.querySelector("#customer-name").value.trim(),
    customerDocument: document.querySelector("#customer-document").value.trim(),
    customerPhone: document.querySelector("#customer-phone").value.trim(),
    district: document.querySelector("#customer-district").value.trim(),
    deliveryType: document.querySelector("#delivery-type").value,
    address: document.querySelector("#customer-address").value.trim(),
    notes: document.querySelector("#order-notes").value.trim(),
    status: "received",
    paymentStatus: currentReceipt ? "review" : "pending",
    paymentMethod: document.querySelector("#payment-method").value,
    receipt: currentReceipt,
    notifyCompany: Boolean(document.querySelector("#notify-company-email")?.checked),
    items,
    ...totalsFor(items, discount)
  };

  if (isSupabaseMode()) {
    try {
      await createSupabaseOrder(order);
      const emailResult = await notifyCompanyOrder(order.id, order.notifyCompany);
      await loadSupabaseData();
      const emailCopy = emailResult.status === "sent" ? " Correo enviado." : emailResult.status === "failed" ? " Correo no enviado; revisa configuracion." : "";
      showToast(`Pedido ${order.id} guardado y stock actualizado.${emailCopy}`);
      showView("orders");
      window.setTimeout(() => openOrderDialog(order.id), 120);
    } catch (error) {
      showToast(`No se pudo guardar: ${friendlyDatabaseError(error)}`);
    }
    return;
  }

  state.orders.unshift(order);
  saveState();
  showToast(`Pedido ${order.id} guardado.`);
  showView("orders");
  window.setTimeout(() => openOrderDialog(order.id), 120);
}

async function createSupabaseOrder(order) {
  const receiptPath = order.receipt ? await uploadSupabaseReceipt(order) : null;
  await supabaseFetch("/rest/v1/rpc/create_order_with_inventory", {
    method: "POST",
    body: JSON.stringify({
      p_actor_id: currentUser.id,
      p_order: {
        id: order.id,
        ticket_number: ticketNumberFor(order.id),
        created_at: order.createdAt,
        consultant_id: order.consultantId,
        customer_name: order.customerName,
        customer_document: order.customerDocument,
        customer_phone: order.customerPhone,
        district: order.district,
        delivery_type: order.deliveryType,
        address: order.address,
        payment_method: order.paymentMethod,
        payment_status: order.paymentStatus,
        status: order.status,
        notes: order.notes,
        subtotal: order.subtotal,
        discount: order.discount,
        total: order.total,
        receipt_path: receiptPath,
        receipt_name: order.receipt?.name || null,
        receipt_type: order.receipt?.type || null
      },
      p_items: order.items.map((item) => ({
        sku: item.sku,
        product_name: item.name,
        quantity: item.quantity,
        unit: "UNIDAD",
        unit_price: item.price,
        line_total: item.price * item.quantity
      }))
    })
  });
}

async function notifyCompanyOrder(orderId, shouldNotify) {
  if (!shouldNotify || !canSendOrderEmail()) {
    return { status: "skipped" };
  }

  const settings = orderEmailSettings();
  try {
    const response = await fetch(`${appConfig.supabase.url}/functions/v1/${settings.functionName}`, {
      method: "POST",
      headers: {
        ...supabaseHeaders(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order_id: orderId,
        actor_id: currentUser.id
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(detail || `Error HTTP ${response.status}`);
    }

    return { status: "sent" };
  } catch (error) {
    return { status: "failed", message: error?.message || "No se pudo enviar el correo." };
  }
}

async function uploadSupabaseReceipt(order) {
  const bucket = appConfig.supabase.receiptBucket;
  const blob = dataUrlToBlob(order.receipt.dataUrl);
  const extension = blob.type === "image/png" ? "png" : "jpg";
  const path = `${order.id}/${Date.now()}-${safeFileName(order.receipt.name || `comprobante.${extension}`)}`;
  const response = await fetch(`${appConfig.supabase.url}/storage/v1/object/${bucket}/${path}`, {
    method: "POST",
    headers: {
      ...supabaseHeaders({ json: false }),
      "Content-Type": blob.type || "image/jpeg",
      "x-upsert": "true"
    },
    body: blob
  });
  if (!response.ok) {
    let message = response.statusText;
    try {
      const payload = await response.json();
      message = payload.message || payload.error || message;
    } catch (error) {
      message = await response.text() || message;
    }
    throw new Error(`Comprobante: ${message}`);
  }
  return path;
}

function dataUrlToBlob(dataUrl) {
  const [meta, base64] = dataUrl.split(",");
  const type = meta.match(/data:(.*?);/)?.[1] || "image/jpeg";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type });
}

function safeFileName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-|-$/g, "");
}

function nextOrderId() {
  if (isSupabaseMode()) {
    const now = new Date();
    const stamp = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
      String(now.getHours()).padStart(2, "0"),
      String(now.getMinutes()).padStart(2, "0"),
      String(now.getSeconds()).padStart(2, "0")
    ].join("");
    return `GC-${stamp}`;
  }
  const max = state.orders.reduce((acc, order) => {
    const number = Number(String(order.id).replace(/^[A-Z]+-/, ""));
    return Number.isFinite(number) ? Math.max(acc, number) : acc;
  }, 0);
  return `GC-${String(max + 1).padStart(4, "0")}`;
}

function renderOrders() {
  const consultantFilter = canManageTeam()
    ? `<select id="filter-consultant"><option value="all">Todas las consultoras</option>${visibleConsultants().map((user) => `<option value="${user.id}">${escapeHtml(user.name)}</option>`).join("")}</select>`
    : "";

  document.querySelector("#orders-view").innerHTML = `
    <div class="view-head page-hero">
      <div>
        <p class="section-kicker">Pedidos</p>
        <h3>Pedidos registrados</h3>
        <p>${canManageAll() ? "Vista completa con filtros y validacion de pagos." : currentUser.role === "supervisor" ? "Pedidos de las consultoras asignadas a tu equipo." : "Solo se muestran los pedidos registrados por tu usuario."}</p>
      </div>
    </div>
    <div class="section-toolbar">
      <input id="filter-search" placeholder="Buscar por folio, cliente o telefono">
      ${consultantFilter}
      <select id="filter-status">
        <option value="all">Todos los estados</option>
        <option value="received">Recibido</option>
        <option value="preparing">En preparacion</option>
        <option value="shipped">Enviado</option>
        <option value="delivered">Entregado</option>
        <option value="cancelled">Cancelado</option>
      </select>
      <button id="export-orders" class="ghost-btn" type="button">${svgIcon("download")}<span>Exportar CSV</span></button>
    </div>
    <div id="orders-table"></div>
  `;

  const refresh = () => renderOrdersTable();
  document.querySelector("#filter-search").addEventListener("input", refresh);
  document.querySelector("#filter-status").addEventListener("change", refresh);
  document.querySelector("#filter-consultant")?.addEventListener("change", refresh);
  document.querySelector("#export-orders").addEventListener("click", () => exportCsv(filteredOrders(), "glow-club-pedidos.csv"));
  document.querySelector("[data-action='new-order']")?.addEventListener("click", () => showView("order"));
  renderOrdersTable();
}

function filteredOrders() {
  const search = (document.querySelector("#filter-search")?.value || "").trim().toLowerCase();
  const status = document.querySelector("#filter-status")?.value || "all";
  const consultant = document.querySelector("#filter-consultant")?.value || "all";

  return visibleOrders()
    .filter((order) => status === "all" || order.status === status)
    .filter((order) => consultant === "all" || order.consultantId === consultant)
    .filter((order) => {
      if (!search) return true;
      return [order.id, order.customerName, order.customerPhone, consultantName(order.consultantId)]
        .join(" ")
        .toLowerCase()
        .includes(search);
    })
    .sort(byDateDesc);
}
function orderResponsibleOptions() {
  let options = [];

  if (currentUser.role === "management") {
    options = [
      currentUser,
      ...supervisors(),
      ...consultants()
    ];
  } else if (currentUser.role === "supervisor") {
    options = [
      currentUser,
      ...teamConsultants(currentUser.id)
    ];
  } else {
    options = [currentUser];
  }

  const uniqueOptions = [];
  const seen = new Set();

  options.forEach((user) => {
    if (!user || seen.has(user.id)) return;
    seen.add(user.id);
    uniqueOptions.push(user);
  });

  return uniqueOptions
    .map((user) => {
      const roleText = roleLabel(user.role);
      const selected = user.id === currentUser.id ? "selected" : "";
      return `<option value="${user.id}" ${selected}>${escapeHtml(user.name)} · ${roleText} · ${escapeHtml(user.zone || "Sin zona")}</option>`;
    })
    .join("");
}

function renderOrdersTable() {
  const orders = filteredOrders();
  const container = document.querySelector("#orders-table");

  if (!orders.length) {
    container.innerHTML = `<div class="empty-state">No hay pedidos con esos filtros.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="table-shell">
      <table>
        <thead>
          <tr>
            <th>Pedido</th>
            <th>Cliente</th>
            <th>Consultora</th>
            <th>Total</th>
            <th>Pago</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map(orderRow).join("")}
        </tbody>
      </table>
    </div>
  `;

  bindOrderOpeners("#orders-table");
  container.querySelectorAll("[data-payment]").forEach((select) => {
    select.addEventListener("change", () => updatePayment(select.dataset.payment, select.value));
  });
  container.querySelectorAll("[data-status]").forEach((select) => {
    select.addEventListener("change", () => updateStatus(select.dataset.status, select.value));
  });
}

function orderRow(order) {
  const paymentControl = canUpdateOrders()
    ? `<select data-payment="${order.id}">${Object.entries(paymentLabels).map(([value, label]) => `<option value="${value}" ${order.paymentStatus === value ? "selected" : ""}>${label}</option>`).join("")}</select>`
    : paymentPill(order.paymentStatus);

  const statusControl = canUpdateOrders()
    ? `<select data-status="${order.id}">${Object.entries(statusLabels).map(([value, label]) => `<option value="${value}" ${order.status === value ? "selected" : ""}>${label}</option>`).join("")}</select>`
    : statusPill(order.status);

  return `
    <tr>
      <td data-label="Pedido"><strong>${order.id}</strong><span>${formatDate.format(new Date(order.createdAt))}</span></td>
      <td data-label="Cliente"><strong>${escapeHtml(order.customerName)}</strong><span>${escapeHtml(order.customerPhone)} · ${escapeHtml(order.district)}</span></td>
      <td data-label="Consultora"><strong>${escapeHtml(consultantName(order.consultantId))}</strong><span>${order.items.length} producto${order.items.length === 1 ? "" : "s"}</span></td>
      <td data-label="Total"><strong>${formatMoney.format(order.total)}</strong><span>${order.receipt ? "Con comprobante" : "Sin comprobante"}</span></td>
      <td data-label="Pago">${paymentControl}</td>
      <td data-label="Estado">${statusControl}</td>
      <td data-label="Acción"><button class="table-action" type="button" data-open-order="${order.id}" aria-label="Ver pedido">Ver</button></td>
    </tr>
  `;
}

async function updatePayment(orderId, paymentStatus) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  if (isSupabaseMode()) {
    try {
      await supabaseFetch("/rest/v1/rpc/update_order_payment_status", {
        method: "POST",
        body: JSON.stringify({
          p_actor_id: currentUser.id,
          p_order_id: orderId,
          p_payment_status: paymentStatus
        })
      });
      await loadSupabaseData();
      showToast(`Pago de ${order.id} actualizado.`);
      renderCurrentView();
    } catch (error) {
      showToast(`No se pudo actualizar: ${error.message}`);
    }
    return;
  }
  order.paymentStatus = paymentStatus;
  saveState();
  showToast(`Pago de ${order.id} actualizado.`);
  renderCurrentView();
}

async function updateStatus(orderId, status) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  if (isSupabaseMode()) {
    try {
      await supabaseFetch("/rest/v1/rpc/update_order_status", {
        method: "POST",
        body: JSON.stringify({
          p_actor_id: currentUser.id,
          p_order_id: orderId,
          p_status: status
        })
      });
      await loadSupabaseData();
      showToast(`Estado de ${order.id} actualizado.`);
      renderCurrentView();
    } catch (error) {
      showToast(`No se pudo actualizar: ${error.message}`);
    }
    return;
  }
  order.status = status;
  saveState();
  showToast(`Estado de ${order.id} actualizado.`);
  renderCurrentView();
}

function orderList(orders) {
  if (!orders.length) return `<div class="empty-state">Aun no hay pedidos.</div>`;
  return `
    <div class="order-list">
      ${orders
        .map((order) => `
          <article class="order-item">
            <div>
              <h4>${order.id} · ${escapeHtml(order.customerName)}</h4>
              <div class="order-meta">
                <span>${escapeHtml(consultantName(order.consultantId))}</span>
                <span>${formatMoney.format(order.total)}</span>
                <span>${formatDate.format(new Date(order.createdAt))}</span>
              </div>
            </div>
            <button class="ghost-btn" type="button" data-open-order="${order.id}">Ver</button>
          </article>
        `)
        .join("")}
    </div>
  `;
}

function bindOrderOpeners(scope) {
  document.querySelector(scope).querySelectorAll("[data-open-order]").forEach((button) => {
    button.addEventListener("click", () => openOrderDialog(button.dataset.openOrder));
  });
}

function openOrderDialog(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  const consultant = users.find((item) => item.id === order.consultantId);

  dialogTitle.textContent = `${order.id} · ${order.customerName}`;
  dialogContent.innerHTML = `
    <div class="detail-grid">
      ${detailBox("Consultora", `${consultant.name} · ${consultant.zone}`)}
      ${detailBox("Cliente", `${order.customerName} · ${order.customerDocument || "Sin documento"} · ${order.customerPhone}`)}
      ${detailBox("Entrega", `${order.deliveryType} · ${order.district}`)}
      ${detailBox("Direccion", order.address || "Sin direccion registrada")}
      ${detailBox("Pago", `${order.paymentMethod} · ${paymentLabels[order.paymentStatus]}`)}
      ${detailBox("Estado", statusLabels[order.status])}
    </div>
    <div class="dialog-actions">
      <button class="secondary-btn" type="button" data-print-ticket="${order.id}">Imprimir ticket</button>
    </div>
    <div class="table-shell" style="margin-top:16px">
      <table>
        <thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Importe</th></tr></thead>
        <tbody>
          ${order.items
            .map((item) => `
              <tr>
                <td data-label="Producto"><strong>${escapeHtml(item.name)}</strong><span>${item.sku}</span></td>
                <td data-label="Cantidad">${item.quantity}</td>
                <td data-label="Precio">${formatMoney.format(item.price)}</td>
                <td data-label="Importe">${formatMoney.format(item.price * item.quantity)}</td>
              </tr>
            `)
            .join("")}
        </tbody>
      </table>
    </div>
    <div class="order-summary" style="margin-top:16px">
      <div><span>Subtotal</span><strong>${formatMoney.format(order.subtotal)}</strong></div>
      <div><span>Descuento</span><strong>${formatMoney.format(order.discount || 0)}</strong></div>
      <div class="grand-total"><span>Total</span><strong>${formatMoney.format(order.total)}</strong></div>
    </div>
    ${order.notes ? `<div class="detail-box" style="margin-top:16px"><span>Notas</span><strong>${escapeHtml(order.notes)}</strong></div>` : ""}
    ${
      order.receipt
        ? `<div class="receipt-full"><img src="${order.receipt.dataUrl}" alt="Comprobante de ${order.id}"></div>`
        : `<div class="empty-state" style="margin-top:16px">Este pedido aun no tiene comprobante adjunto.</div>`
    }
    ${ticketTemplate(order, consultant)}
  `;
  orderDialog.showModal();
  dialogContent.querySelector("[data-print-ticket]")?.addEventListener("click", () => printTicket(order.id));
}

function detailBox(label, value) {
  return `<div class="detail-box"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function ticketTemplate(order, consultant) {
  const company = appConfig.company;
  const ticketNumber = ticketNumberFor(order.id);
  const date = new Date(order.createdAt);
  return `
    <section id="ticket-${order.id}" class="sales-ticket" aria-label="Ticket de venta">
      <div class="ticket-top">
        <div class="ticket-brand">
          <div class="ticket-logo">BV</div>
          <div class="ticket-trade">${escapeHtml(company.tradeName)}</div>
          <h4>${escapeHtml(company.legalName)}</h4>
          <p>${escapeHtml(company.address)}</p>
        </div>
        <div class="ticket-number">
          <strong>RUC ${escapeHtml(company.ruc)}</strong>
          <span>TICKET DE VENTA</span>
          <strong>${ticketNumber}</strong>
        </div>
      </div>

      <div class="ticket-info-grid">
        <div class="ticket-box">
          <p><strong>CLIENTE:</strong> ${escapeHtml(order.customerName)}</p>
          <p><strong>DNI:</strong> ${escapeHtml(order.customerDocument || "-")}</p>
          <p><strong>DIRECCION:</strong> ${escapeHtml(order.address || order.district || "-")}</p>
        </div>
        <div class="ticket-box">
          <p><strong>FECHA EMISION:</strong> ${date.toLocaleDateString("es-PE")}</p>
          <p><strong>FECHA VENCIMIENTO:</strong> ${date.toLocaleDateString("es-PE")}</p>
          <p><strong>MONEDA:</strong> SOLES</p>
          <p><strong>CONDICION DE PAGO:</strong> CONTADO</p>
          <p><strong>ZONA DE VENTAS:</strong> ${escapeHtml(consultant.zone || "-")}</p>
        </div>
      </div>

      <table class="ticket-table">
        <thead>
          <tr>
            <th>N°</th>
            <th>CANT.</th>
            <th>UNIDAD</th>
            <th>CODIGO</th>
            <th>DESCRIPCION</th>
            <th>P.UNIT.</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map((item, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${item.quantity.toFixed(3)}</td>
              <td>UNIDAD</td>
              <td>${escapeHtml(item.sku)}</td>
              <td>${escapeHtml(item.name)}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      <div class="ticket-words">SON: ${totalToWords(order.total)}</div>
      <div class="ticket-observations"><strong>OBSERVACIONES:</strong> ${escapeHtml(order.notes || "")}</div>
      <div class="ticket-bottom">
        <small>USUARIO: ${escapeHtml(consultant.email)} ${date.toLocaleDateString("es-PE")} ${date.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" })}</small>
        <div class="ticket-totals">
          <div><span>DESCUENTOS TOTALES: S/</span><strong>${Number(order.discount || 0).toFixed(2)}</strong></div>
          <div class="ticket-total"><span>TOTAL: S/</span><strong>${order.total.toFixed(2)}</strong></div>
        </div>
      </div>
    </section>
  `;
}

function ticketNumberFor(orderId) {
  const number = Number(String(orderId).replace(/\D/g, "")) || 1;
  return `${appConfig.company.ticketPrefix}-${String(number).padStart(8, "0")}`;
}

function printTicket(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  const consultant = users.find((item) => item.id === order.consultantId);
  const popup = window.open("", "_blank", "width=980,height=720");
  if (!popup) {
    showToast("El navegador bloqueo la ventana de impresion.");
    return;
  }
  popup.document.write(`
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>${ticketNumberFor(order.id)}</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body class="print-body">
        ${ticketTemplate(order, consultant)}
        <script>window.addEventListener("load", () => window.print());<\/script>
      </body>
    </html>
  `);
  popup.document.close();
}

function totalToWords(amount) {
  const soles = Math.floor(Number(amount || 0));
  const cents = Math.round((Number(amount || 0) - soles) * 100);
  return `${numberToSpanish(soles).toUpperCase()} CON ${String(cents).padStart(2, "0")}/100 SOLES`;
}

function numberToSpanish(value) {
  const units = ["CERO", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE", "DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISEIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE"];
  const tens = ["", "", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA"];
  const hundreds = ["", "CIENTO", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS"];
  if (value < 20) return units[value];
  if (value < 30) return value === 20 ? "VEINTE" : `VEINTI${units[value - 20].toLowerCase()}`;
  if (value < 100) return `${tens[Math.floor(value / 10)]}${value % 10 ? ` Y ${units[value % 10]}` : ""}`;
  if (value === 100) return "CIEN";
  if (value < 1000) return `${hundreds[Math.floor(value / 100)]}${value % 100 ? ` ${numberToSpanish(value % 100)}` : ""}`;
  if (value < 1000000) {
    const thousands = Math.floor(value / 1000);
    const rest = value % 1000;
    return `${thousands === 1 ? "MIL" : `${numberToSpanish(thousands)} MIL`}${rest ? ` ${numberToSpanish(rest)}` : ""}`;
  }
  return String(value);
}
function currentMonthPeriod() {
  const today = new Date();

  const start = new Date(today.getFullYear(), today.getMonth(), 1);
  const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return {
    start,
    end,
    label: `${formatReportDate(start)} - ${formatReportDate(end)}`
  };
}

function formatReportDate(date) {
  return date
    .toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })
    .replace(",", "");
}
function renderReports() {
  const orders = visibleOrders();
  if (currentUser.role === "management") {
    renderManagementReports();
    return;
  }
  if (currentUser.role === "supervisor") {
    renderTeamReports();
    return;
  }

  const report = productReport(orders);
  const total = sum(orders, "total");
  const paidOrders = orders.filter((order) => order.paymentStatus === "confirmed").length;

  document.querySelector("#reports-view").innerHTML = `
    <div class="view-head page-hero">
      <div>
        <p class="section-kicker">Reportes</p>
        <h3>Mis ventas por producto</h3>
        <p>Resumen de tus pedidos y productos vendidos.</p>
      </div>
      <button id="export-report" class="primary-btn" type="button">${svgIcon("download")}<span>Exportar reporte</span></button>
    </div>
    ${filterStrip([
      { icon: "clipboard", label: "Periodo", value: currentMonthPeriod().label },
      { icon: "users", label: "Consultora", value: currentUser.name },
      { icon: "chart", label: "Vista", value: "Personal" }
    ], "report-filters")}
    <div class="reports-page">
      ${metricGrid([
        { label: "Venta total", value: formatMoney.format(total), note: `${orders.length} pedidos`, icon: "bag", tone: "pink" },
        { label: "Ticket promedio", value: formatMoney.format(orders.length ? total / orders.length : 0), note: "Promedio personal", icon: "tag", tone: "pink" },
        { label: "Pagos confirmados", value: paidOrders, note: "Pedidos pagados", icon: "receipt", tone: "green" },
        { label: "Productos", value: report.length, note: "Referencias vendidas", icon: "box", tone: "violet" }
      ], "report-metrics")}
      <section class="report-section">
        <div class="report-section-head">
          <div>
            <span>Productos</span>
            <h3>Ventas por producto</h3>
            <p>Comparativo de unidades y monto vendido.</p>
          </div>
        </div>
        <div class="report-focus-grid">
          <div class="report-block">
            ${barChart(report)}
          </div>
          <div class="report-block">
            ${productReportTable(report)}
          </div>
        </div>
      </section>
    </div>
  `;

  document.querySelector("#export-report").addEventListener("click", () => {
    exportCsv(
      report.map((item) => ({
        producto: item.label,
        unidades: item.units,
        venta: item.value
      })),
      "glow-club-reporte-consultora.csv"
    );
  });
}

function renderManagementReports() {
  const orders = visibleOrders();
  const report = consultantReport(orders, consultants());
  const teamRows = supervisorReport(orders);
  const selectedId = selectedReportConsultant && report.some((item) => item.id === selectedReportConsultant)
    ? selectedReportConsultant
    : report[0]?.id;
  selectedReportConsultant = selectedId;
  const selected = report.find((item) => item.id === selectedId);
  const selectedOrders = orders
    .filter((order) => order.consultantId === selectedId)
    .sort(byDateDesc);
  const total = sum(orders, "total");

  document.querySelector("#reports-view").innerHTML = `
    <div class="view-head page-hero">
      <div>
        <p class="section-kicker">Reportes</p>
        <h3>Reportes comerciales</h3>
        <p>Vista consolidada por supervisora, consultora, ventas y pagos.</p>
      </div>
      <button id="export-report" class="primary-btn" type="button">${svgIcon("download")}<span>Exportar reporte</span></button>
    </div>
    ${filterStrip([
      { icon: "clipboard", label: "Periodo", value: currentMonthPeriod().label },
      { icon: "users", label: "Supervisoras", value: "Todas las supervisoras" },
      { icon: "users", label: "Consultoras", value: "Todas las consultoras" },
      { icon: "chart", label: "Vista", value: "Vista consolidada" }
    ], "report-filters")}
    <div class="reports-page">
    ${metricGrid([
      { label: "Venta total", value: formatMoney.format(total), note: `${orders.length} pedidos`, icon: "bag", tone: "pink" },
      { label: "Supervisoras", value: supervisors().length, note: "Equipos activos", icon: "users", tone: "pink" },
      { label: "Consultoras", value: consultants().length, note: "Usuarios de venta", icon: "users", tone: "violet" },
      { label: "Pagos por revisar", value: orders.filter((order) => order.paymentStatus !== "confirmed").length, note: "Pendientes o en revision", icon: "receipt", tone: "orange" }
    ], "report-metrics")}
      <section class="report-section">
        <div class="report-section-head">
          <div>
            <span>Equipos</span>
            <h3>Ventas por supervisora</h3>
            <p>Agrupa las ventas, pedidos y pagos por revisar de cada equipo.</p>
          </div>
        </div>
        ${teamReportTable(teamRows)}
      </section>
      <section class="report-section">
        <div class="report-section-head with-control">
          <div>
            <span>Consultoras</span>
            <h3>Detalle por consultora</h3>
            <p>Selecciona una consultora para abrir su detalle comercial.</p>
          </div>
          <select id="report-consultant-select">
            ${report.map((item) => `<option value="${item.id}" ${item.id === selectedId ? "selected" : ""}>${escapeHtml(item.label)}</option>`).join("")}
          </select>
        </div>
        <div class="report-focus-grid">
          <div class="report-block">
            <h4>Numero de ventas</h4>
            ${consultantSalesChart(report, selectedId)}
          </div>
          <div class="report-block detail-panel">
            ${selected ? consultantDetail(selected, selectedOrders) : `<div class="empty-state">Aun no hay consultoras para reportar.</div>`}
          </div>
        </div>
      </section>
      <section class="report-section">
        <div class="report-section-head">
          <div>
            <span>Ranking</span>
            <h3>Consultoras por resultado</h3>
            <p>Cantidad de ventas, monto y comprobantes registrados.</p>
          </div>
        </div>
        ${consultantReportTable(report)}
      </section>
    </div>
  `;

  bindConsultantReportInteractions();
  document.querySelector("#export-report").addEventListener("click", () => {
    exportCsv(
      report.map((item) => ({
        supervisora: item.supervisor,
        consultora: item.label,
        numero_ventas: item.orders,
        monto_vendido: item.value,
        comprobantes: item.receipts,
        ticket_promedio: item.orders ? (item.value / item.orders).toFixed(2) : "0"
      })),
      "glow-club-reporte-consultoras.csv"
    );
  });
}

function renderTeamReports() {
  const orders = visibleOrders();
  const report = consultantReport(orders, visibleConsultants());
  const selectedId = selectedReportConsultant && report.some((item) => item.id === selectedReportConsultant)
    ? selectedReportConsultant
    : report[0]?.id;
  selectedReportConsultant = selectedId;
  const selected = report.find((item) => item.id === selectedId);
  const selectedOrders = orders
    .filter((order) => order.consultantId === selectedId)
    .sort(byDateDesc);
  const total = sum(orders, "total");

  document.querySelector("#reports-view").innerHTML = `
    <div class="view-head page-hero">
      <div>
        <p class="section-kicker">Reportes</p>
        <h3>Reportes comerciales</h3>
        <p>Seguimiento de ventas, pagos y pedidos de tus consultoras asignadas.</p>
      </div>
      <button id="export-report" class="primary-btn" type="button">${svgIcon("download")}<span>Exportar reporte</span></button>
    </div>
    ${filterStrip([
      { icon: "clipboard", label: "Periodo", value: currentMonthPeriod().label },
      { icon: "users", label: "Supervisoras", value: currentUser.name },
      { icon: "users", label: "Consultoras", value: "Mi equipo" },
      { icon: "chart", label: "Vista", value: "Vista de equipo" }
    ], "report-filters")}
    <div class="reports-page">
    ${metricGrid([
      { label: "Venta del equipo", value: formatMoney.format(total), note: `${orders.length} pedidos`, icon: "bag", tone: "pink" },
      { label: "Consultoras", value: visibleConsultants().length, note: "Asignadas a tu equipo", icon: "users", tone: "violet" },
      { label: "Ticket promedio", value: formatMoney.format(orders.length ? total / orders.length : 0), note: "Promedio del equipo", icon: "tag", tone: "pink" },
      { label: "Pagos por revisar", value: orders.filter((order) => order.paymentStatus !== "confirmed").length, note: "Pendientes o en revision", icon: "receipt", tone: "orange" }
    ], "report-metrics")}
      <section class="report-section">
        <div class="report-section-head with-control">
          <div>
            <span>Mi equipo</span>
            <h3>Detalle por consultora</h3>
            <p>Comparativo de avance de las consultoras asignadas.</p>
          </div>
          <select id="report-consultant-select">
            ${report.map((item) => `<option value="${item.id}" ${item.id === selectedId ? "selected" : ""}>${escapeHtml(item.label)}</option>`).join("")}
          </select>
        </div>
        <div class="report-focus-grid">
          <div class="report-block">
            <h4>Numero de ventas</h4>
            ${consultantSalesChart(report, selectedId)}
          </div>
          <div class="report-block detail-panel">
            ${selected ? consultantDetail(selected, selectedOrders) : `<div class="empty-state">Aun no hay consultoras asignadas para reportar.</div>`}
          </div>
        </div>
      </section>
      <section class="report-section">
        <div class="report-section-head">
          <div>
            <span>Ranking</span>
            <h3>Consultoras del equipo</h3>
            <p>Monto, pedidos y comprobantes registrados.</p>
          </div>
        </div>
        ${consultantReportTable(report)}
      </section>
    </div>
  `;

  bindConsultantReportInteractions();
  document.querySelector("#export-report").addEventListener("click", () => {
    exportCsv(
      report.map((item) => ({
        consultora: item.label,
        numero_ventas: item.orders,
        monto_vendido: item.value,
        comprobantes: item.receipts,
        ticket_promedio: item.orders ? (item.value / item.orders).toFixed(2) : "0"
      })),
      "glow-club-reporte-equipo.csv"
    );
  });
}

function bindConsultantReportInteractions() {
  document.querySelector("#report-consultant-select")?.addEventListener("change", (event) => {
    selectedReportConsultant = event.target.value;
    renderReports();
  });
  document.querySelectorAll("[data-select-consultant]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedReportConsultant = button.dataset.selectConsultant;
      renderReports();
    });
  });
  bindOrderOpeners("#reports-view");
}

function consultantSalesChart(rows, selectedId) {
  if (!rows.length) return `<div class="empty-state">Sin datos para mostrar.</div>`;
  const maxOrders = Math.max(1, ...rows.map((row) => row.orders));
  return `
    <div class="chart-list refined-chart">
      ${rows
        .map((row) => {
          const width = Math.max(6, Math.round((row.orders / maxOrders) * 100));
          return `
            <button class="chart-row chart-button ${row.id === selectedId ? "selected" : ""}" type="button" data-select-consultant="${row.id}">
              <div class="chart-label">
                <span>${escapeHtml(row.label)}</span>
                <strong>${row.orders} venta${row.orders === 1 ? "" : "s"}</strong>
              </div>
              <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
              <div class="chart-subtext">${formatMoney.format(row.value)} · ${row.receipts} comprobante${row.receipts === 1 ? "" : "s"}</div>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function consultantDetail(selected, orders) {
  const confirmed = orders.filter((order) => order.paymentStatus === "confirmed").length;
  const review = orders.filter((order) => order.paymentStatus === "review").length;
  const pending = orders.filter((order) => order.paymentStatus === "pending").length;
  return `
    <div class="consultant-detail-head">
      <div>
        <h3>${escapeHtml(selected.label)}</h3>
        <p>${escapeHtml(selected.zone)}</p>
      </div>
      <span class="status-pill status-confirmed">${selected.orders} venta${selected.orders === 1 ? "" : "s"}</span>
    </div>
    <div class="detail-stats">
      <div><span>Monto</span><strong>${formatMoney.format(selected.value)}</strong></div>
      <div><span>Ticket</span><strong>${formatMoney.format(selected.orders ? selected.value / selected.orders : 0)}</strong></div>
      <div><span>Confirmados</span><strong>${confirmed}</strong></div>
      <div><span>Por revisar</span><strong>${review + pending}</strong></div>
    </div>
    ${consultantOrdersDetail(orders)}
  `;
}

function consultantOrdersDetail(orders) {
  if (!orders.length) return `<div class="empty-state">Esta consultora aun no registra ventas.</div>`;
  return `
    <div class="consultant-detail-list">
      ${orders
        .map((order) => `
          <button class="list-row order-detail-row" type="button" data-open-order="${order.id}">
            <div>
              <strong>${order.id} · ${escapeHtml(order.customerName)}</strong>
              <span>${formatDate.format(new Date(order.createdAt))} · ${paymentLabels[order.paymentStatus]} · ${statusLabels[order.status]}</span>
            </div>
            <div class="row-metrics">
              <span>${order.items.length} producto${order.items.length === 1 ? "" : "s"}</span>
              <strong>${formatMoney.format(order.total)}</strong>
            </div>
          </button>
        `)
        .join("")}
    </div>
  `;
}

function consultantReport(orders, consultantRows = visibleConsultants()) {
  const maxValue = Math.max(1, ...consultantRows.map((consultant) => {
    return sum(orders.filter((order) => order.consultantId === consultant.id), "total");
  }));

  return consultantRows.map((consultant) => {
    const ownOrders = orders.filter((order) => order.consultantId === consultant.id);
    const value = sum(ownOrders, "total");
    return {
      id: consultant.id,
      label: consultant.name,
      zone: consultant.zone,
      supervisorId: consultant.supervisorId,
      supervisor: supervisorName(consultant.supervisorId),
      value,
      orders: ownOrders.length,
      receipts: ownOrders.filter((order) => order.receipt).length,
      percent: Math.round((value / maxValue) * 100)
    };
  }).sort((a, b) => b.value - a.value);
}

function supervisorReport(orders) {
  const rows = supervisors().map((supervisor) => {
    const team = teamConsultants(supervisor.id);
    const teamIds = new Set(team.map((consultant) => consultant.id));
    const teamOrders = orders.filter((order) => teamIds.has(order.consultantId));
    return {
      id: supervisor.id,
      label: supervisor.name,
      consultants: team.length,
      orders: teamOrders.length,
      value: sum(teamOrders, "total"),
      pending: teamOrders.filter((order) => order.paymentStatus !== "confirmed").length
    };
  });

  const assigned = new Set(rows.flatMap((row) => teamConsultants(row.id).map((consultant) => consultant.id)));
  const unassigned = consultants().filter((consultant) => !assigned.has(consultant.id));
  if (unassigned.length) {
    const unassignedIds = new Set(unassigned.map((consultant) => consultant.id));
    const unassignedOrders = orders.filter((order) => unassignedIds.has(order.consultantId));
    rows.push({
      id: "sin-supervisora",
      label: "Sin supervisora asignada",
      consultants: unassigned.length,
      orders: unassignedOrders.length,
      value: sum(unassignedOrders, "total"),
      pending: unassignedOrders.filter((order) => order.paymentStatus !== "confirmed").length
    });
  }

  return rows.sort((a, b) => b.value - a.value);
}

function productReport(orders) {
  const map = new Map();
  orders.forEach((order) => {
    order.items.forEach((item) => {
      const existing = map.get(item.sku) || { label: item.name, value: 0, units: 0 };
      existing.value += item.price * item.quantity;
      existing.units += item.quantity;
      map.set(item.sku, existing);
    });
  });

  const rows = [...map.values()].sort((a, b) => b.value - a.value);
  const maxValue = Math.max(1, ...rows.map((row) => row.value));
  return rows.map((row) => ({ ...row, percent: Math.round((row.value / maxValue) * 100) }));
}

function barChart(rows) {
  if (!rows.length) return `<div class="empty-state">Sin datos para mostrar.</div>`;
  return `
    <div class="chart-list">
      ${rows
        .map((row) => `
          <div class="chart-row">
            <div class="chart-label">
              <span>${escapeHtml(row.label)}</span>
              <strong>${formatMoney.format(row.value)}</strong>
            </div>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.max(6, row.percent)}%"></div></div>
          </div>
        `)
        .join("")}
    </div>
  `;
}

function consultantReportTable(rows) {
  if (!rows.length) return `<div class="empty-state">Sin pedidos registrados.</div>`;
  return `
    <div class="table-shell">
      <table>
        <thead><tr><th>Consultora</th><th>Supervisora</th><th>Pedidos</th><th>Ventas</th><th>Comprobantes</th></tr></thead>
        <tbody>
          ${rows
            .map((row) => `
              <tr>
                <td data-label="Consultora"><strong>${escapeHtml(row.label)}</strong><span>${escapeHtml(row.zone)}</span></td>
                <td data-label="Supervisora">${escapeHtml(row.supervisor || "Sin supervisora")}</td>
                <td data-label="Pedidos">${row.orders}</td>
                <td data-label="Ventas">${formatMoney.format(row.value)}</td>
                <td data-label="Comprobantes">${row.receipts}</td>
              </tr>
            `)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function teamReportTable(rows) {
  if (!rows.length) return `<div class="empty-state">Aun no hay supervisoras registradas.</div>`;
  return `
    <div class="table-shell">
      <table>
        <thead><tr><th>Supervisora</th><th>Consultoras</th><th>Pedidos</th><th>Ventas</th><th>Pagos por revisar</th></tr></thead>
        <tbody>
          ${rows
            .map((row) => `
              <tr>
                <td data-label="Supervisora"><strong>${escapeHtml(row.label)}</strong></td>
                <td data-label="Consultoras">${row.consultants}</td>
                <td data-label="Pedidos">${row.orders}</td>
                <td data-label="Ventas">${formatMoney.format(row.value)}</td>
                <td data-label="Pagos por revisar">${row.pending}</td>
              </tr>
            `)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function productReportTable(rows) {
  if (!rows.length) return `<div class="empty-state">Sin pedidos registrados.</div>`;
  return `
    <div class="table-shell">
      <table>
        <thead><tr><th>Producto</th><th>Unidades</th><th>Venta</th></tr></thead>
        <tbody>
          ${rows
            .map((row) => `
              <tr>
                <td data-label="Producto"><strong>${escapeHtml(row.label)}</strong></td>
                <td data-label="Unidades">${row.units}</td>
                <td data-label="Venta">${formatMoney.format(row.value)}</td>
              </tr>
            `)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderCatalog() {
  const categories = [...new Set(products.map((product) => product.category))];
  const subcategories = [...new Set(products.map((product) => product.subcategory).filter(Boolean))];
  const activeProducts = products.filter((product) => product.stock !== null);
  const totalStock = products.reduce((acc, product) => acc + Number(product.stock || 0), 0);
  document.querySelector("#catalog-view").innerHTML = `
    <div class="view-head page-hero">
      <div>
        <p class="section-kicker">Catálogo</p>
        <h3>Productos Glow Club</h3>
        <p>Catálogo disponible para armar pedidos y consultar stock.</p>
      </div>
    </div>
    <section class="catalog-control-panel">
      <div class="catalog-toolbar">
        <label class="search-field">
          ${svgIcon("search")}
          <input id="catalog-search" placeholder="Buscar producto o SKU">
        </label>
        <select id="catalog-category">
          <option value="all">Todas las categorías</option>
          ${categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}
        </select>
        <select id="catalog-subcategory">
          <option value="all">Todas las subcategorías</option>
          ${subcategories.map((subcategory) => `<option value="${escapeHtml(subcategory)}">${escapeHtml(subcategory)}</option>`).join("")}
        </select>
      </div>
      <div class="quick-filter-row" aria-label="Filtros rápidos de catálogo">
        <button class="quick-filter ${catalogQuickFilter === "stock" ? "active" : ""}" type="button" data-catalog-quick="stock">${svgIcon("bag")}<span>En stock</span></button>
        <button class="quick-filter ${catalogQuickFilter === "sold" ? "active" : ""}" type="button" data-catalog-quick="sold">${svgIcon("flame")}<span>Más vendidos</span></button>
        <button class="quick-filter ${catalogQuickFilter === "new" ? "active" : ""}" type="button" data-catalog-quick="new">${svgIcon("sparkle")}<span>Nuevos</span></button>
      </div>
    </section>
    ${metricGrid([
      { label: "Productos activos", value: activeProducts.length, note: "productos", icon: "bag", tone: "pink" },
      { label: "Categorías", value: categories.length, note: "categorías", icon: "grid", tone: "pink" },
      { label: "Subcategorías", value: subcategories.length, note: "subcategorías", icon: "tag", tone: "violet" },
      { label: "Stock disponible", value: Number(totalStock).toLocaleString("es-PE"), note: "unidades", icon: "box", tone: "orange" }
    ], "catalog-metrics")}
    <div id="catalog-list"></div>
  `;

  const refresh = () => {
    catalogPage = 1;
    renderCatalogList();
  };
  document.querySelector("#catalog-search").addEventListener("input", refresh);
  document.querySelector("#catalog-category").addEventListener("change", refresh);
  document.querySelector("#catalog-subcategory").addEventListener("change", refresh);
  document.querySelectorAll("[data-catalog-quick]").forEach((button) => {
    button.addEventListener("click", () => {
      catalogQuickFilter = catalogQuickFilter === button.dataset.catalogQuick ? "all" : button.dataset.catalogQuick;
      renderCatalog();
    });
  });
  document.querySelector("[data-action='new-order']")?.addEventListener("click", () => showView("order"));
  renderCatalogList();
}

function catalogFilteredRows() {
  const search = (document.querySelector("#catalog-search")?.value || "").trim().toLowerCase();
  const category = document.querySelector("#catalog-category")?.value || "all";
  const subcategory = document.querySelector("#catalog-subcategory")?.value || "all";
  const sales = catalogSalesMap();
  let rows = products.filter((product) => {
    const matchesSearch = !search || [product.name, product.sku, product.category, product.subcategory].join(" ").toLowerCase().includes(search);
    const matchesCategory = category === "all" || product.category === category;
    const matchesSubcategory = subcategory === "all" || product.subcategory === subcategory;
    const matchesQuick = catalogQuickFilter !== "stock" || Number(product.stock || 0) > 0;
    return matchesSearch && matchesCategory && matchesSubcategory && matchesQuick;
  });

  if (catalogQuickFilter === "sold") {
    rows = rows.sort((a, b) => (sales.get(b.sku) || 0) - (sales.get(a.sku) || 0));
  }
  if (catalogQuickFilter === "new") {
    rows = [...rows].reverse();
  }
  return rows;
}

function catalogSalesMap() {
  const map = new Map();
  state.orders.forEach((order) => {
    order.items.forEach((item) => {
      map.set(item.sku, (map.get(item.sku) || 0) + Number(item.quantity || 0));
    });
  });
  return map;
}

function renderCatalogList() {
  const rows = catalogFilteredRows();
  const container = document.querySelector("#catalog-list");
  if (!rows.length) {
    container.innerHTML = `<div class="empty-state">No hay productos con esos filtros.</div>`;
    return;
  }

  const totalPages = Math.max(1, Math.ceil(rows.length / catalogPageSize));
  catalogPage = Math.min(Math.max(1, catalogPage), totalPages);
  const start = (catalogPage - 1) * catalogPageSize;
  const pageRows = rows.slice(start, start + catalogPageSize);

  container.innerHTML = `
    <section class="catalog-table-card">
      <div class="catalog-table-head">
        <span>Producto</span>
        <span>Stock</span>
        <span>Acción</span>
      </div>
      <div class="catalog-list">
        ${pageRows.map(catalogProductRow).join("")}
      </div>
      <div class="pagination-row">
        <span>Mostrando ${start + 1}-${Math.min(start + catalogPageSize, rows.length)} de ${rows.length} productos</span>
        <div class="pagination-actions">
          <button class="ghost-btn page-btn" type="button" data-catalog-page="${catalogPage - 1}" ${catalogPage === 1 ? "disabled" : ""}>‹</button>
          ${paginationButtons(totalPages)}
          <button class="ghost-btn page-btn" type="button" data-catalog-page="${catalogPage + 1}" ${catalogPage === totalPages ? "disabled" : ""}>›</button>
          <select id="catalog-page-size" aria-label="Productos por página">
            ${[5, 10, 20].map((size) => `<option value="${size}" ${size === catalogPageSize ? "selected" : ""}>${size} por página</option>`).join("")}
          </select>
        </div>
      </div>
    </section>
  `;

  container.querySelectorAll("[data-catalog-page]").forEach((button) => {
    button.addEventListener("click", () => {
      catalogPage = Number(button.dataset.catalogPage);
      renderCatalogList();
    });
  });
  container.querySelector("#catalog-page-size")?.addEventListener("change", (event) => {
    catalogPageSize = Number(event.target.value);
    catalogPage = 1;
    renderCatalogList();
  });
  container.querySelectorAll("[data-add-catalog-product]").forEach((button) => {
    button.addEventListener("click", () => addCatalogProductToOrder(button.dataset.addCatalogProduct));
  });
}

function catalogProductRow(product) {
  const stock = Number(product.stock || 0);
  return `
    <article class="catalog-row">
      <div class="product-main">
        ${productThumbnail(product)}
        <div>
          <strong>${escapeHtml(product.name)}</strong>
          <span>${product.sku} · ${escapeHtml(product.category)}${product.subcategory ? ` · ${escapeHtml(product.subcategory)}` : ""}</span>
        </div>
      </div>
      <div class="product-row-meta">
        <strong>${stock} disponible${stock === 1 ? "" : "s"}</strong>
        <span class="status-pill ${stock > 0 ? "status-confirmed" : "status-pending"}">BEAU VISAGE</span>
      </div>
      <div class="catalog-row-action">
        ${canRegisterOrders() ? `<button class="secondary-btn add-product-btn" type="button" data-add-catalog-product="${product.sku}">${svgIcon("plus")}<span>Agregar</span></button>` : ""}
      </div>
    </article>
  `;
}

function productThumbnail(product) {
  const letters = String(product.category || "GL").slice(0, 2).toUpperCase();
  return `<div class="product-miniature" aria-hidden="true"><span>${escapeHtml(letters)}</span></div>`;
}

function paginationButtons(totalPages) {
  const pages = [];
  for (let page = 1; page <= totalPages; page += 1) {
    if (page === 1 || page === totalPages || Math.abs(page - catalogPage) <= 1) {
      pages.push(`<button class="ghost-btn page-btn ${page === catalogPage ? "active" : ""}" type="button" data-catalog-page="${page}">${page}</button>`);
    } else if (pages[pages.length - 1] !== `<span class="pagination-ellipsis">...</span>`) {
      pages.push(`<span class="pagination-ellipsis">...</span>`);
    }
  }
  return pages.join("");
}

function addCatalogProductToOrder(sku) {
  pendingCatalogSku = sku;
  showView("order");
}

function renderUsers() {
  const canCreateSupervisors = canManageAll();
  const roleControl = canCreateSupervisors
    ? `<label>Tipo de acceso
        <select id="new-user-role">
          <option value="consultant">Consultora</option>
          <option value="supervisor">Supervisora</option>
        </select>
      </label>`
    : `<input id="new-user-role" type="hidden" value="consultant">`;
  const supervisorControl = canCreateSupervisors
    ? `<label id="supervisor-field">Supervisora asignada
        <select id="new-user-supervisor">
          <option value="">Sin asignar</option>
          ${supervisors().map((user) => `<option value="${user.id}">${escapeHtml(user.name)}</option>`).join("")}
        </select>
      </label>`
    : `<input id="new-user-supervisor" type="hidden" value="${currentUser.id}">`;

  document.querySelector("#users-view").innerHTML = `
    <div class="view-head page-hero">
      <div>
        <p class="section-kicker">Equipo</p>
        <h3>${canManageAll() ? "Jerarquía comercial" : "Mi equipo comercial"}</h3>
        <p>${canManageAll() ? "Organiza gerencia, supervisoras y consultoras con seguimiento de ventas." : "Registra consultoras y revisa el avance de tu equipo."}</p>
      </div>
      <button class="primary-btn" type="button" data-action="focus-access">${svgIcon("plus")}<span>Nuevo acceso</span></button>
    </div>
    ${filterStrip([
      { icon: "users", label: "Tipo de acceso", value: "Todos" },
      { icon: "users", label: "Supervisora", value: canManageAll() ? "Todas" : currentUser.name },
      { icon: "tag", label: "Zona", value: "Todas" },
      { icon: "chart", label: "Vista", value: "Vista jerárquica" }
    ], "team-filters")}
    ${hierarchySummary()}
    <div class="users-layout">
      <article class="panel access-panel">
        <p class="section-kicker">Alta de usuarios</p>
        <h3>Agregar acceso</h3>
        <form id="add-consultant-form" class="form-stack compact-form">
          ${roleControl}
          <label>Nombre completo<input id="new-consultant-name" required placeholder="Nombre completo"></label>
          <label>Correo<input id="new-consultant-email" type="email" required placeholder="usuario@glowclub.pe"></label>
          <div class="form-row">
            <label>Telefono<input id="new-consultant-phone" required placeholder="999 999 999"></label>
            <label>Zona<input id="new-consultant-zone" required placeholder="Zona o ciudad"></label>
          </div>
          ${supervisorControl}
          <label>Contraseña inicial
            <span class="password-field">
              <input id="new-consultant-password" required minlength="8" value="BeauVisage123" type="password">
              <button class="password-toggle" type="button" data-toggle-password="new-consultant-password" aria-label="Mostrar contraseña">Mostrar</button>
            </span>
          </label>
          <button class="primary-btn" type="submit">Crear acceso</button>
        </form>
      </article>
      <article class="panel hierarchy-panel">
        <div class="section-title-row">
          <div>
            <p class="section-kicker">Estructura</p>
            <h3>${canManageAll() ? "Mapa de jerarquía" : "Consultoras asignadas"}</h3>
          </div>
          <span class="status-pill status-confirmed">${visibleConsultants().length} consultora${visibleConsultants().length === 1 ? "" : "s"}</span>
        </div>
        ${hierarchyBoard()}
      </article>
    </div>
  `;

  document.querySelector("#add-consultant-form").addEventListener("submit", handleConsultantSubmit);
  document.querySelector("#new-user-role")?.addEventListener("change", syncSupervisorField);
  document.querySelector("[data-action='focus-access']")?.addEventListener("click", () => document.querySelector("#new-consultant-name")?.focus());
  syncSupervisorField();
}

function hierarchySummary() {
  const orders = visibleOrders();
  const visibleSupervisorCount = canManageAll() ? supervisors().length : 1;
  const visibleConsultantCount = visibleConsultants().length;
  const unassigned = canManageAll() ? consultants().filter((user) => !user.supervisorId).length : 0;
  return `
    <div class="hierarchy-summary">
      <article class="metric-pink">
        <div class="metric-icon">${svgIcon("crown")}</div>
        <div><span>Nivel gerencia</span>
        <strong>1</strong>
        <small>Control general</small></div>
      </article>
      <article class="metric-pink">
        <div class="metric-icon">${svgIcon("users")}</div>
        <div><span>Supervisoras</span>
        <strong>${visibleSupervisorCount}</strong>
        <small>${canManageAll() ? "Equipos creados" : "Tu rol actual"}</small></div>
      </article>
      <article class="metric-violet">
        <div class="metric-icon">${svgIcon("users")}</div>
        <div><span>Consultoras</span>
        <strong>${visibleConsultantCount}</strong>
        <small>Usuarios de venta</small></div>
      </article>
      <article class="metric-orange">
        <div class="metric-icon">${svgIcon("users")}</div>
        <div><span>${canManageAll() ? "Sin asignar" : "Ventas"}</span>
        <strong>${canManageAll() ? unassigned : orders.length}</strong>
        <small>${canManageAll() ? "Consultoras pendientes" : formatMoney.format(sum(orders, "total"))}</small></div>
      </article>
    </div>
  `;
}

function hierarchyBoard() {
  if (canManageAll()) {
    const supervisorRows = supervisors();
    const unassigned = consultants().filter((user) => !user.supervisorId);
    return `
      <div class="hierarchy-board">
        <div class="hierarchy-level hierarchy-root">
          <span class="level-label">Nivel 1 · Gerencia</span>
          ${hierarchyPersonCard(currentUser, "Acceso total al sistema", visibleOrders(), "management-node")}
        </div>
        <div class="hierarchy-line"></div>
        <div class="hierarchy-level">
          <span class="level-label">Nivel 2 · Supervisoras y equipos</span>
          <div class="team-grid">
            ${supervisorRows.length ? supervisorRows.map((supervisor) => supervisorTeamBlock(supervisor)).join("") : `<div class="empty-state">Aun no hay supervisoras registradas.</div>`}
            ${unassigned.length ? unassignedTeamBlock(unassigned) : ""}
          </div>
        </div>
      </div>
    `;
  }

  const team = visibleConsultants();
  return `
    <div class="hierarchy-board">
      <div class="hierarchy-level hierarchy-root">
        <span class="level-label">Nivel 1 · Supervisora</span>
        ${hierarchyPersonCard(currentUser, "Responsable del equipo", visibleOrders(), "supervisor-node")}
      </div>
      <div class="hierarchy-line"></div>
      <div class="hierarchy-level">
        <span class="level-label">Nivel 2 · Consultoras</span>
        <div class="team-members team-members-standalone">
          ${team.length ? team.map((consultant) => consultantMemberRow(consultant)).join("") : `<div class="empty-state">Aun no tienes consultoras asignadas.</div>`}
        </div>
      </div>
    </div>
  `;
}

function supervisorTeamBlock(supervisor) {
  const team = teamConsultants(supervisor.id);
  const teamIds = new Set(team.map((consultant) => consultant.id));
  const orders = state.orders.filter((order) => teamIds.has(order.consultantId));
  return `
    <section class="team-block">
      ${hierarchyPersonCard(supervisor, `${team.length} consultora${team.length === 1 ? "" : "s"} asignada${team.length === 1 ? "" : "s"}`, orders, "supervisor-node")}
      <div class="team-members">
        <div class="members-label">Consultoras del equipo</div>
        ${team.length ? team.map((consultant) => consultantMemberRow(consultant)).join("") : `<div class="member-empty">Sin consultoras asignadas.</div>`}
      </div>
    </section>
  `;
}

function unassignedTeamBlock(rows) {
  return `
    <section class="team-block unassigned-team">
      <div class="team-unassigned-head">
        <div>
          <strong>Sin supervisora</strong>
          <span>Consultoras pendientes de asignacion</span>
        </div>
        <span class="status-pill status-pending">${rows.length}</span>
      </div>
      <div class="team-members">
        ${rows.map((consultant) => consultantMemberRow(consultant)).join("")}
      </div>
    </section>
  `;
}

function hierarchyPersonCard(user, subtitle, orders, className = "") {
  return `
    <article class="hierarchy-person ${className}">
      <div class="hierarchy-avatar">${initials(user.name)}</div>
      <div class="hierarchy-person-main">
        <strong>${escapeHtml(user.name)}</strong>
        <span>${roleLabel(user.role)} · ${escapeHtml(user.zone || "Sin zona")}</span>
        <small>${escapeHtml(subtitle)}</small>
      </div>
      <div class="row-metrics">
        <span>${orders.length} ventas</span>
        <strong>${formatMoney.format(sum(orders, "total"))}</strong>
      </div>
    </article>
  `;
}

function consultantMemberRow(user) {
  const orders = state.orders.filter((order) => order.consultantId === user.id);
  return `
    <article class="member-row">
      <div>
        <strong>${escapeHtml(user.name)}</strong>
        <span>${escapeHtml(user.email)} · ${escapeHtml(user.phone || "Sin telefono")}</span>
        <small>${escapeHtml(user.zone || "Sin zona")}</small>
      </div>
      <div class="row-metrics">
        <span>${orders.length} ventas</span>
        <strong>${formatMoney.format(sum(orders, "total"))}</strong>
      </div>
    </article>
  `;
}

function initials(name) {
  return String(name || "GL")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function syncSupervisorField() {
  const role = document.querySelector("#new-user-role")?.value;
  const field = document.querySelector("#supervisor-field");
  if (field) field.hidden = role !== "consultant";
}

async function handleConsultantSubmit(event) {
  event.preventDefault();
  const email = document.querySelector("#new-consultant-email").value.trim().toLowerCase();
  if (users.some((user) => user.email.toLowerCase() === email)) {
    showToast("Ese correo ya existe.");
    return;
  }

  const name = document.querySelector("#new-consultant-name").value.trim();
  const role = document.querySelector("#new-user-role").value;
  const supervisorId = role === "consultant" ? (document.querySelector("#new-user-supervisor")?.value || "") : "";
  const consultant = {
    id: uniqueConsultantId(name),
    name,
    email,
    password: document.querySelector("#new-consultant-password").value.trim(),
    role,
    phone: document.querySelector("#new-consultant-phone").value.trim(),
    zone: document.querySelector("#new-consultant-zone").value.trim(),
    supervisorId,
    mustChangePassword: true
  };

  if (isSupabaseMode()) {
    try {
      await supabaseFetch("/rest/v1/rpc/create_app_user", {
        method: "POST",
        body: JSON.stringify({
          p_actor_id: currentUser.id,
          p_user: {
            id: consultant.id,
            name: consultant.name,
            email: consultant.email,
            password: consultant.password,
            role: consultant.role,
            phone: consultant.phone,
            zone: consultant.zone,
            supervisor_id: consultant.supervisorId || null
          }
        })
      });
      await loadSupabaseData();
      showToast(`${consultant.name} fue agregada. Ya puede iniciar sesion.`);
      renderUsers();
    } catch (error) {
      showToast(`No se pudo crear acceso: ${friendlyDatabaseError(error)}`);
    }
    return;
  }

  users.push(consultant);
  state.users = users;
  saveState();
  showToast(`${consultant.name} fue agregada.`);
  renderUsers();
}

function uniqueConsultantId(name) {
  const base = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 28) || "consultora";
  let candidate = base;
  let index = 2;
  while (users.some((user) => user.id === candidate)) {
    candidate = `${base}-${index}`;
    index += 1;
  }
  return candidate;
}

function consultants() {
  return users.filter((user) => user.role === "consultant");
}

function supervisors() {
  return users.filter((user) => user.role === "supervisor");
}

function teamConsultants(supervisorId) {
  return consultants().filter((user) => user.supervisorId === supervisorId);
}

function supervisorName(id) {
  if (!id) return "Sin supervisora";
  return supervisors().find((user) => user.id === id)?.name || "Sin supervisora";
}

function consultantName(id) {
  return users.find((user) => user.id === id)?.name || "Sin consultora";
}

function sum(rows, key) {
  return rows.reduce((acc, row) => acc + Number(row[key] || 0), 0);
}

function byDateDesc(a, b) {
  return new Date(b.createdAt) - new Date(a.createdAt);
}

function statusPill(status) {
  const className = status === "cancelled" ? "status-cancelled" : status === "shipped" || status === "delivered" ? "status-shipped" : "status-pending";
  return `<span class="status-pill ${className}">${statusLabels[status]}</span>`;
}

function paymentPill(status) {
  const className = status === "confirmed" ? "status-confirmed" : status === "review" ? "status-paid" : "status-pending";
  return `<span class="status-pill ${className}">${paymentLabels[status]}</span>`;
}

function exportCsv(rows, filename) {
  if (!rows.length) {
    showToast("No hay datos para exportar.");
    return;
  }

  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvValue(row[header])).join(","))
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Reporte exportado.");
}

function csvValue(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


