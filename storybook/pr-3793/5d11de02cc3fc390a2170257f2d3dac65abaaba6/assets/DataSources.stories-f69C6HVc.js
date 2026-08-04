import{j as r}from"./iframe-DJYB1qk1.js";import{O as b}from"./object-table-CnQonoY8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DQW_yraf.js";import{u as g}from"./useOsdkClient-BLf8vx4g.js";import"./preload-helper-DtuV8K9F.js";import"./Table-B90HPOGg.js";import"./index-DonW1mkl.js";import"./Dialog-DPxIre9H.js";import"./cross-Bpub1NfR.js";import"./svgIconContainer-BbsWyzEj.js";import"./useBaseUiId-DL-SGNBR.js";import"./InternalBackdrop-eBfWZ-MD.js";import"./composite-CC6F0Qsz.js";import"./index-D8Ycj_o4.js";import"./index-Ca9Z72uB.js";import"./index-CvaTYoMt.js";import"./useEventCallback-uzRZFC7Y.js";import"./SkeletonBar-BLD3bcxm.js";import"./LoadingCell-Dgc9EthY.js";import"./ColumnConfigDialog-DeLr0uma.js";import"./DraggableList-MrlrcOkU.js";import"./search-5CkafOxN.js";import"./Input-1LkIvDzf.js";import"./useControlled-oyOM-Xp0.js";import"./isEqual-CewC2dRg.js";import"./isObject-CljKLLYD.js";import"./Button-Duzr31W4.js";import"./ActionButton-4WynwJXW.js";import"./Checkbox-D-pUxlIv.js";import"./useValueChanged-DbwZIZqR.js";import"./CollapsiblePanel-CKCvm0v6.js";import"./MultiColumnSortDialog-DJ_irqfG.js";import"./MenuTrigger-HGLe02pf.js";import"./CompositeItem-CUawBViA.js";import"./ToolbarRootContext-CV2B82ef.js";import"./getDisabledMountTransitionStyles-bi6UcqkV.js";import"./getPseudoElementBounds-qT7EHfZ1.js";import"./chevron-down-BBFBeDj_.js";import"./index-C2FWrg77.js";import"./error-BpmsLSMo.js";import"./BaseCbacBanner-B5alV3yj.js";import"./makeExternalStore-CkRVjc78.js";import"./Tooltip-CPTKLQ5G.js";import"./PopoverPopup-CyeyM8PS.js";import"./toNumber-CNd-iZ3r.js";import"./tick-BQV3GL8y.js";import"./DropdownField-CLncidES.js";import"./withOsdkMetrics-B_Dkj_nQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
