import { ArrowTrendingUpIcon, CurrencyYenIcon, CalculatorIcon, ChartBarIcon, BuildingOfficeIcon, ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, DocumentMagnifyingGlassIcon, PuzzlePieceIcon, AdjustmentsHorizontalIcon, InboxArrowDownIcon} from '@heroicons/react/20/solid'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import Icon from './Icon'

const features = [
  {
    name: '收入管理',
    description:
      '您的每一分收入都将被精确追踪与分析。我们提供深度的数据洞察和实时报告，使您能够全面理解并优化收入结构，从而实现财务效率的最大化。',
    href: '/revenue-management',
    icon: ArrowTrendingUpIcon,
    slds: "opportunity"
  },
  {
    name: '支出管理',
    description:
      '致力于为您提供全面而精确的支出监控。通过先进的分类和分析工具，您可以有效地识别成本节约机会，并实施更为明智的预算管理策略。',
    href: '/spend-management',
    icon: CurrencyYenIcon,
    slds: "orders",
  },
  {
    name: '预算管理',
    description:
      '帮助您实现长期和短期的财务目标。通过灵活的预算设置和详细的执行监控，我们的系统确保您的财务规划与业务目标保持一致，促进持续的财务健康。',
    href: '',
    icon: CalculatorIcon,
    slds: "chart",
  },
  {
    name: '智能识票',
    description:
      '通过自动化接收、验证和处理供应商发票的流程，提高效率并减少错误。包括智能发票识别、查重、合规性检查，确保财务操作的流畅性。',
    href: '',
    icon: DocumentMagnifyingGlassIcon,
    slds: "product",
  },
  {
    name: '智能报销',
    description:
      '一键导入电子发票，体验无纸化报销的同时确保信息完整性、准确性及真实性。避免人为错误及有效降低运营成本，提高企业报销管理效率。',
    href: '/expense-management',
    icon: ClipboardDocumentCheckIcon,
    slds: "expense_report_entry",
  },
  {
    name: '智能催收',
    description:
      '运用智能算法自动发送催收提醒，提高应收账款回收率。根据客户的支付历史和行为，制定个性化的催收策略，提升效率。',
    href: '',
    icon: InboxArrowDownIcon,
    slds: "collection_variable",
  },
  {
    name: '智能分析',
    description:
      '利用先进的人工智能技术，我们提供的智能分析工具不仅仅是回顾过去，更是预测未来。结合人工智能和机器学习，我们的系统为您提供洞察力和预测能力，助您做出更加明智和前瞻性的决策。',
    href: '',
    icon: ChartBarIcon,
    slds: "report",
  },
  {
    name: '应用集成',
    description:
      '费控王支持与各类业务软件的高效集成，包括会计软件、ERP系统等。这种无缝集成不仅提高数据的准确性和一致性，还优化了工作流程，提升整体运营效率。',
    href: '',
    icon: PuzzlePieceIcon,
    slds: "connected_apps",
  },
  {
    name: '业务自定义',
    description:
      '我们了解每个企业的独特性，因此提供高度个性化的业务自定义选项。无论是单据格式、数据展示，还是工作流程的自动化，我们都能根据您的具体业务需求定制，确保系统与您的企业战略和操作需求完美契合。',
    href: '',
    icon: AdjustmentsHorizontalIcon,
    slds: "no_code_model",
  },
]

export default function Example() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">费控王</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          深入了解 费控王 的解决方案
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-700">
          优化直接和间接采购、差旅和费用以及服务支出管理，从而提高洞察力和控制力，节约更多成本。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow border border-slate-300 hover:border-sky-600">
                <div className="flex flex-1 flex-col p-8">
                  <div className="mx-auto">
                    <Icon name={feature.slds} className="slds-icon_large"></Icon>
                  </div>
                  <h3 className="my-3 text-lg font-medium text-gray-900">{feature.name}</h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className=" text-slate-800">{feature.description}</dd>
                  </dl>
                  {feature.href &&(
                    <a href={feature.href} className="pt-4 leading-6 text-sky-600">了解更多</a>
                  )}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
