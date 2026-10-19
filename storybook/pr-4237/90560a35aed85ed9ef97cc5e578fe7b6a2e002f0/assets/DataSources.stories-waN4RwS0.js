import{j as r}from"./iframe-Dcbb45TM.js";import{O as b}from"./object-table-uIGz-EJp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CaFlHmUS.js";import{u as g}from"./useOsdkClient-vBOR5iVQ.js";import"./preload-helper-D8JM7gnw.js";import"./Table-BodGg9CV.js";import"./index-BP3mGvIi.js";import"./Dialog-D1W6oFiH.js";import"./cross-CFg2OY8m.js";import"./svgIconContainer-C653aYE0.js";import"./useBaseUiId-KvLNO8W4.js";import"./InternalBackdrop-b2U-fCTd.js";import"./composite-BIYviI6v.js";import"./index-LAjudTQg.js";import"./index-DPou_tLy.js";import"./index-DmcmRKU2.js";import"./useEventCallback-BI6RwFXd.js";import"./SkeletonBar-CBr_GrBQ.js";import"./LoadingCell-GOMssFxh.js";import"./ColumnConfigDialog-CztQHvcW.js";import"./DraggableList-CHMQl458.js";import"./search-8-lHNRta.js";import"./Input-DKG4JtdJ.js";import"./useControlled-Da1fb4mu.js";import"./Button-Bfb_bO0G.js";import"./small-cross-D2acqba7.js";import"./ActionButton-CriApq5G.js";import"./Checkbox-BXPSe9vd.js";import"./useValueChanged-Bf4o6EbE.js";import"./CollapsiblePanel-C7bD2Jvr.js";import"./MultiColumnSortDialog-DMQi2CRy.js";import"./MenuTrigger-BObXRj7Q.js";import"./CompositeItem-1Mp7uRya.js";import"./ToolbarRootContext-CgWzIiHM.js";import"./getDisabledMountTransitionStyles-XJIzxiBK.js";import"./getPseudoElementBounds-BbdSIzYb.js";import"./chevron-down-B67Z7lxm.js";import"./index-Dqy8Ou-s.js";import"./error-DGuxoAox.js";import"./BaseCbacBanner-CEHVUoYy.js";import"./makeExternalStore-Dm_3NQPJ.js";import"./Tooltip-CJk8wEl0.js";import"./PopoverPopup-0u1lAVs6.js";import"./debounce-CF6oR7xT.js";import"./tick-DrS_4neF.js";import"./DropdownField-DH_fpvNY.js";import"./isEqual-DB8ime84.js";import"./withOsdkMetrics-BnTsjsNt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
