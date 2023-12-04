import Header from '../../components/about/Header'
import HistorySection from '../../components/about/HistorySection'
import QualitySection from '../../components/about/QualitySection'
import ExperienceSection from '../../components/about/ExperienceSection'


const Page = () => {

  return (
    <div className="text-[#1e1305] flex-col scroll p-4 px-0 mt-1 h-4/5 mx-auto overflow-auto bg-[#ede0d0] w-5/6 rounded-3xl">
      <Header />
      <HistorySection />
      <QualitySection />
      <ExperienceSection />
    </div>
  );
};

export default Page;