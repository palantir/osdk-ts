import{j as r}from"./iframe-w1UAnkHZ.js";import{O as b}from"./object-table-c1DiMKWv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-pAOEMwAt.js";import{u as g}from"./useOsdkClient-am2GQgj5.js";import"./preload-helper-G_k10dw4.js";import"./Table-BBGIvijy.js";import"./index-DAjwvQw3.js";import"./Dialog-CevHLfzG.js";import"./cross-DKbNK5yX.js";import"./svgIconContainer-D_dZC5hw.js";import"./useBaseUiId-B91xIf3E.js";import"./InternalBackdrop-DoA4GFbR.js";import"./composite-BpZVqO51.js";import"./index-Dbx2XJAZ.js";import"./index-Btv6-V1K.js";import"./index-DMQPDlV7.js";import"./useEventCallback-CzmDrtIN.js";import"./SkeletonBar-DLj25SiX.js";import"./LoadingCell-BDt7Vxxl.js";import"./ColumnConfigDialog-jklgvSGq.js";import"./DraggableList-Drzx4Sk1.js";import"./search-DeM19rtD.js";import"./Input-tf1Imv2g.js";import"./useControlled-CyfOlT88.js";import"./Button-Bh0hjCLH.js";import"./small-cross-DRvh664v.js";import"./ActionButton-YEM69ZkU.js";import"./Checkbox-BYNjqoVY.js";import"./useValueChanged-nF-imWmC.js";import"./CollapsiblePanel-D1ce4adR.js";import"./MultiColumnSortDialog-BZm0J8oX.js";import"./MenuTrigger-Clp0CXQY.js";import"./CompositeItem-BFhWCO7j.js";import"./ToolbarRootContext-c5WYrsd5.js";import"./getDisabledMountTransitionStyles-Dee7_KOo.js";import"./getPseudoElementBounds-BiUigiPq.js";import"./chevron-down-B9i1zJjC.js";import"./index-CyLlbcvz.js";import"./error-CkfO44o7.js";import"./BaseCbacBanner-BkLY3iq6.js";import"./makeExternalStore-BvX6IRpK.js";import"./Tooltip-BNCsBTMc.js";import"./PopoverPopup-GxAjlUu6.js";import"./debounce-DOKHWH7Z.js";import"./tick-CxunbKa6.js";import"./DropdownField-CYSEfVTF.js";import"./isEqual-BDJAkq-c.js";import"./withOsdkMetrics-DrpjUk54.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
