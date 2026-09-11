import{j as r}from"./iframe-BFm_OPcJ.js";import{O as b}from"./object-table-7RsImB24.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-8u1b05.js";import{u as g}from"./useOsdkClient-mRsBldvP.js";import"./preload-helper-D-hWMdww.js";import"./Table-BOaymXKV.js";import"./index-D6OldzKg.js";import"./Dialog-RmDlKm5l.js";import"./cross-DAfVMEHB.js";import"./svgIconContainer-DFBJL56Q.js";import"./useBaseUiId-Bdo2oKJK.js";import"./InternalBackdrop-BDKMpH4Z.js";import"./composite-ClIBPGgl.js";import"./index-D0NN2v4g.js";import"./index-D_unebpF.js";import"./index-CGbcIBw9.js";import"./useEventCallback-Don2-mEM.js";import"./SkeletonBar-CLIzo5Xt.js";import"./LoadingCell-BzlltzKN.js";import"./ColumnConfigDialog-DHiaXc2L.js";import"./DraggableList-ItVAzQSp.js";import"./search-JGyx4lc7.js";import"./Input-EUSvaA_S.js";import"./useControlled-DARaGIjq.js";import"./Button-C_avm1ie.js";import"./small-cross-DHkBCmiu.js";import"./ActionButton-ylSGNg3V.js";import"./Checkbox-LGdzzza0.js";import"./useValueChanged-C7A3m1Bn.js";import"./CollapsiblePanel-kwBiLUkd.js";import"./MultiColumnSortDialog-CGrTzc_p.js";import"./MenuTrigger-e9BU4Lb3.js";import"./CompositeItem-Dv9cYPny.js";import"./ToolbarRootContext-B9b_DGi_.js";import"./getDisabledMountTransitionStyles-BgUKa7Jc.js";import"./getPseudoElementBounds-CneiYeVp.js";import"./chevron-down-DYcOsbsP.js";import"./index-DlKJFgce.js";import"./error-BSGKVmqD.js";import"./BaseCbacBanner-D7_4jx09.js";import"./makeExternalStore-C1VxggOZ.js";import"./Tooltip-BKDnPOlI.js";import"./PopoverPopup-BEMdzx0_.js";import"./debounce-D8DxzbxV.js";import"./tick-zhT1lai6.js";import"./DropdownField-CN6SZeut.js";import"./isEqual-BTYeq4px.js";import"./withOsdkMetrics-1bFznkGS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
