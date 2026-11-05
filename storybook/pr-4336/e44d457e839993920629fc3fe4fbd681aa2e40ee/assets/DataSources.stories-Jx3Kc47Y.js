import{j as r}from"./iframe-BTvYIEq8.js";import{O as b}from"./object-table-BDs6ZIZB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D7-PgH_K.js";import{u as g}from"./useOsdkClient-Dy5Kdk0b.js";import"./preload-helper-CFYdII7P.js";import"./Table-HrNvjbUR.js";import"./index-Beef_kHp.js";import"./Dialog-CRyYU8oH.js";import"./cross-sKht6Kec.js";import"./svgIconContainer-CDJ2X3CN.js";import"./useBaseUiId-DVwPqKHc.js";import"./InternalBackdrop-BI_MJr4_.js";import"./composite-UnbXp0a2.js";import"./index-BVCWAs35.js";import"./index-CHR8y95E.js";import"./index-CANSaJTu.js";import"./useEventCallback-CwXh44fh.js";import"./SkeletonBar-iK4bBXD5.js";import"./LoadingCell-B-gsgGd4.js";import"./ColumnConfigDialog-2_efwR7t.js";import"./DraggableList-BfQihvC2.js";import"./search-Dy8Cjq17.js";import"./Input-WD0q61A7.js";import"./useControlled-CpfYcIbT.js";import"./Button-EZBekNYG.js";import"./small-cross-CqhWne9-.js";import"./ActionButton-DfZ4bMP2.js";import"./Checkbox-D7sg0_ag.js";import"./useValueChanged-DAMkXmw8.js";import"./CollapsiblePanel-DcdCTuB_.js";import"./MultiColumnSortDialog-D01rTg2B.js";import"./MenuTrigger-ejaNiXN3.js";import"./CompositeItem-nLfGi46c.js";import"./ToolbarRootContext-U5RtpmpZ.js";import"./getDisabledMountTransitionStyles-BbQWw9EP.js";import"./getPseudoElementBounds-BDf86miM.js";import"./chevron-down-Bkejrg-1.js";import"./index-DyutDDDZ.js";import"./error-ByI-eSLJ.js";import"./BaseCbacBanner-QUKWe09r.js";import"./makeExternalStore-B8YeuVYn.js";import"./Tooltip-B1Fhyptq.js";import"./PopoverPopup-CtLtSFsG.js";import"./debounce-C9YzblTl.js";import"./tick-DqlQ5rnC.js";import"./DropdownField-NUB4RBhJ.js";import"./isEqual-B9PMZa9f.js";import"./withOsdkMetrics-BCNSh7gL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
