import{j as r}from"./iframe-BX6zTnij.js";import{O as b}from"./object-table-HjumBpwO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-OTAGILWL.js";import{u as g}from"./useOsdkClient-BTAusKbD.js";import"./preload-helper-CIctYDkr.js";import"./Table-KIccUGPl.js";import"./index-COyl-fnK.js";import"./Dialog-BBd-3h2m.js";import"./cross-DQs-8X1Y.js";import"./svgIconContainer-YvrcWCz5.js";import"./useBaseUiId-Iiv9zSt_.js";import"./InternalBackdrop-DERl9nUU.js";import"./composite-tNjYOXwg.js";import"./index-BXMmQHN1.js";import"./index-BBTcolHi.js";import"./index-BdFJFz6A.js";import"./useEventCallback-CXC3bTZZ.js";import"./SkeletonBar-BMTNEQmY.js";import"./LoadingCell-BDOMyR8x.js";import"./ColumnConfigDialog-CMkoR81A.js";import"./DraggableList-Ch6VbW8H.js";import"./search-CxVBrsXo.js";import"./Input-CSzJ0VGU.js";import"./useControlled-BbWNiggX.js";import"./isEqual-BULHHzuo.js";import"./isObject-Byb1sDcd.js";import"./Button-pMsIGg4G.js";import"./ActionButton-BXtG9d8G.js";import"./Checkbox-BSQI_4Tj.js";import"./useValueChanged-BRwHer1l.js";import"./CollapsiblePanel-CsPYgs9H.js";import"./MultiColumnSortDialog-UvnfXN2R.js";import"./MenuTrigger-Ds4lY9vq.js";import"./CompositeItem-BFxojHmW.js";import"./ToolbarRootContext-BEqq6mNC.js";import"./getDisabledMountTransitionStyles-BvemoO_E.js";import"./getPseudoElementBounds-C4OutAm4.js";import"./chevron-down-CJR3WBq7.js";import"./index-BpLkgj3w.js";import"./error-DLJXEcMM.js";import"./BaseCbacBanner-D93tYNJp.js";import"./makeExternalStore-BWA0mUfB.js";import"./Tooltip-b5S0dA7I.js";import"./PopoverPopup-9P-V5GZQ.js";import"./toNumber-BGKkQbGY.js";import"./tick-C9TCC1fg.js";import"./DropdownField-CRXzHbV6.js";import"./withOsdkMetrics-B5u35hN9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
