import{j as r}from"./iframe-BhDMRuCM.js";import{O as b}from"./object-table-BcZq9KiG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-hxw7XmgE.js";import{u as g}from"./useOsdkClient-BjgYjtiw.js";import"./preload-helper-L4oI3E3x.js";import"./Table-Bs84qWgC.js";import"./index-DBdWVfZr.js";import"./Dialog-C1YcdSal.js";import"./cross-B8g5lC7t.js";import"./svgIconContainer-DvnFME-C.js";import"./useBaseUiId-DsydWgv8.js";import"./InternalBackdrop-BhWEQZmU.js";import"./composite-D7bHzIxr.js";import"./index-DO7zbhCL.js";import"./index-DbLkd8ga.js";import"./index-DqjKS_CZ.js";import"./useEventCallback-CyRRrF3x.js";import"./SkeletonBar-BtXVrziY.js";import"./LoadingCell-Ck5vmbXI.js";import"./ColumnConfigDialog-Cm1OyTA0.js";import"./DraggableList-wstUa1B_.js";import"./search-B2ohHoFm.js";import"./Input-DwhP00hs.js";import"./useControlled-BwLkCqLj.js";import"./Button-CqxlV9z0.js";import"./small-cross-CD_34XFY.js";import"./ActionButton-CeCQyXSo.js";import"./Checkbox-De7MjfoN.js";import"./useValueChanged-BkQAOqLx.js";import"./CollapsiblePanel-4GkiMrTG.js";import"./MultiColumnSortDialog-CGjENZPh.js";import"./MenuTrigger-C0XPDMSP.js";import"./CompositeItem-BUYvwABx.js";import"./ToolbarRootContext-DcA5VE7P.js";import"./getDisabledMountTransitionStyles-CM0ztPZS.js";import"./getPseudoElementBounds-BmSKtFW_.js";import"./chevron-down-CJ-s6D7k.js";import"./index-AAIJN6Ah.js";import"./error-Dy988hUQ.js";import"./BaseCbacBanner-04fZ3ODA.js";import"./makeExternalStore-Bbk8Brxu.js";import"./Tooltip-okrVPvXT.js";import"./isObject-B1y-rg-V.js";import"./debounce-B52DysiE.js";import"./tick-Dp3tm096.js";import"./DropdownField-BgP4Cuvb.js";import"./isEqual-DnPJMYFH.js";import"./_baseIsEqual-pcV0WeiE.js";import"./withOsdkMetrics-BI0vBwDP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
