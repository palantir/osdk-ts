import{j as r}from"./iframe-CZ6tfr7m.js";import{O as b}from"./object-table-TeZXdzkG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BhxgtPAe.js";import{u as g}from"./useOsdkClient-BF1kH45K.js";import"./preload-helper-CkfrOY1H.js";import"./Table-iWuH7aB7.js";import"./index-DLNBYVnV.js";import"./Dialog-B_rsAA2N.js";import"./cross-CPXyH5jR.js";import"./svgIconContainer-Dvg9KYVw.js";import"./useBaseUiId-Cj6LeXHN.js";import"./InternalBackdrop-D2Gwq_Q6.js";import"./composite-BbwXcuXn.js";import"./index-DeteMldf.js";import"./index-BfO80qBP.js";import"./index-DnDjlS1X.js";import"./useEventCallback-CbplXCH5.js";import"./SkeletonBar-CXPy7H-j.js";import"./LoadingCell-CHo40OKN.js";import"./ColumnConfigDialog-CiBeubIz.js";import"./DraggableList-D0IfMbFy.js";import"./search-ztvSGVr9.js";import"./Input-BkVAz5rQ.js";import"./useControlled-BvU1uW5X.js";import"./Button-3RbWO35b.js";import"./small-cross-uWgOqzJ0.js";import"./ActionButton-f-TJoADH.js";import"./Checkbox-DL5Bo1P_.js";import"./useValueChanged-CyVp-7ed.js";import"./CollapsiblePanel-CN460M1M.js";import"./MultiColumnSortDialog-CkONUFM2.js";import"./MenuTrigger-CVtTCyS5.js";import"./CompositeItem-Cl5PbTL3.js";import"./ToolbarRootContext-CRrNmffx.js";import"./getDisabledMountTransitionStyles-iXD11Bdm.js";import"./getPseudoElementBounds-ClrkBtWE.js";import"./chevron-down-DVcYPRuD.js";import"./index-DtElecf-.js";import"./error-d7pkadgS.js";import"./BaseCbacBanner-Dpr6VJnk.js";import"./makeExternalStore-D-O-FofH.js";import"./Tooltip-XgUBv2UC.js";import"./PopoverPopup-spGWFYuF.js";import"./debounce-C_YW27Xf.js";import"./tick-DoJkCuSU.js";import"./DropdownField-BZy1OgIR.js";import"./isEqual-DSvGACqO.js";import"./withOsdkMetrics-B2DbhWLJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
