import{j as r}from"./iframe-ALAQwSfV.js";import{O as b}from"./object-table-B5Y-FdlO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ClyvYaRI.js";import{u as g}from"./useOsdkClient-KB4bH-DF.js";import"./preload-helper-fLSKrq12.js";import"./Table-y3Ue12x0.js";import"./index-nJZFwjBY.js";import"./Dialog-BqmhBVBc.js";import"./cross-CTj2uYDt.js";import"./svgIconContainer-CsyrjEXm.js";import"./useBaseUiId-BtuLk_tP.js";import"./InternalBackdrop-iwn5b5gf.js";import"./composite-TYYt2fCx.js";import"./index-BYTfgmte.js";import"./index-DvjPzKHT.js";import"./index-DCw12hpD.js";import"./useEventCallback-D7Z-udTV.js";import"./SkeletonBar-tY7bgNdB.js";import"./LoadingCell-iXXN4fTA.js";import"./ColumnConfigDialog-spFlNXIh.js";import"./DraggableList-BvBf5a-L.js";import"./search-6F7M3AuK.js";import"./Input-CFWd2gLa.js";import"./useControlled-f6wr2N38.js";import"./Button-Be4ab6Ld.js";import"./small-cross-Bymv6dJ6.js";import"./ActionButton-CThDEtCo.js";import"./Checkbox-BliZh0Tj.js";import"./useValueChanged-Cmuhto8a.js";import"./CollapsiblePanel-BbDUb0xg.js";import"./MultiColumnSortDialog-BCMdQTO-.js";import"./MenuTrigger-Cs2aHSlk.js";import"./CompositeItem-DbwrFgnX.js";import"./ToolbarRootContext-B_pgtouG.js";import"./getDisabledMountTransitionStyles-_fn-AZLs.js";import"./getPseudoElementBounds-nAdQbUQj.js";import"./chevron-down-nwzUELg0.js";import"./index-DipU2kkl.js";import"./error-fdu9cH2p.js";import"./BaseCbacBanner-xAH7Syu1.js";import"./makeExternalStore-BU7UI9Bv.js";import"./Tooltip-BJAwvsAX.js";import"./PopoverPopup-BM1vQM5s.js";import"./debounce-CCGKB1Tj.js";import"./tick-D6R52cs_.js";import"./DropdownField-DixIy5fE.js";import"./isEqual-iKZ94W8E.js";import"./withOsdkMetrics-Bz9MfpUK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
