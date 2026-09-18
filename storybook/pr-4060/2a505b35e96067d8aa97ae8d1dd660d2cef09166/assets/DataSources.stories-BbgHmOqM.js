import{j as r}from"./iframe-DYP6I0EJ.js";import{O as b}from"./object-table-DMM2jzgg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-By8OMHuo.js";import{u as g}from"./useOsdkClient-Cplqkh8-.js";import"./preload-helper-sS4hYFkK.js";import"./Table-CuYv3cn2.js";import"./index-DIhwEquj.js";import"./Dialog-BjY_b077.js";import"./cross-bDPWwylA.js";import"./svgIconContainer-C4jga87M.js";import"./useBaseUiId-BZiJrEE8.js";import"./InternalBackdrop-71TCmGDX.js";import"./composite-DQKMgq2L.js";import"./index-kgSrvS5D.js";import"./index-C2R1rTgL.js";import"./index-Bu9lWdWG.js";import"./useEventCallback-viQBOCoU.js";import"./SkeletonBar-BcB8RILE.js";import"./LoadingCell-BACnWh3V.js";import"./ColumnConfigDialog-12MNYR_s.js";import"./DraggableList-ka3cAseo.js";import"./search-DC-q2Fvd.js";import"./Input-CX9B7mOe.js";import"./useControlled-CBcSqYsQ.js";import"./Button-BBpZA8JE.js";import"./small-cross--hwGWXHG.js";import"./ActionButton-BWEQ465S.js";import"./Checkbox-C66Slb1i.js";import"./useValueChanged-DYyvPFZ9.js";import"./CollapsiblePanel-gA7_qpOX.js";import"./MultiColumnSortDialog--pqZCkrG.js";import"./MenuTrigger-DaJlolSj.js";import"./CompositeItem-BuWL3KPI.js";import"./ToolbarRootContext-6dERQM_o.js";import"./getDisabledMountTransitionStyles-_04rz-EH.js";import"./getPseudoElementBounds-pXf6ipeD.js";import"./chevron-down-DgAcZbyD.js";import"./index-Bbf985kl.js";import"./error-BJ0QSSt_.js";import"./BaseCbacBanner-Dh6gG5qi.js";import"./makeExternalStore-DN0LusY8.js";import"./Tooltip-BRru9_rR.js";import"./PopoverPopup-BtgbBgDL.js";import"./debounce-BaQbuarC.js";import"./tick-Clj_LCer.js";import"./DropdownField-CjaSoiXx.js";import"./isEqual-CZ5dkiZB.js";import"./withOsdkMetrics-1ciRu-eY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
