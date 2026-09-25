import{j as r}from"./iframe-BcZul-5h.js";import{O as b}from"./object-table-Dzwk_2Gi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BLcix5bc.js";import{u as g}from"./useOsdkClient-tWgMlPel.js";import"./preload-helper-CmDzzbHA.js";import"./Table-B1bcSvHC.js";import"./index-DzJXuXA1.js";import"./Dialog-Dj7pNKUw.js";import"./cross-C_wTApPn.js";import"./svgIconContainer-RYnvKxQV.js";import"./useBaseUiId-BR4pV0Lr.js";import"./InternalBackdrop-C0gIi10e.js";import"./composite-C_4CRh4u.js";import"./index-CWco2ihj.js";import"./index-pZeQx-_G.js";import"./index-Dfw9WA6q.js";import"./useEventCallback-DFzPAd8H.js";import"./SkeletonBar-DggSgXIE.js";import"./LoadingCell-DCt4Pvwc.js";import"./ColumnConfigDialog-D_snSl5m.js";import"./DraggableList-B4ziAGpQ.js";import"./search-Bzu1qjP_.js";import"./Input--zoqJ2tF.js";import"./useControlled-eXBZEo_R.js";import"./Button-soVXPdsa.js";import"./small-cross-BBM4HGVx.js";import"./ActionButton-Kn6WAFbI.js";import"./Checkbox-CBlNrCa1.js";import"./useValueChanged-DndjiTPh.js";import"./CollapsiblePanel-CpZxtz3Z.js";import"./MultiColumnSortDialog-B01vzk6O.js";import"./MenuTrigger-DTrLq3FS.js";import"./CompositeItem-DOpNxc2s.js";import"./ToolbarRootContext-BozYkP2N.js";import"./getDisabledMountTransitionStyles-DGAUIi0f.js";import"./getPseudoElementBounds-BxdRzYrq.js";import"./chevron-down-BTve9A2e.js";import"./index-C_ypGm3c.js";import"./error-BtC0qV1A.js";import"./BaseCbacBanner-eu0_CWGy.js";import"./makeExternalStore-BaDKsdYc.js";import"./Tooltip-8yNzGMPy.js";import"./PopoverPopup-DLNnlymE.js";import"./debounce-DtvbDRTR.js";import"./tick-D_V44cYu.js";import"./DropdownField-DSLZwGzV.js";import"./isEqual-CAB2zIeK.js";import"./withOsdkMetrics-C8vp2Jz9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
