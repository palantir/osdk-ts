import{j as r}from"./iframe-C7u8teZW.js";import{O as b}from"./object-table-CyvMeLHX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BtdK8QRI.js";import{u as g}from"./useOsdkClient-C3xSadaC.js";import"./preload-helper-BksW-fLa.js";import"./Table-CDMydSky.js";import"./index-BhN64Vkr.js";import"./Dialog-DE1Pcah0.js";import"./cross-DxUgqzoH.js";import"./svgIconContainer-BCJkHoyI.js";import"./useBaseUiId-DhUQmONl.js";import"./InternalBackdrop-CiuI9iXh.js";import"./composite-zfEBFY2E.js";import"./index-ClHt_xjm.js";import"./index-B0vLTinM.js";import"./index-BfFTxu65.js";import"./useEventCallback-BFNSOXZ0.js";import"./SkeletonBar-Cx2TnRLV.js";import"./LoadingCell-CfumBpKG.js";import"./ColumnConfigDialog-CuV0HQkQ.js";import"./DraggableList-BBkY3ia_.js";import"./search-D1b21RXS.js";import"./Input-CkX7hrVd.js";import"./useControlled-wz_zz6UQ.js";import"./Button-ItUG0RJE.js";import"./small-cross-BXAWZBeP.js";import"./ActionButton-hbhMcRNO.js";import"./Checkbox-CJT7DI4o.js";import"./useValueChanged-BeaCU65z.js";import"./CollapsiblePanel-GTw3JwtT.js";import"./MultiColumnSortDialog-CfXR7DTa.js";import"./MenuTrigger-eEIm7O2K.js";import"./CompositeItem-DBCCEsi2.js";import"./ToolbarRootContext-CtUE7M4a.js";import"./getDisabledMountTransitionStyles-NTCPfN1w.js";import"./getPseudoElementBounds-CERtdroa.js";import"./chevron-down-CkA7RfLP.js";import"./index-CWtS_zs6.js";import"./error-CEH3koMg.js";import"./BaseCbacBanner-D-xiZ6RB.js";import"./makeExternalStore-MBK88X8R.js";import"./Tooltip-CMWksZUd.js";import"./PopoverPopup-20OsJ-7t.js";import"./debounce-CiptvIy5.js";import"./tick-yfLFJlQJ.js";import"./DropdownField-C_ts6lDO.js";import"./isEqual-BH4pI4eI.js";import"./withOsdkMetrics-GebS3Gu5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
