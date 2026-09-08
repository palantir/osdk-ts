import{j as r}from"./iframe-Bl9Agv3T.js";import{O as b}from"./object-table-BG0To-J4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-yTkLlH.js";import{u as g}from"./useOsdkClient-KsFQc-mA.js";import"./preload-helper-C2Q81Ac3.js";import"./Table-BlXfDqyU.js";import"./index-DsMKsdV8.js";import"./Dialog-DZ9rfxK8.js";import"./cross-DNHfVbpu.js";import"./svgIconContainer-CYsYLgfA.js";import"./useBaseUiId-CxMJijpy.js";import"./InternalBackdrop-C4VzyeDT.js";import"./composite-BXwJLY2p.js";import"./index-Bqfpj0Ej.js";import"./index-DTOWBSwW.js";import"./index-D-bhGtGz.js";import"./useEventCallback-dyRpDIhK.js";import"./SkeletonBar-KfT1mCrA.js";import"./LoadingCell-CbXaSrBE.js";import"./ColumnConfigDialog-BlCGNGQ_.js";import"./DraggableList-CM5Y7MVj.js";import"./search-BMgb5_aJ.js";import"./Input-BPwTrKsb.js";import"./useControlled-BFzsGkd0.js";import"./Button-C9n-JPHB.js";import"./small-cross-DDl_mPr6.js";import"./ActionButton-sQxxk7Mn.js";import"./Checkbox-CZOAd3AB.js";import"./useValueChanged-Z7Be-pzQ.js";import"./CollapsiblePanel-B4rX7D3r.js";import"./MultiColumnSortDialog-D9YNntfk.js";import"./MenuTrigger-H_h16LiM.js";import"./CompositeItem-D_lixxrU.js";import"./ToolbarRootContext-DtF-FbA5.js";import"./getDisabledMountTransitionStyles-CmUtvBkr.js";import"./getPseudoElementBounds-BLuA6Yh1.js";import"./chevron-down-BpdWjY1P.js";import"./index-CzVK5CEn.js";import"./error-BNDEYQ-r.js";import"./BaseCbacBanner-BmN75nkV.js";import"./makeExternalStore-D9cq61Qp.js";import"./Tooltip-CfmWYMwT.js";import"./PopoverPopup-BlQUb6MZ.js";import"./debounce-B0RIZne8.js";import"./tick-BQpeZs08.js";import"./DropdownField-BaZrA__h.js";import"./isEqual-CQ-BNQDU.js";import"./withOsdkMetrics-Bn6nYcc2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
