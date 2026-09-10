import{j as r}from"./iframe-62_AXEOv.js";import{O as b}from"./object-table-m1Z0AFxh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-JshzskMj.js";import{u as g}from"./useOsdkClient-Dn0oXpKF.js";import"./preload-helper-CFT5weAC.js";import"./Table-D4WJM57i.js";import"./index-BBxmoCpH.js";import"./Dialog-BpsCe6yZ.js";import"./cross-DUPyqLs7.js";import"./svgIconContainer-B2ejb94d.js";import"./useBaseUiId-DxeaWUqe.js";import"./InternalBackdrop-B_mBuTj-.js";import"./composite-D1RGgOF8.js";import"./index-DqKHmJ5-.js";import"./index-IeLwL8MY.js";import"./index-BSNtLGGk.js";import"./useEventCallback-DoO6cpQA.js";import"./SkeletonBar-DIRl3Uz5.js";import"./LoadingCell-L8-tGZYz.js";import"./ColumnConfigDialog-GUtfDEUT.js";import"./DraggableList-UB4FYgy0.js";import"./search-BDESzP6B.js";import"./Input-B1gv6X7f.js";import"./useControlled-BvDlAnVr.js";import"./Button-CHJGiQMj.js";import"./small-cross-Ddj8Sovb.js";import"./ActionButton-DrWj2qAO.js";import"./Checkbox-BTD7rdCY.js";import"./useValueChanged-Dbwftc6q.js";import"./CollapsiblePanel-ByMOZaM4.js";import"./MultiColumnSortDialog-ZPxhpF5i.js";import"./MenuTrigger-CL1wfT6u.js";import"./CompositeItem-BaakSNrp.js";import"./ToolbarRootContext-Cx34GHdJ.js";import"./getDisabledMountTransitionStyles-D7AIJw0A.js";import"./getPseudoElementBounds-BgmToZV8.js";import"./chevron-down-CLeFx5id.js";import"./index-DoWx18q-.js";import"./error-BRCVBLBe.js";import"./BaseCbacBanner-C38X9_W3.js";import"./makeExternalStore-ChHrabzP.js";import"./Tooltip-C03G-SPW.js";import"./PopoverPopup-chxNfS0K.js";import"./debounce-R6klB3y2.js";import"./tick-lJjx81-G.js";import"./DropdownField-BNfXsoFz.js";import"./isEqual-CuzkOSau.js";import"./withOsdkMetrics-DHRPDUGo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
