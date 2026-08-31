import{j as r}from"./iframe-kjaGychq.js";import{O as b}from"./object-table-DtAOwnvR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ChSKEd-t.js";import{u as g}from"./useOsdkClient-C_JMrZ9l.js";import"./preload-helper-Bl0HOLga.js";import"./Table-yceMqCPQ.js";import"./index-DjgQhnBF.js";import"./Dialog-BqHc_IIV.js";import"./cross-L2jMPbGH.js";import"./svgIconContainer-CspjkWlr.js";import"./useBaseUiId-TjxpSWOe.js";import"./InternalBackdrop-1yzCUhph.js";import"./composite-BkSyEkbC.js";import"./index-D7cO7uk3.js";import"./index-6OM5s4An.js";import"./index-D-NViNaC.js";import"./useEventCallback-C-yX551Y.js";import"./SkeletonBar-BvGzHd7M.js";import"./LoadingCell-CKFEdKpP.js";import"./ColumnConfigDialog-CF8ehKcw.js";import"./DraggableList-CFUKHjHh.js";import"./search-CQrDhBIK.js";import"./Input-DVuwFRa1.js";import"./useControlled-Kf_hbsZS.js";import"./Button-DXRU1CRA.js";import"./small-cross-B0RAbmMl.js";import"./ActionButton-C_0lopXI.js";import"./Checkbox-BKEIWW3F.js";import"./useValueChanged-BMFv-pZ-.js";import"./CollapsiblePanel-DqljYdxc.js";import"./MultiColumnSortDialog-DzsepXD7.js";import"./MenuTrigger-GWXScTdU.js";import"./CompositeItem-HSXuyywu.js";import"./ToolbarRootContext-C2zyjXkq.js";import"./getDisabledMountTransitionStyles-DWY7W2-l.js";import"./getPseudoElementBounds-CuiFjfC9.js";import"./chevron-down-CgpyX1i1.js";import"./index-CYDXmlsy.js";import"./error-DkyVF_rd.js";import"./BaseCbacBanner-C9-Woo9C.js";import"./makeExternalStore-DIRQhbnc.js";import"./Tooltip-BwAGqb-f.js";import"./PopoverPopup-Dx6lE3v2.js";import"./debounce-CIETSCiW.js";import"./tick-Ce83b2nO.js";import"./DropdownField-6291IN6f.js";import"./isEqual-BNwwKxjx.js";import"./withOsdkMetrics-Dj5RKdqB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
