import{j as r}from"./iframe-Bbj8rm_V.js";import{O as b}from"./object-table-5_esxdbq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DRV8sxMu.js";import{u as g}from"./useOsdkClient-CWIMLvdJ.js";import"./preload-helper-D6Fx-mKo.js";import"./Table-CX7l8D-O.js";import"./index-Dq2MMzil.js";import"./Dialog-PqyQrZYx.js";import"./cross-DBtpPd0D.js";import"./svgIconContainer-BUx50-vg.js";import"./useBaseUiId-DNWEd936.js";import"./InternalBackdrop-kx6x5ne-.js";import"./composite-Dd0Cawl-.js";import"./index-wCPgzdXR.js";import"./index-DijupkwT.js";import"./index-DpjApppD.js";import"./useEventCallback-wJ0LYxwh.js";import"./SkeletonBar-DmRq_NJ3.js";import"./LoadingCell-GH6mJhL-.js";import"./ColumnConfigDialog-CWmXgvHX.js";import"./DraggableList-rWaVA9Cc.js";import"./search-PnNyfQZV.js";import"./Input-CHlhWJjT.js";import"./useControlled-CA2uOZy1.js";import"./Button-Dy0jx2Ef.js";import"./small-cross-CLfkAhz4.js";import"./ActionButton-C-i_Pxdj.js";import"./Checkbox-pjKjAT32.js";import"./useValueChanged-f5I0dvEN.js";import"./CollapsiblePanel-C_9NzZbd.js";import"./MultiColumnSortDialog-eUHVzGJ9.js";import"./MenuTrigger-DhLXHFbW.js";import"./CompositeItem-CBUY4KWM.js";import"./ToolbarRootContext-ZiL2Vz-F.js";import"./getDisabledMountTransitionStyles-CGbcTXfA.js";import"./getPseudoElementBounds-VeOlnm8c.js";import"./chevron-down-CHGSFnin.js";import"./index-BFuwLodk.js";import"./error-UxBVQGvQ.js";import"./BaseCbacBanner-B26VtbjG.js";import"./makeExternalStore-B9UD_2Tu.js";import"./Tooltip-DrOHS7nL.js";import"./PopoverPopup-CdeNDKDp.js";import"./debounce-D6u-Quyv.js";import"./tick-H1bNLZVn.js";import"./DropdownField-CbgT0A6x.js";import"./isEqual-B2OLfJBW.js";import"./withOsdkMetrics-BeB3Egw6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
