import{j as r}from"./iframe-Szo9Zkn-.js";import{O as b}from"./object-table-Bh1a0-L6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ccw0uH9y.js";import{u as g}from"./useOsdkClient-BATbP90A.js";import"./preload-helper-Dhbsewg0.js";import"./Table-BMDXccGN.js";import"./index-w7MyO4j0.js";import"./Dialog-CsnVpAjB.js";import"./cross-Bg9KGljm.js";import"./svgIconContainer-CC53kbHO.js";import"./useBaseUiId-sDWiAP1v.js";import"./InternalBackdrop--YqpQigY.js";import"./composite-BNkcDv4u.js";import"./index-BaSJaIuK.js";import"./index-BZZ6jb1f.js";import"./index-BObVAdZh.js";import"./useEventCallback-CnaPuMH4.js";import"./SkeletonBar-BgMTxHDr.js";import"./LoadingCell-B6jIfShi.js";import"./ColumnConfigDialog-CbqfWi2T.js";import"./DraggableList-H8Oanmu1.js";import"./search-BfldJRDn.js";import"./Input-CZ0TTU7d.js";import"./useControlled-eHJHqQYa.js";import"./Button-CEu9_vPj.js";import"./small-cross-BHZFoiT4.js";import"./ActionButton-2gMpYRX6.js";import"./Checkbox-a8XH5_91.js";import"./useValueChanged-DGZyaree.js";import"./CollapsiblePanel-BGMdvSg-.js";import"./MultiColumnSortDialog-C8flbRMI.js";import"./MenuTrigger-B0E9sOUu.js";import"./CompositeItem-BHJmqDb8.js";import"./ToolbarRootContext-Bfqc1Rf4.js";import"./getDisabledMountTransitionStyles-BdfTLDtY.js";import"./getPseudoElementBounds-CTJEQtrc.js";import"./chevron-down-B2_IYtaL.js";import"./index-CtOtUzNQ.js";import"./error-3jlDe3tK.js";import"./BaseCbacBanner-CMALqZmQ.js";import"./makeExternalStore-C62oCblT.js";import"./Tooltip-_z1tCu5W.js";import"./PopoverPopup-DkhCYwO7.js";import"./debounce-Dy82AU_7.js";import"./tick-DFIcijiQ.js";import"./DropdownField-DLes8wgB.js";import"./isEqual-CXpRJzVN.js";import"./withOsdkMetrics-DNdzNBP7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
