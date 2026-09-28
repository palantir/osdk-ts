import{j as r}from"./iframe-xlXCZ1ws.js";import{O as b}from"./object-table-CmsAhSfg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BLvOR6Li.js";import{u as g}from"./useOsdkClient-Bcj4c6xw.js";import"./preload-helper-qqQQlHro.js";import"./Table-BUq2GEQj.js";import"./index-0LV67TMp.js";import"./Dialog-gQXrXHak.js";import"./cross-CR59a-Oy.js";import"./svgIconContainer-CuvK47Ur.js";import"./useBaseUiId-BGTxIfXW.js";import"./InternalBackdrop-B_15Ngja.js";import"./composite-CRMLjWFi.js";import"./index-C9_hIpBS.js";import"./index-mu_ylgEd.js";import"./index-COgWwI6H.js";import"./useEventCallback-C6MHTMfG.js";import"./SkeletonBar-BnHpQoIH.js";import"./LoadingCell-JiBKO40X.js";import"./ColumnConfigDialog-C0e1aTZU.js";import"./DraggableList-DoqqQWJG.js";import"./search-C6I7AzRf.js";import"./Input-BoJ1ruei.js";import"./useControlled-BnjR3wqV.js";import"./Button-BsW3xUOI.js";import"./small-cross-odVg3Ngs.js";import"./ActionButton-BCxwpleN.js";import"./Checkbox-CYMQvQpq.js";import"./useValueChanged-C6fdlLGU.js";import"./CollapsiblePanel-DQQNXkbu.js";import"./MultiColumnSortDialog-Bdr5AO2z.js";import"./MenuTrigger-JiNystqw.js";import"./CompositeItem-BYik2Kor.js";import"./ToolbarRootContext-5Gfw3fcR.js";import"./getDisabledMountTransitionStyles-C6rGsGDU.js";import"./getPseudoElementBounds-DCb81mxx.js";import"./chevron-down-gZxsFq9N.js";import"./index-kTsIio2O.js";import"./error-1_b5vZEY.js";import"./BaseCbacBanner-A6lL-nhH.js";import"./makeExternalStore-BkPioVOv.js";import"./Tooltip-CVfnB-bd.js";import"./PopoverPopup-CcQbR00T.js";import"./debounce-CDE_4Xvo.js";import"./tick-DX5clgfv.js";import"./DropdownField-DRz8c_L3.js";import"./isEqual-B3JIeK92.js";import"./withOsdkMetrics-Cc_kPS0s.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
