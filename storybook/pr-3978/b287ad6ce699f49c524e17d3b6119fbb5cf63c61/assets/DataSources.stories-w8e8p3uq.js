import{j as r}from"./iframe-Ce1nas-A.js";import{O as b}from"./object-table-CH1gYmyr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DEo7DRqH.js";import{u as g}from"./useOsdkClient-YT7s1JaQ.js";import"./preload-helper-DcZRzKsw.js";import"./Table-grwzvFI5.js";import"./index-DxkusUp0.js";import"./Dialog-2I39uksF.js";import"./cross-BfauTbl-.js";import"./svgIconContainer-C2K9KBka.js";import"./useBaseUiId-DjCVaNnh.js";import"./InternalBackdrop-B-W0bTB1.js";import"./composite-DmeYZGjI.js";import"./index-CuuyYF8k.js";import"./index-C9gjttHq.js";import"./index-DVNB7RLR.js";import"./useEventCallback-Cbw47kNr.js";import"./SkeletonBar-CGzZv0LQ.js";import"./LoadingCell-BIgUV0cO.js";import"./ColumnConfigDialog-Bv9qArUC.js";import"./DraggableList-C0E4dnDv.js";import"./search-CeMBlWp8.js";import"./Input-BkD6sM5Z.js";import"./useControlled-HDcnxMGz.js";import"./Button-Dug6UdNF.js";import"./small-cross-CUbbmEa4.js";import"./ActionButton-CJN2LFZu.js";import"./Checkbox-Dmh7aamG.js";import"./useValueChanged-CNmQlOiE.js";import"./CollapsiblePanel-BCEUBNV9.js";import"./MultiColumnSortDialog-9d5vdjh6.js";import"./MenuTrigger-Dtpo5bPS.js";import"./CompositeItem-Ci-C3Qdf.js";import"./ToolbarRootContext-DETOyxOk.js";import"./getDisabledMountTransitionStyles-DliKnPBx.js";import"./getPseudoElementBounds-cUIgxq13.js";import"./chevron-down-BWpGIUiv.js";import"./index-Cz6vrhk3.js";import"./error-C2DVXeGz.js";import"./BaseCbacBanner-CSYqnlL4.js";import"./makeExternalStore-pm8795BR.js";import"./Tooltip-D2u6OBrC.js";import"./PopoverPopup-D21lDN1V.js";import"./debounce-BJwq-W7n.js";import"./tick-Bc-8vFey.js";import"./DropdownField-CNUDLDKP.js";import"./isEqual-CjXb8CsY.js";import"./withOsdkMetrics-Oy1nTjGv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
