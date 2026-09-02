import{j as r}from"./iframe-D-YVkBdv.js";import{O as b}from"./object-table-DSMedtq1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0qXnYxO.js";import{u as g}from"./useOsdkClient-yhwhd92y.js";import"./preload-helper-_q1ENjXx.js";import"./Table-2Tri_Ec9.js";import"./index-D0bxYvtz.js";import"./Dialog-DFvYaONf.js";import"./cross-ClH0_H4w.js";import"./svgIconContainer-DDMXlF2M.js";import"./useBaseUiId-3VW8EFPd.js";import"./InternalBackdrop-C4LAnxkW.js";import"./composite-OshwPNjT.js";import"./index-DL0aWY-I.js";import"./index-Dv4gaO6G.js";import"./index-C_-WA-Do.js";import"./useEventCallback-BomJVgJ2.js";import"./SkeletonBar-CMCSIcnX.js";import"./LoadingCell-DwNUad0k.js";import"./ColumnConfigDialog-BlOPtPiA.js";import"./DraggableList-BpPgPeVp.js";import"./search-C5Mg5i_j.js";import"./Input-BQVgTzKu.js";import"./useControlled-C6k-yuxA.js";import"./Button-BmynEVTb.js";import"./small-cross-DoIYebHc.js";import"./ActionButton-mqL3sp89.js";import"./Checkbox-kwE5hH_y.js";import"./useValueChanged-1g9c2CbG.js";import"./CollapsiblePanel-Bjyt7xeM.js";import"./MultiColumnSortDialog-4055pRUc.js";import"./MenuTrigger-DLMiKJEj.js";import"./CompositeItem-B9XOzr5r.js";import"./ToolbarRootContext-C0Zkd7BN.js";import"./getDisabledMountTransitionStyles-BQmzDkGp.js";import"./getPseudoElementBounds-DJfyOCz1.js";import"./chevron-down-DJW-OO5g.js";import"./index-hHcESr47.js";import"./error-DLaKvyDO.js";import"./BaseCbacBanner-2-wgiHpz.js";import"./makeExternalStore-CCIciaKQ.js";import"./Tooltip-iWwEcmz_.js";import"./PopoverPopup-C8ygOczV.js";import"./debounce-BmbcUYOw.js";import"./tick-DQ2Owbrw.js";import"./DropdownField-nhbLlfgI.js";import"./isEqual-FOvNndLt.js";import"./withOsdkMetrics-BbwSxYIO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
