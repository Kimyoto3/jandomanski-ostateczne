from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ==================== MODELS ====================

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str


class BookingRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    preferred_date: str
    preferred_time: str
    topic: Optional[str] = None
    message: Optional[str] = None
    status: str = "pending"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class BookingRequestCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    preferred_date: str
    preferred_time: str
    topic: Optional[str] = None
    message: Optional[str] = None


class TimeSlot(BaseModel):
    time: str
    available: bool


class AvailableSlots(BaseModel):
    date: str
    slots: List[TimeSlot]


class BlogArticle(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    slug: str
    title: str
    excerpt: str
    content: str
    category: str
    author: str
    published_at: str
    read_time: int
    image_url: str


# ==================== STATIC BLOG DATA ====================

BLOG_ARTICLES = [
    {
        "id": "1",
        "slug": "podstawy-inwestowania-dla-poczatkujacych",
        "title": "Podstawy inwestowania dla początkujących",
        "excerpt": "Poznaj fundamentalne zasady inwestowania, które pomogą Ci zbudować solidne podstawy finansowe na przyszłość.",
        "content": """
## Wprowadzenie do świata inwestycji

Inwestowanie to jeden z najskuteczniejszych sposobów budowania długoterminowego majątku. Niezależnie od tego, czy dopiero zaczynasz swoją przygodę z finansami, czy masz już pewne doświadczenie, zrozumienie podstawowych zasad jest kluczowe dla osiągnięcia sukcesu.

### Dlaczego warto inwestować?

Pieniądze trzymane na zwykłym koncie oszczędnościowym tracą wartość w czasie z powodu inflacji. Inwestowanie pozwala nie tylko chronić kapitał przed inflacją, ale również generować zyski.

### Podstawowe rodzaje inwestycji

**1. Akcje**
Kupując akcje, stajesz się współwłaścicielem firmy. Akcje oferują potencjalnie wysokie zyski, ale wiążą się z większym ryzykiem.

**2. Obligacje**
To forma pożyczki udzielanej państwu lub firmie. Obligacje są zazwyczaj bezpieczniejsze niż akcje, ale oferują niższe zyski.

**3. Fundusze inwestycyjne**
Pozwalają na zdywersyfikowanie portfela poprzez inwestowanie w wiele różnych aktywów jednocześnie.

### Zasada dywersyfikacji

Nigdy nie wkładaj wszystkich jajek do jednego koszyka. Rozproszenie inwestycji w różne klasy aktywów pomoże zminimalizować ryzyko.

### Horyzont czasowy

Im dłuższy horyzont inwestycyjny, tym większe ryzyko możesz podjąć. Młodzi inwestorzy mogą pozwolić sobie na bardziej agresywne strategie.

### Podsumowanie

Rozpoczęcie inwestowania wymaga edukacji i cierpliwości. Warto skonsultować się z doradcą finansowym, który pomoże dopasować strategię do indywidualnych celów i możliwości.
        """,
        "category": "Podstawy inwestowania",
        "author": "Jan Kowalski",
        "published_at": "2025-01-05",
        "read_time": 8,
        "image_url": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800"
    },
    {
        "id": "2",
        "slug": "planowanie-finansowe-na-emeryture",
        "title": "Planowanie finansowe na emeryturę",
        "excerpt": "Dowiedz się, jak skutecznie zaplanować swoją przyszłość finansową i zapewnić sobie komfortową emeryturę.",
        "content": """
## Przygotuj się na przyszłość

Emerytura może wydawać się odległa, ale im wcześniej zaczniesz planować, tym lepszą pozycję finansową osiągniesz. W Polsce przeciętna emerytura często nie wystarcza na utrzymanie dotychczasowego standardu życia.

### Kiedy zacząć oszczędzać?

Odpowiedź jest prosta: jak najwcześniej. Dzięki mechanizmowi procentu składanego, pieniądze zainwestowane w młodości mogą się znacznie pomnożyć.

### III filar - dobrowolne oszczędzanie

**IKE (Indywidualne Konto Emerytalne)**
- Limit wpłat w 2025 roku: 23 472 PLN
- Zwolnienie z podatku od zysków kapitałowych przy wypłacie po 60/65 roku życia

**IKZE (Indywidualne Konto Zabezpieczenia Emerytalnego)**
- Limit wpłat w 2025 roku: 9 388,80 PLN
- Możliwość odliczenia wpłat od dochodu
- 10% podatku przy wypłacie

### PPK - Pracownicze Plany Kapitałowe

Jeśli Twój pracodawca oferuje PPK, warto z niego skorzystać. Otrzymujesz dodatkowe środki od pracodawcy i państwa.

### Dywersyfikacja źródeł dochodu

Nie polegaj tylko na jednym źródle dochodu emerytalnego. Kombinacja ZUS, PPK, IKE/IKZE i prywatnych inwestycji da Ci największe bezpieczeństwo.

### Oblicz swoją lukę emerytalną

Zastanów się, ile będziesz potrzebować miesięcznie na emeryturze i porównaj to z prognozowaną emeryturą z ZUS. Różnica to Twoja luka emerytalna.

### Profesjonalna pomoc

Doradca finansowy pomoże Ci stworzyć spersonalizowany plan emerytalny uwzględniający Twoje cele, możliwości i tolerancję ryzyka.
        """,
        "category": "Planowanie finansowe",
        "author": "Jan Kowalski",
        "published_at": "2025-01-10",
        "read_time": 10,
        "image_url": "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800"
    },
    {
        "id": "3",
        "slug": "jak-budowac-majatek-dlugoterminowo",
        "title": "Jak budować majątek długoterminowo",
        "excerpt": "Strategie i zasady, które pomogą Ci systematycznie budować bogactwo przez lata.",
        "content": """
## Filozofia długoterminowego budowania majątku

Budowanie majątku to maraton, nie sprint. Wymaga cierpliwości, dyscypliny i konsekwentnego działania przez wiele lat.

### Zasada "zapłać najpierw sobie"

Zanim wydasz pieniądze na bieżące potrzeby, odłóż stałą część dochodu na oszczędności i inwestycje. Automatyzacja tego procesu znacznie ułatwia budowanie nawyku.

### Procent składany - ósmy cud świata

Albert Einstein podobno nazwał procent składany ósmym cudem świata. Oto przykład:
- 10 000 PLN inwestowane z 7% roczną stopą zwrotu
- Po 10 latach: ~19 672 PLN
- Po 20 latach: ~38 697 PLN
- Po 30 latach: ~76 123 PLN

### Budżetowanie jako fundament

Nie możesz budować majątku, jeśli wydajesz więcej niż zarabiasz. Prowadzenie budżetu pozwala świadomie kontrolować finanse.

**Popularna zasada 50/30/20:**
- 50% na potrzeby (mieszkanie, jedzenie, transport)
- 30% na przyjemności
- 20% na oszczędności i spłatę długów

### Unikanie złych długów

Karty kredytowe z wysokim oprocentowaniem, kredyty konsumpcyjne na zbędne rzeczy - to wrogowie budowania majątku. Jedyne "dobre" długi to te, które generują wartość (np. hipoteka, kredyt na rozwój biznesu).

### Edukacja finansowa

Inwestuj nie tylko pieniądze, ale także czas w naukę o finansach. Czytaj książki, słuchaj podcastów, konsultuj się z ekspertami.

### Regularne przeglądy

Co kwartał przeglądaj swój plan finansowy i portfel inwestycyjny. Dostosowuj strategię do zmieniających się okoliczności życiowych.
        """,
        "category": "Budowanie majątku",
        "author": "Jan Kowalski",
        "published_at": "2025-01-15",
        "read_time": 7,
        "image_url": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800"
    },
    {
        "id": "4",
        "slug": "ochrona-majatku-przed-inflacja",
        "title": "Ochrona majątku przed inflacją",
        "excerpt": "Poznaj skuteczne metody ochrony swoich oszczędności przed erozją wartości pieniądza.",
        "content": """
## Inflacja - cichy złodziej oszczędności

Inflacja powoduje, że pieniądze tracą siłę nabywczą w czasie. To, co dzisiaj kosztuje 100 PLN, za 10 lat przy 5% inflacji będzie kosztować około 163 PLN.

### Jak inflacja wpływa na oszczędności?

Jeśli trzymasz pieniądze na koncie z oprocentowaniem 2%, a inflacja wynosi 5%, realnie tracisz 3% wartości rocznie.

### Strategie ochrony przed inflacją

**1. Inwestycje w akcje**
Historycznie akcje zapewniają zwroty przewyższające inflację w długim terminie. Firmy mogą podnosić ceny swoich produktów wraz z inflacją.

**2. Nieruchomości**
Ceny nieruchomości i czynsze zazwyczaj rosną wraz z inflacją. Inwestycja w mieszkanie na wynajem może być dobrą ochroną.

**3. Obligacje indeksowane inflacją**
Polskie obligacje skarbowe indeksowane inflacją (np. COI, EDO) oferują ochronę przed wzrostem cen.

**4. Złoto i metale szlachetne**
Tradycyjnie uważane za "bezpieczną przystań" w czasach wysokiej inflacji.

**5. Surowce**
Ceny surowców często rosną w okresach inflacyjnych.

### Dywersyfikacja jako klucz

Żadna pojedyncza strategia nie jest idealna. Kombinacja różnych klas aktywów zapewnia najlepszą ochronę.

### Unikaj gotówki i nisko oprocentowanych lokat

W środowisku wysokiej inflacji trzymanie dużych sum w gotówce lub na niskooprocentowanych lokatach to najpewniejszy sposób na utratę wartości.

### Konsultacja z doradcą

Profesjonalny doradca finansowy pomoże dobrać strategię antyinflacyjną odpowiednią do Twojej sytuacji.
        """,
        "category": "Planowanie finansowe",
        "author": "Jan Kowalski",
        "published_at": "2025-01-20",
        "read_time": 6,
        "image_url": "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800"
    },
    {
        "id": "5",
        "slug": "fundusze-inwestycyjne-przewodnik",
        "title": "Fundusze inwestycyjne - kompleksowy przewodnik",
        "excerpt": "Wszystko, co musisz wiedzieć o funduszach inwestycyjnych zanim zaczniesz inwestować.",
        "content": """
## Czym są fundusze inwestycyjne?

Fundusz inwestycyjny to forma zbiorowego inwestowania, gdzie pieniądze wielu inwestorów są łączone i zarządzane przez profesjonalistów.

### Rodzaje funduszy

**Fundusze akcyjne**
- Inwestują głównie w akcje
- Wyższe potencjalne zyski, ale i wyższe ryzyko
- Najlepsze dla długoterminowych inwestorów

**Fundusze obligacyjne**
- Inwestują w obligacje skarbowe i korporacyjne
- Niższe ryzyko, stabilniejsze zwroty
- Dobre dla konserwatywnych inwestorów

**Fundusze mieszane (zrównoważone)**
- Kombinacja akcji i obligacji
- Umiarkowane ryzyko i zwroty
- Dobry wybór dla początkujących

**Fundusze pieniężne**
- Inwestują w krótkoterminowe instrumenty dłużne
- Bardzo niskie ryzyko
- Alternatywa dla lokat bankowych

### ETF vs tradycyjne fundusze

**ETF (Exchange Traded Funds):**
- Notowane na giełdzie
- Niższe opłaty za zarządzanie
- Pasywnie śledzą indeks

**Tradycyjne fundusze:**
- Aktywnie zarządzane
- Wyższe opłaty
- Potencjał pokonania rynku

### Na co zwracać uwagę?

1. **Opłaty** - mogą znacząco wpłynąć na długoterminowe wyniki
2. **Historia wyników** - przeszłe wyniki nie gwarantują przyszłych
3. **Strategia inwestycyjna** - czy pasuje do Twoich celów?
4. **Doświadczenie zarządzających**

### Jak zacząć?

Określ swój cel inwestycyjny, horyzont czasowy i tolerancję ryzyka. Rozważ konsultację z doradcą finansowym przed podjęciem decyzji.
        """,
        "category": "Podstawy inwestowania",
        "author": "Jan Kowalski",
        "published_at": "2025-01-25",
        "read_time": 9,
        "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    }
]


# ==================== ROUTES ====================

@api_router.get("/")
async def root():
    return {"message": "Wealth Advisor API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


# ==================== CONTACT ROUTES ====================

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate):
    contact_dict = input.model_dump()
    contact_obj = ContactMessage(**contact_dict)
    doc = contact_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)
    return contact_obj


@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    messages = await db.contact_messages.find({}, {"_id": 0}).to_list(1000)
    for msg in messages:
        if isinstance(msg['created_at'], str):
            msg['created_at'] = datetime.fromisoformat(msg['created_at'])
    return messages


# ==================== BOOKING ROUTES ====================

@api_router.post("/bookings", response_model=BookingRequest)
async def create_booking(input: BookingRequestCreate):
    booking_dict = input.model_dump()
    booking_obj = BookingRequest(**booking_dict)
    doc = booking_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.bookings.insert_one(doc)
    return booking_obj


@api_router.get("/bookings", response_model=List[BookingRequest])
async def get_bookings():
    bookings = await db.bookings.find({}, {"_id": 0}).to_list(1000)
    for booking in bookings:
        if isinstance(booking['created_at'], str):
            booking['created_at'] = datetime.fromisoformat(booking['created_at'])
    return bookings


@api_router.get("/bookings/available-slots")
async def get_available_slots(date: str):
    """Get available time slots for a specific date"""
    # Define business hours (9 AM - 5 PM)
    all_slots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]
    
    # Get existing bookings for the date
    existing_bookings = await db.bookings.find(
        {"preferred_date": date, "status": {"$ne": "cancelled"}},
        {"_id": 0, "preferred_time": 1}
    ).to_list(100)
    
    booked_times = [b["preferred_time"] for b in existing_bookings]
    
    # Create slots with availability
    slots = []
    for time in all_slots:
        slots.append({
            "time": time,
            "available": time not in booked_times
        })
    
    return {"date": date, "slots": slots}


# ==================== BLOG ROUTES ====================

@api_router.get("/blog/articles", response_model=List[BlogArticle])
async def get_blog_articles(category: Optional[str] = None):
    """Get all blog articles, optionally filtered by category"""
    articles = BLOG_ARTICLES
    if category:
        articles = [a for a in articles if a["category"].lower() == category.lower()]
    return articles


@api_router.get("/blog/articles/{slug}", response_model=BlogArticle)
async def get_blog_article(slug: str):
    """Get a single blog article by slug"""
    for article in BLOG_ARTICLES:
        if article["slug"] == slug:
            return article
    raise HTTPException(status_code=404, detail="Article not found")


@api_router.get("/blog/categories")
async def get_blog_categories():
    """Get all unique blog categories"""
    categories = list(set(a["category"] for a in BLOG_ARTICLES))
    return {"categories": categories}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
