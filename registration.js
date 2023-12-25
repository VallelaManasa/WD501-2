var form = document.getElementById('form');
            var tableBody = document.querySelector('#table tbody');
            form.addEventListener('submit',function(event){
                event.preventDefault();
                var name = document.getElementById('name').value;
                var email = document.getElementById('email').value;
                var password = document.getElementById('password').value;
                var dob = document.getElementById('dob').value;
                var checkbox = document.getElementById('checkbox').checked;
                localStorage.setItem("Name",name);
                localStorage.setItem("Email", email);
                localStorage.setItem("Password", password);
                localStorage.setItem("Dob", dob);
                localStorage.setItem("accept terms?", checkbox);
            var newRow = document.createElement('tr');
            newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>${dob}</td>
            <td>${checkbox ? 'Yes' : 'No'}</td>`;
            tableBody.appendChild(newRow);
            form.reset();
            });