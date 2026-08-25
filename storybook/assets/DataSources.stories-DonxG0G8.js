import{j as r}from"./iframe-Ccq8LnzR.js";import{O as b}from"./object-table-BwNQP79J.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BT32GJoT.js";import{u as g}from"./useOsdkClient-DOH5uFok.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BNfCu1B_.js";import"./index-ibpVN2lt.js";import"./Dialog-Dd9tli1K.js";import"./cross-D61Z2HA7.js";import"./svgIconContainer-B3MTQTZk.js";import"./useBaseUiId-ChrZBL00.js";import"./InternalBackdrop-C6KEc4k3.js";import"./composite-CUDUHPUL.js";import"./index-CsxRvKms.js";import"./index-DSa7XzaC.js";import"./index-BjFrub02.js";import"./useEventCallback-BTtlCNNb.js";import"./SkeletonBar-D--J-NXf.js";import"./LoadingCell-B1A6ARPD.js";import"./ColumnConfigDialog-D7TjP6l5.js";import"./DraggableList-DqIyDI4r.js";import"./search-fYPHsLc6.js";import"./Input-CDUlKefO.js";import"./useControlled-BDMchsxG.js";import"./Button-ZG1qj9kz.js";import"./small-cross-X50wsIgk.js";import"./ActionButton-BCy4f3fN.js";import"./Checkbox-wr4CrvWc.js";import"./useValueChanged-DAinPMBg.js";import"./CollapsiblePanel-CZQxSMBU.js";import"./MultiColumnSortDialog-BGMzVDz6.js";import"./MenuTrigger-gpcrY7AQ.js";import"./CompositeItem-oGACzHps.js";import"./ToolbarRootContext-C39odqBG.js";import"./getDisabledMountTransitionStyles-DQQWGbDa.js";import"./getPseudoElementBounds-ThTpZrh5.js";import"./chevron-down-CcArFodd.js";import"./index-CoeZrPs6.js";import"./error-DHq6tj_T.js";import"./BaseCbacBanner-BwNweq9C.js";import"./makeExternalStore-_f2hnKfG.js";import"./Tooltip-CxZiJ6KQ.js";import"./PopoverPopup-o-m8jew_.js";import"./debounce-DECuEKDc.js";import"./tick-CdTACpR9.js";import"./DropdownField-DGqy8Ho_.js";import"./isEqual-Bo4M0cTA.js";import"./withOsdkMetrics-B2PLhQzs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
