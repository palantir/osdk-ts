import{j as r}from"./iframe-71AE2c8s.js";import{O as b}from"./object-table-UYofKsdi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BnpWVEMf.js";import{u as g}from"./useOsdkClient-C4P5dLRq.js";import"./preload-helper-BtlTcUvi.js";import"./Table-xrwghvfR.js";import"./index-70-LFm6P.js";import"./Dialog-BLMww6GM.js";import"./cross-DPU8k9PA.js";import"./svgIconContainer-CQVZ0EfL.js";import"./useBaseUiId-koFcKlW2.js";import"./InternalBackdrop-DSsgF3k7.js";import"./composite-CJjbOeLp.js";import"./index-_yJiFnLU.js";import"./index-C_ZG4zPp.js";import"./index-CubMyL5c.js";import"./useEventCallback-DCKstoaM.js";import"./SkeletonBar-CyVSDhVA.js";import"./LoadingCell-DEx_LkxO.js";import"./ColumnConfigDialog-DgCfVhpc.js";import"./DraggableList-9P3rKwuX.js";import"./search-DRjn4zmO.js";import"./Input-BTOTZdkr.js";import"./useControlled-ARtkj8_v.js";import"./Button-NFl_FDQS.js";import"./small-cross-DQMGM7ye.js";import"./ActionButton-mGI9HBkv.js";import"./Checkbox-Dy9E1N6v.js";import"./useValueChanged-Bgebujyt.js";import"./CollapsiblePanel-D3SarGBu.js";import"./MultiColumnSortDialog-Bu4iguJN.js";import"./MenuTrigger-DPX8NUq1.js";import"./CompositeItem-Cu549WoE.js";import"./ToolbarRootContext-lpwl76Za.js";import"./getDisabledMountTransitionStyles-CHz2fGHP.js";import"./getPseudoElementBounds-PPP_HaMX.js";import"./chevron-down-BOqQXOX9.js";import"./index-CRRe-iJL.js";import"./error-qex0YiDZ.js";import"./BaseCbacBanner-tM1OMb7g.js";import"./makeExternalStore-Bv5nMmxN.js";import"./Tooltip-BgYmNIJk.js";import"./PopoverPopup-DN5RzoVw.js";import"./debounce-DXWm-QpH.js";import"./tick-PepXr6jD.js";import"./DropdownField-SCGgbCNn.js";import"./isEqual-DJ0v_bAA.js";import"./withOsdkMetrics-TK9LRg4L.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
