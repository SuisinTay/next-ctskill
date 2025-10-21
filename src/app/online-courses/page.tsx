import { ContactForm } from "@/components/forms";
import {
  PageHeader,
  Testimonial,
  TestimonialContent,
} from "@/components/marketing";
import { SearchCoursesCard } from "@/components/marketing/search-courses-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  BookAudio,
  ChartNoAxesCombined,
  ChevronDownIcon,
  ChevronRight,
  ClipboardList,
  Flag,
  Handshake,
  Landmark,
  Play,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Online Courses" }];

const searchInformationItems = [
  {
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    image: "/images/search-image.jpg",
    title: "Course title can go here and it can go up to two lines",
    informations: [
      {
        icon: (
          <Star
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Level 2 Qualification with Certificate",
      },
      {
        icon: (
          <Landmark
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "HM Government Funded",
      },
      {
        icon: (
          <TrendingUp
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Fast-track Online Enrolment",
      },
    ],
  },
  {
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    image: "/images/search-image.jpg",
    title: "Course title can go here and it can go up to two lines",
    informations: [
      {
        icon: (
          <Star
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Level 2 Qualification with Certificate",
      },
      {
        icon: (
          <Landmark
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "HM Government Funded",
      },
      {
        icon: (
          <TrendingUp
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Fast-track Online Enrolment",
      },
    ],
  },
  {
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    image: "/images/search-image.jpg",
    title: "Course title can go here and it can go up to two lines",
    informations: [
      {
        icon: (
          <Star
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Level 2 Qualification with Certificate",
      },
      {
        icon: (
          <Landmark
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "HM Government Funded",
      },
      {
        icon: (
          <TrendingUp
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Fast-track Online Enrolment",
      },
    ],
  },
  {
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    image: "/images/search-image.jpg",
    title: "Course title can go here and it can go up to two lines",
    informations: [
      {
        icon: (
          <Star
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Level 2 Qualification with Certificate",
      },
      {
        icon: (
          <Landmark
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "HM Government Funded",
      },
      {
        icon: (
          <TrendingUp
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Fast-track Online Enrolment",
      },
    ],
  },
  {
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    image: "/images/search-image.jpg",
    title: "Course title can go here and it can go up to two lines",
    informations: [
      {
        icon: (
          <Star
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Level 2 Qualification with Certificate",
      },
      {
        icon: (
          <Landmark
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "HM Government Funded",
      },
      {
        icon: (
          <TrendingUp
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Fast-track Online Enrolment",
      },
    ],
  },
  {
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    image: "/images/search-image.jpg",
    title: "Course title can go here and it can go up to two lines",
    informations: [
      {
        icon: (
          <Star
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Level 2 Qualification with Certificate",
      },
      {
        icon: (
          <Landmark
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "HM Government Funded",
      },
      {
        icon: (
          <TrendingUp
            className="fill-secondary-orange-100 placeholder-secondary-orange-100"
            color="#f8b725"
          />
        ),
        info: "Fast-track Online Enrolment",
      },
    ],
  },
];

const whyLearnItems = [
  {
    title: "Flexible online learning",
    content: "Study anywhere, anytime, and fit learning around your lifestyle.",
    icon: <BookAudio className="opacity-[0.24] w-[43] h-[43] absolute" />,
  },
  {
    title: "Maximise learning and developments budgets",
    content: "Employers can improve retention, morale, and CPD outcomes.",
    icon: <BookAudio className="opacity-[0.24] w-[43] h-[43] absolute" />,
  },
  {
    title: "80% achievement rate",
    content: "Achieve a nationally recognised NCFE CACHE qualification.",
    icon: (
      <ChartNoAxesCombined className="opacity-[0.24] w-[43] h-[43] absolute" />
    ),
  },
  {
    title: "Dedicated tutor support",
    content: "Expert guidance every step of the way.",
    icon: <Handshake className="opacity-[0.24] w-[43] h-[43] absolute" />,
  },
  {
    title: "Achieve in as little as 10 weeks",
    content: "By committing 5–10 hours per week.",
    icon: <Flag className="opacity-[0.24] w-[43] h-[43] absolute" />,
  },
];

const vacanciesItems = [
  {
    key: 1,
    title: "Involvency Apprentice This Title Can Go Up To 2 Lines",
    location: "Hampshire",
    salaryRange: "90-100k",
    description:
      "A brief description of the job. Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    jobRole: "Permanent",
  },
  {
    key: 2,
    title: "Involvency Apprentice This Title Can Go Up To 2 Lines",
    location: "Hampshire",
    salaryRange: "90-100k",
    description:
      "A brief description of the job. Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    jobRole: "Permanent",
  },
  {
    key: 3,
    title: "Involvency Apprentice This Title Can Go Up To 2 Lines",
    location: "Hampshire",
    salaryRange: "90-100k",
    description:
      "A brief description of the job. Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    jobRole: "Permanent",
  },
];

const staticCardItems = [
  {
    name: "Employers",
    icon: <ClipboardList />,
    content: [
      "Find and attract diverse talent locally and nationally.",
      "Upskill and reskill your existing workforce effectively.",
      "Tailor learning programs to meet specific business needs.",
      "Support employee progression and enhance retention.",
      "Develop adaptable team members ready for change.",
      "Integrate apprenticeships into your broader talent strategy.",
      "Understand the apprenticeship levy and funding options.",
      "Alleviate L&D budget pressures using the levy.",
      "Diversify your team for fresh perspectives and ideas.",
      "Improve productivity, service quality, and reduce recruitment costs.",
    ],
  },
  {
    name: "Learners",
    icon: <Search />,
    content: [
      "Start or advance your career with an apprenticeship.",
      "Earn while you learn, avoiding student debt.",
      "Access local and national job opportunities.",
      "Upskill in your chosen profession.",
      "Gain an industry-recognised qualification.",
      "Choose from a wide range of apprenticeship programmes.",
      "Programmes available for all experience levels.",
      "Benefit from peer and mentor support.",
      "Receive career guidance and pastoral care.",
      "Enjoy personal 1-2-1 training without extra homework.",
    ],
  },
];

export default function Apprenticeship() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title="Online Courses"
        breadcrumbs={breadcrumbs}
        backgroundColor="bg-secondary-orange-10"
        titleColor="text-neutral-black-100"
        headerImage="/images/online-courses-header-image.png"
        content="Unlock your future with nationally recognised online courses - study from anywhere, succeed everywhere."
        mainHeader
      />

      {/* Intro of apprenticeships */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
        <div className="py-20 sm:py-24 lg:py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Video */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gradient-to-b from-transparent to-black">
                <Image
                  src="/images/video-placeholder.png"
                  alt="CT Skills Video"
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[74px] h-[74px] bg-neutral-white-100 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-primary-100" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h5 className="text-xl sm:text-xl font-semibold text-neutral-black-100">
                  A bit of title{" "}
                  <span className="text-primary-100">can go here</span>
                </h5>
                <p className="text-base text-neutral-black-100 leading-relaxed">
                  Boost your CV, change career, or build confidence with our
                  flexible online courses. Accredited by NCFE CACHE and
                  equivalent to GCSEs, they fit around your life and open doors
                  to new opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Secton */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10 flex justify-between pb-16">
        <Card className="border-neutral-black-30 p-12">
          <div className="text-start">
            <h5 className="text-xl font-semibold">
              Ready to take the{" "}
              <span className="text-primary-100">next step?</span>
            </h5>
            <p>Browse our courses below and find your perfect fit.</p>
          </div>
          <Card className="border-neutral-black-30 p-3 pl-6 flex flex-row items-center">
            <div className="w-[654] border-r border-neutral-black-30">
              <p className="text-primary-100">
                SEARCH FOR COURSE TITLE OR KEYWORDS
              </p>
              <Input
                placeholder={`Try "childcare"`}
                className="border-0 shadow-none p-0 w-[200]"
              />
            </div>
            <div className="w-[315]">
              <p className="text-primary-100">POSTCODE</p>
              <Input
                placeholder={`"12345"`}
                className="border-0 shadow-none p-0"
              />
            </div>
            <Button variant="default" size="lg" asChild className="w-fit">
              <Link href="/contact-us">
                <span className="text-m font-[400]">Search</span>
                <div className="p-2 bg-neutral-white-100 rounded-md">
                  <ChevronRight className="h-4 w-4" color="#450932" />
                </div>
              </Link>
            </Button>
          </Card>
          <div className="flex justify-between">
            <div className="w-[292] flex flex-col gap-4">
              <p className="text-neutral-black-30 font-bold text-[13px]">
                CATEGORIES
              </p>
              <div className="flex items-center">
                <Checkbox />
                <div className="w-full flex justify-between pl-6">
                  <p>Business Skills</p>
                  <p className="font-bold">32</p>
                </div>
              </div>
              <div className="flex items-center">
                <Checkbox />
                <div className="w-full flex justify-between pl-6">
                  <p>Childcare</p>
                  <p className="font-bold">23</p>
                </div>
              </div>
              <div className="flex items-center">
                <Checkbox />
                <div className="w-full flex justify-between pl-6">
                  <p>IT Skills</p>
                  <p className="font-bold">13</p>
                </div>
              </div>
              <div className="flex items-center">
                <Checkbox />
                <div className="w-full flex justify-between pl-6">
                  <p>Mental Health</p>
                  <p className="font-bold">9</p>
                </div>
              </div>
              <div className="flex items-center">
                <Checkbox />
                <div className="w-full flex justify-between pl-6">
                  <p>Social Care</p>
                  <p className="font-bold">8</p>
                </div>
              </div>
              <p className="text-primary-100 font-bold">RESET</p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              {searchInformationItems.map((searchInformationItem, index) => (
                <SearchCoursesCard
                  key={index}
                  taggings={searchInformationItem.taggings}
                  image={searchInformationItem.image}
                  title={searchInformationItem.title}
                  informations={searchInformationItem.informations}
                />
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Carousel Section */}
      <div className=" w-full bg-neutral-black-10 py-16">
        <h4 className="text-2xl font-semibold text-center">
          Why learn with <span className="text-primary-100">CT Skills</span>
        </h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur. Vulputate lectus amet tempus
          nunc amet pharetra purus. Id id id tortor vitae diam.
        </p>
      </div>

      {/* Card sections*/}
      <div className="flex bg-neutral-black-10 items-center flex-col gap-4">
        <div className="bg-neutral-black-10 grid grid-cols-3 px-[100] gap-4">
          {whyLearnItems.slice(0, 3).map((item) => (
            <Card
              key={item.title}
              className="bg-white p-6 h-[184px] border-neutral-black-30 flex flex-col justify-center items-center"
            >
              <div className="min-w-[251px] h-[48] flex">
                {item.icon}
                <h6 className="text-lg font-semibold leading-snug flex flex-col justify-end ml-6">
                  {item.title}
                </h6>
              </div>
              <p className="text-center">{item.content}</p>
            </Card>
          ))}
        </div>
        <div className="bg-neutral-black-10 grid grid-cols-2 px-[100] gap-4">
          {whyLearnItems.slice(3).map((item) => (
            <Card
              key={item.title}
              className="bg-white p-6 h-[184px] border-neutral-black-30 flex flex-col justify-center items-center"
            >
              <div className="min-w-[251px] h-[48] flex">
                {item.icon}
                <h6 className="text-lg font-semibold leading-snug flex flex-col justify-end ml-6">
                  {item.title}
                </h6>
              </div>
              <p className="text-center">{item.content}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="w-full flex justify-center bg-neutral-black-10 py-16">
        <div className="w-2/3 border border-primary-60"></div>
      </div>

      {/* Testimonials Section*/}
      <section className="relative overflow-hidden bg-neutral-black-10">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="pb-20 sm:pb-24 lg:pb-[120px]">
            <div className=" w-full py-16">
              <p className="font-bold text-primary-60 text-sm text-center">
                TESTIMONIALS
              </p>
              <h6 className="text-lg font-semibold text-center text-primary-100">
                Listen to what people have to say about their experience with
                us!
              </h6>
            </div>

            {/* Testimonials Carousel*/}
            <div className="flex w-full justify-center gap-4">
              <Testimonial>
                <Image
                  alt="Test Image"
                  width={463}
                  height={330}
                  src="/images/testimonial.png"
                />
                <TestimonialContent
                  title="Employer Feedback"
                  subtitle="A certain company/sector can go here"
                  description="A bit of description can go here. Secured a full time role within 3 weeks of completing her apprenticeship in May 2025."
                />
              </Testimonial>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Triangle */}
      <div className="w-full h-[68px] bg-neutral-black-10 bottom-right-slated-shape"></div>

      {/* Map search section */}
      <section className="relative overflow-hidden  bg-white">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            {/* Map title & descriptions */}
            <div className="flex flex-col gap-4 w-[316px]">
              <h4 className="text-2xl font-semibold">Adult Skills Fund</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi nisi at placerat
                cras lectus venenatis. Nunc cursus vel eget gravida suspendisse.
                Use this search tool to check funding in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden  bg-neutral-black-10">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            {/* FAQ title & descriptions */}
            <div className="flex w-full gap-4 justify-between">
              <div className="flex flex-col gap-4 w-[316px]">
                <h4 className="text-2xl font-semibold">FAQs</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Morbi nisi at placerat
                  cras lectus venenatis. Nunc cursus vel eget gravida
                  suspendisse. Use this search tool to check funding in your
                  area.
                </p>
                <Button variant="default" size="md" asChild className="w-fit">
                  <Link href="/contact-us">
                    <span>Reach out to us</span>
                    <div className="p-2 bg-neutral-white-100 rounded-md">
                      <ChevronRight className="h-4 w-4" color="#450932" />
                    </div>
                  </Link>
                </Button>
              </div>
              <div className="w-[843] flex flex-col gap-4">
                <Card className="py-8 px-10 bg-white">
                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex flex-col items-start justify-between w-full cursor-pointer group">
                      <div className="flex justify-between w-full h-fit">
                        <h3 className="sm:text-lg font-semibold">
                          Am I eligible for funding?
                        </h3>
                        <ChevronDownIcon className="ml-auto w-6 h-6 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </div>
                      <CollapsibleContent>
                        <p className="text-base  text-left pt-4">
                          Eligibility Criteria:
                        </p>
                        <ul className="list-disc pl-5 text-start">
                          <li>Aged 19 or over as of 31/8/24</li>
                          <li>Living in England</li>
                          <li>
                            Lived in the UK or EU/EEA for the last 3 years
                          </li>
                          <li>
                            Not currently enrolled on any other government
                            funded course or started another application for one
                          </li>
                        </ul>
                        <br />
                        <br />
                        <p className="text-start">
                          Please note: Not all areas of England are funded via
                          online enrolment. You can use our postcode checker
                          above to see if you are.
                        </p>
                      </CollapsibleContent>
                    </CollapsibleTrigger>
                  </Collapsible>
                </Card>
                <Card className="py-8 px-10 bg-white">
                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex flex-col items-start justify-between w-full cursor-pointer group">
                      <div className="flex justify-between w-full h-fit">
                        <h3 className="sm:text-lg font-semibold">
                          I think I’m eligible for the funding but it’s saying
                          I’m not, why?
                        </h3>
                        <ChevronDownIcon className="ml-auto w-6 h-6 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </div>
                      <CollapsibleContent>
                        <p className="text-base  text-left pt-4">
                          Eligibility Criteria:
                        </p>
                        <ul className="list-disc pl-5 text-start">
                          <li>Aged 19 or over as of 31/8/24</li>
                          <li>Living in England</li>
                          <li>
                            Lived in the UK or EU/EEA for the last 3 years
                          </li>
                          <li>
                            Not currently enrolled on any other government
                            funded course or started another application for one
                          </li>
                        </ul>
                        <br />
                        <br />
                        <p className="text-start">
                          Please note: Not all areas of England are funded via
                          online enrolment. You can use our postcode checker
                          above to see if you are.
                        </p>
                      </CollapsibleContent>
                    </CollapsibleTrigger>
                  </Collapsible>
                </Card>
                <Card className="py-8 px-10 bg-white">
                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex flex-col items-start justify-between w-full cursor-pointer group">
                      <div className="flex justify-between w-full h-fit">
                        <h3 className="sm:text-lg font-semibold">
                          Can I take a course if I’m not eligible for funding?
                        </h3>
                        <ChevronDownIcon className="ml-auto w-6 h-6 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </div>
                      <CollapsibleContent>
                        <p className="text-base  text-left pt-4">
                          Eligibility Criteria:
                        </p>
                        <ul className="list-disc pl-5 text-start">
                          <li>Aged 19 or over as of 31/8/24</li>
                          <li>Living in England</li>
                          <li>
                            Lived in the UK or EU/EEA for the last 3 years
                          </li>
                          <li>
                            Not currently enrolled on any other government
                            funded course or started another application for one
                          </li>
                        </ul>
                        <br />
                        <br />
                        <p className="text-start">
                          Please note: Not all areas of England are funded via
                          online enrolment. You can use our postcode checker
                          above to see if you are.
                        </p>
                      </CollapsibleContent>
                    </CollapsibleTrigger>
                  </Collapsible>
                </Card>
                <Card className="py-8 px-10 bg-white">
                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex flex-col items-start justify-between w-full cursor-pointer group">
                      <div className="flex justify-between w-full h-fit">
                        <h3 className="sm:text-lg font-semibold">
                          How long does it take to complete a course?
                        </h3>
                        <ChevronDownIcon className="ml-auto w-6 h-6 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </div>
                      <CollapsibleContent>
                        <p className="text-base  text-left pt-4">
                          Eligibility Criteria:
                        </p>
                        <ul className="list-disc pl-5 text-start">
                          <li>Aged 19 or over as of 31/8/24</li>
                          <li>Living in England</li>
                          <li>
                            Lived in the UK or EU/EEA for the last 3 years
                          </li>
                          <li>
                            Not currently enrolled on any other government
                            funded course or started another application for one
                          </li>
                        </ul>
                        <br />
                        <br />
                        <p className="text-start">
                          Please note: Not all areas of England are funded via
                          online enrolment. You can use our postcode checker
                          above to see if you are.
                        </p>
                      </CollapsibleContent>
                    </CollapsibleTrigger>
                  </Collapsible>
                </Card>
                <Card className="py-8 px-10 bg-white">
                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex flex-col items-start justify-between w-full cursor-pointer group">
                      <div className="flex justify-between w-full h-fit">
                        <h3 className="sm:text-lg font-semibold">
                          Is it a real qualification?
                        </h3>
                        <ChevronDownIcon className="ml-auto w-6 h-6 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </div>
                      <CollapsibleContent>
                        <p className="text-base  text-left pt-4">
                          Eligibility Criteria:
                        </p>
                        <ul className="list-disc pl-5 text-start">
                          <li>Aged 19 or over as of 31/8/24</li>
                          <li>Living in England</li>
                          <li>
                            Lived in the UK or EU/EEA for the last 3 years
                          </li>
                          <li>
                            Not currently enrolled on any other government
                            funded course or started another application for one
                          </li>
                        </ul>
                        <br />
                        <br />
                        <p className="text-start">
                          Please note: Not all areas of England are funded via
                          online enrolment. You can use our postcode checker
                          above to see if you are.
                        </p>
                      </CollapsibleContent>
                    </CollapsibleTrigger>
                  </Collapsible>
                </Card>
                <Card className="py-8 px-10 bg-white">
                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex flex-col items-start justify-between w-full cursor-pointer group">
                      <div className="flex justify-between w-full h-fit">
                        <h3 className="sm:text-lg font-semibold">
                          As a business owner can I offer these courses to my
                          staff?
                        </h3>
                        <ChevronDownIcon className="ml-auto w-6 h-6 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </div>
                      <CollapsibleContent>
                        <p className="text-base  text-left pt-4">
                          Eligibility Criteria:
                        </p>
                        <ul className="list-disc pl-5 text-start">
                          <li>Aged 19 or over as of 31/8/24</li>
                          <li>Living in England</li>
                          <li>
                            Lived in the UK or EU/EEA for the last 3 years
                          </li>
                          <li>
                            Not currently enrolled on any other government
                            funded course or started another application for one
                          </li>
                        </ul>
                        <br />
                        <br />
                        <p className="text-start">
                          Please note: Not all areas of England are funded via
                          online enrolment. You can use our postcode checker
                          above to see if you are.
                        </p>
                      </CollapsibleContent>
                    </CollapsibleTrigger>
                  </Collapsible>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of Page Contact Form Section */}
      <section className="relative overflow-hidden ">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-black">
                  Together, we're building{" "}
                  <span className="text-primary-100">something better</span>
                </h2>
                <p className="text-base text-neutral-black-100 leading-relaxed">
                  Need help? Speak to our friendly customer service team on 0115
                  959 9544 or complete the contact form here.
                </p>
              </div>

              {/* Right Side - Contact Form */}

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
