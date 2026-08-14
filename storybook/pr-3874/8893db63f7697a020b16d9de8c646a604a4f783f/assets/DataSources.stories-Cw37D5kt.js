import{j as r}from"./iframe-BS39yabj.js";import{O as b}from"./object-table-BG2HpV_Z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DsqGB5Ee.js";import{u as g}from"./useOsdkClient-BEiGHmPL.js";import"./preload-helper-BlmF7poY.js";import"./Table-NR-u2LQJ.js";import"./index-azX0WN20.js";import"./Dialog-BdDEc9ZK.js";import"./cross-bmcz7kaq.js";import"./svgIconContainer-CNsteYTu.js";import"./useBaseUiId-D6zQUJH2.js";import"./InternalBackdrop-DdLVr0rp.js";import"./composite-CrL6ee8J.js";import"./index-DNFWNz_b.js";import"./index-DG4fpTh9.js";import"./index-PhutVXJ9.js";import"./useEventCallback-DbJ-5CM3.js";import"./SkeletonBar-D2_rdQx4.js";import"./LoadingCell-DLSxxkpW.js";import"./ColumnConfigDialog-BI7Wk6ld.js";import"./DraggableList-3XvF_fmY.js";import"./search-DAe8-jYH.js";import"./Input-D3GthuCR.js";import"./useControlled-BtFTec_4.js";import"./Button-iYAVh6AY.js";import"./small-cross-1NinHjR6.js";import"./ActionButton-pdu1jtw7.js";import"./Checkbox-BOw-3iNT.js";import"./useValueChanged-Cv2_6DC2.js";import"./CollapsiblePanel-BpV10IyX.js";import"./MultiColumnSortDialog-DF9I3qiO.js";import"./MenuTrigger-B-q30BGy.js";import"./CompositeItem-9rYzgPbG.js";import"./ToolbarRootContext-CI8IZR11.js";import"./getDisabledMountTransitionStyles-CAstZq8O.js";import"./getPseudoElementBounds-CWt6eGsw.js";import"./chevron-down-DlL6v6RD.js";import"./index-COrNsrGV.js";import"./error-BIF0zaRT.js";import"./BaseCbacBanner-0uknKwVN.js";import"./makeExternalStore-CRPXUjA_.js";import"./Tooltip-BrBmFfM2.js";import"./PopoverPopup-ByPglwJA.js";import"./debounce-BAByceoi.js";import"./tick-BLEDxvEm.js";import"./DropdownField--vh2Xda9.js";import"./isEqual-Dw_0jNQy.js";import"./withOsdkMetrics-D0DSfH2H.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
