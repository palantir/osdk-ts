import{j as r}from"./iframe-DCMw_0TW.js";import{O as b}from"./object-table-Ccj31N5H.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DgbZxwV_.js";import{u as g}from"./useOsdkClient-wDDgD5tN.js";import"./preload-helper-nzNuDSAv.js";import"./Table-Dm-UUELM.js";import"./index-tQLNAeTv.js";import"./Dialog-Dnb7OeiM.js";import"./cross-orOEa1Of.js";import"./svgIconContainer-BuqYbofr.js";import"./useBaseUiId-D30K99H9.js";import"./InternalBackdrop-BB5KU1pv.js";import"./composite-BEUqKf6u.js";import"./index-Dk4-JQXx.js";import"./index-Xc5_iOPx.js";import"./index-DGqnKBQq.js";import"./useEventCallback-Dlb3_nai.js";import"./SkeletonBar-DGgKxMsR.js";import"./LoadingCell-Bo92g5D3.js";import"./ColumnConfigDialog-svntpNOd.js";import"./DraggableList-dWs199Tn.js";import"./search-3SCesORj.js";import"./Input-Ct67CszU.js";import"./useControlled-glFhf02I.js";import"./Button-DrHRwo7L.js";import"./small-cross-bQOb3ZfY.js";import"./ActionButton-CqBl5clt.js";import"./Checkbox-CC3H_6dm.js";import"./useValueChanged-BExaB3du.js";import"./CollapsiblePanel-udeHAS2R.js";import"./MultiColumnSortDialog-Z4gbQ2sB.js";import"./MenuTrigger-BHi5YxlN.js";import"./CompositeItem-DAFo6DYX.js";import"./ToolbarRootContext-DAgpPS14.js";import"./getDisabledMountTransitionStyles-DePFxOFo.js";import"./getPseudoElementBounds-DTBnQrKu.js";import"./chevron-down-CwIymZzb.js";import"./index-B3cn-YUq.js";import"./error-CThwrDAU.js";import"./BaseCbacBanner-HqMibrZO.js";import"./makeExternalStore-CaxsUcIE.js";import"./Tooltip-BIR0svY2.js";import"./PopoverPopup-D-oy58Yh.js";import"./debounce-B-rnFVFg.js";import"./tick-DWb-Pi96.js";import"./DropdownField-5tJgHFby.js";import"./isEqual-eGrV7ep1.js";import"./withOsdkMetrics-Cz4cYYHT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
