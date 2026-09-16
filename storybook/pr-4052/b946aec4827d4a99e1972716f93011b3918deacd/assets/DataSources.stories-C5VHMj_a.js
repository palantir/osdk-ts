import{j as r}from"./iframe-DGHdiPVF.js";import{O as b}from"./object-table-B2GoNv8W.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BHcOKkKa.js";import{u as g}from"./useOsdkClient-jX8T137v.js";import"./preload-helper-Dwawx57G.js";import"./Table-OpGxcVjY.js";import"./index-CfDWuSgz.js";import"./Dialog-D_DzuMTT.js";import"./cross-B2_lH3br.js";import"./svgIconContainer-Cn2xvZW5.js";import"./useBaseUiId-DSFsxKY7.js";import"./InternalBackdrop-Ca1YtWjW.js";import"./composite-D0rWnQN7.js";import"./index-D6q9eE8T.js";import"./index-CvnU9MrA.js";import"./index-CD180WQx.js";import"./useEventCallback-CB_1zqCu.js";import"./SkeletonBar-C3HyLBXM.js";import"./LoadingCell-Dot3nYwb.js";import"./ColumnConfigDialog-CPsL-yv9.js";import"./DraggableList-CC4bozEW.js";import"./search-B7igo8wt.js";import"./Input-CON8UdB3.js";import"./useControlled-BEh8mP6Z.js";import"./Button-BowS6vUa.js";import"./small-cross-DQbMxM7N.js";import"./ActionButton-BMxdUIOw.js";import"./Checkbox-CqUOqq9Q.js";import"./useValueChanged-C5WGo09l.js";import"./CollapsiblePanel-CamAlsBH.js";import"./MultiColumnSortDialog-BQgUBeFy.js";import"./MenuTrigger-BNU8Gdvw.js";import"./CompositeItem-Bbw7hYJK.js";import"./ToolbarRootContext-SNm3mtrK.js";import"./getDisabledMountTransitionStyles-Cg-wyC-n.js";import"./getPseudoElementBounds-C4GLDEW1.js";import"./chevron-down-DP9lMKr_.js";import"./index-DrXgwkrt.js";import"./error-BdbrlX1x.js";import"./BaseCbacBanner-D9RvOaHG.js";import"./makeExternalStore-CWOokT-C.js";import"./Tooltip-D3MjycZw.js";import"./PopoverPopup-C2CAOZi1.js";import"./debounce-BS1ne0cG.js";import"./tick-BziusfMA.js";import"./DropdownField-CvEOum2T.js";import"./isEqual-DLlN249z.js";import"./withOsdkMetrics-DkGiRBlo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
