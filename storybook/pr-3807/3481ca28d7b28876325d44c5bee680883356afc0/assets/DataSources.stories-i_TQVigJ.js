import{j as r}from"./iframe-CIDkGdxn.js";import{O as b}from"./object-table-CDvhocFU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C_PRul3P.js";import{u as g}from"./useOsdkClient-BpRqG14V.js";import"./preload-helper-DQdeEyPy.js";import"./Table-CeTkSjYZ.js";import"./index-BJ5omvkY.js";import"./Dialog-BS3XtVnN.js";import"./cross-DiLX3wCt.js";import"./svgIconContainer-DvFKWRFA.js";import"./useBaseUiId-WZ7ghEOy.js";import"./InternalBackdrop-CCM9B3tL.js";import"./composite-D_D3blZ6.js";import"./index-Bm0NEbpd.js";import"./index-BRU202F9.js";import"./index-DCodQMOy.js";import"./useEventCallback-DYFKStAK.js";import"./SkeletonBar-DLywdHj8.js";import"./LoadingCell-BkbNULS7.js";import"./ColumnConfigDialog-1Pa3efDq.js";import"./DraggableList-CVTfhVx9.js";import"./search-D4KYriyJ.js";import"./Input-D-L1f88H.js";import"./useControlled-CxUQTcdD.js";import"./isEqual-CZm5WjX0.js";import"./small-cross-CqSaUkaj.js";import"./Button-DY2ccd-k.js";import"./ActionButton-k1VAR5BB.js";import"./Checkbox-DGJWvYrt.js";import"./useValueChanged-CtYbXPVR.js";import"./CollapsiblePanel-BnsCPhWJ.js";import"./MultiColumnSortDialog-5Y6Y8h7a.js";import"./MenuTrigger-D33FFHUx.js";import"./CompositeItem-B9naYOTm.js";import"./ToolbarRootContext-B1YU7RoG.js";import"./getDisabledMountTransitionStyles-BdszaF3h.js";import"./getPseudoElementBounds-Cf-uGjWx.js";import"./chevron-down-CvarMxgC.js";import"./index-58UGqHrm.js";import"./error-lvST2j8Q.js";import"./BaseCbacBanner-DUW70VF8.js";import"./makeExternalStore-BYndnrrh.js";import"./Tooltip-BzLx1d6a.js";import"./PopoverPopup-BteXE5Iu.js";import"./Combobox-BKIb61BZ.js";import"./tick-CPPnJemQ.js";import"./DropdownField-DT0ygf3u.js";import"./withOsdkMetrics-CzLaYybz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
