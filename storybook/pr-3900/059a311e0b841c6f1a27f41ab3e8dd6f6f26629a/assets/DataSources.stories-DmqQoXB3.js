import{j as r}from"./iframe-C0JXh_jt.js";import{O as b}from"./object-table-BR4W4gdR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-NY2CsW-X.js";import{u as g}from"./useOsdkClient-SMhKg19p.js";import"./preload-helper-0Et_7z7-.js";import"./Table-Kbovsawz.js";import"./index-BSrY5iMo.js";import"./Dialog-C4kIKRtm.js";import"./cross-Bm65njCD.js";import"./svgIconContainer-5-WGF7OP.js";import"./useBaseUiId-Bk4impeO.js";import"./InternalBackdrop-C18A-Tx4.js";import"./composite-nAeWCUEc.js";import"./index-Cs47SF-M.js";import"./index-BQYvqJ11.js";import"./index-B1VzYVQh.js";import"./useEventCallback-BvjYX78-.js";import"./SkeletonBar-C39BHLdc.js";import"./LoadingCell-DJwDUOoO.js";import"./ColumnConfigDialog-C4NDWqut.js";import"./DraggableList-GzGJIIDU.js";import"./search-BMjichka.js";import"./Input-DiPNrK96.js";import"./useControlled-DeS56r8l.js";import"./Button-DcuoF34z.js";import"./small-cross-DB3Xtqva.js";import"./ActionButton-C-01Q6PL.js";import"./Checkbox-D9L9g5eC.js";import"./useValueChanged-Dxl2PIC6.js";import"./CollapsiblePanel-CcTUzl4K.js";import"./MultiColumnSortDialog-zrIp6hk-.js";import"./MenuTrigger-CjiYJlVu.js";import"./CompositeItem-CtfPQ2IE.js";import"./ToolbarRootContext-yYdi36hQ.js";import"./getDisabledMountTransitionStyles-BzLHMn7U.js";import"./getPseudoElementBounds-BterO-VS.js";import"./chevron-down-C561UuJZ.js";import"./index-BH6PEMN3.js";import"./error-DWodFhyG.js";import"./BaseCbacBanner-DpG-XC7J.js";import"./makeExternalStore-DmS2WvLR.js";import"./Tooltip-KLREtOGA.js";import"./PopoverPopup-DiEm1yom.js";import"./debounce-2EuMzH9u.js";import"./tick-CaKTO1b8.js";import"./DropdownField-BoK85QnO.js";import"./isEqual-D-q1Gdam.js";import"./withOsdkMetrics-o4Vui-zi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
