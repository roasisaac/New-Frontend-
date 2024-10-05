"use client"
import React from "react";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Tabs, Tab, Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

const UserCard = ({ name, username, avatar, bio, following, followers }) => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={avatar} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{username}</h5>
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
        <p>{bio}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{following}</p>
          <p className="text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{followers}</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};

const CardGrid = ({ cards }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {cards.map((card, index) => (
      <UserCard key={index} {...card} />
    ))}
  </div>
);

export default function App() {
  const dummyData = {
    all: [
      { name: "Zoey Lang", username: "zoeylang", avatar: "https://nextui.org/avatars/avatar-1.png", bio: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!", following: 4, followers: "97.1K" },
      { name: "John Doe", username: "johndoe", avatar: "https://nextui.org/avatars/avatar-2.png", bio: "Backend developer passionate about scalable systems.", following: 120, followers: "45K" },
      { name: "Jane Smith", username: "janesmith", avatar: "https://nextui.org/avatars/avatar-3.png", bio: "Full-stack developer and open-source contributor.", following: 250, followers: "78.3K" },
    ],
    principles: [
      { name: "Alex Johnson", username: "alexj", avatar: "https://nextui.org/avatars/avatar-4.png", bio: "Software architect focusing on design principles and best practices.", following: 87, followers: "62.5K" },
      { name: "Emma Wilson", username: "emmaw", avatar: "https://nextui.org/avatars/avatar-5.png", bio: "Agile coach and software development principles advocate.", following: 156, followers: "33.9K" },
    ],
    templates: [
      { name: "Michael Brown", username: "mikebrown", avatar: "https://nextui.org/avatars/avatar-6.png", bio: "UI/UX designer specializing in reusable templates and components.", following: 92, followers: "108K" },
      { name: "Sarah Lee", username: "sarahlee", avatar: "https://nextui.org/avatars/avatar-7.png", bio: "Frontend developer creating accessible and responsive templates.", following: 215, followers: "71.2K" },
    ],
    quotes: [
      { name: "David Chen", username: "dchen", avatar: "https://nextui.org/avatars/avatar-8.png", bio: "Tech motivator and public speaker. Sharing daily coding inspiration.", following: 43, followers: "129K" },
      { name: "Olivia Taylor", username: "otaylor", avatar: "https://nextui.org/avatars/avatar-9.png", bio: "Software engineer and tech writer. Curating the best programming quotes.", following: 76, followers: "55.7K" },
    ],
  };

  return (
    <ContentLayout>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Content categories">
          <Tab key="all" title="All">
            <CardGrid cards={dummyData.all} />
          </Tab>
          <Tab key="principles" title="Principles">
            <CardGrid cards={dummyData.principles} />
          </Tab>
          <Tab key="templates" title="Templates">
            <CardGrid cards={dummyData.templates} />
          </Tab>
          <Tab key="quotes" title="Quotes">
            <CardGrid cards={dummyData.quotes} />
          </Tab>
          <Tab key="tableView" title="Table View">
            <Card>
              <CardBody>
                Table view content goes here. You may want to implement a separate table component for this view.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </ContentLayout>
  );
}