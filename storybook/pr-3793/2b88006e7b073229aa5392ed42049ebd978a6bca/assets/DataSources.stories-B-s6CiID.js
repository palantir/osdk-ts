import{j as r}from"./iframe-6hQ2fc3n.js";import{O as b}from"./object-table-BXVuEG0G.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BmLIKrfz.js";import{u as g}from"./useOsdkClient-D-d--rTZ.js";import"./preload-helper-bQV8UHWE.js";import"./Table-DClTy0WR.js";import"./index-B1djcyHP.js";import"./Dialog-CknjkbMC.js";import"./cross-ccjJBWTc.js";import"./svgIconContainer-Clfe7Lwj.js";import"./useBaseUiId-C9747yUz.js";import"./InternalBackdrop-CpYIKNpL.js";import"./composite-CFvNHCkP.js";import"./index-jX9mz87a.js";import"./index-K-Op5Vv5.js";import"./index-bkfQr57D.js";import"./useEventCallback-gCPFH5QV.js";import"./SkeletonBar-DnyiV29j.js";import"./LoadingCell-MA9hl1i0.js";import"./ColumnConfigDialog-BkL5BPXj.js";import"./DraggableList-DETFlm4X.js";import"./search-BuQM9KwU.js";import"./Input-BNMmRwH0.js";import"./useControlled-u3EMkLFh.js";import"./isEqual-DdWPSUaU.js";import"./isObject-CirLIJW7.js";import"./Button-VUEdQ68Q.js";import"./ActionButton-azoptpfb.js";import"./Checkbox-Ca3PYpeb.js";import"./useValueChanged-BBF2PhG7.js";import"./CollapsiblePanel-CT90hPsj.js";import"./MultiColumnSortDialog-BUqO-KoJ.js";import"./MenuTrigger-BJJvjvwi.js";import"./CompositeItem-B8ehrMS9.js";import"./ToolbarRootContext-DIDb7FlQ.js";import"./getDisabledMountTransitionStyles-Da9PJqiY.js";import"./getPseudoElementBounds-B10_-yXQ.js";import"./chevron-down-CJa2nLIB.js";import"./index-BP_HdQ9P.js";import"./error-2bwv59jW.js";import"./BaseCbacBanner-ibkm49XL.js";import"./makeExternalStore-DyCpkktA.js";import"./Tooltip-d54S_j8-.js";import"./PopoverPopup-DUz9RoFe.js";import"./toNumber-BAElQw_D.js";import"./tick-BJM8MNhK.js";import"./DropdownField-DANYs0wh.js";import"./withOsdkMetrics-BkqPVDva.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
