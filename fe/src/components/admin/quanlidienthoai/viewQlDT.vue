<template>
  <form>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Tên">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Hãng">
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Ngày sản xuất">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Màu sắc">
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Giá tiền">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Số lượng nhập">
      </div>
    </div>
    <br/>
    <div style="margin:auto;display:block; text-align: center">
      <button class="btn btn-primary" style="margin-right: 15px" type="submit">Submit form</button>
      <button class="btn btn-secondary" style="margin-right: 15px" type="submit">Search</button>
      <button class="btn btn-success" style="margin-right: 15px" type="submit">Import data</button>
      <button class="btn btn-light" style="margin-right: 15px" type="submit">Dowload template</button>
    </div>
  </form>

  <br/>
  <div style="display: flex; justify-content: center; align-items: center;">
    <table class="b-table">
      <thead>
      <tr>
        <th>Tên</th>
        <th>Hãng</th>
        <th>Ngày sản xuất</th>
        <th>Màu sắc</th>
        <th>Giá tiền</th>
        <th>Số lượng nhập</th>
        <th>ACtion</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Nam</td>
        <td>5000</td>
        <td>5000</td>
        <td>5000</td>
        <td>5000</td>
        <td>5000</td>
        <td>
          <button class="btn button1">Detail</button>
          <button class="btn button2">Delete</button>
          <button class="btn button3">Update</button>
        </td>
      </tr>
      <tr>
        <td>Nam</td>
        <td>5000</td>
        <td>5000</td>
        <td>5000</td>
        <td>5000</td>
        <td>5000</td>
        <td>
          <button class="btn button1">Detail</button>
          <button class="btn button2">Delete</button>
          <button class="btn button3">Update</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "viewQlDT"
}
</script>

<style scoped>
.b-table {
  border-collapse: collapse;
  margin: auto;
  display: block;
  text-align: center;
}

.b-table thead tr {
  background-color: #27aae1;
  color: #ffffff;
  text-align: center;
}

.b-table th,
.b-table td {
  border: 1px solid black;
  padding: 12px 15px;
}

.b-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.b-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.b-table tbody tr:last-of-type {
  border-bottom: 2px solid #27aae1;
}

.b-table tbody tr.active-row {
  font-weight: 700;
  color: #27aae1;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #27aae1;
  margin-right: 10px;
}

.button1:hover {
  background-color: #27aae1;
  color: white;
}

.button2 {
  background-color: white;
  color: black;
  border: 2px solid #ee162d;
  margin-right: 10px;
}

.button2:hover {
  background-color: #ee162d;
  color: white;
}
.button3 {
  background-color: white;
  color: black;
  border: 2px solid #42b983;
  margin-right: 10px;
}
.button3:hover {
  background-color: #42b983;
  color: white;
}
</style>