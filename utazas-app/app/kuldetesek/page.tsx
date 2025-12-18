export default function KuldetesekPage() {
    const missions = [
        "Apollo 11 - holdra szallas (azthiszem)",
        "Voyager 1 - csillagközi tér",
        "Mars rover - mars kutatas",
    ];

    return (
        <div>
            <h1>Űrküldetések</h1>
            <ul>
                {missions.map((mission, index) => (
                    <li key={index}>{mission}</li>
                ))}
            </ul>
        </div>
    );
}