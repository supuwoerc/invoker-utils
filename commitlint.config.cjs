module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feat", // 添加新功能
                "fix", // 处理bug
                "chore", // 调整构建过程或辅助工具，如添加依赖等
                "docs", // 修改文档
                "style", // 不影响代码运行的变动
                "refactor", // 重构
                "perf", // 优化性能
                "test", // 添加测试
                "revert", // 回滚到上一个版本
                "build", // 项目构建或者依赖的改动
                "ci", // ci
                "config", // 配置
                "release", // 配置
            ],
        ],
        "type-case": [0],
        "type-empty": [0],
        "scope-empty": [0],
        "scope-case": [0],
        "subject-full-stop": [0, "never"],
        "subject-case": [0, "never"],
        "header-max-length": [0, "always", 74],
    },
}
