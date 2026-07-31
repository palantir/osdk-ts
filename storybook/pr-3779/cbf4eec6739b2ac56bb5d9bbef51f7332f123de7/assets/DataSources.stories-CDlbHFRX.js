import{j as r}from"./iframe-DNerilao.js";import{O as b}from"./object-table-Ddu8P3lV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8a-HVqV.js";import{u as g}from"./useOsdkClient-DYiYcc_i.js";import"./preload-helper-WYz0P8cg.js";import"./Table-B6btHYvr.js";import"./index-UbhKAx_n.js";import"./Dialog-B3nn5uUX.js";import"./cross-CVNZ4V9L.js";import"./svgIconContainer-3RPFCLDD.js";import"./useBaseUiId-C28jYwd5.js";import"./InternalBackdrop-Cus3nU-E.js";import"./composite-DxCnjG5P.js";import"./index-BEpimtGK.js";import"./index-DW0TONpD.js";import"./index-Dm3y5sdg.js";import"./useEventCallback-DPU3s-wr.js";import"./SkeletonBar-DDQ6_G8g.js";import"./LoadingCell-egB3v6uB.js";import"./ColumnConfigDialog-1cW1mEGU.js";import"./DraggableList-DwxlEsps.js";import"./search-Cct-baVl.js";import"./Input-Dmwb3bCD.js";import"./useControlled-BeDJM6mu.js";import"./isEqual-CQxno1d7.js";import"./isObject-DUGnZj1p.js";import"./Button-C82OcTXa.js";import"./ActionButton-CnUu2kxN.js";import"./Checkbox-BpdbYrjg.js";import"./useValueChanged-D49W-h_t.js";import"./CollapsiblePanel-EFO2eQBO.js";import"./MultiColumnSortDialog-vg5TyA02.js";import"./MenuTrigger-B0wYFE8g.js";import"./CompositeItem-Br2r_HtI.js";import"./ToolbarRootContext-E7gsUtdU.js";import"./getDisabledMountTransitionStyles-DLlmypTn.js";import"./getPseudoElementBounds-tOVfKU3-.js";import"./chevron-down-BkPpJX9T.js";import"./index-BB87TWEZ.js";import"./error-D1U1Mhs7.js";import"./BaseCbacBanner-CMoWbRAT.js";import"./makeExternalStore-B9VO-zPd.js";import"./Tooltip-DRpNHLk-.js";import"./PopoverPopup-CcFSqCWf.js";import"./toNumber-DrXZ7Hge.js";import"./tick-CNb3mBg-.js";import"./DropdownField-B1G0Thjb.js";import"./withOsdkMetrics-iOKaPPya.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
