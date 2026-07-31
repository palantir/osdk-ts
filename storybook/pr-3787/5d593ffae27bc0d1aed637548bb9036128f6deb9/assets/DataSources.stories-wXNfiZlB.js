import{j as r}from"./iframe-CyZmVsjD.js";import{O as b}from"./object-table-jL-n7eeX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ctad-9dj.js";import{u as g}from"./useOsdkClient-FUHSAEzr.js";import"./preload-helper-HEYW5JNb.js";import"./Table-DfagIk6G.js";import"./index-BIsnimhh.js";import"./Dialog-HpVT0VIv.js";import"./cross-B2-IrGzR.js";import"./svgIconContainer-AUYrzoLK.js";import"./useBaseUiId-DxM_zxss.js";import"./InternalBackdrop-DhyG9QFu.js";import"./composite-XxoSgZbC.js";import"./index-HhNb9coI.js";import"./index-C7Hi_lc2.js";import"./index-Sw4bTcvu.js";import"./useEventCallback-b_6dFGXK.js";import"./SkeletonBar-DKpYK4KN.js";import"./LoadingCell-BtBEdwDY.js";import"./ColumnConfigDialog-CGU-JzLG.js";import"./DraggableList-WEERLRo1.js";import"./search-DjWlgkJN.js";import"./Input-Bl-GgjYI.js";import"./useControlled-xZiD0Urq.js";import"./isEqual-CcM99a7_.js";import"./isObject-N9CWWS8h.js";import"./Button-CSdeTDcp.js";import"./ActionButton-BWSG5Z25.js";import"./Checkbox-BA7muG6e.js";import"./useValueChanged-Dgwb1EH_.js";import"./CollapsiblePanel-CZznUpZ4.js";import"./MultiColumnSortDialog-BIGTB8I8.js";import"./MenuTrigger-AFm_kpRM.js";import"./CompositeItem-XqkpCBrT.js";import"./ToolbarRootContext-D0SMDc5d.js";import"./getDisabledMountTransitionStyles-BBpOe4Qf.js";import"./getPseudoElementBounds-CvJIFZOP.js";import"./chevron-down-P34Asnf7.js";import"./index-DCxG3zDk.js";import"./error-Dc4Tyqrk.js";import"./BaseCbacBanner-C5QoRx_z.js";import"./makeExternalStore-CDO6Oc7I.js";import"./Tooltip-LRCBEIFM.js";import"./PopoverPopup-JLBpa_xN.js";import"./toNumber-Ch2f3zT9.js";import"./tick-BAJcGr9t.js";import"./DropdownField-Pg9Ecdmk.js";import"./withOsdkMetrics-CKttVeW1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
