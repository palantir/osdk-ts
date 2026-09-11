import{j as r}from"./iframe-Bw13kIxi.js";import{O as b}from"./object-table-kxZ9tU0A.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8gusDsx.js";import{u as g}from"./useOsdkClient-ysIV4O88.js";import"./preload-helper-BzOLmTcY.js";import"./Table-C8yqct6T.js";import"./index-MMxGRtZu.js";import"./Dialog-DfHRROsO.js";import"./cross-Bot7O1S5.js";import"./svgIconContainer-CHQSAFNt.js";import"./useBaseUiId-BD7FpPox.js";import"./InternalBackdrop-A7BWoqb_.js";import"./composite-BFCFgZut.js";import"./index-CUU4Y7hn.js";import"./index-BqWGwO84.js";import"./index-BFk6o5Yc.js";import"./useEventCallback-DTY0kHsH.js";import"./SkeletonBar-CpAUSAEn.js";import"./LoadingCell-CanaaSrx.js";import"./ColumnConfigDialog-JQuoDAkJ.js";import"./DraggableList-BslGcgGG.js";import"./search-DC1ogqGn.js";import"./Input-2zOhGHVv.js";import"./useControlled-DefJa1NZ.js";import"./Button-CE0Z6ey5.js";import"./small-cross-jMKjsjhb.js";import"./ActionButton-DXMkOznn.js";import"./Checkbox-C5nrXeA-.js";import"./useValueChanged-qKqnNGu6.js";import"./CollapsiblePanel-C7c8Mi8e.js";import"./MultiColumnSortDialog-D0HB9zMf.js";import"./MenuTrigger-DrqgM8Ia.js";import"./CompositeItem-B4j9mPKG.js";import"./ToolbarRootContext-IHMHRzml.js";import"./getDisabledMountTransitionStyles-Dm6t4Qzi.js";import"./getPseudoElementBounds-BbQB3o-0.js";import"./chevron-down-hwQFkKEa.js";import"./index-Dtvh5Ts7.js";import"./error-CDpWRRdK.js";import"./BaseCbacBanner-C6nWB-Kz.js";import"./makeExternalStore-BPlb4pia.js";import"./Tooltip-C2VUAIPR.js";import"./PopoverPopup-Fr35LjTY.js";import"./debounce-BaVRg2vf.js";import"./tick-vVehnAOz.js";import"./DropdownField-QqZNyAQs.js";import"./isEqual-DLZP89tE.js";import"./withOsdkMetrics-Bh3armvA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
