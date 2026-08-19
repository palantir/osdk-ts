import{j as r}from"./iframe-BNfKFTwQ.js";import{O as b}from"./object-table-CAaU72U0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DE8dqK6P.js";import{u as g}from"./useOsdkClient-CLsd_6uS.js";import"./preload-helper-DcxZ55lb.js";import"./Table-Ckif-3P-.js";import"./index-DAFvvsPq.js";import"./Dialog-D2Rmh4sD.js";import"./cross-HH4wJUZw.js";import"./svgIconContainer-74CT1nDx.js";import"./useBaseUiId-CaxbLd3J.js";import"./InternalBackdrop-C7RqDA_u.js";import"./composite-BC8qF70z.js";import"./index-bdV_r4dW.js";import"./index-DXeJyDDl.js";import"./index-BzZahzsx.js";import"./useEventCallback-DEpsGOa3.js";import"./SkeletonBar-BTeWxew_.js";import"./LoadingCell-pHyTVOpD.js";import"./ColumnConfigDialog-BzhRSFeQ.js";import"./DraggableList-dyo4Og3o.js";import"./search-CwOYclZa.js";import"./Input-E0NWe4pC.js";import"./useControlled-Bu0wvWhJ.js";import"./Button-BnlzCXtA.js";import"./small-cross-D4OkGDzt.js";import"./ActionButton-CVvxUvnD.js";import"./Checkbox-EiVPEQxE.js";import"./useValueChanged-ozJJ4mlR.js";import"./CollapsiblePanel-gQlK7m0B.js";import"./MultiColumnSortDialog-BIxcpfsm.js";import"./MenuTrigger-qhvNYd-R.js";import"./CompositeItem-DTeaCrKp.js";import"./ToolbarRootContext-Bs5lRq7j.js";import"./getDisabledMountTransitionStyles-DlzHPGDE.js";import"./getPseudoElementBounds-DsMDFke9.js";import"./chevron-down-BMgxqa-T.js";import"./index-BYcE_cgH.js";import"./error-B-mlb-Oh.js";import"./BaseCbacBanner-DgfovizO.js";import"./makeExternalStore-CJ7wcEHs.js";import"./Tooltip-Co0bnHu5.js";import"./PopoverPopup-C_HbajH0.js";import"./debounce-Db6rsQgj.js";import"./tick-tCkSegKb.js";import"./DropdownField-5YYwz-Gk.js";import"./isEqual-B4kkNXI6.js";import"./withOsdkMetrics-aegz5loh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
