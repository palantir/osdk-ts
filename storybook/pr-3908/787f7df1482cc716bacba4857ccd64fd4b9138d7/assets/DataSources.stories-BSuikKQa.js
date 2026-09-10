import{j as r}from"./iframe-DF9DX5mw.js";import{O as b}from"./object-table-BzUD3kyS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-7pMmVYPi.js";import{u as g}from"./useOsdkClient-B5Lb5Fy6.js";import"./preload-helper-DVnQ6duR.js";import"./Table-CqUFWu1r.js";import"./index-BmuLmEaC.js";import"./Dialog-SP-0ETNd.js";import"./cross-CNVJX-R0.js";import"./svgIconContainer-BnUXZNAT.js";import"./useBaseUiId-Z5YEKe02.js";import"./InternalBackdrop-B5Fo5nQu.js";import"./composite-DOTEZs57.js";import"./index-C_Rqkv-M.js";import"./index-BougzNP_.js";import"./index-BKVwN-RR.js";import"./useEventCallback-DEaFjfc0.js";import"./SkeletonBar-C4llJUuv.js";import"./LoadingCell-em3D0YaF.js";import"./ColumnConfigDialog-BItewFiF.js";import"./DraggableList-BBYYJp7a.js";import"./search-C_UKWj2f.js";import"./Input-XPtGFq-8.js";import"./useControlled-CD5ggXKk.js";import"./Button-fzptvapi.js";import"./small-cross-CMbApKIR.js";import"./ActionButton-DYftQUfX.js";import"./Checkbox-BsszOfzQ.js";import"./useValueChanged-COxiaf3w.js";import"./CollapsiblePanel-BlNEuHSO.js";import"./MultiColumnSortDialog-DDr43etj.js";import"./MenuTrigger-SPoWOsQx.js";import"./CompositeItem-MLQ_GRVe.js";import"./ToolbarRootContext-Cv5YqZmZ.js";import"./getDisabledMountTransitionStyles-et_-f1AH.js";import"./getPseudoElementBounds-D8S0eQR8.js";import"./chevron-down-YPHBShAj.js";import"./index-CME9wlOT.js";import"./error-CX7q-MIV.js";import"./BaseCbacBanner-BSlunzxb.js";import"./makeExternalStore-DZe_6606.js";import"./Tooltip-D9EgpZ1u.js";import"./PopoverPopup-3Jbs0f7w.js";import"./debounce-q3UzP_fO.js";import"./tick-BqC-lfvb.js";import"./DropdownField-BmYXknbz.js";import"./isEqual-RK-x2tFX.js";import"./withOsdkMetrics-YJ6vrnTW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
