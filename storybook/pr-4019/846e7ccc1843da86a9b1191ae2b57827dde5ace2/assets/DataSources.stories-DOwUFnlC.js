import{j as r}from"./iframe-D3RGMnav.js";import{O as b}from"./object-table-BakC7nn4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C_HTThZT.js";import{u as g}from"./useOsdkClient-B1LUMolX.js";import"./preload-helper-BklmKIr_.js";import"./Table-R7a12CVv.js";import"./index-nSo8ObpB.js";import"./Dialog-DzLg0Ofr.js";import"./cross-DJMZ2_VJ.js";import"./svgIconContainer-nHtSwbNR.js";import"./useBaseUiId-BhJo7SoD.js";import"./InternalBackdrop-DNhkpLhR.js";import"./composite-DtZsoZnS.js";import"./index-B1m7fBwG.js";import"./index-BCGsGoWh.js";import"./index-DkTcI7f6.js";import"./useEventCallback-Bb_RfLNl.js";import"./SkeletonBar--V7bY1Hg.js";import"./LoadingCell-C-Mgr2_3.js";import"./ColumnConfigDialog-BmT51Anr.js";import"./DraggableList-CyL66yiO.js";import"./search-DhStDycO.js";import"./Input-BD3DYMGR.js";import"./useControlled-TK_e7a_Y.js";import"./Button-DybLmK6C.js";import"./small-cross-I1SXQrv5.js";import"./ActionButton-LPM2maYQ.js";import"./Checkbox-BPd5nN8O.js";import"./useValueChanged-BhgPHUED.js";import"./CollapsiblePanel-B5YKTTfg.js";import"./MultiColumnSortDialog-DTCkqGq-.js";import"./MenuTrigger-XGVUEXcP.js";import"./CompositeItem-Bs8xPD2u.js";import"./ToolbarRootContext-DVajx3A6.js";import"./getDisabledMountTransitionStyles-CAL3aepw.js";import"./getPseudoElementBounds-BCjf5F4u.js";import"./chevron-down-Cq6RCzUz.js";import"./index-DDdvHcPj.js";import"./error-BtBmESuY.js";import"./BaseCbacBanner-f6adz1Nr.js";import"./makeExternalStore-DkQFuTyA.js";import"./Tooltip-xT35MYb5.js";import"./PopoverPopup-CgsNZx-r.js";import"./debounce-DCoo-0F-.js";import"./tick-BFwYDZkg.js";import"./DropdownField-DifR4mWz.js";import"./isEqual-cXk5KBsJ.js";import"./withOsdkMetrics-q9Ci7M-s.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
