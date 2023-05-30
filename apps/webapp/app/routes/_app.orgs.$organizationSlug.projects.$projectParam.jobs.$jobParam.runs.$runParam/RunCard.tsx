import { NamedIcon } from "~/components/primitives/NamedIcon";
import { Paragraph } from "~/components/primitives/Paragraph";
import { cn } from "~/utils/cn";
import { Children, Fragment } from "react";

type RunPanelProps = {
  selected: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export function RunPanel({ selected, children, onClick }: RunPanelProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border bg-slate-900 transition duration-150",
        selected ? "border-green-500" : "border-slate-850",
        onClick && "cursor-pointer",
        onClick && !selected && "hover:border-green-500/30"
      )}
      onClick={() => onClick && onClick()}
    >
      {children}
    </div>
  );
}

type RunPanelHeaderProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  accessory?: React.ReactNode;
};

export function RunPanelHeader({
  icon,
  title,
  accessory,
}: RunPanelHeaderProps) {
  return (
    <div className="flex h-10 items-center justify-between border-b border-slate-850 bg-slate-950 p-2">
      <div className="flex items-center gap-2">
        {typeof icon === "string" ? (
          <NamedIcon name={icon} className="h-5 w-5" />
        ) : (
          icon
        )}
        {typeof title === "string" ? (
          <Paragraph variant="small/bright">{title}</Paragraph>
        ) : (
          title
        )}
      </div>
      <div className="flex items-center gap-2">{accessory}</div>
    </div>
  );
}

type RunPanelIconTitleProps = {
  icon?: string | null;
  title: string;
};

export function RunPanelIconTitle({ icon, title }: RunPanelIconTitleProps) {
  return (
    <div className="flex items-center gap-1">
      {icon && <NamedIcon name={icon} className="h-5 w-5" />}
      {title}
    </div>
  );
}

export function RunPanelBody({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export function RunPanelIconSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-wrap gap-6">{children}</div>;
}

export function RunPanelIconElement({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-slate-800 bg-slate-850">
        <NamedIcon name={icon} className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <Paragraph variant="extra-extra-small/caps">{label}</Paragraph>
        <Paragraph variant="extra-small/bright">{value}</Paragraph>
      </div>
    </div>
  );
}

export function RunPanelElements({
  elements,
  className,
}: {
  elements: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn("flex flex-wrap items-baseline gap-x-8 gap-y-1", className)}
    >
      {elements.map(({ label, value }, index) => (
        <div key={index} className="flex items-baseline gap-2">
          <Paragraph variant="extra-extra-small/caps">{label}</Paragraph>
          <Paragraph variant="extra-small/bright">{value}</Paragraph>
        </div>
      ))}
    </div>
  );
}

export function TaskSeparator() {
  return <div className="h-4 w-4 border-r border-slate-600" />;
}