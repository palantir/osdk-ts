import{j as r}from"./iframe-DSbYefrL.js";import{O as b}from"./object-table-DOLS4r3F.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CmJEJmS0.js";import{u as g}from"./useOsdkClient-aHXhUh5K.js";import"./preload-helper-Clv0QEBX.js";import"./Table-CpIrQiHH.js";import"./index-DfJdOFwn.js";import"./Dialog-CLbTzkqY.js";import"./cross-CfYS8owk.js";import"./svgIconContainer-Bkjdx6MT.js";import"./useBaseUiId-DkV43R3v.js";import"./InternalBackdrop-CGmifX4P.js";import"./composite-BhxdHiE2.js";import"./index-lJwGhQIz.js";import"./index-BRbX29hR.js";import"./index-D726ldU9.js";import"./useEventCallback-CmXtFHcQ.js";import"./SkeletonBar-C-O5AGPC.js";import"./LoadingCell-D6WW0MuL.js";import"./ColumnConfigDialog-X2Z4R0YZ.js";import"./DraggableList-Bi2lMrFV.js";import"./search-qlM389i2.js";import"./Input-DHiPLKtg.js";import"./useControlled-BarHOyLv.js";import"./isEqual-DgzbG1vg.js";import"./isObject-BIPzkIP0.js";import"./Button-C4t72u0x.js";import"./ActionButton-B3NdvxLm.js";import"./Checkbox-lygbNFpU.js";import"./useValueChanged-CbGyaYIf.js";import"./CollapsiblePanel-t-cQ1kOx.js";import"./MultiColumnSortDialog-B22v39MA.js";import"./MenuTrigger-BW5eLLQj.js";import"./CompositeItem-BtVMJozf.js";import"./ToolbarRootContext-B6LO1XZ_.js";import"./getDisabledMountTransitionStyles-BD6--rec.js";import"./getPseudoElementBounds-CQ0_pKjY.js";import"./chevron-down-Bh4mvEIQ.js";import"./index-R_rBoHID.js";import"./error-BdBj8w6f.js";import"./BaseCbacBanner-8eEQNYiR.js";import"./makeExternalStore-48lrjWXo.js";import"./Tooltip-BTFhzX0F.js";import"./PopoverPopup-Bam1YrA7.js";import"./debounce-GZwwSBFh.js";import"./tick-CNdHphiX.js";import"./DropdownField-Bsoi1h6R.js";import"./withOsdkMetrics-D8wuERpN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
