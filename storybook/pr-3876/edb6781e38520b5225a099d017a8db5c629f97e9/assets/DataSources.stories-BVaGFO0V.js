import{j as r}from"./iframe-BnFW5qcd.js";import{O as b}from"./object-table-DpZKEsGF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BHUP-WUW.js";import{u as g}from"./useOsdkClient-C1FnG1xl.js";import"./preload-helper-CNP4KH2h.js";import"./Table-B5A2-075.js";import"./index-cKOHoRyg.js";import"./Dialog-BcixpPY9.js";import"./cross-DNbpGFX0.js";import"./svgIconContainer-Bodb3rrt.js";import"./useBaseUiId-D6lJdHIa.js";import"./InternalBackdrop-CmeR-qjL.js";import"./composite-CvySWJ8Z.js";import"./index-BL84tjwg.js";import"./index-C1VvjJNC.js";import"./index-CBGW4lEy.js";import"./useEventCallback-C-0rxgFy.js";import"./SkeletonBar-CcA6jzxL.js";import"./LoadingCell-Bxn1SRvU.js";import"./ColumnConfigDialog-KESGpiaY.js";import"./DraggableList-DPRVDCNI.js";import"./search-D9IFs7N_.js";import"./Input-CE1LAlWc.js";import"./useControlled-_BjM0h58.js";import"./Button-BWyY3kpw.js";import"./small-cross-Cr5VBWUI.js";import"./ActionButton-C7QNn70Z.js";import"./Checkbox-BuO9H-YM.js";import"./useValueChanged-CJb1heYG.js";import"./CollapsiblePanel-BVe58I7Q.js";import"./MultiColumnSortDialog--H_xB0vm.js";import"./MenuTrigger-DHzBcdzW.js";import"./CompositeItem-Cs7ZSGuB.js";import"./ToolbarRootContext-C1j3JbNp.js";import"./getDisabledMountTransitionStyles-BPLTyrx0.js";import"./getPseudoElementBounds-BMRMQ8Bv.js";import"./chevron-down-DKM-O5Y0.js";import"./index-BPVr2RDp.js";import"./error-TzDePL8Z.js";import"./BaseCbacBanner-BcBr0dVU.js";import"./makeExternalStore-Bf_CkFqj.js";import"./Tooltip-CW7yW1bf.js";import"./PopoverPopup-N71IRvI2.js";import"./debounce-C3zlIzLL.js";import"./tick-DTrJYZYq.js";import"./DropdownField-nlLolSiv.js";import"./isEqual-CFM-mB7S.js";import"./withOsdkMetrics-BThk06i8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
