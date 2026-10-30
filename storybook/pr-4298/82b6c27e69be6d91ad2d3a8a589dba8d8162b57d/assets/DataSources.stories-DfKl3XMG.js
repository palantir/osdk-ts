import{j as r}from"./iframe-Hh4e2kUx.js";import{O as b}from"./object-table-Cr8llyem.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-JGKA4Mxl.js";import{u as g}from"./useOsdkClient-CewGTPBJ.js";import"./preload-helper-TOQk18-t.js";import"./Table-BUFKXz0A.js";import"./index-FPZnvji7.js";import"./Dialog-CPtTTYRM.js";import"./cross-B1QiScfw.js";import"./svgIconContainer-Cz0JOvaj.js";import"./useBaseUiId-DjrC8msS.js";import"./InternalBackdrop-BRLz5Oo7.js";import"./composite-Cp4pW4Qp.js";import"./index-B-WuXzkU.js";import"./index-DvHaYOI0.js";import"./index-BAn8m4dN.js";import"./useEventCallback-CgA-LA5D.js";import"./SkeletonBar-h8EAA6dT.js";import"./LoadingCell-MOjf46qh.js";import"./ColumnConfigDialog-D6vayJw6.js";import"./DraggableList-BK-MGJqw.js";import"./search-BdChkyLR.js";import"./Input-C0NV1hD9.js";import"./useControlled-DdhVK8TG.js";import"./Button-BeEw7oZA.js";import"./small-cross-BOMG33o5.js";import"./ActionButton-DBkLaJxS.js";import"./Checkbox-DhHh2I-I.js";import"./useValueChanged-DfM3tkSL.js";import"./CollapsiblePanel-CURvjbvA.js";import"./MultiColumnSortDialog-Cuh5KK1Y.js";import"./MenuTrigger-BI89sJPI.js";import"./CompositeItem-Cklqv3Ob.js";import"./ToolbarRootContext-C2gF6pit.js";import"./getDisabledMountTransitionStyles-CyyQe50a.js";import"./getPseudoElementBounds--QWVPd6g.js";import"./chevron-down-CYKjDF1m.js";import"./index-DrBWrzmN.js";import"./error-B0H5FIAQ.js";import"./BaseCbacBanner-bFzQlkvZ.js";import"./makeExternalStore-CPyLrlbT.js";import"./Tooltip-JRfON3Mb.js";import"./PopoverPopup-B5EBdm0I.js";import"./debounce-byZt61cr.js";import"./tick-DsV0GkZM.js";import"./DropdownField-DwXJ1LzE.js";import"./isEqual-5VleYkEv.js";import"./withOsdkMetrics-Da4KZg1t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
