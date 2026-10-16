import{j as r}from"./iframe-SdQCyUgp.js";import{O as b}from"./object-table-CorJDmXH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C1G8N9L3.js";import{u as g}from"./useOsdkClient-DlUfDwbC.js";import"./preload-helper-CW3K-5XG.js";import"./Table-CEXXqsEZ.js";import"./index-D3TvMuk-.js";import"./Dialog-CAeBKUuI.js";import"./cross-5HR9Xmh-.js";import"./svgIconContainer-DRjj58Q8.js";import"./useBaseUiId-CBeYQDU3.js";import"./InternalBackdrop-C_eB-9md.js";import"./composite-DgbmPZb7.js";import"./index-Bcc2WdCU.js";import"./index-D0j0DV3h.js";import"./index-DBcsmgnd.js";import"./useEventCallback-CkK2hdI-.js";import"./SkeletonBar-BqRHQ8dJ.js";import"./LoadingCell-Bxkg1Qxk.js";import"./ColumnConfigDialog-BXThY0PP.js";import"./DraggableList-B73KoICc.js";import"./search-DC3bQpgx.js";import"./Input-Dx-qEMGm.js";import"./useControlled-B_XDx7ZC.js";import"./Button-DVBp1SrV.js";import"./small-cross-NBpQZ1gf.js";import"./ActionButton-CwICYRG_.js";import"./Checkbox-CDNxOiiw.js";import"./useValueChanged-DzBSmBuv.js";import"./CollapsiblePanel-DwwGp_PD.js";import"./MultiColumnSortDialog-q2h4FROa.js";import"./MenuTrigger-1AFgbPOt.js";import"./CompositeItem-DAnhs0Iq.js";import"./ToolbarRootContext-CFFUOJKL.js";import"./getDisabledMountTransitionStyles-DSCIpTNj.js";import"./getPseudoElementBounds-CWqSLITa.js";import"./chevron-down-Bqf_32Up.js";import"./index-CqaCF-Lj.js";import"./error-CUc6sGqF.js";import"./BaseCbacBanner-B3p4Si6P.js";import"./makeExternalStore-BjNlV_-Y.js";import"./Tooltip-DmimMIVR.js";import"./PopoverPopup-33EHLoGi.js";import"./debounce-Co2H-TBC.js";import"./tick-BZ_N3aoo.js";import"./DropdownField-D5iAZq6S.js";import"./isEqual-61N_qsVY.js";import"./withOsdkMetrics-WETF-eLM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
