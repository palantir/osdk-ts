import{j as r}from"./iframe-CUZRoNNv.js";import{O as b}from"./object-table-B7I8IXEY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B7v03KL3.js";import{u as g}from"./useOsdkClient-BzUYs6XV.js";import"./preload-helper-CrAnAkNd.js";import"./Table-C3wyRrA6.js";import"./index-DyJF2RgL.js";import"./Dialog-Cn9uzKiW.js";import"./cross-CSe3kma4.js";import"./svgIconContainer-grpv7WkD.js";import"./useBaseUiId-BjYXt-Y8.js";import"./InternalBackdrop-B1oT2L8M.js";import"./composite-LGakJTZC.js";import"./index-BBjGhXOn.js";import"./index-CMCn6By5.js";import"./index-DyQ1LTEo.js";import"./useEventCallback-CRtaVkZD.js";import"./SkeletonBar-Cs_FVwUF.js";import"./LoadingCell-CRr7-OyQ.js";import"./ColumnConfigDialog-C3mzEEmr.js";import"./DraggableList-DueAX1k6.js";import"./search-XLYepbmJ.js";import"./Input-Db-zmbeF.js";import"./useControlled-SgSnNk_-.js";import"./Button-C0zF-FQF.js";import"./small-cross-DkU4qrA6.js";import"./ActionButton-Fv9YojAp.js";import"./Checkbox-B0LYl5tM.js";import"./useValueChanged-QEA79Kem.js";import"./CollapsiblePanel-CQdqgiNL.js";import"./MultiColumnSortDialog-DV5SVo22.js";import"./MenuTrigger-C_v7Fax_.js";import"./CompositeItem-BcoPKNgT.js";import"./ToolbarRootContext-8UU7wnms.js";import"./getDisabledMountTransitionStyles-CKffQk5p.js";import"./getPseudoElementBounds-C_t6F_mK.js";import"./chevron-down-GCVDTzTT.js";import"./index-DGzm9vGw.js";import"./error-DiHuZvPy.js";import"./BaseCbacBanner-DXPAW_JB.js";import"./makeExternalStore-BolJxNvY.js";import"./Tooltip-DSblGONh.js";import"./PopoverPopup-VaXrb5EK.js";import"./debounce-0YKxs7_M.js";import"./tick-BB3AulHS.js";import"./DropdownField-ChFA6G-L.js";import"./isEqual-CYQ9gmnQ.js";import"./withOsdkMetrics-CXfpKFLb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
