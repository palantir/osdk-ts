import{j as r}from"./iframe-Mtgd1DTS.js";import{O as b}from"./object-table-DZcbuhax.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D4z2kjs2.js";import{u as g}from"./useOsdkClient-0d2T-tjR.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B0i-YCE7.js";import"./index-DGQ1D5ZF.js";import"./Dialog-BUwRTkBO.js";import"./cross-nE9MHaq6.js";import"./svgIconContainer-BTXfnqy-.js";import"./useBaseUiId-gk6HeQ4v.js";import"./InternalBackdrop-C3FLzDyf.js";import"./composite-BOi5r20r.js";import"./index-DWBX8AGA.js";import"./index-DVZkzu80.js";import"./index-BLZbP_iP.js";import"./useEventCallback-Otl2FIIq.js";import"./SkeletonBar-Bjmn4nj7.js";import"./LoadingCell-CWKO4sHJ.js";import"./ColumnConfigDialog-CTJhoKGI.js";import"./DraggableList-BJ0RDZMA.js";import"./search-B4_r-kWC.js";import"./Input-BuQB-8kT.js";import"./useControlled-Bdc-9JPt.js";import"./Button-BRDaSx2s.js";import"./small-cross-B5fbwO-C.js";import"./ActionButton-JooCSyPg.js";import"./Checkbox-BUFEp9JI.js";import"./useValueChanged-JDBorrlu.js";import"./CollapsiblePanel-BjaTBsUI.js";import"./MultiColumnSortDialog-BNPHleDp.js";import"./MenuTrigger-Bs70PEvm.js";import"./CompositeItem-CvGV1Dn5.js";import"./ToolbarRootContext-C7D-uVC_.js";import"./getDisabledMountTransitionStyles-DyU0dy72.js";import"./getPseudoElementBounds-CKwpRTNx.js";import"./chevron-down-Bvy3Wm81.js";import"./index-D3rG4xmO.js";import"./error-O-ALRXAM.js";import"./BaseCbacBanner-CSkg4fga.js";import"./makeExternalStore-BPm4QJ00.js";import"./Tooltip-BP1dRkR8.js";import"./PopoverPopup-WtLbH-U4.js";import"./debounce-BsdStdiQ.js";import"./tick-CGp3ABT2.js";import"./DropdownField-CAtdjvP3.js";import"./isEqual-CbNbEIQW.js";import"./withOsdkMetrics-B9hm1gbS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
