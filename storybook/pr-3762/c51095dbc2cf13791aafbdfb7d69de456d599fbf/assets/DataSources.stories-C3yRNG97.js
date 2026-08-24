import{j as r}from"./iframe-8W7VgjHd.js";import{O as b}from"./object-table-DdJ9zRzS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D-g8AyTn.js";import{u as g}from"./useOsdkClient-BAJ4OvKx.js";import"./preload-helper-DO6s7Vfv.js";import"./Table-C4qtfNE5.js";import"./index-BtBCXImO.js";import"./Dialog-Ch3t_b5I.js";import"./cross-6cERZ-YR.js";import"./svgIconContainer-BTT_9wFe.js";import"./useBaseUiId-CAeqz6cK.js";import"./InternalBackdrop-DfwF-S7u.js";import"./composite-C4cfnDPy.js";import"./index-BOk8n-3F.js";import"./index-DLLXsNTc.js";import"./index-BdDerrdJ.js";import"./useEventCallback-CcBUD0dP.js";import"./SkeletonBar-CNX-DDH1.js";import"./LoadingCell-Csb6dv_d.js";import"./ColumnConfigDialog-v2o9UO3m.js";import"./DraggableList-CM6_ZUT5.js";import"./search-Xd_WCU0c.js";import"./Input-C92p9Vvp.js";import"./useControlled-DJ7vg7ze.js";import"./Button-DqbeFPJh.js";import"./small-cross-SY3kxLTP.js";import"./ActionButton-cxV3QJBQ.js";import"./Checkbox-CnPS01sL.js";import"./useValueChanged-8dBDW2sE.js";import"./CollapsiblePanel-BAo3DGGi.js";import"./MultiColumnSortDialog-Cl_x44Fb.js";import"./MenuTrigger-DXvqC90a.js";import"./CompositeItem-DdqixRyh.js";import"./ToolbarRootContext-BF4G0Oc0.js";import"./getDisabledMountTransitionStyles-DVCYeryT.js";import"./getPseudoElementBounds-dA7mVN4o.js";import"./chevron-down-Bz7OwIBQ.js";import"./index-DmJmV5u2.js";import"./error-BHd5K9Qe.js";import"./BaseCbacBanner-CzNk8lN_.js";import"./makeExternalStore-DqBKfbO3.js";import"./Tooltip-Cg8D7mEU.js";import"./PopoverPopup-BFrPiLZn.js";import"./debounce-r4t9Jw_5.js";import"./tick-CUYsCAuC.js";import"./DropdownField-DDsIis61.js";import"./useDebouncedCallback-BgfmWq5o.js";import"./withOsdkMetrics-pAxDRnd3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
