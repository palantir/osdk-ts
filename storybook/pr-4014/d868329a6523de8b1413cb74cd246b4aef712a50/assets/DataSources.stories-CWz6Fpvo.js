import{j as r}from"./iframe-DUUN6t7i.js";import{O as b}from"./object-table-DTqnDN-H.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ezOPBKiU.js";import{u as g}from"./useOsdkClient-BfrDVP7e.js";import"./preload-helper-BzY2PQK8.js";import"./Table-DnFu5Qca.js";import"./index-CllJbB6n.js";import"./Dialog-BQe1t3O4.js";import"./cross-BL0CmC8v.js";import"./svgIconContainer-BiEJIKWJ.js";import"./useBaseUiId-DD-rnAgn.js";import"./InternalBackdrop-50xUnS5H.js";import"./composite-DXLhbd5q.js";import"./index-CF3EfJQa.js";import"./index-Cyo2_RId.js";import"./index-zmjPNORe.js";import"./useEventCallback-C8EWv1mM.js";import"./SkeletonBar-D_7uUrgz.js";import"./LoadingCell-BF9OtyKp.js";import"./ColumnConfigDialog-B_VPvCsk.js";import"./DraggableList-DDmZHPJs.js";import"./search-BOFS1DOk.js";import"./Input-eja5fv_S.js";import"./useControlled-OksHndqL.js";import"./Button-BiBj2Ngy.js";import"./small-cross-Brklb7bd.js";import"./ActionButton-Dc9XrfLH.js";import"./Checkbox-Bymh2P1S.js";import"./useValueChanged-DbYhsi4t.js";import"./CollapsiblePanel-DY2xqSav.js";import"./MultiColumnSortDialog-D1gQqu1j.js";import"./MenuTrigger-CrjuaHsp.js";import"./CompositeItem-C7oLwUzE.js";import"./ToolbarRootContext-sOFoFOUi.js";import"./getDisabledMountTransitionStyles-DUae_uwF.js";import"./getPseudoElementBounds-BVQl0rR8.js";import"./chevron-down-9ao4cWz0.js";import"./index-JYM0ZjgP.js";import"./error-Btl2ABt3.js";import"./BaseCbacBanner-pDJQtSGl.js";import"./makeExternalStore-DSCive7G.js";import"./Tooltip-2hA_c5uF.js";import"./PopoverPopup-Bh2SXv5G.js";import"./debounce-CCRuevd-.js";import"./tick-CVC53zOF.js";import"./DropdownField-DUhPo9yt.js";import"./isEqual-f8Z9Lb_j.js";import"./withOsdkMetrics-YnroKoAT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
