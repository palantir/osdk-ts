import{j as r}from"./iframe-C_eR_-FB.js";import{O as b}from"./object-table-RihnLn09.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DsLS9a3G.js";import{u as g}from"./useOsdkClient-UY9KdTa_.js";import"./preload-helper-D-iMj1JN.js";import"./Table-C8AAoGWT.js";import"./index-B5oDC2JQ.js";import"./Dialog-DSHxwALU.js";import"./cross-6THvcyRY.js";import"./svgIconContainer-CBJV4Tnn.js";import"./useBaseUiId-DHfbjF6K.js";import"./InternalBackdrop-CtVeclCs.js";import"./composite-CRpQuKDa.js";import"./index-JDCvzA9U.js";import"./index-C5Q3HutH.js";import"./index-C-Ct-Q1O.js";import"./useEventCallback-BSdQRjPY.js";import"./SkeletonBar-Dfyf_j8b.js";import"./LoadingCell-Dzl-OGae.js";import"./ColumnConfigDialog-UAE2sEv4.js";import"./DraggableList-VCR2ruyb.js";import"./search-BSm0Tn1z.js";import"./Input-DTI33c7U.js";import"./useControlled-BEI1fcJ3.js";import"./Button-D3eF3jJ4.js";import"./small-cross-CwIjWKJl.js";import"./ActionButton-C4NITY81.js";import"./Checkbox-DEDdXE32.js";import"./useValueChanged-D_PYMBeT.js";import"./CollapsiblePanel-5toXnu5d.js";import"./MultiColumnSortDialog-DRtR-Qs7.js";import"./MenuTrigger-kVlqUuN-.js";import"./CompositeItem-DORzwzYw.js";import"./ToolbarRootContext-MiWSvMtv.js";import"./getDisabledMountTransitionStyles-DyVQfBpM.js";import"./getPseudoElementBounds-DFY51yDa.js";import"./chevron-down-CYhIscH3.js";import"./index-DsvrxdPz.js";import"./error-BIKnaXwT.js";import"./BaseCbacBanner-PTKqEeHs.js";import"./makeExternalStore-DsUjsZj2.js";import"./Tooltip-BO3iXvgP.js";import"./PopoverPopup-BaCYp8dE.js";import"./debounce-BNBceRVR.js";import"./tick-C_kX7tnK.js";import"./DropdownField-BuvpvRO7.js";import"./isEqual-CGCncotN.js";import"./withOsdkMetrics-D4cys7NY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
