import{j as r}from"./iframe-DRuc0GBP.js";import{O as b}from"./object-table-DmGO0Vxo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CR0pEJ_I.js";import{u as g}from"./useOsdkClient-ZsKxr3Nm.js";import"./preload-helper-CRRYqW21.js";import"./Table-BR8CCk-8.js";import"./index-Df25XFZb.js";import"./Dialog-BC4bcRh6.js";import"./cross-C3j-rtHx.js";import"./svgIconContainer-8epjwYsu.js";import"./useBaseUiId-DbcBxDLS.js";import"./InternalBackdrop-i581aqEB.js";import"./composite-DCht-HgF.js";import"./index-DpJFda_e.js";import"./index-BalUdg1Y.js";import"./index-YiEFMxhB.js";import"./useEventCallback-Ds2xBSpC.js";import"./SkeletonBar-B8N_Ahmp.js";import"./LoadingCell-Bftk-ZRu.js";import"./ColumnConfigDialog-B521fVb-.js";import"./DraggableList-DgLUOU_-.js";import"./search-De5zerSm.js";import"./Input-qFxyrE0p.js";import"./useControlled-DhQ1jfam.js";import"./Button-DNV5pzPO.js";import"./small-cross-pAWOo5vD.js";import"./ActionButton-C0tEvPDb.js";import"./Checkbox-CR8ot2aQ.js";import"./useValueChanged-TdIj53uF.js";import"./CollapsiblePanel-DEy_naSL.js";import"./MultiColumnSortDialog-BhpT7X1D.js";import"./MenuTrigger-BBa-7LXr.js";import"./CompositeItem-BC6rjLhn.js";import"./ToolbarRootContext-DMBrxqfV.js";import"./getDisabledMountTransitionStyles-CFsGZL01.js";import"./getPseudoElementBounds-DPZ3DPV5.js";import"./chevron-down-Bj7gjeyM.js";import"./index-BUJ8RC2M.js";import"./error-CajMr2N5.js";import"./BaseCbacBanner-DGZigbUp.js";import"./makeExternalStore-DzVXPn5S.js";import"./Tooltip-Bbl8mehV.js";import"./PopoverPopup-_gjSlE1P.js";import"./debounce-OZctj2Y3.js";import"./tick-BX4z4qIP.js";import"./DropdownField-DyPgZ25Y.js";import"./isEqual-B9eMVgOn.js";import"./withOsdkMetrics-BIITkI-U.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
