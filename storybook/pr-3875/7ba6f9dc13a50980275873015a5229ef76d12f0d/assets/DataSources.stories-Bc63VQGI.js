import{j as r}from"./iframe-pVpd-5Fd.js";import{O as b}from"./object-table-DBuGlqDB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BcL5LCAG.js";import{u as g}from"./useOsdkClient-jlR6Pe0H.js";import"./preload-helper-CWKX588j.js";import"./Table-DeiMW-lF.js";import"./index-BqhgvWoK.js";import"./Dialog-8YRFr7OJ.js";import"./cross-DkYiF8wc.js";import"./svgIconContainer-CaaU9NHC.js";import"./useBaseUiId-E_3kyUVy.js";import"./InternalBackdrop-CuB13asz.js";import"./composite-CwUrmrWF.js";import"./index-CylWHs1O.js";import"./index-DjcUw-9V.js";import"./index-_sEyGhur.js";import"./useEventCallback-I-tUTcsl.js";import"./SkeletonBar-fqFf26LV.js";import"./LoadingCell-QsH4Xk2V.js";import"./ColumnConfigDialog-DeF6XPZf.js";import"./DraggableList-BarxrkZJ.js";import"./search-Jf5xJ1D9.js";import"./Input-B4fGMfLL.js";import"./useControlled-8FvqARU6.js";import"./Button-DFmHXmt2.js";import"./small-cross-BWXxQMU0.js";import"./ActionButton-BSN0F72E.js";import"./Checkbox-C2RkinkT.js";import"./useValueChanged-DRe_GwRO.js";import"./CollapsiblePanel-DfsulYic.js";import"./MultiColumnSortDialog-DV_z7XN8.js";import"./MenuTrigger-OHtQAx24.js";import"./CompositeItem-BQXuUE1x.js";import"./ToolbarRootContext-CZHUcEVu.js";import"./getDisabledMountTransitionStyles-BWUw-zGn.js";import"./getPseudoElementBounds-_nxJt77q.js";import"./chevron-down-DYz5-Z2v.js";import"./index-BCDVMhSh.js";import"./error-CBBs5I85.js";import"./BaseCbacBanner-C22pQH-A.js";import"./makeExternalStore-v2dcTeAE.js";import"./Tooltip-Dq1rO_gI.js";import"./PopoverPopup-Bg6-zD8h.js";import"./debounce-f-iGekXc.js";import"./tick-Cc5XUbJN.js";import"./DropdownField-Bb6YSXO8.js";import"./isEqual-C07f0oe6.js";import"./withOsdkMetrics-DrmtF7vj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
