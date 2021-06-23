<template>
    <el-dialog
        title="物流进度"
        :visible.sync="dialogVisible"
        width="68%"
        center
    >
        <el-timeline>
            <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp"
            >
                {{ activity.content }}
            </el-timeline-item>
        </el-timeline>

        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            activities: [{
                content: '已签收,感谢使用顺丰,期待再次为您服务',
                timestamp: '2021-06-12 20:46',
                color: '#0bbd87'
            }, {
                content: '[北京市]北京海淀育新小区营业点派件员 顺丰速运 95338正在为您派件',
                timestamp: '2021-06-10 20:46',
                color: '#0bbd87'
            }, {
                content: '快件到达 [北京海淀育新小区营业点]',
                timestamp: '2021-06-08 20:46',
                color: '#0bbd87'
            }, {
                content: '快件在[北京宝胜营业点]已装车,准备发往 [北京顺义集散中心]',
                timestamp: '2021-06-06 20:46',
                color: '#0bbd87'
            },
            {
                content: '您的订单将由HLA（北京海淀区清河中街店）门店安排发货。',
                timestamp: '2021-06-04 20:46',
                color: '#0bbd87'
            }, {
                content: '商品已经下单',
                timestamp: '2021-06-03 20:46',
                color: '#0bbd87'
            }]
        }
    },
};
</script>

<style scoped>
</style>
