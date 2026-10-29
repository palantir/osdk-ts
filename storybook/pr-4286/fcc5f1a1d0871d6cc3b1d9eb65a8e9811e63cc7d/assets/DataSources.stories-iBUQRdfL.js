import{j as r}from"./iframe-zGIsJMpT.js";import{O as b}from"./object-table-B1Dbw53n.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8vQ0HJU.js";import{u as g}from"./useOsdkClient-CBICPDeO.js";import"./preload-helper-CC38SpOi.js";import"./Table-DMmh1PI5.js";import"./index-8YhFnXQQ.js";import"./Dialog-BtP0mUqh.js";import"./cross-DktHdIAg.js";import"./svgIconContainer-CP5MNfZh.js";import"./useBaseUiId-ci9SHEVb.js";import"./InternalBackdrop-CEY2WdL1.js";import"./composite-DMfXOji_.js";import"./index-B-FTFFET.js";import"./index-_YOXVANG.js";import"./index-bkG5Vg2p.js";import"./useEventCallback-BN5eCmSs.js";import"./SkeletonBar-DgAc_BEV.js";import"./LoadingCell-ByZjwpJ-.js";import"./ColumnConfigDialog-BEb8bZc1.js";import"./DraggableList-DcPGpTvx.js";import"./search-Dz1VIdGa.js";import"./Input-DUh3JuNM.js";import"./useControlled-BkrEcqk8.js";import"./Button-DgFOPBJa.js";import"./small-cross-BQATEOZM.js";import"./ActionButton-B5uCJtLq.js";import"./Checkbox-C6TjD974.js";import"./useValueChanged-B7A_hdZG.js";import"./CollapsiblePanel-haGA10pC.js";import"./MultiColumnSortDialog-B8zAHeEP.js";import"./MenuTrigger-BjbpFbGw.js";import"./CompositeItem-BoSufc_A.js";import"./ToolbarRootContext-Cb-1rKtx.js";import"./getDisabledMountTransitionStyles-BWzH01Nw.js";import"./getPseudoElementBounds-DuWCXYaK.js";import"./chevron-down-Du5I5wVW.js";import"./index-CF-IYV_p.js";import"./error-o2dkV_Rh.js";import"./BaseCbacBanner-CG6wm0ym.js";import"./makeExternalStore-BEcMJ506.js";import"./Tooltip-YhP-Fwkb.js";import"./PopoverPopup-CJZk_qZX.js";import"./debounce-CuU6v30l.js";import"./tick-C2Jds8i8.js";import"./DropdownField-DuI_YZPs.js";import"./isEqual-BWBJWNbI.js";import"./withOsdkMetrics-CjW6J-ki.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
