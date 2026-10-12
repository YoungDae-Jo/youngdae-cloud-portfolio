export const profile = {
  name: "조영대",
  role: "Cloud Infrastructure Engineer / Platform Engineer",
  headline: "운영을 고려한 설계로 안정적인 플랫폼을 만드는 엔지니어",
  github: "https://github.com/YoungDae-Jo",
  portfolioPdf: "/pdf/portfolio.pdf",
  email: "qsxwdv961@gmail.com",
};

export const coreValues = [
  { title: "Operation First", description: "구축 이후의 운영, 장애 대응, 유지보수까지 고려해 설계합니다." },
  { title: "Problem Solving", description: "문제를 임시로 넘기기보다 Infrastructure Layer부터 원인을 추적합니다." },
  { title: "Automation", description: "반복 작업을 줄이고 운영 효율을 높이는 자동화를 지향합니다." },
  { title: "Collaboration", description: "운영 시나리오와 근거를 바탕으로 팀과 의사결정합니다." },
];

export const skills = [
  { group: "Cloud", items: ["AWS", "Azure"] },
  { group: "Virtualization", items: ["KVM", "libvirt"] },
  { group: "IaC", items: ["Terraform"] },
  { group: "Container", items: ["Docker", "Kubernetes"] },
  { group: "Platform", items: ["Backstage", "ArgoCD"] },
  { group: "AI", items: ["Azure OpenAI"] },
  { group: "Programming", items: ["Python", "Node.js", "TypeScript"] },
  { group: "Version Control", items: ["Git", "GitHub"] },
];

