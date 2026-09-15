import{j as r}from"./iframe-Y5vGGcvP.js";import{O as b}from"./object-table-Blzm30lw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BtBEKKSh.js";import{u as g}from"./useOsdkClient-s9zf-Ja3.js";import"./preload-helper-BDwImvib.js";import"./Table-BvILrCt9.js";import"./index-BTH20MTv.js";import"./Dialog-DmPDYfFl.js";import"./cross-C6XfWSCb.js";import"./svgIconContainer-BIHKAVWB.js";import"./useBaseUiId-RL85XbnS.js";import"./InternalBackdrop-3iFgptId.js";import"./composite-DfEzUBGr.js";import"./index-BF11wRFE.js";import"./index-BqEmZbFH.js";import"./index-Dieu7sw2.js";import"./useEventCallback-BrJrk-oU.js";import"./SkeletonBar-B2IEnFw2.js";import"./LoadingCell-Dwh9mj4m.js";import"./ColumnConfigDialog-CAwjWoDJ.js";import"./DraggableList-CayGgjyU.js";import"./search-DfUtBVkM.js";import"./Input-Dw8vFEHs.js";import"./useControlled-jE3VG63K.js";import"./Button--cxRM2vq.js";import"./small-cross-CVI-wDtt.js";import"./ActionButton-D3iVYvw7.js";import"./Checkbox-DKAF5YFj.js";import"./useValueChanged-Ds6t04CB.js";import"./CollapsiblePanel-BSjexsrO.js";import"./MultiColumnSortDialog-hwh-vYqB.js";import"./MenuTrigger-BmbiLkn9.js";import"./CompositeItem-1PZRLRt5.js";import"./ToolbarRootContext-BC-Ed_Oq.js";import"./getDisabledMountTransitionStyles-DCTtkVay.js";import"./getPseudoElementBounds-BFGt4T59.js";import"./chevron-down-mTWE-r4G.js";import"./index-CNA7S_DK.js";import"./error-DU3E2pjz.js";import"./BaseCbacBanner-n-Zbrh0L.js";import"./makeExternalStore-CH64p8Fa.js";import"./Tooltip-eBcGmQzJ.js";import"./PopoverPopup-DqmMzuaX.js";import"./debounce-DOiQ_IlB.js";import"./tick-B3ZeEauG.js";import"./DropdownField-BYVuO4wd.js";import"./isEqual-Cqi6FdsA.js";import"./withOsdkMetrics-CAQdN2b1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
