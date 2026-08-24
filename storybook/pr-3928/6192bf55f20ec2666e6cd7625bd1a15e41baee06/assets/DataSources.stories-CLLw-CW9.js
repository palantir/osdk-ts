import{j as r}from"./iframe-ZcCW6_Wz.js";import{O as b}from"./object-table-DSC3APB0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-iz0ijv0X.js";import{u as g}from"./useOsdkClient-CchBrSdw.js";import"./preload-helper-BB_y-aog.js";import"./Table-bPyT45_u.js";import"./index-DyeMh41W.js";import"./Dialog-Bk-FWIZW.js";import"./cross-wMIvDcbp.js";import"./svgIconContainer-0fT5nrJe.js";import"./useBaseUiId-BpaZn96w.js";import"./InternalBackdrop-CY-OiTbx.js";import"./composite-foIRj0KC.js";import"./index-CBeU0MC7.js";import"./index-T8wYhAz8.js";import"./index-DlkuYEj_.js";import"./useEventCallback-D4DJY73l.js";import"./SkeletonBar-Cg2dgNGY.js";import"./LoadingCell-B5SIM5LH.js";import"./ColumnConfigDialog-UzbFEaKV.js";import"./DraggableList-BadaIhe-.js";import"./search-Bc3gx_gy.js";import"./Input-Dpme7joy.js";import"./useControlled-DiaTlfr8.js";import"./Button-Cm8wb-cw.js";import"./small-cross-BbnAuCAy.js";import"./ActionButton-ElN4wuMZ.js";import"./Checkbox-Bk41vIIz.js";import"./useValueChanged-CuPWfF1v.js";import"./CollapsiblePanel-DMPMYfth.js";import"./MultiColumnSortDialog-CuBwNQkn.js";import"./MenuTrigger-iAuxsFAd.js";import"./CompositeItem-B_VWcRPv.js";import"./ToolbarRootContext-BqQcS-8Q.js";import"./getDisabledMountTransitionStyles-BCKcQTMv.js";import"./getPseudoElementBounds-DDkxky54.js";import"./chevron-down-BAQtbrwT.js";import"./index-BJaF-zGC.js";import"./error-DOcHLiil.js";import"./BaseCbacBanner-CQrvMZnF.js";import"./makeExternalStore-BySX7A9V.js";import"./Tooltip-1LklJdbb.js";import"./PopoverPopup-DFELR-u8.js";import"./debounce-CXdCzSka.js";import"./tick-BVQ9cMuo.js";import"./DropdownField-DXdhalb8.js";import"./isEqual-BsjTcvbt.js";import"./withOsdkMetrics-C-7rZzkE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
