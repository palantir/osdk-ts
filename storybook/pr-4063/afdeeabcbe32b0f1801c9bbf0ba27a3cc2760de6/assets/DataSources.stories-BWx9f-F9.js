import{j as r}from"./iframe-Cb7UimVT.js";import{O as b}from"./object-table-Bl6p5AkH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DL-henTk.js";import{u as g}from"./useOsdkClient-C4al__C_.js";import"./preload-helper-DGUTmafK.js";import"./Table-CPp9NhPo.js";import"./index-BIGxdzOf.js";import"./Dialog-Cg5ukvNW.js";import"./cross-CSr-jiik.js";import"./svgIconContainer-ByYucP5b.js";import"./useBaseUiId-iGVUlg7M.js";import"./InternalBackdrop-DFmtA5di.js";import"./composite-DbE7UY6k.js";import"./index-BOZbfH9s.js";import"./index-DSTszXnE.js";import"./index-DvKhcYIs.js";import"./useEventCallback-B_YCllCJ.js";import"./SkeletonBar-SWTHAMDy.js";import"./LoadingCell-Dl7N8ehE.js";import"./ColumnConfigDialog-DAMmLI1o.js";import"./DraggableList-IRlLZjUg.js";import"./search-CFBfi85w.js";import"./Input-k33bDy71.js";import"./useControlled-rmviEhSc.js";import"./Button-DpmbPgxa.js";import"./small-cross-kV31ju_J.js";import"./ActionButton-C961uo5z.js";import"./Checkbox-BGKCkJG7.js";import"./useValueChanged-CWhjY4_u.js";import"./CollapsiblePanel-leyJJrVG.js";import"./MultiColumnSortDialog-xFTI6C2S.js";import"./MenuTrigger-SRM0JwgO.js";import"./CompositeItem-BWbQHkr6.js";import"./ToolbarRootContext-BZu2CGWG.js";import"./getDisabledMountTransitionStyles-CWTpf6lp.js";import"./getPseudoElementBounds-1Qmdk9bj.js";import"./chevron-down-DGQwsfv-.js";import"./index-DWXDMbEi.js";import"./error-DCdQoOyW.js";import"./BaseCbacBanner-pvyRvv-D.js";import"./makeExternalStore-CitLye_P.js";import"./Tooltip-A0fu90b6.js";import"./PopoverPopup-Bw13Ouax.js";import"./debounce-BawLAvkZ.js";import"./tick-4A7mewJX.js";import"./DropdownField-ij81B06R.js";import"./isEqual-CQHqDVQt.js";import"./withOsdkMetrics-BMDPVH0d.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
