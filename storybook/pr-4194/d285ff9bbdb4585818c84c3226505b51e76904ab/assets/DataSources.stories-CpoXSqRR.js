import{j as r}from"./iframe-BLtbB9yL.js";import{O as b}from"./object-table-BMOcHco8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-dzPF40OZ.js";import{u as g}from"./useOsdkClient-kJp2DoWV.js";import"./preload-helper-NY6L4APl.js";import"./Table-BcF0PcB9.js";import"./index-Dzu4b_IB.js";import"./Dialog-Cl6rHvFZ.js";import"./cross-C7Pfqsgy.js";import"./svgIconContainer-cTxegse7.js";import"./useBaseUiId-DmOmCKZO.js";import"./InternalBackdrop-DMzDeexZ.js";import"./composite-Cypvm6OB.js";import"./index-Dq2eIlq8.js";import"./index-u2zPfote.js";import"./index-SyXOuBxU.js";import"./useEventCallback-Iu0smDrU.js";import"./SkeletonBar-Gao4JZhU.js";import"./LoadingCell-CuZwbcdJ.js";import"./ColumnConfigDialog-bCiOL-fS.js";import"./DraggableList-DoyHD0VZ.js";import"./search-1AInKOFa.js";import"./Input-BiA-3KH_.js";import"./useControlled-WQcnYS8e.js";import"./Button-B6pZtsky.js";import"./small-cross-8u8HOGrz.js";import"./ActionButton-CFQJm7v4.js";import"./Checkbox-CmQMT6Zx.js";import"./useValueChanged-BZ3-3RtY.js";import"./CollapsiblePanel-PGaxeolw.js";import"./MultiColumnSortDialog-D-y_hAG-.js";import"./MenuTrigger-Br0ibyRy.js";import"./CompositeItem-DNKgQIaZ.js";import"./ToolbarRootContext-DdGg-Lfa.js";import"./getDisabledMountTransitionStyles-KNC7oIQb.js";import"./getPseudoElementBounds-DaOCuufP.js";import"./chevron-down-BhpG0rg7.js";import"./index-DcUVdUbh.js";import"./error-BGqP2VaS.js";import"./BaseCbacBanner-R2Kh6ldg.js";import"./makeExternalStore-Bw178tiK.js";import"./Tooltip-BEj70Lhq.js";import"./PopoverPopup-DUjFzwE3.js";import"./debounce-DSB8VkTp.js";import"./tick-3ZiA6yfA.js";import"./DropdownField-DbhYDUVf.js";import"./isEqual-RjjK8BdL.js";import"./withOsdkMetrics-CFSyk5hC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
