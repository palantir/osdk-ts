import{j as r}from"./iframe-8DMGEq06.js";import{O as b}from"./object-table-BsZYmEG3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-UZDq0JOo.js";import{u as g}from"./useOsdkClient-C_eIZF2J.js";import"./preload-helper-BjAl-lK2.js";import"./Table-DORoQaHE.js";import"./index-DRq4gjPq.js";import"./Dialog-CNRW78Mx.js";import"./cross-DYaZw4Am.js";import"./svgIconContainer-B8_9Y0Zn.js";import"./useBaseUiId-B2FWNhGQ.js";import"./InternalBackdrop-CWiPG24p.js";import"./composite-CY_QXMLo.js";import"./index-D4LKk0YB.js";import"./index-mbbVtxqA.js";import"./index-Dx7C8aHO.js";import"./useEventCallback-3GlyZw2_.js";import"./SkeletonBar-Dc166Tvt.js";import"./LoadingCell-5wJcQGJ6.js";import"./ColumnConfigDialog--uixhz1y.js";import"./DraggableList-BqW39Lky.js";import"./search-CvifUsIK.js";import"./Input-dydaNapo.js";import"./useControlled-Khc0ddfA.js";import"./Button-CraGbNXA.js";import"./small-cross-CfjvRjN5.js";import"./ActionButton-BmVKHj0Y.js";import"./Checkbox-B-2SdFMj.js";import"./useValueChanged-N306h0K2.js";import"./CollapsiblePanel-BE0AM26B.js";import"./MultiColumnSortDialog-D2g0nz-7.js";import"./MenuTrigger-Byl2G7nz.js";import"./CompositeItem-Bb2gn4Bj.js";import"./ToolbarRootContext-Bepk2A_H.js";import"./getDisabledMountTransitionStyles-Dw-8Jwwa.js";import"./getPseudoElementBounds-C27BHV4s.js";import"./chevron-down-F_95MoSJ.js";import"./index-CsyOcyyy.js";import"./error-CiLZ8SWq.js";import"./BaseCbacBanner-R0l1YhLX.js";import"./makeExternalStore-NZ3mh5Ti.js";import"./Tooltip-CJOrSGc2.js";import"./PopoverPopup-CRsLokny.js";import"./debounce-D_Y9TVaa.js";import"./tick-IbzJph_T.js";import"./DropdownField-Bu7UETX6.js";import"./isEqual-ChBZ-47I.js";import"./withOsdkMetrics-DCPVCTJZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
