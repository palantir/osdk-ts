import{j as r}from"./iframe-C1aZz4qh.js";import{O as b}from"./object-table-Da3ELJ35.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-Zz0xAl.js";import{u as g}from"./useOsdkClient-7X5NmjyA.js";import"./preload-helper-C57PRwQB.js";import"./Table-BwAq-AXt.js";import"./index-DndOh7uw.js";import"./Dialog-D0XUZvVd.js";import"./cross-qtsLbSBi.js";import"./svgIconContainer-B5UnyqeH.js";import"./useBaseUiId-DHP81qHW.js";import"./InternalBackdrop-8CzUigsn.js";import"./composite-CB1pt23S.js";import"./index-CSr6rIRF.js";import"./index-DwSUGGBW.js";import"./index-DhK7zook.js";import"./useEventCallback-u7Ubimgc.js";import"./SkeletonBar-DM3YtxCs.js";import"./LoadingCell-DfLkqqvz.js";import"./ColumnConfigDialog-iroc8zmb.js";import"./DraggableList-Dc-s-PBU.js";import"./search-yR82rB65.js";import"./Input-CkMB4S7R.js";import"./useControlled-CCEarqoz.js";import"./isEqual-CY_FtRlU.js";import"./isObject-Dd13mV1N.js";import"./Button-BgiX1sCn.js";import"./ActionButton-FEh_tB9Y.js";import"./Checkbox-Cb2TG0KZ.js";import"./useValueChanged-CIbB9b-p.js";import"./CollapsiblePanel-P01aIOd1.js";import"./MultiColumnSortDialog-DbWxPT_p.js";import"./MenuTrigger-BJS7IWlK.js";import"./CompositeItem-DLnehaEy.js";import"./ToolbarRootContext-BNN0c4jp.js";import"./getDisabledMountTransitionStyles-BmzXB9Ho.js";import"./getPseudoElementBounds-DuZUZl-y.js";import"./chevron-down-dh3VxrDb.js";import"./index-NP9LypFz.js";import"./error-BXuTAgqJ.js";import"./BaseCbacBanner-DpgVfwhv.js";import"./makeExternalStore-tkOquhkD.js";import"./Tooltip-CCcmI9_z.js";import"./PopoverPopup-DpukjGTT.js";import"./toNumber-DoftAu1J.js";import"./tick-RCuoZqaK.js";import"./DropdownField-jqAfXglE.js";import"./withOsdkMetrics-C0HDOzXR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
