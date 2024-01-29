"use client";

import { TABS } from "@/constant";
import useStore from "@/hooks/useStore";
import { useTabStore } from "@/hooks/useTabStore";
import { mergeClassname } from "@/utils/merge-classname";

const Navigation = () => {
  const activeTabId = useStore(useTabStore, (state) => state.activeTabId);
  const setActiveTabId = useTabStore((state) => state.setActiveTabId);

  return (
    <div role="tablist" className="tabs tabs-boxed bg-base-100">
      {TABS.map((tab) => (
        <button
          role="tab"
          className={mergeClassname(
            "tab",
            activeTabId === tab.id && "tab-active"
          )}
          key={tab.id}
          onClick={() => setActiveTabId(tab.id)}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
