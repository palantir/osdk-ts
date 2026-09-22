import{j as r}from"./iframe-qmzCXWN4.js";import{O as b}from"./object-table-C1mW-ore.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-N1dX_uvq.js";import{u as g}from"./useOsdkClient-CBhT0OrD.js";import"./preload-helper-DfaqjKYe.js";import"./Table-CP9UXHBo.js";import"./index-BHXsooho.js";import"./Dialog-BlF9tEPt.js";import"./cross-CQlGHY78.js";import"./svgIconContainer-IgiOu0RR.js";import"./useBaseUiId-BJvBYugX.js";import"./InternalBackdrop-CgDKP17E.js";import"./composite-DL4bYzm9.js";import"./index-Cejy0gyw.js";import"./index-ChmUS2LB.js";import"./index-wI8QjcAS.js";import"./useEventCallback-8Q0F8-SM.js";import"./SkeletonBar-CSPSdf3f.js";import"./LoadingCell-Dcxpo96m.js";import"./ColumnConfigDialog-C4aEhu1N.js";import"./DraggableList-B-XECCar.js";import"./search-Diu7klqt.js";import"./Input-CFsjF6HE.js";import"./useControlled-BcZ-NiAO.js";import"./Button-DAis4ZgI.js";import"./small-cross-Cf0sj-e3.js";import"./ActionButton-CU7TeyVP.js";import"./Checkbox-CKk9nv02.js";import"./useValueChanged-CqxUQgrJ.js";import"./CollapsiblePanel-D_Wdr9Hn.js";import"./MultiColumnSortDialog-BwLc6nJW.js";import"./MenuTrigger-axdjtxqW.js";import"./CompositeItem-Csvh_d0_.js";import"./ToolbarRootContext-DGUkZWal.js";import"./getDisabledMountTransitionStyles-C0YhA-Ys.js";import"./getPseudoElementBounds-C3iFuC2O.js";import"./chevron-down-Dwy6C3BH.js";import"./index-DQfy-mzv.js";import"./error-BLaFtDHL.js";import"./BaseCbacBanner-BLrAnx8v.js";import"./makeExternalStore-BXxLBZ9K.js";import"./Tooltip-CZjN0xGR.js";import"./PopoverPopup-Bodc44xX.js";import"./debounce-DcZ-cQ5_.js";import"./tick-Dwo8b7et.js";import"./DropdownField-DZLyjXC2.js";import"./isEqual-DfvWC4cG.js";import"./withOsdkMetrics-D5CdmZxO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
