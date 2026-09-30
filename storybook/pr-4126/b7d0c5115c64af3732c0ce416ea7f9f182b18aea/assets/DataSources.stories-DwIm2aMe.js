import{j as r}from"./iframe-ByGhu7Rs.js";import{O as b}from"./object-table-UWXH19Rt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-OU9TaSJ-.js";import{u as g}from"./useOsdkClient-WMaGmtpN.js";import"./preload-helper-CovqUMwC.js";import"./Table-DPgHb55A.js";import"./index-D9CH1iu6.js";import"./Dialog-BozD2bDZ.js";import"./cross--Vb8zQ9y.js";import"./svgIconContainer-BM73F7-1.js";import"./useBaseUiId-BtV3BRGt.js";import"./InternalBackdrop-BZh54V-b.js";import"./composite-5pEQHoFG.js";import"./index-CSR_OQNU.js";import"./index-Sa0Sgq1C.js";import"./index-w0bHng9i.js";import"./useEventCallback-D3_oYaV2.js";import"./SkeletonBar-C48VFTJF.js";import"./LoadingCell-B7k1mu8o.js";import"./ColumnConfigDialog-Y5i0ZI6b.js";import"./DraggableList-C0OfMYfq.js";import"./search-CqZJJM3l.js";import"./Input-CPzfsq5Q.js";import"./useControlled-BMq25ryS.js";import"./Button-FdiR0YBj.js";import"./small-cross-DnaBmHYJ.js";import"./ActionButton-DeQetOWP.js";import"./Checkbox-CEre0Gw9.js";import"./useValueChanged-B31lb46w.js";import"./CollapsiblePanel-DKKHH52r.js";import"./MultiColumnSortDialog-UHh_3k7d.js";import"./MenuTrigger-BumYsrfX.js";import"./CompositeItem-DOTYC0vy.js";import"./ToolbarRootContext--ybsc-5r.js";import"./getDisabledMountTransitionStyles-NHd85YGu.js";import"./getPseudoElementBounds-wyGE4tZv.js";import"./chevron-down-CVFp5ZF3.js";import"./index-BhXiEem_.js";import"./error-BtdAILjI.js";import"./BaseCbacBanner-DaEullF4.js";import"./makeExternalStore-Bi9EmxuC.js";import"./Tooltip-C99_Q-RE.js";import"./PopoverPopup-CJYpnk7I.js";import"./debounce-DsqtKIvY.js";import"./tick-COxZ6M1z.js";import"./DropdownField-uya8Zzk7.js";import"./isEqual-SU-dZrhT.js";import"./withOsdkMetrics-Y0bjdApQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
