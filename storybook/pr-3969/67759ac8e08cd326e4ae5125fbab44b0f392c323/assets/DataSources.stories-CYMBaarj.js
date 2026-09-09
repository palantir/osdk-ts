import{j as r}from"./iframe-B3Tmb11O.js";import{O as b}from"./object-table-BCvZmn17.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CAX5zgpH.js";import{u as g}from"./useOsdkClient-CEGzqg9X.js";import"./preload-helper-gakQdOi4.js";import"./Table-DlLJZcDW.js";import"./index-kZbgPBf-.js";import"./Dialog-DXajQC4U.js";import"./cross-C-JhHfM1.js";import"./svgIconContainer-BsQARODV.js";import"./useBaseUiId-Bm-vJATe.js";import"./InternalBackdrop-BOPEQbPn.js";import"./composite-2j3kB3hN.js";import"./index-DfPJChMi.js";import"./index-QmBbQjFR.js";import"./index-e_qtktns.js";import"./useEventCallback-B042jdme.js";import"./SkeletonBar-C_iP2YwF.js";import"./LoadingCell-CM3CyC3m.js";import"./ColumnConfigDialog-Bz076Z86.js";import"./DraggableList-BZjWJwF_.js";import"./search-ZvK9KowR.js";import"./Input-CWGLraK0.js";import"./useControlled-uOco89xC.js";import"./Button-BRlUcQED.js";import"./small-cross-DXMdsdMX.js";import"./ActionButton-BTBAdMJU.js";import"./Checkbox-MCdCcxi7.js";import"./useValueChanged-BchUu2C7.js";import"./CollapsiblePanel-DLuGcKFZ.js";import"./MultiColumnSortDialog-DcdKGjbm.js";import"./MenuTrigger-DKp4zb-V.js";import"./CompositeItem-BKoGSNiO.js";import"./ToolbarRootContext-CqEf4XEU.js";import"./getDisabledMountTransitionStyles-BzgaS7Qg.js";import"./getPseudoElementBounds-DAnTahBd.js";import"./chevron-down-CsQH01fJ.js";import"./index-D4PUZNNP.js";import"./error-DCFU_pHO.js";import"./BaseCbacBanner-CgGJwGzr.js";import"./makeExternalStore-fsIP6Iuw.js";import"./Tooltip-DlikgLh9.js";import"./PopoverPopup-B8BhyguS.js";import"./debounce-CWwSNpvq.js";import"./tick-Cl-i5oQo.js";import"./DropdownField-T9pQTlKf.js";import"./isEqual-CFaY0btu.js";import"./withOsdkMetrics-BtfS3RDS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
