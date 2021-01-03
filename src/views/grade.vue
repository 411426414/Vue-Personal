<template>
  <el-card>
    <el-button type="primary" @click="gradeDialogVisible = true">
      <h1>添加科目</h1>
    </el-button>
    <el-table :data="TableData" border show-summary style="width: 100%">
      <el-table-column width="100" type="index" label="科目"></el-table-column>
      <el-table-column prop="Grade" label="该科成绩"></el-table-column>
      <el-table-column prop="GetCredits" label="取得学分"></el-table-column>
      <el-table-column prop="GradePoint" label="绩点"></el-table-column>
      <el-table-column prop="CreditGradePoint" label="学分绩点">
      </el-table-column>
    </el-table>
    <el-dialog
      title="将每学科对应成绩及学分输入到表格中对应处"
      :visible.sync="gradeDialogVisible"
      width="50%"
    >
      <span> 提示 </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="gradeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="gradeDialogVisible = false">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      gradeDialogVisible: false,
      TableData: [
        {
          Grade: "",
          GetCredits: "",
          GradePoint: "",
          CreditGradePoint: "",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.el-card {
  width: 60%;
  margin: 0 auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}
</style>