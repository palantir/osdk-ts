import{j as r}from"./iframe-C4E-g_Np.js";import{O as b}from"./object-table-BvZY8ks1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DB3PKhcM.js";import{u as g}from"./useOsdkClient-DuIbV6Tk.js";import"./preload-helper-rW2p5jqX.js";import"./Table-DoTclkzj.js";import"./index-CzqkLMMI.js";import"./Dialog-oOfXzLLB.js";import"./cross-6-c7L2_r.js";import"./svgIconContainer-i3Vzui20.js";import"./useBaseUiId-B-PzIYIN.js";import"./InternalBackdrop-Cc3UyaVF.js";import"./composite-BnlE1__B.js";import"./index-D1JR9Ik6.js";import"./index-BMt0vC51.js";import"./index-1_U-6RN5.js";import"./useEventCallback-B_G8HNu3.js";import"./SkeletonBar-CISy7UuQ.js";import"./LoadingCell-q6GT9Knz.js";import"./ColumnConfigDialog-BxMAye25.js";import"./DraggableList-RigxtXGV.js";import"./search-CfqJuXpO.js";import"./Input-BPR-03z-.js";import"./useControlled-CQT-2p8e.js";import"./Button-kJtgGGYx.js";import"./small-cross-ClQmt7Kl.js";import"./ActionButton-CiCsL3Oo.js";import"./Checkbox-BES1SoPw.js";import"./useValueChanged-DvRoJUac.js";import"./CollapsiblePanel-DIugTpM9.js";import"./MultiColumnSortDialog-DbbTce7i.js";import"./MenuTrigger-NsQDuuGv.js";import"./CompositeItem-DpdLDIC_.js";import"./ToolbarRootContext-DAbASYAb.js";import"./getDisabledMountTransitionStyles-BXneaNn3.js";import"./getPseudoElementBounds-BqbtI_0K.js";import"./chevron-down-CUSU7y7B.js";import"./index-4qPHZMUz.js";import"./error-2WKWP45F.js";import"./BaseCbacBanner-DK52-1P-.js";import"./makeExternalStore-o-ytUCUX.js";import"./Tooltip-YL3zwoBF.js";import"./PopoverPopup-UNHpzLqe.js";import"./debounce-B9bCgoy4.js";import"./tick-CrIHxN3X.js";import"./DropdownField-qBxkOplm.js";import"./isEqual-Z4P9dhR-.js";import"./withOsdkMetrics-IbzZIByL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
