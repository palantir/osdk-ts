import{j as r}from"./iframe-BBS1bhxz.js";import{O as b}from"./object-table-CM7ekgEE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DsZu9MCM.js";import{u as g}from"./useOsdkClient-JNX9ytGe.js";import"./preload-helper-DbqFABQK.js";import"./Table-DEUb_dRE.js";import"./index-BwzBBeai.js";import"./Dialog-D2wutk-0.js";import"./cross-CNiIBNRR.js";import"./svgIconContainer-DkabfjQp.js";import"./useBaseUiId-CYB9Dsir.js";import"./InternalBackdrop-CCOzVtc1.js";import"./composite-6tiSR5Xk.js";import"./index-8i8Pb6X4.js";import"./index-KEup_jqV.js";import"./index-CnkYP-F4.js";import"./useEventCallback-B33OkFzu.js";import"./SkeletonBar-BUB4_ue2.js";import"./LoadingCell-ClWqsny_.js";import"./ColumnConfigDialog-DajqHBHt.js";import"./DraggableList-Dzhfo3BO.js";import"./search-DcQmB7Y_.js";import"./Input-xVXK2Roi.js";import"./useControlled-0gW62wDn.js";import"./Button-BB3rVnV9.js";import"./small-cross-Ch3xmnh1.js";import"./ActionButton-DGhxQdJx.js";import"./Checkbox-G67U5DCG.js";import"./useValueChanged-DRgrYEiY.js";import"./CollapsiblePanel-CLoilge1.js";import"./MultiColumnSortDialog-YQlGJpTo.js";import"./MenuTrigger-CSqVk1g8.js";import"./CompositeItem-BGGFMuw6.js";import"./ToolbarRootContext-COBR2HeU.js";import"./getDisabledMountTransitionStyles-C8xFS_dz.js";import"./getPseudoElementBounds-C9THLdDk.js";import"./chevron-down-CHLXsa5V.js";import"./index-DRQ9Ijyk.js";import"./error-D-l7GhZN.js";import"./BaseCbacBanner-D2vA0T6x.js";import"./makeExternalStore-CzAndpId.js";import"./Tooltip-IRK0CKSi.js";import"./PopoverPopup-DRjPHcEC.js";import"./debounce-EWPwneHB.js";import"./tick-WrvbSOaH.js";import"./DropdownField-Br5LnCsz.js";import"./isEqual-BCXdRNL7.js";import"./withOsdkMetrics-BcsPvRcs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
