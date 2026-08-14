import{j as r}from"./iframe-ZQnTw6Mu.js";import{O as b}from"./object-table-VjCEQ2g5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ItIb_Qaf.js";import{u as g}from"./useOsdkClient-FhDWA4Y3.js";import"./preload-helper-COwmt9io.js";import"./Table-DO7e5-3Q.js";import"./index-Bak_kxpO.js";import"./Dialog-C8YwB1to.js";import"./cross-dvjzW6Ys.js";import"./svgIconContainer-zMynHcXT.js";import"./useBaseUiId-Av3ESRn4.js";import"./InternalBackdrop-Qsz8azrK.js";import"./composite-CNYNMU2K.js";import"./index-Ik5TkMWF.js";import"./index-Bf52DBTe.js";import"./index-DfpvWPDi.js";import"./useEventCallback-CeUbtgbw.js";import"./SkeletonBar-Dgm9uPl0.js";import"./LoadingCell-CIjhjeS2.js";import"./ColumnConfigDialog-BWT2uBSi.js";import"./DraggableList-Ctrx9KC6.js";import"./search-BcJ2_wX2.js";import"./Input-BQqVIR5S.js";import"./useControlled-BApUdZQ6.js";import"./Button-kYFmJJeP.js";import"./small-cross-BLKDIIIs.js";import"./ActionButton-DY2D-_nH.js";import"./Checkbox-B7Q3lTD0.js";import"./useValueChanged-C4pb924U.js";import"./CollapsiblePanel-CxVYe-zl.js";import"./MultiColumnSortDialog-DYTtJA9W.js";import"./MenuTrigger-BovXshwK.js";import"./CompositeItem-agXPXgTu.js";import"./ToolbarRootContext-DbSl-Ybu.js";import"./getDisabledMountTransitionStyles-BtRqleFK.js";import"./getPseudoElementBounds-B3-Fohbc.js";import"./chevron-down-BYkOWi_f.js";import"./index-BKq3a1zJ.js";import"./error-BXfejV6f.js";import"./BaseCbacBanner-BUe4BhHO.js";import"./makeExternalStore-BK88dgnr.js";import"./Tooltip-CU9szSp1.js";import"./PopoverPopup-CEcziLeh.js";import"./debounce-B20oACA_.js";import"./tick-CK4a_7vG.js";import"./DropdownField-CyRtpzR4.js";import"./isEqual-BMOE5IT2.js";import"./withOsdkMetrics-CrtXH3Cf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
