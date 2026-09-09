import{j as r}from"./iframe-zZuIx-c9.js";import{O as b}from"./object-table-DW_Vj8dz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BeF9kDPS.js";import{u as g}from"./useOsdkClient-BmjkDG1y.js";import"./preload-helper-XLtQClQl.js";import"./Table-DIOfekiY.js";import"./index-DGgNHuzV.js";import"./Dialog-CT-MsiOQ.js";import"./cross-CI4w4_Jo.js";import"./svgIconContainer-BVFcWySo.js";import"./useBaseUiId-QsYmwdFZ.js";import"./InternalBackdrop-B0ZUvn2o.js";import"./composite-Cx527Tyd.js";import"./index-TM8zQZc6.js";import"./index-C1Pc_aQZ.js";import"./index-DSSfDUcI.js";import"./useEventCallback-DuyscJu3.js";import"./SkeletonBar-BpofndJ7.js";import"./LoadingCell-BBJkPVdt.js";import"./ColumnConfigDialog-BPIPUBx0.js";import"./DraggableList-D51EtEm_.js";import"./search-CNuN0o2o.js";import"./Input-BD19hUvi.js";import"./useControlled-B4CVwr3J.js";import"./Button-Cv2L8neg.js";import"./small-cross-Ce2qYYjw.js";import"./ActionButton-CTnMDA00.js";import"./Checkbox-OBFd4f6B.js";import"./useValueChanged-VVjI8tpd.js";import"./CollapsiblePanel-CDMZ6agG.js";import"./MultiColumnSortDialog-cmzLi8G7.js";import"./MenuTrigger-ynLmujTD.js";import"./CompositeItem-DKDVMcoh.js";import"./ToolbarRootContext-pNEiopTT.js";import"./getDisabledMountTransitionStyles-B0Omgaf7.js";import"./getPseudoElementBounds-Dw3d2TY6.js";import"./chevron-down-BRlfcJdA.js";import"./index-DaqIxsao.js";import"./error-C5gHLQAi.js";import"./BaseCbacBanner-_cQym-JM.js";import"./makeExternalStore-BcA2BzRz.js";import"./Tooltip-C-LiyBN2.js";import"./PopoverPopup-CVvRvgY6.js";import"./debounce-BGzgo4FS.js";import"./tick-mF_xRJKy.js";import"./DropdownField-DCyylpdR.js";import"./isEqual-CNzTfT1J.js";import"./withOsdkMetrics-Y5EbkS67.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
