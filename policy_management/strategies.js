/* ============================================================
   要新增策略，只需在下面数组里加一行对象即可。
   date        : 编号，如 "0604-5"（MMDD-序号）
   upright     : 扶正能力分数
   balance     : 平衡能力分数
   disturb     : 抗扰能力分数
   uprightUrl  : 点击扶正能力数字跳转的网址（留空则不跳转）
   balanceUrl  : 点击平衡能力数字跳转的网址（留空则不跳转）
   disturbUrl  : 点击抗扰能力数字跳转的网址（留空则不跳转）
   policy      : 策略文件相对路径（.pt）
   config      : 配置文件相对路径（.yaml）
   video       : 视频文件相对路径（.mp4，留空则不显示按钮）
   ============================================================ */
const strategies = [
  {
    date: "0602-3",
    upright: 0.406972,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-3-policy_stable_domain_cells.html",
    balance: 0.277331,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-3-policy_balance_stable_domain_cells.html",
    disturb: 0.437297,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-3-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0602-3-policy.pt",
    config: "policies/0602-3-config.yaml"
  },
  {
    date: "0602-4",
    upright: 0.406972,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-4-policy_stable_domain_cells.html",
    balance: 0.277331,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-4-policy_balance_stable_domain_cells.html",
    disturb: 0.437297,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-4-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0602-4-policy.pt",
    config: "policies/0602-4-config.yaml"
  },
  {
    date: "0602-6",
    upright: 0.441363,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-6-policy_stable_domain_cells.html",
    balance: 0.573858,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-6-policy_balance_stable_domain_cells.html",
    disturb: 0.505129,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-6-policy_disturb_eps_stable_domain_cells.html",
    note: "早期策略，无eps扰动，静止平衡稳定性好",
    policy: "policies/0602-6-policy.pt",
    config: "policies/0602-6-config.yaml"
  },
  {
    date: "0602-10",
    upright: 0.484937,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-10-policy_stable_domain_cells.html",
    balance: 0.691343,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-10-policy_balance_stable_domain_cells.html",
    disturb: 0.602101,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-10-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0602-10-policy.pt",
    config: "policies/0602-10-config.yaml",
    video: "videos/0602-10.mp4"
  },
  {
    date: "0602-11",
    upright: 0.421411,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-11-policy_stable_domain_cells.html",
    balance: 0.651864,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-11-policy_balance_stable_domain_cells.html",
    disturb: 0.518051,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0602-11-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0602-11-policy.pt",
    config: "policies/0602-11-config.yaml"
  },
  {
    date: "0603-1",
    upright: 0.466533,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-1-policy_stable_domain_cells.html",
    balance: 0.698823,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-1-policy_balance_stable_domain_cells.html",
    disturb: 0.590362,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-1-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0603-1-policy.pt",
    config: "policies/0603-1-config.yaml",
    video: "videos/0603-1.mp4"
  },
  {
    date: "0603-8",
    upright: 0.500596,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-8-policy_stable_domain_cells.html",
    balance: 0.577468,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-8-policy_balance_stable_domain_cells.html",
    disturb: 0.557157,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-8-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0603-8-policy.pt",
    config: "policies/0603-8-config.yaml"
  },
  {
    date: "0603-9",
    upright: 0.340412,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-9-policy_stable_domain_cells.html",
    balance: 0.586973,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-9-policy_balance_stable_domain_cells.html",
    disturb: 0.592679,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-9-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0603-9-policy.pt",
    config: "policies/0603-9-config.yaml",
    video: "videos/0603-9.mp4"
  },
  {
    date: "0603-11",
    upright: 0.476046,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-11-policy_stable_domain_cells.html",
    balance: 0.578270,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-11-policy_balance_stable_domain_cells.html",
    disturb: 0.622963,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-11-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0603-11-policy.pt",
    config: "policies/0603-11-config.yaml",
    video: "videos/0603-11.mp4"
  },
  {
    date: "0603-13",
    upright: 0.542627,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-13-policy_stable_domain_cells.html",
    balance: 0.638717,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-13-policy_balance_stable_domain_cells.html",
    disturb: 0.598380,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0603-13-policy_disturb_eps_stable_domain_cells.html",
    note: "原地平衡稳定，大eps转角或身体侧倾容易退出",
    policy: "policies/0603-13-policy.pt",
    config: "policies/0603-13-config.yaml",
    video: "videos/0603-13.mp4"
  },
  {
    date: "0604-1",
    upright: 0.441787,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0604-1-policy_stable_domain_cells.html",
    balance: 0.665699,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0604-1-policy_balance_stable_domain_cells.html",
    disturb: 0.573213,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0604-1-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0604-1-policy.pt",
    config: "policies/0604-1-config.yaml"
  },
  {
    date: "0604-5",
    upright: 0.510767,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0604-5-policy_stable_domain_cells.html",
    balance: 0.596739,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0604-5-policy_balance_stable_domain_cells.html",
    disturb: 0.691862,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0604-5-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0604-5-policy.pt",
    config: "policies/0604-5-config.yaml",
    video: "videos/0604-5.mp4"
  },
  {
    date: "0605-1",
    upright: 0.439418,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0605-1-policy_stable_domain_cells.html",
    balance: 0.654575,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0605-1-policy_balance_stable_domain_cells.html",
    disturb: 0.578481,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0605-1-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0605-1-policy.pt",
    config: "policies/0605-1-config.yaml",
    video: "videos/0605-1.mp4"
  },
  {
    date: "0605-3",
    upright: 0.380037,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0605-3-policy_stable_domain_cells.html",
    balance: 0.574323,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0605-3-policy_balance_stable_domain_cells.html",
    disturb: 0.646435,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0605-3-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0605-3-policy.pt",
    config: "policies/0605-3-config.yaml",
    video: "videos/0605-3.mp4"
  },
  {
    date: "0605-4",
    upright: 0.441843,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0605-4-policy_stable_domain_cells.html",
    balance: 0.642479,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0605-4-policy_balance_stable_domain_cells.html",
    disturb: 0.691540,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0605-4-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0605-4-policy.pt",
    config: "policies/0605-4-config.yaml",
    video: "videos/0605-4.mp4"
  },
  {
    date: "0608-4",
    upright: 0.385242,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0608-4-policy_stable_domain_cells.html",
    balance: 0.660077,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0608-4-policy_balance_stable_domain_cells.html",
    disturb: 0.677109,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0608-4-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0608-4-policy.pt",
    config: "policies/0608-4-config.yaml",
    video: "videos/0608-4.mp4"
  },
  {
    date: "0608-5",
    upright: 0.401155,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0608-5-policy_stable_domain_cells.html",
    balance: 0.582593,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0608-5-policy_balance_stable_domain_cells.html",
    disturb: 0.659832,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0608-5-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0608-5-policy.pt",
    config: "policies/0608-5-config.yaml",
    video: "videos/0608-5.mp4"
  },
  {
    date: "0608-6",
    upright: 0.349977,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0608-6-policy_stable_domain_cells.html",
    balance: 0.706095,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0608-6-policy_balance_stable_domain_cells.html",
    disturb: 0.622787,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0608-6-policy_disturb_eps_stable_domain_cells.html",
    note: "不确定",
    policy: "policies/0608-6-policy.pt",
    config: "policies/0608-6-config.yaml",
    video: "videos/0608-6.mp4"
  },
  {
    date: "0609-1",
    upright: 0.392323,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-1-policy_stable_domain_cells.html",
    balance: 0.744596,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-1-policy_balance_stable_domain_cells.html",
    disturb: 0.561848,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-1-policy_disturb_eps_stable_domain_cells.html",
    note: "大eps转角不退出，身体侧倾不退出，原地平衡抖动强",
    policy: "policies/0609-1-policy.pt",
    config: "policies/0609-1-config.yaml",
    video: "videos/0609-1.mp4"
  },
  {
    date: "0609-3",
    upright: 0.429705,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-3_stable_domain_cells.html",
    balance: 0.795563,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-3_balance_stable_domain_cells.html",
    disturb: 0.725918,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-3_disturb_eps_stable_domain_cells.html",
    note: "eps大角度不退出，身体侧倾不退出，原地平衡抖动强",
    policy: "policies/0609-3.pt",
    config: "policies/0609-3-config.yaml",
    video: "videos/0609-3.mp4"
  },
  {
    date: "0609-4",
    upright: 0.394055,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-4_stable_domain_cells.html",
    balance: 0.750244,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-4_balance_stable_domain_cells.html",
    disturb: 0.625400,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-4_disturb_eps_stable_domain_cells.html",
    note: "eps大角度不退出，身体侧倾不退出，原地平衡抖动强",
    policy: "policies/0609-4.pt",
    config: "policies/0609-4-config.yaml",
    video: "videos/0609-4.mp4"
  },
  {
    date: "0609-5",
    upright: 0.398136,    uprightUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-5_stable_domain_cells.html",
    balance: 0.696942,    balanceUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-5_balance_stable_domain_cells.html",
    disturb: 0.654034,    disturbUrl: "https://gearguan.github.io/html_folder/policy_management/policy_description/0609-5_disturb_eps_stable_domain_cells.html",
    note: "eps大角度不退出，身体侧倾不退出，原地平衡抖动强",
    policy: "policies/0609-5.pt",
    config: "policies/0609-5-config.yaml",
    video: "videos/0609-5.mp4"
  },
];
