import{j as r}from"./iframe-I5kvh-Kw.js";import{O as b}from"./object-table-Cr0S9q82.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-JR9uvnE1.js";import{u as g}from"./useOsdkClient-CHvk60Or.js";import"./preload-helper-Bdf318pV.js";import"./Table-TtSnZhQr.js";import"./index-HKnhZxyX.js";import"./Dialog-mqgafTiX.js";import"./cross-Yl6g30y6.js";import"./svgIconContainer-DDPN3ss8.js";import"./useBaseUiId-BejWRuZ2.js";import"./InternalBackdrop-AewAO-J_.js";import"./composite-DzvS9mVY.js";import"./index-BV_M3ZY7.js";import"./index-B3JolPJS.js";import"./index-Dc5Qye8S.js";import"./useEventCallback-pdwLNnur.js";import"./SkeletonBar-kcsCYLu4.js";import"./LoadingCell-DtTIvVBW.js";import"./ColumnConfigDialog-BCP5cr4v.js";import"./DraggableList-CcLt-lZ7.js";import"./search-C9rUiq_s.js";import"./Input-GvrpBokI.js";import"./useControlled-B-k81KQz.js";import"./Button-B2DkfEqk.js";import"./small-cross-Bt34L26C.js";import"./ActionButton-CqQaVHKu.js";import"./Checkbox-BciDkEMh.js";import"./useValueChanged-B0q3nMZ1.js";import"./CollapsiblePanel-e6KM6j36.js";import"./MultiColumnSortDialog-geU7VG77.js";import"./MenuTrigger--lameju1.js";import"./CompositeItem-Ck73puur.js";import"./ToolbarRootContext-BpC1haoE.js";import"./getDisabledMountTransitionStyles-BX75q4sb.js";import"./getPseudoElementBounds-Bc29vczI.js";import"./chevron-down-BWVLfJxG.js";import"./index-BYHjFf0T.js";import"./error-Dywin3-5.js";import"./BaseCbacBanner-MQh6F2xl.js";import"./makeExternalStore-CUhQIJ-n.js";import"./Tooltip-DU2yzwco.js";import"./PopoverPopup-C0f2Xvwy.js";import"./debounce-DwNlwyza.js";import"./tick-CMqxctjO.js";import"./DropdownField-ceLSuDDZ.js";import"./isEqual-CvGgOlJg.js";import"./withOsdkMetrics-CldLsQ2u.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
