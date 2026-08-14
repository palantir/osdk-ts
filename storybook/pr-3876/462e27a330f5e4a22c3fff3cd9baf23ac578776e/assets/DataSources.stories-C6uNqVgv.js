import{j as r}from"./iframe-C5plkjSh.js";import{O as b}from"./object-table-D-wd0Qcs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BtocdWec.js";import{u as g}from"./useOsdkClient-DVJH9yA4.js";import"./preload-helper-D2IaZEKn.js";import"./Table-D55pI679.js";import"./index-D9wyEakh.js";import"./Dialog-CPktwRC6.js";import"./cross-qTcD5Byv.js";import"./svgIconContainer-EWLL2EhA.js";import"./useBaseUiId-V6kg8ls-.js";import"./InternalBackdrop-C5tJkjz5.js";import"./composite-BxJrl2yy.js";import"./index-D5BdYI2w.js";import"./index-DGSE155D.js";import"./index-BJLKwKUI.js";import"./useEventCallback-BPOfe5xL.js";import"./SkeletonBar-D7VOiuiY.js";import"./LoadingCell-Cl0-ex6e.js";import"./ColumnConfigDialog-DwlPTvTA.js";import"./DraggableList-DIIzQe75.js";import"./search-DBXUIzFs.js";import"./Input-B8vRDl86.js";import"./useControlled-XDmIyGCI.js";import"./Button-D-euGQeq.js";import"./small-cross-JHfhKmWd.js";import"./ActionButton-UWnXYNQ1.js";import"./Checkbox-CcXa3FW0.js";import"./useValueChanged-CCEYZLFM.js";import"./CollapsiblePanel-DkWAAq2A.js";import"./MultiColumnSortDialog-C1xQBoGS.js";import"./MenuTrigger-sBycFOGP.js";import"./CompositeItem-C0Ixb4m4.js";import"./ToolbarRootContext-BWxTlH90.js";import"./getDisabledMountTransitionStyles-BIiy187H.js";import"./getPseudoElementBounds-DyRvmShW.js";import"./chevron-down-DJkRQn8M.js";import"./index-EcGiAU7n.js";import"./error-BgKA35zl.js";import"./BaseCbacBanner-BdNxAHfp.js";import"./makeExternalStore-BinvBmxp.js";import"./Tooltip-B6v5wWAV.js";import"./PopoverPopup-Dk2YnyhM.js";import"./debounce-B_060YLv.js";import"./tick-BkRHkH2Y.js";import"./DropdownField-D24t9xbi.js";import"./isEqual-DS72OK34.js";import"./withOsdkMetrics-CfCFI9Ho.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
