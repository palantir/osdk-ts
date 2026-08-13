import{j as r}from"./iframe-KbQIFRGa.js";import{O as b}from"./object-table-A-4UVlPs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DOxmryIC.js";import{u as g}from"./useOsdkClient-C5xzc4Kj.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DjBvGnlI.js";import"./index-oNQDT3pN.js";import"./Dialog-LTN4yp4-.js";import"./cross-DoOTv_Kw.js";import"./svgIconContainer-sykDQB1x.js";import"./useBaseUiId-C5Z8PN8H.js";import"./InternalBackdrop-hXLK1iL5.js";import"./composite-GGTk9X_4.js";import"./index-D106GrLT.js";import"./index-bW-kSRQs.js";import"./index-dFSZLdFi.js";import"./useEventCallback-n0URW7JS.js";import"./SkeletonBar-I3jGGBun.js";import"./LoadingCell-DC9Ucowt.js";import"./ColumnConfigDialog-C4HjDGjr.js";import"./DraggableList-DiR0P00x.js";import"./search-CWIUc-iX.js";import"./Input-DCRhBd7X.js";import"./useControlled-IL1laNWB.js";import"./Button-DJ-kvAuB.js";import"./small-cross-Bxoh5HWy.js";import"./ActionButton-DtiTD6NE.js";import"./Checkbox-D6Lt66gL.js";import"./useValueChanged-BsapA-Fb.js";import"./CollapsiblePanel-DrC-9h6Q.js";import"./MultiColumnSortDialog-MXCrgjw4.js";import"./MenuTrigger-02eyTE7O.js";import"./CompositeItem-Du9x_QN-.js";import"./ToolbarRootContext-DVI-t-Yd.js";import"./getDisabledMountTransitionStyles-B2mb34X0.js";import"./getPseudoElementBounds-C0gXzrnf.js";import"./chevron-down-sNT3G-Lr.js";import"./index-BwbXqol-.js";import"./error-BfNvRC5H.js";import"./BaseCbacBanner-C1tqFwkR.js";import"./makeExternalStore-CkNn2ki8.js";import"./Tooltip-BFeQnd1L.js";import"./PopoverPopup-yB1fiotD.js";import"./debounce-W5fS1vR_.js";import"./tick-CchspkVg.js";import"./DropdownField-BLXTmoIg.js";import"./isEqual-CpUPP3_F.js";import"./withOsdkMetrics-CE7F9eew.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
