import{j as r}from"./iframe-Ct_LTQ93.js";import{O as b}from"./object-table-BjpLJk-N.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Diz2bEyx.js";import{u as g}from"./useOsdkClient-D0JiDnls.js";import"./preload-helper-DHNJcgM4.js";import"./Table-BUnG-MNj.js";import"./index-CjWY7hqr.js";import"./Dialog-CEaWvMaV.js";import"./cross-BMcPCyGb.js";import"./svgIconContainer-D_GmqO65.js";import"./useBaseUiId-BDRI1jLy.js";import"./InternalBackdrop-BSWQCnA5.js";import"./composite-APUMWHCt.js";import"./index-mm_jw7Xo.js";import"./index-9R-_TKRE.js";import"./index-kI2DKCg6.js";import"./useEventCallback-C35WzWzm.js";import"./SkeletonBar-CP1CBn37.js";import"./LoadingCell-BKc_rCRP.js";import"./ColumnConfigDialog-DQiVRSY-.js";import"./DraggableList-BaNTueOA.js";import"./search-CNF4ePSc.js";import"./Input-BZ7vEK6X.js";import"./useControlled-BcWumCfO.js";import"./Button-BbozFPaz.js";import"./small-cross-C7igDgRw.js";import"./ActionButton-B0vdmru0.js";import"./Checkbox-Da4cP95T.js";import"./useValueChanged-DSn7N3P8.js";import"./CollapsiblePanel-CDP6sO-o.js";import"./MultiColumnSortDialog-nOaBMayw.js";import"./MenuTrigger-BGg02pB-.js";import"./CompositeItem-BWQS8Cwe.js";import"./ToolbarRootContext-CUntK8-H.js";import"./getDisabledMountTransitionStyles-lPIcIbkl.js";import"./getPseudoElementBounds-gA8sF9Xl.js";import"./chevron-down-BRMAFES-.js";import"./index-BEQyGiD3.js";import"./error-BEzuwBxE.js";import"./BaseCbacBanner-CPqW-ZZQ.js";import"./makeExternalStore-DCOlRUS1.js";import"./Tooltip-CI3Mtqz5.js";import"./PopoverPopup-C5_b-GPn.js";import"./debounce-CqGuf8Za.js";import"./tick-CV01Z0Xq.js";import"./DropdownField-CvbC-XSP.js";import"./isEqual-Bk4NXlAm.js";import"./withOsdkMetrics-BxODEj1w.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
