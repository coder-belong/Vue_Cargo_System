<template>
    <div class="dashboard-container">
        <el-card class="box-card">
            <el-row :gutter="10">
                <el-col :span="12">
                    <el-input placeholder="查询设备" v-model="searchInput">
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                            @click="searchClick"
                        ></el-button>
                    </el-input>
                </el-col>

                <el-col :span="4">
                    <el-button type="primary" @click="addFacilityClick"
                        >添加设备</el-button
                    >
                </el-col>
            </el-row>

            <el-table :data="facility_Data" style="width: 100%" border>
                <el-table-column type="index" width="50" label="#">
                </el-table-column>
                <el-table-column
                    label="设备名称"
                    width="180"
                >
                    <template slot-scope="scope">
                        <div>
                            <el-tag>{{
                                scope.row.facility_name
                            }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="facility_principal"
                    label="设备负责人"
                    width="180"
                >
                </el-table-column>
                <el-table-column label="维修电话" width="180">
                    <template slot-scope="scope">
                        <div>
                            <el-tag type="success">{{
                                scope.row.facility_phone
                            }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="facility_place"
                    label="设备产地"
                    width="180"
                >
                </el-table-column>

                <el-table-column label="公司邮箱" width="180">
                    <template slot-scope="scope">
                        <div>
                            <el-tag type="danger">{{
                                scope.row.facility_email
                            }}</el-tag>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-tooltip
                            effect="dark"
                            content="编辑"
                            placement="top-start"
                        >
                            <el-button
                                round
                                size="mini"
                                type="primary"
                                @click="handleEdit(scope.row)"
                            >
                                <i class="el-icon-edit"></i>编辑
                            </el-button>
                        </el-tooltip>

                        <el-tooltip
                            effect="dark"
                            content="删除"
                            placement="top-start"
                        >
                            <el-button
                                round
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.row)"
                            >
                                <i class="el-icon-delete"></i>删除
                            </el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                :current-page="1"
                :page-sizes="[15, 18, 36]"
                :page-size="15"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalData"
                background
            >
            </el-pagination>
        </el-card>

        <!-- 删除设备展示的对话框 -->
        <delete-dialog
            ref="deleteDialog"
            :facilityID="currentID"
            @updateFacility="updateFacility"
        />

        <!-- 添加设备展示的对话框 -->
        <add-dialog ref="addDialog" @updateFacility="updateFacility" />

        <!-- 编辑设备展示的对话框 -->
        <edit-dialog
            @updateFacility="updateFacility"
            ref="editDialog"
            :facilityID="currentID"
        />
    </div>
</template>

<script>
import DeleteDialog from '././Children/DeleteDialog'
import AddDialog from '././Children/AddDialog'
import EditDialog from '././Children/EditDialog'

import {
    findFacility_by_key,
    findFacility,
    findFacility_by_id
} from '../../api/facility/find_facility'


export default {
    components: {
        DeleteDialog,
        AddDialog,
        EditDialog
    },
    data() {
        return {
            searchInput: '',  // 查询表单的双向绑定
            facility_Data: [],  // 表格数据
            currentID: 1,  // 存储当前操作的ID
            totalData: 0
        }
    },
    mounted() {
        this._findFacility()
    },
    methods: {

        // 编辑按钮的点击
        async handleEdit(row) {
            this.currentID = row.id
            // 根据id查询设备信息
            let { data, meta } = await findFacility_by_id(this.currentID)
            this.$refs.editDialog.dialogVisible = !this.$refs.editDialog.dialogVisible
            this.$refs.editDialog.form = data
        },

        // 删除图标的点击处理
        handleDelete(row) {
            this.currentID = row.id
            this.$refs.deleteDialog.dialogVisible = !this.$refs.deleteDialog.dialogVisible
        },

        // 添加设备按钮的点击
        addFacilityClick() {
            this.$refs.addDialog.dialogVisible = !this.$refs.addDialog.dialogVisible
        },

        // 搜索按钮的点击
        async searchClick() {
            let { data, meta } = await findFacility_by_key(this.searchInput)
            this.facility_Data = data
        },

        // 更新设备数据
        updateFacility() {
            this._findFacility()
        },


        // -------------------- 网络请求相关 -----------------------
        // 查询设备
        async _findFacility() {
            let { data, meta } = await findFacility()
            this.facility_Data = data
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
