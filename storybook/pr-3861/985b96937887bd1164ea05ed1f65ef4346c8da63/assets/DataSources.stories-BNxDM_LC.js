import{j as r}from"./iframe-DIZ-Bu8w.js";import{O as b}from"./object-table-DXEf7QZp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DFMba4S8.js";import{u as g}from"./useOsdkClient-BScEIiCr.js";import"./preload-helper-BCeaJvSh.js";import"./Table-CpSGMOkR.js";import"./index-U9LN2Bz3.js";import"./Dialog-DRlRU3T4.js";import"./cross-DxgTLWiz.js";import"./svgIconContainer-IKodGSm3.js";import"./useBaseUiId-CBNbS5zc.js";import"./InternalBackdrop-yM8Okk6y.js";import"./composite-g9iDGAQe.js";import"./index-C_o4DvqR.js";import"./index-C_qvm4WD.js";import"./index-gGnzolpv.js";import"./useEventCallback-BDzfSq7p.js";import"./SkeletonBar-C61w2HiA.js";import"./LoadingCell-DjxUE7vP.js";import"./ColumnConfigDialog-CK0v3LgS.js";import"./DraggableList-DzoglXEc.js";import"./search-DmtLA8wB.js";import"./Input-CIeGAlok.js";import"./useControlled-CLVHgJsp.js";import"./Button-B1ALhdFr.js";import"./small-cross-CRaqECGa.js";import"./ActionButton-Dlu16gsr.js";import"./Checkbox-YrU0nqcl.js";import"./useValueChanged-CGUyZDFO.js";import"./CollapsiblePanel-DPTmyULg.js";import"./MultiColumnSortDialog-DqqrwBbG.js";import"./MenuTrigger-DEfP1V7x.js";import"./CompositeItem-BtZ6x-gO.js";import"./ToolbarRootContext-BVSgixiH.js";import"./getDisabledMountTransitionStyles-CQ2DPXAp.js";import"./getPseudoElementBounds-BUnDKKdE.js";import"./chevron-down-DSfB9wHE.js";import"./index-CkInxViu.js";import"./error-uSSd40F1.js";import"./BaseCbacBanner-Qx6E67Bb.js";import"./makeExternalStore-DE0i2YSI.js";import"./Tooltip-BMr-3bqI.js";import"./PopoverPopup-DYZGNom1.js";import"./debounce-C3kkqtjg.js";import"./tick-BgvY-8AZ.js";import"./DropdownField-qfJaQs7S.js";import"./isEqual-luc_zc0m.js";import"./withOsdkMetrics-CD3VlAOg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
