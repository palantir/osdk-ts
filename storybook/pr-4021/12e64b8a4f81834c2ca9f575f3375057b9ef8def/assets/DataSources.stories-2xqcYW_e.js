import{j as r}from"./iframe-DBsN32YB.js";import{O as b}from"./object-table-DjeIQPag.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DJ4nEZM_.js";import{u as g}from"./useOsdkClient-0ECQxVY2.js";import"./preload-helper-D8tz-Fbl.js";import"./Table-DPyHXa7-.js";import"./index-nhJVH1tz.js";import"./Dialog-DQ_Uwa09.js";import"./cross-DPk5SIsZ.js";import"./svgIconContainer-X_dBFOT2.js";import"./useBaseUiId-CSOklioX.js";import"./InternalBackdrop-DYY9GSmo.js";import"./composite-BNtgV9XE.js";import"./index-vWZxRhPY.js";import"./index-Cf_xmn3O.js";import"./index-BWmQuch2.js";import"./useEventCallback-BDGHapFp.js";import"./SkeletonBar-OO5fv2aQ.js";import"./LoadingCell-DY05omvW.js";import"./ColumnConfigDialog-DWZ3wkpR.js";import"./DraggableList-CjGeHf5D.js";import"./search-rD_BABVw.js";import"./Input-DkxwhWbl.js";import"./useControlled-BvDU6EbQ.js";import"./Button-CQwlNKu1.js";import"./small-cross-Cim7XK7q.js";import"./ActionButton-koQGMFye.js";import"./Checkbox-DCWuLRNR.js";import"./useValueChanged-NXrJU1s1.js";import"./CollapsiblePanel-U9o9y0a2.js";import"./MultiColumnSortDialog-Dqm-9n9T.js";import"./MenuTrigger-8jSKQYx3.js";import"./CompositeItem-Dfbl7Tdw.js";import"./ToolbarRootContext-6JBun5UY.js";import"./getDisabledMountTransitionStyles-OsqmWLyJ.js";import"./getPseudoElementBounds-Bc1_ckMu.js";import"./chevron-down-eJT7_Kub.js";import"./index-eEgfn-we.js";import"./error-C3JCbj1L.js";import"./BaseCbacBanner-CgR4_YV5.js";import"./makeExternalStore-DbaTP8FP.js";import"./Tooltip-BjuL9DjV.js";import"./PopoverPopup-0gvGwbx8.js";import"./debounce-DaYdPsaE.js";import"./tick-DsjN0rWO.js";import"./DropdownField-II4e2JLl.js";import"./isEqual-lRAD_Git.js";import"./withOsdkMetrics-1oll6lxC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
