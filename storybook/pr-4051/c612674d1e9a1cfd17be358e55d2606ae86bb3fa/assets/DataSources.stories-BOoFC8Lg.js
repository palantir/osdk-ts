import{j as r}from"./iframe-UjTNASi3.js";import{O as b}from"./object-table-DIW9dq4B.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CPkVFk8G.js";import{u as g}from"./useOsdkClient-DN28ZgTP.js";import"./preload-helper-ChUqF7Rx.js";import"./Table-MN_vrx7q.js";import"./index-CBLOqz9O.js";import"./Dialog-yrlpxn2H.js";import"./cross-BEq_sPpX.js";import"./svgIconContainer-BnZ--aX4.js";import"./useBaseUiId-DbZZYE7u.js";import"./InternalBackdrop-BCPpUKFw.js";import"./composite-BsaBRbEf.js";import"./index-bodWc-gm.js";import"./index-D5cIctx_.js";import"./index-Bzh_X7xQ.js";import"./useEventCallback-FKK13t9n.js";import"./SkeletonBar-BPWMNsbJ.js";import"./LoadingCell-CLJ65w3A.js";import"./ColumnConfigDialog-CL9JPzWq.js";import"./DraggableList-DpDJvc4F.js";import"./search-4dG4ZP2W.js";import"./Input-BLyk5LFB.js";import"./useControlled-C5YhSjey.js";import"./Button-DAjQjRlz.js";import"./small-cross-xy7dzoIW.js";import"./ActionButton-DwiWw116.js";import"./Checkbox-V82sjqAR.js";import"./useValueChanged-BLjWbJ6t.js";import"./CollapsiblePanel-DWpVdDad.js";import"./MultiColumnSortDialog-BKTCkKju.js";import"./MenuTrigger-Bh44Tetg.js";import"./CompositeItem-B-v9FANt.js";import"./ToolbarRootContext-BlxyZF17.js";import"./getDisabledMountTransitionStyles-DSqUzqL9.js";import"./getPseudoElementBounds-Dhsw8tBA.js";import"./chevron-down-B950jIbn.js";import"./index-CCVIwSxo.js";import"./error-K7GcRxh8.js";import"./BaseCbacBanner-CyOIqrYI.js";import"./makeExternalStore-BAIn4U_g.js";import"./Tooltip-D20tmfcP.js";import"./PopoverPopup-DfAiwejK.js";import"./debounce-C0USvgmQ.js";import"./tick-pbW1n8ts.js";import"./DropdownField-B-vNGTny.js";import"./isEqual-CIzOEpNl.js";import"./withOsdkMetrics-viX3FGJl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
