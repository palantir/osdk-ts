import{j as r}from"./iframe-B7MJ_I4S.js";import{O as b}from"./object-table-DEsqGytw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DWqipNj2.js";import{u as g}from"./useOsdkClient-BqlAWOQt.js";import"./preload-helper-Cov2K-k_.js";import"./Table-PbcymcR5.js";import"./index-C9xfkj2b.js";import"./Dialog-C8e3T8Vj.js";import"./cross-BTDYOKg8.js";import"./svgIconContainer-DK_hyPcz.js";import"./useBaseUiId-DV-TM7_o.js";import"./InternalBackdrop-RHfoBc4O.js";import"./composite-KA45R7op.js";import"./index-CZX5DcZe.js";import"./index-XczBWBXZ.js";import"./index-BQpFGUDq.js";import"./useEventCallback-MU_qS0LW.js";import"./SkeletonBar-AHFXhlYX.js";import"./LoadingCell-FHMd-CkD.js";import"./ColumnConfigDialog-CJs2XIZN.js";import"./DraggableList-BhwhcR2z.js";import"./search-Cf_AT2nS.js";import"./Input-DOi3h0W_.js";import"./useControlled-CXNm2xWR.js";import"./Button-BFw5rIiu.js";import"./small-cross-B-ffW1dD.js";import"./ActionButton-CyF4LZse.js";import"./Checkbox-BTtDSBH6.js";import"./useValueChanged-LN6HBF8u.js";import"./CollapsiblePanel-QOVGqbFt.js";import"./MultiColumnSortDialog-C6rKg7tu.js";import"./MenuTrigger-5xPBbdgO.js";import"./CompositeItem-4qcJnRqN.js";import"./ToolbarRootContext-BhG2wJHB.js";import"./getDisabledMountTransitionStyles-BIpfSkRt.js";import"./getPseudoElementBounds-i52E9W4X.js";import"./chevron-down-CsWhq03e.js";import"./index-DJVv4RIW.js";import"./error-BDRA02ra.js";import"./BaseCbacBanner-CtfAUEFc.js";import"./makeExternalStore-D-74d3Y_.js";import"./Tooltip-Dopd5vwg.js";import"./PopoverPopup-CE7yq2WN.js";import"./debounce-Clf5E167.js";import"./tick-DmPLJZVn.js";import"./DropdownField-C_4-TvJW.js";import"./isEqual-NQ_TKohX.js";import"./withOsdkMetrics-hrRyl2Up.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
