import{j as r}from"./iframe-CNaoCaD-.js";import{O as b}from"./object-table-Dv8WFw4M.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bfn2j6k0.js";import{u as g}from"./useOsdkClient-D_c3zo70.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CJJJF1mi.js";import"./index-D0c6s8Wh.js";import"./Dialog-CYE5QabX.js";import"./cross-BAAhVfqY.js";import"./svgIconContainer-DMxMunFc.js";import"./useBaseUiId-BLzWWyTo.js";import"./InternalBackdrop-DyZTC2Np.js";import"./composite-DI12gblL.js";import"./index-CO70LKAy.js";import"./index-bkL56BYD.js";import"./index-CSDWflQO.js";import"./useEventCallback-BrzJPUe-.js";import"./SkeletonBar-CtWeGlbs.js";import"./LoadingCell-DUGd5kLz.js";import"./ColumnConfigDialog-VZ7pVwTS.js";import"./DraggableList-CRMLmkvs.js";import"./search-ORWNQV-Y.js";import"./Input-BBHZGssD.js";import"./useControlled-DxXwsmI6.js";import"./Button-DnaSBDda.js";import"./small-cross-C9OctJ-L.js";import"./ActionButton-ZoDGCRxC.js";import"./Checkbox-BRNaMGYm.js";import"./useValueChanged-utG5gEoU.js";import"./CollapsiblePanel-DOMeHPZv.js";import"./MultiColumnSortDialog-_dMBWUMX.js";import"./MenuTrigger-BmwUumsZ.js";import"./CompositeItem-DGSUi3Oj.js";import"./ToolbarRootContext-C6YFR30y.js";import"./getDisabledMountTransitionStyles-D7USJ7g2.js";import"./getPseudoElementBounds-CYw6K46U.js";import"./chevron-down-LMtkkQTV.js";import"./index-CbXbemY1.js";import"./error-CEVIMozV.js";import"./BaseCbacBanner-BB1L2uA5.js";import"./makeExternalStore-DdM6Dx34.js";import"./Tooltip-Dt3tWdRA.js";import"./PopoverPopup-BPcvF2qn.js";import"./debounce-9NycXt_B.js";import"./tick-DOziRHZF.js";import"./DropdownField-BSsZW_49.js";import"./isEqual-DZnhSfZI.js";import"./withOsdkMetrics-C088wNt_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
