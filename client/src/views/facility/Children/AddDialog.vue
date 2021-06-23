<template>
    <el-dialog
        title="添加设备"
        :visible.sync="dialogVisible"
        width="68%"
        @close="cancel"
    >
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="设备名称" prop="facility_name">
                <el-input
                    v-model="form.facility_name"
                    placeholder="请输入设备名称"
                ></el-input>
            </el-form-item>

            <el-form-item label="负责人" prop="facility_principal">
                <el-input
                    v-model="form.facility_principal"
                    placeholder="请输入负责人"
                ></el-input>
            </el-form-item>

            <el-form-item label="维修电话" prop="facility_phone">
                <el-input
                    v-model="form.facility_phone"
                    placeholder="请输入维修电话"
                ></el-input>
            </el-form-item>

            <el-form-item label="公司邮箱" prop="facility_email">
                <el-input
                    v-model="form.facility_email"
                    placeholder="请输入公司邮箱"
                ></el-input>
            </el-form-item>

            <el-form-item label="设备产地" prop="facility_place">
                <el-input
                    v-model="form.facility_place"
                    placeholder="请输入设备产地"
                ></el-input>
            </el-form-item>

        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="confirmAdd">添加设备</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { addFacility } from '../../../api/facility/add_facility'

export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                facility_name: '',
                facility_phone: '',
                facility_place: '',
                facility_email: '',
                facility_principal: '',
            },
            rules: {
                facility_name: [
                    { required: true, message: '请输入设备名', trigger: 'blur' },
                    { min: 1, max: 15, message: '长度在 2 到 5 个数字之间', trigger: 'blur' }
                ],
                facility_principal: [
                    { required: true, message: '请输入主负责人', trigger: 'blur' },
                ],
                facility_phone: [
                    { required: true, message: '请输入维修电话', trigger: 'blur' },
                ],
                facility_email: [
                    { required: true, message: '请输入公司邮箱', trigger: 'blur' },
                ],
                facility_place: [
                    { required: true, message: '请输入设备产地', trigger: 'blur' },
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
                

                // 发送网络请求添加设备
                let { data, meta } = await addFacility(this.form)
                // console.log(data, meta);
                if (meta.status != 200) {
                    return this.$message({
                        message: '添加设备失败',
                        type: 'error',
                        showClose: true,
                        center: true
                    });
                }
                this.$message({
                    message: '添加设备成功',
                    type: 'success',
                    showClose: true,
                    center: true
                });

                // 1. 让父组件更新数据
                this.$emit('updateFacility')

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
