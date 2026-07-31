import{j as r}from"./iframe-k4q2yqwB.js";import{O as b}from"./object-table-xGpMlGKU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CgqdxBgR.js";import{u as g}from"./useOsdkClient-M5DD-G7T.js";import"./preload-helper-CcFy7ru6.js";import"./Table-03CJ2Lmf.js";import"./index-BoJiE0EV.js";import"./Dialog-CzrEPziC.js";import"./cross-BSjrA-hj.js";import"./svgIconContainer-G2Q9WiIr.js";import"./useBaseUiId-C7Hv9Tzg.js";import"./InternalBackdrop-Bedpf4wz.js";import"./composite-Bm-k795N.js";import"./index-fgdVt0KH.js";import"./index-Dm0Rhw7E.js";import"./index-DTDof-5f.js";import"./useEventCallback-C4okygGr.js";import"./SkeletonBar-BVq-S6Xh.js";import"./LoadingCell-DxCMomGt.js";import"./ColumnConfigDialog-DcArbVLT.js";import"./DraggableList-B1tKyGQF.js";import"./search-29u5dNu1.js";import"./Input-D1rCohyt.js";import"./useControlled-BecCn6K2.js";import"./isEqual-D3vlfOdi.js";import"./isObject-DxbMLdSm.js";import"./Button-CnDoyZ08.js";import"./ActionButton-DgpuixvG.js";import"./Checkbox-CBj1kWmC.js";import"./useValueChanged-D9uwznF8.js";import"./CollapsiblePanel-ast8KaP2.js";import"./MultiColumnSortDialog-CnVLAtFv.js";import"./MenuTrigger-B_BymQfJ.js";import"./CompositeItem-ChG7XBVE.js";import"./ToolbarRootContext-B_DA6t17.js";import"./getDisabledMountTransitionStyles-C0VioAFY.js";import"./getPseudoElementBounds-CZTlLMfI.js";import"./chevron-down-pLPxEt1n.js";import"./index-C9wyccr-.js";import"./error-ClYvRrnM.js";import"./BaseCbacBanner-CUkl0cUl.js";import"./makeExternalStore-Ck9Fwx-s.js";import"./Tooltip-DPsMBPb2.js";import"./PopoverPopup-CJmDmZQd.js";import"./toNumber-BzJ6VRWW.js";import"./tick-khb2_2lM.js";import"./DropdownField-DDquJplV.js";import"./withOsdkMetrics-qyQgOFT1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
