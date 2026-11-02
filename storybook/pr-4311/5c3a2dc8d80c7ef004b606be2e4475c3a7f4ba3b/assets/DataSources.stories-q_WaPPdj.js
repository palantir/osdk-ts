import{j as r}from"./iframe-Biji2bf1.js";import{O as b}from"./object-table-DUZsbd2A.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-EKfKRRad.js";import{u as g}from"./useOsdkClient-iyUYhFeG.js";import"./preload-helper-BnQD_pUs.js";import"./Table-CpIpVsLD.js";import"./index-DfdB1ttn.js";import"./Dialog-B73FG_lW.js";import"./cross-DgO8Y3SG.js";import"./svgIconContainer-CtuHzH_7.js";import"./useBaseUiId-D8agI47X.js";import"./InternalBackdrop-Cur7vZgT.js";import"./composite-DTVuKyBl.js";import"./index-BcRJjTzj.js";import"./index-BBv7G2Gz.js";import"./index-DuyzOau4.js";import"./useEventCallback-BuGz6aEK.js";import"./SkeletonBar-prYHuNvB.js";import"./LoadingCell-BMxleUkf.js";import"./ColumnConfigDialog-BrIv1Rnf.js";import"./DraggableList-CNguQZ2s.js";import"./search-CLwp4qIO.js";import"./Input-Ka8u0CD4.js";import"./useControlled-CvQogkf4.js";import"./Button-B3fK-m0j.js";import"./small-cross-BJ_whcm4.js";import"./ActionButton-D5GVqQ0r.js";import"./Checkbox-Bil92OSh.js";import"./useValueChanged-CgmTK9yE.js";import"./CollapsiblePanel-Q8df4Rvk.js";import"./MultiColumnSortDialog-exGQm7Ht.js";import"./MenuTrigger-DSyx9jXw.js";import"./CompositeItem-D3laoAWw.js";import"./ToolbarRootContext-8ykIWAUV.js";import"./getDisabledMountTransitionStyles-uiKLVkrc.js";import"./getPseudoElementBounds-CuRI4A7q.js";import"./chevron-down-xdyo5QmP.js";import"./index-CwIIM57l.js";import"./error-AacONtzC.js";import"./BaseCbacBanner-BSXqmrpj.js";import"./makeExternalStore-Wt3R0a85.js";import"./Tooltip-Gl-FzrVH.js";import"./PopoverPopup-BgQoU5Ch.js";import"./debounce-CMsRCK9t.js";import"./tick-B0yPEej0.js";import"./DropdownField-BMpZFA_1.js";import"./isEqual-CbbNTxgy.js";import"./withOsdkMetrics-BRBNDhHT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
