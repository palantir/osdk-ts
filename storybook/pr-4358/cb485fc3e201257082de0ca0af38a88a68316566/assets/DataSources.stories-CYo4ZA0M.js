import{j as r}from"./iframe-Dm9tPq9-.js";import{O as b}from"./object-table-B2wyECGp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CMoqCjDL.js";import{u as g}from"./useOsdkClient-DfBdKLO7.js";import"./preload-helper-DbanGSn8.js";import"./Table-0jLCAVha.js";import"./index-SudSBJ9d.js";import"./Dialog-BDOz5nRC.js";import"./cross-DovxETch.js";import"./svgIconContainer-DLeOey4i.js";import"./useBaseUiId-Bh3ZKuZJ.js";import"./InternalBackdrop-CQfhuxOD.js";import"./composite-DwLeZJsP.js";import"./index-pwNhYih4.js";import"./index-BEF1L48c.js";import"./index-jJsu7-Bg.js";import"./useEventCallback-D0i4hHrz.js";import"./SkeletonBar-Co2KJNpr.js";import"./LoadingCell-ClA53876.js";import"./ColumnConfigDialog-CCOQZeJ3.js";import"./DraggableList-DmtqR8L7.js";import"./search-DpPE568F.js";import"./Input-1s2rxWuw.js";import"./useControlled-zgk6WMo4.js";import"./Button-D711FISQ.js";import"./small-cross-D1_y47j8.js";import"./ActionButton-BoWHV299.js";import"./Checkbox-BgLuiuwc.js";import"./useValueChanged-T9NupB12.js";import"./CollapsiblePanel-oCJFTmUj.js";import"./MultiColumnSortDialog-DkH22_Rz.js";import"./MenuTrigger-Cfhmo_uS.js";import"./CompositeItem-Brc_cUGL.js";import"./ToolbarRootContext-DattZO7d.js";import"./getDisabledMountTransitionStyles-LF-SO7gC.js";import"./getPseudoElementBounds-bh7QF3ZR.js";import"./chevron-down-COzwHJk7.js";import"./index-BwyOjzrJ.js";import"./error-CX1V2PGn.js";import"./BaseCbacBanner-BSaJ_SWa.js";import"./makeExternalStore-CEHTDEAH.js";import"./Tooltip-Dj98utpN.js";import"./isObject-iDHKARFT.js";import"./debounce-v3DZ4rGU.js";import"./tick-BuAP4hF8.js";import"./DropdownField-C2nHBICk.js";import"./isEqual-D7o6NFD6.js";import"./_baseIsEqual-CK_tMD84.js";import"./withOsdkMetrics-4sk2cJVp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
