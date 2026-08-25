import{j as r}from"./iframe-DrnKYwzt.js";import{O as b}from"./object-table-B4WCOvbA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CzO2QyCQ.js";import{u as g}from"./useOsdkClient-BVIFxFY0.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dd5bbgTK.js";import"./index-DPIZfSwK.js";import"./Dialog-DVFQmxM_.js";import"./cross-DXIDkMuC.js";import"./svgIconContainer-DaVnGh9c.js";import"./useBaseUiId-CFsS7qRQ.js";import"./InternalBackdrop-DfWfg3ug.js";import"./composite-CCKcLmMF.js";import"./index-B5y8rxCa.js";import"./index-CiYDc6_L.js";import"./index-Bisa-WXs.js";import"./useEventCallback-B-Wg4m7c.js";import"./SkeletonBar-Cc2Dg58p.js";import"./LoadingCell-C4YHX9fn.js";import"./ColumnConfigDialog-Df86GpYG.js";import"./DraggableList-CH2Ns8QE.js";import"./search-CLh-nr8U.js";import"./Input-Bed63vhv.js";import"./useControlled-CTk87t76.js";import"./Button-QrXAKlJD.js";import"./small-cross-BLp7dord.js";import"./ActionButton-DnesRqE0.js";import"./Checkbox-C_Bhd5c0.js";import"./useValueChanged-DZ_zqBSU.js";import"./CollapsiblePanel-B6RPHT_f.js";import"./MultiColumnSortDialog-wpAUedQ9.js";import"./MenuTrigger-DUsLBEvk.js";import"./CompositeItem-DupeSBp8.js";import"./ToolbarRootContext-D8ABn96Q.js";import"./getDisabledMountTransitionStyles-Bl-wnC8C.js";import"./getPseudoElementBounds-xbPRU0lb.js";import"./chevron-down-BY9VCrZu.js";import"./index-7JqWaY13.js";import"./error-Cd40ldoN.js";import"./BaseCbacBanner-B6pNmjKQ.js";import"./makeExternalStore-DWwwitH0.js";import"./Tooltip-CUvdbu8d.js";import"./PopoverPopup-6Vyawomv.js";import"./debounce-B8UVLwl7.js";import"./tick-DGaDc00O.js";import"./DropdownField-BYEnn1vN.js";import"./isEqual-CBKxto0y.js";import"./withOsdkMetrics-CulCESkd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
