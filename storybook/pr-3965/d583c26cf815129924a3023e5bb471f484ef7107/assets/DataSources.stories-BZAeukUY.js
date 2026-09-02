import{j as r}from"./iframe-CO-y4TdN.js";import{O as b}from"./object-table-CUW8bU6f.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C42r3A2_.js";import{u as g}from"./useOsdkClient-e3M3fG2D.js";import"./preload-helper-CjyFmI8K.js";import"./Table-rN1rPeLW.js";import"./index-BvlbGIzZ.js";import"./Dialog-CBdKrEH-.js";import"./cross-C5dLLhyh.js";import"./svgIconContainer-CndQfIvO.js";import"./useBaseUiId-JbgqorN2.js";import"./InternalBackdrop-B_JDnFUv.js";import"./composite-CpRI4cG_.js";import"./index-Bpe4fXs9.js";import"./index-CokB0b6k.js";import"./index-BYwfC7H9.js";import"./useEventCallback-CnPqTEiA.js";import"./SkeletonBar-BNBMw-sd.js";import"./LoadingCell-C6wndQb-.js";import"./ColumnConfigDialog-Cm8SAy61.js";import"./DraggableList-BW39ee41.js";import"./search-Bc1itZDf.js";import"./Input-hfVPciHP.js";import"./useControlled-C5lB0Y_-.js";import"./Button-B8DTN9QH.js";import"./small-cross-CvGBi9-r.js";import"./ActionButton-BmIkStKV.js";import"./Checkbox-DhUWlYpn.js";import"./useValueChanged-DAwmS2z_.js";import"./CollapsiblePanel-D-FGJL1V.js";import"./MultiColumnSortDialog-CwKViLBZ.js";import"./MenuTrigger-DcMTnf6L.js";import"./CompositeItem-C9K9ap8i.js";import"./ToolbarRootContext-DhfbkfjQ.js";import"./getDisabledMountTransitionStyles-24Mq1L47.js";import"./getPseudoElementBounds-CwTC3_6Z.js";import"./chevron-down-DcENhPxj.js";import"./index-D0Bl1hu0.js";import"./error-CwAmKxgu.js";import"./BaseCbacBanner-CIXhelO6.js";import"./makeExternalStore-DjtvJt2I.js";import"./Tooltip-BmXHzlNq.js";import"./PopoverPopup-CnG3HuBu.js";import"./debounce-NLjoYl0e.js";import"./tick-D0RcBagt.js";import"./DropdownField-tV31hf4I.js";import"./isEqual-CRfTLq5O.js";import"./withOsdkMetrics-BplgaXU_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
