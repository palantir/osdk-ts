import{j as r}from"./iframe-B1KRdkhO.js";import{O as b}from"./object-table-VH9o08u7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CVXh7ivX.js";import{u as g}from"./useOsdkClient-Cr05SL_1.js";import"./preload-helper-Bnxkxvgo.js";import"./Table-DFRPqef8.js";import"./index-BSlreuwL.js";import"./Dialog-vBDXh0ed.js";import"./cross-I1O1eUVR.js";import"./svgIconContainer-B6SQl79i.js";import"./useBaseUiId-Cr74IIpt.js";import"./InternalBackdrop-DVl-y0rc.js";import"./composite-JDw4eSYM.js";import"./index-bzttAU4r.js";import"./index-DTJULArL.js";import"./index-Guz5zGoB.js";import"./useEventCallback-CfkBWOSK.js";import"./SkeletonBar-QeVp58Hy.js";import"./LoadingCell-D9O9FL6a.js";import"./ColumnConfigDialog-BsnhR79I.js";import"./DraggableList-D6vwU-jG.js";import"./search-C904-bBJ.js";import"./Input-B2oruy_a.js";import"./useControlled-CLV8A8ub.js";import"./Button-D76Gdss_.js";import"./small-cross-Cap9qk1X.js";import"./ActionButton-BFe9pmTu.js";import"./Checkbox-DYj6I-LQ.js";import"./useValueChanged-CXerxiwd.js";import"./CollapsiblePanel-CFp75AIt.js";import"./MultiColumnSortDialog-C_4Aabvc.js";import"./MenuTrigger-B-Rbw3mG.js";import"./CompositeItem-Bkqt9gor.js";import"./ToolbarRootContext-Bfq07vZg.js";import"./getDisabledMountTransitionStyles-wREHFmKX.js";import"./getPseudoElementBounds-CJIzvOat.js";import"./chevron-down-CnakN8OV.js";import"./index-BdAFUNX5.js";import"./error-DulRH5vX.js";import"./BaseCbacBanner-CisfZHjv.js";import"./makeExternalStore-YXTpwul9.js";import"./Tooltip-CtbVHmv4.js";import"./PopoverPopup-C0hcd2Vi.js";import"./debounce-BqZLsoFx.js";import"./tick-DN0jUzW_.js";import"./DropdownField-fIw7AjbO.js";import"./isEqual-DHHyDIZe.js";import"./withOsdkMetrics-BnkJio_O.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
