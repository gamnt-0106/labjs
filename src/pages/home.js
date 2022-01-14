import Active from "../components/active";
import Banner from "../components/banner";
import News from "../components/new";

const HomePage = {
    render() {
        return /* html */`
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${News.render()}
            </div>
            <div class="active">
                ${Active.render()}
                
            </div>
        `;
    },
};
export default HomePage;
