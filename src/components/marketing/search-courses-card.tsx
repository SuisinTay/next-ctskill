import { ChevronRight, Landmark, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Information {
  icon: React.ReactNode;
  info: string;
}

interface SearchCoursesCardProps {
  taggings: string[];
  image: string;
  title: string;
  informations: Information[];
}

export function SearchCoursesCard({
  taggings,
  image,
  title,
  informations,
}: SearchCoursesCardProps) {
  return (
    <Card className="border-neutral-black-30 p-0 w-[400] gap-3">
      <div className="flex gap-2 w-[368] flex-wrap absolute p-4">
        {taggings.map((tag, index) => (
          <Card
            key={index}
            className="bg-secondary-orange-100 font-bold text-[13px] w-fit py-0.5 px-2 rounded-xs"
          >
            {tag.toLocaleUpperCase()}
          </Card>
        ))}
      </div>
      <Image
        width={400}
        height={270}
        src={image}
        alt="search image"
        className="rounded-t-lg h-[270]"
      />
      <CardContent>
        <h6 className="text-lg font-semibold">{title}</h6>
        <div className="flex flex-col gap-2 pt-2">
          {informations.map((information) => (
            <div className="flex gap-4">
              {information.icon}
              <p className="text-neutral-black-30">{information.info}</p>
            </div>
          ))}
        </div>
        <div className="py-6 w-full justify-end flex">
          <Button variant="outline" size="md" asChild>
            <Link href="/find-jobs">
              <span>Find out more</span>
              <div className="p-2 bg-primary-100 rounded-md">
                <ChevronRight className="h-4 w-4" color="#fff" />
              </div>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
