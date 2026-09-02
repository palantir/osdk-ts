import{j as r}from"./iframe-BDYkqvKe.js";import{O as b}from"./object-table-K5fMhv6U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BLU7ojyy.js";import{u as g}from"./useOsdkClient-dYN0Yvuj.js";import"./preload-helper-C36rJOAe.js";import"./Table-CT3JE7pW.js";import"./index-BRka1pCh.js";import"./Dialog-gUo4l4fk.js";import"./cross-BjNcEcWu.js";import"./svgIconContainer-CCyU9VHa.js";import"./useBaseUiId-UK_jdfAB.js";import"./InternalBackdrop-BmAe8PJ1.js";import"./composite-BODYGvTF.js";import"./index-F-0Lu3oA.js";import"./index-DMkY-4jo.js";import"./index-B9-WbJqu.js";import"./useEventCallback-iMH7A3pZ.js";import"./SkeletonBar-Cq_nprHL.js";import"./LoadingCell-DJ7KQfZH.js";import"./ColumnConfigDialog-iTIe4fMe.js";import"./DraggableList-DCvsjFKH.js";import"./search-CSsyQg3w.js";import"./Input-BR9BGUIw.js";import"./useControlled-ByKl2Iuv.js";import"./Button-CIPwZs7k.js";import"./small-cross-Cbjgg7ob.js";import"./ActionButton-DBYSomqw.js";import"./Checkbox-RA2YgDOE.js";import"./useValueChanged-CfjX2SMH.js";import"./CollapsiblePanel-aJJDXHKx.js";import"./MultiColumnSortDialog-CLpn8cYf.js";import"./MenuTrigger-etkbVx6I.js";import"./CompositeItem-CU4sB2os.js";import"./ToolbarRootContext-CxcdMdex.js";import"./getDisabledMountTransitionStyles-gipNIZ-N.js";import"./getPseudoElementBounds-BidLTe78.js";import"./chevron-down-DpmU34Wb.js";import"./index-DQIJwSCX.js";import"./error-BUARWoS0.js";import"./BaseCbacBanner-vwuuPXIN.js";import"./makeExternalStore-CG2NmNwS.js";import"./Tooltip-Bh4GJ4Q9.js";import"./PopoverPopup-CW8vS9sl.js";import"./debounce-BSt0zZQY.js";import"./tick-ApKf3hEQ.js";import"./DropdownField-DwIxO86o.js";import"./isEqual-DnYx_c7F.js";import"./withOsdkMetrics-BDaIIid_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
