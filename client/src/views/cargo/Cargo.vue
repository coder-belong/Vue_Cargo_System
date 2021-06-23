<template>
    <div class="dashboard-container">
        <el-card class="box-card">
            <el-row :gutter="10">
                <el-col :span="12">
                    <el-input placeholder="查询货物" v-model="searchInput">
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                            @click="searchClick"
                        ></el-button>
                    </el-input>
                </el-col>

                <el-col :span="4">
                    <el-button type="primary" @click="addUserClick"
                        >添加货物</el-button
                    >
                </el-col>
            </el-row>

            <el-table :data="cargo_Data" style="width: 100%" border>
                <el-table-column type="index" width="50" label="#">
                </el-table-column>
                <el-table-column prop="cargo_name" label="货物名称" width="180">
                </el-table-column>
                <el-table-column
                    prop="cargo_price"
                    label="货物单价（元）"
                    width="180"
                >
                </el-table-column>
                <el-table-column
                    prop="cargo_count"
                    label="货物数量（个）"
                    width="180"
                >
                </el-table-column>
                <el-table-column prop="cargo_time" label="更新时间" width="180">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-tooltip
                            effect="dark"
                            content="编辑"
                            placement="top-start"
                        >
                            <el-button
                                icon="el-icon-edit"
                                circle
                                size="mini"
                                type="primary"
                                @click="handleEdit(scope.row)"
                            >
                            </el-button>
                        </el-tooltip>

                        <el-tooltip
                            effect="dark"
                            content="删除"
                            placement="top-start"
                        >
                            <el-button
                                icon="el-icon-delete"
                                circle
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.row)"
                            ></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                :current-page="1"
                :page-sizes="[17, 26, 39]"
                :page-size="17"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalData"
                background
            >
            </el-pagination>
        </el-card>

        <!-- 删除货物展示的对话框 -->
        <delete-dialog
            ref="deleteDialog"
            :cargoID="currentID"
            @updateCargo="updateCargo"
        />

        <!-- 添加货物展示的对话框 -->
        <add-dialog ref="addDialog" @updateCargo="updateCargo" />

        <!-- 编辑货物展示的对话框 -->
        <edit-dialog
            @updateCargo="updateCargo"
            ref="editDialog"
            :cargoID="currentID"
        />
    </div>
</template>

<script>
import DeleteDialog from '././Children/DeleteDialog'
import AddDialog from '././Children/AddDialog'
import EditDialog from '././Children/EditDialog'

import {
    findCargo_by_key,
    findCargo,
    findCargo_by_id
} from '../../api/cargo/find_cargo'

let dateFormat = require('dateformat');

export default {
    name: 'Dashboard',
    components: {
        DeleteDialog,
        AddDialog,
        EditDialog
    },
    data() {
        return {
            searchInput: '',  // 查询表单的双向绑定
            cargo_Data: [],  // 表格数据
            currentID: 1,  // 存储当前操作的ID
            totalData: 0,
        }
    },
    filters: {
        finalDate(date) {
            return dateFormat(date, 'yyy-mm-dd')
        }
    },
    mounted() {
        this._findCargo()
    },
    methods: {
        // 编辑按钮的点击
        async handleEdit(row) {
            this.currentID = row.id
            // 根据id查询用户信息
            let { data, meta } = await findCargo_by_id(this.currentID)
            this.$refs.editDialog.dialogVisible = !this.$refs.editDialog.dialogVisible
            this.$refs.editDialog.form = data
        },

        // 删除图标的点击处理
        handleDelete(row) {
            this.currentID = row.id
            this.$refs.deleteDialog.dialogVisible = !this.$refs.deleteDialog.dialogVisible
        },

        // 添加货物按钮的点击
        addUserClick() {
            this.$refs.addDialog.dialogVisible = !this.$refs.addDialog.dialogVisible
        },

        // 搜索按钮的点击
        async searchClick() {
            let { data, meta } = await findCargo_by_key(this.searchInput)
            data.forEach(item => {
                item.cargo_time = dateFormat(item.cargo_time, 'yyyy-mm-dd hh:mm:ss')
            })
            this.cargo_Data = data
        },

        // 更新货物数据
        updateCargo() {
            this._findCargo()
        },


        // -------------------- 网络请求相关 -----------------------
        // 查询货物
        async _findCargo() {
            let { data, meta } = await findCargo()
            data.forEach(item => {
                item.cargo_time = dateFormat(item.cargo_time, 'yyyy-mm-dd hh:mm:ss')
            })
            this.cargo_Data = data
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
