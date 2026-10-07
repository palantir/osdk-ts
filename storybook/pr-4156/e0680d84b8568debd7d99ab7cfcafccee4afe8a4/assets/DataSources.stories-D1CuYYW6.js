import{j as r}from"./iframe-CvX9Pygi.js";import{O as b}from"./object-table-BUtrTjpN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BVZQZEB6.js";import{u as g}from"./useOsdkClient-BkDk9PCS.js";import"./preload-helper-BB8WBYsV.js";import"./Table-QxYBnfC2.js";import"./index-BZTqeQuD.js";import"./Dialog-Cwq31CHt.js";import"./cross-a0pxU8ye.js";import"./svgIconContainer-Cik9z__5.js";import"./useBaseUiId-BW2Ufhyw.js";import"./InternalBackdrop-KsToEN62.js";import"./composite-B1Ef3_vs.js";import"./index-C3D6pCjL.js";import"./index-EBKlSRA8.js";import"./index-BRzHUjU3.js";import"./useEventCallback-Cd4IUoh5.js";import"./SkeletonBar-Bnfzc4A1.js";import"./LoadingCell-EkqPT1cA.js";import"./ColumnConfigDialog-C2V8ttfd.js";import"./DraggableList-OvqbjDr_.js";import"./search-D9_8mB8g.js";import"./Input-B4YDDaMi.js";import"./useControlled-qJqObmnH.js";import"./Button-D5Y-liWD.js";import"./small-cross-BfYBNzN7.js";import"./ActionButton-BG0rIOTw.js";import"./Checkbox-B_3kZLWz.js";import"./useValueChanged-CN40AKPX.js";import"./CollapsiblePanel-DiQ0neqE.js";import"./MultiColumnSortDialog-khzDAYAw.js";import"./MenuTrigger-D9EQbsZv.js";import"./CompositeItem-LESBwLaD.js";import"./ToolbarRootContext-BT80oNNA.js";import"./getDisabledMountTransitionStyles-Oyv5nHgL.js";import"./getPseudoElementBounds-vWAS2NT6.js";import"./chevron-down-o9sdxfCV.js";import"./index-w6IpT_oR.js";import"./error-B2uabQYe.js";import"./BaseCbacBanner-BxOuxwtm.js";import"./makeExternalStore-M2yjAWof.js";import"./Tooltip-Bd17w1nK.js";import"./PopoverPopup-CFZCCanB.js";import"./debounce-BfCJX0Ug.js";import"./tick-Cu_c34Lw.js";import"./DropdownField-5zyXtgzR.js";import"./isEqual-CY1gbDwB.js";import"./withOsdkMetrics-DTO1kugV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
