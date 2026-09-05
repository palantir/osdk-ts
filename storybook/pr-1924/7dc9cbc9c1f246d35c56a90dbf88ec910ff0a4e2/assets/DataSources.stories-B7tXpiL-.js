import{j as r}from"./iframe-BWsptOx9.js";import{O as b}from"./object-table-DihJbz49.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BQXXzug_.js";import{u as g}from"./useOsdkClient-CEV94sBT.js";import"./preload-helper-hck2-2iY.js";import"./Table-B34l7PQv.js";import"./index-7iRS3JG9.js";import"./Dialog-DeDB1e_1.js";import"./cross-BoUzuZNF.js";import"./svgIconContainer-BOVctZiQ.js";import"./useBaseUiId-ITgInSIU.js";import"./InternalBackdrop-DDaeYjKA.js";import"./composite-BV3Gpi4q.js";import"./index-YOpRnDEd.js";import"./index-DlVXSgR3.js";import"./index-i61hjDRu.js";import"./useEventCallback-DutHdois.js";import"./SkeletonBar-2lSm92jN.js";import"./LoadingCell-D31__DIB.js";import"./ColumnConfigDialog-BvGTc6_G.js";import"./DraggableList-FujtZZxW.js";import"./search-CPZq-I8Z.js";import"./Input-DMLFbQ55.js";import"./useControlled-6nTFaGE5.js";import"./Button-VsXDl_eG.js";import"./small-cross-DNTeAJ8Z.js";import"./ActionButton-B6MwYfE-.js";import"./Checkbox-DWZvPWr3.js";import"./useValueChanged-CpdELUFS.js";import"./CollapsiblePanel-Bpn4fRSH.js";import"./MultiColumnSortDialog-zNWTGmuN.js";import"./MenuTrigger-Bcr0TAMN.js";import"./CompositeItem-BCNmsXPB.js";import"./ToolbarRootContext-DeurAZ5u.js";import"./getDisabledMountTransitionStyles-CA1DSUbY.js";import"./getPseudoElementBounds-BeC7UFLp.js";import"./chevron-down-B0CcOxY_.js";import"./index-BoyJNymp.js";import"./error-D4aggEwD.js";import"./BaseCbacBanner-DNLHXNw_.js";import"./makeExternalStore-De-Jb6J5.js";import"./Tooltip-BuhkBBtD.js";import"./PopoverPopup-CVs19qPy.js";import"./debounce-DyiaKSQ5.js";import"./tick-DbxYiBa-.js";import"./DropdownField-B7NOWBJ6.js";import"./isEqual-btCNlz3t.js";import"./withOsdkMetrics-B8dcDHgp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
