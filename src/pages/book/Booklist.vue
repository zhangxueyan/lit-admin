<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="title"
      label="书名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="date"
      label="出版日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="作者"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>

    <!-- 操作编辑和删除按钮 -->
    <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleAdd(scope.$index,scope.row)">添加</el-button>
        </template>
    </el-table-column>

    <!-- add的弹窗 -->
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>


  </el-table>
</template>

<script>
import { books } from "../../mock"
export default {
  data () {
    return {
      msg: 'booklist',
      tableData:books.list,
      dialogVisible: false
    }
  },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('确认删除该记录吗?', '提示', {type: 'warning'}).then(() => {
         this.tableData.splice(index,1)
        }).catch(() => {
        });
      },
      handleAdd(index, row) {
        console.log(index, row);
        this.dialogVisible=true
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
      }
    }
}

console.log(books)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-table th>.cell{
  text-align: center;
 }
</style>
