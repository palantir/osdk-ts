import{j as r}from"./iframe-8RY7zcAm.js";import{O as b}from"./object-table-CbV4Ilqn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-pBftV-Sb.js";import{u as g}from"./useOsdkClient-P54WfxAq.js";import"./preload-helper-BGkfdM1d.js";import"./Table-CqiF0OH7.js";import"./index-F16GWZJ_.js";import"./Dialog-H50YXpLu.js";import"./cross-aMDWg1-0.js";import"./svgIconContainer-Bnw3Cx_6.js";import"./useBaseUiId-D3Is5SDV.js";import"./InternalBackdrop-CEKxxXVK.js";import"./composite-BDnjYEG7.js";import"./index-DR56g2UK.js";import"./index-CFR66S1o.js";import"./index-Cp_HTgiP.js";import"./useEventCallback-DbbrRawA.js";import"./SkeletonBar-Bkq728Iu.js";import"./LoadingCell-BcGa5QXD.js";import"./ColumnConfigDialog-DzrGm4d-.js";import"./DraggableList-CMpifBio.js";import"./search-C17XLT_W.js";import"./Input-CMi9rgRv.js";import"./useControlled-knRgQYvS.js";import"./Button-CAL7_9_d.js";import"./small-cross-BtCoVVKf.js";import"./ActionButton-D-4IyjVA.js";import"./Checkbox-BfbxkGOa.js";import"./useValueChanged-Do7jw3sZ.js";import"./CollapsiblePanel-C2F04vFW.js";import"./MultiColumnSortDialog-BovWGrT4.js";import"./MenuTrigger-D5_b2zNs.js";import"./CompositeItem-CgF-gvX4.js";import"./ToolbarRootContext-xvpkFEWT.js";import"./getDisabledMountTransitionStyles-C7O4Eqmv.js";import"./getPseudoElementBounds-Cf6FS6bo.js";import"./chevron-down-h5bw2Tva.js";import"./index-RRcFr7Yl.js";import"./error-DN4E4s-5.js";import"./BaseCbacBanner-BmgMkMuj.js";import"./makeExternalStore-C5QucHCB.js";import"./Tooltip-BlXoDKth.js";import"./PopoverPopup-BTcWcv1_.js";import"./debounce-B7Gynz3E.js";import"./tick-5ikQBC0o.js";import"./DropdownField-0aYp1GEb.js";import"./isEqual-DlaxxFzG.js";import"./withOsdkMetrics-DZUKZj-t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
