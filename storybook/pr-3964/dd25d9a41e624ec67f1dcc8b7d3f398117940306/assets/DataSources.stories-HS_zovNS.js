import{j as r}from"./iframe-5sgXXUq2.js";import{O as b}from"./object-table-aOrhl4B7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dnq1Bpma.js";import{u as g}from"./useOsdkClient-CvRRMyub.js";import"./preload-helper-Cbn9zcHA.js";import"./Table-BgEDWebR.js";import"./index-CzwNxfu7.js";import"./Dialog-CaIF2dWF.js";import"./cross-Dl1YYoqq.js";import"./svgIconContainer-6O_QyJta.js";import"./useBaseUiId-DG_QbP_U.js";import"./InternalBackdrop-CjtV5ZAW.js";import"./composite-Ine8e3tf.js";import"./index-C3HPrqRk.js";import"./index-Dnj1V73h.js";import"./index-BBV34otm.js";import"./useEventCallback-BdN49Cxy.js";import"./SkeletonBar-BEL6Gir4.js";import"./LoadingCell-C1_I6sfl.js";import"./ColumnConfigDialog-BcHlPWgE.js";import"./DraggableList-D4fBscVn.js";import"./search-BYA2jSn3.js";import"./Input-CwUkFVhs.js";import"./useControlled-siu4g8xe.js";import"./Button-71PqqjpD.js";import"./small-cross-B4u9H8ya.js";import"./ActionButton-BO7jWeao.js";import"./Checkbox-DGdxwXIf.js";import"./useValueChanged-C7csg4cA.js";import"./CollapsiblePanel-Dcs-Jidu.js";import"./MultiColumnSortDialog-DGOxrWta.js";import"./MenuTrigger-BGZdYvp4.js";import"./CompositeItem-CIAR7LV4.js";import"./ToolbarRootContext-HX5a3LbS.js";import"./getDisabledMountTransitionStyles-CuDkESvM.js";import"./getPseudoElementBounds-DuTJjluI.js";import"./chevron-down-B4APaT5X.js";import"./index-BUovi2pL.js";import"./error-CIAmmsFo.js";import"./BaseCbacBanner-CHao_-T2.js";import"./makeExternalStore-D7x2N1Sq.js";import"./Tooltip-Bz_qehDJ.js";import"./PopoverPopup-BjatbugG.js";import"./debounce-D_ZNVjIE.js";import"./tick-BcyhdjRi.js";import"./DropdownField-DDOypfNs.js";import"./isEqual-BD5xaPW8.js";import"./withOsdkMetrics-Dp93P8HI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
