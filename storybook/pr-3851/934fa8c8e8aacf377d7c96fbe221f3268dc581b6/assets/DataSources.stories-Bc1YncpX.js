import{j as r}from"./iframe-BwyxbMYz.js";import{O as b}from"./object-table-BxtmdX9W.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CB0HjD1p.js";import{u as g}from"./useOsdkClient-CGyb1dMs.js";import"./preload-helper-Ck4OFvFV.js";import"./Table-DcRonUfM.js";import"./index-eVyunh8z.js";import"./Dialog-C5X0AMsU.js";import"./cross-CtafeApd.js";import"./svgIconContainer-cOEOezOx.js";import"./useBaseUiId-Djb3rEs2.js";import"./InternalBackdrop-Dd3Xk-Dc.js";import"./composite-DbDlXcOS.js";import"./index-i1ZIkJqK.js";import"./index-BQkt-qop.js";import"./index-U83mhX69.js";import"./useEventCallback-CltMv-oE.js";import"./SkeletonBar-DjqhLsmr.js";import"./LoadingCell-eAjwk7pb.js";import"./ColumnConfigDialog-CiyiEvIH.js";import"./DraggableList-CNlCo6Kr.js";import"./search-396yxvmZ.js";import"./Input-DDDwFt7C.js";import"./useControlled-Py9LxNrl.js";import"./isEqual-DIRrgwz9.js";import"./isObject-DTwiK1hG.js";import"./Button-CpPh9842.js";import"./ActionButton-BNWfXUgE.js";import"./Checkbox-Dn5Ztj5L.js";import"./useValueChanged-SKNmCQXf.js";import"./CollapsiblePanel-DtfN20b1.js";import"./MultiColumnSortDialog-W19bvlsv.js";import"./MenuTrigger-CGPObCqt.js";import"./CompositeItem-CIt2Luhq.js";import"./ToolbarRootContext-aO87p-2A.js";import"./getDisabledMountTransitionStyles-CivvGP1V.js";import"./getPseudoElementBounds-H-udXKPL.js";import"./chevron-down-DRr_ZByO.js";import"./index-fGT3xXi5.js";import"./error-9Pqn15gd.js";import"./BaseCbacBanner-CNkNpGxu.js";import"./makeExternalStore-dts8SMdL.js";import"./Tooltip-D7nx6rGZ.js";import"./PopoverPopup-BI9lGcbu.js";import"./toNumber-BU-l8znT.js";import"./tick-CvcDBPDK.js";import"./DropdownField-DHsN0P8K.js";import"./withOsdkMetrics-YkGaLtA7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
