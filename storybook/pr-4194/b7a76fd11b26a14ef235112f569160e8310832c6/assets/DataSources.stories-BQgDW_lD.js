import{j as r}from"./iframe-DZdi5qVl.js";import{O as b}from"./object-table-Dr3v4Q9V.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8lVeUCn.js";import{u as g}from"./useOsdkClient-D0sO6BtF.js";import"./preload-helper-Uouo8HcN.js";import"./Table-CsSEBtiU.js";import"./index-Bg61eIIa.js";import"./Dialog-Dfj1ftg0.js";import"./cross-B9sTw1kj.js";import"./svgIconContainer-DxhMpPws.js";import"./useBaseUiId-Mz3L6_Ly.js";import"./InternalBackdrop-vWueL81t.js";import"./composite-D3C2nmMl.js";import"./index-CVgHOiGf.js";import"./index-DFxmPpXp.js";import"./index-CK_zKJ7H.js";import"./useEventCallback-CHzTdRmo.js";import"./SkeletonBar-D7h-d6LQ.js";import"./LoadingCell-BrgECPSf.js";import"./ColumnConfigDialog-DmwZm_qS.js";import"./DraggableList-DH_4vMJj.js";import"./search-1yJPrdVL.js";import"./Input-I_C95g_4.js";import"./useControlled-BxMGJ1iI.js";import"./Button-Bc-yRCfH.js";import"./small-cross-DP0jWCcr.js";import"./ActionButton-Dh4c5JV5.js";import"./Checkbox-zPHJVy23.js";import"./useValueChanged-4m8KuuR6.js";import"./CollapsiblePanel-CaTF9gHO.js";import"./MultiColumnSortDialog-CF5fTjri.js";import"./MenuTrigger-BYxKKEja.js";import"./CompositeItem-CidR49nz.js";import"./ToolbarRootContext-CRfH5r80.js";import"./getDisabledMountTransitionStyles-Bgmfz7Hi.js";import"./getPseudoElementBounds-CVv7wXsz.js";import"./chevron-down-DWbMZGTs.js";import"./index-BNarussk.js";import"./error-CzW1HZwX.js";import"./BaseCbacBanner-C7-OfbFz.js";import"./makeExternalStore-COQibzUC.js";import"./Tooltip-CUbiiQ57.js";import"./PopoverPopup-CSHu41HL.js";import"./debounce-BSOX5tNy.js";import"./tick-CSSMXgbf.js";import"./DropdownField-xv8_ACXP.js";import"./isEqual-B8EeTfoX.js";import"./withOsdkMetrics-CA01Qt6R.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
