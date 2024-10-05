"use client";
import React, { useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import { MoreVertical } from "lucide-react";

const ProfileCard = ({ category }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const categoryMessage = {
    photos: "Feed, Inbox, Notion, profile, more, create and settings",
    music: "Melodies that resonate with the soul!",
    videos: "Visual stories that inspire and entertain!",
    documents: "Organizing knowledge and resources!",
    events: "Creating experiences to remember!",
    settings: "Customize your preferences for a better experience!",
    cat1: "Category 1 description",
    cat2: "Category 2 description",
  };

  return (
    <Card className="max-w-[500px] w-full mx-auto mb-4">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/placeholder-avatar.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{categoryMessage[category] || "No description available."}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className="text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default function DashboardPage() {
  const [selectedCategory, setSelectedCategory] = useState("photos");
  const categories = ["photos", "music", "videos", "documents", "events", "settings", "cat1", "cat2"];

  const StaticContent = () => (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-semibold">Notes</h2>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button isIconOnly variant="light">
            <MoreVertical />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Popover Content</div>
            <div className="text-tiny">This is the popover content</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );

  return (
    <ContentLayout title="Dashboard">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {categories.map((category) => (
            <Button
              key={category}
              onPress={() => setSelectedCategory(category)}
              color={selectedCategory === category ? "primary" : "default"}
              variant={selectedCategory === category ? "solid" : "bordered"}
              radius="full"
              className="px-4 py-2"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        <StaticContent />
        <div className="flex flex-col items-center space-y-4">
          {[1, 2, 3].map((index) => (
            <ProfileCard key={index} category={selectedCategory} />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}