import{j as r}from"./iframe-DlM6B-FB.js";import{O as b}from"./object-table-CWtObA7w.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CsZSDsh4.js";import{u as g}from"./useOsdkClient-CiFACcQR.js";import"./preload-helper-u2RLrIGI.js";import"./Table-Ct3IwB6a.js";import"./index-CYQRwdVV.js";import"./Dialog-BJ_2_ABV.js";import"./cross-BZZx8k18.js";import"./svgIconContainer-noCDTri9.js";import"./useBaseUiId-DRE93LYc.js";import"./InternalBackdrop-dxLX1x9n.js";import"./composite-CrTNbjQa.js";import"./index-B0PJMKha.js";import"./index-57kYohf7.js";import"./index-ci9DTaVf.js";import"./useEventCallback-DyRutwG_.js";import"./SkeletonBar-CAOnuNcl.js";import"./LoadingCell-DjcUh_dy.js";import"./ColumnConfigDialog-uNmeZN2x.js";import"./DraggableList-Dbc9mMK6.js";import"./search-BYOBZNp-.js";import"./Input-D_WeNPfg.js";import"./useControlled-CsLIsW3G.js";import"./isEqual-B4P0XCLO.js";import"./isObject-CEMnqBAF.js";import"./Button-A7YjjwPO.js";import"./ActionButton-DM2YiDdT.js";import"./Checkbox-yMFEsdFS.js";import"./useValueChanged-DoAX728p.js";import"./CollapsiblePanel-B4oiENW1.js";import"./MultiColumnSortDialog-DutiDnG3.js";import"./MenuTrigger-CqVn8n34.js";import"./CompositeItem-Btf0WYJg.js";import"./ToolbarRootContext-BiI_JxAm.js";import"./getDisabledMountTransitionStyles-DUy6Xf2g.js";import"./getPseudoElementBounds-CD3YwOAf.js";import"./chevron-down-CsEGKzIn.js";import"./index-BDbD87hK.js";import"./error-DqZBJOa8.js";import"./BaseCbacBanner-DGBNYoyp.js";import"./makeExternalStore-0nWRtaCT.js";import"./Tooltip-DHTNTZjs.js";import"./PopoverPopup-CoUIDpDw.js";import"./toNumber-CVKNIu72.js";import"./tick-_fMD3p21.js";import"./DropdownField-CtlbtoUq.js";import"./withOsdkMetrics-CvYqftk7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
