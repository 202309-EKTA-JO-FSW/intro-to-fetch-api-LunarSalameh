// Please read the README.md to understand what to do. Happy Coding !

async function fetchUserData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let usersData = await response.json();
    let userObject = [
        {
            Name: "Lunar Salameh",
            Username: "Lunar",
            Email: "abc@gmail.com",
            address: {
                street: "Airport St.",
            },
            Phone: 797888822,
            Website: "Lunarwebsite.com",
            Company: "RE:CODED",
        },
        {
            Name: "Bashar Salameh",
            Username: "Bashar",
            Email: "cde@gmail.biz",
            address: {
                street: "Al-orodun St.",
            },
            Phone: 797886662,
            Website: "Basharwebsite.com",
            Company: "PWC",
        },
        {
            Name: "Sewar Salameh",
            Username: "Sewar",
            Email: "fgh@gmail.com",
            address: {
                street: "madina St.",
            },
            Phone: 797899922,
            Website: "Sewarwebsite.com",
            Company: "GOMYCODE",
        }
    ];
    const modifyUserObject = userObject.map((users) => {
        Name: users.Name;
        Username: users.Username;
        Email: users.Email;
        address: users.address.street;
        Phone: users.Phone;
        Website: users.Website;
        Company: users.Company;
        return users;
    })

    console.log(modifyUserObject);

    try {
        const userModifyFilter = modifyUserObject.filter((user) => { return user.Email.slice(-4) == ".biz" })
        console.log(userModifyFilter);

        const dataSortedAlphabetically = modifyUserObject.sort((a, b) => a.Name.localeCompare(b.Name));
        console.log(dataSortedAlphabetically);
    }

    catch {
        console.log("Error");
    }
}

fetchUserData();