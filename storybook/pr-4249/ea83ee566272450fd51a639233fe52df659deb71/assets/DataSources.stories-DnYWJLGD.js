import{j as r}from"./iframe-BbjXXJe8.js";import{O as b}from"./object-table-qIIe7KC5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-SSGLZDeS.js";import{u as g}from"./useOsdkClient-DsMfreJs.js";import"./preload-helper-Dey0rnvM.js";import"./Table-CqQFObec.js";import"./index-T8M7MoCf.js";import"./Dialog-BKYZxddZ.js";import"./cross-Dp3ZYAZC.js";import"./svgIconContainer-CXj_KM32.js";import"./useBaseUiId-mbBdJtd6.js";import"./InternalBackdrop-_rPH4zEA.js";import"./composite-CkO02i_E.js";import"./index-GEyymHQJ.js";import"./index-CUAZugwU.js";import"./useEventCallback-X7nCdW-s.js";import"./SkeletonBar-u6tF3ULb.js";import"./LoadingCell-BQEmBLZY.js";import"./ColumnConfigDialog-CEktYxha.js";import"./DraggableList-B2uXj8r5.js";import"./search-DjptGMSz.js";import"./Input-DcHjunbi.js";import"./useControlled-bFhbJ_tP.js";import"./Button-BYNpk4v8.js";import"./small-cross-DBHZv8Q4.js";import"./ActionButton-Bl1GvY0Q.js";import"./Checkbox-Ce0Hl-Gw.js";import"./useValueChanged-BKhoHR0i.js";import"./CollapsiblePanel-BmSgtCoP.js";import"./MultiColumnSortDialog-CQS4VGRh.js";import"./MenuTrigger-DLhgGUEr.js";import"./CompositeItem-BvxDZQma.js";import"./ToolbarRootContext-DvWxWMIg.js";import"./getDisabledMountTransitionStyles-GlMe9-WZ.js";import"./getPseudoElementBounds-BMRxbPLa.js";import"./chevron-down-5PwEHI-v.js";import"./index-D95i56Mo.js";import"./error-B5EEo1NC.js";import"./BaseCbacBanner-BA_GTGz9.js";import"./makeExternalStore-BCfu_aRm.js";import"./Tooltip-D3vptghS.js";import"./PopoverPopup-DHqupTDU.js";import"./debounce-CmbjsLVd.js";import"./tick-C8S8ITqk.js";import"./DropdownField-DrlUCotf.js";import"./isEqual-DzrTxp38.js";import"./withOsdkMetrics-Cy91uTto.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
