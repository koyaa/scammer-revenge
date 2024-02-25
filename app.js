const {default: axios} = require("axios")

const url = "https://api.telegram.org/bot6905359644:AAHDyojIuKZY8e-sEmhbH15Wuw8Io3JLgGI/sendMessage?parse_mode=markdown&chat_id=5390618035&text=HALO%20ORANG%20MISKIN"

async function sendMessage() {
    try {
        while (true) {
            await axios.get(url)
                .then((response) => {
                    if (response.status == 200) {
                        console.log(response)
                    }
                })
        }
    } catch (error) {
        console.log("API down!")
        sendMessage();
    }
}

sendMessage();
