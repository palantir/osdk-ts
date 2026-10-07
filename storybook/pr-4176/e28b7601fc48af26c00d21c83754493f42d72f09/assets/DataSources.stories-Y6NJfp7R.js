import{j as r}from"./iframe-BdOqqohK.js";import{O as b}from"./object-table-wRfqkctG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DawSpRK-.js";import{u as g}from"./useOsdkClient-12OQM3Gl.js";import"./preload-helper-BM9HCPK9.js";import"./Table-BtgtF-3W.js";import"./index-CMkPjfDh.js";import"./Dialog-Cge2Djl4.js";import"./cross-CBN09daJ.js";import"./svgIconContainer-CxQ350M_.js";import"./useBaseUiId-D2aQCoEc.js";import"./InternalBackdrop-D-cRM3dE.js";import"./composite-DBxA_VE8.js";import"./index-CVW6l3Ye.js";import"./index-DYHqv8nl.js";import"./index-DChtCzTr.js";import"./useEventCallback-Kc4Bg8wO.js";import"./SkeletonBar-u4XVZQ3v.js";import"./LoadingCell-hpDbvg2p.js";import"./ColumnConfigDialog-T3sSbJ1i.js";import"./DraggableList-DrRgyrTr.js";import"./search-et-5mZuo.js";import"./Input-BunEo4l4.js";import"./useControlled-BYgnBDE7.js";import"./Button-KdAdTzHS.js";import"./small-cross-BL7aJl_O.js";import"./ActionButton-DMvFJ_VM.js";import"./Checkbox-dzgioJMo.js";import"./useValueChanged-BdYiKPuI.js";import"./CollapsiblePanel-Bb165C_-.js";import"./MultiColumnSortDialog-Dm4JsThE.js";import"./MenuTrigger-DFKWibUL.js";import"./CompositeItem-FJMzn3o4.js";import"./ToolbarRootContext-CpSt7yAh.js";import"./getDisabledMountTransitionStyles-BJoEqB65.js";import"./getPseudoElementBounds-lBQa4hkk.js";import"./chevron-down-DcdLMAVH.js";import"./index-CZ8krK_n.js";import"./error-BfW0iVfX.js";import"./BaseCbacBanner-CxYClwUP.js";import"./makeExternalStore-Cfk45-cb.js";import"./Tooltip-CVkVqWlj.js";import"./PopoverPopup-BHGNAE2t.js";import"./debounce-BNI_uAPu.js";import"./tick-C7mROKoo.js";import"./DropdownField-B4Q1L6C2.js";import"./isEqual-BHow4tcx.js";import"./withOsdkMetrics-ADnSdXzg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
