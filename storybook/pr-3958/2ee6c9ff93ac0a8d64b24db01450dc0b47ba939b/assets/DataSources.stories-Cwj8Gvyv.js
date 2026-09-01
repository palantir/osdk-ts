import{j as r}from"./iframe-BE_0juHq.js";import{O as b}from"./object-table-ak3ru7OW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CjGByPiV.js";import{u as g}from"./useOsdkClient-C3FxVITg.js";import"./preload-helper-DGE0hYRw.js";import"./Table-Wr5ik1U4.js";import"./index-CZ-KL49G.js";import"./Dialog-DWHvidN5.js";import"./cross-CUPzUyHl.js";import"./svgIconContainer-DTm7GTT3.js";import"./useBaseUiId-CyOhG5WV.js";import"./InternalBackdrop-BS79ekQH.js";import"./composite-BMP3afRS.js";import"./index-YpmziLMg.js";import"./index-DPXYEgdz.js";import"./index-Coaj1lHt.js";import"./useEventCallback-uz51Y23w.js";import"./SkeletonBar-CTy64fAf.js";import"./LoadingCell-Z9AAzKS9.js";import"./ColumnConfigDialog-2qzHZsqu.js";import"./DraggableList-DTSHp1Ii.js";import"./search-BJgzsAei.js";import"./Input-eCN9724n.js";import"./useControlled-C0uJcmsm.js";import"./Button-DoRYjZBD.js";import"./small-cross-CZg5giIs.js";import"./ActionButton-BijjX4lr.js";import"./Checkbox-TSfcgPuk.js";import"./useValueChanged-Dso7iA8F.js";import"./CollapsiblePanel-SwrmgAr0.js";import"./MultiColumnSortDialog-DP8lPfib.js";import"./MenuTrigger-vvTXbVH5.js";import"./CompositeItem-CAbmT9yz.js";import"./ToolbarRootContext-Bo_aNGPT.js";import"./getDisabledMountTransitionStyles-DBPmoJix.js";import"./getPseudoElementBounds-DIHB9vsV.js";import"./chevron-down-Cem4vbB0.js";import"./index-CVu1gKpb.js";import"./error-BpU3JwpA.js";import"./BaseCbacBanner-DNS9oBIc.js";import"./makeExternalStore-nfAmPwlH.js";import"./Tooltip-Bs9C1rJp.js";import"./PopoverPopup-DlcEpqfX.js";import"./debounce-Crg_S_Lg.js";import"./tick-FutLlINL.js";import"./DropdownField-Dhkja8wq.js";import"./isEqual-CMnP8-CM.js";import"./withOsdkMetrics-CLNWKIq7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
