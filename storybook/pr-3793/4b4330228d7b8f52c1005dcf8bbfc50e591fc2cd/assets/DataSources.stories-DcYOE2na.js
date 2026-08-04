import{j as r}from"./iframe-B6WQQhy8.js";import{O as b}from"./object-table-BFB8XBQ_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DmKqNyHI.js";import{u as g}from"./useOsdkClient-CE-RTGap.js";import"./preload-helper-ChsmwISn.js";import"./Table-BJ48fYQb.js";import"./index-CZJ7wKSS.js";import"./Dialog-TiXVZi4t.js";import"./cross-DTGtSarw.js";import"./svgIconContainer-L79qlVtg.js";import"./useBaseUiId-qIW79UrF.js";import"./InternalBackdrop-DfDtW0xk.js";import"./composite-CHtKDR7j.js";import"./index-DovvsuXm.js";import"./index-JE_lKjA0.js";import"./index-DACugfUF.js";import"./useEventCallback-DB4LvSLv.js";import"./SkeletonBar-C_dRKANi.js";import"./LoadingCell-xWLJzCPm.js";import"./ColumnConfigDialog-CNH35am9.js";import"./DraggableList-Cb-QDuSG.js";import"./search-CFJ6Aknr.js";import"./Input-CBrPnRp5.js";import"./useControlled-CPqJu1d3.js";import"./isEqual-D7FEOiUM.js";import"./isObject-fWvF7JaM.js";import"./Button-5VoPTOux.js";import"./ActionButton-DH98knHC.js";import"./Checkbox-lYIsmAdD.js";import"./useValueChanged-DNKi3Im-.js";import"./CollapsiblePanel-Drauktfl.js";import"./MultiColumnSortDialog-BIPX08HG.js";import"./MenuTrigger-BDitvKcK.js";import"./CompositeItem-CYbk5fSZ.js";import"./ToolbarRootContext-BuUE0P6o.js";import"./getDisabledMountTransitionStyles-DPtRIq4D.js";import"./getPseudoElementBounds-DaSGSTHJ.js";import"./chevron-down-Dxw3b8ee.js";import"./index-BK5Yiwqs.js";import"./error-yDqP26O9.js";import"./BaseCbacBanner-wpa3ZMwy.js";import"./makeExternalStore-CjXhJZfv.js";import"./Tooltip-CHk_byN0.js";import"./PopoverPopup-_sbYg48w.js";import"./toNumber-0Syk-GH5.js";import"./tick-Dyh4bebE.js";import"./DropdownField-CNVZC72F.js";import"./withOsdkMetrics-DQOgFRz6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
