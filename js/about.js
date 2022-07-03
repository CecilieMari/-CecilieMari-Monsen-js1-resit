const reorder = () => {
    const frag = document.createDocumentFragment();
    const paragraf = document.querySelector(".about");
    const items = paragraf.querySelectorAll("p");
    const sortedList = [...items].sort((a, b) => {
        const c = a.textContent,
        d = b.textContent;
        return c < d ? -1 : c > d ? 1 : 0;
    });
    for (const item of sortedList) {
        frag.appendChild(item);
      }
      paragraf.appendChild(frag);

}

reorder()