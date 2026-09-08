import{j as r}from"./iframe-DUenp6lH.js";import{O as b}from"./object-table-C48Ay4cH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ofy1AT21.js";import{u as g}from"./useOsdkClient-ByG7-mm8.js";import"./preload-helper-BrQ2IwN3.js";import"./Table-RA08xR2E.js";import"./index-CR7YeDMv.js";import"./Dialog-Bi0-87L8.js";import"./cross-DwLsQDiH.js";import"./svgIconContainer-CPPwWmWb.js";import"./useBaseUiId-C5AD1Gq1.js";import"./InternalBackdrop-BOQvDSVB.js";import"./composite-cl-eg-Mr.js";import"./index-DiIhoR1V.js";import"./index-Ki6h912l.js";import"./index-DzdVgYkQ.js";import"./useEventCallback-DwkKTB_T.js";import"./SkeletonBar-CnPy04Zb.js";import"./LoadingCell-CyhhjVaS.js";import"./ColumnConfigDialog-CBsiNMD4.js";import"./DraggableList-DHAnIO9Z.js";import"./search-DYKYo547.js";import"./Input-D9S29-Xm.js";import"./useControlled-CqXkm6hT.js";import"./Button-HrxQOGa9.js";import"./small-cross-Gsoau07o.js";import"./ActionButton-DG7GAKjE.js";import"./Checkbox-KlXsCHME.js";import"./useValueChanged-BebdI0MG.js";import"./CollapsiblePanel-DyVSO9SW.js";import"./MultiColumnSortDialog-DNU6QNyT.js";import"./MenuTrigger-D0rdQJBG.js";import"./CompositeItem-C4zuFT9w.js";import"./ToolbarRootContext-CHqPptLt.js";import"./getDisabledMountTransitionStyles-B1jh3EhZ.js";import"./getPseudoElementBounds-DK2fCaAe.js";import"./chevron-down-iXJuV4q7.js";import"./index-CVMpflAU.js";import"./error-BN9liXL6.js";import"./BaseCbacBanner-D-Q2jttt.js";import"./makeExternalStore-8dLgdQIB.js";import"./Tooltip-B4-11Oly.js";import"./PopoverPopup-BoCkIIy2.js";import"./debounce-BqwG49z-.js";import"./tick-Bkdmgl55.js";import"./DropdownField-CKAcXByL.js";import"./isEqual-CuqW1eM_.js";import"./withOsdkMetrics-Zv84aaRv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
