import{j as r}from"./iframe-CMZM34Nm.js";import{O as b}from"./object-table-CQijRIaS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C3cl62YG.js";import{u as g}from"./useOsdkClient-CXoHROa3.js";import"./preload-helper-T_55Ld-4.js";import"./Table-Bf19vEdW.js";import"./index-CPwwZizP.js";import"./Dialog-X0LnPdOw.js";import"./cross-EHESnZVq.js";import"./svgIconContainer-MNS-5CB_.js";import"./useBaseUiId-3LVIhb8Q.js";import"./InternalBackdrop-Dm4BJAYO.js";import"./composite-BLgd2D-S.js";import"./index-DseLBzy9.js";import"./index-DIXzfJRB.js";import"./index-Bzf0HlHB.js";import"./useEventCallback-INnShxMl.js";import"./SkeletonBar-BRFNRxpj.js";import"./LoadingCell-D4PFNC00.js";import"./ColumnConfigDialog-Xy5lhY4M.js";import"./DraggableList-DD2Z18xa.js";import"./search-oY9nbA70.js";import"./Input-CXcmcuOy.js";import"./useControlled-DrBMs-2h.js";import"./Button-ClIIGhQ-.js";import"./small-cross-DEmdrdiv.js";import"./ActionButton-B0HXO6GZ.js";import"./Checkbox-DrBze1bx.js";import"./useValueChanged-BYWxwfrd.js";import"./CollapsiblePanel-CRTElWuv.js";import"./MultiColumnSortDialog-C1j5u-CD.js";import"./MenuTrigger-CShjHQEP.js";import"./CompositeItem-CAkD41ki.js";import"./ToolbarRootContext-Q3-albnw.js";import"./getDisabledMountTransitionStyles-Bs5e3cwu.js";import"./getPseudoElementBounds-C6pmrRxY.js";import"./chevron-down-DGTOO9UD.js";import"./index-EiUiPvzp.js";import"./error-CWU2GFiR.js";import"./BaseCbacBanner-DoCqQT-M.js";import"./makeExternalStore-C8qTazFT.js";import"./Tooltip-Dx6503jt.js";import"./PopoverPopup-BNCKNnCL.js";import"./debounce-BX-4RUA6.js";import"./tick-LLUOl_kc.js";import"./DropdownField-BnX8rzbA.js";import"./isEqual-B7m0Iy2G.js";import"./withOsdkMetrics-DRVxGjiO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
