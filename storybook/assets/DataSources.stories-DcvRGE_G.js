import{j as r}from"./iframe-DnkZBU_s.js";import{O as b}from"./object-table-CGRqNSp7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C4DzpoUD.js";import{u as g}from"./useOsdkClient-DsdDCC_g.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BTqH_OzT.js";import"./index-Twl2Yec2.js";import"./Dialog-DZz-I4Yg.js";import"./cross-VJ1Xhfzd.js";import"./svgIconContainer-Q5pL_kyU.js";import"./useBaseUiId-zN2OIme-.js";import"./InternalBackdrop-qQYyo8Aq.js";import"./composite-C8UkqdZX.js";import"./index-e48OPfBl.js";import"./index-B-feRM5a.js";import"./index-D8RsbEg-.js";import"./useEventCallback-sPIyL2oh.js";import"./SkeletonBar-DThVILbx.js";import"./LoadingCell-CQwN2qo8.js";import"./ColumnConfigDialog-CE81TjDT.js";import"./DraggableList-ChOw6E8T.js";import"./search-Dr69VxcO.js";import"./Input-kebRx2SD.js";import"./useControlled-Bf8g-fcX.js";import"./Button-DhKykdrC.js";import"./small-cross-CovzpZRI.js";import"./ActionButton-Dy9qrhe6.js";import"./Checkbox-YF4J1gUw.js";import"./useValueChanged-CD6SQReb.js";import"./CollapsiblePanel-Cc6hsa-S.js";import"./MultiColumnSortDialog-CxgaCaFw.js";import"./MenuTrigger-CpSU6k-5.js";import"./CompositeItem-CnMbPbIm.js";import"./ToolbarRootContext-C8MimhOM.js";import"./getDisabledMountTransitionStyles-DG0BDKFw.js";import"./getPseudoElementBounds-Cyh96wJ4.js";import"./chevron-down-0w-qoQFW.js";import"./index-DxCMtj6T.js";import"./error-DnS223r_.js";import"./BaseCbacBanner-BoQhx0vv.js";import"./makeExternalStore-C3h3EPrK.js";import"./Tooltip-BNLJju5c.js";import"./PopoverPopup-bkZpgw0I.js";import"./debounce-BhxHqivV.js";import"./tick-D5_MceeO.js";import"./DropdownField-rO0m6kph.js";import"./isEqual-BjLkGY5Q.js";import"./withOsdkMetrics-CS0c_ats.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
