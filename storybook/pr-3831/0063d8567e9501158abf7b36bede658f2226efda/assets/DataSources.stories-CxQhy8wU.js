import{j as r}from"./iframe-Ba2LHmmw.js";import{O as b}from"./object-table-Dy6R_1mS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ba6Quxd5.js";import{u as g}from"./useOsdkClient-ETIs1sC4.js";import"./preload-helper-B7XB0fR8.js";import"./Table-g-0N3kvQ.js";import"./index-Di_rEjs8.js";import"./Dialog-CWlAWs2b.js";import"./cross-D_tW4Z6z.js";import"./svgIconContainer-T_6Rhm5F.js";import"./useBaseUiId-kAp3UjRK.js";import"./InternalBackdrop-EUHVbYsy.js";import"./composite-B5aXaGsd.js";import"./index-C__15Ssw.js";import"./index-DNbaFRaz.js";import"./index-Dfaz-I-s.js";import"./useEventCallback-lTWmfAeE.js";import"./SkeletonBar-EjekG6ih.js";import"./LoadingCell-Cs3S_WvF.js";import"./ColumnConfigDialog-CpjwB5oT.js";import"./DraggableList-Csd8qfYC.js";import"./search-DOVEiH9F.js";import"./Input-DYB11wZY.js";import"./useControlled-b4VWKtNW.js";import"./isEqual-Y296ziUA.js";import"./isObject-Bj8AkAg1.js";import"./Button-dXiY3Oih.js";import"./ActionButton-DBptDCp_.js";import"./Checkbox-DtB6bbQd.js";import"./useValueChanged-Bn3N2blk.js";import"./CollapsiblePanel-BZobfyJI.js";import"./MultiColumnSortDialog-Dhayd-uQ.js";import"./MenuTrigger-Dg0FM3v0.js";import"./CompositeItem-BkDvpDV-.js";import"./ToolbarRootContext-DksAfQmT.js";import"./getDisabledMountTransitionStyles-CdNG9aue.js";import"./getPseudoElementBounds-C3XJtjLS.js";import"./chevron-down-rpKQMPMV.js";import"./index--EllkZMo.js";import"./error-CAnhijT4.js";import"./BaseCbacBanner-CAmnOXyH.js";import"./makeExternalStore-vStluxin.js";import"./Tooltip-BW4XIqzG.js";import"./PopoverPopup-RHQG_Rg9.js";import"./toNumber-BRENFX6q.js";import"./tick-jGM_0Tj2.js";import"./DropdownField-G9ReHW4y.js";import"./withOsdkMetrics-DqTbcU1C.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
