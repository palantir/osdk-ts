import{j as r}from"./iframe-DfWRDQYW.js";import{O as b}from"./object-table-0ELPGqBW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CHSVN8Ib.js";import{u as g}from"./useOsdkClient-ClcuriQB.js";import"./preload-helper-DztOS3mh.js";import"./Table-1X9IgMXG.js";import"./index-V0duYaOI.js";import"./Dialog-C4bIPlLo.js";import"./cross-MjnJnae7.js";import"./svgIconContainer-Djmd0i7i.js";import"./useBaseUiId-CnljwGyr.js";import"./InternalBackdrop-DoRzr-yp.js";import"./composite-BvmRb9Ju.js";import"./index-BhBX8uvN.js";import"./index-DMKrGJHK.js";import"./index-DYScCha7.js";import"./useEventCallback-CYayy9CC.js";import"./SkeletonBar-CySSdz1h.js";import"./LoadingCell-DAkz6DbJ.js";import"./ColumnConfigDialog-U4Rq4-2Y.js";import"./DraggableList-RGn9snj7.js";import"./search-Dxbg6ZmT.js";import"./Input-DIDbgdBf.js";import"./useControlled-DFU1H8fZ.js";import"./Button-OSZ8RwgD.js";import"./small-cross-njJyO2z5.js";import"./ActionButton-B83nj9fh.js";import"./Checkbox-YVP5nlwK.js";import"./useValueChanged-BHeWLU1X.js";import"./CollapsiblePanel-BDCG0rsw.js";import"./MultiColumnSortDialog-Bc2CB9nf.js";import"./MenuTrigger-Do_XoF9D.js";import"./CompositeItem-Bp9WguhV.js";import"./ToolbarRootContext-DK75y1Fb.js";import"./getDisabledMountTransitionStyles-C83yZKEJ.js";import"./getPseudoElementBounds-C114fu7w.js";import"./chevron-down-DTtuRFlq.js";import"./index-BPZ3Sv03.js";import"./error-D9hH3fxG.js";import"./BaseCbacBanner-BUUHlDXj.js";import"./makeExternalStore-CSrQpL3l.js";import"./Tooltip-DfRWn6Xg.js";import"./PopoverPopup-DdFaHp8R.js";import"./debounce-Ci0e7f6p.js";import"./tick-BjABB7E4.js";import"./DropdownField-BWEIQf9x.js";import"./isEqual-C6a_kdYK.js";import"./withOsdkMetrics-BqT8ORay.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
