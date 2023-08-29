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
        <input type="text" class="form-control" placeholder="Giá tiền">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Chip">
      </div>
    </div>
    <br/>
    <div style="margin:auto;display:block; text-align: center">
      <button class="btn btn-primary" style="margin-right: 15px" @click="openModal" type="button">Add</button>
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
        <th>STT</th>
        <th>Tên</th>
        <th>Hãng</th>
        <th>Chip</th>
        <th>Ngày sản xuất</th>
        <th>Màu sắc</th>
        <th>Giá tiền</th>
        <th>Số lượng nhập</th>
        <th>ACtion</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>Nam</td>
        <td>5000</td>
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
        <td>2</td>
        <td>Nam</td>
        <td>5000</td>
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

  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <form>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Tên">
          </div>
          <div class="col">
            <select type="text" class="form-control" placeholder="Hãng">
              <option>Iphone</option>
              <option>SamSung</option>
              <option>Oppp</option>
              <option>Nokia</option>
              <option>Redmi</option>
              <option>XiaoMi</option>
            </select>
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col">
            <input type="date" class="form-control" placeholder="Ngày sản xuất">
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
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Chip">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Mô tả">
          </div>
        </div>
        <br/>
        <div style="margin:auto; text-align: center; display: block">
          <button class="btn btn-primary" style="margin-right: 15px" type="submit">Add
          </button>
          <button class="btn btn-danger" type="button" @click="closeModal">Close
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewQlDT",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
}

</script>

<style scoped>
/*Table-view*/
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

/*button-view*/
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

/*modal-add*/
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>