import{j as r}from"./iframe-ByUPzMo-.js";import{O as b}from"./object-table-B71rfih6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BE1xDO1t.js";import{u as g}from"./useOsdkClient-CfYYGIxK.js";import"./preload-helper-DMW2vH7D.js";import"./Table-BOtOMzC7.js";import"./index-DDBwTcU5.js";import"./Dialog-FXfg-rp9.js";import"./cross-DJjNSarb.js";import"./svgIconContainer-BoZ4WTrV.js";import"./useBaseUiId-uUDoNX5q.js";import"./InternalBackdrop-Dv-N3MX6.js";import"./composite-s38ZpXCI.js";import"./index-DckN6Z75.js";import"./index-B7ZeWuUK.js";import"./index-jWoVPMOf.js";import"./useEventCallback-vWB41utD.js";import"./SkeletonBar-DYLnGweB.js";import"./LoadingCell-YdCVoPHH.js";import"./ColumnConfigDialog-6WIKVa5i.js";import"./DraggableList-VH3DZlc1.js";import"./search-BAYfazpa.js";import"./Input-sjbB4Aiw.js";import"./useControlled-BkbhbtR9.js";import"./Button-Psq8nKOy.js";import"./small-cross-BFKLMMPg.js";import"./ActionButton-Bz-AvXIu.js";import"./Checkbox-DniYfbse.js";import"./useValueChanged-qVZGkxmZ.js";import"./CollapsiblePanel-74XZuXCD.js";import"./MultiColumnSortDialog-COTnjAII.js";import"./MenuTrigger-DiONpmDe.js";import"./CompositeItem-Cyx3uAMD.js";import"./ToolbarRootContext-D7Mh8yi7.js";import"./getDisabledMountTransitionStyles-CsaRuwLM.js";import"./getPseudoElementBounds-CYVG0CpK.js";import"./chevron-down-MpADD7bW.js";import"./index-CRwMUVe2.js";import"./error-ByNBHJWq.js";import"./BaseCbacBanner-hvdd3eti.js";import"./makeExternalStore-BA6_-t1C.js";import"./Tooltip-ClovcVQp.js";import"./PopoverPopup-CctEYuVT.js";import"./debounce-Btut_D36.js";import"./tick-CwqvEqLb.js";import"./DropdownField-BjT07YJh.js";import"./isEqual-LNNalZCs.js";import"./withOsdkMetrics-DlvIoaDP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
