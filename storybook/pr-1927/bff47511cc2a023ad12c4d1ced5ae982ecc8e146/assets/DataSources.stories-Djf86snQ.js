import{j as r}from"./iframe-B441qIYR.js";import{O as b}from"./object-table-xMl1DPma.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-xSd-RLQL.js";import{u as g}from"./useOsdkClient-BsFxQUuE.js";import"./preload-helper-BQxy24fI.js";import"./Table-DvXQCezG.js";import"./index-CqjhHzve.js";import"./Dialog-BSPszA5B.js";import"./cross-BNrt0aH1.js";import"./svgIconContainer-BSmiGxdz.js";import"./useBaseUiId-CAzOpzCv.js";import"./InternalBackdrop-DmeCQFx1.js";import"./composite-CzbYCu9o.js";import"./index-TqQ_ZGFy.js";import"./index-B-mP9lvr.js";import"./index-CGHV9asT.js";import"./useEventCallback-Dkln44I2.js";import"./SkeletonBar-Cf_A4GXZ.js";import"./LoadingCell-CUD2XvbK.js";import"./ColumnConfigDialog-CdaMXRL_.js";import"./DraggableList-Ckk1H0fj.js";import"./search-DUz8ofCX.js";import"./Input-QLiOOLjz.js";import"./useControlled-CWP741nv.js";import"./Button-DzRMTkim.js";import"./small-cross-DlCMMKuZ.js";import"./ActionButton-C-ago1dj.js";import"./Checkbox-BHSZgzni.js";import"./useValueChanged-CifPK3o3.js";import"./CollapsiblePanel-BFH9uHwC.js";import"./MultiColumnSortDialog-DjBGUDQv.js";import"./MenuTrigger-CWKd6dht.js";import"./CompositeItem-C8CTVhA-.js";import"./ToolbarRootContext-CYvhcckZ.js";import"./getDisabledMountTransitionStyles-BjyDpkoM.js";import"./getPseudoElementBounds-C-3tqagg.js";import"./chevron-down-DNBdHWh5.js";import"./index-UGmLGzC-.js";import"./error-bNXgEpmP.js";import"./BaseCbacBanner-zaU3j8Ri.js";import"./makeExternalStore-D5BQihPb.js";import"./Tooltip-DAmduYRB.js";import"./PopoverPopup-D6B75mLS.js";import"./debounce-D_X6R-CZ.js";import"./tick-ClXuYj6h.js";import"./DropdownField-DPKco6cz.js";import"./isEqual-BPN4A_it.js";import"./withOsdkMetrics-BIArtGAT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
