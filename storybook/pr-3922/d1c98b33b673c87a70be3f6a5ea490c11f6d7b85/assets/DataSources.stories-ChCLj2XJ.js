import{j as r}from"./iframe-CoDqFtQr.js";import{O as b}from"./object-table-BmBGZThO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CGqe-qja.js";import{u as g}from"./useOsdkClient-DPsK-Rb2.js";import"./preload-helper-BmQtlo2-.js";import"./Table-DWcHzG-V.js";import"./index-DEf63PKQ.js";import"./Dialog-Cs_17NaL.js";import"./cross-CnhoIzD9.js";import"./svgIconContainer-KqUQbUEW.js";import"./useBaseUiId-l4Ce-Oes.js";import"./InternalBackdrop-DZoeQnIs.js";import"./composite-CyFYModE.js";import"./index-ZhLzpxX-.js";import"./index-BYn91zFu.js";import"./index-eELGNG8N.js";import"./useEventCallback-B3OhgyVJ.js";import"./SkeletonBar-L8l21dAL.js";import"./LoadingCell-B8dq9CYH.js";import"./ColumnConfigDialog-Db0f33eN.js";import"./DraggableList-C3U59dkH.js";import"./search-Ds5uDEZ1.js";import"./Input-BZ6jwM42.js";import"./useControlled-DH19P8RP.js";import"./Button-CdKky6kN.js";import"./small-cross-DKu8qp5W.js";import"./ActionButton-CWGovcK-.js";import"./Checkbox-C-XCEvn7.js";import"./useValueChanged-PW6Wu233.js";import"./CollapsiblePanel-DWKoNggU.js";import"./MultiColumnSortDialog-l_NYF0ae.js";import"./MenuTrigger-1ra3ZOCO.js";import"./CompositeItem-yz-_V8KW.js";import"./ToolbarRootContext-DUeXrFD2.js";import"./getDisabledMountTransitionStyles-DDMf5lOQ.js";import"./getPseudoElementBounds-Bem6NL1M.js";import"./chevron-down-BoowdlwO.js";import"./index-BQtDLv6q.js";import"./error-pPyGOl1i.js";import"./BaseCbacBanner-DdkNBOcB.js";import"./makeExternalStore-CJioVlys.js";import"./Tooltip-Ck5G824C.js";import"./PopoverPopup-CwQX9C7x.js";import"./debounce-CxxL-CaD.js";import"./tick-CexL6eUj.js";import"./DropdownField-CZjYNLnh.js";import"./isEqual-Ca1ADH9J.js";import"./withOsdkMetrics-DlX8mWus.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
