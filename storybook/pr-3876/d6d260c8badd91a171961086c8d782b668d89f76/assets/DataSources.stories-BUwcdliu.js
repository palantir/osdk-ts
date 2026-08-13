import{j as r}from"./iframe-CTnfI1fn.js";import{O as b}from"./object-table-aPMHD6ZO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C5dLgo27.js";import{u as g}from"./useOsdkClient-O7Mj-qAw.js";import"./preload-helper-C5m-DnEx.js";import"./Table-hnAuiZx8.js";import"./index-BPrym6Kl.js";import"./Dialog-Bx4nD03L.js";import"./cross-D4HJDRmD.js";import"./svgIconContainer-BFETNtyc.js";import"./useBaseUiId-BSgypfGI.js";import"./InternalBackdrop-Cb5oJ93u.js";import"./composite-DP5BYXI_.js";import"./index-Tcjlr1Xh.js";import"./index-CSivwcG6.js";import"./index-Cvpf7HGY.js";import"./useEventCallback-CksauH-9.js";import"./SkeletonBar-diFfA6Py.js";import"./LoadingCell-BmwSsxYg.js";import"./ColumnConfigDialog-CR3rWsRi.js";import"./DraggableList-DTswv5-B.js";import"./search-C2q7wa1q.js";import"./Input-CpteBLrp.js";import"./useControlled-CBc9j59P.js";import"./Button-s38-kdWV.js";import"./small-cross-BdeJKm8T.js";import"./ActionButton-C3UfynQH.js";import"./Checkbox-BWBu_T2r.js";import"./useValueChanged-Dc0ezk3N.js";import"./CollapsiblePanel-2oxc_ptb.js";import"./MultiColumnSortDialog-DjIlGeDq.js";import"./MenuTrigger-DiFKGoMt.js";import"./CompositeItem-CS9C2Hpj.js";import"./ToolbarRootContext-BdrEzidw.js";import"./getDisabledMountTransitionStyles-BCsy3609.js";import"./getPseudoElementBounds-wqeFSaKd.js";import"./chevron-down-BKx-E6vn.js";import"./index-B3Orgk-A.js";import"./error-BZ1221iV.js";import"./BaseCbacBanner-BTKdSCqU.js";import"./makeExternalStore-DBGKNZLc.js";import"./Tooltip-CTQxiSY6.js";import"./PopoverPopup-Ct9yt3c3.js";import"./debounce-5bVA-BgV.js";import"./tick-CoLyb-AK.js";import"./DropdownField-DE73NP0s.js";import"./isEqual-D-f_j2hI.js";import"./withOsdkMetrics-BxNR9pg9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
