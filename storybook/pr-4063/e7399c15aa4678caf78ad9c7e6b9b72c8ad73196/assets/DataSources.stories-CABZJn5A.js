import{j as r}from"./iframe-C4MIlXUU.js";import{O as b}from"./object-table-DDycTUTt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-wgD43c57.js";import{u as g}from"./useOsdkClient-BdpGzgo-.js";import"./preload-helper-DCfOkHUu.js";import"./Table-jh-sNjmf.js";import"./index-QdXGOJ9B.js";import"./Dialog-BPEWuES9.js";import"./cross-D03lplef.js";import"./svgIconContainer-DoAfVxUT.js";import"./useBaseUiId-BLYxIIxg.js";import"./InternalBackdrop-C98GTYMM.js";import"./composite-7GWV62aV.js";import"./index-fTGPOK7q.js";import"./index-DDMEfKUV.js";import"./index-Cltx_TvU.js";import"./useEventCallback-A9aazwfG.js";import"./SkeletonBar-DZ93h05E.js";import"./LoadingCell-Cco5s7MI.js";import"./ColumnConfigDialog-BSg8I-6I.js";import"./DraggableList-lWiaBS2q.js";import"./search-Bbx7uHY2.js";import"./Input-u7GRO9F9.js";import"./useControlled-DaM2GsbY.js";import"./Button-BxGZ6LLp.js";import"./small-cross-CI-bZQTO.js";import"./ActionButton-DY1T25ma.js";import"./Checkbox-CheOw8Pz.js";import"./useValueChanged-C4rXhlJi.js";import"./CollapsiblePanel-DHh5X-RV.js";import"./MultiColumnSortDialog-Nov7WwuB.js";import"./MenuTrigger-D0TRSJ66.js";import"./CompositeItem-C-l5BZdt.js";import"./ToolbarRootContext-DtcwdZup.js";import"./getDisabledMountTransitionStyles-BIGg12Vn.js";import"./getPseudoElementBounds-Bg5q8lr3.js";import"./chevron-down-DQjtaLz5.js";import"./index-BpG7TDWh.js";import"./error-m5JvGXlH.js";import"./BaseCbacBanner-BGFoGpfs.js";import"./makeExternalStore-D8FJMeEh.js";import"./Tooltip-hAryQfwI.js";import"./PopoverPopup-BqUvpiAJ.js";import"./debounce-NhhwNg05.js";import"./tick-Be-lb4_a.js";import"./DropdownField-iPMHZz0u.js";import"./isEqual-ncJ8uLoB.js";import"./withOsdkMetrics-P9SsSnz2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
