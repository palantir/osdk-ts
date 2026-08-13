import{j as r}from"./iframe-9i1qquD3.js";import{O as b}from"./object-table-CIiOPICW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DaIPEQYn.js";import{u as g}from"./useOsdkClient-ag-TPCLH.js";import"./preload-helper-CaE5xEm4.js";import"./Table-C7QAQnNB.js";import"./index-Cn_PtrCz.js";import"./Dialog-Cp0xLvbr.js";import"./cross-ycERs_gP.js";import"./svgIconContainer-D5imF1LH.js";import"./useBaseUiId-DJQfhcf8.js";import"./InternalBackdrop-HxPhdxjx.js";import"./composite-DM30W4Iq.js";import"./index-D3xl72Ni.js";import"./index-_6ga9HMD.js";import"./index-BzYhgMC4.js";import"./useEventCallback-0vRphiCP.js";import"./SkeletonBar-DUKazIh_.js";import"./LoadingCell-BmdRfS3J.js";import"./ColumnConfigDialog-DL_Rcz3a.js";import"./DraggableList-CIB-qt-L.js";import"./search-KbjOGA9O.js";import"./Input-CYnOeAhZ.js";import"./useControlled-BNPeKpmg.js";import"./Button-C3QXTj2Z.js";import"./small-cross-Db9E4rXn.js";import"./ActionButton-CVFCNHwE.js";import"./Checkbox-BE9XtDBU.js";import"./useValueChanged-Chba_Qmf.js";import"./CollapsiblePanel-CaCqqfBH.js";import"./MultiColumnSortDialog-PgzoAEgZ.js";import"./MenuTrigger-CyObNyRF.js";import"./CompositeItem-DH17Zr6A.js";import"./ToolbarRootContext-go0Pv47B.js";import"./getDisabledMountTransitionStyles-B0-52SxF.js";import"./getPseudoElementBounds-FM95BU18.js";import"./chevron-down-9Tly55P9.js";import"./index-CNJNx8DW.js";import"./error-DLTX-bVv.js";import"./BaseCbacBanner-CM8tlOgH.js";import"./makeExternalStore-DL0J9LaB.js";import"./Tooltip-DJyWdD9X.js";import"./PopoverPopup-80njNaEX.js";import"./toNumber-Dj7u3-Bt.js";import"./tick-BqOAD6KG.js";import"./DropdownField-h0S7YUlm.js";import"./withOsdkMetrics-COOg86OH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
