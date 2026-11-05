import{j as r}from"./iframe-Deuk3WWS.js";import{O as b}from"./object-table-sRmdC6uV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DexoNXRr.js";import{u as g}from"./useOsdkClient-CXg2SlsO.js";import"./preload-helper-BBagj194.js";import"./Table-ZZV9SBNc.js";import"./index-6Crz7A4k.js";import"./Dialog-BrM9AM2P.js";import"./cross-BVTbes25.js";import"./svgIconContainer-B5ALG4eV.js";import"./useBaseUiId-C0TzrPg5.js";import"./InternalBackdrop-BSAjnJ8q.js";import"./composite-CHecoTnn.js";import"./index-CLNZjEzY.js";import"./index-T88N5Ozy.js";import"./index-DdVo18Pi.js";import"./useEventCallback-Cb6Txe3l.js";import"./SkeletonBar-DSTTd06h.js";import"./LoadingCell-C4glawo5.js";import"./ColumnConfigDialog-DWZYx-xr.js";import"./DraggableList-8AUjWbzX.js";import"./search-CbQ17IfG.js";import"./Input-DB3pzys-.js";import"./useControlled-Ck5NZ_4o.js";import"./Button-NLGJUEdX.js";import"./small-cross-B4XcSwLB.js";import"./ActionButton-DFvwDNjB.js";import"./Checkbox-DDVVlV2I.js";import"./useValueChanged-BgV54nDS.js";import"./CollapsiblePanel-4fPAfwdp.js";import"./MultiColumnSortDialog-DaRilF2v.js";import"./MenuTrigger-Cmuj0DWR.js";import"./CompositeItem-D95IUf9G.js";import"./ToolbarRootContext-BQx_lx6V.js";import"./getDisabledMountTransitionStyles-jk1RFGGJ.js";import"./getPseudoElementBounds-BDKVNpp1.js";import"./chevron-down-CzdIHmMJ.js";import"./index-BOxz8-qW.js";import"./error-kMW-uU3e.js";import"./BaseCbacBanner-6dmNgK7x.js";import"./makeExternalStore-C0hhujMA.js";import"./Tooltip-BV34caG_.js";import"./PopoverPopup-Bqj9UCPW.js";import"./debounce-BRZYJGiS.js";import"./tick-DMuR0LZC.js";import"./DropdownField-BUzKXDS6.js";import"./isEqual-DR-npGts.js";import"./withOsdkMetrics-ZZvmUZ78.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
