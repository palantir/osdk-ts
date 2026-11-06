import{j as r}from"./iframe-BX25vaaY.js";import{O as b}from"./object-table-dzzGL-Nt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CX5C8HI1.js";import{u as g}from"./useOsdkClient-BMWDxtmb.js";import"./preload-helper-B4fqOqCe.js";import"./Table-dFabYKTU.js";import"./index-cHBOMeEB.js";import"./Dialog-Bz88ckYq.js";import"./cross-DYoAuDNi.js";import"./svgIconContainer-CdYxDvot.js";import"./useBaseUiId-CcSHD2go.js";import"./InternalBackdrop-DAZjwhZx.js";import"./composite-CR6ea9de.js";import"./index-CwTTdI6G.js";import"./index-3gZ9GYf_.js";import"./index-Z6EGSFM5.js";import"./useEventCallback-rCSZBNnH.js";import"./SkeletonBar-iUlUOGnb.js";import"./LoadingCell-E-HcHpI-.js";import"./ColumnConfigDialog-B1PCFNF_.js";import"./DraggableList-BDPSc9uV.js";import"./search-Cq3hJNRT.js";import"./Input-B7_1OxfG.js";import"./useControlled-CncYrOIz.js";import"./Button-_HXzGyBt.js";import"./small-cross-ua1KNA1W.js";import"./ActionButton-YaVL47EC.js";import"./Checkbox-ChpXb7lQ.js";import"./useValueChanged-B5wvfKOk.js";import"./CollapsiblePanel-DUxCMy3H.js";import"./MultiColumnSortDialog-BGy0bW4w.js";import"./MenuTrigger-EWj52u5X.js";import"./CompositeItem-CmMVOFT8.js";import"./ToolbarRootContext-aY85yZom.js";import"./getDisabledMountTransitionStyles-DhBpb285.js";import"./getPseudoElementBounds-CIQTJ_fk.js";import"./chevron-down-EEZ-gmtO.js";import"./index-BzEoWnZU.js";import"./error-CJ3zu-Fv.js";import"./BaseCbacBanner-Ce8x1hpN.js";import"./makeExternalStore-M7acJIlW.js";import"./Tooltip-CQ8DNFV6.js";import"./PopoverPopup-BlgnwBvy.js";import"./debounce-CJILhTW-.js";import"./tick-D6Q1wyk4.js";import"./DropdownField-BMURQ1aW.js";import"./isEqual-_AKmbi14.js";import"./withOsdkMetrics-WVBxLOJx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
