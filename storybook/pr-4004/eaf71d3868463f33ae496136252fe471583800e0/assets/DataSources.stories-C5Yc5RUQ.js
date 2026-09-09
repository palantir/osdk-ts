import{j as r}from"./iframe-CSNnL1Y0.js";import{O as b}from"./object-table-DrZtU1b5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DvdwvuHR.js";import{u as g}from"./useOsdkClient-CLYLA36V.js";import"./preload-helper-PMc3ZHFF.js";import"./Table-B-CWlgGW.js";import"./index-DNTkQvxm.js";import"./Dialog-VL2ZkQk7.js";import"./cross-Bg_IlbQu.js";import"./svgIconContainer-CM8I1f8r.js";import"./useBaseUiId-pX-EM4Dz.js";import"./InternalBackdrop-B8dtNrQn.js";import"./composite-BlH-_uKm.js";import"./index-BzmaCTEY.js";import"./index-CIw5v7jp.js";import"./index-sKOwD7Lf.js";import"./useEventCallback-D15AXOzW.js";import"./SkeletonBar-CzJzlOLW.js";import"./LoadingCell-ByXqEWok.js";import"./ColumnConfigDialog-YcnoWLiU.js";import"./DraggableList-C268AYO6.js";import"./search-BPPJCzpv.js";import"./Input-bh0XwuT_.js";import"./useControlled-CLpZ-2U1.js";import"./Button-B6Txaqgo.js";import"./small-cross-D9O7TL9e.js";import"./ActionButton-B5fjrdh8.js";import"./Checkbox-8nyxSN9Y.js";import"./useValueChanged-DcOG8dba.js";import"./CollapsiblePanel-QQw2ylt-.js";import"./MultiColumnSortDialog-BXJtnpCu.js";import"./MenuTrigger-CjuSuj7u.js";import"./CompositeItem-DxYljjwU.js";import"./ToolbarRootContext-DVTpeAWc.js";import"./getDisabledMountTransitionStyles-CxBhjcps.js";import"./getPseudoElementBounds-DvtLYcgZ.js";import"./chevron-down-BBAfQF9b.js";import"./index-CP8GV_wH.js";import"./error-BFicHv-u.js";import"./BaseCbacBanner-B9xwQlPo.js";import"./makeExternalStore-19MZWFoq.js";import"./Tooltip-59zWJjq9.js";import"./PopoverPopup-DtGqPexC.js";import"./debounce-BzipLUSU.js";import"./tick-Cl0RaH8k.js";import"./DropdownField-QGFslIVN.js";import"./isEqual-DQCqzWyC.js";import"./withOsdkMetrics-DmF4idxC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
