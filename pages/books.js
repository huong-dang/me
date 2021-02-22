import NavMenu from "../components/NavMenu";
import Heading from "../components/Heading";
import CardHeader from "../components/CardHeader";
import Card from "../components/Card";

export default function Books() {
    return (
        <div className="page-container">
            <NavMenu />
            <Heading text="Book Recs 📚" />
            <Card>
                <CardHeader>hi</CardHeader>
            </Card>
        </div>
    );
}
