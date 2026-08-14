import{j as r}from"./iframe-DYHiAth1.js";import{O as b}from"./object-table-DEWC-nn6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BjHBX4pw.js";import{u as g}from"./useOsdkClient-BQwErlmz.js";import"./preload-helper-BP3stq1X.js";import"./Table-2K-cGukF.js";import"./index-CFqT-tg2.js";import"./Dialog-DQ4YCnYw.js";import"./cross-NVvu5W38.js";import"./svgIconContainer-CpmCT8qJ.js";import"./useBaseUiId-D0-MqLY3.js";import"./InternalBackdrop-CxXrMN-4.js";import"./composite-rM29Crwf.js";import"./index-CkiCmIU-.js";import"./index-BwwRvQBw.js";import"./index-DciWkXkh.js";import"./useEventCallback-DC29l974.js";import"./SkeletonBar-DYoISvdk.js";import"./LoadingCell-FtlHLmdg.js";import"./ColumnConfigDialog-ntW35Xqz.js";import"./DraggableList-DiqY5Ru2.js";import"./search-CQsEHw2u.js";import"./Input-_kt7fmI_.js";import"./useControlled-CC9eDEXu.js";import"./Button-BEfeLVww.js";import"./small-cross-DjRHx6o3.js";import"./ActionButton-92N3WJHq.js";import"./Checkbox-Cj0lmbVz.js";import"./useValueChanged-B4YQUOGh.js";import"./CollapsiblePanel-Cj4OFHRl.js";import"./MultiColumnSortDialog-D9iHHBDb.js";import"./MenuTrigger-picsPTWZ.js";import"./CompositeItem-BzTzzhBW.js";import"./ToolbarRootContext-DKtHKjj0.js";import"./getDisabledMountTransitionStyles-BgEZbX8N.js";import"./getPseudoElementBounds-BF9Su6Vc.js";import"./chevron-down-CN-or4pg.js";import"./index-Cw0Wnr-O.js";import"./error-5z49WPo0.js";import"./BaseCbacBanner-CJYJCrD1.js";import"./makeExternalStore-QtZrVkJy.js";import"./Tooltip-B5wcixUa.js";import"./PopoverPopup-of74B-iq.js";import"./debounce-DR7Pr710.js";import"./tick-Di6EJAuo.js";import"./DropdownField-CGvMTI-U.js";import"./isEqual-CUVGUpjO.js";import"./withOsdkMetrics-0_t_tujb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
