import{j as r}from"./iframe-el7bjSAH.js";import{O as b}from"./object-table-CiBVhktO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CH46hnqF.js";import{u as g}from"./useOsdkClient-d2eky65A.js";import"./preload-helper-DLIuAVkn.js";import"./Table-D1tnOVr7.js";import"./index-DqdFzNH7.js";import"./Dialog-D3Ep4Clz.js";import"./cross-DKrIoJp0.js";import"./svgIconContainer-DsqZkZNx.js";import"./useBaseUiId-BMJSE7oP.js";import"./InternalBackdrop-BMvERWIA.js";import"./composite-CNO4lqFc.js";import"./index-C95mnJoM.js";import"./index-0oAMicpD.js";import"./index-BVkx0JYL.js";import"./useEventCallback-ENJpX7A2.js";import"./SkeletonBar-Cm8w6Wrq.js";import"./LoadingCell-m0XW9yVV.js";import"./ColumnConfigDialog-DOZjlzUx.js";import"./DraggableList-IhqU2Qp8.js";import"./search-BcW8-7NR.js";import"./Input-CL8_Xm7J.js";import"./useControlled-B75sCM7T.js";import"./Button-CzJbluPV.js";import"./small-cross-DlbYuuLD.js";import"./ActionButton-CHJoFoX3.js";import"./Checkbox-DIklOqmF.js";import"./useValueChanged-DS-0ugoh.js";import"./CollapsiblePanel-BVK3lBnv.js";import"./MultiColumnSortDialog-Cs-ZlCP3.js";import"./MenuTrigger-BcJHHzDt.js";import"./CompositeItem-2Q_-fuaz.js";import"./ToolbarRootContext-B3AP-FE_.js";import"./getDisabledMountTransitionStyles-D3JoAvA2.js";import"./getPseudoElementBounds-Dey8uGuB.js";import"./chevron-down-C0Gm8Kcu.js";import"./index-BxJn0x3b.js";import"./error-D7fY3cPV.js";import"./BaseCbacBanner-DptezKCq.js";import"./makeExternalStore-F3_wqthP.js";import"./Tooltip-LLGUzx8a.js";import"./PopoverPopup-DwVOyFYi.js";import"./debounce-jh4ZJlD3.js";import"./tick-0qxmk6XW.js";import"./DropdownField-CmRqBaKg.js";import"./isEqual-DChMwUp_.js";import"./withOsdkMetrics-BlbIxaEE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
