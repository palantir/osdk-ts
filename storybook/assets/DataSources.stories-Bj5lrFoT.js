import{j as r}from"./iframe-B7GyHcsF.js";import{O as b}from"./object-table-DPd-aWI_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CeCVqglP.js";import{u as g}from"./useOsdkClient-BzlDplSL.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Bk1GMrYB.js";import"./index-CFQjkptn.js";import"./Dialog-CYxMX5KP.js";import"./cross-CbX11T1l.js";import"./svgIconContainer-DV6JsgR9.js";import"./useBaseUiId-DIKh32OU.js";import"./InternalBackdrop-dYAJysja.js";import"./composite-ZKnDJfr2.js";import"./index-CCC1KVPP.js";import"./index-BrNFn6FK.js";import"./index-CIkJKp5f.js";import"./useEventCallback-Dws1eW-l.js";import"./SkeletonBar-x8unuJhM.js";import"./LoadingCell-vDLd6n3U.js";import"./ColumnConfigDialog-CtOQy-z4.js";import"./DraggableList-BDxPGWV9.js";import"./search-BOqk2K5z.js";import"./Input-xO4VjGaV.js";import"./useControlled-CYQSl254.js";import"./Button-DcySZcut.js";import"./small-cross-C2Z9hnxs.js";import"./ActionButton-C8h86V18.js";import"./Checkbox-DqE-JteW.js";import"./useValueChanged-VqPWwgfd.js";import"./CollapsiblePanel-VqzXipcy.js";import"./MultiColumnSortDialog-CltP5yZp.js";import"./MenuTrigger-BLTWopKx.js";import"./CompositeItem-QnuG7jjG.js";import"./ToolbarRootContext-DPmvBz2H.js";import"./getDisabledMountTransitionStyles-DJHtY_2a.js";import"./getPseudoElementBounds-fr9V4EVn.js";import"./chevron-down-BWTVBIyh.js";import"./index-CV0k5xhB.js";import"./error-o8PSnfAD.js";import"./BaseCbacBanner-BGYGDjdi.js";import"./makeExternalStore-CHXnPqRT.js";import"./Tooltip-Ob1GddwU.js";import"./PopoverPopup-B5kfz1KF.js";import"./debounce-CcrQke-P.js";import"./tick-BsrTYy8c.js";import"./DropdownField-2GtibBCE.js";import"./isEqual-CFHS8Jx5.js";import"./withOsdkMetrics-3hzxFyTR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
