<template>
  <el-table
      :data="tableData"
      height="400"
      border
      style="width: 100%">
    <el-table-column
        align="center"
        prop="date"
        label="日期"
        width="180">
    </el-table-column>
    <el-table-column
        align="center"
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        align="center"
        prop="address"
        label="地址">
      <template slot-scope="{row}">
        <template v-if="row.edit">
          <el-input v-model="row.address" class="edit-input" size="small" style="width: 90%;float: left;"/>
          <el-button
              class="cancel-btn"
              size="small"
              type="warning"
              @click="cancelEdit(row)"
              style="float: right;width: 65px"
          >
            cancel
          </el-button>
        </template>
        <span v-else>{{ row.address }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="操作" width="200">
      <template slot-scope="{row, $index}">
        <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
            style="float: left; width: 65px"
        >
          Ok
        </el-button>
        <el-button
            v-else
            style="float: left; width: 65px"
            type="primary"
            size="small"
            @click="row.edit=!row.edit;row.originalAddress = row.address"
        >
          Edit
        </el-button>
        <el-button
            v-if="row.status!='deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row,$index)"
            style="width: 65px; float: left"

        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'InlineEditTable',
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        edit: false,
        status: 'published'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        edit: false,
        status: 'published'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        edit: false,
        status: 'published'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        edit: false,
        status: 'published'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        edit: false,
        status: 'published'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        edit: false,
        status: 'published'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        edit: false,
        status: 'published'
      }, {
        date: '2020-05-07',
        name: 'test',
        address: '上海市普陀区金沙江路 1518 弄',
        edit: false,
        status: 'published'
      }]
    }
  },
  methods:
      {
        handleClick(row) {
          console.log(row);
        },
        cancelEdit(row) {
          row.address = row.originalAddress
          row.edit = false
          this.$message({
            message: 'The address has been restored to the original value',
            type: 'warning'
          })
        },
        confirmEdit(row) {
          row.edit = false
          row.originalAddress = row.address
          this.$message({
            message: 'The address has been edited',
            type: 'success'
          })
        },
        handleDelete(row, index) {
          this.$notify({
            title: 'Success',
            message: 'Delete Successfully',
            type: 'success',
            duration: 2000
          })
          this.tableData.splice(index, 1)
        },
      }
}
</script>


