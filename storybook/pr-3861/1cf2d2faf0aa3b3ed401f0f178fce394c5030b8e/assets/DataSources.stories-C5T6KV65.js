import{j as r}from"./iframe-CtO4Vlsv.js";import{O as b}from"./object-table-CfDXyuYa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bnx7Xk7Y.js";import{u as g}from"./useOsdkClient-ScCgYAaB.js";import"./preload-helper-YqejZBGo.js";import"./Table-BhmKYFQW.js";import"./index-D6VuR_bO.js";import"./Dialog-CAHX-FYg.js";import"./cross-DIyr606b.js";import"./svgIconContainer-dYvBsUdw.js";import"./useBaseUiId-B7sMgTKT.js";import"./InternalBackdrop-BQN3hAK8.js";import"./composite-1A59BLWV.js";import"./index-BcgXYDjH.js";import"./index-Ct5AqRLg.js";import"./index-D1KfpWj6.js";import"./useEventCallback-08xL6vGn.js";import"./SkeletonBar-DK-zeHoP.js";import"./LoadingCell-Cwx7eJxl.js";import"./ColumnConfigDialog-C_D9dEBn.js";import"./DraggableList-Ck21qkeS.js";import"./search-BP5Cq0-y.js";import"./Input-D94oZ1yC.js";import"./useControlled-Dnk1LplJ.js";import"./Button-n85r1nQ7.js";import"./small-cross-CStP_9vV.js";import"./ActionButton-DUxsUnvW.js";import"./Checkbox-CdI01C-h.js";import"./useValueChanged-QyFlMkIr.js";import"./CollapsiblePanel-C_0dIlmL.js";import"./MultiColumnSortDialog-a2Rp5WvA.js";import"./MenuTrigger-BIuhzh2h.js";import"./CompositeItem-CyExzK58.js";import"./ToolbarRootContext-BV8nTPdY.js";import"./getDisabledMountTransitionStyles-BZ333I0A.js";import"./getPseudoElementBounds-CWG0I-Qb.js";import"./chevron-down-BoBfGWo-.js";import"./index-SvYPogYk.js";import"./error-xCVe8qee.js";import"./BaseCbacBanner-DzpHtGQw.js";import"./makeExternalStore-C1nOJgZ5.js";import"./Tooltip-DGCiUH60.js";import"./PopoverPopup-ClkuOGbd.js";import"./debounce-BO6wUQGo.js";import"./tick-Co0_coOt.js";import"./DropdownField-Bo8r8-09.js";import"./isEqual-6ELeF5kp.js";import"./withOsdkMetrics-DviXph28.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
