import{j as r}from"./iframe-B_oy6e6M.js";import{O as b}from"./object-table-Du3yIVEE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D6qnU3ur.js";import{u as g}from"./useOsdkClient-Dux18aMq.js";import"./preload-helper-CWVJ8YRK.js";import"./Table-DEfKmmNN.js";import"./index-DZJD6sDp.js";import"./Dialog-BBAPdTrB.js";import"./cross-DSgNe7Mr.js";import"./svgIconContainer-C6P8MOfd.js";import"./useBaseUiId-POvatS82.js";import"./InternalBackdrop-Dp2uHLRa.js";import"./composite-ZAoedBeg.js";import"./index-T8MVz2I4.js";import"./index-CS3PWFhc.js";import"./index-D-0Q_ZIA.js";import"./useEventCallback-DYFfeE7x.js";import"./SkeletonBar-D6M-u8eM.js";import"./LoadingCell-BoT4vmnz.js";import"./ColumnConfigDialog-TYSu0W40.js";import"./DraggableList-DGByefv8.js";import"./search-DCED0BUt.js";import"./Input-DTC7T4Cz.js";import"./useControlled-zA33IEOZ.js";import"./Button-CrOvgvfA.js";import"./small-cross-QUZC1axO.js";import"./ActionButton-CH9G9AI1.js";import"./Checkbox-Cim-DUIZ.js";import"./useValueChanged-mZg_qe7l.js";import"./CollapsiblePanel-YftoqHFR.js";import"./MultiColumnSortDialog-BWXP5wwp.js";import"./MenuTrigger-SGHREb-3.js";import"./CompositeItem-C4ZzMkp4.js";import"./ToolbarRootContext-DJgLJnil.js";import"./getDisabledMountTransitionStyles-x7AHHcyr.js";import"./getPseudoElementBounds-DZ3pLnsf.js";import"./chevron-down-rpYvjBzs.js";import"./index-BXsPCItr.js";import"./error-BNXYH_2v.js";import"./BaseCbacBanner-XuLOXO9d.js";import"./makeExternalStore-A3uWrp0V.js";import"./Tooltip-DbdokS7N.js";import"./PopoverPopup-a2ucjmTV.js";import"./debounce-ZroeBVII.js";import"./tick-BcOBtFgu.js";import"./DropdownField--s7bes0M.js";import"./isEqual-CPn_97Mq.js";import"./withOsdkMetrics-C137OdQw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
