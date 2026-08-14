import{j as r}from"./iframe-BRo99t7B.js";import{O as b}from"./object-table-C-kuDLjo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B74r0CM_.js";import{u as g}from"./useOsdkClient-C_oVdPtU.js";import"./preload-helper-CigqD04b.js";import"./Table-DJA1uEml.js";import"./index-R8YjK2xc.js";import"./Dialog-CqcUi2Md.js";import"./cross-CDIMFWJV.js";import"./svgIconContainer-BQOaCuBG.js";import"./useBaseUiId-BSnWm0Ty.js";import"./InternalBackdrop-DHK8SVPy.js";import"./composite-DVnIZAH7.js";import"./index-CGghKiPn.js";import"./index-Duc0FtTv.js";import"./index-D21X6LUF.js";import"./useEventCallback-nAJ20U8L.js";import"./SkeletonBar-mNO0fj1P.js";import"./LoadingCell-CP8VUqpi.js";import"./ColumnConfigDialog-DFxLQGNF.js";import"./DraggableList-KlJTARjY.js";import"./search-GQ4U1QoP.js";import"./Input-DcSDPPuu.js";import"./useControlled-nWezCynf.js";import"./Button-BkY4eupJ.js";import"./small-cross-CAb1IP_3.js";import"./ActionButton-7DJSbSEH.js";import"./Checkbox-BVhc7lET.js";import"./useValueChanged-qoR0fUld.js";import"./CollapsiblePanel-C9cjRkgh.js";import"./MultiColumnSortDialog-D7G0ajgK.js";import"./MenuTrigger-rzq5Pqiz.js";import"./CompositeItem-D0ZY96tK.js";import"./ToolbarRootContext-CXGtLwjz.js";import"./getDisabledMountTransitionStyles-Cebom1b-.js";import"./getPseudoElementBounds-B3ez0_sP.js";import"./chevron-down-_xL6OTaR.js";import"./index-CB_jfM4i.js";import"./error-DCHg5wYe.js";import"./BaseCbacBanner-CeRJcetP.js";import"./makeExternalStore-BmrHbVoq.js";import"./Tooltip-2SRPn51X.js";import"./PopoverPopup-B4Rm8UaV.js";import"./debounce-BV4tZJKC.js";import"./tick-CSvfDoia.js";import"./DropdownField-B3HIUGjf.js";import"./isEqual-D0-FiT0l.js";import"./withOsdkMetrics-CbR5n7Rt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
