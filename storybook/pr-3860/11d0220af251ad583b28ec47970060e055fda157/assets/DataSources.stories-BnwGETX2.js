import{j as r}from"./iframe-iH6aGZ-L.js";import{O as b}from"./object-table-a7ZsLNno.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CHB2Ikm9.js";import{u as g}from"./useOsdkClient-B8seCst5.js";import"./preload-helper-CJtpjaOC.js";import"./Table-OPJM8E9j.js";import"./index-B4R4MaYX.js";import"./Dialog-DKmYBsKh.js";import"./cross-CkFkh41g.js";import"./svgIconContainer-BL1fQZ1j.js";import"./useBaseUiId-BSDhHAYa.js";import"./InternalBackdrop-CtbdD6NE.js";import"./composite-DeLDawp0.js";import"./index-DyyqAmyq.js";import"./index-2xFQTGFl.js";import"./index-CLkrj7OE.js";import"./useEventCallback-BK2MNF3p.js";import"./SkeletonBar-DBSXSsw6.js";import"./LoadingCell-DWNG52ui.js";import"./ColumnConfigDialog-DVcO7s43.js";import"./DraggableList-qKzNY3pF.js";import"./search-2at2vqv1.js";import"./Input-D14Qdbql.js";import"./useControlled-Ciw2H6Dm.js";import"./Button-7Khz_S_G.js";import"./small-cross-BwgZyYIG.js";import"./ActionButton-CFvcoen5.js";import"./Checkbox-DPj4VBsw.js";import"./useValueChanged-CAss3vNn.js";import"./CollapsiblePanel-DU6yeCre.js";import"./MultiColumnSortDialog-DisDwWOC.js";import"./MenuTrigger-CZGwNbbc.js";import"./CompositeItem-DWpKdWiQ.js";import"./ToolbarRootContext-BUYtkzjr.js";import"./getDisabledMountTransitionStyles-BgzHU7dJ.js";import"./getPseudoElementBounds-CoVHCcVm.js";import"./chevron-down-Uo9hPIsv.js";import"./index-CoSy4Fag.js";import"./error-UygG0IL8.js";import"./BaseCbacBanner-y2xs3-H5.js";import"./makeExternalStore-DoAAt5DI.js";import"./Tooltip-y6ddxL_Q.js";import"./PopoverPopup-BjYwELlB.js";import"./debounce-DZlmqeaB.js";import"./tick-B6XK7voc.js";import"./DropdownField-Dx9t1Lmw.js";import"./isEqual-Q3Pmqr9o.js";import"./withOsdkMetrics-B5j3Cgvy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
