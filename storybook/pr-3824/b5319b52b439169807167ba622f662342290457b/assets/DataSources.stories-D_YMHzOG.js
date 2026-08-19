import{j as r}from"./iframe-SQbFhZ3c.js";import{O as b}from"./object-table-DO022oJ3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bk8jLc1d.js";import{u as g}from"./useOsdkClient-B7RtKw1R.js";import"./preload-helper-Bk8HE262.js";import"./Table-Dn2-WyOU.js";import"./index-DFG7WYoY.js";import"./Dialog-BksF8woT.js";import"./cross-DUHf3Xi-.js";import"./svgIconContainer-DpbMU5PI.js";import"./useBaseUiId-48FpeFM-.js";import"./InternalBackdrop-hdjBgUEf.js";import"./composite-A_HFMc3o.js";import"./index-DhCXsyWo.js";import"./index-DMJ3tVV7.js";import"./index-DaNwYb6O.js";import"./useEventCallback-CPy3Rkd8.js";import"./SkeletonBar-DzQSmgEp.js";import"./LoadingCell-Bih4q95e.js";import"./ColumnConfigDialog-BXFmAyqX.js";import"./DraggableList-CCIOiDz1.js";import"./search-Dv1CXcia.js";import"./Input-egVrdWvR.js";import"./useControlled-D7ywdRLy.js";import"./Button-CFQTwDbl.js";import"./small-cross-BdGuSKTr.js";import"./ActionButton-CZMeSJZL.js";import"./Checkbox-FTHcd1Q_.js";import"./useValueChanged-DOIbdOz8.js";import"./CollapsiblePanel-ZM6dC_qz.js";import"./MultiColumnSortDialog-BmhAx4WI.js";import"./MenuTrigger-B12dsoMz.js";import"./CompositeItem-Ddktyv2i.js";import"./ToolbarRootContext-BzTAPp2U.js";import"./getDisabledMountTransitionStyles-tIoM-SpH.js";import"./getPseudoElementBounds-BpCgKkH2.js";import"./chevron-down-BXSL_Za9.js";import"./index-B7SqLSeR.js";import"./error-cnAgyc_T.js";import"./BaseCbacBanner-BpCrbMvl.js";import"./makeExternalStore-BRt0pXTA.js";import"./Tooltip-5R-f9FdW.js";import"./PopoverPopup-4HlQ8QLc.js";import"./debounce-Lo5bZANl.js";import"./tick-R0brawEL.js";import"./DropdownField-zLTrjKWE.js";import"./isEqual-puOqvCFK.js";import"./withOsdkMetrics-C4ZNcPUI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
