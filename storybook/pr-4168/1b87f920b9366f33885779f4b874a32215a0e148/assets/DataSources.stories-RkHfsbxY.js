import{j as r}from"./iframe-BfqPDKql.js";import{O as b}from"./object-table-DjxNL_6f.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BDxsSj58.js";import{u as g}from"./useOsdkClient-5BRGAn8B.js";import"./preload-helper-CjR-GsqS.js";import"./Table-DY99F2ck.js";import"./index-3BLY6arO.js";import"./Dialog-DefyZ3S9.js";import"./cross-C4uG_0m-.js";import"./svgIconContainer-Bvpn0iJ8.js";import"./useBaseUiId-C-9mkB40.js";import"./InternalBackdrop-DUtosfX7.js";import"./composite-C5EU-6hJ.js";import"./index-CCUvb36V.js";import"./index-CdNizhnG.js";import"./index-BH2TTPUz.js";import"./useEventCallback-G3g3fg30.js";import"./SkeletonBar-B4bFxsHY.js";import"./LoadingCell-CnzaETsA.js";import"./ColumnConfigDialog-RB_j43Yp.js";import"./DraggableList-B3A3MYkb.js";import"./search-DVeWM__c.js";import"./Input-BwQuq_Q1.js";import"./useControlled-1Az1d9DS.js";import"./Button-jRfE62iM.js";import"./small-cross-DljuEPYZ.js";import"./ActionButton-C_6ndFXd.js";import"./Checkbox-CB13yCdv.js";import"./useValueChanged-BQjqUDLK.js";import"./CollapsiblePanel-B2Uq3N6C.js";import"./MultiColumnSortDialog-CAMtj-Rk.js";import"./MenuTrigger-D31LluJF.js";import"./CompositeItem-DBfMuqlH.js";import"./ToolbarRootContext-DxevvPzB.js";import"./getDisabledMountTransitionStyles-CValGxLT.js";import"./getPseudoElementBounds-CVMAeFzS.js";import"./chevron-down-CONoZixg.js";import"./index-Cg3apMKp.js";import"./error-BqCEo41c.js";import"./BaseCbacBanner-CO2Q_1Sj.js";import"./makeExternalStore-D6RKhZ7b.js";import"./Tooltip-D9E02NM2.js";import"./PopoverPopup-DJ-rXVm_.js";import"./debounce-CI_OgJjm.js";import"./tick-C-umiLKj.js";import"./DropdownField--_A00rJM.js";import"./isEqual-Da2lfOp4.js";import"./withOsdkMetrics-B6N8SPwA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
