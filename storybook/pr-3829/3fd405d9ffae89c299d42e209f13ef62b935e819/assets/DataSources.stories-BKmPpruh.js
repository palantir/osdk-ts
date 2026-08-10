import{j as r}from"./iframe-85l92LuF.js";import{O as b}from"./object-table-C0GnWyPt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DtwRhBo8.js";import{u as g}from"./useOsdkClient-C2cGCo7o.js";import"./preload-helper-DoBjmup7.js";import"./Table-BnDs73HF.js";import"./index-BnAHZs62.js";import"./Dialog-C4vZ3GgX.js";import"./cross-DZhpzTXU.js";import"./svgIconContainer-9VtSpFHF.js";import"./useBaseUiId-CGJCIeBX.js";import"./InternalBackdrop-DbM0HmsH.js";import"./composite-CaqHqJ_a.js";import"./index-zU9OYY3O.js";import"./index-OfsSx2G7.js";import"./index-DM4Gegry.js";import"./useEventCallback-DXmG8K1Y.js";import"./SkeletonBar-CWeveXAy.js";import"./LoadingCell-B3KBO1t6.js";import"./ColumnConfigDialog-C5kNLuT3.js";import"./DraggableList-DYFgJu_P.js";import"./search-HhZWfkPx.js";import"./Input-Bs9FOxx_.js";import"./useControlled-D-3f0MFO.js";import"./isEqual-DSvlbf0L.js";import"./isObject-Doo8UJXv.js";import"./Button-C177onMO.js";import"./ActionButton-DRuDmXXC.js";import"./Checkbox-Cf9AR_dN.js";import"./useValueChanged-KsIwXjTG.js";import"./CollapsiblePanel-726yqMtN.js";import"./MultiColumnSortDialog-psYjQqrg.js";import"./MenuTrigger-u-yWNfeM.js";import"./CompositeItem-B2i1pVuI.js";import"./ToolbarRootContext-Bi6RhBRT.js";import"./getDisabledMountTransitionStyles-BaxpKOOx.js";import"./getPseudoElementBounds-DyArnjjm.js";import"./chevron-down-UflpNh7y.js";import"./index-BPWj9FJk.js";import"./error-Cj2vyR90.js";import"./BaseCbacBanner-g8nywgDC.js";import"./makeExternalStore-WSruEEDk.js";import"./Tooltip-cHdPf_B7.js";import"./PopoverPopup-CG85ep_B.js";import"./toNumber-Cs7eH4rR.js";import"./tick-BCKGptbI.js";import"./DropdownField-BpqvP_BY.js";import"./withOsdkMetrics-SMjq4TP8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
