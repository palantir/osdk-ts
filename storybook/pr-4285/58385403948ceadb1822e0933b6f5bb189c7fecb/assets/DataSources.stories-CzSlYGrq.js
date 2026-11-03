import{j as r}from"./iframe-Do-VpOjh.js";import{O as b}from"./object-table-BwRPkyFs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B0IJnsh-.js";import{u as g}from"./useOsdkClient-ClIl2h3b.js";import"./preload-helper-5MNjctgv.js";import"./Table-DlXnM-uc.js";import"./index-guBT-Q22.js";import"./Dialog-7E7RidgZ.js";import"./cross-ogJb6_71.js";import"./svgIconContainer-Daa0qYJx.js";import"./useBaseUiId-NGuXhXtm.js";import"./InternalBackdrop-CAfbe648.js";import"./composite-XuPIjsZ0.js";import"./index-BPQdlCoY.js";import"./index-Bl0nKd-v.js";import"./index-6QJ451ri.js";import"./useEventCallback-BfN-usbW.js";import"./SkeletonBar-DEQbvDAC.js";import"./LoadingCell-TR-8Cewx.js";import"./ColumnConfigDialog-CZtIpYKX.js";import"./DraggableList-DCsvageq.js";import"./search-CUVFG7hS.js";import"./Input-DBYDuVVL.js";import"./useControlled-Bktt7DnW.js";import"./Button-CyEQqHyS.js";import"./small-cross-BbsWtOmh.js";import"./ActionButton-CGqklm4n.js";import"./Checkbox-X0ByKMK-.js";import"./useValueChanged-BWy_YmP2.js";import"./CollapsiblePanel-DU8jndzx.js";import"./MultiColumnSortDialog-BG5mZIhG.js";import"./MenuTrigger-Bx9xsw3l.js";import"./CompositeItem-tVccsBIo.js";import"./ToolbarRootContext-ABr2rsL3.js";import"./getDisabledMountTransitionStyles-DJ-_H-jY.js";import"./getPseudoElementBounds-Dn4RekYY.js";import"./chevron-down-CEDyHpu0.js";import"./index-BCFomdyL.js";import"./error-CfZglkqO.js";import"./BaseCbacBanner-Bgyzasq9.js";import"./makeExternalStore-C6Ji6_pQ.js";import"./Tooltip-iQ-POIkn.js";import"./PopoverPopup-Bu1yL2u-.js";import"./debounce-BXhlOus3.js";import"./tick-De1F-M9u.js";import"./DropdownField-Ds_qQON0.js";import"./isEqual-C845QIj_.js";import"./withOsdkMetrics-C1OJVKTR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
