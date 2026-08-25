import{j as r}from"./iframe-CV9AnRvZ.js";import{O as b}from"./object-table-BR5aerbJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BKP8dXqT.js";import{u as g}from"./useOsdkClient-Balcrs_g.js";import"./preload-helper-7FfFv9ik.js";import"./Table-DPmXaC0p.js";import"./index-Di1ZWUkk.js";import"./Dialog-CKK99e0E.js";import"./cross-DhIejhWj.js";import"./svgIconContainer-CNjSdOBT.js";import"./useBaseUiId-C1_GlfkL.js";import"./InternalBackdrop-COZpaA8l.js";import"./composite-qPADmGy9.js";import"./index-igmFT0OY.js";import"./index-CmKxkFU5.js";import"./index-C2F-6H3e.js";import"./useEventCallback-Bna_B7Jk.js";import"./SkeletonBar-CY_yprKK.js";import"./LoadingCell-C0a-a0Kd.js";import"./ColumnConfigDialog-Cx50unOT.js";import"./DraggableList-BWZfvIec.js";import"./search-DNk3MK5-.js";import"./Input-dv3PsiKp.js";import"./useControlled-D-7JcRiN.js";import"./Button-DxiXB_zs.js";import"./small-cross-DErCO5W1.js";import"./ActionButton-C0FEiRhP.js";import"./Checkbox-DYoZLqBR.js";import"./useValueChanged-m-oZ9Q-6.js";import"./CollapsiblePanel-CkzmNhCo.js";import"./MultiColumnSortDialog-BO3I_Guk.js";import"./MenuTrigger-B0_EOu_h.js";import"./CompositeItem-Bf5YN-0d.js";import"./ToolbarRootContext-BhRNTtAp.js";import"./getDisabledMountTransitionStyles-uluusgZc.js";import"./getPseudoElementBounds-CKcwYVgn.js";import"./chevron-down-DqetHEHw.js";import"./index-B4-YpXrf.js";import"./error-BkY5gQM6.js";import"./BaseCbacBanner-C58alHRF.js";import"./makeExternalStore-DGTggbnP.js";import"./Tooltip-Ba2b5c4L.js";import"./PopoverPopup-Dbah9SzS.js";import"./debounce-DQFz88Lj.js";import"./tick-DkCBUQtK.js";import"./DropdownField-CnQNM4ni.js";import"./isEqual-DFiSRrhR.js";import"./withOsdkMetrics-zIgNwk4v.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
