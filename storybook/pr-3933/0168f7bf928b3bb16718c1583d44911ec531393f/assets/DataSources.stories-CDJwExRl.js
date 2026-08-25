import{j as r}from"./iframe-DNmOe6lu.js";import{O as b}from"./object-table-DaUAFcHr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CvoBYoLh.js";import{u as g}from"./useOsdkClient-D-Rf3tpC.js";import"./preload-helper-CzQBCnx5.js";import"./Table-pbu-eGdq.js";import"./index-caWHSjtR.js";import"./Dialog-DH72U-Bf.js";import"./cross-Uw_qOqoe.js";import"./svgIconContainer-BE7zSGaJ.js";import"./useBaseUiId-DGcVLjQ2.js";import"./InternalBackdrop-CrKwsNIv.js";import"./composite-B-F9Dc9d.js";import"./index-BWnubV6Z.js";import"./index-CZaZwMdZ.js";import"./index-DpG-lJ3k.js";import"./useEventCallback-BcEHKNRU.js";import"./SkeletonBar-DFBb6qr_.js";import"./LoadingCell-hs5DOMVg.js";import"./ColumnConfigDialog-Bc6AruhI.js";import"./DraggableList-Cfr7aUuo.js";import"./search-BEsKwVx4.js";import"./Input-Dp4jVADC.js";import"./useControlled-Csc64VP1.js";import"./Button-CWVQOzz8.js";import"./small-cross-CUQPuwfM.js";import"./ActionButton-CMFy62q7.js";import"./Checkbox-B73qEk4e.js";import"./useValueChanged-xPpoXUlu.js";import"./CollapsiblePanel-kG9qILQW.js";import"./MultiColumnSortDialog-BC-zJwW7.js";import"./MenuTrigger-DBtCEjfZ.js";import"./CompositeItem-D6pRYz6J.js";import"./ToolbarRootContext-CmvtQ4qG.js";import"./getDisabledMountTransitionStyles-DqR0kNGe.js";import"./getPseudoElementBounds-DEMCmsZt.js";import"./chevron-down-B8h_jYO6.js";import"./index-CP4rvvXE.js";import"./error-Wtx85rSt.js";import"./BaseCbacBanner-ndtjJ8Jt.js";import"./makeExternalStore-CyEm4-2W.js";import"./Tooltip-HO9Lnryd.js";import"./PopoverPopup-0lG9TMBf.js";import"./debounce-uutSfaQu.js";import"./tick-DlnBurgl.js";import"./DropdownField-BiYwm9gw.js";import"./isEqual-D-JsaTyA.js";import"./withOsdkMetrics-yeBN-NI8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
