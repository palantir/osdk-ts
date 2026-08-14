import{j as r}from"./iframe-CQ8GnM4F.js";import{O as b}from"./object-table-BPqZt8Xh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cda_Hagl.js";import{u as g}from"./useOsdkClient-DswCZ-gI.js";import"./preload-helper-DTHymVTT.js";import"./Table-BqwFxCuG.js";import"./index-D-qb5elk.js";import"./Dialog-BiR9_kSU.js";import"./cross-B-B76LsO.js";import"./svgIconContainer-CFj_QVpE.js";import"./useBaseUiId-DNylri0h.js";import"./InternalBackdrop-Bnpz9z3C.js";import"./composite-D8Op5omk.js";import"./index-CBfM1eTV.js";import"./index-vRbi-hPZ.js";import"./index-CWxTPRvQ.js";import"./useEventCallback-CwBNysST.js";import"./SkeletonBar-Co95I2t2.js";import"./LoadingCell-DWloxnsX.js";import"./ColumnConfigDialog-CruqBtkT.js";import"./DraggableList-QH52Hljs.js";import"./search-BD7N_Px9.js";import"./Input-DxXc3FHJ.js";import"./useControlled-Nzu8rvWU.js";import"./Button-D03uZiM4.js";import"./small-cross-Dd0EKvPu.js";import"./ActionButton-C1IWap4H.js";import"./Checkbox-CG60OHSc.js";import"./useValueChanged--dnQ0E3_.js";import"./CollapsiblePanel-CjOn5bi3.js";import"./MultiColumnSortDialog-CtGjZ3gI.js";import"./MenuTrigger-BkjkPR8E.js";import"./CompositeItem-DUQ-QWk-.js";import"./ToolbarRootContext-Cuym0TD9.js";import"./getDisabledMountTransitionStyles-COIZu6QW.js";import"./getPseudoElementBounds-_QKh0K1T.js";import"./chevron-down-ELLpGOmV.js";import"./index-Il0eZ9cQ.js";import"./error-BTrU7oox.js";import"./BaseCbacBanner-D8j1QTMP.js";import"./makeExternalStore-DtmpZgSb.js";import"./Tooltip-CrdnIALV.js";import"./PopoverPopup-Bw_tKaRO.js";import"./debounce-Drhc6M_Y.js";import"./tick-YtV6mj8r.js";import"./DropdownField--HKs-g6O.js";import"./isEqual-CfQIWlQk.js";import"./withOsdkMetrics-D2yFydsJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
