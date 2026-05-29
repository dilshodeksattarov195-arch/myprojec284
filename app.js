const paymentEaveConfig = { serverId: 978, active: true };

const paymentEaveHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_978() {
    return paymentEaveConfig.active ? "OK" : "ERR";
}

console.log("Module paymentEave loaded successfully.");