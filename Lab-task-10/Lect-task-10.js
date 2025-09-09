function loadData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {data: "Данные загружены"}
            const success = false;
            
            if (success) {
                resolve(data);

                new Promise((resolve, reject) => {
                    const editSuccess = true;

                    if (editSuccess) {
                        resolve(data);
                    } else {
                        reject(new Error("Ошибка обработки данных"));
                    }
                })
            } else {
                reject(new Error("Ошибка загрузки"));
            };
        }, 3000);
    });
};

const p = loadData();
p.then(result => {
    console.log("Состояние загрузки:", result);
    return result;
})
.catch(error => {console.error('Error: ', error)})
.then(newResult => {
    newResult.data += " - обработано"
    console.log("Состояние загрузки после обработки: ", newResult)
    return newResult;
})
.catch(error => {console.error('Error: ', error)})
.finally(() => {
    console.log("Операции завершены");
})