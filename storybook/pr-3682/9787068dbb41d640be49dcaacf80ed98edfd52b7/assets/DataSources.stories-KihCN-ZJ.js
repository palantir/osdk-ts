import{j as r}from"./iframe-T1o6DwQn.js";import{O as b}from"./object-table-DZY8b-86.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bs2-TSVb.js";import{u as g}from"./useOsdkClient-30aL_up_.js";import"./preload-helper-CkSYKUqL.js";import"./Table-3iJd7gyC.js";import"./index-C-Yvvs3G.js";import"./Dialog-gA5oXLZl.js";import"./cross-DNFg9adP.js";import"./svgIconContainer-BEph9AST.js";import"./useBaseUiId-CQK9r6XJ.js";import"./InternalBackdrop-DwRohRWz.js";import"./composite-BUVy4G6Q.js";import"./index-Cj5oaWDZ.js";import"./index-DzvoDz4m.js";import"./index-B2yL0vo-.js";import"./useEventCallback-DCBJT6LD.js";import"./SkeletonBar-D77QBKOp.js";import"./LoadingCell-Idw7S2wY.js";import"./ColumnConfigDialog-vuVx74WT.js";import"./DraggableList-BY1xQfTl.js";import"./search-CLuqE52U.js";import"./Input-Dan1z7PJ.js";import"./useControlled-KFuOJB7y.js";import"./isEqual-DPxqtn2A.js";import"./isObject-BPUwpKdJ.js";import"./Button-B5AFRMRx.js";import"./ActionButton-DFoxUgo7.js";import"./Checkbox-CLP1JsNX.js";import"./useValueChanged-D-Nexx1O.js";import"./CollapsiblePanel-VveLCUij.js";import"./MultiColumnSortDialog-fd0ORnEb.js";import"./MenuTrigger-B-v3EPiU.js";import"./CompositeItem-Cwg9cZxl.js";import"./ToolbarRootContext-CmFCJCtX.js";import"./getDisabledMountTransitionStyles-BPa-nMbj.js";import"./getPseudoElementBounds-Hdyo3ffU.js";import"./chevron-down-DR4svmgW.js";import"./index-D1JQTjX2.js";import"./error-Cwg5VJo2.js";import"./BaseCbacBanner-Cz8vVRvX.js";import"./makeExternalStore-BlXYWwZo.js";import"./Tooltip-CZ9oTlF0.js";import"./PopoverPopup-GGnOhBXr.js";import"./toNumber-B0doV3z3.js";import"./tick-6XDwjxMK.js";import"./DropdownField-djZ4N90-.js";import"./withOsdkMetrics-B2606ITo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
