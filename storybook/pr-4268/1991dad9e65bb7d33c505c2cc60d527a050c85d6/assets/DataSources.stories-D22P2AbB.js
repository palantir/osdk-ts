import{j as r}from"./iframe-BaflQOGd.js";import{O as b}from"./object-table-rBYFG3dL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DEdTQpMR.js";import{u as g}from"./useOsdkClient-BRi0iGfs.js";import"./preload-helper-p4HJijQg.js";import"./Table-BZhq6jNP.js";import"./index-Cdh_dFWj.js";import"./Dialog-sEWbFpCS.js";import"./cross-BGrOCP65.js";import"./svgIconContainer-C8p2nfID.js";import"./useBaseUiId-pk7UMSg-.js";import"./InternalBackdrop-BXpufEJp.js";import"./composite-Bz466JDP.js";import"./index-BbhGUNVZ.js";import"./index-8FM1YS3J.js";import"./index-gtiiyw16.js";import"./useEventCallback-CKswwic-.js";import"./SkeletonBar-p10R1lcv.js";import"./LoadingCell-CH2uP32b.js";import"./ColumnConfigDialog-DFdfDYob.js";import"./DraggableList-BBK4Chui.js";import"./search-BBcvVFuT.js";import"./Input-C7CjAQyY.js";import"./useControlled-BHd0pcmo.js";import"./Button-Bdo2X4x8.js";import"./small-cross-CskAyC0y.js";import"./ActionButton-DIqkcEFC.js";import"./Checkbox-Sizrw6ib.js";import"./useValueChanged-BkzyuB8t.js";import"./CollapsiblePanel-BDr9gif1.js";import"./MultiColumnSortDialog-CmnGKHoe.js";import"./MenuTrigger-CEe5FZ0H.js";import"./CompositeItem-nIPenTO0.js";import"./ToolbarRootContext-CwJdNdBU.js";import"./getDisabledMountTransitionStyles-Zf4kfjLM.js";import"./getPseudoElementBounds-CHW9P6Nq.js";import"./chevron-down-Cnmtw8e6.js";import"./index-DxGtCk42.js";import"./error-DIEj2ztu.js";import"./BaseCbacBanner-BGXh1-EF.js";import"./makeExternalStore-C2juSaVb.js";import"./Tooltip-BRluqZVE.js";import"./PopoverPopup-wC024HyS.js";import"./debounce-Bxc3LUXI.js";import"./tick-DGqr-KEb.js";import"./DropdownField-BKcx8XSW.js";import"./isEqual-CHlDy3oh.js";import"./withOsdkMetrics-CP1M_ZfY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
