import{j as r}from"./iframe-CAg-JriM.js";import{O as b}from"./object-table-C-ApABTH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BM9SRYSz.js";import{u as g}from"./useOsdkClient-DA4RLwcd.js";import"./preload-helper-BUvKDxEU.js";import"./Table-i_e6H7xl.js";import"./index-c30BwpEp.js";import"./Dialog-BdVph2yq.js";import"./cross-f26_pld4.js";import"./svgIconContainer-DADUTguq.js";import"./useBaseUiId-BRS8U626.js";import"./InternalBackdrop-dVZjC2Aj.js";import"./composite-CQrdmEmC.js";import"./index-ZJoCPfq8.js";import"./index-BKL1ls47.js";import"./index-oQ8-uGIT.js";import"./useEventCallback-BWy4tScF.js";import"./SkeletonBar-BxCdHceQ.js";import"./LoadingCell-C-LbupCq.js";import"./ColumnConfigDialog-BkpF_5fM.js";import"./DraggableList-DPp-whoe.js";import"./search-iyFeBtu2.js";import"./Input-DRHJ-rvA.js";import"./useControlled-Ceb76xwT.js";import"./Button-Cl3foSbn.js";import"./small-cross-BOoOGXKD.js";import"./ActionButton-Bzha9uO_.js";import"./Checkbox-V5AP2cHu.js";import"./useValueChanged-3kHQoBsE.js";import"./CollapsiblePanel-COo9-GCD.js";import"./MultiColumnSortDialog-CHNEVY8-.js";import"./MenuTrigger-Bu5HVYuz.js";import"./CompositeItem-D7GSS8Td.js";import"./ToolbarRootContext-CdDSSu6d.js";import"./getDisabledMountTransitionStyles-CZGWVUEY.js";import"./getPseudoElementBounds-D5B51_gi.js";import"./chevron-down-CsfLCkc3.js";import"./index-B-69obD4.js";import"./error-1JJ1PBi7.js";import"./BaseCbacBanner-MWnGpk0a.js";import"./makeExternalStore-sIngp_if.js";import"./Tooltip-BaUV5B5y.js";import"./isObject-Cga3o-qK.js";import"./debounce-8AUJtK1E.js";import"./tick-BF0KiDZu.js";import"./DropdownField-azDKl2Hy.js";import"./isEqual-DEFCBL8A.js";import"./_baseIsEqual-vKOwFDyn.js";import"./withOsdkMetrics-CHGqLnXT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
