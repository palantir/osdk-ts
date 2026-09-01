import{j as r}from"./iframe-DWCUNAgH.js";import{O as b}from"./object-table-yHUfiZrX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-AzdmdrSB.js";import{u as g}from"./useOsdkClient-CIZUCnSq.js";import"./preload-helper-CllRkgj6.js";import"./Table-DehLudrN.js";import"./index-vPfXSe3i.js";import"./Dialog-C5rNgLZT.js";import"./cross-s4mYc0O3.js";import"./svgIconContainer-BHOQdzaM.js";import"./useBaseUiId-CYOEG7DI.js";import"./InternalBackdrop-CF8Jd0mr.js";import"./composite-DZBVWi3t.js";import"./index-Qe8PCUYJ.js";import"./index-cPCy3bFL.js";import"./index-BUhcus0w.js";import"./useEventCallback-D9midYVp.js";import"./SkeletonBar-DpVscZFf.js";import"./LoadingCell-CG6tkgGP.js";import"./ColumnConfigDialog-DBA6pxoY.js";import"./DraggableList-C-ti_Lyt.js";import"./search-D7gKGmcx.js";import"./Input-BMNb_hi9.js";import"./useControlled-Ba-PlL56.js";import"./Button-D7K0Sf4T.js";import"./small-cross-BlnHnuCl.js";import"./ActionButton-CV61KAz2.js";import"./Checkbox-qL_08NUu.js";import"./useValueChanged-C3GY74Cc.js";import"./CollapsiblePanel-Cz1uHs6i.js";import"./MultiColumnSortDialog-xUJHNI2I.js";import"./MenuTrigger-BcMsSN9G.js";import"./CompositeItem-CVjfjLok.js";import"./ToolbarRootContext-cpZFd1K3.js";import"./getDisabledMountTransitionStyles-CtOsq3X_.js";import"./getPseudoElementBounds-BdBOEd_H.js";import"./chevron-down-Bsil1jJ0.js";import"./index-D14ZBxmP.js";import"./error-_xKRYfae.js";import"./BaseCbacBanner-Y0_vxP-R.js";import"./makeExternalStore-C7M61MFA.js";import"./Tooltip-BBvR4voq.js";import"./PopoverPopup-BRoJH9FS.js";import"./debounce-CiX1XvrO.js";import"./tick-DpXneqLq.js";import"./DropdownField-Br1gAOJ2.js";import"./isEqual-Dp95ehwz.js";import"./withOsdkMetrics-DUDoeULv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
