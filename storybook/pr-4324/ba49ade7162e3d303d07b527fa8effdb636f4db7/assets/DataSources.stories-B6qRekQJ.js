import{j as r}from"./iframe-DEUQfbyJ.js";import{O as b}from"./object-table-cFeBBSw4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B1WnCtaJ.js";import{u as g}from"./useOsdkClient-CLqlE-Zc.js";import"./preload-helper-DDtbSBML.js";import"./Table-Bd5XrgZX.js";import"./index-C6_mThYo.js";import"./Dialog-BSvKxkhq.js";import"./cross-BJMUt8op.js";import"./svgIconContainer-Cb_T1wEM.js";import"./useBaseUiId-CRei-m-p.js";import"./InternalBackdrop-Aqi47OUJ.js";import"./composite-Bu1RP316.js";import"./index-5cIFHse-.js";import"./index-DlbzGHlu.js";import"./index-AzDJyk_j.js";import"./useEventCallback-CRDTuIQt.js";import"./SkeletonBar-DvYOZTAf.js";import"./LoadingCell-Cl7o_rtR.js";import"./ColumnConfigDialog-BUTGFTNl.js";import"./DraggableList-Bby71G5h.js";import"./search-bO4Ln9fx.js";import"./Input-Bp3cyvX_.js";import"./useControlled-BF2EiofB.js";import"./Button-PnV_trQF.js";import"./small-cross-CX9XBHyk.js";import"./ActionButton-CL0HGLP3.js";import"./Checkbox-CKLhUd_K.js";import"./useValueChanged-D5ajVfmi.js";import"./CollapsiblePanel-xExM-9G0.js";import"./MultiColumnSortDialog-LT5sxkuL.js";import"./MenuTrigger-CFReuUPx.js";import"./CompositeItem-zXsqXwGS.js";import"./ToolbarRootContext-D3nYLoXj.js";import"./getDisabledMountTransitionStyles-XgqHg06x.js";import"./getPseudoElementBounds-CuNE1gbu.js";import"./chevron-down-Dri7QTYH.js";import"./index-Cb73vfBj.js";import"./error-CqWSLLge.js";import"./BaseCbacBanner-CJ05xbWq.js";import"./makeExternalStore-DBpHlW_G.js";import"./Tooltip-B21lyOBo.js";import"./PopoverPopup-Cp92vqrR.js";import"./debounce-BX-I8tYB.js";import"./tick-BxydVJl6.js";import"./DropdownField-Dlw4EWWr.js";import"./isEqual-C1-q93yY.js";import"./withOsdkMetrics-GkFpiJAY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
