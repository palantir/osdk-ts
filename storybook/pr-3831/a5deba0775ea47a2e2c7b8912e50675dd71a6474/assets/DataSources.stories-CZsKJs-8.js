import{j as r}from"./iframe-DYDbEQjg.js";import{O as b}from"./object-table-BCZcuYAt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BlnzcLl_.js";import{u as g}from"./useOsdkClient-D9j3w30H.js";import"./preload-helper-SJ9dZZVr.js";import"./Table-jlOvRX6Y.js";import"./index-DIR1geUe.js";import"./Dialog-BlDW67rF.js";import"./cross-D_scKixK.js";import"./svgIconContainer-C1TqWZyS.js";import"./useBaseUiId-BR9O5v-S.js";import"./InternalBackdrop-D_zpUOVQ.js";import"./composite-uzlB0y27.js";import"./index-0N5Un70a.js";import"./index-BG296H4M.js";import"./index-XBluGdqc.js";import"./useEventCallback-ZA-7jmPZ.js";import"./SkeletonBar-DztZ_7hK.js";import"./LoadingCell-C4rYAYsL.js";import"./ColumnConfigDialog--r3n0gLY.js";import"./DraggableList-BmmAomr4.js";import"./search-tc_uXOKh.js";import"./Input-HmPeHjJ0.js";import"./useControlled-CZkLI-xA.js";import"./isEqual-CNt8kgZ5.js";import"./isObject-UV1vgElv.js";import"./Button-CAwJXN2j.js";import"./ActionButton-pWQQMavn.js";import"./Checkbox-VhktoMZM.js";import"./useValueChanged-1kQHKx55.js";import"./CollapsiblePanel-BiF0HPtO.js";import"./MultiColumnSortDialog-W7nPKGnq.js";import"./MenuTrigger-DSWiBjxt.js";import"./CompositeItem-BZwtU7Zd.js";import"./ToolbarRootContext-BmRDBYMy.js";import"./getDisabledMountTransitionStyles-BCvw-dnC.js";import"./getPseudoElementBounds-CLG8begh.js";import"./chevron-down-PWwO_bbr.js";import"./index-1nIkSE_C.js";import"./error-DNHX8GsG.js";import"./BaseCbacBanner-C1t1v-iZ.js";import"./makeExternalStore-CGR7TrJA.js";import"./Tooltip-DZTD2XTO.js";import"./PopoverPopup-D8L2GGi3.js";import"./toNumber-C5Y5isVa.js";import"./tick-CkP52Rdl.js";import"./DropdownField-Q5qj9W2N.js";import"./withOsdkMetrics-Bxa30ZAo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
