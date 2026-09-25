import{j as r}from"./iframe-DD6NR-qI.js";import{O as b}from"./object-table-DznG4301.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-EgzMzp4P.js";import{u as g}from"./useOsdkClient-1ZwklRfn.js";import"./preload-helper-BhGDsbwZ.js";import"./Table-D-1i9MSI.js";import"./index-BtwIbT4Z.js";import"./Dialog-DisWgziA.js";import"./cross-CLF7AClR.js";import"./svgIconContainer-DsJ3_wfj.js";import"./useBaseUiId-CEPmW6Nu.js";import"./InternalBackdrop-BIHQ6bnZ.js";import"./composite-DjgEQHpT.js";import"./index--itJRcDL.js";import"./index-Bmje4swP.js";import"./index-Dl1GTjEV.js";import"./useEventCallback-DyKovpbC.js";import"./SkeletonBar-BEg-pQ3F.js";import"./LoadingCell-BAH65k4-.js";import"./ColumnConfigDialog-DWu_2tEl.js";import"./DraggableList-B_KSOXJ-.js";import"./search-DLBTsCln.js";import"./Input-B4mWWySb.js";import"./useControlled-DC0uCH14.js";import"./Button-C_-ilsri.js";import"./small-cross-BvQxV8Bl.js";import"./ActionButton-BYk1HVK3.js";import"./Checkbox-BkOv0Hz_.js";import"./useValueChanged-CeUE21rU.js";import"./CollapsiblePanel-BVS5L9rq.js";import"./MultiColumnSortDialog-BH4prHwb.js";import"./MenuTrigger-Bxh4-y44.js";import"./CompositeItem-CNTLKPeP.js";import"./ToolbarRootContext-BShu1aKH.js";import"./getDisabledMountTransitionStyles-CnHaSZHM.js";import"./getPseudoElementBounds-DWTs3Yu-.js";import"./chevron-down-IfIl88XA.js";import"./index-BXR8oj5v.js";import"./error-DRCC_cDq.js";import"./BaseCbacBanner-CjP1Gp2R.js";import"./makeExternalStore-opb-uo7f.js";import"./Tooltip-BCP2fXUZ.js";import"./PopoverPopup-BSa4WLOz.js";import"./debounce-BJkEGDvv.js";import"./tick-C4mma9FJ.js";import"./DropdownField-B7GAXqTH.js";import"./isEqual-CoS-PPQL.js";import"./withOsdkMetrics-C5Oq6SEB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
