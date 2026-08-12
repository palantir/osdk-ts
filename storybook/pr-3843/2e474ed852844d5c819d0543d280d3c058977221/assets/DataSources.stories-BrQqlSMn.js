import{j as r}from"./iframe-B7WBSiQK.js";import{O as b}from"./object-table-CZEprzw-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CF8hBtj8.js";import{u as g}from"./useOsdkClient-VPDveWFE.js";import"./preload-helper-B0V2Y4gg.js";import"./Table-BB-uAsA9.js";import"./index-PlkpSjCR.js";import"./Dialog-Bmgsr3FA.js";import"./cross-LDnwABxF.js";import"./svgIconContainer-Bxt-xqtM.js";import"./useBaseUiId-CZzT34PV.js";import"./InternalBackdrop-CQ1f6Zvv.js";import"./composite-mnm8wmd2.js";import"./index-CvsGQGuc.js";import"./index-BuPc-xAF.js";import"./index-utsz2cjJ.js";import"./useEventCallback-9ann7CLP.js";import"./SkeletonBar-D4Ck8bPL.js";import"./LoadingCell-DSfZT0wc.js";import"./ColumnConfigDialog-B2to8u3c.js";import"./DraggableList-BQnRDeUE.js";import"./search-CnauwDLw.js";import"./Input-CEDE16Ka.js";import"./useControlled-DmMIwQoS.js";import"./isEqual-761ouFwp.js";import"./isObject-yYO0oBEE.js";import"./Button-BFzUwMgP.js";import"./ActionButton-aVXXIevt.js";import"./Checkbox-Dy4lUoi9.js";import"./useValueChanged-BPPh5fxR.js";import"./CollapsiblePanel-C-hmzMiL.js";import"./MultiColumnSortDialog--SFp1lIs.js";import"./MenuTrigger-BlnrbYbq.js";import"./CompositeItem-CZegg-G4.js";import"./ToolbarRootContext-li3WIPN7.js";import"./getDisabledMountTransitionStyles-D0nRGMnk.js";import"./getPseudoElementBounds-BS_krnkN.js";import"./chevron-down-CYs6Wp2m.js";import"./index-CQwq9wua.js";import"./error-B41aks2m.js";import"./BaseCbacBanner-BS0lZOUu.js";import"./makeExternalStore-BNCsp_rF.js";import"./Tooltip-DvuKo640.js";import"./PopoverPopup-CovjZuLG.js";import"./toNumber-RDY9bqFt.js";import"./tick-B0hLJF_x.js";import"./DropdownField-Bg8jEWAE.js";import"./withOsdkMetrics-DZMGbXvK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
