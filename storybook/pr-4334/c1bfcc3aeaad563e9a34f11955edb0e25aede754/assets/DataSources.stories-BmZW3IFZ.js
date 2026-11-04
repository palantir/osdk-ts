import{j as r}from"./iframe-CNX9e2vb.js";import{O as b}from"./object-table-BldKdaED.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CFfdyHbc.js";import{u as g}from"./useOsdkClient-ANeJgNR0.js";import"./preload-helper-ZMNA8h9P.js";import"./Table-DDRIQJWd.js";import"./index-BIHn_wHI.js";import"./Dialog-D3BNf1DY.js";import"./cross-CoOqaEol.js";import"./svgIconContainer-nouhoaqF.js";import"./useBaseUiId-DVajJCtq.js";import"./InternalBackdrop-g7diMjlH.js";import"./composite-DPfaHyL7.js";import"./index-DLyOpAuF.js";import"./index-DzwDShI9.js";import"./index-D4wtEvwv.js";import"./useEventCallback-BHcK-HWT.js";import"./SkeletonBar-C4hnXkU8.js";import"./LoadingCell-DljGb_fq.js";import"./ColumnConfigDialog-DUiy6zFv.js";import"./DraggableList-CuUpn6fc.js";import"./search-PqF1ps1R.js";import"./Input-DsowkJey.js";import"./useControlled-CAgAp9qH.js";import"./Button-DqD_xK8o.js";import"./small-cross-BJExYpuG.js";import"./ActionButton-wZGD9rTp.js";import"./Checkbox-C9aBsH-7.js";import"./useValueChanged-DYtO7VQ0.js";import"./CollapsiblePanel-C7abhmgq.js";import"./MultiColumnSortDialog-DjjVtXUH.js";import"./MenuTrigger-C-b4TkP-.js";import"./CompositeItem-WdRO-_hy.js";import"./ToolbarRootContext-tIEjfpOU.js";import"./getDisabledMountTransitionStyles-2kFCtm_x.js";import"./getPseudoElementBounds-FCxgA3hM.js";import"./chevron-down-BjfbDPyK.js";import"./index-CAwx3j0M.js";import"./error-B93ABaLs.js";import"./BaseCbacBanner-CH3dXHtT.js";import"./makeExternalStore-DE_Ve778.js";import"./Tooltip-Dvuw96-K.js";import"./PopoverPopup-BcTNuNdl.js";import"./debounce-CgHfZ2yU.js";import"./tick-BqwzrLtf.js";import"./DropdownField-BFuGqXSY.js";import"./isEqual-DxCKwYiG.js";import"./withOsdkMetrics-DMNQhU4Q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
