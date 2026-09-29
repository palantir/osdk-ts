import{j as r}from"./iframe-BjbHRI0z.js";import{O as b}from"./object-table-CRsH42Ki.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ltnKqwbc.js";import{u as g}from"./useOsdkClient-EcavFoEZ.js";import"./preload-helper-BUM7BTsm.js";import"./Table-CjrVb0t9.js";import"./index-CGlA5dXU.js";import"./Dialog-DAdIz198.js";import"./cross-DFCaIKoy.js";import"./svgIconContainer-BQW7jGob.js";import"./useBaseUiId-BfNPJ7-Z.js";import"./InternalBackdrop-44a6AIl-.js";import"./composite-BFEQAufL.js";import"./index-CI8QNR9V.js";import"./index-CiZKopjl.js";import"./index-DLLtCTGJ.js";import"./useEventCallback-C_WUDWdo.js";import"./SkeletonBar-CAHftrLV.js";import"./LoadingCell-E8N45omU.js";import"./ColumnConfigDialog-BDpr2Vqq.js";import"./DraggableList-UwyC-4Gj.js";import"./search-DugTyXej.js";import"./Input-BVornoU9.js";import"./useControlled-rSaw5pb5.js";import"./Button-D9KcyGxn.js";import"./small-cross-CN9po8rh.js";import"./ActionButton-BDL-FgSv.js";import"./Checkbox-BJPUMEsA.js";import"./useValueChanged-ls6nut0P.js";import"./CollapsiblePanel-D9oIVLW-.js";import"./MultiColumnSortDialog-Bj0wdEYx.js";import"./MenuTrigger-EwmqbwYj.js";import"./CompositeItem-BUg5QAEv.js";import"./ToolbarRootContext-BIp7KVlb.js";import"./getDisabledMountTransitionStyles-DIaPn1J1.js";import"./getPseudoElementBounds-Cz_FAddT.js";import"./chevron-down-C9nnJYZM.js";import"./index-D90yLxts.js";import"./error-Cl6EUNrf.js";import"./BaseCbacBanner-CF7bmkgw.js";import"./makeExternalStore-CeeAAQpn.js";import"./Tooltip-B88xm2HD.js";import"./PopoverPopup-DUUESn5Y.js";import"./debounce-B0atJeU8.js";import"./tick-BUlj9YHj.js";import"./DropdownField-D4-t_biV.js";import"./isEqual-BsA9kd7g.js";import"./withOsdkMetrics-BjQ5Qn0j.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
