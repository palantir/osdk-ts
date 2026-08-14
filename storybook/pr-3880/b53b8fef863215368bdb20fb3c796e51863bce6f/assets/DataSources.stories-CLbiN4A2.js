import{j as r}from"./iframe-C9HB86if.js";import{O as b}from"./object-table-B_EnMZcp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DR4YCFsW.js";import{u as g}from"./useOsdkClient-CsEpS7UN.js";import"./preload-helper-rFANKmdh.js";import"./Table-OMFRcBcg.js";import"./index-CVyRPfKn.js";import"./Dialog-CQDZ3eii.js";import"./cross-D03jwveB.js";import"./svgIconContainer-DWuV-Vpk.js";import"./useBaseUiId-ClGI3kD_.js";import"./InternalBackdrop-B2dPExX-.js";import"./composite-C64kubUR.js";import"./index-C_aN6gDN.js";import"./index-BZ_jxMnq.js";import"./index-CqBAKLWt.js";import"./useEventCallback-CkepUuPK.js";import"./SkeletonBar-CqZT9-l8.js";import"./LoadingCell-B4lZKo_2.js";import"./ColumnConfigDialog-BYmyLXkG.js";import"./DraggableList-BEXEnYy_.js";import"./search-DZMUxcm3.js";import"./Input-AYOPk6Tg.js";import"./useControlled-EwxAbnnM.js";import"./Button-Dy6rgqj6.js";import"./small-cross-CZzvuKLa.js";import"./ActionButton-C7Xr1Qbw.js";import"./Checkbox-CSFKbNXt.js";import"./useValueChanged-DaTrWp7s.js";import"./CollapsiblePanel-DhCOByhw.js";import"./MultiColumnSortDialog-9sr6IMbJ.js";import"./MenuTrigger-NlbBKfKD.js";import"./CompositeItem-CsJuLa-c.js";import"./ToolbarRootContext-DXQuQHMp.js";import"./getDisabledMountTransitionStyles-BvcOX-OE.js";import"./getPseudoElementBounds-DBEOMWTp.js";import"./chevron-down-DIEjexWB.js";import"./index-CuMVRYrp.js";import"./error-44gbpeNf.js";import"./BaseCbacBanner-DJQheQBW.js";import"./makeExternalStore-eol4uEvM.js";import"./Tooltip-Do-q59d8.js";import"./PopoverPopup-Dqa-NJJk.js";import"./debounce-BhNEbBP_.js";import"./tick-DJz5yCf-.js";import"./DropdownField-rFDf7Nf9.js";import"./isEqual-CuL2lqiL.js";import"./withOsdkMetrics-BhEmmhw8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
