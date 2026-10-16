# Vue 2 移动端电商商城

基于 Vue 2 + Vant 开发的移动端电商商城前端项目。

## 项目介绍

本项目是一个基于 Vue 2 开发的移动端电商商城前端，围绕用户购物流程，实现了商品浏览、分类查询、商品搜索、商品详情、购物车管理、订单结算及个人中心等功能。

项目采用 Vue Router 管理页面导航，Vuex 集中管理用户和购物车状态，Vant 构建移动端交互界面，并通过 Axios 与后端接口进行数据交互。

**个人负责内容：移动端页面开发、购物业务交互、Vuex 状态管理、组件封装及后端 API 对接。**

## 技术栈

- Vue 2
- Vue Router
- Vuex
- Vant
- Axios
- JavaScript
- Less
- LocalStorage

## 项目预览

建议在此展示项目实际截图：

- 商城首页
- <img width="602" height="1329" alt="image" src="https://github.com/user-attachments/assets/3f259e9c-213d-4af0-a8e8-4b257cac531a" />

- 商品分类与搜索页面
- <img width="748" height="1328" alt="image" src="https://github.com/user-attachments/assets/20325122-3801-49b5-8e12-b2dd74f6d324" />
<img width="749" height="434" alt="image" src="https://github.com/user-attachments/assets/b55b05d2-78ef-4244-8a80-8ba8ce697e2d" />

- 商品详情页面
- <img width="751" height="1326" alt="image" src="https://github.com/user-attachments/assets/dfbe7f92-f7b1-42fa-82bc-672473ad8ef1" />

- 购物车页面
- <img width="752" height="1331" alt="image" src="https://github.com/user-attachments/assets/90b81e45-672b-4d4d-8928-1bab52123dda" />
- 订单结算页面
- <img width="753" height="1331" alt="image" src="https://github.com/user-attachments/assets/0d80b0a4-6308-4dc2-b11b-efab451fdcba" />


## 核心功能

### 商品展示与搜索

- 实现商城首页商品展示及轮播图。
- 支持商品分类浏览、关键词搜索和搜索历史记录。
- 实现商品列表查询、分页加载及商品详情展示。
- 支持商品评价查看及商品规格选择。

### 购物车管理

- 支持将商品加入购物车。
- 实现购物车商品数量增减、勾选、全选及删除。
- 根据商品勾选状态和数量计算结算金额。
- 实现商品详情页与购物车页面之间的状态同步。

### 用户与订单管理

- 实现手机号验证码登录。
- 使用 Token 管理用户登录状态。
- 支持收货地址展示、订单确认与提交。
- 实现个人订单列表展示。

## 前端技术实现

### 1. Vuex 购物车状态管理

使用 Vuex 对购物车商品数据及用户状态进行集中管理。

通过统一的状态更新逻辑处理商品加入购物车、数量调整、商品勾选及删除等操作，实现商品详情页、购物车页面和结算页面之间的数据共享。

结合本地持久化机制，保留必要的用户状态和购物相关信息。

### 2. 购物车与订单业务逻辑

围绕电商购物流程，实现商品数量调整、购物车选择状态管理以及订单金额计算。

根据用户所选商品及数量动态更新结算信息，并在进入订单结算页面前检查用户登录状态。

### 3. Vue 2 组件封装与通信

将商品展示、商品数量选择等功能封装为可复用组件。

通过 Props 和自定义事件实现父子组件数据交互，并结合 `v-model` 与 `$emit('input')` 完成商品数量的双向同步。

减少重复页面逻辑，提高组件复用性。

### 4. Axios 请求封装与路由控制

对 Axios 请求进行统一封装，集中管理接口地址、请求参数、Token 携带及异常提示。

结合 Vue Router 路由守卫，对订单结算等需要登录的页面进行访问控制，并在未登录时引导用户完成登录。

### 5. 移动端页面开发

基于 Vant 实现导航栏、商品列表、轮播图、购物车操作和订单表单等移动端界面。

通过组件化页面结构与 Less 样式管理，实现适合移动端浏览和操作的商城交互体验。

## 项目目录

```text
src/
├── api/           # 接口请求
├── assets/        # 静态资源
├── components/    # 公共组件
├── router/        # 路由配置
├── store/         # Vuex状态管理
├── utils/         # 请求工具
└── views/         # 业务页面
```

## 项目说明

本项目为移动端电商商城的前端部分，主要围绕商品浏览、购物车状态管理、用户登录及订单业务进行开发。

项目通过已有后端 API 完成数据交互，主要展示 Vue 2 组件化开发、Vuex 状态管理、移动端页面构建及电商业务逻辑实现能力。
