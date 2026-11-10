import{j as r}from"./iframe-n9hYnZ1k.js";import{O as b}from"./object-table-DIF0cZBQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BunMdve5.js";import{u as g}from"./useOsdkClient-DB8tqHvc.js";import"./preload-helper-BfllC993.js";import"./Table-LlnJI-Yy.js";import"./index-jFXEL4dj.js";import"./Dialog-D9exoXmi.js";import"./cross-B2c8g5Vb.js";import"./svgIconContainer-Ds9BUjSm.js";import"./useBaseUiId--HQwG44S.js";import"./InternalBackdrop-CzoOD5Ge.js";import"./composite-BHMqnRJI.js";import"./index-CD83LihZ.js";import"./index-CsVpqo9H.js";import"./index-BwfYcv9A.js";import"./useEventCallback-x8Kd3t-m.js";import"./SkeletonBar-BUxRGNdG.js";import"./LoadingCell-CHkKSLPb.js";import"./ColumnConfigDialog-B9Zg_5bp.js";import"./DraggableList-BVxljRWA.js";import"./search-DNZ54Yxb.js";import"./Input-D9iybl22.js";import"./useControlled-DVMhLBcM.js";import"./Button-C1ReapeD.js";import"./small-cross-UgWxpI9F.js";import"./ActionButton-CwGZb2W_.js";import"./Checkbox-BkmEuroC.js";import"./useValueChanged-Bk8VifO3.js";import"./CollapsiblePanel-DS7tzca4.js";import"./MultiColumnSortDialog-nBO__Yys.js";import"./MenuTrigger-C1g50UNL.js";import"./CompositeItem-CR3Fp4HR.js";import"./ToolbarRootContext-D77_KmSZ.js";import"./getDisabledMountTransitionStyles-C901m8ZM.js";import"./getPseudoElementBounds-BM01uxnJ.js";import"./chevron-down-0IZaGxOE.js";import"./index-BM8zROYs.js";import"./error-D9TzGXim.js";import"./BaseCbacBanner-DrNBQoWr.js";import"./makeExternalStore-C_HtZfof.js";import"./Tooltip-Cz0yU5is.js";import"./PopoverPopup-DZ28aU8u.js";import"./Select-F-RRM_58.js";import"./tick-Cw1T4_7H.js";import"./DropdownField-DjHzjuSX.js";import"./useDebouncedCallback-Cnujztnb.js";import"./isEqual-B8vYID_A.js";import"./_baseIsEqual-DZoBIkXn.js";import"./stableSerialize-gfVvfbkg.js";import"./withOsdkMetrics-3ldmX6a3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,ge={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const ue=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,ue as __namedExportsOrder,ge as default};
