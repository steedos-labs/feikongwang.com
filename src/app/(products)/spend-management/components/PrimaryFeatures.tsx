import { CurrencyYenIcon, ChartBarIcon, BuildingOfficeIcon, ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, DocumentMagnifyingGlassIcon} from '@heroicons/react/20/solid'

const features = [
  {
    name: '供应商管理',
    description:
      '不仅帮助您精选和评估供应商，还提供深入的性能分析和风险管理，确保您的供应链始终高效且稳健。',
    href: '#',
    icon: BuildingOfficeIcon,
  },
  {
    name: '合同管理',
    description:
      '从自动化创建到详细监控，提供了一个全面的解决方案，帮助企业轻松管理复杂合同，同时确保商业活动始终符合法律和合同规定。',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: '智能识票',
    description:
      '通过自动化接收、验证和处理供应商发票的流程，提高效率并减少错误。包括智能发票识别、查重、合规性检查，确保财务操作的流畅性。',
    href: '#',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: '差旅和报销管理',
    description:
      '一键导入电子发票，体验无纸化报销的同时确保信息完整性、准确性及真实性。避免人为错误及有效降低运营成本，提高企业报销管理效率。',
    href: '#',
    icon: CurrencyYenIcon,
  },
  {
    name: '付款管理',
    description:
      '通过自动化流程，不仅保证及时准确的供应商支付，还帮助您更好地管理企业现金流，从而提升整体财务健康状况。',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: '数据分析',
    description:
      '提供实时的成本和收益跟踪，根据费用类别、项目、部门、客户进行多维度的核算，从而支持基于数据的战略决策，提高项目盈利能力。',
    href: '#',
    icon: ChartBarIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">支出管理</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          深入了解 费控王 的支出管理解决方案
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          优化直接和间接采购、差旅和费用以及服务支出管理，从而提高洞察力和控制力，节约更多成本。
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
