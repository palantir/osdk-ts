import{j as r}from"./iframe-COVETwhx.js";import{O as b}from"./object-table-COuU105Y.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DoBSpTz_.js";import{u as g}from"./useOsdkClient-DUa_DGnQ.js";import"./preload-helper-B-xfSmD6.js";import"./Table-pwM_a1S-.js";import"./index-bOxlMW9W.js";import"./Dialog-DUCt0N-S.js";import"./cross-CCyLZ_a3.js";import"./svgIconContainer-gsbuNadi.js";import"./useBaseUiId-2z9ajXTy.js";import"./InternalBackdrop-BaZjvCUN.js";import"./composite-kZubSwMs.js";import"./index-SM4cV6TD.js";import"./index-BadFZGVY.js";import"./index-Dtx0mzcz.js";import"./useEventCallback-XIafyipZ.js";import"./SkeletonBar-CdNxN4hg.js";import"./LoadingCell-CyraqzVp.js";import"./ColumnConfigDialog-C42ZPsPz.js";import"./DraggableList-B2TOzbeH.js";import"./search-2wDgAEqi.js";import"./Input-DDxMXv2L.js";import"./useControlled-eVeEVm0U.js";import"./Button-D7hgHtqc.js";import"./small-cross-BfZtJMTE.js";import"./ActionButton-CWVjt9h4.js";import"./Checkbox-rFGnVT6O.js";import"./useValueChanged-D9aAEcAT.js";import"./CollapsiblePanel-DqoXoaOR.js";import"./MultiColumnSortDialog-CCxOq-4J.js";import"./MenuTrigger-D-v-XyV6.js";import"./CompositeItem-Dg_iEtAz.js";import"./ToolbarRootContext-ra_8dAxJ.js";import"./getDisabledMountTransitionStyles-Czfivuu1.js";import"./getPseudoElementBounds-DSG6kIql.js";import"./chevron-down-Kndiv9KN.js";import"./index-Qpmu02z_.js";import"./error-Dso-ncgj.js";import"./BaseCbacBanner-BdmB5LbT.js";import"./makeExternalStore-BjWwL6YG.js";import"./Tooltip-BPacsOBo.js";import"./PopoverPopup-DUufvOMw.js";import"./debounce-Dc_lQPIE.js";import"./tick-C-EouHxY.js";import"./DropdownField-CgcUEzHA.js";import"./isEqual-dfhg-x8x.js";import"./withOsdkMetrics-DVwyRo2Q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
