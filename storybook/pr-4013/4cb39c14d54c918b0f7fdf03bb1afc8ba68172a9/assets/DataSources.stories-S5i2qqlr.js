import{j as r}from"./iframe-dxrUGHlK.js";import{O as b}from"./object-table-hg5iYLBs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dill-K0e.js";import{u as g}from"./useOsdkClient-CDGZBRrB.js";import"./preload-helper-B9qIDFMl.js";import"./Table-BDJVErev.js";import"./index-DPQcu4-a.js";import"./Dialog-BdAvzbRZ.js";import"./cross-Dj8MH7yM.js";import"./svgIconContainer-D-3aEKZU.js";import"./useBaseUiId-BsvKb-r1.js";import"./InternalBackdrop-DlhtBUyp.js";import"./composite-Dw-SYZmG.js";import"./index-C0ofq-ja.js";import"./index-BY143isZ.js";import"./index-D5-q3DyH.js";import"./useEventCallback-ayjMMOqN.js";import"./SkeletonBar-C2WYuCYy.js";import"./LoadingCell-C3rYW6d3.js";import"./ColumnConfigDialog-C1UbL8k6.js";import"./DraggableList-C3qnRuj_.js";import"./search-CVhjqWpu.js";import"./Input-C2FrKznv.js";import"./useControlled-D5pah6Ut.js";import"./Button-v2rih8HU.js";import"./small-cross-DrUhNudg.js";import"./ActionButton-TJz4kjAm.js";import"./Checkbox-CaAY45uN.js";import"./useValueChanged-BsqSHN0m.js";import"./CollapsiblePanel-BHW3YOjn.js";import"./MultiColumnSortDialog-DJR1GnhR.js";import"./MenuTrigger-BpOuL8ih.js";import"./CompositeItem-BLdzDdC9.js";import"./ToolbarRootContext-Cm84R3Vn.js";import"./getDisabledMountTransitionStyles-6BSbBO0S.js";import"./getPseudoElementBounds-B_zagfDH.js";import"./chevron-down-Ci5voemn.js";import"./index-BZzuVaIM.js";import"./error-DiHcLZ6r.js";import"./BaseCbacBanner-ebOZnzxu.js";import"./makeExternalStore-DsTmi0Ui.js";import"./Tooltip-BsaNTiq4.js";import"./PopoverPopup-BA5CaoZf.js";import"./debounce-DSygVot5.js";import"./tick-BnzW6v2L.js";import"./DropdownField-B_Tlb7nO.js";import"./isEqual-DVT4JLDM.js";import"./withOsdkMetrics-C48cTPuA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
