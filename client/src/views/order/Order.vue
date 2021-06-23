<template>
    <div class="dashboard-container">
        <el-card class="box-card">
            <el-row :gutter="10">
                <el-col :span="12">
                    <el-input placeholder="查询订单" v-model="searchInput">
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                            @click="searchClick"
                        ></el-button>
                    </el-input>
                </el-col>
            </el-row>

            <el-table :data="order_Data" style="width: 100%" border>
                <el-table-column type="index" width="50" label="#">
                </el-table-column>
                <el-table-column
                    prop="order_number"
                    label="订单编号"
                    width="210"
                >
                </el-table-column>
                <el-table-column label="是否付款" width="180">
                    <template slot-scope="scope">
                        <el-tag
                            :type="
                                scope.row.order_pay === '已付款'
                                    ? 'success'
                                    : 'danger'
                            "
                            >{{ scope.row.order_pay }}</el-tag
                        >
                    </template>
                </el-table-column>
                <el-table-column
                    prop="order_price"
                    label="订单价格 (元)"
                    width="180"
                >
                </el-table-column>
                <el-table-column label="是否发货" width="180">
                    <template slot-scope="scope">
                        <el-tag
                            :type="
                                scope.row.order_send === '是'
                                    ? 'success'
                                    : 'danger'
                            "
                            >{{ scope.row.order_send }}</el-tag
                        >
                    </template>
                </el-table-column>
                <el-table-column prop="order_time" label="下单时间" width="180">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-tooltip
                            effect="dark"
                            content="物流进度"
                            placement="top-start"
                        >
                            <el-button
                                round
                                size="mini"
                                type="success"
                                @click="handleAddress(scope.row)"
                            >
                                <i class="el-icon-s-promotion"></i>物流进度
                            </el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                :current-page="1"
                :page-sizes="[23, 30, 45]"
                :page-size="23"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalData"
                background
            >
            </el-pagination>
        </el-card>

        <address-dialog ref="AddressDialog" />
    </div>
</template>

<script>
import AddressDialog from './Children/AddressDialog'

import { findOrder, findOrder_key } from '../../api/order/order'

let dateFormat = require('dateformat');

export default {
    components: {
        AddressDialog
    },
    data() {
        return {
            searchInput: '',  // 查询表单的双向绑定
            order_Data: [],  // 表格数据
            currentID: 1,  // 存储当前操作的ID
            totalData: 0
        }
    },
    mounted() {
        this._findOrder()
    },
    methods: {
        // 搜索按钮的点击
        async searchClick() {
            let { data, meta } = await findOrder_key(this.searchInput)
            data.forEach(item => {
                item.order_time = dateFormat(item.order_time, 'yyyy-mm-dd hh:mm:ss')
            })
            this.order_Data = data
        },

        handleAddress() {
            this.$refs.AddressDialog.dialogVisible = true
        },


        // -------------------- 网络请求相关 -----------------------
        // 查询货物
        async _findOrder() {
            let { data, meta } = await findOrder()
            data.forEach(item => {
                item.order_time = dateFormat(item.order_time, 'yyyy-mm-dd hh:mm:ss')
            })
            this.order_Data = data
            this.totalData = data.length
        },
    }
}
</script>

<style scoped>
.dashboard-container {
    margin: 30px;
}
.dashboard-text {
    font-size: 30px;
    line-height: 46px;
}
.el-input {
    margin-bottom: 20px;
}
.el-pagination {
    margin-top: 35px;
}
.el-card {
    transition: all 0.5s linear;
}

.el-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 15px skyblue;
}

.el-table >>> th.gutter {
    display: table-cell !important;
}
</style>
