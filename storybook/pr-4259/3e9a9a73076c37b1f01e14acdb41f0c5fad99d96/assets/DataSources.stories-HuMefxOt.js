import{j as r}from"./iframe-DOyQxJvH.js";import{O as b}from"./object-table-rCHTTNrC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BUY94hNh.js";import{u as g}from"./useOsdkClient-9mLaoDY9.js";import"./preload-helper-b99Wj4jj.js";import"./Table-BDyrIjWH.js";import"./index-DohetWl-.js";import"./Dialog-t2KrNQJf.js";import"./cross-Clcl0FW-.js";import"./svgIconContainer-B_aagRLN.js";import"./useBaseUiId-DieRYZnL.js";import"./InternalBackdrop-ByEBsKrq.js";import"./composite-ZJn0pY0h.js";import"./index-BPvIlRyU.js";import"./index-Bj0URVYm.js";import"./index-BkqZ1wLV.js";import"./useEventCallback-jKGT4Pcx.js";import"./SkeletonBar-ySgrjMCk.js";import"./LoadingCell-BedFgeOa.js";import"./ColumnConfigDialog-5y16klfk.js";import"./DraggableList-DcvsfxCi.js";import"./search-CFvqb_6m.js";import"./Input-1EVSbUy3.js";import"./useControlled-D5_WZpq_.js";import"./Button-Siw5hwdL.js";import"./small-cross-DHIK5OPW.js";import"./ActionButton-Cj8YJ3F7.js";import"./Checkbox-CsbfOGVY.js";import"./useValueChanged-BcjC7Q7U.js";import"./CollapsiblePanel-Amuq13yP.js";import"./MultiColumnSortDialog-C1c_eJ9g.js";import"./MenuTrigger-CfbmdoAo.js";import"./CompositeItem-CClLQtRU.js";import"./ToolbarRootContext-CL9w8adf.js";import"./getDisabledMountTransitionStyles-C53WijiN.js";import"./getPseudoElementBounds-veJLu94H.js";import"./chevron-down-CHciOX2j.js";import"./index-jxIBoeRQ.js";import"./error-CImoxm8w.js";import"./BaseCbacBanner-NdHkp8P6.js";import"./makeExternalStore-C8fED8Be.js";import"./Tooltip-CycvzHTs.js";import"./PopoverPopup-aigE3Okr.js";import"./debounce-Blq-yKsA.js";import"./tick-Z9gea7hj.js";import"./DropdownField-BqmCeBVH.js";import"./isEqual-Bi80oFRx.js";import"./withOsdkMetrics-CkKOCKYX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
