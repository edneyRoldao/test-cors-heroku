function HostAPI() {}

HostAPI.prototype.getHosts = (callback) => {
    setTimeout(() => {
        callback('http://google.com')        
    }, 1000);
}

module.exports = () => {
    return HostAPI;
};
