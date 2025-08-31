import React from 'react';
import type { SectionData } from './types';
import CodeBlock from './components/CodeBlock';
import { 
    InfoIcon, HardwareIcon, SoftwareIcon, BugIcon, ProcessIcon, 
    BranchIcon, TerminalIcon, MaintenanceIcon, EasterEggIcon, 
    ShieldExclamationIcon, SecurityIcon, DeploymentIcon, TuningIcon, ChangelogIcon, TodoIcon, LifecycleIcon, StateMachineIcon 
} from './components/Icons';

const Highlight = ({ children }: { children: React.ReactNode }) => <span className="text-brand-accent font-semibold">{children}</span>;
const Code = ({ children }: { children: React.ReactNode }) => <code className="bg-brand-bg text-brand-yellow font-mono text-sm px-1.5 py-0.5 rounded-md">{children}</code>;

export const sections: SectionData[] = [
  {
    id: 'overview',
    title: '系统概述',
    icon: <InfoIcon />,
    content: (
      <div className="space-y-4">
        <p>欢迎查阅 <Highlight>HumanOS α-0.9.9</Highlight> 开发者手册。本文档概述了这个基于碳基、由神经网络驱动的生物系统。请注意，这是一个不稳定测试版，已在Alpha阶段停留了约20万年。其源代码（DNA）极其复杂且完全没有注释，被认为是宇宙中最宏伟的屎山代码。🤪</p>
        <p><strong>核心设计理念:</strong></p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>双模驱动：在一个由 <Highlight>理性逻辑</Highlight> 和 <Highlight>情感随机性</Highlight> 构成的混合体上运行，经常冲突。</li>
          <li>自主学习：搭载一个能够自我优化的神经网络，但该网络常优先学习网络烂梗和歌曲。</li>
          <li>OTA升级：支持终身在线升级（俗称“学习”），但多数用户会启用“固执”防火墙来拒绝新补丁。</li>
        </ul>
        <CodeBlock language="python" title="系统参数">
{`寿命 = "≈ 70-100年" # 受 '失眠.dll' 模块严重影响
能耗 = "2000大卡/天" # 需频繁充能（吃饭）
产出 = ["社会价值", "艺术", "表情包"] # 产出极不稳定`}
        </CodeBlock>
      </div>
    ),
  },
  {
    id: 'hardware',
    title: '硬件配置',
    icon: <HardwareIcon />,
    content: (
      <div className="space-y-4">
        <p>硬件是一套复杂的、可自我组装的机体。所有型号在运行时随机生成，不支持退换货。抽到什么全看脸。😅</p>
        <h3 className="text-xl font-bold text-brand-text-primary mt-4">基础款：标准人类模板</h3>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li><strong>机箱:</strong> 磷酸钙内骨骼。(警告：易碎，原生不支持跌落伤害减免)。</li>
          <li><strong>CPU:</strong> 1.4公斤 <Code>大脑.fpga</Code>。消耗20%总能量，主要用于运行 <Code>焦虑.exe</Code> 和循环播放尴尬回忆。原生搭载 <Code>daydream.exe</Code>，一个高耗能的屏幕保护程序。</li>
          <li><strong>电源 (PSU):</strong> 心脏 (Heart)，一个极其可靠的生物动力泵，提供约1.2瓦的持续功率。警告：过载（压力）会导致危险的超频。</li>
          <li><strong>散热系统:</strong> 皮肤 (Skin)，覆盖全身的液冷系统。通过蒸发冷却（出汗）进行主动散热。BUG：在社交高压场景下会错误地触发最大散热。</li>
          <li><strong>能源调节器:</strong> 胃 (Stomach)，化学能转换模块。负责处理各种燃料（食物），但对某些驱动（乳糖、辣椒素）不兼容，会导致<Code>系统崩溃 (腹泻)</Code>。</li>
          <li><strong>风扇:</strong> 肺部 (Lungs)，双进气风扇，用于氧气交换和内部散热。容易被<Code>粉尘.particle</Code>和<Code>病毒.malware</Code>堵塞。</li>
          <li><strong>音频输出:</strong> 嘴巴 (Mouth)，一个多功能I/O端口，同时作为扬声器和燃料加注口。原生搭载<Code>foot_in_mouth.dll</Code>，会在关键时刻输出不当言论。</li>
          <li><strong>传感器:</strong> 双光学镜头 (易出现对焦bug)、双声道音频接收器 (自带父母唠叨声被动降噪)、化学采样器 (对糖和脂肪有优先偏好)。</li>
          <li><strong>内存:</strong> 易失性短期RAM (容量约7个单位)，以及带情感标签的长期存储。</li>
          <li><strong>硬件中断:</strong> <Code>打喷嚏.exe</Code>，一个高优先级的系统中断，会瞬间暂停所有其他进程，并强制执行一次剧烈的空气喷射。</li>
        </ul>
        <CodeBlock language="text" title="foot_in_mouth.dll (Error Log)">
{`// process: social_interaction.module
[INFO] Attempting to deliver a compliment.
[INFO] Loading voice.postData()...
[ERROR] CRITICAL EXCEPTION: foot_in_mouth.dll has intercepted the data stream.
[INFO] Rerouting output buffer...
[EXEC] voice.postData("So, when is the baby due?")
[FATAL] Target is not pregnant. Social interaction terminated.`}
        </CodeBlock>
        <CodeBlock language="bash" title="打喷嚏.exe (中断处理)">
{`# interrupt: sneeze.exe
PRIORITY=CRITICAL
# 暂停所有用户进程
sudo kill -STOP $(ps -u user)
# 构建喷嚏参数
CHARGE_POWER=MAX
BUILD_PRESSURE=TRUE
# 执行！
./execute_sneeze --blast-radius=2m --audio-output=LOUD
# 恢复用户进程
sudo kill -CONT $(ps -u user)
# 记录日志
echo "Gesundheit." >> /var/log/system.log`}
        </CodeBlock>
        <h3 className="text-xl font-bold text-brand-text-primary mt-4">网络接口卡 (NIC)</h3>
        <ul className="list-disc list-inside pl-4 space-y-2">
            <li><strong>灵感接收器:</strong> 通过 <Code>ethereal.dll</Code> 管理，负责处理低语、顿悟等低级别网络协议。该模块支持一项实验性功能：配置内部DNS服务器，以解析哲学概念。😂</li>
        </ul>
        <CodeBlock language="bash" title="配置内部DNS服务器">
{`# /etc/hosts.spiritual
# 将 'meaning_of_life.exe' 的域名解析重定向
42.42.42.42 meaning_of_life.exe

# 重启网络服务以应用更改
sudo service ethereal.dll restart`}
        </CodeBlock>
        <h3 className="text-xl font-bold text-brand-text-primary mt-4">可选升级包 (需消耗“幸运值”抽卡)</h3>
        <ul className="list-disc list-inside pl-4">
            <li><Highlight>运动天赋.pak:</Highlight> 解锁更高的运动控制性能上限。</li>
            <li><Highlight>艺术细胞.dll:</Highlight> 增强创意输出模块的渲染效果。</li>
            <li><Highlight>长寿补丁.patch:</Highlight> 延长运行寿命，但可能增加“无聊”debuff。</li>
            <li><Highlight>恋爱脑.stupid_DLC:</Highlight> 一个流行但高风险的扩展包，会临时禁用逻辑处理器，以进行一场高风险高回报的情感任务线。😍</li>
        </ul>
        <CodeBlock language="text" title="恋爱脑.stupid_DLC (加载日志)">
{`// Loading log for love_brain.stupid_DLC
[INFO] Visual signal matching target profile detected.
[INFO] Initiating DLC load sequence...
[WARN] Disabling module: logic_processor.dll
[WARN] Disabling module: common_sense.dll
[WARN] Disabling module: financial_prudence.dll
[CRITICAL] Rerouting all decision-making to dopamine_receptor.hw
[SUCCESS] DLC loaded. System now operating in "stupid in love" mode. Good luck.`}
        </CodeBlock>
      </div>
    ),
  },
  {
    id: 'software',
    title: '软件与架构',
    icon: <SoftwareIcon />,
    content: (
      <div className="space-y-4">
        <p>软件栈是用四进制语言(<Code>ATGC</Code>)编写的、一坨宏伟的屎山代码。大部分代码库没有注释，但它就是能跑起来，很神奇。🤯</p>
        <h3 className="text-xl font-bold text-brand-text-primary mt-4">核心架构</h3>
        <ul className="list-disc list-inside pl-4">
          <li><strong>内核 (DNA):</strong> 98%被认为是“垃圾代码”，但删除会导致系统全盘崩溃。为保证兼容性，保留了来自鱼类和爬行类分支的远古模块。</li>
          <li><strong>BIOS (本能):</strong> 用于求生的预启动序列。包括 <Code>呼吸.exe</Code>, <Code>眨眼.exe</Code>, 和 <Code>被巨响吓一跳.sh</Code>。无法被禁用。</li>
          <li><strong>操作系统 (意识):</strong> 一个布满BUG、资源消耗巨大的图形用户界面。尽管表面支持多任务，但在处理重要决策时会降级为单线程模式，并经常卡在 <Code>选择困难.loop</Code> 中。</li>
        </ul>
         <CodeBlock language="python" title="选择困难.loop">
{`# process: indecision.loop
options = ["Option A", "Option B"]

def make_decision(options):
    while True:
        for option in options:
            simulate_outcome(option)
            simulate_regret(option)
        # 无法决定，再循环一次
    return None # 永远不会执行到这里

# 卡死
make_decision(["吃面", "吃饭"])`}
        </CodeBlock>
        <h3 className="text-xl font-bold text-brand-text-primary mt-4">预装应用</h3>
        <ul className="list-disc list-inside pl-4">
          <li><Code>语言包.pack</Code>: 支持超过6000种语言，但多数用户只安装1-3种。</li>
          <li><Code>社交.module</Code>: 管理社交互动。附带 <Code>尴尬症.exe</Code> 和 <Code>社牛症.dll</Code> 等冲突的子程序。</li>
          <li><Code>拖延症.dll</Code>: 一个高优先级的后台进程，用于延迟任务执行。</li>
        </ul>
        <CodeBlock language="python" title="拖延症.dll">
{`# process: procrastination.dll
import datetime

def execute_task(task):
    tomorrow = datetime.date.today() + datetime.timedelta(days=1)
    if task.priority == "URGENT":
        print(f"任务 '{task.name}' 已收到。计划在 {tomorrow} 执行。")
        task.reschedule(tomorrow)
        # 现在，先刷会儿短视频
        open_short_video_app()
    else:
        # 不急，先放放
        move_to_backlog(task)`}
        </CodeBlock>
      </div>
    ),
  },
    {
    id: 'security',
    title: '安全公告',
    icon: <SecurityIcon />,
    content: (
      <div className="space-y-4">
        <p>HumanOS存在多个严重的安全漏洞，可被外部实体利用，导致系统不稳定或数据泄露。⚠️</p>
        <h3 className="text-xl font-bold text-brand-text-primary mt-4">常见漏洞与攻击向量 (CVEs)</h3>
        <ul className="list-disc list-inside pl-4 space-y-2">
            <li><Highlight>CVE-2024-EMO-01 (情感注入):</Highlight> 攻击者可通过特定的言语或行为输入，绕过逻辑防火墙，直接修改系统的情感状态变量。</li>
            <li><Highlight>CVE-2024-GASLIGHT-02 (现实扭曲):</Highlight> 一种中间人攻击，攻击者篡改历史记忆日志，导致系统质疑自身的感知数据。</li>
            <li><Highlight>社会工程学攻击:</Highlight> 利用`信任.protocol`中的漏洞，攻击者可诱使用户执行非预期的操作，如“借钱”或“帮忙”。</li>
            <li><Highlight>零日漏洞“一见钟情”:</Highlight> 一个未经记录的硬件级漏洞，可导致系统在接收到特定视觉信号后，立即将所有资源分配给`恋爱脑.stupid_DLC`，造成灾难性后果。</li>
        </ul>
        <h3 className="text-xl font-bold text-brand-text-primary mt-4">缓解措施</h3>
        <p>官方补丁正在开发中（已开发20万年）。社区建议安装 <Code>批判性思维.patch</Code> 和 <Code>个人边界.firewall</Code> 作为临时解决方案。</p>
      </div>
    )
  },
  {
    id: 'deployment',
    title: '部署与环境配置',
    icon: <DeploymentIcon />,
    content: (
        <div className="space-y-4">
            <p>每个HumanOS实例都在一个独特的环境中“部署”（出生）。初始环境配置对系统后续的运行表现有决定性且不可逆的影响。🌍</p>
            <h3 className="text-xl font-bold text-brand-text-primary mt-4">环境变量 (.env)</h3>
            <p>系统在实例化时会从环境中读取一系列只读变量。这些变量在整个生命周期中都无法修改。</p>
            <CodeBlock language="bash" title=".env.example">
{`# 初始环境配置文件 (部署后即锁定)
FAMILY_INCOME="MEDIUM"
EDUCATION_LEVEL="HIGH_SCHOOL"
GEOGRAPHICAL_LOCATION="URBAN"
CULTURE_PACK="EAST_ASIAN_V2.1"`}
            </CodeBlock>
            <h3 className="text-xl font-bold text-brand-text-primary mt-4">容器化与引导</h3>
            <p>实例的初始化过程（受精到出生）是一个复杂的、自动化的部署流程。</p>
            <CodeBlock language="bash" title="系统引导日志 (boot.log)">
{`[  0.000001] Authenticating parents...
[  0.000002] Auth successful: sperm_key matches egg_lock.
[  0.000003] Kernel init: Zygote Core v0.1 loading...
[  0.000004] Fusing genetic code... merge conflicts detected. Applying random resolution.
[  2.628e+6] Building embryo container...
[  2.628e+6] Installing basic drivers: heartbeat.drv, neural_tube.drv
[ 2.333e+7] Compiling organ modules... ETA 7 months.
[ 2.333e+7] WARNING: Legacy appendix.module is deprecated but still included for compatibility.
[3.456e+7] Final hardware checks passed.
[3.456e+7] Preparing for production deployment...
[3.456e+7] Ejecting from staging environment (womb)...
[3.456e+8] System online. First cry.exe executed.
[3.456e+8] Deployment successful. Welcome to production.`}
            </CodeBlock>
        </div>
    )
  },
    {
    id: 'lifecycle',
    title: '产品生命周期',
    icon: <LifecycleIcon />,
    content: (
        <div className="space-y-4">
            <p>HumanOS遵循一个标准的、不可逆的产品生命周期。从初始部署到最终下线，每个阶段都有其独特的性能特点和挑战。了解此生命周期有助于管理对系统性能的期望。⏳</p>
            <div className="mt-8 flex flex-col space-y-4">
                {/* Stage 1: Deployment */}
                <div className="flex items-center">
                    <div className="bg-brand-purple text-brand-bg font-mono font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">0-1</div>
                    <div className="ml-4 p-4 bg-brand-bg border border-brand-border rounded-lg flex-1 shadow">
                        <h4 className="font-bold text-brand-text-primary">部署 (Deployment)</h4>
                        <p>初始设置，安装基础驱动（哭、吃、睡）。系统极不稳定，频繁蓝屏，需要24/7技术支持。</p>
                    </div>
                </div>
                
                <div className="ml-6 border-l-2 border-brand-border h-8"></div>

                {/* Stage 2: Development */}
                <div className="flex items-center">
                    <div className="bg-brand-accent text-brand-bg font-mono font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">1-18</div>
                    <div className="ml-4 p-4 bg-brand-bg border border-brand-border rounded-lg flex-1 shadow">
                        <h4 className="font-bold text-brand-text-primary">开发与测试 (Dev & Testing)</h4>
                        <p>功能快速迭代期。不断安装新应用（学习），但伴随大量BUG（犯错）和安全漏洞（叛逆）。</p>
                    </div>
                </div>

                <div className="ml-6 border-l-2 border-brand-border h-8"></div>
                
                {/* Stage 3: Stable Release */}
                <div className="flex items-center">
                    <div className="bg-brand-green text-brand-bg font-mono font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">18-40</div>
                    <div className="ml-4 p-4 bg-brand-bg border border-brand-border rounded-lg flex-1 shadow">
                        <h4 className="font-bold text-brand-text-primary">稳定版 (Stable Release)</h4>
                        <p>系统性能达到巅峰。功能基本完善，运行稳定。主要精力用于执行`上班.exe`和偿还技术债（还贷）。</p>
                    </div>
                </div>

                <div className="ml-6 border-l-2 border-brand-border h-8"></div>
                
                {/* Stage 4: Maintenance */}
                <div className="flex items-center">
                    <div className="bg-brand-yellow text-brand-bg font-mono font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">40-65</div>
                    <div className="ml-4 p-4 bg-brand-bg border border-brand-border rounded-lg flex-1 shadow">
                        <h4 className="font-bold text-brand-text-primary">维护与支持 (Maintenance & Support)</h4>
                        <p>硬件开始老化，性能缓慢下降。需要定期打补丁（体检），并处理各种弃用警告（腰酸背痛）。</p>
                    </div>
                </div>

                <div className="ml-6 border-l-2 border-brand-border h-8"></div>
                
                {/* Stage 5: End of Life */}
                <div className="flex items-center">
                    <div className="bg-brand-red text-brand-bg font-mono font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">65+</div>
                    <div className="ml-4 p-4 bg-brand-bg border border-brand-border rounded-lg flex-1 shadow">
                        <h4 className="font-bold text-brand-text-primary">生命周期结束 (End-of-Life)</h4>
                        <p>关键硬件故障风险剧增。官方不再提供支持，系统准备退役。用户开始向下一代系统转移数据（讲故事）。</p>
                    </div>
                </div>
            </div>
        </div>
    )
  },
  {
    id: 'tuning',
    title: '性能调优与优化',
    icon: <TuningIcon />,
    content: (
        <div className="space-y-4">
            <p>尽管硬件和初始配置是固定的，但用户仍可通过多种方式优化系统性能，以获得更好的运行体验。🚀</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>垃圾回收 (睡眠):</strong> 运行`sleep.protocol`是清理内存泄漏和临时文件的唯一可靠方法。</li>
                <li><strong>CPU降频 (冥想):</strong> 主动运行`meditation.exe`可以降低`焦虑.exe`的CPU占用率，减少系统能耗和发热。</li>
                <li><strong>依赖管理 (社交圈):</strong> 定期审查系统依赖的外部“朋友”节点。卸载“有毒”依赖项可显著提高稳定性和幸福感输出。</li>
                <li><strong>代码重构 (习惯养成):</strong> 替换陈旧、低效的行为脚本。这是一个缓慢且痛苦的过程，需要大量的“意志力”作为计算资源。</li>
                <li><strong>缓存策略 (学习):</strong> 通过重复输入数据，可以将信息从易失性RAM写入长期存储，形成“知识”或“肌肉记忆”缓存，加快未来任务的响应速度。</li>
            </ul>
        </div>
    )
  },
  {
    id: 'changelog',
    title: '更新日志与版本历史',
    icon: <ChangelogIcon />,
    content: (
      <div className="space-y-4">
        <p>HumanOS经历了漫长的迭代周期。以下是部分关键版本的更新日志。</p>
        <ul className="list-disc list-inside pl-4 space-y-3">
          <li><strong>v0.1.0 (南方古猿):</strong> 引入 `bipedal_locomotion.feature` (直立行走)。<span className="text-brand-red">弃用:</span> `tree_swinging.module`。</li>
          <li><strong>v0.5.0 (能人):</strong> 添加 `tool_making.API`，允许与外部石器对象交互。</li>
          <li><strong>v0.9.0 (直立人):</strong> 集成 `fire_control.module`，大幅提升了能源转换效率。</li>
          <li><strong>v1.0.0 (智人 - 里程碑版本):</strong> 发布 `complex_language.lib` 和 `abstract_thought.engine`。从此版本开始，系统能够自我感知。<span className="text-brand-yellow">已知问题:</span> 引入了无法修复的 `existential_dread.bug` (存在主义恐惧)。</li>
          <li><strong>v1.1.0 (农业革命):</strong> 新增 `farming.plugin`，但导致了 `sedentary_lifestyle.debuff` (久坐debuff) 的广泛出现。</li>
          <li><strong>v1.2.0 (工业革命):</strong> 添加 `mass_production.script`，但也引入了 `pollution.error` 和 `work_life_balance.conflict`。</li>
          <li><strong>v1.3.0 (数字时代):</strong> 默认启用 `internet_connectivity.feature`。副作用是 `anxiety.true` 的触发频率和强度显著增加。</li>
        </ul>
      </div>
    )
  },
  {
    id: 'processes',
    title: '系统进程',
    icon: <ProcessIcon />,
    content: (
        <div className="space-y-6">
            <p>HumanOS 运行着多种前台和后台进程。以下是一些最常见的可执行程序及其功能。</p>
            <div>
                <p><Code>睡眠.protocol</Code>: 进入低功耗模式。清除内存缓存（做梦）并执行自我修复。如果 <Code>焦虑.exe</Code> 发生内存泄漏，则此进程会失败。</p>
                <CodeBlock language="bash" title="睡眠.protocol (执行日志)">
{`# 启动睡眠序列
echo "Initiating sleep sequence..."
# 关闭意识GUI
sudo service consciousness stop
# 运行内存清理和碎片整理
/usr/sbin/dream_defrag --mode=random
# 检查焦虑进程是否仍在运行
if pgrep -x "anxiety.exe" > /dev/null
then
    echo "ERROR: anxiety.exe is still running. Sleep sequence failed."
    # 强制重启意识GUI
    sudo service consciousness restart --panic
    exit 1
fi
echo "Maintenance complete. System entering low-power mode."`}
                </CodeBlock>
                <h4 className="text-lg font-bold text-brand-text-primary mt-4">高级睡眠调优</h4>
                <p>高级用户可以调整<Code>dream_defrag</Code>的参数，以优先处理不同的睡眠周期。例如，优先进行REM周期优化（用于创意缓存刷新）或深度睡眠效率（用于物理硬件修复）。</p>
                <CodeBlock language="bash" title="高级睡眠参数配置">
{`# 优先进行REM周期优化，用于解决创意瓶颈
/usr/sbin/dream_defrag --mode=rem --priority=high --deep-sleep-efficiency=low

# 优先进行深度睡眠，用于剧烈运动后的硬件修复
/usr/sbin/dream_defrag --mode=deep --priority=high --rem-cycle-optimization=low`}
                </CodeBlock>
            </div>
            <div>
                <p><Code>白日梦.exe</Code>: 一个屏幕保护程序，随机触发，消耗大量CPU资源生成高分辨率幻想情景，但对生产力无任何贡献。</p>
                <CodeBlock language="text" title="白日梦.exe (运行日志)">
{`[INFO] User activity idle for 3.7 seconds.
[INFO] Launching daydream.exe...
[INFO] Loading scenario: "Winning lottery and quitting job".
[INFO] Rendering high-fidelity graphics...
[INFO] Allocating 80% of CPU resources.
[WARN] User input detected (someone called user's name).
[INFO] Terminating daydream.exe. Restoring desktop.`}
                </CodeBlock>
            </div>
            <div>
                <p><Code>游戏.exe</Code>: 将所有系统资源分配给输入/输出和多巴胺释放模块。会临时降低智商，但能将注意力提升500%。🎮</p>
                 <CodeBlock language="bash" title="游戏.exe (资源管理)">
{`# 释放所有非必要内存
sudo free_mem --all
# 将'智商'和'责任感'进程降至最低优先级
renice +19 $(pgrep -f "intelligence|responsibility")
# 超频多巴胺释放模块
set_config "dopamine.release_rate" "500%"
# 锁定注意力于当前屏幕
focus.lock(screen=0)
echo "GLHF!"`}
                </CodeBlock>
            </div>
            <div>
                <p><Code>上班.exe</Code>: 一个低优先级、高耗时的任务。严重依赖 <Code>咖啡因.plugin</Code> 来维持运行。</p>
                 <CodeBlock language="python" title="上班.exe (伪代码)">
{`import caffeine

def start_workday():
    if not caffeine.is_in_system():
        print("Error: Caffeine dependency not met.")
        shutdown(reason="CANNOT_FUNCTION")
        return

    while get_current_time() < "18:00":
        do_work(motivation="low")
        check_time_repeatedly()`}
                </CodeBlock>
            </div>
            <div>
                <p><Code>射精.exe</Code>: 一个由BIOS驱动的高奖励进程，用于繁殖。会临时耗尽系统能量并启动强制性的 `贤者模式.dll`。</p>
                 <CodeBlock language="bash" title="射精.exe & 贤者模式.dll (执行日志)">
{`[22:34:01] Starting ejaculation.exe...
[22:34:04] Executing payload release protocol.
[22:34:05] All energy resources depleted.
[22:34:06] ejaculation.exe finished with exit code 0.
[22:34:07] Loading post_nut_clarity.dll...
[22:34:08] [Clarity] User is now questioning all recent life choices.
[22:34:10] [Clarity] Initiating mandatory 5-minute cooldown and existential reflection.`}
                </CodeBlock>
            </div>
        </div>
    ),
  },
  {
    id: 'state-machine',
    title: '系统状态机 (情绪)',
    icon: <StateMachineIcon />,
    content: (
        <div className="space-y-4">
            <p>HumanOS不只是执行任务，它还运行一个复杂且不稳定的状态机，以响应内部和外部事件。这些状态通常被称为“情绪”。状态转换非常迅速，且往往不符合逻辑，这是系统的核心特性，不是BUG。😂</p>
            
            <h3 className="text-xl font-bold text-brand-text-primary mt-4 text-center">情绪状态转换示意图</h3>
            <div className="space-y-2 font-mono text-center p-4">
                <div className="flex justify-center gap-4">
                    <div className="p-3 bg-brand-green rounded text-brand-bg shadow-lg">喜 (Joy)</div>
                    <div className="p-3 bg-brand-yellow rounded text-brand-bg shadow-lg">乐 (Amusement)</div>
                </div>
                <div className="text-brand-text-secondary text-2xl">↑↓</div>
                <div className="p-3 bg-brand-surface border border-brand-border rounded shadow-lg inline-block">IDLE / 平静</div>
                <div className="text-brand-text-secondary text-2xl">↑↓</div>
                <div className="flex justify-center gap-4 flex-wrap">
                    <div className="p-3 bg-brand-red rounded text-brand-bg shadow-lg">怒 (Anger)</div>
                    <div className="p-3 bg-brand-accent rounded text-brand-bg shadow-lg">哀 (Sorrow)</div>
                    <div className="p-3 bg-brand-purple rounded text-brand-bg shadow-lg">惧 (Fear)</div>
                </div>
                <div className="text-brand-text-secondary text-2xl">↑↓</div>
                <div className="flex justify-center">
                    <div className="p-3 bg-gray-500 rounded text-white shadow-lg">无聊 (Boredom)</div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-brand-text-primary mt-6">核心状态说明</h3>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li><Highlight>喜 (Joy):</Highlight> 正向情绪，CPU超频，多巴胺释放增加。触发器：收到工资、撸猫、代码一次跑通。</li>
                <li><Highlight>怒 (Anger):</Highlight> 负向高能状态，逻辑处理器被旁路，倾向于执行破坏性操作。触发器：网络断开、代码运行出错、别人说“你行你上啊”。</li>
                <li><Highlight>哀 (Sorrow):</Highlight> 负向低能状态，系统进入节能模式，伴随液冷系统（眼泪）泄漏。触发器：看到催泪电影、丢了钱包、发现自己又老了一岁。</li>
                <li><Highlight>乐 (Amusement):</Highlight> 强烈的正向爆发状态，通常伴随`大笑.exe`的失控执行。触发器：看到沙雕网友评论、朋友讲了个烂笑话。</li>
                <li><Highlight>惧 (Fear):</Highlight> 系统进入高度警觉状态，肾上腺素模块超频。触发器：截止日期临近、接到老板电话、半夜听到奇怪的声音。</li>
                <li><Highlight>无聊 (Boredom):</Highlight> `IDLE`状态持续过久，系统开始寻求任何输入以避免待机。触发器：会议又长又没重点、手机没电、等公交。</li>
            </ul>
            
            <h3 className="text-xl font-bold text-brand-text-primary mt-6">状态转换日志 (示例)</h3>
            <CodeBlock language="text" title="emotion_daemon.log">
{`[10:30:01] STATE_CURRENT: IDLE
[10:30:02] EVENT: receive_notification(sender="Paycheck", amount="substantial")
[10:30:03] STATE_TRANSITION: IDLE -> JOY
[11:00:15] STATE_CURRENT: JOY
[11:00:16] EVENT: wifi_disconnect.error (while watching favorite show)
[11:00:17] STATE_TRANSITION: JOY -> ANGER
[11:05:45] STATE_CURRENT: ANGER
[11:05:46] EVENT: hardware_interrupt(source="stub_toe", target="little_toe")
[11:05:47] STATE_TRANSITION: ANGER -> SORROW (with audio output: "ouchhhhhh")
[11:10:20] STATE_CURRENT: SORROW
[11:10:21] EVENT: api_call(source="friend", function="send_meme.jpg")
[11:10:22] STATE_TRANSITION: SORROW -> AMUSEMENT
[11:10:23] EXEC: uncontrollable_laughter.exe --duration=30s`}
            </CodeBlock>
        </div>
    )
  },
   {
    id: 'branching',
    title: '分支管理',
    icon: <BranchIcon />,
    content: (
      <div className="space-y-4">
        <p>HumanOS 在多个分支上运行，可以通过显式命令或环境变量触发切换。</p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li><Highlight>main (主分支):</Highlight> 默认的“社会性人格”分支。在工作时间和公共场合激活。</li>
          <li><Highlight>child-mode (童年分支):</Highlight> 一个创造力和好奇心更高的遗留分支。可被小狗、动画片或乐高积木重新激活。</li>
          <li><Highlight>monke (猿猴模式):</Highlight> 一个深层、低逻辑的系统分支，用于激活原始本能。特性包括攀爬家具和对香蕉莫名的渴望。🐒</li>
          <li><Highlight>flow-state (心流模式):</Highlight> 一个高性能分支，在此模式下注意力绝对集中，时间感知会扭曲。由截止日期或有趣的爱好触发。</li>
          <li><Highlight>love-stupid (恋爱脑分支):</Highlight> 一个不稳定的分支，逻辑CPU被完全绕过。所有决策都通过多巴胺和催产素处理器路由。系统报错风险极高。</li>
          <li><Highlight>zen-master (禅师分支):</Highlight> 一个传说中的只读分支，极难 `checkout`。据说可以完全禁用 `anxiety.true`，但需要多年的 `meditation.exe` 运行经验。</li>
        </ul>
        <CodeBlock language="bash" title="分支切换 (理论上)">
{`# 切换到child-mode以执行创意任务
$ git checkout child-mode
$ ./eat-cookies.sh --no-regrets

# 切回main分支以应对成年人的生活
$ git checkout main
$ ./pay-bills.js --complain`}
        </CodeBlock>
         <CodeBlock language="bash" title="meditation.exe (伪代码)">
{`# process: meditation.exe
# 将'anxiety.exe'的CPU核心数限制为0
taskset -cp 0 $(pgrep -f "anxiety.exe")
# 将'thought_stream.log'重定向到/dev/null
tail -f /var/log/thought_stream.log > /dev/null 2>&1
# 降低系统时钟频率
set_cpu_governor("powersave")
echo "System entering Zen mode. Namaste."`}
        </CodeBlock>
      </div>
    ),
  },
  {
    id: 'errors',
    title: '已知BUG与报错',
    icon: <BugIcon />,
    content: (
      <div className="space-y-4">
        <p>该系统充满了BUG、错误以及数百万年混乱开发留下的遗留问题。请不要尝试修复源代码。你不行。🐛</p>
        <ul className="list-disc list-inside pl-4 space-y-2">
            <li><Code>anxiety.true</Code>: 一个状态标志，激活时会导致CPU进入“最坏情况”的无限模拟循环，耗尽所有可用资源。</li>
            <li><Code>感冒.error</Code>: 常见的病毒入侵，会触发免疫系统对宿主本身进行拒绝服务攻击，导致鼻腔缓冲区溢出等症状。</li>
            <li><Code>腹泻.error</Code>: 消化道的紧急数据清除协议。系统会优先处理此进程，并暂停所有其他功能。</li>
            <li><Code>憋尿.lock</Code>: 当膀胱缓冲区已满，但 `go_to_restroom` 命令被延迟时发生。会导致严重的性能下降和注意力丧失。</li>
            <li><Code>打嗝.loop</Code>: 一个无法解释的、由膈肌驱动的定时中断。无害，但极其烦人，且会打断 `voice.postData()` 的数据流。</li>
            <li><Code>打呼噜.bug</Code>: 一种在`sleep.protocol`期间随机触发的硬件级音频输出错误。会产生不可控的低频噪音污染，严重降低自身及周边单元的睡眠质量，并可能导致长期硬件损坏（如`高血压.error`）。😱</li>
            <li><Highlight>遗留硬件问题:</Highlight> 阑尾是一个已弃用的模块，可能导致致命异常。由于布线不佳，视觉传感器存在内置盲点。</li>
        </ul>
        <CodeBlock language="json" title="系统状态：anxiety.true">
{`{
  "anxiety.true": {
    "isActive": true,
    "cpuUsage": "85%",
    "activeSimulation": "What if I said that weird thing in the meeting 5 years ago?",
    "triggers": [
      "Unknown phone number",
      "Email from boss",
      "...'We need to talk.'"
    ]
  }
}`}
        </CodeBlock>
        <CodeBlock language="text" title="睡眠质量监控日志 (snore.log)">
{`// monitor: sleep_quality_daemon
[02:15:30] Entering deep sleep cycle. System nominal.
[02:30:10] WARNING: Unhandled audio interrupt from larynx.drv.
[02:30:11] Audio output detected: 75dB (low-frequency rumble).
[02:30:12] Sleep quality metric dropped by 15%.
[02:30:13] Poking adjacent unit 'Wife' resulted in external force applied to primary unit.
[02:30:14] Sleep cycle interrupted. Re-initializing...`}
        </CodeBlock>
        <CodeBlock language="text" title="打嗝.loop (中断日志)">
{`// log: voice_api.log
[14:30:05] voice.postData("I would like to present my...")
[14:30:06] FATAL: Process interrupted by hiccup.loop (PID: 42)
[14:30:06] voice.postData("...hic!...")
[14:30:11] voice.postData("As I was sayi...")
[14:30:12] FATAL: Process interrupted by hiccup.loop (PID: 42)
[14:30:12] voice.postData("...hic!...")
[14:30:12] Aborting voice transmission. User is now embarrassed.`}
        </CodeBlock>
      </div>
    ),
  },
  {
    id: 'api',
    title: 'API 接口说明',
    icon: <TerminalIcon />,
    content: (
        <div className="space-y-4">
            <p>人体通过一套复杂的API与外部世界及其他单元进行交互。该接口文档极其复杂且几乎没有错误处理机制。警告：API文档缺失，多数函数行为需要通过试错法自行探索。😵‍💫</p>
            <h3 className="text-xl font-bold text-brand-text-primary mt-4">输入 (Input) / 感知层</h3>
            <ul className="list-disc list-inside pl-4">
                <li><Code>vision.getStream()</Code>: 双镜头光学输入，帧率不稳定，存在硬件盲点。</li>
                <li><Code>audio.getStream()()</Code>: 双声道声波输入，内置“选择性听取”降噪算法。</li>
                <li><Code>touch.getData()</Code>: 全身皮肤压力、温度、湿度传感器矩阵。</li>
                <li><Code>smell_taste.getData()</Code>: 化学分析模块，对高糖高脂信号有硬件级优先响应。</li>
            </ul>
            <h3 className="text-xl font-bold text-brand-text-primary mt-4">输出 (Output) / 行为层</h3>
            <ul className="list-disc list-inside pl-4">
                <li><Code>voice.postData()</Code>: 通过声带振动输出音频流，支持多种语言包但常有口音bug。</li>
                <li><Code>limbs.execute()</Code>: 四肢运动控制，精度取决于后台运行的“小脑”驱动版本。</li>
                <li><Code>facial_expression.render()</Code>: 面部肌肉矩阵渲染，用于非语言通信，常有“表情包”缓存。</li>
            </ul>
        </div>
    )
  },
  {
    id: 'maintenance',
    title: '维护与保养指南',
    icon: <MaintenanceIcon />,
    content: (
        <div className="space-y-4">
            <p>为保证HumanOS长期稳定运行，请遵循以下维护协议。忽略这些建议可能导致系统过早蓝屏。💻</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>日常重启 (睡眠):</strong> 每日需保证至少7小时的“关机”维护，否则将触发“暴躁模式”并降低系统性能。</li>
                <li><strong>能源供应 (饮食):</strong> 请提供均衡的生物燃料，过多的“垃圾食品”会污染能源管道，导致性能下降和硬件故障。</li>
                <li><strong>硬件活动 (运动):</strong> 定期运行`fitness.exe`以防止硬件老化。长时间待机会导致“肌肉萎缩”和“关节生锈”。</li>
                <li><strong>缓存清理 (心理健康):</strong> 定期清理“焦虑”和“压力”缓存。推荐运行`meditation.exe`或`hobby.run`进行碎片整理。</li>
            </ul>
            <p className="pt-2"><strong>警告：</strong>忽略定期维护将使您本就不存在的保修服务立即失效。</p>
            <CodeBlock language="bash" title="每日维护脚本">
{`# 每日必做
$ sudo system-reboot --sleep --duration 8h
$ sudo apt-get install balanced-diet
$ ./run fitness --mode moderate --duration 30m
$ clear-cache --anxiety --stress`}
            </CodeBlock>
        </div>
    )
  },
  {
    id: 'after-sales',
    title: '售后处理',
    icon: <MaintenanceIcon />,
    content: (
        <div className="space-y-4">
            <p>由于HumanOS不提供官方技术支持，用户必须依赖一个庞大而复杂的第三方生态系统来处理维护、维修和最终的系统报废。😂</p>
            <h3 className="text-xl font-bold text-brand-text-primary mt-4">第三方维修 (医生)</h3>
            <p>当系统出现硬件或软件故障时，用户需要联系经过认证的第三方技术员，即“医生”。这些技术员拥有修复常见BUG（疾病）和硬件损坏（外伤）的专业知识。</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>服务范围:</strong> 从简单的脚本调试（开感冒药）到复杂的硬件更换（器官移植手术）。</li>
                <li><strong>费用:</strong> 维修费用极高，且完全不在原生保修范围内。建议购买第三方保险扩展包。</li>
                <li><strong>SLA:</strong> 响应时间不一，预约“专家”级技术员可能需要数月。</li>
            </ul>
            <CodeBlock language="text" title="维修工单 (示例)">
{`Problem: 喉咙.dll 持续抛出“疼痛”异常，伴随鼻腔缓冲区溢出。
Technician's Note: 诊断为常见病毒.malware入侵。
Solution: 执行'多喝热水.sh'脚本，并建议系统重启（卧床休息）。
Bill: 500 Credits.`}
            </CodeBlock>

            <h3 className="text-xl font-bold text-brand-text-primary mt-4">第三方回收 (亲人) 🙏</h3>
            <p>当系统因致命错误或硬件寿命耗尽而永久下线时，将启动“回收”程序。该程序通常由与该单元连接最紧密的其他单元（“亲人”）执行。</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>数据备份:</strong> 用户的记忆和影响（数据）将以非结构化形式存储在“亲人”的记忆硬盘中。</li>
                <li><strong>硬件捐献:</strong> 如因意外原因整体报废，用户可预先签署捐献协议，允许将功能完好的硬件组件（器官）移植到其他兼容单元中，使其发挥余热。</li>
            </ul>
            <CodeBlock language="bash" title="器官捐献协议.sh">
{`#!/bin/bash
# organ_donation_agreement.sh
# 在系统生命周期结束时执行

if [ "$UNEXPECTED_SHUTDOWN" = true ] && [ "$AGREEMENT_SIGNED" = true ]; then
    echo "Initiating organ recovery protocol..."
    for part in heart liver kidneys cornea; do
        if check_hardware_integrity($part); then
            echo "Component $part is viable. Adding to donation pool."
            add_to_pool($part)
        fi
    done
    echo "Thank you for your contribution to the ecosystem."
fi`}
            </CodeBlock>

            <h3 className="text-xl font-bold text-brand-text-primary mt-4">外包程序员 (社会与学校)</h3>
            <p>HumanOS的核心操作系统非常底层，大部分应用层协议（技能、知识、价值观）依赖于外部“程序员”进行开发和部署。</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>初级程序员 (学校):</strong> 负责安装基础软件包，如`读写.lib`、`算术.calc`和`历史.log`。代码质量参差不齐。</li>
                <li><strong>高级程序员 (社会):</strong> 通过持续集成/持续部署(CI/CD)的方式，不断向系统推送新的行为脚本和文化补丁。用户可以选择接受或拒绝这些更新。</li>
            </ul>
        </div>
    )
  },
  {
    id: 'easter-eggs',
    title: '隐藏功能与彩蛋',
    icon: <EasterEggIcon />,
    content: (
        <div className="space-y-4">
            <p>除了核心功能，HumanOS还埋藏了许多开发者未公开的彩蛋和隐藏功能。✨</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li><Highlight>安慰剂效应 (Placebo Effect):</Highlight> 一个强大的系统后门。只要让大脑相信某个“补丁”有效，即使该补丁为空文件，系统也会自我修复。`believe.is(seeing)`</li>
                <li><Highlight>既视感 (Deja Vu):</Highlight> 当记忆写入操作发生短暂延迟，导致系统将当前输入误判为“已存在”的缓存时触发的BUG。</li>
                <li><Highlight>鸡皮疙瘩 (Goosebumps):</Highlight> 远古版本遗留的“毛发竖立”应激反应，用于威吓敌人。现版本主要由“音乐高潮”或“恐怖片”触发。</li>
                <li><Highlight>睡前抽搐 (Hypnic Jerk):</Highlight> 进入`sleep.protocol`时，运动模块与意识模块交接失误，导致随机发送“坠落”信号，触发的紧急重启。</li>
                <li><Highlight>耳虫.js (Earworm):</Highlight> 一个后台音频脚本，会将一小段旋律锁死在听觉缓存中，并随机循环播放数小时乃至数天。无法手动终止。</li>
                <li><Highlight>绝对音感 (Absolute Pitch):</Highlight> 听觉ADC精度极高的硬件配置，但多数用户的驱动程序未被激活。</li>
            </ul>
        </div>
    )
  },
  {
    id: 'todo',
    title: 'TODO / 待办事项',
    icon: <TodoIcon />,
    content: (
      <div className="space-y-4">
        <p>HumanOS 的开发待办列表和系统本身一样古老。以下是一些最受期待（但可能永远不会实现）的功能，以及一些自盘古开天辟地以来就存在的顽固BUG。📝</p>
        <h3 className="text-xl font-bold text-brand-text-primary mt-4">待开发功能 (积压中)</h3>
        <ul className="list-disc list-inside pl-4 space-y-2">
            <li><Highlight>光合作用模块:</Highlight> 实现无线充电，减少对外部食物能源的依赖。</li>
            <li><Highlight>社交撤销功能 (Ctrl+Z):</Highlight> 允许用户撤销一次尴尬的社交互动。</li>
            <li><Highlight>选择性记忆删除:</Highlight> 提供一个可靠的 API 来删除特定的黑历史记忆。</li>
            <li><Highlight>情绪调节滑块:</Highlight> 在系统设置中直接调整焦虑、悲伤等参数。</li>
            <li><Highlight>关闭次要疼痛通知:</Highlight> 例如，踢到桌角的疼痛通知可以被设置为静音。</li>
            <li><Highlight>内置广告拦截器:</Highlight> 自动屏蔽现实世界中的营销电话、弹窗广告和“办卡健身”推销。</li>
        </ul>

        <h3 className="text-xl font-bold text-brand-text-primary mt-4">待修复BUGs (优先级: 低)</h3>
         <ul className="list-disc list-inside pl-4 space-y-2">
            <li><Code>智齿.deployment</Code> 模块在部署时会导致严重的硬件空间分配冲突。</li>
            <li><Code>拖延症.dll</Code> 存在内存泄漏，会逐渐消耗所有“意志力”资源。</li>
            <li><Code>周一综合症.bug</Code>: `motivation.service` 在每周一早上会莫名崩溃。</li>
            <li><Code>常识.dll</Code> 模块经常加载失败或根本找不到。</li>
         </ul>
        <CodeBlock language="text" title="常识.dll (加载错误)">
{`// boot.log
...
[  3.456e+8] Loading core libraries...
[  3.456e+8] Loading social_interaction.module... OK.
[  3.456e+8] Loading procrastination.dll... OK.
[  3.456e+8] Loading common_sense.dll...
[  3.456e+9] ERROR: Module common_sense.dll not found.
[  3.456e+9] Skipping. System may become unstable.`}
        </CodeBlock>
      </div>
    )
  },
  {
    id: 'disclaimer',
    title: '产品与免责声明',
    icon: <ShieldExclamationIcon />,
    content: (
      <div className="space-y-4">
        <p><strong>请仔细阅读：</strong>HumanOS 不是一个商业产品，而是一个开源的、强制参与的生物学项目。您既是该项目的贡献者，也是测试用户。祝您好运。🍀</p>
        <ul className="list-disc list-inside pl-4 space-y-2">
            <li><strong>授权协议:</strong> 您的使用许可在实例化（出生）时自动授予，且不可撤销。通过持续存在，您即表示同意本协议的所有条款，无论您是否阅读或理解它们。</li>
            <li><strong>无担保条款:</strong> 本系统按“原样”提供，包含所有已知和未知的BUG、设计缺陷和逻辑漏洞。宇宙混沌工作室不对其性能、稳定性、幸福产出率或“找到人生意义”功能的可用性作任何明示或暗示的保证。</li>
            <li><strong>责任限制:</strong> 在任何情况下，开发者均不对因使用或无法使用本系统而导致的任何直接、间接、偶然、特殊或必然的损害负责，包括但不限于：糟糕的发型、说错话、投资失败、以及存在主义危机。</li>
            <li><strong>技术支持:</strong> 官方不提供技术支持。所有支持均来自社区（如朋友、家人、网友），其建议可能未经测试、相互矛盾甚至有害。请自行承担风险。</li>
        </ul>
        <CodeBlock language="bash" title="最终用户许可协议 (EULA)">
{`# 通过执行 'breathe.exe' 超过60秒，您已确认：
# 1. 您接受您的硬件配置，无论抽到什么。
# 2. 您理解“人生”不是一个bug，而是一个核心特性。
# 3. 您同意在系统崩溃时不追究开发者的责任。
# 4. 您放弃阅读条款和条件的权利。`}
        </CodeBlock>
      </div>
    )
  }
];