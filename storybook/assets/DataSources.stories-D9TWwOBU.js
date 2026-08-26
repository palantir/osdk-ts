import{j as r}from"./iframe-HPk8PS_c.js";import{O as b}from"./object-table-DyFkhb8j.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CF70CXUv.js";import{u as g}from"./useOsdkClient-Df4IDmh8.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-su4Hi2o2.js";import"./index-ycotQEUY.js";import"./Dialog-DF3gmhsv.js";import"./cross-qvgLowaP.js";import"./svgIconContainer-BMj1NZEz.js";import"./useBaseUiId-DyhY13O7.js";import"./InternalBackdrop-DLnVAThU.js";import"./composite-CDSdRi3O.js";import"./index-Bnjs_noj.js";import"./index-0ACB6LG3.js";import"./index-CVMhrb3v.js";import"./useEventCallback-VhI6mw5e.js";import"./SkeletonBar-Ce3NAC-V.js";import"./LoadingCell-CumeMH-r.js";import"./ColumnConfigDialog-ko1-r91r.js";import"./DraggableList-D2pNdOgJ.js";import"./search-x6xgpOK0.js";import"./Input-Bh9c4kB6.js";import"./useControlled-Km1VPfUr.js";import"./Button-rjBOsBth.js";import"./small-cross-D6KgMXaf.js";import"./ActionButton-Ci9x-kBG.js";import"./Checkbox-Br4gvYc9.js";import"./useValueChanged-D0B2x_ZH.js";import"./CollapsiblePanel-DAjrCgEC.js";import"./MultiColumnSortDialog-BOH4eueD.js";import"./MenuTrigger-wiRu2lqv.js";import"./CompositeItem-GZD7DweO.js";import"./ToolbarRootContext-Bc6ZO6TN.js";import"./getDisabledMountTransitionStyles-Br696C9U.js";import"./getPseudoElementBounds-BLRKQPoP.js";import"./chevron-down-bsQWt5c5.js";import"./index-CJv58edI.js";import"./error-B-DQrxK7.js";import"./BaseCbacBanner-CjDeC_hp.js";import"./makeExternalStore-BZC1NDUy.js";import"./Tooltip-C-1zfwo-.js";import"./PopoverPopup-b-zBBO9f.js";import"./debounce-MLDsEJum.js";import"./tick-DRH0bCvc.js";import"./DropdownField-CMFJy-W9.js";import"./isEqual-DgpaePJY.js";import"./withOsdkMetrics-DPrVQQ1f.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
