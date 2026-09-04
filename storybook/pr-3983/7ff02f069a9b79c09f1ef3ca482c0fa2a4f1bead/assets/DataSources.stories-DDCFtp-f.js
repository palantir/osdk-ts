import{j as r}from"./iframe-DZC97llC.js";import{O as b}from"./object-table-BvoRX1zu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Baix0xkA.js";import{u as g}from"./useOsdkClient-_TEeh3W2.js";import"./preload-helper-BKx802u_.js";import"./Table-4KaxNDjT.js";import"./index-B22k2ynk.js";import"./Dialog-CGcdHCLE.js";import"./cross-C2TZ8jDw.js";import"./svgIconContainer-CHUDLQoK.js";import"./useBaseUiId-C8ARUDoV.js";import"./InternalBackdrop-LhRnITuT.js";import"./composite-4CN6pmFS.js";import"./index-BMmTsFSZ.js";import"./index-CvyqG3Nj.js";import"./index-CibQtp_x.js";import"./useEventCallback-Ag7fNwiL.js";import"./SkeletonBar-JfMe0flw.js";import"./LoadingCell-obA1Lgn0.js";import"./ColumnConfigDialog-C0TComqG.js";import"./DraggableList-BupIVpou.js";import"./search-D_uWqWVr.js";import"./Input-CJlK5efb.js";import"./useControlled-CM4OrEQX.js";import"./Button-BKAvQm5U.js";import"./small-cross-FQOqopzh.js";import"./ActionButton-CBA28Gab.js";import"./Checkbox-Cqb3AtxC.js";import"./useValueChanged-BoneQYDH.js";import"./CollapsiblePanel-DNCdIVRX.js";import"./MultiColumnSortDialog--dJViONo.js";import"./MenuTrigger-vVpla90o.js";import"./CompositeItem-7MvBWb4V.js";import"./ToolbarRootContext-D7J-RjRt.js";import"./getDisabledMountTransitionStyles-C1vTwI5a.js";import"./getPseudoElementBounds-D-Dakysl.js";import"./chevron-down-CiXO6Fic.js";import"./index-kEMBdBjV.js";import"./error-CWLyhGEl.js";import"./BaseCbacBanner-D0kGWzY9.js";import"./makeExternalStore-B1reYnYy.js";import"./Tooltip-C_x2xNl8.js";import"./PopoverPopup-DEmuvAFX.js";import"./debounce-iD7mg0vi.js";import"./tick-DTIKTJ7D.js";import"./DropdownField-C2RCfl6F.js";import"./isEqual-BjCYvD21.js";import"./withOsdkMetrics-CTgXxJzO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
