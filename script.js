document.getElementById('leaveForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('empName').value;
  const id = document.getElementById('empId').value;
  const leaveType = document.getElementById('leaveType').value;
  const fromDate = document.getElementById('fromDate').value;
  const toDate = document.getElementById('toDate').value;

  const table = document.getElementById('leaveTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${id}</td>
    <td>${leaveType}</td>
    <td>${fromDate}</td>
    <td>${toDate}</td>
  `;

  alert("Leave application submitted successfully!");

  // Reset form
  document.getElementById('leaveForm').reset();
});
