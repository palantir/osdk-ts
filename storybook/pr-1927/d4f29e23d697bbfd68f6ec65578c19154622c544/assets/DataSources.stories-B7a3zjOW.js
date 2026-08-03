import{j as r}from"./iframe-CA9r65OT.js";import{O as b}from"./object-table-B8U5n0B0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B4gHZgPD.js";import{u as g}from"./useOsdkClient-BD7qovSJ.js";import"./preload-helper-tCbzRVEA.js";import"./Table-DAotaee0.js";import"./index-3l5n5zjF.js";import"./Dialog-dxbEVI1S.js";import"./cross-BIMMbybY.js";import"./svgIconContainer-CoGSYZNF.js";import"./useBaseUiId-BMe3a5v7.js";import"./InternalBackdrop-B4C5I1Ho.js";import"./composite-DIPm2o_P.js";import"./index-DHaBnaKt.js";import"./index-CllE9Qij.js";import"./index-D3FVanjb.js";import"./useEventCallback-DPVdHCWX.js";import"./SkeletonBar-D7_R5qne.js";import"./LoadingCell-C7J2dC-w.js";import"./ColumnConfigDialog-CDDpuOLV.js";import"./DraggableList-zXzt7i12.js";import"./search-eEATc8rI.js";import"./Input-Bb9nnqm9.js";import"./useControlled-sJGz_czO.js";import"./isEqual-DGMepfsm.js";import"./isObject-oVKSF72a.js";import"./Button-sRGu_cmJ.js";import"./ActionButton-DE8ds1n2.js";import"./Checkbox-C84oN_DZ.js";import"./useValueChanged-x5vBhK6F.js";import"./CollapsiblePanel-BChWOjny.js";import"./MultiColumnSortDialog-CjR0tA4p.js";import"./MenuTrigger-aTtvxf_3.js";import"./CompositeItem-TexNzlTU.js";import"./ToolbarRootContext-g-i8chAa.js";import"./getDisabledMountTransitionStyles-CBaC_3nC.js";import"./getPseudoElementBounds--2ZRF7Zv.js";import"./chevron-down-DgvdmvON.js";import"./index-CDue3-ep.js";import"./error-DnvhBUUT.js";import"./BaseCbacBanner-DK_I6jXP.js";import"./makeExternalStore-DVNiFfiz.js";import"./Tooltip-BYu8SX18.js";import"./PopoverPopup-1bgkwxU4.js";import"./toNumber-DuxtyrCo.js";import"./tick-Ckzjqq_z.js";import"./DropdownField-B_MVsZV9.js";import"./withOsdkMetrics-MvKispNs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
