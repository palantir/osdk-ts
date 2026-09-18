import{j as r}from"./iframe-CHAjmeRW.js";import{O as b}from"./object-table-Cf6gXv4p.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-mc2-5-4t.js";import{u as g}from"./useOsdkClient-BcmsLoqQ.js";import"./preload-helper-Bnd8YX8b.js";import"./Table-DEcUcosK.js";import"./index-uehY9gxK.js";import"./Dialog-CheU-fP7.js";import"./cross-21maCkVo.js";import"./svgIconContainer-C6bTix-V.js";import"./useBaseUiId-CrKq0iow.js";import"./InternalBackdrop-DDjeD9sW.js";import"./composite-DrWVaKH_.js";import"./index-0JEFRERF.js";import"./index-DItNlf6T.js";import"./index-DZ1xMNy0.js";import"./useEventCallback-BmA5_VIX.js";import"./SkeletonBar-BvPOXO85.js";import"./LoadingCell-BqyTx1me.js";import"./ColumnConfigDialog-D3wICKLg.js";import"./DraggableList-Dg9hBCfJ.js";import"./search-C-PuNkbt.js";import"./Input-CEDKmeIa.js";import"./useControlled-DIGLnSxk.js";import"./Button-BrV62231.js";import"./small-cross-COGTOage.js";import"./ActionButton-DV8Kf2gb.js";import"./Checkbox-CBbtoVJB.js";import"./useValueChanged-BEK9ykM9.js";import"./CollapsiblePanel-CQ1IUkVg.js";import"./MultiColumnSortDialog-DzjtgTnk.js";import"./MenuTrigger-BJIK7pGi.js";import"./CompositeItem-C3TCOkoR.js";import"./ToolbarRootContext-DT7PezqV.js";import"./getDisabledMountTransitionStyles-DPAhfDy1.js";import"./getPseudoElementBounds-Dc0AZ8zh.js";import"./chevron-down-BhaNHOdV.js";import"./index-BX5VsLRX.js";import"./error-D546O215.js";import"./BaseCbacBanner-DN1PfXxB.js";import"./makeExternalStore-DZYGiDNi.js";import"./Tooltip-gPwLingQ.js";import"./PopoverPopup-Bik_j545.js";import"./debounce-C6gik47c.js";import"./tick-DLKt3574.js";import"./DropdownField-BPlhMtVD.js";import"./isEqual-tS70SJFu.js";import"./withOsdkMetrics-BAwWDEWh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
