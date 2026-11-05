import{j as r}from"./iframe-Co9BLc26.js";import{O as b}from"./object-table-CLwi_Yce.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1CEUD_Qa.js";import{u as g}from"./useOsdkClient-CASwPT7t.js";import"./preload-helper-CjIZGyxJ.js";import"./Table-CifDJqyc.js";import"./index-CaXavGNz.js";import"./Dialog-lgpNH8YB.js";import"./cross-CdeazAmw.js";import"./svgIconContainer-XH9sO27g.js";import"./useBaseUiId-B7X46CyE.js";import"./InternalBackdrop-BPl8mach.js";import"./composite-Bs7VpVD-.js";import"./index-83om9hRt.js";import"./index-DuuftHJS.js";import"./index-ft_Pdv6a.js";import"./useEventCallback-C2F-xdBM.js";import"./SkeletonBar-hmw1BSr0.js";import"./LoadingCell-Z-Oxz0e-.js";import"./ColumnConfigDialog-Hrpl0G3s.js";import"./DraggableList-CQJmGSr0.js";import"./search-DQyAxhHi.js";import"./Input-B7An9dFp.js";import"./useControlled-Dm9Z_trU.js";import"./Button-CKhU91Nr.js";import"./small-cross-Clv-yC5T.js";import"./ActionButton-D9teap9J.js";import"./Checkbox-DQJvh9sN.js";import"./useValueChanged-CdK4eivV.js";import"./CollapsiblePanel-GyOfNAAh.js";import"./MultiColumnSortDialog-fQcgWBnJ.js";import"./MenuTrigger-C8J89teT.js";import"./CompositeItem-v285VzZv.js";import"./ToolbarRootContext-CL3VUEMw.js";import"./getDisabledMountTransitionStyles-Bm6XJ5DP.js";import"./getPseudoElementBounds-BE5wQuFp.js";import"./chevron-down-C2RhY0pV.js";import"./index-D2VnSIP3.js";import"./error-DApxBtMc.js";import"./BaseCbacBanner-DCA480_X.js";import"./makeExternalStore-C6cHHmQm.js";import"./Tooltip-YDfZI3Un.js";import"./PopoverPopup-DcMrtKCc.js";import"./debounce-BCFaqdaB.js";import"./tick-OrqCabsC.js";import"./DropdownField-YJ5OIQJX.js";import"./isEqual-LvWzQAZT.js";import"./withOsdkMetrics-D1C2IRuJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
