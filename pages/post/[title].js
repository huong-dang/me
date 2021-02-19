import NavMenu from "../../components/NavMenu";
import Heading from "../../components/Heading";
import { useRouter } from "next/router";

export default function Post() {
    const router = useRouter();
    const { title } = router.query;
    return (
        <div>
            <NavMenu />
            <Heading text={title} />
        </div>
    );
}
