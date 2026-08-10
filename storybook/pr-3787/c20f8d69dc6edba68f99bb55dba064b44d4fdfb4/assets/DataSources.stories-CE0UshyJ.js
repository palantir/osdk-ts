import{j as r}from"./iframe-DBDiaCFH.js";import{O as b}from"./object-table-DzPjZ5wA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-nzxMyVH8.js";import{u as g}from"./useOsdkClient-CDjN6C8U.js";import"./preload-helper-CWzIkJz_.js";import"./Table-BKuVdOeS.js";import"./index-D_Q-x2L7.js";import"./Dialog-TVzYgLAf.js";import"./cross-CgXQH7_j.js";import"./svgIconContainer-6ctrVKh_.js";import"./useBaseUiId-DgDIOl-3.js";import"./InternalBackdrop-CBuZjigt.js";import"./composite-CjFrvZji.js";import"./index-BMfgUa25.js";import"./index-B5wN7D3f.js";import"./index-Dw3yDBgP.js";import"./useEventCallback-CCU0ou4a.js";import"./SkeletonBar-BIWH6fja.js";import"./LoadingCell-CI5ABUAv.js";import"./ColumnConfigDialog-CUMGYbNI.js";import"./DraggableList-CCHb2Foi.js";import"./search-CyOIbSz8.js";import"./Input-DKUt-MlO.js";import"./useControlled-BpXAkJvi.js";import"./isEqual-CMZMOgMY.js";import"./isObject-DqQC86dg.js";import"./Button-pSxneB8s.js";import"./ActionButton-CctFmRuO.js";import"./Checkbox-CKac-IxQ.js";import"./useValueChanged-CWt7t3qS.js";import"./CollapsiblePanel-BbNVGzEc.js";import"./MultiColumnSortDialog-DxxaaEbK.js";import"./MenuTrigger-BpWfF_OZ.js";import"./CompositeItem-B5nUuPn8.js";import"./ToolbarRootContext-A98l2Fo-.js";import"./getDisabledMountTransitionStyles-cV85HYgT.js";import"./getPseudoElementBounds-B5mUW0aI.js";import"./chevron-down-Ce9XSsNp.js";import"./index-Dfh84t6i.js";import"./error-CW5BzoP2.js";import"./BaseCbacBanner-CUK3Clcg.js";import"./makeExternalStore-BzqUGqFb.js";import"./Tooltip-CLt9Lwfx.js";import"./PopoverPopup-CmEuBpr5.js";import"./toNumber-CCQvBWWu.js";import"./tick-Cvhdnzky.js";import"./DropdownField-BCHUjyWz.js";import"./withOsdkMetrics-CD41Q7Nf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
