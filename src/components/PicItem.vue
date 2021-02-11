<template>
  <div class="market-box">
    <a class="course-card">
      <div class="card-dynamic-hover">
        <div class="card-box">
          <div class="card-bg bg-market-4"></div>
          <div class="card-wrapper">
            <div class="card-content">
              <h3>敏捷软件工程</h3>
              <div class="scholl-author">
                <span>
                  <i class="icon-classroom-user"></i>
                  华为云教育
                </span>
                <span class="scholl-name">
                  <i class="icon-classroom-school"></i>
                  华为云课堂
                </span>
              </div>
            </div>
            <div class="card-description">
              敏捷软件工程课程通过深入浅出的讲解，从棉花糖挑战认识现代软件工程的敏捷开发，帮助企业快速进行敏捷转型。
              本课程结合高校实际教学场景，从棉花糖挑战赛这个游戏，引出对现代软件工程的认识，从而引出敏捷及scrum开发的相关概念。
              紧接着通过一个典型项目，分4个阶段分别就项目立项、产品规划、技术准备和Sprint开发进行了详细的介绍。结合实践项目，搭配软件开发云，帮助学生了解整个软件开发的开发过程。
              从需求管理，项目管理，到代码开发、测试、代码托管、代码质量检查、编译构建、发布、部署、流水线等方面，了解敏捷开发的整体流程，为学生毕业后进入企业工作，提前做技术储备工作。
            </div>
            <p>
              <i class="icon-classroom-car"></i>
              <span class="buy-number">10</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.card-box {
  border-radius: 12px;
}
.market-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
a {
  text-decoration: none;
  color: #000;
}
.course-card {
  width: 284px;
  margin: 8px;
  border: 1px solid #f7f8fa;
  box-shadow: 0 4px 16px 0 rgba(124, 142, 227, 0.12);
  border-radius: 12px;
  display: inline-block;
  cursor: pointer;
}
.course-card:hover {
  transform: translatey(-10px);
}
.card-dynamic-hover {
  border: 1px solid #f7f8fa !important;
  box-shadow: 0 4px 16px 0 rgba(124, 142, 227, 0.12) !important;
}
.card-box .card-bg {
  width: 100%;
  height: 155px;
  border-radius: 12px 12px 0 0;
  background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/res_bg.20f2fae04fdd4dbf1c80.png);
  background-position-x: 0;
  background-repeat: no-repeat;
}
.bg-market-4 {
  background-position-y: -465px;
}
.card-wrapper {
  padding: 0 20px;
}
.card-content {
  height: 56px;
  width: 100%;
  margin-bottom: 8px;
}
h3 {
  width: 100%;
  font-size: 16px;
  color: #293040;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 700;
}
.scholl-author {
  margin-top: 8px;
  color: #959eb2;
  font-size: 12px;
}
.scholl-name {
  margin-left: 10px;
}
.card-box .card-description {
  height: 48px;
  line-height: 24px;
  width: 100%;
  font-size: 14px;
  color: #5e6678;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.5px;
  word-break: break-all;
}
.buy-number {
  margin: 0 16px 0 4px;
  font-size: 14px;
  color: #959eb2;
}

.icon-classroom-user,
.icon-classroom-school,
.icon-classroom-car {
  background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/classroom.sprite.a8c4b583317a1934d9f5.png?1597026622102);
  width: 16px;
  height: 16px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
}
.icon-classroom-school {
  background-position: -240px -468px;
}
.icon-classroom-user {
  background-position: -508px -192px;
}
.icon-classroom-car {
  background-position: -437px -440px;
}
</style>