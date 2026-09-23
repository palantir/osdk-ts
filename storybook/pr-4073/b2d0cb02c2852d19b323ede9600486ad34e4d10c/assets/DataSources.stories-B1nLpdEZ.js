import{j as r}from"./iframe-ClVzwAwQ.js";import{O as b}from"./object-table-CUiDs9Gl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DMp3Wp2U.js";import{u as g}from"./useOsdkClient-Dz0dl0jy.js";import"./preload-helper-Cv11LvJP.js";import"./Table-x87G_eww.js";import"./index-BGl-ufsM.js";import"./Dialog-BY-hHL_5.js";import"./cross-DkZeF945.js";import"./svgIconContainer-Bay1n-zA.js";import"./useBaseUiId-DBp6INKz.js";import"./InternalBackdrop-CCEA6-di.js";import"./composite-cy3jdAoe.js";import"./index-CY6w5O7H.js";import"./index-CPJZzp1O.js";import"./index-Blka6ILz.js";import"./useEventCallback-B9S91Yw2.js";import"./SkeletonBar-D5O3BqcP.js";import"./LoadingCell-1iIW1uBJ.js";import"./ColumnConfigDialog-B1vZCJXk.js";import"./DraggableList-Dz-z2ES3.js";import"./search-DY6yvOy6.js";import"./Input-BEJWa7gG.js";import"./useControlled-CYJtKTqW.js";import"./Button-D5bJOK4o.js";import"./small-cross-C_AyMX1J.js";import"./ActionButton-QCwrftMT.js";import"./Checkbox-lhbMJ3q2.js";import"./useValueChanged-C8lzD6_j.js";import"./CollapsiblePanel-CugK17NU.js";import"./MultiColumnSortDialog-DW_PciuZ.js";import"./MenuTrigger-BvUlRi1e.js";import"./CompositeItem-B_fSDSC7.js";import"./ToolbarRootContext-D3yxcxuQ.js";import"./getDisabledMountTransitionStyles-CoM1w8pQ.js";import"./getPseudoElementBounds-DGWwlxa5.js";import"./chevron-down-UByA3gj5.js";import"./index-DL1_yfl9.js";import"./error-BmOSQ-Av.js";import"./BaseCbacBanner-5kmj_Fjj.js";import"./makeExternalStore-Bgk32_hH.js";import"./Tooltip-8hgn-ueX.js";import"./PopoverPopup-Noi5w6Yr.js";import"./debounce-BkQeQk7N.js";import"./tick-D0aeUq8y.js";import"./DropdownField-A48OUsRe.js";import"./isEqual-DwB7eFCP.js";import"./withOsdkMetrics-B7DbvHC0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
