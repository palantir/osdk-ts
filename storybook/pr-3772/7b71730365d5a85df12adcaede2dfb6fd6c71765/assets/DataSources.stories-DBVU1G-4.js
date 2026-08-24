import{j as r}from"./iframe-BPocqIVt.js";import{O as b}from"./object-table-BHDuSvAo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C6x4VzkO.js";import{u as g}from"./useOsdkClient-Bm2y0aKf.js";import"./preload-helper-DJuEbehX.js";import"./Table-CcZ4FuGS.js";import"./index-D8gxTUyX.js";import"./Dialog-ByPzxqeA.js";import"./cross-CP14YMB5.js";import"./svgIconContainer-lu5MT20R.js";import"./useBaseUiId-DHiAnipM.js";import"./InternalBackdrop-CZva0C0U.js";import"./composite-Bsm441N4.js";import"./index-DUErGcWd.js";import"./index-wB13koOt.js";import"./index-BSp8i_SU.js";import"./useEventCallback-aY1-PS5J.js";import"./SkeletonBar-DHiHMD5H.js";import"./LoadingCell-5yIIwy5g.js";import"./ColumnConfigDialog-BYI69Y6r.js";import"./DraggableList-CQhb22zm.js";import"./search-CPyRqeCk.js";import"./Input-DoB758NI.js";import"./useControlled-Cn9j2jZh.js";import"./Button-BAjtVZWF.js";import"./small-cross-DVc0tIFP.js";import"./ActionButton-5HFO0p1A.js";import"./Checkbox-DjeARGO6.js";import"./useValueChanged-DBh8PZxJ.js";import"./CollapsiblePanel-C4vE3Q24.js";import"./MultiColumnSortDialog-pxPrJnpy.js";import"./MenuTrigger-iVAxRcJM.js";import"./CompositeItem-uae9ym8T.js";import"./ToolbarRootContext-Bx5UxeGF.js";import"./getDisabledMountTransitionStyles-BszX_VbO.js";import"./getPseudoElementBounds-3m_HaT0i.js";import"./chevron-down-DzujtnRS.js";import"./index-QphKDK17.js";import"./error-SprCq_Ye.js";import"./BaseCbacBanner-DToPlCN2.js";import"./makeExternalStore-DNWt0sPl.js";import"./Tooltip-CAhNLUkJ.js";import"./PopoverPopup-BwNEzQB7.js";import"./debounce-CT4AXDLg.js";import"./tick-a5SZvQAG.js";import"./DropdownField-CtOmtDd4.js";import"./isEqual-DA-bsXp9.js";import"./withOsdkMetrics-DyR4A0wB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
