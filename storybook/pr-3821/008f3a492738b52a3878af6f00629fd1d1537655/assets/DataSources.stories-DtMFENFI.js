import{j as r}from"./iframe-W7klRwPo.js";import{O as b}from"./object-table-DPoOoUWU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ee3vc1cY.js";import{u as g}from"./useOsdkClient-B59tI4Kr.js";import"./preload-helper-DzzVRHA1.js";import"./Table-CCquNK1D.js";import"./index-DqAaMvOx.js";import"./Dialog-DuD248TJ.js";import"./cross-CVS5175r.js";import"./svgIconContainer-CavRQoS6.js";import"./useBaseUiId-CmsqdJ-e.js";import"./InternalBackdrop-KQ-rNslX.js";import"./composite-C2wWpGQA.js";import"./index-f5L3Ve5D.js";import"./index-BjtQcmRh.js";import"./index-f1Cp8ubY.js";import"./useEventCallback-Brx1vz4t.js";import"./SkeletonBar-yBswZtzo.js";import"./LoadingCell-B5McmPqq.js";import"./ColumnConfigDialog-BTUjzFV6.js";import"./DraggableList-E8Ss2X1R.js";import"./search-C0IxMrHh.js";import"./Input-e9mOs_hp.js";import"./useControlled-D-e4oaL6.js";import"./isEqual-DMQ1l2xA.js";import"./isObject-Bjagge_9.js";import"./Button-Djh2cg4Z.js";import"./ActionButton-CtI3jAj8.js";import"./Checkbox-BxgVjFqS.js";import"./useValueChanged-7P5VYuTV.js";import"./CollapsiblePanel-4FTZSScj.js";import"./MultiColumnSortDialog-DbzBLfHq.js";import"./MenuTrigger-D4nszTsU.js";import"./CompositeItem-Dn5gqGcd.js";import"./ToolbarRootContext-pxZkIimq.js";import"./getDisabledMountTransitionStyles-B1l5eJQs.js";import"./getPseudoElementBounds-xpP3PwwJ.js";import"./chevron-down-C5eusy-A.js";import"./index-CybiIO96.js";import"./error-BkwKplka.js";import"./BaseCbacBanner-Dj2l6T1s.js";import"./makeExternalStore-CKtLXmhF.js";import"./Tooltip-ZdoVZDJ1.js";import"./PopoverPopup-BG9P5Ue8.js";import"./toNumber-DxcGa0bC.js";import"./tick-BU2811b5.js";import"./DropdownField-Coo3INXv.js";import"./withOsdkMetrics-wjgZ6riq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
