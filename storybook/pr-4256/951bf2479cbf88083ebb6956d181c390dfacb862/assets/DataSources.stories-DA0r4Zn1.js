import{j as r}from"./iframe-BBSo5ZCd.js";import{O as b}from"./object-table-Br8U4lum.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bc3G3jys.js";import{u as g}from"./useOsdkClient-BFKwqTbg.js";import"./preload-helper-Dzi5mX41.js";import"./Table-7KyAWf7L.js";import"./index-B8ZS8eSl.js";import"./Dialog-B9q0YpDn.js";import"./cross-CS1ZE-4d.js";import"./svgIconContainer-BoEF3o2r.js";import"./useBaseUiId-OTe5-im2.js";import"./InternalBackdrop-BPj_TBK1.js";import"./composite-B78RY0fg.js";import"./index-B2iIKgXF.js";import"./index-BBPJ8Eu5.js";import"./index-BUB8f-4u.js";import"./useEventCallback-CoqlHeZD.js";import"./SkeletonBar-BGWBNq_c.js";import"./LoadingCell-C7hny8Vq.js";import"./ColumnConfigDialog-BkYWJ2uE.js";import"./DraggableList-C0Zv9f2L.js";import"./search-D9IvXS9T.js";import"./Input-CdlLpAfh.js";import"./useControlled-B7b0Wh0w.js";import"./Button-Dlb0le5d.js";import"./small-cross-BIkOoKCV.js";import"./ActionButton-CLNjgvvR.js";import"./Checkbox-B7wtTxsv.js";import"./useValueChanged-DcBO1Vf5.js";import"./CollapsiblePanel-CTr3LnIy.js";import"./MultiColumnSortDialog-ChiIWlqj.js";import"./MenuTrigger-DppHTV_i.js";import"./CompositeItem-Bl0A6RCo.js";import"./ToolbarRootContext-CROAvwzr.js";import"./getDisabledMountTransitionStyles-CLcMIQgP.js";import"./getPseudoElementBounds-CFV9xEQW.js";import"./chevron-down-CTZm-1e2.js";import"./index-DKyvBMeQ.js";import"./error-DlnosDW0.js";import"./BaseCbacBanner-BxoBY9ee.js";import"./makeExternalStore-CncG39Al.js";import"./Tooltip-B33Nx4ET.js";import"./PopoverPopup-DGYqwH-3.js";import"./debounce-BT0ZhofM.js";import"./tick-D66Od4kk.js";import"./DropdownField-BiBKyvt-.js";import"./isEqual-DpXT7La4.js";import"./withOsdkMetrics-_cs1V2V6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
