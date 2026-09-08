import{j as r}from"./iframe-zJLPhxDK.js";import{O as b}from"./object-table-Cp_r17tu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DvL6J2Nk.js";import{u as g}from"./useOsdkClient-C-E3sQun.js";import"./preload-helper-GdadUrm9.js";import"./Table-D8q83Fop.js";import"./index-vZmbqUi_.js";import"./Dialog-BJTpqgdP.js";import"./cross-CmuzwVFc.js";import"./svgIconContainer-17tBJAuz.js";import"./useBaseUiId-J532w0x8.js";import"./InternalBackdrop-DYym0q9C.js";import"./composite-CNMHWwCZ.js";import"./index-CDChpdVQ.js";import"./index-CPu2nGpB.js";import"./index-CjB3uV7l.js";import"./useEventCallback-CBonnidZ.js";import"./SkeletonBar-BB2sdYKt.js";import"./LoadingCell-BWSietrN.js";import"./ColumnConfigDialog-BMfkiHBt.js";import"./DraggableList-DkEAjvno.js";import"./search-Bw5FPkB2.js";import"./Input-DZwpfTHR.js";import"./useControlled-CczBvYjn.js";import"./Button-DBmBk1R0.js";import"./small-cross-CPIIsUu1.js";import"./ActionButton-DFDnceTv.js";import"./Checkbox-CsH-jZZw.js";import"./useValueChanged-C-tMKNKt.js";import"./CollapsiblePanel-8-MkrIjK.js";import"./MultiColumnSortDialog-D-a7nSC7.js";import"./MenuTrigger-C7PFgrEd.js";import"./CompositeItem-BJ5z2a5g.js";import"./ToolbarRootContext-BZVYMUxs.js";import"./getDisabledMountTransitionStyles-CLhsnKXl.js";import"./getPseudoElementBounds-B6OAxxYX.js";import"./chevron-down-Bpi62_qF.js";import"./index-C3FdRyLS.js";import"./error-CbniACzb.js";import"./BaseCbacBanner-BqucRKS0.js";import"./makeExternalStore-BwWr7KGq.js";import"./Tooltip-DPh4VI-S.js";import"./PopoverPopup-BppR1H6u.js";import"./debounce-mJk9aS5I.js";import"./tick-BImD79hT.js";import"./DropdownField-C-INYeTI.js";import"./isEqual-CkRnhV_Y.js";import"./withOsdkMetrics-Bw_72zWT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
