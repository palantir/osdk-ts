import{j as r}from"./iframe-DbqyfEpT.js";import{O as b}from"./object-table-Dew9_BCD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BCgLzUFF.js";import{u as g}from"./useOsdkClient-BvViJLPG.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CbRA1MLt.js";import"./index-DXCImGV3.js";import"./Dialog-CMyfvdap.js";import"./cross-B4u0_v8A.js";import"./svgIconContainer-BeMYhW5y.js";import"./useBaseUiId-DOBNQZSS.js";import"./InternalBackdrop-BppENXZo.js";import"./composite-DLhe-Jn_.js";import"./index-BKOBkvBW.js";import"./index-CqQVZqBR.js";import"./index-DKwFbfLR.js";import"./useEventCallback-BOXba5-9.js";import"./SkeletonBar-CT56I8l3.js";import"./LoadingCell-DyjLUt0J.js";import"./ColumnConfigDialog-ABiTi9sK.js";import"./DraggableList-Dcun8_bD.js";import"./search-C4sRLKui.js";import"./Input-Bb36fr0S.js";import"./useControlled-3R4FDQ1-.js";import"./Button-D6iKZuwX.js";import"./small-cross-BKymWZKQ.js";import"./ActionButton-o8yF2Kx3.js";import"./Checkbox-D1QzlLNZ.js";import"./useValueChanged-ClgxGk8N.js";import"./CollapsiblePanel-DuorPJkU.js";import"./MultiColumnSortDialog-BW3zIbZT.js";import"./MenuTrigger-Ce7ldmZi.js";import"./CompositeItem-pt-Agyrs.js";import"./ToolbarRootContext-Cz4TE7JJ.js";import"./getDisabledMountTransitionStyles-axPgQXbs.js";import"./getPseudoElementBounds-DDAbSkfW.js";import"./chevron-down-BZavjwn-.js";import"./index-BPz5ga9u.js";import"./error-DmLEJ7LA.js";import"./BaseCbacBanner-Yz2WdOYZ.js";import"./makeExternalStore-Bfg6k2dl.js";import"./Tooltip-FO5R604L.js";import"./PopoverPopup-BQ5kZ_Z7.js";import"./debounce-DRTpIDWD.js";import"./tick-DHzl-Jfy.js";import"./DropdownField-D7wJSxdM.js";import"./isEqual-Conb4iRJ.js";import"./withOsdkMetrics-DIB0jy1n.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
