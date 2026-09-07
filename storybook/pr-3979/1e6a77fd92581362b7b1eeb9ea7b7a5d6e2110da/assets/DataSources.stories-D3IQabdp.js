import{j as r}from"./iframe-E5iWaRrU.js";import{O as b}from"./object-table-DYYLM9YB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B6ZompfC.js";import{u as g}from"./useOsdkClient-CYVurRKB.js";import"./preload-helper-Dqk_s4rt.js";import"./Table-SRHZ8Wnm.js";import"./index-C3_SZq7Z.js";import"./Dialog-CPf2pgV9.js";import"./cross-JL-akl7t.js";import"./svgIconContainer-DEuUBUqq.js";import"./useBaseUiId-D4npvdT-.js";import"./InternalBackdrop-DDD6NSDl.js";import"./composite-Bz9wP40Z.js";import"./index-DceoitFi.js";import"./index-BbXCDRNC.js";import"./index-D75HgB7Y.js";import"./useEventCallback-CyXvLOTQ.js";import"./SkeletonBar-YbzI2HU-.js";import"./LoadingCell-CZW3NZst.js";import"./ColumnConfigDialog-C84EhSb0.js";import"./DraggableList-Dzp4AhOv.js";import"./search-ChBTd86p.js";import"./Input-C3CP2H26.js";import"./useControlled-Df4M33J1.js";import"./Button-Cat6_J_5.js";import"./small-cross-WUKc4wzh.js";import"./ActionButton-CxLb80et.js";import"./Checkbox-Dyq6vKsd.js";import"./useValueChanged-EVQifgYs.js";import"./CollapsiblePanel-BrkpisiN.js";import"./MultiColumnSortDialog-DT7WuJBk.js";import"./MenuTrigger-Bi3Tv-Yx.js";import"./CompositeItem-DMa2K3iN.js";import"./ToolbarRootContext-CBnKcEyp.js";import"./getDisabledMountTransitionStyles-yQAdsL-J.js";import"./getPseudoElementBounds-CQAue5bo.js";import"./chevron-down-BkyonfV4.js";import"./index-DSBMRtFR.js";import"./error-DXOYczi7.js";import"./BaseCbacBanner-BKWsBk-N.js";import"./makeExternalStore-HEA345T9.js";import"./Tooltip-BMHXT91H.js";import"./PopoverPopup-CPj_RJ75.js";import"./debounce-B9bcrHjS.js";import"./tick-BpTe-h6v.js";import"./DropdownField-Cjcq2217.js";import"./isEqual-DrYLE_W0.js";import"./withOsdkMetrics-h-AdLa11.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
