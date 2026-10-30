import{j as r}from"./iframe-B-n5uLkA.js";import{O as b}from"./object-table-DpR_3wrC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dr7LwAEH.js";import{u as g}from"./useOsdkClient-CDqx5dcV.js";import"./preload-helper-vxu-jvpO.js";import"./Table-DJglKLQw.js";import"./index-r9aFA9c6.js";import"./Dialog-DJz7Ov-G.js";import"./cross-CzzoI-Me.js";import"./svgIconContainer-BAP4xquW.js";import"./useBaseUiId-Cx3-H6q7.js";import"./InternalBackdrop-DE5d7cjQ.js";import"./composite-CcnMcVoq.js";import"./index-AEeSb7o4.js";import"./index-DKaYQA5S.js";import"./index-CWueSEk2.js";import"./useEventCallback-Cug5Ejgk.js";import"./SkeletonBar-Cy7lWMxB.js";import"./LoadingCell-DR7WlWbN.js";import"./ColumnConfigDialog-BhU-gVnl.js";import"./DraggableList-C1OCbizh.js";import"./search-DCVRYddG.js";import"./Input-LcpenwpJ.js";import"./useControlled-Bce4MQ3D.js";import"./Button-Cxizrf8Y.js";import"./small-cross-xC3C54Po.js";import"./ActionButton-D2uNXT3k.js";import"./Checkbox-CIUBwDNv.js";import"./useValueChanged-DWhuyL2N.js";import"./CollapsiblePanel-D3r1-b_X.js";import"./MultiColumnSortDialog-R4zjE0hh.js";import"./MenuTrigger-BQhRZlK9.js";import"./CompositeItem-Brq4Jfrc.js";import"./ToolbarRootContext-pXgQ7_Yk.js";import"./getDisabledMountTransitionStyles-BWEZuvfD.js";import"./getPseudoElementBounds-DNbnatNp.js";import"./chevron-down-COZB8m2A.js";import"./index-B0qRo9vw.js";import"./error-ctHtVSzl.js";import"./BaseCbacBanner-Ck12EOP4.js";import"./makeExternalStore-CWIwlctc.js";import"./Tooltip-f4HmeV3o.js";import"./PopoverPopup-BoLWF4qb.js";import"./debounce-H1RiGpm9.js";import"./tick-DdfGjDes.js";import"./DropdownField-BoiijBdj.js";import"./isEqual-DdqzM83-.js";import"./withOsdkMetrics-BSpJ8hG-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
