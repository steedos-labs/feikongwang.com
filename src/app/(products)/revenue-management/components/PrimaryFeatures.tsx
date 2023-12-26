import { CurrencyYenIcon, ChartBarIcon, BuildingOfficeIcon, ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, DocumentMagnifyingGlassIcon} from '@heroicons/react/20/solid'

const features = [
  {
    name: '客户管理',
    description:
      '集中管理客户信息，包括联系方式、交易历史和喜好，以便于提供个性化服务。通过跟踪客户互动和反馈，深化客户关系，提升客户满意度。',
    href: '#',
    icon: BuildingOfficeIcon,
  },
  {
    name: '销售合同 / 订单',
    description:
      '自动化合同管理流程，确保准确和及时的合同履行。实时监控合同条款的执行，确保所有交易都符合约定和公司制度要求。',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: '收款管理',
    description:
      '根据合同自动化生成和收款计划，减少手动操作，提高收款效率。实时跟踪应收账款，快速识别和解决收款问题，保持良好的现金流状态。',
    href: '#',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: '开票管理',
    description:
      '高效生成和发送电子发票，提供灵活的开票选项以适应不同客户需求。准确计算税费和折扣，确保发票信息的准确无误。',
    href: '#',
    icon: CurrencyYenIcon,
  },
  {
    name: '库存管理',
    description:
      '全面跟踪库存水平，实时更新库存变化，优化库存管理。通过精确的库存预测和需求分析，减少过剩库存，降低成本。',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: '智能催收',
    description:
      '运用智能算法自动发送催收提醒，提高应收账款回收率。根据客户的支付历史和行为，制定个性化的催收策略，提升效率。',
    href: '#',
    icon: ChartBarIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">收入管理</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          深入了解 费控王 的收入管理解决方案
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          费控王是寻求自动化和优化收入管理流程的企业的理想选择。通过提供全面的工具和分析，帮助企业提高财务透明度，提升收入效率，并促进更智能的业务决策。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
