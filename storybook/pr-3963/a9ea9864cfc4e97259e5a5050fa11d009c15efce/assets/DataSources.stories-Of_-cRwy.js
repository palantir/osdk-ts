import{j as r}from"./iframe-BrJtcpJ-.js";import{O as b}from"./object-table-Ba60e5pC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CRcPkV8B.js";import{u as g}from"./useOsdkClient-dk5-s00y.js";import"./preload-helper-CuoRPrGF.js";import"./Table-fr9x0s6y.js";import"./index-nkhoJcGd.js";import"./Dialog-Co9LnxK1.js";import"./cross-d8c80yU_.js";import"./svgIconContainer-DQxuiyDQ.js";import"./useBaseUiId-DFIfo0ZP.js";import"./InternalBackdrop-BbxmA2T7.js";import"./composite-C-pSriHc.js";import"./index-Dwk1Vkcl.js";import"./index-B5ZK0sbN.js";import"./index-D5JNcTNh.js";import"./useEventCallback-DoXYXLX5.js";import"./SkeletonBar-0Ro5ifVl.js";import"./LoadingCell-DmlDNf3u.js";import"./ColumnConfigDialog-v5___XS0.js";import"./DraggableList-DwFdvBiU.js";import"./search-X8eqGfVO.js";import"./Input-DAryto7C.js";import"./useControlled-Cd1hGYJl.js";import"./Button-DcuDiaTG.js";import"./small-cross-9wqnQkm4.js";import"./ActionButton-BDrruohV.js";import"./Checkbox-H76Gvg_o.js";import"./useValueChanged-C292XOMb.js";import"./CollapsiblePanel-hSjEACXk.js";import"./MultiColumnSortDialog-wsRq_6Fi.js";import"./MenuTrigger-DNY3kAMg.js";import"./CompositeItem-wSMz-Esy.js";import"./ToolbarRootContext-EqViDiBL.js";import"./getDisabledMountTransitionStyles-BjBvYd21.js";import"./getPseudoElementBounds-DUnOVe2o.js";import"./chevron-down-CoN2lN4l.js";import"./index-CfmHUnMx.js";import"./error-DVsSmDYx.js";import"./BaseCbacBanner-B-GEVUFt.js";import"./makeExternalStore-DiNYJVVJ.js";import"./Tooltip-W6ksbOeG.js";import"./PopoverPopup-D-7Tgy13.js";import"./debounce-DAXxoF40.js";import"./tick-B2A_YE_w.js";import"./DropdownField-BIwUeAD-.js";import"./isEqual-AUI3jiRn.js";import"./withOsdkMetrics-DpnTSy7T.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
