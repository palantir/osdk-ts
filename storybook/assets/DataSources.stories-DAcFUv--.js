import{j as r}from"./iframe-A3cFOKcN.js";import{O as b}from"./object-table-D6T5wWQI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-FSZrtU2G.js";import{u as g}from"./useOsdkClient-BpfPkxQE.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CxGinnZh.js";import"./index-BdisvGQs.js";import"./Dialog-IrmETrAM.js";import"./cross-BpCzBhcu.js";import"./svgIconContainer-Cx_x83Vw.js";import"./useBaseUiId-f8SNshup.js";import"./InternalBackdrop-CLQ76qla.js";import"./composite-CO4egJyo.js";import"./index-iwijohJb.js";import"./index-DC_i6GYR.js";import"./index-CwbCFpmW.js";import"./useEventCallback-DcGGf58T.js";import"./SkeletonBar-CFR5RV76.js";import"./LoadingCell-B-isKo1Q.js";import"./ColumnConfigDialog-C_I9U-JL.js";import"./DraggableList-eFQXa4c_.js";import"./search-CjzZlMWT.js";import"./Input-D8Sxy-AW.js";import"./useControlled-lPa7KKsj.js";import"./Button-BioOQfQu.js";import"./small-cross-E1MTPWPe.js";import"./ActionButton-D1a6Sq8f.js";import"./Checkbox-4H9IL8Qq.js";import"./useValueChanged-BSJmwQff.js";import"./CollapsiblePanel-kcqrPygQ.js";import"./MultiColumnSortDialog-D8ycB0c4.js";import"./MenuTrigger-tCW2Oivw.js";import"./CompositeItem-Brp6gpS6.js";import"./ToolbarRootContext-iK84Y3hB.js";import"./getDisabledMountTransitionStyles-CrBoc_TZ.js";import"./getPseudoElementBounds-DaGoMVcW.js";import"./chevron-down-BNVc1UKn.js";import"./index-C28TVULp.js";import"./error-oGpxxWLn.js";import"./BaseCbacBanner-BlxyISp5.js";import"./makeExternalStore-1BwNCmLf.js";import"./Tooltip-CdI3maSw.js";import"./PopoverPopup-DVMbRx4R.js";import"./Select-DHseJ8-J.js";import"./tick-DnihwVHh.js";import"./DropdownField-D-Vqq6xe.js";import"./useDebouncedCallback-BP589r5j.js";import"./isEqual-DQ5slpiQ.js";import"./_baseIsEqual-BLEcImby.js";import"./stableSerialize-Ck0v-oQz.js";import"./withOsdkMetrics-BHdLGHRT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,ge={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const ue=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,ue as __namedExportsOrder,ge as default};
