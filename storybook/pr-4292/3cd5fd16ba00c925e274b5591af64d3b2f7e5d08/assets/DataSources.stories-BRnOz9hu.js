import{j as r}from"./iframe-BMT91W1Z.js";import{O as b}from"./object-table-CHLHgtoY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CVmbhRL9.js";import{u as g}from"./useOsdkClient-CBtweC4d.js";import"./preload-helper-rvXeaCGs.js";import"./Table-DrLOC9YX.js";import"./index-Bx6Ivmjs.js";import"./Dialog-Ufu8hoIp.js";import"./cross-C9h9qNTe.js";import"./svgIconContainer-B3o1vMYf.js";import"./useBaseUiId-B4USe1gj.js";import"./InternalBackdrop-C3S75Ewn.js";import"./composite-D3rTrYkW.js";import"./index-xfqQSbot.js";import"./index-DEWgT4HO.js";import"./index-Biu6iMsk.js";import"./useEventCallback-BCuXMQng.js";import"./SkeletonBar-Cwkgfi-Z.js";import"./LoadingCell-JWak5BZo.js";import"./ColumnConfigDialog-4HXhX7RA.js";import"./DraggableList-Cg20omLf.js";import"./search-CYSVIzHU.js";import"./Input-B-23mNdu.js";import"./useControlled-L0eiJeCg.js";import"./Button-Djft0tAo.js";import"./small-cross-CyV6m0vF.js";import"./ActionButton-CUmEJmAC.js";import"./Checkbox-D_hza65E.js";import"./useValueChanged-Byf4MJrh.js";import"./CollapsiblePanel-C79Pa1Xk.js";import"./MultiColumnSortDialog-BVPqBnxe.js";import"./MenuTrigger-E2fABQOx.js";import"./CompositeItem-CssM4Gze.js";import"./ToolbarRootContext-D1Qf3sGL.js";import"./getDisabledMountTransitionStyles-w-M_QDiA.js";import"./getPseudoElementBounds-CvnYPr_B.js";import"./chevron-down-C4MVGpCZ.js";import"./index-BVpohJtF.js";import"./error-Dzj1sGPq.js";import"./BaseCbacBanner-Dv7E15sA.js";import"./makeExternalStore-DBhSiWtQ.js";import"./Tooltip-CACfcbwY.js";import"./PopoverPopup-aEwmg3S0.js";import"./debounce-D9qK1m7a.js";import"./tick-DAiyHf9d.js";import"./DropdownField-BYApLNcp.js";import"./isEqual-CxBadIyU.js";import"./withOsdkMetrics-DgSik2_o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
