import{j as r}from"./iframe-BtTN4BQB.js";import{O as b}from"./object-table-Bvx4yqVd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCda7qvA.js";import{u as g}from"./useOsdkClient-DEjT27KS.js";import"./preload-helper-C2hFUd6N.js";import"./Table-CoZReMex.js";import"./index-pxWT2dwl.js";import"./Dialog--QRamm7H.js";import"./cross-q76qzbb-.js";import"./svgIconContainer-Ck-gVtGn.js";import"./useBaseUiId-lIY47ohq.js";import"./InternalBackdrop-dYX83tvG.js";import"./composite-CdDRlQtM.js";import"./index-Cq-V6BRN.js";import"./index-CMayXVvR.js";import"./index-DOgMvsUP.js";import"./useEventCallback-BtkhBx2l.js";import"./SkeletonBar-BEHzB_kl.js";import"./LoadingCell-CAz1hfsM.js";import"./ColumnConfigDialog-BoZUi2Vu.js";import"./DraggableList-BNYdNfbR.js";import"./search-B3tYggTx.js";import"./Input-BP96gLBp.js";import"./useControlled-BY2aVBy7.js";import"./Button-BLq1-le0.js";import"./small-cross-C5ga7063.js";import"./ActionButton-CM0ktcvu.js";import"./Checkbox-B1ajB8tt.js";import"./useValueChanged-fmp-pLJF.js";import"./CollapsiblePanel-hvpVpf_T.js";import"./MultiColumnSortDialog-DQ99MgP8.js";import"./MenuTrigger-Diwu4kws.js";import"./CompositeItem-Dm5rFUvO.js";import"./ToolbarRootContext-BKy1ZUvI.js";import"./getDisabledMountTransitionStyles-CN6FaNLi.js";import"./getPseudoElementBounds-8uy80WiE.js";import"./chevron-down-BcmFYUSl.js";import"./index-9u2i6wOA.js";import"./error-eGAnK2yX.js";import"./BaseCbacBanner-eiRHuLLT.js";import"./makeExternalStore-Djs-AWxx.js";import"./Tooltip-H3WuRadb.js";import"./PopoverPopup-DWl2W-_4.js";import"./debounce-BHOQ-Rki.js";import"./tick-DcJBbOnL.js";import"./DropdownField-BLdkGkAU.js";import"./isEqual-CIlWL9cG.js";import"./withOsdkMetrics-DMwNEK1o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
