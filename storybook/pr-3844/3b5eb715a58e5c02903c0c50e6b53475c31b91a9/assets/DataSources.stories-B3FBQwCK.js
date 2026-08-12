import{j as r}from"./iframe-DRBkbE1i.js";import{O as b}from"./object-table-C_j_0jcR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cb-7YRvl.js";import{u as g}from"./useOsdkClient-CJVpIN8w.js";import"./preload-helper-Bhy-vhLy.js";import"./Table-C1q3NVW5.js";import"./index-Ga9rMgQo.js";import"./Dialog-DpzItFLS.js";import"./cross-0Mj0-pu3.js";import"./svgIconContainer-GQruUs5P.js";import"./useBaseUiId-BZVOUgQ3.js";import"./InternalBackdrop-1gUwgard.js";import"./composite-D-yjAodN.js";import"./index-BnWv0qmu.js";import"./index-ucRzESfs.js";import"./index-sOMbo7xM.js";import"./useEventCallback-CrX-MfN8.js";import"./SkeletonBar-Du0j_bJ1.js";import"./LoadingCell-B-pvt2hb.js";import"./ColumnConfigDialog-D9xD06Iq.js";import"./DraggableList-ClvcvVVQ.js";import"./search-BCFpbh-w.js";import"./Input-5siurHkP.js";import"./useControlled-DwqloCO6.js";import"./isEqual-BUHBmoa0.js";import"./isObject-DtZ0hGEB.js";import"./Button-BLvvEGYy.js";import"./ActionButton-C53YW_7q.js";import"./Checkbox-ClDUwm9r.js";import"./useValueChanged-CwOVIz65.js";import"./CollapsiblePanel-B6DMNgeu.js";import"./MultiColumnSortDialog-DwXXtltp.js";import"./MenuTrigger-Cb_yabDY.js";import"./CompositeItem-DFqDcWEk.js";import"./ToolbarRootContext-D1BoJMvj.js";import"./getDisabledMountTransitionStyles-BsNbfQXH.js";import"./getPseudoElementBounds-BEb3Hnaa.js";import"./chevron-down-XFaMqkP6.js";import"./index-CV6Dvu1R.js";import"./error-CZAmZxlc.js";import"./BaseCbacBanner-DHSUKASY.js";import"./makeExternalStore-zFNhFc_7.js";import"./Tooltip-kNmVaPUd.js";import"./PopoverPopup-DnoVF_UW.js";import"./toNumber-Bn9QajWk.js";import"./tick-HaTM7KoE.js";import"./DropdownField-DuRoHfH_.js";import"./withOsdkMetrics-BK4JgsVP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
