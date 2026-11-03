import{j as r}from"./iframe-BWanzCtz.js";import{O as b}from"./object-table-CwNOXM7e.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BsWFVpug.js";import{u as g}from"./useOsdkClient-CY0unRSX.js";import"./preload-helper-DAi-P9Ju.js";import"./Table-BV5-Gg4n.js";import"./index-Cay7iVqb.js";import"./Dialog-BLyGAnT7.js";import"./cross-BVvC7Zca.js";import"./svgIconContainer-DSaD-I6F.js";import"./useBaseUiId-C5dN58Q0.js";import"./InternalBackdrop-TV8p7nHD.js";import"./composite-BafjzlJM.js";import"./index-ChQ5JBSj.js";import"./index-Dt-Mk7jk.js";import"./index-D9z2WP2p.js";import"./useEventCallback-BWB9gGvg.js";import"./SkeletonBar-CYNtPgHh.js";import"./LoadingCell-CuqD0XAT.js";import"./ColumnConfigDialog-DzAHMAUr.js";import"./DraggableList-D1yn9G39.js";import"./search-DRygowk4.js";import"./Input-Bt15IjV-.js";import"./useControlled-OnnNsrqI.js";import"./Button-BAzXvXXK.js";import"./small-cross-CVFLscZG.js";import"./ActionButton-BVuwYTIs.js";import"./Checkbox-ZZCzmUtb.js";import"./useValueChanged-KxYyG3ZS.js";import"./CollapsiblePanel-BgKRL3mk.js";import"./MultiColumnSortDialog-5nGqdLgE.js";import"./MenuTrigger-SRJmVwA-.js";import"./CompositeItem-BcxNHfQK.js";import"./ToolbarRootContext-De0bccAd.js";import"./getDisabledMountTransitionStyles-CvKZ4Y_-.js";import"./getPseudoElementBounds-O3K5JmaN.js";import"./chevron-down-BeOHwgJN.js";import"./index-CqrxIVAp.js";import"./error-CdqtE7bq.js";import"./BaseCbacBanner-B4VASqii.js";import"./makeExternalStore-_zqsQAA7.js";import"./Tooltip-DLH2JBkg.js";import"./PopoverPopup-DgQdAKzP.js";import"./debounce-ChP0u6Gi.js";import"./tick-BXFsjeh2.js";import"./DropdownField-ScfJ-83O.js";import"./isEqual-Dz8uBPxJ.js";import"./withOsdkMetrics-d8l__l47.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
