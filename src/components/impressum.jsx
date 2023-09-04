function Impressum () {
    return (
        <div className="bg-teal-900">
            <div className="py-[6em] px-3 flex flex-col gap-5 max-w-screen-lg mx-auto h-screen">
                <h1 className="font-bold uppercase text-teal-300 text-3xl">Impressum</h1>
                <p>Tine Noetzel</p>
                <div className="">
                    <p className="flex gap-2"><span>Tel.:</span><a href="tel:+491727418268" className="underline hover:text-gray-500">+49 172 7418268</a> <br/></p>
                    <p className="flex gap-2"><span>Tel.:</span><a href="mailto:frans.dressler@gmx.de" className="underline hover:text-gray-500">frans.dressler@gmx.de</a> <br/></p>
                </div>
                <p>Haftungshinweis: Trotz sorgältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
                <p>Bilder: Homepage: Shifaaz shamoon, Roland Denes, Kontaktseite: Roland Denes (unsplash.com)</p>
            </div>
        </div>
    )
}

export default Impressum;