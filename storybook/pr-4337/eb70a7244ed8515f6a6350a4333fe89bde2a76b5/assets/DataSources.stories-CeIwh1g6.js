import{j as r}from"./iframe-CmxH_uLC.js";import{O as b}from"./object-table-CRFfPVal.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BRASXbSg.js";import{u as g}from"./useOsdkClient-CKlsW0yh.js";import"./preload-helper-BeAOyUTZ.js";import"./Table-C9kra6ek.js";import"./index-DJsCZSKi.js";import"./Dialog-BNKYMGHo.js";import"./cross-CyX8lMkj.js";import"./svgIconContainer-B8tcX66C.js";import"./useBaseUiId-C0ZMCIGl.js";import"./InternalBackdrop-CSQj2QiU.js";import"./composite-XJfPxJ_X.js";import"./index-xj8oWt_u.js";import"./index-YuGlXnUZ.js";import"./index-DI_hkYt2.js";import"./useEventCallback-UxifOB0d.js";import"./SkeletonBar-C1mRvl1J.js";import"./LoadingCell-COrKfPuv.js";import"./ColumnConfigDialog-Chmm0uAt.js";import"./DraggableList-D_zWYVFa.js";import"./search-TlKrCqYm.js";import"./Input-BKp843TN.js";import"./useControlled-Cmxg5Gb3.js";import"./Button-LKCq4LKF.js";import"./small-cross-CkLXIhPX.js";import"./ActionButton-DCJnOZsI.js";import"./Checkbox-Bv4SuPoI.js";import"./useValueChanged-CwV0eJfz.js";import"./CollapsiblePanel--w9tIzOo.js";import"./MultiColumnSortDialog-BWgone-Q.js";import"./MenuTrigger-BIoi-XB2.js";import"./CompositeItem-tCxULoej.js";import"./ToolbarRootContext-D7pkAdai.js";import"./getDisabledMountTransitionStyles-CMPEQ-kf.js";import"./getPseudoElementBounds-lcY7pLtV.js";import"./chevron-down-CyKsjkJ5.js";import"./index-CT0RUWXc.js";import"./error-Dd4yTEqY.js";import"./BaseCbacBanner-DnGU3imV.js";import"./makeExternalStore-BlDQytTU.js";import"./Tooltip-Dgrr9UmS.js";import"./PopoverPopup-DJbVIXOK.js";import"./debounce-uG06-Bnl.js";import"./tick-BOd_PXKl.js";import"./DropdownField-FhNn2H0Y.js";import"./isEqual-uZqrEjav.js";import"./withOsdkMetrics-087Wob4c.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
