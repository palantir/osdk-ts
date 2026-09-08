import{j as r}from"./iframe-BpAf1-YV.js";import{O as b}from"./object-table-CjeP2Wwp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-_Q2rE92O.js";import{u as g}from"./useOsdkClient-fGXuQFgJ.js";import"./preload-helper-C7Ebqy80.js";import"./Table-BHcYIm7n.js";import"./index-DyADrv6I.js";import"./Dialog-Bgx40clP.js";import"./cross-DslNwA_6.js";import"./svgIconContainer-CFecCBjJ.js";import"./useBaseUiId-C9xAI1lW.js";import"./InternalBackdrop-DIkARFig.js";import"./composite-mAbXNXR7.js";import"./index-Cxw2yzFX.js";import"./index-DS78ICiY.js";import"./index-BFZzGMb_.js";import"./useEventCallback-BqMN4vsA.js";import"./SkeletonBar-C6BT11pg.js";import"./LoadingCell-Cz2ziAVE.js";import"./ColumnConfigDialog-CFa85xx3.js";import"./DraggableList-CYPEekzj.js";import"./search-DkdRXT-s.js";import"./Input-DIA1NCyo.js";import"./useControlled-Bq45AK2p.js";import"./Button-VTVCzMYN.js";import"./small-cross-CqAu1Ci1.js";import"./ActionButton-DoMyUIMJ.js";import"./Checkbox-DxQijG1K.js";import"./useValueChanged-D_9lOFp6.js";import"./CollapsiblePanel-CeD70irk.js";import"./MultiColumnSortDialog-CmYp3Npl.js";import"./MenuTrigger-D_8_evnU.js";import"./CompositeItem-DZ-wY7w2.js";import"./ToolbarRootContext-DFWsSTVD.js";import"./getDisabledMountTransitionStyles-DcnlFvvt.js";import"./getPseudoElementBounds-0BuLbpLW.js";import"./chevron-down-Bp5YSXdo.js";import"./index-CiUfMed7.js";import"./error-DZIXNDEl.js";import"./BaseCbacBanner-Ct2xvxEE.js";import"./makeExternalStore-B3qv40Vp.js";import"./Tooltip-BQ1GnDHa.js";import"./PopoverPopup-NJFXZyoo.js";import"./debounce-21KeODoP.js";import"./tick-CPLVuGzH.js";import"./DropdownField-dB9KcLRA.js";import"./isEqual-CoUIWyeV.js";import"./withOsdkMetrics-6mq6wlfJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
