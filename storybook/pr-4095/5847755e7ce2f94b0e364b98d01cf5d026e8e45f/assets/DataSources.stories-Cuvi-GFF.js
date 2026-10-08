import{j as r}from"./iframe-CYRFLlEO.js";import{O as b}from"./object-table-DaNbMdac.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D_oDjEym.js";import{u as g}from"./useOsdkClient-BJqJ3t0X.js";import"./preload-helper-ChluBdBb.js";import"./Table-DeorVykX.js";import"./index-DgFaecLv.js";import"./Dialog-C6L85Dhc.js";import"./cross-DBpyyU9C.js";import"./svgIconContainer-DXkF8wrQ.js";import"./useBaseUiId-CT8xqfBr.js";import"./InternalBackdrop-CTPF33qa.js";import"./composite-DBnR4BVO.js";import"./index-C8sdjwtp.js";import"./index-BCjTJI3_.js";import"./index-C2MDVEGT.js";import"./useEventCallback-BJFvrRyb.js";import"./SkeletonBar-Bq3sXSF2.js";import"./LoadingCell-itgjIH8K.js";import"./ColumnConfigDialog-DbPbP15T.js";import"./DraggableList-BRGnhRIN.js";import"./search-gMbThLhN.js";import"./Input-CemPVcnY.js";import"./useControlled-D5UJw3Fq.js";import"./Button-CGEba4bS.js";import"./small-cross-BXgSEa8S.js";import"./ActionButton-D0Fx6r_2.js";import"./Checkbox-C5DJcaMm.js";import"./useValueChanged-CsL5tjte.js";import"./CollapsiblePanel-D8-L6clc.js";import"./MultiColumnSortDialog-CVgjOhqE.js";import"./MenuTrigger-B4oHyfVO.js";import"./CompositeItem-EG5A4Ctt.js";import"./ToolbarRootContext-DIul4zOr.js";import"./getDisabledMountTransitionStyles-DPyBQpoo.js";import"./getPseudoElementBounds-C_2zFZOn.js";import"./chevron-down-QtZPW63O.js";import"./index-BjdI_b09.js";import"./error-CvsmrG6o.js";import"./BaseCbacBanner-Dz0E0Sve.js";import"./makeExternalStore-B-fBg6wj.js";import"./Tooltip-Dib25ex8.js";import"./PopoverPopup-DotHPyVZ.js";import"./debounce-BWdTtlOi.js";import"./tick-BxUNHTte.js";import"./DropdownField-wXZN_aVL.js";import"./isEqual-a93sYdb6.js";import"./withOsdkMetrics-Ihi9z85c.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
