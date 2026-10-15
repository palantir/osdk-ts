import{j as r}from"./iframe-C8jWyiQL.js";import{O as b}from"./object-table-BlbetHme.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CcfVctAP.js";import{u as g}from"./useOsdkClient-GeBqIj0g.js";import"./preload-helper-D3hrqtKI.js";import"./Table-B34kvLEc.js";import"./index-Ck3WMYCS.js";import"./Dialog-CSPx5HhV.js";import"./cross-Dl8HY39B.js";import"./svgIconContainer-Cl0UVpcd.js";import"./useBaseUiId-C0Hhh4zZ.js";import"./InternalBackdrop-CiK-2PLb.js";import"./composite-VSkp61oJ.js";import"./index-Ch17Lfr0.js";import"./index-p54yret9.js";import"./index-Cd22zSOl.js";import"./useEventCallback-C0LDLFCe.js";import"./SkeletonBar-Bfqg6xhZ.js";import"./LoadingCell-BcraXBGS.js";import"./ColumnConfigDialog-CweTTfeO.js";import"./DraggableList-D8_gI2zQ.js";import"./search-D-ei7hDs.js";import"./Input-BJZD4UWc.js";import"./useControlled-HdEPNqxD.js";import"./Button-3m2yzrh1.js";import"./small-cross-BwCr6L7P.js";import"./ActionButton-9g7J3G0y.js";import"./Checkbox-DIBfRvqq.js";import"./useValueChanged-CoaMZ36h.js";import"./CollapsiblePanel-CwpNijKr.js";import"./MultiColumnSortDialog-XgTPDgaq.js";import"./MenuTrigger-B6oNWJYv.js";import"./CompositeItem-DPPPi3Ly.js";import"./ToolbarRootContext-CKRR356X.js";import"./getDisabledMountTransitionStyles-Rw7QHMBY.js";import"./getPseudoElementBounds-B_4Hsk7I.js";import"./chevron-down-DWvQrpRH.js";import"./index-B-MOYaQO.js";import"./error-DFAsAkKT.js";import"./BaseCbacBanner-g2klUgTP.js";import"./makeExternalStore-CTfzdsJg.js";import"./Tooltip-CYCmH68_.js";import"./PopoverPopup-BswZff0D.js";import"./debounce-C49teRpi.js";import"./tick-TxqdkZbh.js";import"./DropdownField-a018rFqR.js";import"./isEqual-CyNlFjjd.js";import"./withOsdkMetrics-DXVkLmYC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
