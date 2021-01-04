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
      <span>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="该科成绩">
            <el-input v-model.number="form.Grade"></el-input>
          </el-form-item>
          <el-form-item label="取得学分">
            <el-input v-model.number="form.GetCredits"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="gradeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="Add"> 确 定 </el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        Grade: "",
        GetCredits: "",
        GradePoint: "",
        CreditGradePoint: "",
      },
      gradeDialogVisible: false,
      TableData: [],
    };
  },
  methods: {
    Add() {
      /*
       * 绩点计算规则
       * 如果该科成绩小于60分：绩点为 0
       * 如果该科成绩小于60分：
       *     绩点计算规则为：(该科成绩 - 50) /10
       */
      // 成绩
      this.TableData.Grade = this.form.Grade;
      // 学分
      this.TableData.GetCredits = this.form.GetCredits;
      // 绩点
      if (this.form.Grade < 60) {
        this.TableData.GradePoint = 0;
      } else {
        this.TableData.GradePoint = (this.item.Grade - 50) / 10;
      }
      // 学分绩点
      this.TableData.CreditGradePoint = this.item.GetCredits * this.item.GradePoint;
      // console.log(this.TableData);
      this.gradeDialogVisible = false;
    },
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