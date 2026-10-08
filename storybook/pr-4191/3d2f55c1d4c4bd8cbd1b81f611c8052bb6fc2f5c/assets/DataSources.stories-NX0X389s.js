import{j as r}from"./iframe-B1-dVNhS.js";import{O as b}from"./object-table-uYmiqrJw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_NUwFg8.js";import{u as g}from"./useOsdkClient-2-pImquH.js";import"./preload-helper-C2ProuBv.js";import"./Table-DCX1dool.js";import"./index-WzbH8_Sp.js";import"./Dialog-CcYcAsyi.js";import"./cross-DSyUk5jg.js";import"./svgIconContainer-wdLWihrJ.js";import"./useBaseUiId-B6R5LUY3.js";import"./InternalBackdrop-BOiIRLua.js";import"./composite-GFxhGtPY.js";import"./index-Dh-RbIId.js";import"./index-E0TiBTDQ.js";import"./index-xcHgmafl.js";import"./useEventCallback-B1rXS-nA.js";import"./SkeletonBar-BhH-zFkC.js";import"./LoadingCell-DCoKmcMd.js";import"./ColumnConfigDialog-ChPHNMhu.js";import"./DraggableList-C7uNSywG.js";import"./search-D_Yyj-29.js";import"./Input-DcCcX-hv.js";import"./useControlled-CY-lWJZk.js";import"./Button-B1lo8D22.js";import"./small-cross-BbKGzC12.js";import"./ActionButton-DYfOCnDA.js";import"./Checkbox-DHvhHlPX.js";import"./useValueChanged-DJpQ9JpS.js";import"./CollapsiblePanel-C7cdbtZi.js";import"./MultiColumnSortDialog-BrkvTRbF.js";import"./MenuTrigger-ysqRk_bn.js";import"./CompositeItem-BkBiNRQD.js";import"./ToolbarRootContext-1bs6h0vw.js";import"./getDisabledMountTransitionStyles-Ekj_ahAn.js";import"./getPseudoElementBounds-CdXmde03.js";import"./chevron-down-DucaWjk_.js";import"./index-C7eChUSe.js";import"./error-mrqVIVBz.js";import"./BaseCbacBanner-CQf5ghEo.js";import"./makeExternalStore-WUBDRAE1.js";import"./Tooltip-DTMQ2lEm.js";import"./PopoverPopup-x43Mxd5d.js";import"./debounce-Cr9XR4am.js";import"./tick-DdK_sq_c.js";import"./DropdownField-DFuV0D7k.js";import"./isEqual-BQ42eRcw.js";import"./withOsdkMetrics-ijmPCvgt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
