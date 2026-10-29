import{j as r}from"./iframe-hXrfBBL8.js";import{O as b}from"./object-table-C0YMY3Ns.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-7n4odZYE.js";import{u as g}from"./useOsdkClient-De86JThJ.js";import"./preload-helper-Bqy1uZtT.js";import"./Table-BWXLjcTk.js";import"./index-uBLz7gbD.js";import"./Dialog-vNuJGZov.js";import"./cross-EKOWl3qR.js";import"./svgIconContainer-DT9-fJuD.js";import"./useBaseUiId-DXzMJ9Pu.js";import"./InternalBackdrop-4YTQPE1w.js";import"./composite-rXoGJEtm.js";import"./index-B5iR3PxV.js";import"./index-BwEWCMrj.js";import"./index-BUEqptTm.js";import"./useEventCallback-HWvI9hEC.js";import"./SkeletonBar-zDOwBpUy.js";import"./LoadingCell-CcBnQKNf.js";import"./ColumnConfigDialog-C2ZbTePE.js";import"./DraggableList-BJA6cYhp.js";import"./search-ClLVbiXV.js";import"./Input-DskUev2S.js";import"./useControlled-BMHl3Ney.js";import"./Button-DA1M1QLW.js";import"./small-cross-CSwTYwFN.js";import"./ActionButton-Bc_lN9oE.js";import"./Checkbox-CoxybKEI.js";import"./useValueChanged-BRdsuTQj.js";import"./CollapsiblePanel-BURgI4Vv.js";import"./MultiColumnSortDialog-DXpa6jZR.js";import"./MenuTrigger-DhfRIRA4.js";import"./CompositeItem-CXVgDan9.js";import"./ToolbarRootContext-emE-minV.js";import"./getDisabledMountTransitionStyles-D-elqNz5.js";import"./getPseudoElementBounds-BQB0gaFo.js";import"./chevron-down-CbQ2WyOf.js";import"./index-DJPBx90d.js";import"./error-TXsyVqhB.js";import"./BaseCbacBanner-B_hAJbzu.js";import"./makeExternalStore-WYwpKCNb.js";import"./Tooltip-DboKux0-.js";import"./PopoverPopup-BWLtTrxm.js";import"./debounce-C77Azx16.js";import"./tick-CmQh1iFq.js";import"./DropdownField-eX2NPP_w.js";import"./isEqual-CTkxv8mT.js";import"./withOsdkMetrics-DSKv7sJY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
