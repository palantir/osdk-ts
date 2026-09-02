import{j as r}from"./iframe-DwvgFPBy.js";import{O as b}from"./object-table-CXKpt07o.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BI3NWhmG.js";import{u as g}from"./useOsdkClient-iGOi41gt.js";import"./preload-helper-CtrM-3nz.js";import"./Table-Cm0rz_NM.js";import"./index-ChfnPNU9.js";import"./Dialog-DLD-dzbs.js";import"./cross-C1oe8vnK.js";import"./svgIconContainer-BgKykxWQ.js";import"./useBaseUiId-CHF1IBcr.js";import"./InternalBackdrop-y3P75jrX.js";import"./composite-DuoDUKUH.js";import"./index-DUsIeEWR.js";import"./index-DngtPiIB.js";import"./index-Ci5_X35m.js";import"./useEventCallback-CIsii_JD.js";import"./SkeletonBar-Bn99OlYx.js";import"./LoadingCell-BRbaSXfJ.js";import"./ColumnConfigDialog-Dcl4ko7X.js";import"./DraggableList-DSK4wI_k.js";import"./search--SWXDnoj.js";import"./Input-DlFD1yhx.js";import"./useControlled-De5DdgKM.js";import"./Button-C57imQCz.js";import"./small-cross-DpGXyKJ4.js";import"./ActionButton-C-TLgUTf.js";import"./Checkbox-2PgC4d7Q.js";import"./useValueChanged-Bcki-2R3.js";import"./CollapsiblePanel-D7GWkiYF.js";import"./MultiColumnSortDialog-D1zVQuJa.js";import"./MenuTrigger-C-ZbLY8r.js";import"./CompositeItem-DAydT348.js";import"./ToolbarRootContext-CV_vZDG6.js";import"./getDisabledMountTransitionStyles-DtUQJxPB.js";import"./getPseudoElementBounds-CKc4TuSq.js";import"./chevron-down-OGN5YYQ1.js";import"./index-C2pnKJHd.js";import"./error-BqWzkB-Q.js";import"./BaseCbacBanner-DWENoj45.js";import"./makeExternalStore-DVeA--Ja.js";import"./Tooltip-C7bhQ5Z_.js";import"./PopoverPopup-CsviCyMF.js";import"./debounce-DnXDfGow.js";import"./tick-BXa19xuR.js";import"./DropdownField-BidCZ1Wu.js";import"./isEqual-DFbmaofx.js";import"./withOsdkMetrics-qh2Z3PSD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
