import{j as r}from"./iframe-CSmstThV.js";import{O as b}from"./object-table-Br5TS_Ko.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ds851nQn.js";import{u as g}from"./useOsdkClient-XXkLSmqd.js";import"./preload-helper-CQQlEffD.js";import"./Table-D2RInRqE.js";import"./index-L8cshBl8.js";import"./Dialog-DRQMKMRV.js";import"./cross-D9KoCzL1.js";import"./svgIconContainer-BHO01tKx.js";import"./useBaseUiId-BiI5AoOG.js";import"./InternalBackdrop-Dbs4xP0U.js";import"./composite-D-st0uki.js";import"./index-CZXhyyfI.js";import"./index-DfIv01yj.js";import"./index-6VBvVHdU.js";import"./useEventCallback-FJVX4Oe4.js";import"./SkeletonBar-CD6igyAS.js";import"./LoadingCell-CVep6Ll3.js";import"./ColumnConfigDialog-C0CZWTf4.js";import"./DraggableList-BWKTYHTL.js";import"./search-DOAaZcfu.js";import"./Input-1EXkKDbs.js";import"./useControlled-CNZAIfTk.js";import"./Button-DI_WLWpV.js";import"./small-cross-CBcN5a2q.js";import"./ActionButton-CsW1cROw.js";import"./Checkbox-DfGU3i8U.js";import"./useValueChanged-B7kTE-jt.js";import"./CollapsiblePanel-pP6ofbVg.js";import"./MultiColumnSortDialog-DQSc23iF.js";import"./MenuTrigger-B3kyZj42.js";import"./CompositeItem-BaYmn_Wk.js";import"./ToolbarRootContext-D3qIfWMT.js";import"./getDisabledMountTransitionStyles-BRgSEEls.js";import"./getPseudoElementBounds-fscGHaQm.js";import"./chevron-down-Dn4WYVvB.js";import"./index-CQ6HYfiM.js";import"./error-Cu8ttO5d.js";import"./BaseCbacBanner-DmGWRWmI.js";import"./makeExternalStore-DWrbiT-Y.js";import"./Tooltip-B7jbz24u.js";import"./PopoverPopup-X1QJW8UM.js";import"./debounce-aX7sjs20.js";import"./tick-BFPZziq8.js";import"./DropdownField-CcJaOmXn.js";import"./isEqual-DqEmxDwB.js";import"./withOsdkMetrics-V02XcVkv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
