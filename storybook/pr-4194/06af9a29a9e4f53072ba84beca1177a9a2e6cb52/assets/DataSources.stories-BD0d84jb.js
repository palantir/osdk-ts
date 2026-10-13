import{j as r}from"./iframe-Dig_Ahq7.js";import{O as b}from"./object-table-DRbn2KV9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BnwHD7Ug.js";import{u as g}from"./useOsdkClient-CLewU869.js";import"./preload-helper-Eyc3oojg.js";import"./Table-BH6VCbZL.js";import"./index-BAoTCyK2.js";import"./Dialog-DjeLPKul.js";import"./cross-BbZdDJWd.js";import"./svgIconContainer-Cx17DJom.js";import"./useBaseUiId-BXYV1Ucu.js";import"./InternalBackdrop-9xDhMp1X.js";import"./composite-GVV5HeYl.js";import"./index-r_flECQw.js";import"./index-BkAj4YFS.js";import"./index-C7_bCvO2.js";import"./useEventCallback-gJbpMQg7.js";import"./SkeletonBar-CsGbtXT3.js";import"./LoadingCell-DKZrjk97.js";import"./ColumnConfigDialog-BuTtQE3J.js";import"./DraggableList-tJf8F9Sb.js";import"./search-C4f4g9Ue.js";import"./Input-DERIfaLU.js";import"./useControlled-9l0-iUGA.js";import"./Button-Cg2kaI0u.js";import"./small-cross-DjUMZG4-.js";import"./ActionButton-CjCg9wAs.js";import"./Checkbox-J-o0L9Wo.js";import"./useValueChanged-vdnoKm5P.js";import"./CollapsiblePanel-KQrHcfGa.js";import"./MultiColumnSortDialog-Btfbxxyl.js";import"./MenuTrigger-94IZ7g5X.js";import"./CompositeItem-CjjvTweq.js";import"./ToolbarRootContext-5tRY-prW.js";import"./getDisabledMountTransitionStyles-D5dXOzgC.js";import"./getPseudoElementBounds-Br8tb0sy.js";import"./chevron-down-D5J97Xaa.js";import"./index-DZ8Usuwg.js";import"./error-D0UPEL3v.js";import"./BaseCbacBanner-BJEX1-t0.js";import"./makeExternalStore-CcSZq8Dl.js";import"./Tooltip-CTgBYqFc.js";import"./PopoverPopup-D98de9Kk.js";import"./debounce-BeGpfOBp.js";import"./tick-CxynzRts.js";import"./DropdownField-BYx0xJl-.js";import"./isEqual-CbjpySH_.js";import"./withOsdkMetrics-hTvMF2O-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
