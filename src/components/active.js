import { active } from "../data";

const Active = {
    render() {
        return /* html */`
        <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">hoạt động sinh viên</h2>
        <div class="grid grid-cols-3 gap-8">
            ${active.map((post) => `
            <div class="border p-3">
                <img src="${post.img}" alt="" />
                <h3 class="my-3"><a href="" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        
        `;
    },
};
export default Active;
