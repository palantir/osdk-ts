import{j as r}from"./iframe-Dmr99acc.js";import{O as b}from"./object-table-BdOcZAFL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-kiDN6BND.js";import{u as g}from"./useOsdkClient-Bxv9nwMb.js";import"./preload-helper-C3fvUQx7.js";import"./Table-QilWXT60.js";import"./index-BrNfcA8o.js";import"./Dialog-_tm9sxGV.js";import"./cross-DPRer7Lc.js";import"./svgIconContainer-i6wDQlBQ.js";import"./useBaseUiId-CZ5UhgWP.js";import"./InternalBackdrop-BZm03awu.js";import"./composite-CTX0S4gD.js";import"./index-hysLT7S5.js";import"./index-D0cDwrQE.js";import"./index-TY9AeqMQ.js";import"./useEventCallback-C7IUT-60.js";import"./SkeletonBar-SINPGVDW.js";import"./LoadingCell--W3bLZb6.js";import"./ColumnConfigDialog-ChX7-k3I.js";import"./DraggableList-BBA9abwK.js";import"./search-CM8W8GMN.js";import"./Input-D7SXFGM5.js";import"./useControlled-MBfgJYZe.js";import"./isEqual-C_SZptGm.js";import"./isObject-B5YNbtiP.js";import"./Button-DUHV64rf.js";import"./ActionButton-C9gLbKzn.js";import"./Checkbox-CCFocOFJ.js";import"./useValueChanged-4X9USCWk.js";import"./CollapsiblePanel-DnJ1tKg0.js";import"./MultiColumnSortDialog-NxwHSZO-.js";import"./MenuTrigger-Yp1PN_ku.js";import"./CompositeItem-CzBeefKz.js";import"./ToolbarRootContext-v-w7YnHp.js";import"./getDisabledMountTransitionStyles-5La8Kryu.js";import"./getPseudoElementBounds-ZhV2I7IE.js";import"./chevron-down-CGjekJXx.js";import"./index-C5lGNItV.js";import"./error-CUTSYbW5.js";import"./BaseCbacBanner-BcSbcgq-.js";import"./makeExternalStore-HyFiibfZ.js";import"./Tooltip-D8v5HrC1.js";import"./PopoverPopup-D-qRdYYc.js";import"./toNumber-DMOIbN6B.js";import"./tick-BAMX-Ke2.js";import"./DropdownField-BDfCSa-4.js";import"./withOsdkMetrics-DSCZunsU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
