import{j as r}from"./iframe-NFk5yTCl.js";import{O as b}from"./object-table-CEKBcnE_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D5J3XETM.js";import{u as g}from"./useOsdkClient-gFFrbC9S.js";import"./preload-helper-DnA7Db5H.js";import"./Table-DYVuCqgi.js";import"./index-BgVD2xhp.js";import"./Dialog-BK10uP18.js";import"./cross-DRob9Y80.js";import"./svgIconContainer-BhRqV9Gd.js";import"./useBaseUiId-DI_-ZcoF.js";import"./InternalBackdrop-C2Dw-qqf.js";import"./composite-CPOhVi5o.js";import"./index-BMMU7vD9.js";import"./index-DvY3t6Bt.js";import"./index-D-jKR7g2.js";import"./useEventCallback-x3ZKmgNJ.js";import"./SkeletonBar-Csl4r0el.js";import"./LoadingCell-in8L2hj-.js";import"./ColumnConfigDialog-DqeZKdFc.js";import"./DraggableList-DCqQpQFP.js";import"./search-DY6YLRUw.js";import"./Input-BW26RmLS.js";import"./useControlled-fqF1Rj4F.js";import"./Button-BVh6l18o.js";import"./small-cross-C5dljSWN.js";import"./ActionButton-CwKbdIeo.js";import"./Checkbox-DMrIqRzw.js";import"./useValueChanged-BaXAbe4f.js";import"./CollapsiblePanel-g_CPEQOy.js";import"./MultiColumnSortDialog-DtQWVoMv.js";import"./MenuTrigger-B-Uzpqi4.js";import"./CompositeItem-ZF-3iBYW.js";import"./ToolbarRootContext-BwRqIVN-.js";import"./getDisabledMountTransitionStyles-Cflekvz6.js";import"./getPseudoElementBounds-C48v4aEa.js";import"./chevron-down-Bk9vMPo2.js";import"./index-ywB7GnFl.js";import"./error-B1DXlG8k.js";import"./BaseCbacBanner-DwPfoD51.js";import"./makeExternalStore-MEUeb9Nq.js";import"./Tooltip-BVpMXNPC.js";import"./PopoverPopup-5q1wytvg.js";import"./debounce-DP-BMAVq.js";import"./tick-CZZLmvI5.js";import"./DropdownField-Dyz2YO0r.js";import"./isEqual-BH-W0m4A.js";import"./withOsdkMetrics-D_cxEN1y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
