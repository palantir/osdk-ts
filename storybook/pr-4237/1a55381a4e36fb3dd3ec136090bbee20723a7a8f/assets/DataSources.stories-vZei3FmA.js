import{j as r}from"./iframe-DFGm32Bw.js";import{O as b}from"./object-table-DAoukbAL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CfRqJLE_.js";import{u as g}from"./useOsdkClient-DRvI5chP.js";import"./preload-helper-fy9m8Fnq.js";import"./Table-C-2dN_9g.js";import"./index-DjqFaeTC.js";import"./Dialog-JVhmUD0b.js";import"./cross-DnLg4Ct0.js";import"./svgIconContainer-D-V_MVwY.js";import"./useBaseUiId-DYKNlNgP.js";import"./InternalBackdrop-DMMzhES7.js";import"./composite-B4OJQV7f.js";import"./index-FvgKhH5U.js";import"./index-DyySrusV.js";import"./index-BtNh-TEb.js";import"./useEventCallback-D-auj4HH.js";import"./SkeletonBar-BnB7SRxp.js";import"./LoadingCell-CRI7SY5l.js";import"./ColumnConfigDialog-BcB0_qFv.js";import"./DraggableList-CrzviJA-.js";import"./search-DNzannB5.js";import"./Input-DL-Ka-L9.js";import"./useControlled-DGRdFYYN.js";import"./Button-DZG39NOd.js";import"./small-cross-D1IQ7GLs.js";import"./ActionButton-DvfQCjtU.js";import"./Checkbox-f6-CCXnM.js";import"./useValueChanged-Cy-yyTWd.js";import"./CollapsiblePanel-BUe5kDOz.js";import"./MultiColumnSortDialog-PFk6lrkl.js";import"./MenuTrigger-D4X0o3Kq.js";import"./CompositeItem-BNbv7BXO.js";import"./ToolbarRootContext-8KEPzI9b.js";import"./getDisabledMountTransitionStyles-Bp5WDZ4V.js";import"./getPseudoElementBounds-opeseqFO.js";import"./chevron-down-PQvYLt7R.js";import"./index-CNgLBIA9.js";import"./error-Ce5TqXqV.js";import"./BaseCbacBanner-BHUG4D8Y.js";import"./makeExternalStore-C_KPNZSJ.js";import"./Tooltip-gJq75AB8.js";import"./PopoverPopup-DcPuDwsK.js";import"./debounce-CGY3R00a.js";import"./tick-BLcfeptW.js";import"./DropdownField-DRjEtpTz.js";import"./isEqual-BobN_a0F.js";import"./withOsdkMetrics-DGoS0Q7x.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
