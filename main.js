document.addEventListener('DOMContentLoaded', () => {
    let mainCon = document.querySelector('#main-container');
    let filterCon = document.querySelector('.filter-container');
    let filter = document.querySelector('.filter');
    let inputCon = document.querySelector('.input-container');
    let todoCon = document.querySelector('.todo-container');
    let filterings = document.querySelectorAll('.filterings');
    let clrComplete = document.querySelector('.clr-complete');
    let UItoggle = document.querySelector('.color-toggle');
    let desktopImg = document.querySelector('.bg-desktop');
    let mobileImg = document.querySelector('.bg-mobile');
    let footer = document.querySelector('.footer');
    let itemsNo = document.querySelector('.no-of-items');
    let CBox = document.querySelectorAll('.check-box');
    let all = [];
    let active = [];
    let completed = [];
    let draggedElement = null; // Global variable for the dragged element

    UItoggle.addEventListener('click', () => {
        UItoggle.src = (UItoggle.src.includes('moon')) ? dark() : light();
    });

    const dark = () => {
        desktopImg.src = 'bg-desktop-dark.jpg';
        mobileImg.src = 'bg-mobile-dark.jpg';
        mainCon.style.background = 'hsl(235, 21%, 11%)';
        filterCon.style.background = 'hsl(235, 24%, 19%)';
        filterCon.style.boxShadow = 'none';
        filterCon.querySelector('.left-to-do').style.color = 'hsl(234, 11%, 52%)';
        clrComplete.style.color = 'hsl(234, 11%, 52%)';
        clrComplete.addEventListener('mouseover', () => {
            clrComplete.style.color = 'hsl(0, 0%, 98%)';
        });
        clrComplete.addEventListener('mouseout', () => {
            clrComplete.style.color = 'hsl(234, 11%, 52%)';
        });
        filter.style.background = 'hsl(235, 24%, 19%)';
        filter.style.boxShadow = 'none';
        filterings.forEach(filtering => {
            filtering.style.color = (filtering.className.includes('current')) ? 'hsl(220, 98%, 61%)' : 'hsl(234, 11%, 52%)';
            filtering.addEventListener('mouseover', () => {
                filtering.style.color = (filtering.className.includes('current')) ? 'hsl(220, 98%, 61%)' : 'hsl(0, 0%, 98%)';
            });
            filtering.addEventListener('mouseout', () => {
                filtering.style.color = (filtering.className.includes('current')) ? 'hsl(220, 98%, 61%)' : 'hsl(234, 11%, 52%)';
            });
        });
        inputCon.style.background = 'hsl(235, 24%, 19%)';
        inputCon.style.boxShadow = 'none';
        inputCon.querySelector('.input-field').style.color = 'hsl(234, 11%, 52%)';
        CBox.forEach(box => {
            box.querySelector('.check-box-bg').style.background = 'hsl(235, 24%, 19%)';
            box.querySelector('.check-box-border').style.background = 'hsl(237, 14%, 26%)';
            box.addEventListener('mouseover', () => {
                box.querySelector('.check-box-border').style.background = 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
            });
            box.addEventListener('mouseout', () => {
                box.querySelector('.check-box-border').style.background = 'hsl(237, 14%, 26%)';
            });
        });
        todoCon.style.background = 'hsl(235, 24%, 19%)';
        todoCon.querySelectorAll('.todo-main').forEach(value => {
            value.style.background = 'hsl(235, 24%, 19%)';
            value.style.borderColor = 'hsl(233, 14%, 35%)';
        });
        todoCon.querySelectorAll('.todo').forEach(value => {
            value.style.color = (completed.includes(value.innerHTML)) ? 'hsl(237, 14%, 26%)' : 'hsl(0, 0%, 85%)';
        });
        footer.style.color = 'hsl(233, 14%, 35%)';
        return 'icon-sun.svg';
    };

    const light = () => {
        desktopImg.src = 'bg-desktop-light.jpg';
        mobileImg.src = 'bg-mobile-light.jpg';
        mainCon.style.background = 'hsl(0, 0%, 98%)';
        filterCon.style.background = 'hsl(0, 0%, 100%)';
        filterCon.style.boxShadow = '1px 5px 7px hsla(236, 9%, 61%, .3)';
        filterCon.querySelector('.left-to-do').style.color = 'hsl(236, 9%, 61%)';
        clrComplete.style.color = 'hsl(236, 9%, 61%)';
        clrComplete.addEventListener('mouseover', () => {
            clrComplete.style.color = 'hsl(235, 19%, 35%)';
        });
        clrComplete.addEventListener('mouseout', () => {
            clrComplete.style.color = 'hsl(236, 9%, 61%)';
        });
        filter.style.background = 'hsl(0, 0%, 100%)';
        filter.style.boxShadow = '1px 5px 7px hsla(236, 9%, 61%, .3)';
        filterings.forEach(filtering => {
            filtering.style.color = (filtering.className.includes('current')) ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)';
            filtering.addEventListener('mouseover', () => {
                filtering.style.color = (filtering.className.includes('current')) ? 'hsl(220, 98%, 61%)' : 'hsl(235, 19%, 35%)';
            });
            filtering.addEventListener('mouseout', () => {
                filtering.style.color = (filtering.className.includes('current')) ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)';
            });
        });
        inputCon.style.background = 'hsl(0, 0%, 100%)';
        inputCon.style.boxShadow = '1px 5px 7px hsla(236, 9%, 61%, .3)';
        inputCon.querySelector('.input-field').style.color = 'hsl(236, 9%, 61%)';
        CBox.forEach(box => {
            box.querySelector('.check-box-bg').style.background = 'hsl(0, 0%, 100%)';
            box.querySelector('.check-box-border').style.background = 'hsl(236, 33%, 92%)';
            box.addEventListener('mouseover', () => {
                box.querySelector('.check-box-border').style.background = 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
            });
            box.addEventListener('mouseout', () => {
                box.querySelector('.check-box-border').style.background = 'hsl(236, 33%, 92%)';
            });
        });
        todoCon.style.background = 'hsl(0, 0%, 100%)';
        todoCon.querySelectorAll('.todo-main').forEach(value => {
            value.style.background = 'hsl(0, 0%, 100%)';
            value.style.borderColor = 'hsl(233, 11%, 84%)';
        });
        todoCon.querySelectorAll('.todo').forEach(value => {
            value.style.color = (completed.includes(value.innerHTML)) ? 'hsl(236, 33%, 92%)' : 'hsl(235, 19%, 35%)';
        });
        footer.style.color = 'hsl(236, 9%, 61%)';
        return 'icon-moon.svg';
    };

    inputCon.querySelector('.check-box').addEventListener('click', () => {
        let inputField = inputCon.querySelector('.input-field');
        let value = inputField.value.trim();
        if (value === '' || all.includes(value)) {
            inputField.value = '';
            return;
        }
        inputField.value = '';
        itemsNo.innerHTML = Number(itemsNo.innerHTML) + 1;

        let todoMain = document.createElement('div');
        todoMain.className = 'todo-main';
        todoMain.dataset.id = `todo-${Date.now()}`; // Assign a unique data-id
        todoMain.style.background = todoCon.style.background;
        todoMain.style.borderColor = (UItoggle.src.includes('moon')) ? 'hsl(233, 11%, 84%)' : 'hsl(233, 14%, 35%)';
        todoMain.style.display = (filterCon.querySelector('.filter-completed').className.includes('current')) ? 'none' : 'block';
        todoMain.draggable = true;
        todoMain.style.display = 'flex';
        todoMain.style.justifyContent = 'center';
        todoMain.style.alignItems = 'center';

        // Drag-and-drop functionality
        todoMain.addEventListener('dragstart', (event) => {
            draggedElement = event.target.closest('.todo-main');
            event.dataTransfer.setData('text/plain', draggedElement.dataset.id);
            event.dataTransfer.effectAllowed = 'move';
        });

        todoMain.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        });

        todoMain.addEventListener('drop', (event) => {
            event.preventDefault();
            const draggedId = event.dataTransfer.getData('text/plain');
            const draggedElement = document.querySelector(`[data-id="${draggedId}"]`);
            const targetElement = event.target.closest('.todo-main');
            if (draggedElement && draggedElement !== targetElement) {
                const draggedIndex = Array.from(todoCon.children).indexOf(draggedElement);
                const targetIndex = Array.from(todoCon.children).indexOf(targetElement);
                if (draggedIndex < targetIndex) {
                    todoCon.insertBefore(draggedElement, targetElement.nextSibling);
                } else {
                    todoCon.insertBefore(draggedElement, targetElement);
                }
            }
        });

        let subTodo = document.createElement('div');
        subTodo.className = 'sub-todo';
        let subTodoMain = document.createElement('div');
        subTodoMain.className = 'sub-todo-main';
        let checkBox = document.createElement('div');
        checkBox.className = 'check-box';
        checkBox.addEventListener('click', () => {
            if (active.includes(value)) {
                active = active.filter(val => val !== value);
                completed.push(value);
                todo.style.textDecoration = 'line-through';
                todo.style.color = (UItoggle.src.includes('moon')) ? 'hsl(236, 33%, 92%)' : 'hsl(237, 14%, 26%)';
                itemsNo.innerHTML = (itemsNo.innerHTML > 0) ? Number(itemsNo.innerHTML) - 1 : 0;
                checked.style.display = 'flex';
                checkBg.style.background = 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
                checkBorder.style.background = 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
            } else {
                completed = completed.filter(val => val !== value);
                active.push(value);
                todo.style.textDecoration = 'none';
                todo.style.color = (UItoggle.src.includes('moon')) ? 'hsl(235, 19%, 35%)' : 'hsl(0, 0%, 85%)';
                checked.style.display = 'none';
                checkBg.style.background = (UItoggle.src.includes('moon')) ? 'hsl(0, 0%, 100%)' : 'hsl(235, 24%, 19%)';
                checkBorder.style.background = (UItoggle.src.includes('moon')) ? 'hsl(236, 33%, 92%)' : 'hsl(237, 14%, 26%)';
                itemsNo.innerHTML = Number(itemsNo.innerHTML) + 1;
            }
        });

        let checkBorder = document.createElement('div');
        checkBorder.className = 'check-box-border';
        checkBorder.style.background = (UItoggle.src.includes('moon')) ? 'hsl(236, 33%, 92%)' : 'hsl(237, 14%, 26%)';
        let checkBg = document.createElement('div');
        checkBg.className = 'check-box-bg';
        checkBg.style.background = (UItoggle.src.includes('moon')) ? 'hsl(0, 0%, 100%)' : 'hsl(235, 24%, 19%)';
        let checked = document.createElement('img');
        checked.src = 'icon-check.svg';
        checked.className = 'checked';
        checked.style.display = 'none';
        let todo = document.createElement('p');
        todo.className = 'todo';
        todo.innerHTML = value;
        todo.style.color = (UItoggle.src.includes('moon')) ? 'hsl(235, 19%, 35%)' : 'hsl(0, 0%, 85%)';
        let rmTodo = document.createElement('img');
        rmTodo.className = 'rm-todo';
        rmTodo.src = 'icon-cross.svg';
        rmTodo.addEventListener('click', () => {
            todoMain.remove();
            all = all.filter(val => val !== value);
            active = active.filter(val => val !== value);
            completed = completed.filter(val => val !== value);
            itemsNo.innerHTML = (itemsNo.innerHTML > 0) ? Number(itemsNo.innerHTML) - 1 : 0;
        });

        checkBg.appendChild(checked);
        checkBox.appendChild(checkBorder);
        checkBox.appendChild(checkBg);
        subTodoMain.appendChild(checkBox);
        subTodoMain.appendChild(todo);
        subTodo.appendChild(subTodoMain);
        subTodo.appendChild(rmTodo);
        todoMain.appendChild(subTodo);
        todoCon.insertBefore(todoMain, todoCon.firstChild);
        all.push(value);
        active.push(value);
    });

    filterCon.querySelector('.clr-complete').addEventListener('click', () => {
        todoCon.querySelectorAll('.todo-main').forEach(value => {
            if (completed.includes(value.querySelector('.todo').innerHTML)) {
                todoCon.removeChild(value);
                completed = completed.filter(val => val !== value.querySelector('.todo').innerHTML);
                all = all.filter(val => val !== value.querySelector('.todo').innerHTML);
            }
        });
    });

    filterCon.querySelector('.filter-all').addEventListener('click', () => {
        todoCon.querySelectorAll('.todo-main').forEach(value => {
            value.style.display = 'flex';
        });
        filterCon.querySelector('.filter-active').className = 'filter-active filterings';
        filterCon.querySelector('.filter-all').className = 'filter-all filterings current';
        filterCon.querySelector('.filter-completed').className = 'filter-completed filterings';
        filterings.forEach(filtering => {
            filtering.style.color = (filtering.className.includes('current')) ? 'hsl(220, 98%, 61%)' : (UItoggle.src.includes('moon')) ? 'hsl(236, 9%, 61%)' : 'hsl(234, 11%, 52%)';
        });
    });

    filterCon.querySelector('.filter-completed').addEventListener('click', () => {
        todoCon.querySelectorAll('.todo-main').forEach(value => {
            value.style.display = (completed.includes(value.querySelector('.todo').innerHTML)) ? 'flex' : 'none';
        });
        filterCon.querySelector('.filter-active').className = 'filter-active filterings';
        filterCon.querySelector('.filter-all').className = 'filter-all filterings';
        filterCon.querySelector('.filter-completed').className = 'filter-completed filterings current';
        filterings.forEach(filtering => {
            filtering.style.color = (filtering.className.includes('current')) ? 'hsl(220, 98%, 61%)' : (UItoggle.src.includes('moon')) ? 'hsl(236, 9%, 61%)' : 'hsl(234, 11%, 52%)';
        });
    });

    filterCon.querySelector('.filter-active').addEventListener('click', () => {
        todoCon.querySelectorAll('.todo-main').forEach(value => {
            value.style.display = (active.includes(value.querySelector('.todo').innerHTML)) ? 'flex' : 'none';
        });
        filterCon.querySelector('.filter-active').className = 'filter-active filterings current';
        filterCon.querySelector('.filter-all').className = 'filter-all filterings';
        filterCon.querySelector('.filter-completed').className = 'filter-completed filterings';
        filterings.forEach(filtering => {
            filtering.style.color = (filtering.className.includes('current')) ? 'hsl(220, 98%, 61%)' : (UItoggle.src.includes('moon')) ? 'hsl(236, 9%, 61%)' : 'hsl(234, 11%, 52%)';
        });
    });
});