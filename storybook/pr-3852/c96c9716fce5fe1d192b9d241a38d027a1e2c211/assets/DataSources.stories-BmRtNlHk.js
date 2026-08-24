import{j as r}from"./iframe-DzT5j6tC.js";import{O as b}from"./object-table-BCMniGH5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B9sYusUH.js";import{u as g}from"./useOsdkClient-qXeZXSCS.js";import"./preload-helper-B-8AR-WS.js";import"./Table-BK9mPHED.js";import"./index-Du12mPUJ.js";import"./Dialog-Ddsywm3S.js";import"./cross-D85Hg8OP.js";import"./svgIconContainer-Bzq4qT7m.js";import"./useBaseUiId-CpQ8jfP-.js";import"./InternalBackdrop-BCahMtwn.js";import"./composite-BCA7ssjy.js";import"./index-DAVqPwR5.js";import"./index-CTNdmRCH.js";import"./index-C-UHVdd5.js";import"./useEventCallback-BqydB81L.js";import"./SkeletonBar-DNThCLH9.js";import"./LoadingCell-CpIup8j7.js";import"./ColumnConfigDialog-BLnr_Ssi.js";import"./DraggableList-Q1AkYwIE.js";import"./search-DpfM7OJ3.js";import"./Input-MtWlDuZi.js";import"./useControlled-dRwpZLWP.js";import"./Button-CbXsMpDo.js";import"./small-cross-BdXSABdt.js";import"./ActionButton-Bikf6G7r.js";import"./Checkbox-BK8rsuCR.js";import"./useValueChanged-D95RiMEI.js";import"./CollapsiblePanel-qsyp5uP7.js";import"./MultiColumnSortDialog-CrFxJwbI.js";import"./MenuTrigger-Cd_2Jq9c.js";import"./CompositeItem-BHaHERWU.js";import"./ToolbarRootContext-BTqh8qKL.js";import"./getDisabledMountTransitionStyles-q1RxA6aN.js";import"./getPseudoElementBounds-DUGfes6K.js";import"./chevron-down-DCGqt8p6.js";import"./index-DVvQaOMD.js";import"./error-DhCIc3En.js";import"./BaseCbacBanner-CSMzJcXJ.js";import"./makeExternalStore-B9-sDT_L.js";import"./Tooltip-DFuWFTMp.js";import"./PopoverPopup-DZI317gO.js";import"./debounce-Ble3VJ_v.js";import"./tick-Dk_XebTk.js";import"./DropdownField-CEnTX5QL.js";import"./isEqual-BHNs_CPb.js";import"./withOsdkMetrics-BwVYFtll.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
