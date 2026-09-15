import{j as r}from"./iframe-WliM3Ewa.js";import{O as b}from"./object-table-DRO0-XsV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-48fjb9Bh.js";import{u as g}from"./useOsdkClient-Ds9WknxH.js";import"./preload-helper-DEyC4ekG.js";import"./Table-DoTOPMcE.js";import"./index-CnrTWWrO.js";import"./Dialog-C-9hMTPL.js";import"./cross-B523-3pv.js";import"./svgIconContainer-eh8pO9ol.js";import"./useBaseUiId-CUkyUtdd.js";import"./InternalBackdrop-C5-fjIik.js";import"./composite-ByE6f88x.js";import"./index-NRd0AnHS.js";import"./index-DLdNuuvj.js";import"./index-CwjXC2Es.js";import"./useEventCallback-DwV1lBpW.js";import"./SkeletonBar-BlIjEe9R.js";import"./LoadingCell-BVlRdgDo.js";import"./ColumnConfigDialog-4uaAyz0M.js";import"./DraggableList-8FBKbtBf.js";import"./search-DOR9iHB9.js";import"./Input-CQ-UP_L4.js";import"./useControlled-DNr35Z2-.js";import"./Button-Bajbsf8L.js";import"./small-cross-DoL3gn1_.js";import"./ActionButton-B0Mz96Sd.js";import"./Checkbox-BwdGH573.js";import"./useValueChanged-CdN1D_N7.js";import"./CollapsiblePanel-DEqR4YPk.js";import"./MultiColumnSortDialog-BY_tdxDU.js";import"./MenuTrigger-taMZMeQ0.js";import"./CompositeItem-PZY5TD1e.js";import"./ToolbarRootContext-CDiW3Jhi.js";import"./getDisabledMountTransitionStyles-4NaqFyh-.js";import"./getPseudoElementBounds-FBUEgUOa.js";import"./chevron-down-D3GW0vbF.js";import"./index-DZuQrbeK.js";import"./error-CRmqFCAs.js";import"./BaseCbacBanner-B3tDHTYq.js";import"./makeExternalStore-y3QUXpj7.js";import"./Tooltip-9h8kIB5N.js";import"./PopoverPopup-BfSQYfPj.js";import"./debounce-BmlTPhI1.js";import"./tick-B5-KzR1n.js";import"./DropdownField-Dh8xBr1M.js";import"./isEqual-CqLdlydg.js";import"./withOsdkMetrics-BMKdbhzI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
