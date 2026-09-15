import{j as r}from"./iframe-BD39Do8C.js";import{O as b}from"./object-table-XvysqiEU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CIIaOHt_.js";import{u as g}from"./useOsdkClient-s9NhLy7T.js";import"./preload-helper-JSiQ8WbR.js";import"./Table-Kxd4s0Rq.js";import"./index-BCxf04aV.js";import"./Dialog-DbttJI7D.js";import"./cross-CMhnMXoS.js";import"./svgIconContainer-BGfZ28Se.js";import"./useBaseUiId-CixWZYdi.js";import"./InternalBackdrop-JgUl4SpN.js";import"./composite-Dw7ZpZcU.js";import"./index-BxvffljR.js";import"./index-BlGl871Z.js";import"./index-BMGw1Ywl.js";import"./useEventCallback-CAno7Uq2.js";import"./SkeletonBar-ChYm8Pif.js";import"./LoadingCell-Bp33neIb.js";import"./ColumnConfigDialog-CmdVMkd2.js";import"./DraggableList-CFz8s0Iz.js";import"./search-DKvlAX7y.js";import"./Input-C2jmuYOz.js";import"./useControlled-eZ44qZZ0.js";import"./Button-u59jaYGp.js";import"./small-cross-v3WipyAt.js";import"./ActionButton-7xwBUzYP.js";import"./Checkbox-CggHv61E.js";import"./useValueChanged-DEs8VwNn.js";import"./CollapsiblePanel-Drtssh2l.js";import"./MultiColumnSortDialog-CZb4OMVv.js";import"./MenuTrigger-n2HgLx6m.js";import"./CompositeItem-ucwXIdj-.js";import"./ToolbarRootContext-CEznXclz.js";import"./getDisabledMountTransitionStyles-CF6npNkJ.js";import"./getPseudoElementBounds-muQrWTVi.js";import"./chevron-down-Xa2zxhAU.js";import"./index-C4HeAi2L.js";import"./error-Bjl2LrVO.js";import"./BaseCbacBanner-D7gYN66H.js";import"./makeExternalStore-3auNYjTa.js";import"./Tooltip-A3U5tZhT.js";import"./PopoverPopup-B0-uC8s0.js";import"./debounce-Bbpr-sop.js";import"./tick--a7d8SCu.js";import"./DropdownField-sKOGesOW.js";import"./isEqual-BAy2lMjl.js";import"./withOsdkMetrics-Dp5pMzPZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
