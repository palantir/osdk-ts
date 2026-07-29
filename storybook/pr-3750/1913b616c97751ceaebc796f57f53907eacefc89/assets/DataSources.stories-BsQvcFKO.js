import{j as r}from"./iframe-B-bk2LeB.js";import{O as b}from"./object-table-CKI5_fiJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BjbLmYTk.js";import{u as g}from"./useOsdkClient-D8s7jZW_.js";import"./preload-helper-C5FV7gVn.js";import"./Table-ChXILAnh.js";import"./index-DM05yPFc.js";import"./Dialog-Cyseorwu.js";import"./cross-Dz9kcW5U.js";import"./svgIconContainer-DtjTERAf.js";import"./useBaseUiId-BqQwfV5F.js";import"./InternalBackdrop-Bqcr7z6s.js";import"./composite-KF47FU0W.js";import"./index-CFVQhoyp.js";import"./index-BAxgKpjF.js";import"./index-CN8fTgwp.js";import"./useEventCallback-CMyVFkb9.js";import"./SkeletonBar-Dx6EvkAG.js";import"./LoadingCell-CtdIIGJx.js";import"./ColumnConfigDialog-CkSK-e0b.js";import"./DraggableList-Cpy66XQF.js";import"./search-DOZ8pXMB.js";import"./Input-ICkfGpEo.js";import"./useControlled-B1_v0SLc.js";import"./isEqual-BLlMpy2R.js";import"./isObject-C-YWAbu1.js";import"./Button-9uVrFS16.js";import"./ActionButton-aB2eaoFb.js";import"./Checkbox-DfojlPWp.js";import"./useValueChanged-C1MDQvYd.js";import"./CollapsiblePanel-BxtuR-CO.js";import"./MultiColumnSortDialog-BWpOEGQt.js";import"./MenuTrigger-2PDNdEOq.js";import"./CompositeItem-Bdc6unAH.js";import"./ToolbarRootContext-CAqP7Cj2.js";import"./getDisabledMountTransitionStyles-C0ZICQNR.js";import"./getPseudoElementBounds-CMdxa0l-.js";import"./chevron-down-BXFs_ff_.js";import"./index-BBA5_LrS.js";import"./error-ufSJKQSy.js";import"./BaseCbacBanner-DUXJNRl6.js";import"./makeExternalStore-y8FAd1tx.js";import"./Tooltip-DnN5uGkl.js";import"./PopoverPopup-CwszAPLS.js";import"./toNumber-CiUeINfn.js";import"./tick-BYXgge_f.js";import"./DropdownField-Bwp0SNdz.js";import"./withOsdkMetrics-D6eXjUPL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
