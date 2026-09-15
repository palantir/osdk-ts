import{j as r}from"./iframe-DMskF-Tm.js";import{O as b}from"./object-table-WoGqcip2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C9m-nPhr.js";import{u as g}from"./useOsdkClient-C_CyCy1E.js";import"./preload-helper-zdHiINLH.js";import"./Table-Bkp_2Snu.js";import"./index-DLe4u5Oe.js";import"./Dialog-DHH8wSIe.js";import"./cross-CwAqVkgp.js";import"./svgIconContainer-CNoR15u0.js";import"./useBaseUiId-IzXs79SE.js";import"./InternalBackdrop-BbQxkn3u.js";import"./composite-bCuvd1w6.js";import"./index-BQNk_jze.js";import"./index-1EVlbohU.js";import"./index-BS55zaCl.js";import"./useEventCallback-DVDdrM3Z.js";import"./SkeletonBar-BdaE-4d-.js";import"./LoadingCell-TanHUCuh.js";import"./ColumnConfigDialog-BmK0FFPZ.js";import"./DraggableList-DdJdey2g.js";import"./search-CZUSf-yV.js";import"./Input-D-LAYNYb.js";import"./useControlled-CLoeMU3z.js";import"./Button-BNzcwfr4.js";import"./small-cross-BYWrk9uQ.js";import"./ActionButton-WEyIvEvK.js";import"./Checkbox-msJ9Xjhm.js";import"./useValueChanged-BLXHgZ07.js";import"./CollapsiblePanel-DQIxvF0N.js";import"./MultiColumnSortDialog-t1cg3wy1.js";import"./MenuTrigger-BochQ1EN.js";import"./CompositeItem-BdlugdAy.js";import"./ToolbarRootContext-Br2QKeOd.js";import"./getDisabledMountTransitionStyles-CoA3FrXT.js";import"./getPseudoElementBounds-cZixjbuq.js";import"./chevron-down-D2q20rMp.js";import"./index-BKGUEF_C.js";import"./error-pEWPvW42.js";import"./BaseCbacBanner-DRtxjRMH.js";import"./makeExternalStore-TRQMkypD.js";import"./Tooltip-kEiuDs1k.js";import"./PopoverPopup-BtNKZ5QB.js";import"./debounce-Dl0Z3g8R.js";import"./tick-CEX6N7wE.js";import"./DropdownField-DAhq5OSj.js";import"./isEqual-C098p3mp.js";import"./withOsdkMetrics-Dwd24s1O.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
