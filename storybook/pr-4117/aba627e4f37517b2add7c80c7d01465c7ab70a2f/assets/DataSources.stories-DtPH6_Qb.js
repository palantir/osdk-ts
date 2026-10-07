import{j as r}from"./iframe-CUE_Kfqx.js";import{O as b}from"./object-table-CEWfoiSN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BdeWInFw.js";import{u as g}from"./useOsdkClient-DXgSXyyY.js";import"./preload-helper-AIizN4Br.js";import"./Table-DCufzlWH.js";import"./index-BiahB8So.js";import"./Dialog-CFor3Klq.js";import"./cross-x00S7IUW.js";import"./svgIconContainer-BHr2UOEv.js";import"./useBaseUiId-DGLgADwu.js";import"./InternalBackdrop-DEAHptJe.js";import"./composite-hPB6o8bz.js";import"./index-Kj8T-xKz.js";import"./index-Dn1aYiaH.js";import"./index-A749wJ93.js";import"./useEventCallback-CkwTVSxb.js";import"./SkeletonBar-DhtU-Zrt.js";import"./LoadingCell-C1sz1tT0.js";import"./ColumnConfigDialog-mjBg3i76.js";import"./DraggableList-DkjQWzhC.js";import"./search-CrkbBBP3.js";import"./Input-Bbk2_em_.js";import"./useControlled-DMcW3WuP.js";import"./Button-Dhiaj79W.js";import"./small-cross-Bx0oZmc_.js";import"./ActionButton-efTfNcN1.js";import"./Checkbox-BCL1JxZu.js";import"./useValueChanged-CW7Ml1tR.js";import"./CollapsiblePanel-DdEPVr1s.js";import"./MultiColumnSortDialog-ChYV8-74.js";import"./MenuTrigger-bjQLNAOD.js";import"./CompositeItem-B7RByGkr.js";import"./ToolbarRootContext-_FDeKHlj.js";import"./getDisabledMountTransitionStyles-DiWmDOBV.js";import"./getPseudoElementBounds-DPetyz5J.js";import"./chevron-down-DAAZF-qc.js";import"./index-u0e1YJAK.js";import"./error-CgrtB7s8.js";import"./BaseCbacBanner-D-lhjRrs.js";import"./makeExternalStore-CCErHO8u.js";import"./Tooltip-BWS__Wm3.js";import"./PopoverPopup-Bdv4BgKZ.js";import"./debounce-BqRNJlyF.js";import"./tick-DpDkYcVx.js";import"./DropdownField-DydXRFgV.js";import"./isEqual-C2cRpP-7.js";import"./withOsdkMetrics-Z4Ee0NlE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
