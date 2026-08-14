import{j as r}from"./iframe-CRVmTQY5.js";import{O as b}from"./object-table-C-CPNALr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-gixSqALb.js";import{u as g}from"./useOsdkClient-ClCBM1r0.js";import"./preload-helper-COtteTaQ.js";import"./Table-DOs4kb3e.js";import"./index-Dw_-9fsS.js";import"./Dialog-AGuJ7asO.js";import"./cross-BTxRvC3_.js";import"./svgIconContainer-dBFN_To1.js";import"./useBaseUiId-D67cR8AP.js";import"./InternalBackdrop-CFo60NBG.js";import"./composite-BzmHlTbJ.js";import"./index-CQe3SKlh.js";import"./index-ASaPE2Ya.js";import"./index-BCE70X_-.js";import"./useEventCallback-DCb6bcgR.js";import"./SkeletonBar-BtVEI4Pu.js";import"./LoadingCell-be2SCVst.js";import"./ColumnConfigDialog-DiilIE8B.js";import"./DraggableList-fDNclTmJ.js";import"./search-DNHDuEbV.js";import"./Input-H1MlkSJg.js";import"./useControlled-BqiQYi-d.js";import"./Button-W6OP53wY.js";import"./small-cross-CHuR5Heg.js";import"./ActionButton-yYXJfxZv.js";import"./Checkbox-D7Fc3wdH.js";import"./useValueChanged-CvCQSXar.js";import"./CollapsiblePanel-BaG84gug.js";import"./MultiColumnSortDialog-CSyVQdsn.js";import"./MenuTrigger-C-FcvPeh.js";import"./CompositeItem-U_R9UZKK.js";import"./ToolbarRootContext-DwYXvC-Y.js";import"./getDisabledMountTransitionStyles-Bvrk1gjH.js";import"./getPseudoElementBounds-BT0xqbyg.js";import"./chevron-down-CNBvsY8h.js";import"./index-DlWFsW2l.js";import"./error-BhsW8xEv.js";import"./BaseCbacBanner-QzBezdS9.js";import"./makeExternalStore-CzFcgJvi.js";import"./Tooltip-C68sT4dG.js";import"./PopoverPopup-FpD1DxdK.js";import"./debounce-ypv0Ae7P.js";import"./tick-DIcVjwb8.js";import"./DropdownField-DyiAO7Yl.js";import"./isEqual-oWzSeSqP.js";import"./withOsdkMetrics-0XIdQxec.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
