import{j as r}from"./iframe-CHFOhFuc.js";import{O as b}from"./object-table-BEAVPppC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dy-6k1e_.js";import{u as g}from"./useOsdkClient-Ct6LLa9L.js";import"./preload-helper-B-1rSRgY.js";import"./Table-BHXrFrp1.js";import"./index-BpX6hENj.js";import"./Dialog-DavrQYlA.js";import"./cross-CLtam5MT.js";import"./svgIconContainer-zzwTq_t7.js";import"./useBaseUiId-CpuSZ-O9.js";import"./InternalBackdrop-D25Nk_lQ.js";import"./composite-C909Fk53.js";import"./index-DQOrZvkv.js";import"./index-BvRLFMPY.js";import"./index-DjQ198rg.js";import"./useEventCallback-7PhX1npr.js";import"./SkeletonBar-Ptzyivem.js";import"./LoadingCell-vyjlReTb.js";import"./ColumnConfigDialog-Dtl1NBcg.js";import"./DraggableList-CpD9hN98.js";import"./search-Ct1jR5-1.js";import"./Input-D8YBib2L.js";import"./useControlled-Cnl8z_DZ.js";import"./Button-DHQU-3rC.js";import"./small-cross-Bo2NjBLu.js";import"./ActionButton-DCWXOHbb.js";import"./Checkbox-5_fa2xH5.js";import"./useValueChanged-B0fjg5Tm.js";import"./CollapsiblePanel-qGGyMRYk.js";import"./MultiColumnSortDialog-0LmFuPWU.js";import"./MenuTrigger-C96UvIX6.js";import"./CompositeItem-V52V_N8R.js";import"./ToolbarRootContext-D3CnJ-Kn.js";import"./getDisabledMountTransitionStyles-cR1rxtQJ.js";import"./getPseudoElementBounds-FCd8iOYs.js";import"./chevron-down-DDx-Wnyx.js";import"./index-ClhHXn3z.js";import"./error-2828ta47.js";import"./BaseCbacBanner-AWNQAETM.js";import"./makeExternalStore-CXAxXc_Y.js";import"./Tooltip-tSbifett.js";import"./PopoverPopup-DHn0uRpX.js";import"./debounce-BuVF__lb.js";import"./tick-CVF34xif.js";import"./DropdownField-CwxAz57O.js";import"./isEqual-JWCoBpvi.js";import"./withOsdkMetrics-BHwUIoHR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
