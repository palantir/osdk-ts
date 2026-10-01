import{j as r}from"./iframe-BHP--iSv.js";import{O as b}from"./object-table-CiDmmhiS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Comg_l-v.js";import{u as g}from"./useOsdkClient-Bt205Lro.js";import"./preload-helper-4Y0sWPF7.js";import"./Table-DQpHWODC.js";import"./index-CuQOASnK.js";import"./Dialog-BKKVoGn9.js";import"./cross-D3_DOx--.js";import"./svgIconContainer-XMK9JozI.js";import"./useBaseUiId-txgvadn-.js";import"./InternalBackdrop-BaP5BEVm.js";import"./composite-CY1_GtTz.js";import"./index-BMZH6GYS.js";import"./index-CjU2x-RF.js";import"./index-_cBTnAHR.js";import"./useEventCallback-By_yXujH.js";import"./SkeletonBar-3dHEcipt.js";import"./LoadingCell-DsG_X0ml.js";import"./ColumnConfigDialog-BT6S1fEv.js";import"./DraggableList-CaUaYMqt.js";import"./search-gxC0SZFk.js";import"./Input-DBfp7isZ.js";import"./useControlled-DACQJINy.js";import"./Button-cuAOjsWC.js";import"./small-cross-CT1xO2rS.js";import"./ActionButton-CgEHLRCh.js";import"./Checkbox-CrRIvHD3.js";import"./useValueChanged-MdzQIZy9.js";import"./CollapsiblePanel-BStH85wc.js";import"./MultiColumnSortDialog-xA9xRG8E.js";import"./MenuTrigger-BwG1oPrV.js";import"./CompositeItem-QqJnKLYC.js";import"./ToolbarRootContext-i6dOGAi5.js";import"./getDisabledMountTransitionStyles-D9c4uTR_.js";import"./getPseudoElementBounds-CL-DWHCc.js";import"./chevron-down-BptITD6J.js";import"./index-C-eIeMvP.js";import"./error-Bl2IH4zy.js";import"./BaseCbacBanner-tJbKI--4.js";import"./makeExternalStore-nAPJO73f.js";import"./Tooltip-B6i-uyb3.js";import"./PopoverPopup-sbiZa-o-.js";import"./debounce-B6E0h1Dy.js";import"./tick-Dy2Ajo8a.js";import"./DropdownField-CdixWEkP.js";import"./isEqual-BuHIXC9x.js";import"./withOsdkMetrics-xpnG9elc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
