import{j as r}from"./iframe-Br8xONPm.js";import{O as b}from"./object-table-B6lx7_yi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-44K1g0yi.js";import{u as g}from"./useOsdkClient-CY-_x2aU.js";import"./preload-helper-DQgVVB6U.js";import"./Table-D_n0BsEc.js";import"./index-B2krqAG0.js";import"./Dialog-Bl3S4dTf.js";import"./cross-DuxFWD_g.js";import"./svgIconContainer-CSQu9ec3.js";import"./useBaseUiId-BZnTNrwC.js";import"./InternalBackdrop-6cvjFa41.js";import"./composite-C9h1Nrh8.js";import"./index-D9czVAyf.js";import"./index-jHhc_U3n.js";import"./index-B-GeqWm0.js";import"./useEventCallback-C7zCd0lh.js";import"./SkeletonBar-PkMTMVi0.js";import"./LoadingCell-BaO-_6dK.js";import"./ColumnConfigDialog-Ba-IH8UZ.js";import"./DraggableList-9FAgnbX5.js";import"./search-DZd-hDvg.js";import"./Input-BHVdEi5Z.js";import"./useControlled-BLiUdu5J.js";import"./Button-CpiJCvHd.js";import"./small-cross-CeJ3wQjx.js";import"./ActionButton-z1YZZnng.js";import"./Checkbox-CQ0zEQKF.js";import"./useValueChanged-Dcm4p7P9.js";import"./CollapsiblePanel-CU3saAtT.js";import"./MultiColumnSortDialog-DXOGAuol.js";import"./MenuTrigger-BZdR-zpx.js";import"./CompositeItem-yj6TyWdn.js";import"./ToolbarRootContext-CI35CvFn.js";import"./getDisabledMountTransitionStyles-C2DvpNtJ.js";import"./getPseudoElementBounds-DYtuX3rf.js";import"./chevron-down-CG3ZsjCs.js";import"./index-6kzQ95ap.js";import"./error-5UgtcFK8.js";import"./BaseCbacBanner-CAzellM6.js";import"./makeExternalStore-N49v7_Hy.js";import"./Tooltip-BMqnNLGs.js";import"./PopoverPopup-CnuFOAXl.js";import"./debounce-B803r_X5.js";import"./tick-Dsc87XPT.js";import"./DropdownField-ryKhHmHs.js";import"./isEqual-7Eh_qRj1.js";import"./withOsdkMetrics-BaSLlHt7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
