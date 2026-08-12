import{j as r}from"./iframe-Bfu51uKD.js";import{O as b}from"./object-table-ZisTagRp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CEbyg_qs.js";import{u as g}from"./useOsdkClient-Dw12XehB.js";import"./preload-helper-CzYQogJ9.js";import"./Table-DsoGa2FL.js";import"./index-DQHJlggZ.js";import"./Dialog-BmpyHtLd.js";import"./cross-Cj0zRN-P.js";import"./svgIconContainer-BznedMGF.js";import"./useBaseUiId-BMFIksfI.js";import"./InternalBackdrop-vxJhONV7.js";import"./composite-cjjayGq4.js";import"./index-C7HMsQca.js";import"./index-bKbCmQEs.js";import"./index-DeDNMLrn.js";import"./useEventCallback-Ci69gKLi.js";import"./SkeletonBar-D3W8qW_m.js";import"./LoadingCell-DzIW3PIc.js";import"./ColumnConfigDialog-B6bW1hs_.js";import"./DraggableList-B18qaVoP.js";import"./search-DiqUH8-G.js";import"./Input-BARZRbjA.js";import"./useControlled-DiKj9TwT.js";import"./isEqual-zZQp1Tf_.js";import"./isObject-Dl748mdT.js";import"./Button-BczMqlK6.js";import"./ActionButton-DdI7_jIN.js";import"./Checkbox-D5o9wSO_.js";import"./useValueChanged-D3dCBJ9W.js";import"./CollapsiblePanel-wUtJF-2b.js";import"./MultiColumnSortDialog--0c-JbQA.js";import"./MenuTrigger-ISZjXtIA.js";import"./CompositeItem-DJ-aCdOv.js";import"./ToolbarRootContext-fCSUIj3k.js";import"./getDisabledMountTransitionStyles-DaieVKBp.js";import"./getPseudoElementBounds-DA_wzyEX.js";import"./chevron-down-zP9dxkSq.js";import"./index-yGcDT_JP.js";import"./error-DGXpdtF_.js";import"./BaseCbacBanner-f0-HF5WI.js";import"./makeExternalStore-CT8wDfgr.js";import"./Tooltip-CGMIo-xb.js";import"./PopoverPopup-D_2s96me.js";import"./toNumber-Bs_rfsY9.js";import"./tick-WDJS8_jm.js";import"./DropdownField-Bd1ER7PN.js";import"./withOsdkMetrics-DUx07Whe.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
