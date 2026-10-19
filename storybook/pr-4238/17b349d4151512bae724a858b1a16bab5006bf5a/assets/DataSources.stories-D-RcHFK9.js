import{j as r}from"./iframe-3DYs7LO7.js";import{O as b}from"./object-table-BfsItrmr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-UB4DaJKx.js";import{u as g}from"./useOsdkClient-CWVCE7e7.js";import"./preload-helper-BDRkpYDH.js";import"./Table-s5fahLWh.js";import"./index-Dksq0QWW.js";import"./Dialog-BmuFHVtK.js";import"./cross-BiEQYoFR.js";import"./svgIconContainer-E5ErPZjm.js";import"./useBaseUiId-CeE4102D.js";import"./InternalBackdrop-CPdSJMpf.js";import"./composite-BCO-9Moa.js";import"./index-Bg_CqW7M.js";import"./index-DNpL3p8G.js";import"./index-CJTVlVv5.js";import"./useEventCallback-DwsRMbJG.js";import"./SkeletonBar-BfJniFPr.js";import"./LoadingCell-C8da80wj.js";import"./ColumnConfigDialog-CYE3ysbI.js";import"./DraggableList-C9SO0dZm.js";import"./search-D5yGPAlT.js";import"./Input-Bbtubjan.js";import"./useControlled-LDymMyjQ.js";import"./Button-Co786LuF.js";import"./small-cross-DdM0FPfO.js";import"./ActionButton-Cbyc9XzM.js";import"./Checkbox-BStnP9ea.js";import"./useValueChanged-BQpMrMLa.js";import"./CollapsiblePanel-DVs4UHLN.js";import"./MultiColumnSortDialog-Bvn13wQo.js";import"./MenuTrigger-BFaeTz7M.js";import"./CompositeItem-D-tb1HU0.js";import"./ToolbarRootContext-CEG1pZ6f.js";import"./getDisabledMountTransitionStyles-CfKy3gzP.js";import"./getPseudoElementBounds-RIT9EOF5.js";import"./chevron-down-DLvTPfQ9.js";import"./index-HJUPOpns.js";import"./error-B7nnIe8L.js";import"./BaseCbacBanner-Bopiba_z.js";import"./makeExternalStore-DOhtyVO-.js";import"./Tooltip-RwDgrf4M.js";import"./PopoverPopup-BfUZB0MB.js";import"./debounce-Dx93VxJF.js";import"./tick-lA4emHrS.js";import"./DropdownField-BfdPwUa1.js";import"./isEqual-DsvzyOCy.js";import"./withOsdkMetrics-Dte6-FPa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
