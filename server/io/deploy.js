const getDeploymentId = require('../services/getDeploymentId');

module.exports = function(socket) {
  socket.on('getDeploymentId', () => {
    const deploymentId = getDeploymentId();
    socket.emit('deploymentIdAssigned', deploymentId);
  });
}