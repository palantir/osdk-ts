import{j as r}from"./iframe-CnB-nyYL.js";import{O as b}from"./object-table-Dqf0fKCa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8YyQT-M.js";import{u as g}from"./useOsdkClient-DJoDqONI.js";import"./preload-helper-Q1kWDOMf.js";import"./Table-Cm0PJUII.js";import"./index-BxeA_yCq.js";import"./Dialog-8LNTHVBE.js";import"./cross-B8WrElap.js";import"./svgIconContainer-C7kPmSlO.js";import"./useBaseUiId-CHGGJD75.js";import"./InternalBackdrop-BZj78jFb.js";import"./composite-rNpDadLs.js";import"./index-B_mCg7VC.js";import"./index-CRK0fjNK.js";import"./index-CNnaAkES.js";import"./useEventCallback-CA4NJ-uN.js";import"./SkeletonBar-B-v-TkMy.js";import"./LoadingCell-BFPM0gvb.js";import"./ColumnConfigDialog-Bbiksv-b.js";import"./DraggableList-ZWdP1pX9.js";import"./search-B_Ak-sTr.js";import"./Input-BnfiihnE.js";import"./useControlled-Dq4TuQGF.js";import"./Button-BB8T2OOy.js";import"./small-cross-BaAEbGi-.js";import"./ActionButton-Bqin8RB2.js";import"./Checkbox-BmNOczDZ.js";import"./useValueChanged-BlEozEqt.js";import"./CollapsiblePanel-B6BY82OC.js";import"./MultiColumnSortDialog-x7xMLIk3.js";import"./MenuTrigger-C-u_6hMn.js";import"./CompositeItem-BvTU3-ui.js";import"./ToolbarRootContext-BGykyxF8.js";import"./getDisabledMountTransitionStyles-CX_nbaPq.js";import"./getPseudoElementBounds-CSUzuC87.js";import"./chevron-down-CnfHtb5Z.js";import"./index-DvWejoPn.js";import"./error-DNv14KIg.js";import"./BaseCbacBanner-CUUvKwvS.js";import"./makeExternalStore-BA4R21ZY.js";import"./Tooltip-BgGrBifp.js";import"./PopoverPopup-BkXRyCMb.js";import"./debounce-BTDM9WLA.js";import"./tick-HZfaF6Nf.js";import"./DropdownField-BXVTK7oo.js";import"./isEqual-C2MIXUW9.js";import"./withOsdkMetrics-CruR8e4i.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
