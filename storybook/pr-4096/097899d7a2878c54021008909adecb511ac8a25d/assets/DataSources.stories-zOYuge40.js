import{j as r}from"./iframe-BDbu9q2A.js";import{O as b}from"./object-table-r5KIudPw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B1EE0b-S.js";import{u as g}from"./useOsdkClient-BZtGer6H.js";import"./preload-helper-D6UvTfT_.js";import"./Table-5Yml5Xs2.js";import"./index-DEdyH3XD.js";import"./Dialog--obHru8z.js";import"./cross-Bo4wpdXT.js";import"./svgIconContainer-BgjPZfOH.js";import"./useBaseUiId-CtmE4PNK.js";import"./InternalBackdrop-Dy4GWDNn.js";import"./composite-qafLk_f6.js";import"./index-pcLxGNcq.js";import"./index-D3cIaVh4.js";import"./index-xTMwd6_8.js";import"./useEventCallback-DUE__rea.js";import"./SkeletonBar-M79YPoFw.js";import"./LoadingCell-Yqu47OmZ.js";import"./ColumnConfigDialog-tZTWQZOk.js";import"./DraggableList-CZaqx5-r.js";import"./search-0NZlkEeX.js";import"./Input-D0XLj4En.js";import"./useControlled-BgF6R6qa.js";import"./Button-_DMppLDt.js";import"./small-cross-ByEHRRHU.js";import"./ActionButton-C9OU-BMe.js";import"./Checkbox-C0Ae0ETc.js";import"./useValueChanged-CHtKwLX1.js";import"./CollapsiblePanel-DZrk-vCV.js";import"./MultiColumnSortDialog-hYhH0G21.js";import"./MenuTrigger-DwKmIuV2.js";import"./CompositeItem-C6O1ODqo.js";import"./ToolbarRootContext-BVuL7AT2.js";import"./getDisabledMountTransitionStyles-B6rpAzbi.js";import"./getPseudoElementBounds-hadpdZ34.js";import"./chevron-down-CbFUQfJ_.js";import"./index-BlDxMK-s.js";import"./error-fH6ihPoO.js";import"./BaseCbacBanner-QJ9nuAqq.js";import"./makeExternalStore-BESDrPLk.js";import"./Tooltip-lyyHm0PB.js";import"./PopoverPopup--CBugPnx.js";import"./debounce-C0l7oIGH.js";import"./tick-pXXOgXsW.js";import"./DropdownField-DE_NmpmO.js";import"./isEqual-CXEdjpTk.js";import"./withOsdkMetrics-B5onp4Cc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
