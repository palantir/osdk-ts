import{j as r}from"./iframe-CAOw1_Np.js";import{O as b}from"./object-table-Bnm6FDPO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-82msb3vF.js";import{u as g}from"./useOsdkClient-BinCW-Bh.js";import"./preload-helper-BtDOje63.js";import"./Table-B5_PXRuD.js";import"./index-rKNeW6R2.js";import"./Dialog-CBafvJcd.js";import"./cross-6UH6f3dc.js";import"./svgIconContainer-DJZ5kPqi.js";import"./useBaseUiId-BRTQVt9V.js";import"./InternalBackdrop-DdGTfKiB.js";import"./composite-ceXOKcGl.js";import"./index-B9i7IC3F.js";import"./index-Bj9jZdxR.js";import"./index-CSvoLCmH.js";import"./useEventCallback-DP-govtU.js";import"./SkeletonBar-4wb1Kl_E.js";import"./LoadingCell-Cj-L5vTI.js";import"./ColumnConfigDialog-Dh-jOaO7.js";import"./DraggableList-D1kkjKgg.js";import"./search-CAyVB4HI.js";import"./Input-BIFRYkQa.js";import"./useControlled-BcHOqTg-.js";import"./Button-BCAtXo9W.js";import"./small-cross-BhY_ToEZ.js";import"./ActionButton-D6SZJ9IH.js";import"./Checkbox-Bh7-Ldil.js";import"./useValueChanged-BFl7n5IX.js";import"./CollapsiblePanel-D09cr1ad.js";import"./MultiColumnSortDialog-BBIMSvJM.js";import"./MenuTrigger-447gUd-z.js";import"./CompositeItem-CJnfXQEg.js";import"./ToolbarRootContext-kfYngOQa.js";import"./getDisabledMountTransitionStyles-BKTsnLJ9.js";import"./getPseudoElementBounds-B-ChLQl_.js";import"./chevron-down-CrNYgO2n.js";import"./index-DAICdrKF.js";import"./error-BklEgYFX.js";import"./BaseCbacBanner-CmQ2fwuw.js";import"./makeExternalStore-BP-pbk-j.js";import"./Tooltip-Brm-nAjm.js";import"./PopoverPopup-r-UXKcU9.js";import"./debounce-CxqcX0B2.js";import"./tick-C5OyQv1Y.js";import"./DropdownField-DPBhg9Lf.js";import"./isEqual-BqeFWCPf.js";import"./withOsdkMetrics-C9zKllhN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
