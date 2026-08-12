import{j as r}from"./iframe-B3k6St_T.js";import{O as b}from"./object-table-Bu29mECu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BYYLFyxJ.js";import{u as g}from"./useOsdkClient-Bmmq2OWY.js";import"./preload-helper-Bz3dVFdp.js";import"./Table-CDEsrxx0.js";import"./index-BvHXh5hH.js";import"./Dialog-BiHio090.js";import"./cross-DkN_e3qa.js";import"./svgIconContainer-CiJvVYR1.js";import"./useBaseUiId-CN4YGlgk.js";import"./InternalBackdrop-gL33YKiY.js";import"./composite-C_maXQ4a.js";import"./index-BOMAFt6Z.js";import"./index-DvV5NBUk.js";import"./index-CKFcz2T_.js";import"./useEventCallback-Yxia1zkB.js";import"./SkeletonBar-j7PuH9FN.js";import"./LoadingCell-RKZROzvJ.js";import"./ColumnConfigDialog-ddmYKID-.js";import"./DraggableList-8nnHB_Zu.js";import"./search-D1gWWYJX.js";import"./Input-CGzs6Mm3.js";import"./useControlled-DKV39VDG.js";import"./isEqual-w8i72UAZ.js";import"./isObject-Bl_L4n1V.js";import"./Button-CvyOEKt-.js";import"./ActionButton-1wJ96VeD.js";import"./Checkbox-BftSaVwY.js";import"./useValueChanged-DtsWOZvK.js";import"./CollapsiblePanel-DwSMhEAw.js";import"./MultiColumnSortDialog-IyVD_CMO.js";import"./MenuTrigger-Oyo3PTXg.js";import"./CompositeItem-C1S6KcsA.js";import"./ToolbarRootContext-C9TgeQ7l.js";import"./getDisabledMountTransitionStyles-DCt7ntxf.js";import"./getPseudoElementBounds-8Fl7H_Sb.js";import"./chevron-down-C7A59tL6.js";import"./index-D6Y2Irns.js";import"./error-D0JClcHo.js";import"./BaseCbacBanner-B6-usOnF.js";import"./makeExternalStore-CH1rZ3vr.js";import"./Tooltip-8qMs2j0L.js";import"./PopoverPopup-DnNn1J9U.js";import"./toNumber-wPhy8-WE.js";import"./tick-qtTLf652.js";import"./DropdownField-CRNhBggS.js";import"./withOsdkMetrics-Da-HTJgY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
