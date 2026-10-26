import{j as r}from"./iframe-DXehzrLy.js";import{O as b}from"./object-table-eq6MmzNO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DIWdoci1.js";import{u as g}from"./useOsdkClient-DcXtZI_6.js";import"./preload-helper-kK_P88Zt.js";import"./Table-BrjIQUiH.js";import"./index-CXAIDCBV.js";import"./Dialog-DSREPINS.js";import"./cross-CRuTMTSr.js";import"./svgIconContainer-DQDL5XU9.js";import"./useBaseUiId-DZnCUGwj.js";import"./InternalBackdrop-CT6Wdma2.js";import"./composite-DYr_GRHn.js";import"./index-D0HNivTS.js";import"./index-BZAJEyr8.js";import"./index-Dnoineba.js";import"./useEventCallback-CZG_LILO.js";import"./SkeletonBar-DJmf5vx2.js";import"./LoadingCell-B_gs1veW.js";import"./ColumnConfigDialog-BY_QY2kY.js";import"./DraggableList-DzeBMc9N.js";import"./search-DeuEp5ow.js";import"./Input-CpfpiQM-.js";import"./useControlled-Dzo11YgF.js";import"./Button-arOEvFAs.js";import"./small-cross-VrEzkJ3d.js";import"./ActionButton-t4tgv0qW.js";import"./Checkbox-Dkrna0kS.js";import"./useValueChanged-CFb9BlJL.js";import"./CollapsiblePanel-Cc67GzP9.js";import"./MultiColumnSortDialog-wPam3DYq.js";import"./MenuTrigger-Cs-Esf_B.js";import"./CompositeItem-B8unsUL4.js";import"./ToolbarRootContext-CjkOTyMm.js";import"./getDisabledMountTransitionStyles-DTMwFgZF.js";import"./getPseudoElementBounds-CdE3xhre.js";import"./chevron-down-D0FRwBSH.js";import"./index-19DjQapZ.js";import"./error-DuLOR7GK.js";import"./BaseCbacBanner-CZebZxFt.js";import"./makeExternalStore-CXnsRNRI.js";import"./Tooltip-D3vpqYyy.js";import"./PopoverPopup-BMj9dgf7.js";import"./debounce-Bq9WTc_K.js";import"./tick-D67MiW11.js";import"./DropdownField-CNXn3QuQ.js";import"./isEqual-D-xvKB5X.js";import"./withOsdkMetrics-CA3oK6ip.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
