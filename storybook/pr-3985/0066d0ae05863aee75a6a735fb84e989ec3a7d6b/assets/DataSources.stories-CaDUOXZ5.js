import{j as r}from"./iframe-826Gs96o.js";import{O as b}from"./object-table-Thljzijj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CeYZbSSZ.js";import{u as g}from"./useOsdkClient-CAEYuMrw.js";import"./preload-helper-Dy1PefeT.js";import"./Table-DCXP7kJp.js";import"./index-DxFbtAl2.js";import"./Dialog-BlwK3Qsn.js";import"./cross-CGVnPFvE.js";import"./svgIconContainer-C9llsudM.js";import"./useBaseUiId-Dg5t7t_V.js";import"./InternalBackdrop-xUOOm_9M.js";import"./composite-CfFzeQqA.js";import"./index-CjQrbWNq.js";import"./index-DuT9KNdT.js";import"./index-Bs21FMkz.js";import"./useEventCallback-BJHP1M_f.js";import"./SkeletonBar-B0AWztU4.js";import"./LoadingCell-B_nwXWP8.js";import"./ColumnConfigDialog-B9ixCZfi.js";import"./DraggableList-s-AQ20Te.js";import"./search-BZHAnhvn.js";import"./Input-DI6TXQQJ.js";import"./useControlled-BpCUWNpJ.js";import"./Button-DNoJUNAB.js";import"./small-cross-C8UmW7Hs.js";import"./ActionButton-DDJP6dlY.js";import"./Checkbox-I9jrKPP8.js";import"./useValueChanged-DENmBLV7.js";import"./CollapsiblePanel-DuQd7Yzu.js";import"./MultiColumnSortDialog-D0tYMKqS.js";import"./MenuTrigger-gSFbsB9W.js";import"./CompositeItem-CcW3IcXa.js";import"./ToolbarRootContext-CHa8QnRi.js";import"./getDisabledMountTransitionStyles-DGBLiCd8.js";import"./getPseudoElementBounds-K8yHl1as.js";import"./chevron-down-DTD0XUuq.js";import"./index-BpqO_0Z6.js";import"./error-BRJ8RgcR.js";import"./BaseCbacBanner-BD75tGsg.js";import"./makeExternalStore-vPmU5su8.js";import"./Tooltip-1a4YvbvY.js";import"./PopoverPopup-CAuY5cHw.js";import"./debounce-R32f75fq.js";import"./tick-Cz6w76NV.js";import"./DropdownField-D4QNZQ_M.js";import"./isEqual-nMBzRr3Z.js";import"./withOsdkMetrics-BKsd8iS7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
