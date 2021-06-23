<template>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="68%" center>
        <span>
            <i
                class="el-icon-warning-outline"
                style="color:red; font-size=16px"
            ></i>
            此操作将永久删除该货物数据, 是否继续?
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirmDelete">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { deleteCargo } from '../../../api/cargo/delete_cargo'

export default {
    props: {
        cargoID: {
            type: Number,
            default: 0
        }
        
    },
    data() {
        return {
            dialogVisible: false
        }
    },
    methods: {
        // 对话框的确定按钮点击事件
        async confirmDelete() {
            let { data, meta } = await deleteCargo(this.cargoID)
            // console.log(data, meta);
            if (meta.status === 200) {
                this.$message({
                    message: '删除货物成功',
                    type: 'success',
                    showClose: true,
                    center: true
                });
            } else {
                this.$message({
                    message: '删除货物失败',
                    type: 'error',
                    showClose: true,
                    center: true
                });
            }

            // 1. 重新查询货物数据
            this.$emit('updateCargo')

            // 2. 关闭模态框
            this.dialogVisible = false

        },
    },
};
</script>

<style scoped>
</style>
