import{j as r}from"./iframe-fw03FCk5.js";import{O as b}from"./object-table-C0cY5G1p.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCOJIeKU.js";import{u as g}from"./useOsdkClient-bVTcwCG3.js";import"./preload-helper-P9E4Gy6I.js";import"./Table-Fp44mOL0.js";import"./index-cLbCIlyy.js";import"./Dialog-BpeYGZOK.js";import"./cross-Cwm_6W5t.js";import"./svgIconContainer-DTMIi6B0.js";import"./useBaseUiId-R4A3P2Wz.js";import"./InternalBackdrop-B4CFFx_T.js";import"./composite-D_MYaedS.js";import"./index-DFgmoBbG.js";import"./index-DZcROz4y.js";import"./index-C60tKhQE.js";import"./useEventCallback-DP4IinGV.js";import"./SkeletonBar-CLswlhKR.js";import"./LoadingCell-Bi1Dmks0.js";import"./ColumnConfigDialog-CLfNxsHx.js";import"./DraggableList-DHw0AQf7.js";import"./search-6gQRaMIj.js";import"./Input-Cr_VCQb2.js";import"./useControlled-Bwl7RhM1.js";import"./Button-B6XGTdgm.js";import"./small-cross-BquVTguM.js";import"./ActionButton-YSM36rBh.js";import"./Checkbox-BFEEUGNU.js";import"./useValueChanged-CG3lqo2r.js";import"./CollapsiblePanel-BSUAw99t.js";import"./MultiColumnSortDialog-DV0Rp5WR.js";import"./MenuTrigger-C7uy9UPk.js";import"./CompositeItem-BsCKjv-0.js";import"./ToolbarRootContext-BkWOeIIg.js";import"./getDisabledMountTransitionStyles-Bz-DeKbz.js";import"./getPseudoElementBounds-D0KG0Y6V.js";import"./chevron-down-CoqXE8sv.js";import"./index-Br7cHrYo.js";import"./error-Dfv9QpfZ.js";import"./BaseCbacBanner-CFFvJZA3.js";import"./makeExternalStore-Bmm8rP_V.js";import"./Tooltip-CcSsRqls.js";import"./PopoverPopup-OHXCDTwv.js";import"./debounce-Uta78yLR.js";import"./tick-R2G1Vx7E.js";import"./DropdownField-BI32TYx-.js";import"./isEqual-SpXDcrrv.js";import"./withOsdkMetrics-DxwGMBTH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
