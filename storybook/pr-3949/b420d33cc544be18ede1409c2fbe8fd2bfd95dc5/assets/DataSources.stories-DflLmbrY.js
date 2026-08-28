import{j as r}from"./iframe-VpGhx-PD.js";import{O as b}from"./object-table-DtjGPoWI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CCS0-dTD.js";import{u as g}from"./useOsdkClient-uiJUUrNk.js";import"./preload-helper-D0pvWWR7.js";import"./Table-CU9oVga6.js";import"./index-LQdXBZRW.js";import"./Dialog-nYyvgKL6.js";import"./cross-MJ5oEJZb.js";import"./svgIconContainer-Y-YHGSaq.js";import"./useBaseUiId-BlzsEQEx.js";import"./InternalBackdrop-D0H6ieal.js";import"./composite-BCiYB9bI.js";import"./index-DjNDFA8y.js";import"./index-CrALdyEf.js";import"./index-BRt_pviF.js";import"./useEventCallback-Cwtfp8Vj.js";import"./SkeletonBar-C0UAbzOh.js";import"./LoadingCell-Bl504SLX.js";import"./ColumnConfigDialog-BvfmhfdQ.js";import"./DraggableList-DJXpCMPM.js";import"./search-CJ0NEjvE.js";import"./Input-wrleGgmB.js";import"./useControlled-DladVhMY.js";import"./Button-CWji_dY_.js";import"./small-cross-DvVUPBrn.js";import"./ActionButton-CDHs2jv5.js";import"./Checkbox-D6QYz9ye.js";import"./useValueChanged-DRiZRE6q.js";import"./CollapsiblePanel-CLdlKCxT.js";import"./MultiColumnSortDialog-DrdLet6l.js";import"./MenuTrigger-DhjGzQy0.js";import"./CompositeItem-30_Ebn6h.js";import"./ToolbarRootContext-KZFvKfVC.js";import"./getDisabledMountTransitionStyles-Bq_uSDtW.js";import"./getPseudoElementBounds-Cjq7O4KT.js";import"./chevron-down-Cq5P_lFy.js";import"./index-DjF-cwug.js";import"./error-CQRU8cCe.js";import"./BaseCbacBanner-qxye8Lsm.js";import"./makeExternalStore-GDtn0QFv.js";import"./Tooltip-BggaXucL.js";import"./PopoverPopup-CupUKI_F.js";import"./debounce-CDUQzIGp.js";import"./tick-DQnVpV1f.js";import"./DropdownField-B1Pz7wqj.js";import"./isEqual-DCl6ekOf.js";import"./withOsdkMetrics-nBBrWVXt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
