import{j as r}from"./iframe-BI8s_LEM.js";import{O as b}from"./object-table-CL0BkB0n.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1Q7C2Hkl.js";import{u as g}from"./useOsdkClient-C2fsiA5n.js";import"./preload-helper-2UIxwTHe.js";import"./Table-BmRYdzGD.js";import"./index-Cdoej1rc.js";import"./Dialog-D_9xz-Le.js";import"./cross-BMpmO8GH.js";import"./svgIconContainer-BP-rj0xG.js";import"./useBaseUiId-BeAhLVth.js";import"./InternalBackdrop-DhaouQlo.js";import"./composite-DBRFQf_M.js";import"./index-BYp5baBX.js";import"./index-D73snmm6.js";import"./index-Hn1Gkz3-.js";import"./useEventCallback-DSgoeTO5.js";import"./SkeletonBar-Qw-6NH1E.js";import"./LoadingCell-B0ZdTOu4.js";import"./ColumnConfigDialog-h9w9BMXO.js";import"./DraggableList-DFgK7wxZ.js";import"./search-Du5SutCf.js";import"./Input-BsZHTTke.js";import"./useControlled-C9KhyXIr.js";import"./Button-CleaIGAw.js";import"./small-cross-DqUYI6od.js";import"./ActionButton-BDTQjYJK.js";import"./Checkbox-3OUMqCMb.js";import"./useValueChanged-B0lFUv3p.js";import"./CollapsiblePanel-AqkBPfsf.js";import"./MultiColumnSortDialog-CMRqJAHC.js";import"./MenuTrigger-AzYhSgWT.js";import"./CompositeItem-LJzGPuj_.js";import"./ToolbarRootContext-DK00e0CZ.js";import"./getDisabledMountTransitionStyles-BaieG3-u.js";import"./getPseudoElementBounds-BQKwbblt.js";import"./chevron-down-C-PF6_L5.js";import"./index-A6vp9cHu.js";import"./error-BKT0KUzG.js";import"./BaseCbacBanner-B1-7JbJW.js";import"./makeExternalStore-CASfG9zJ.js";import"./Tooltip-zQvEcTLq.js";import"./PopoverPopup-Bj-c1PFc.js";import"./debounce-CKraKVTC.js";import"./tick-BswIpFNK.js";import"./DropdownField-DIawgDE5.js";import"./isEqual-Dt2hEEhg.js";import"./withOsdkMetrics-BNQD1U6q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