export const projects = [
  {
    id: "01",
    title: "Terraform 기반 AWS Infrastructure",
    role: "Cloud Infrastructure Engineer",
    period: "2026.01.26 ~ 2026.03.05",
    contribution: "50%",
    environment: "AWS Public Cloud",
    keyAchievement: "Terraform 기반 반복 가능한 인프라 구축과 운영 안정성을 고려한 역할 분리",
    architecture: "/architecture/terraform-architecture.png",
    demoQr: "/qr/terraform-demo-qr.png",
    stack: ["Terraform", "ALB", "ASG", "EC2", "NAT Instance", "Ubuntu", "Nginx", "Git", "PR"],
    overview: [
      "Terraform 기반으로 AWS 인프라를 코드화하여 반복 가능한 구축 환경을 구현했습니다.",
      "운영 환경을 고려한 네트워크 설계와 Auto Scaling 구성을 통해 안정적인 인프라를 구축하는 것을 목표로 했습니다."
    ],
    background: [
      "운영 환경에서는 동일한 인프라를 반복적으로 구축해야 하는 상황이 자주 발생합니다.",
      "수작업 구성은 환경 차이와 설정 오류로 이어질 수 있기 때문에 Infrastructure as Code를 적용하여 일관된 운영 환경을 구축하고자 했습니다."
    ],
    decisions: [
      "Terraform: Infrastructure as Code 적용",
      "ALB: 가용성을 고려한 트래픽 분산",
      "ASG: 확장 가능한 인프라 구성",
      "NAT Instance: 운영성과 장애 분석을 고려한 역할 분리"
    ],
    troubleshooting: [
      "NAT Instance와 Monitoring Instance를 통합하자는 의견이 있었으나, 장애 원인 분석이 어려워질 수 있다고 판단했습니다.",
      "운영 시나리오를 기준으로 역할 분리 필요성을 설명하고 팀 논의를 통해 구조를 수정했습니다."
    ],
    outcome: [
      "Terraform 기반 AWS 인프라 코드화",
      "ALB와 Auto Scaling을 활용한 확장 가능한 서비스 구조 구성",
      "운영 안정성과 장애 대응성을 고려한 NAT Instance 역할 분리"
    ],
    lessons: [
      "IaC는 단순 자동화가 아니라 운영 환경을 표준화하는 과정이라는 점을 배웠습니다.",
      "인프라 설계에서는 비용뿐 아니라 장애 발생 시 분석 가능성도 함께 고려해야 한다는 점을 경험했습니다."
    ],
  },
  {
    id: "02",
    title: "Kubernetes Internal Developer Platform",
    role: "AIOps Engineer",
    period: "2026.03.10 ~ 2026.04.10",
    contribution: "60%",
    environment: "On-Premise Private Cloud",
    keyAchievement: "KVM 기반 인프라부터 Kubernetes·GitOps·IDP·AI 운영 지원까지 단계적 구축",
    architecture: "/architecture/On-Premise-architecture.png",
    demoQr: "/qr/idp-demo-qr.png",
    stack: ["KVM", "libvirt", "Kubernetes", "containerd", "Cilium", "ArgoCD", "Backstage", "Discord", "Azure OpenAI"],
    overview: [
      "단일 고사양 서버를 KVM과 libvirt 기반 VM 4대로 분리하고, 그 위에 Kubernetes Cluster와 Internal Developer Platform을 구축했습니다.",
      "Backstage AI Assistant, Discord ChatOps, Azure OpenAI를 연계해 자연어 기반 운영 지원 환경을 구현했습니다."
    ],
    background: [
      "Kubernetes와 MSA 환경이 확대되면서 개발자는 여러 운영 도구를 직접 사용해야 했고 운영자는 반복적인 문의와 장애 대응 업무를 수행해야 했습니다.",
      "Public Cloud뿐 아니라 On-Premise 환경에서도 동일한 개발 및 운영 경험을 제공하기 위해 Infrastructure Layer부터 직접 구성했습니다."
    ],
    infrastructure: {
      host: [
        ["Host OS", "Ubuntu 24.04.4 LTS"],
        ["CPU", "32 Core"],
        ["Memory", "128 GB"],
        ["Storage", "2 TB NVMe SSD"],
        ["Virtualization", "KVM + libvirt"],
        ["Kubernetes", "v1.32 (kubeadm)"],
        ["Runtime", "containerd"],
        ["CNI", "Cilium"]
      ],
      vms: [
        ["k8s-cp", "Control Plane", "4 vCPU", "16 GB", "100 GB"],
        ["k8s-w1", "Worker 1", "8 vCPU", "32 GB", "400 GB"],
        ["k8s-w2", "Worker 2", "8 vCPU", "32 GB", "400 GB"],
        ["k8s-w3", "Worker 3", "8 vCPU", "32 GB", "400 GB"]
      ],
      build: [
        "KVM + libvirt",
        "Virtual Machine 생성",
        "containerd 설치 및 설정",
        "kubeadm 기반 Control Plane 초기화",
        "Worker Node Join",
        "Cilium CNI 설치",
        "Kubernetes Cluster Ready"
      ]
    },
    decisions: [
      "KVM + libvirt 기반 On-Premise 환경 구축",
      "kubeadm 기반 표준 Kubernetes Cluster 구성",
      "containerd Runtime 적용",
      "Cilium CNI 기반 Cluster Networking 구성",
      "GitHub Actions · ArgoCD 기반 GitOps 적용",
      "Backstage 기반 Internal Developer Platform 구축",
      "Discord ChatOps와 Azure OpenAI 기반 운영 지원 기능 구현"
    ],
    troubleshooting: [
      "Kubernetes API 오류가 Bot 중단으로 이어지는 문제를 try-catch와 fallback 처리로 개선했습니다.",
      "Azure OpenAI 연동 과정에서 Proxy, API Key, Deployment Name, CORS 문제를 순차적으로 분석하고 해결했습니다.",
      "자연어 질문이 잘못 분류되는 문제를 조사 제거, 토큰화, intent 우선순위 조정으로 개선했습니다.",
      "로그가 없는 Pod는 previous → current → describe 순서로 데이터를 확보하도록 분석 구조를 보완했습니다."
    ],
    outcome: [
      "KVM + libvirt 기반 On-Premise Private Cloud 구축",
      "Kubernetes v1.32 Cluster 구축",
      "containerd Runtime과 Cilium CNI 적용",
      "GitHub Actions · ArgoCD 기반 GitOps 구축",
      "Backstage Internal Developer Platform 구축",
      "Discord ChatOps 및 Azure OpenAI 기반 운영 지원 기능 구현"
    ],
    lessons: [
      "Infrastructure를 먼저 설계한 후 Platform을 구축하면서 플랫폼은 안정적인 Infrastructure 위에서 동작한다는 점을 경험했습니다.",
      "VM Resource Planning과 Kubernetes Cluster 구성이 플랫폼의 안정성과 확장성에 직접적인 영향을 준다는 점을 배웠습니다.",
      "Public Cloud뿐 아니라 On-Premise 환경에서도 운영 안정성, 표준화, 자동화라는 동일한 원칙이 적용된다는 점을 이해했습니다."
    ],
    featureImages: [
      { title: "Backstage AI Assistant", src: "/architecture/Backstage AI Assistant.png", description: "포털 기반 자연어 질의와 개발자 셀프서비스 지원" },
      { title: "Discord ChatOps", src: "/architecture/Discord ChatOps.png", description: "Pod 상태 조회, 로그 조회, 장애 분석, Service 조회" },
      { title: "ArgoCD", src: "/architecture/ArgoCD.png", description: "GitOps 기반 배포 및 자동 Sync" }
    ],
  },
  {
    id: "03",
    title: "Multi-Cloud FinOps & AIOps Platform with Semi-Automated Disaster Recovery",
    role: "Cloud Infrastructure / Kubernetes Engineer",
    period: "2026.04.16 ~ 2026.07.21",
    contribution: "팀 프로젝트 (6인)",
    environment: "AWS Seoul (Primary) / Osaka (DR)",
    keyAchievement: "Terraform 기반 AWS·Kubernetes 인프라 구성과 RDS 연계 및 반자동 재해 복구 설계",
    architecture: "/architecture/project3-aws-architecture.png",
    demoQr: "/qr/project3-demo-qr.png",
    stack: ["AWS", "Terraform", "Ansible", "EC2", "Kubernetes", "RDS PostgreSQL", "Kafka", "Prometheus", "Grafana", "GitHub Actions", "Lambda", "Route 53", "Athena"],
    overview: [
      "AWS 서울 리전 운영 환경과 오사카 리전 재해 복구 환경을 중심으로 비용 분석(FinOps), 이상 탐지(AIOps), 반자동 DR을 결합한 통합 프로젝트입니다.",
      "Terraform과 Ansible로 인프라 구성을 자동화하고 EC2 기반 Kubernetes 및 RDS PostgreSQL 연계를 진행했습니다."
    ],
    background: [
      "클라우드 운영에서는 장애 감지뿐 아니라 비용 가시성과 복구 절차의 일관성을 함께 고려해야 합니다.",
      "운영 데이터 수집·분석과 담당자 승인(Human Gate)을 거치는 복구 흐름을 하나의 플랫폼으로 설계했습니다."
    ],
    decisions: [
      "Terraform 및 Ansible을 활용한 AWS 인프라 구성",
      "EC2 기반 Kubernetes 클러스터 운영 및 ALB/Ingress 연계",
      "RDS PostgreSQL을 통한 관리형 데이터베이스 전환",
      "Kafka 기반 운영 메트릭 수집과 Prometheus·Grafana 활용",
      "Isolation Forest 이상 탐지 및 Random Forest 비용 예측 적용",
      "서울 운영 리전과 오사카 DR 리전, Human Gate 기반 반자동 복구 설계"
    ],
    troubleshooting: [
      "Kubernetes 노드의 EBS 루트 볼륨 부족으로 발생한 DiskPressure를 용량 확장으로 해결했습니다.",
      "RDS 연결 시 VPC 구성이 일치하지 않는 문제를 확인하고 동일 VPC 내에 재구성했습니다.",
      "Kafka 브로커 통신을 위해 내부 IP와 보안 그룹의 9092 포트 허용 규칙을 점검했습니다."
    ],
    outcome: [
      "Terraform·Ansible 기반 AWS 인프라 및 EC2 Kubernetes 클러스터 구성",
      "RDS PostgreSQL 전환과 내부 네트워크 연계 작업 수행",
      "FinOps·AIOps 분석과 반자동 DR 시나리오를 통합한 프로젝트 아키텍처 설계"
    ],
    featureImages: [
      { title: "Operations Workflow", src: "/architecture/project3-operations-workflow.png", description: "운영 데이터 수집부터 AIOps·FinOps 분석과 대응까지의 흐름" },
      { title: "DR 실행 결과", src: "/architecture/project3-dr-result.png", description: "DR 전환 과정의 서비스 복구 및 정상 응답 확인 화면" }
    ],
    lessons: [
      "인프라 코드화뿐 아니라 네트워크, 데이터베이스, 클러스터 간 의존성을 함께 검증하는 중요성을 배웠습니다.",
      "DR은 자동 전환 기능만이 아니라 승인 절차와 복구 목표를 포함한 운영 설계가 필요하다는 점을 경험했습니다."
    ]
  },

];
