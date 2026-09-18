import{j as r}from"./iframe-BDa8Fqup.js";import{O as b}from"./object-table-Duo4lg5d.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CkXTINsL.js";import{u as g}from"./useOsdkClient-CB0wGX_k.js";import"./preload-helper-C9_zurnG.js";import"./Table-CYQF5AUo.js";import"./index-pjqeNj_i.js";import"./Dialog-Cg2CTckf.js";import"./cross-CptJAf1F.js";import"./svgIconContainer-DdVraw0H.js";import"./useBaseUiId-XTCdzLB-.js";import"./InternalBackdrop-DZXQO9MH.js";import"./composite-DOKDZZ1y.js";import"./index-DR8p4qUn.js";import"./index-DCtmNJWH.js";import"./index-eQmTP4uG.js";import"./useEventCallback-DxebTLhO.js";import"./SkeletonBar-B9ofcDWv.js";import"./LoadingCell-mSFIIUsp.js";import"./ColumnConfigDialog-5KpxiMi7.js";import"./DraggableList-Dc_2VXM_.js";import"./search-DMOASIyP.js";import"./Input-mz3axp_m.js";import"./useControlled-C8kqLhB2.js";import"./Button-By4eZEsF.js";import"./small-cross-nilyHMIW.js";import"./ActionButton-D3yPDPia.js";import"./Checkbox-ufrAG11y.js";import"./useValueChanged-CtmzMV14.js";import"./CollapsiblePanel-IYSRIgVb.js";import"./MultiColumnSortDialog-BkbEvvPV.js";import"./MenuTrigger-CNymGcQW.js";import"./CompositeItem-CxqNqspP.js";import"./ToolbarRootContext-bJCZq9fk.js";import"./getDisabledMountTransitionStyles-DcsKWw9B.js";import"./getPseudoElementBounds-B0Ifv5Xb.js";import"./chevron-down-XbIjVc8V.js";import"./index-CO6Kit7T.js";import"./error-DaHq0ZVm.js";import"./BaseCbacBanner-DHOrp7Nv.js";import"./makeExternalStore-CrFgIlYD.js";import"./Tooltip-BM2piRgB.js";import"./PopoverPopup-DGGaNiSQ.js";import"./debounce-OmcTsIux.js";import"./tick-SdtlPGo8.js";import"./DropdownField-SuU-thQx.js";import"./isEqual-DQMBMUOS.js";import"./withOsdkMetrics-VckxLh6W.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
