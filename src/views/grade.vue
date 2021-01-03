<template>
  <el-card>
    <el-table :data="TableData" border show-summary style="width: 100%">
      <el-table-column width="100" type="index" label="科目"></el-table-column>
      <el-table-column prop="Grade" label="该科成绩"></el-table-column>
      <el-table-column prop="GetCredits" label="取得学分"></el-table-column>
      <el-table-column prop="GradePoint" label="绩点"></el-table-column>
      <el-table-column prop="CreditGradePoint" label="学分绩点">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
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