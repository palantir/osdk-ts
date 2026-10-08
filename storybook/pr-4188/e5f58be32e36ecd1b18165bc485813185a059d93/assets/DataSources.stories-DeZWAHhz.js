import{j as r}from"./iframe-BdamuBSW.js";import{O as b}from"./object-table-Dd8F9MJb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DTS1HjrJ.js";import{u as g}from"./useOsdkClient-BwzpfxSK.js";import"./preload-helper-DZ9xmEaG.js";import"./Table-BwFliMap.js";import"./index-CzCGUNDu.js";import"./Dialog-BWtAf7yb.js";import"./cross-CLaBWSw6.js";import"./svgIconContainer-CGhkkD0s.js";import"./useBaseUiId-CrCJEUlz.js";import"./InternalBackdrop-CO4Xg4x0.js";import"./composite-Bvo9YAgy.js";import"./index-B5Cmbtjp.js";import"./index-BCh8Pu1q.js";import"./index-FY0Bg0-m.js";import"./useEventCallback-CECLtwpw.js";import"./SkeletonBar-CWjKtAmo.js";import"./LoadingCell-Dx7_fSTs.js";import"./ColumnConfigDialog-CxxEVPe2.js";import"./DraggableList-jE3NYPTZ.js";import"./search-XGjCTgti.js";import"./Input-vUwBhrLX.js";import"./useControlled-D5iM1jy5.js";import"./Button-NcM8hPFP.js";import"./small-cross-ZuHva1xM.js";import"./ActionButton-CcP9PBD9.js";import"./Checkbox-BGJIpafi.js";import"./useValueChanged-DGZ0cM7F.js";import"./CollapsiblePanel-pxD-JLDi.js";import"./MultiColumnSortDialog-Voex3n1E.js";import"./MenuTrigger-BtepaWQu.js";import"./CompositeItem-BuuNoifa.js";import"./ToolbarRootContext-VKjIBJTb.js";import"./getDisabledMountTransitionStyles-BFJq39Vl.js";import"./getPseudoElementBounds-CjHvqmd5.js";import"./chevron-down-BM9a4BBi.js";import"./index-Djo-XrZC.js";import"./error-DKUZpZvu.js";import"./BaseCbacBanner-DPvaJU3n.js";import"./makeExternalStore-DmdygOVW.js";import"./Tooltip-Cv_FqXfC.js";import"./PopoverPopup-DhOu8Gke.js";import"./debounce-2PBdA7WY.js";import"./tick-BEUPv9hK.js";import"./DropdownField-CK-WBLfS.js";import"./isEqual-CehFsAyc.js";import"./withOsdkMetrics-CSNwlJ-x.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
