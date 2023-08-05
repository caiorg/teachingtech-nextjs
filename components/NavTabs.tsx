import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import * as React from "react";
import slugify from "slugify";

export interface LinkTabProps {
  label: string;
  href: string;
  value?: number | string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      value={props.value}
      {...props}
    />
  );
}

export default function NavTabs({
  tabs,
  ariaLabel,
  children,
}: {
  tabs: LinkTabProps[];
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [value, setValue] = React.useState(slugify(tabs[0].label));

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label={ariaLabel}>
        {tabs.map(({ label, href }, index) => (
          <LinkTab
            key={`#${index}-${slugify(label)}`}
            label={label}
            href={href}
            value={href}
            // value={slugify(label)}
          />
        ))}
      </TabList>
      <TabPanel value={value}>{children}</TabPanel>
    </TabContext>
  );
}
