<template>
    <el-dialog
        title="添加货物"
        :visible.sync="dialogVisible"
        width="68%"
        @close="cancel"
    >
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="货物名称" prop="cargo_name">
                <el-input
                    v-model="form.cargo_name"
                    placeholder="请输入货物名称"
                ></el-input>
            </el-form-item>

            <el-form-item label="货物数量" prop="cargo_count">
                <el-input
                    v-model="form.cargo_count"
                    placeholder="请输入数量"
                ></el-input>
            </el-form-item>

            <el-form-item label="货物价格" prop="cargo_price">
                <el-input
                    v-model="form.cargo_price"
                    placeholder="请输入价格"
                ></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="confirmAdd">添加货物</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { addCargo } from '../../../api/cargo/add_cargo'

export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                cargo_name: '',
                cargo_price: '',
                cargo_count: '',
            },
            rules: {
                cargo_name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 1, max: 15, message: '长度在 2 到 5 个数字之间', trigger: 'blur' }
                ],
                cargo_price: [
                    { required: true, message: '请输入价格', trigger: 'blur' },
                ],
                cargo_count: [
                    { required: true, message: '请输入数量', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        // 确认添加按钮的点击
        confirmAdd() {
            this.$refs.form.validate(async isVerify => {
                if (!isVerify) {
                    return this.$message({
                        message: '请输入合法的表单',
                        type: 'error',
                        showClose: true,
                        center: true
                    });
                }
                // console.log(this.form);


                // 发送网络请求添加货物
                let { data, meta } = await addCargo(this.form)
                // console.log(data, meta);
                if (meta.status != 200) {
                    return this.$message({
                        message: '添加货物失败',
                        type: 'error',
                        showClose: true,
                        center: true
                    });
                }
                this.$message({
                    message: '添加货物成功',
                    type: 'success',
                    showClose: true,
                    center: true
                });

                // 1. 让父组件更新数据
                this.$emit('updateCargo')

                // 2. 关闭模态框
                this.dialogVisible = false
            })
        },

        // 关闭对话框后之后重置表单
        cancel() {
            this.dialogVisible = false
            this.$refs.form.resetFields()
        }
    }
};
</script>

<style scoped>
</style>
