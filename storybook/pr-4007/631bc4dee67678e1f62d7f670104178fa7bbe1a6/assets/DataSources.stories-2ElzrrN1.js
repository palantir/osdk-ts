import{j as r}from"./iframe-BU8GFPxQ.js";import{O as b}from"./object-table-WiGfrNuV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-oFTA3jn0.js";import{u as g}from"./useOsdkClient-CxUbeAk0.js";import"./preload-helper-BSSMxuAV.js";import"./Table-_iLj8Rwt.js";import"./index-Bj-f6_Qj.js";import"./Dialog-BRZ_Mhxt.js";import"./cross-DWZb8fnb.js";import"./svgIconContainer-TGaOK_qc.js";import"./useBaseUiId-BwjQR-o4.js";import"./InternalBackdrop-4G36EFVK.js";import"./composite-Boe3qmtr.js";import"./index-RL0-TRLi.js";import"./index-BXjwg4tu.js";import"./index-C_kynsOY.js";import"./useEventCallback-DG6Athm7.js";import"./SkeletonBar-CPA8YoA_.js";import"./LoadingCell-xe8P1haw.js";import"./ColumnConfigDialog-BFPCLBzz.js";import"./DraggableList-DseQHdl8.js";import"./search-BzzxBGZs.js";import"./Input-BKDA3F0b.js";import"./useControlled-D1XH3a1Z.js";import"./Button-BVSo85zW.js";import"./small-cross-ByWRQaND.js";import"./ActionButton-DwMdzrCh.js";import"./Checkbox-JGOrpztY.js";import"./useValueChanged-DEn3Bp16.js";import"./CollapsiblePanel-DvEibyNb.js";import"./MultiColumnSortDialog-D8RzlB43.js";import"./MenuTrigger-wpqOhd9z.js";import"./CompositeItem-CKxdCuih.js";import"./ToolbarRootContext-C_zt0aic.js";import"./getDisabledMountTransitionStyles-DdQ32HlV.js";import"./getPseudoElementBounds-CVkJL-hX.js";import"./chevron-down-Cmk3gaNN.js";import"./index-DzgdnyuN.js";import"./error-DmWc08dY.js";import"./BaseCbacBanner-DDbqCS2g.js";import"./makeExternalStore-BQ9uq3hP.js";import"./Tooltip-_KniFWIt.js";import"./PopoverPopup-DzgCN5FT.js";import"./debounce-CEAcWSfb.js";import"./tick-p7Xjilvh.js";import"./DropdownField-B8coeO1y.js";import"./isEqual-trZ89Cy7.js";import"./withOsdkMetrics-NEaJKOCO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
