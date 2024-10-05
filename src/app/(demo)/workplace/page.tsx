"use client"
"use client";
import Link from "next/link";
import Image from "next/image";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CategoriesPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ContentLayout>
      <div className="dark min-h-screen relative overflow-hidden bg-white text-black flex items-center justify-center px-4 dark:bg-black text-white">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="text-[20vw] font-bold text-gray-900 select-none">
            NOTION
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full relative z-10"
        >
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-12">
            <motion.h1 
              className="text-5xl font-semibold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Connect to Notion
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Seamlessly integrate your workspace
            </motion.p>
          </div>

          {/* Main Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* Notion Logo */}
            <div className="flex justify-center">
              <Image
                src="/notion-icon.png"
                alt="Notion"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>

            {/* Connection Button */}
            <Link href="https://www.notion.so" passHref>
              <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full"
              >
                <Button
                  className="w-full bg-white text-black hover:bg-gray-100 rounded-full py-6 text-lg font-medium transition-all duration-300"
                  style={{
                    borderWidth: "2px",
                    borderColor: "transparent",
                    borderRadius: "9999px",
                  }}
                >
                  <motion.div
                    animate={{
                      borderColor: isHovered ? "#000" : "transparent",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    Continue with Notion
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </Button>
              </motion.div>
            </Link>

            {/* Security Notice */}
            <p className="text-sm text-gray-500 text-center">
              Your connection is secure and encrypted
            </p>
          </motion.div>

          {/* Footer Text */}
          <motion.p 
            className="text-sm text-gray-600 text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Notion integration by Your App Name
          </motion.p>
        </motion.div>
      </div>
    </ContentLayout>
  );
}
