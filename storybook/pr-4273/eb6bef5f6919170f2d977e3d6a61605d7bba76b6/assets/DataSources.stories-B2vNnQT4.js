import{j as r}from"./iframe-BECIlG-5.js";import{O as b}from"./object-table-Cn80KhAU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DY4pjlAM.js";import{u as g}from"./useOsdkClient-D-IWW227.js";import"./preload-helper-Cv0NrjSm.js";import"./Table-DCEgNBAH.js";import"./index-0SVtXK84.js";import"./Dialog-tJiLD3AL.js";import"./cross-ubVpY3r4.js";import"./svgIconContainer-B-mztRGa.js";import"./useBaseUiId-BynaZof5.js";import"./InternalBackdrop-BZhDjVB7.js";import"./composite-Bb9FNHOi.js";import"./index-CXVpCKKQ.js";import"./index-sIW5LEP1.js";import"./index-smJV3T31.js";import"./useEventCallback-BfSwElrQ.js";import"./SkeletonBar-iQAgIX6_.js";import"./LoadingCell-N0o8dApa.js";import"./ColumnConfigDialog-Y-qZNvwI.js";import"./DraggableList-Cpu3iQ2P.js";import"./search-CxKdELes.js";import"./Input-Bv6R3iZB.js";import"./useControlled-DwAysQOe.js";import"./Button-cPt_jdAf.js";import"./small-cross-DOrp5uSW.js";import"./ActionButton-BElBMuAb.js";import"./Checkbox-C54U06wB.js";import"./useValueChanged-DzzM5aJt.js";import"./CollapsiblePanel-eLA5oT-Y.js";import"./MultiColumnSortDialog-DPkNj1JI.js";import"./MenuTrigger-Cie77Q8I.js";import"./CompositeItem-Dl8QDSWw.js";import"./ToolbarRootContext-4ge2fwUs.js";import"./getDisabledMountTransitionStyles-BHt47q_U.js";import"./getPseudoElementBounds-CXr87JiK.js";import"./chevron-down-B_ghTOEG.js";import"./index-BtesBorZ.js";import"./error-W3FJWM_l.js";import"./BaseCbacBanner-LAOQ_TmD.js";import"./makeExternalStore-c840Nimt.js";import"./Tooltip-RYGXYlOF.js";import"./PopoverPopup-C9IPhO-b.js";import"./debounce-CE7uEcJP.js";import"./tick-lltI7QIF.js";import"./DropdownField-BFCCzcrd.js";import"./isEqual-Dzk0LpTo.js";import"./withOsdkMetrics-DjCRSE02.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
