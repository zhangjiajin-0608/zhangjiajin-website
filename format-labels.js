window.addEventListener('DOMContentLoaded', () => {
  const labels = [
    '产品类型：','项目背景：','V1.0-MVP实现：','V2.0-Skills生态：','V3.0-用户增长运营：','V4.0-专家能力深入建设：',
    '【项目背景】：','【阶段一：售卖面积图（4 月上线）】','【阶段二 · 多级售卖指标（5–6 月上线）】','【阶段三 · 资源巡检平台（5–7 月上线）】',
    '【业务背景】：','【执行监控体系】：','【AI工程化】：','【结果与价值】：','【大模型交互设计】：','【测试与迭代】：',
    '产品生命周期管理：','项目维护：','交互设计：','设计测试：','全栈开发：','AI交互与验证：','用户需求：','双AI设计与系统实现：','摘要：','内容提要：'
  ];
  document.querySelectorAll('.detail-card p, .experience-card p, .publication-card p, .project-card p').forEach((p) => {
    const label = labels.find((item) => p.textContent.trim().startsWith(item));
    if (!label || p.querySelector('strong')) return;
    const html = p.innerHTML;
    const index = html.indexOf(label);
    if (index >= 0) p.innerHTML = `<strong>${label}</strong>${html.slice(index + label.length)}`;
  });
  document.querySelectorAll('.detail-card p, .experience-card p, .publication-card p, .project-card p').forEach((p) => {
    const text = p.textContent.trim();
    if (text.startsWith('测试与迭代：') && !p.querySelector('strong')) {
      p.innerHTML = `<strong>测试与迭代：</strong>${p.innerHTML.slice(p.innerHTML.indexOf('测试与迭代：') + 6)}`;
    }
  });
});
