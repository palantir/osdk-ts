import{j as r}from"./iframe--ZIBZMJQ.js";import{O as b}from"./object-table-KNrTILkI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-iG6HPZhr.js";import{u as g}from"./useOsdkClient-CZI38WK0.js";import"./preload-helper-BiE66roc.js";import"./Table-CR1ZY04U.js";import"./index-BYKsb6nS.js";import"./Dialog-BxHRHbYX.js";import"./cross-QLCI-etH.js";import"./svgIconContainer-11XNL8gH.js";import"./useBaseUiId-BfJLJwpt.js";import"./InternalBackdrop-z1APkrkS.js";import"./composite-DjX-WyFk.js";import"./index-3A3ZgJ7o.js";import"./index-DTFWeURW.js";import"./index-DJ0hEfax.js";import"./useEventCallback-nes60B0x.js";import"./SkeletonBar-C9ghf2W8.js";import"./LoadingCell-DsEnrI5y.js";import"./ColumnConfigDialog-BgHsIhTT.js";import"./DraggableList-C8jgXyiw.js";import"./search-BetwMOQy.js";import"./Input-wMnSWKve.js";import"./useControlled-CuA5uTC4.js";import"./Button-BVMM1AFw.js";import"./small-cross-AEvgNgh3.js";import"./ActionButton-CSQNhKKa.js";import"./Checkbox-BGlo_J32.js";import"./useValueChanged-B8quW5n_.js";import"./CollapsiblePanel-Cjhv8Ewx.js";import"./MultiColumnSortDialog-Cx4hmGkX.js";import"./MenuTrigger-DVt0mbBR.js";import"./CompositeItem-DMbKryF9.js";import"./ToolbarRootContext-Ca6p-z_B.js";import"./getDisabledMountTransitionStyles-BCrSG_ZI.js";import"./getPseudoElementBounds-CVaq16Fi.js";import"./chevron-down-DEwAc30E.js";import"./index-B5Q5H9tI.js";import"./error-5Bj03CYI.js";import"./BaseCbacBanner-DEoNC6xQ.js";import"./makeExternalStore-LwZ_z8rF.js";import"./Tooltip-Cs5IS7F_.js";import"./PopoverPopup-Br6iExL7.js";import"./debounce-DbrfhfA3.js";import"./tick-D8AASSmE.js";import"./DropdownField-C0LKkg1n.js";import"./isEqual-DKftO1kp.js";import"./withOsdkMetrics-CK4M-mJV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
