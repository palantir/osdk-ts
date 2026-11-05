import{j as r}from"./iframe-BK35Aetk.js";import{O as b}from"./object-table-CkCnEar3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C79EqFRc.js";import{u as g}from"./useOsdkClient-xrzUDYQQ.js";import"./preload-helper-CSbGcA9T.js";import"./Table-DGVjD7XG.js";import"./index-CRoVE56T.js";import"./Dialog-COzctyK2.js";import"./cross-B0y6D7Iy.js";import"./svgIconContainer-CSIx5hfy.js";import"./useBaseUiId-wzcWLuni.js";import"./InternalBackdrop-Ch6GACCQ.js";import"./composite-BC1NOOFJ.js";import"./index-DW1QNimG.js";import"./index-CMsvzF6c.js";import"./index-CS1BdUz3.js";import"./useEventCallback-BMEbCQj6.js";import"./SkeletonBar-BmOvAKiB.js";import"./LoadingCell-CctttUKX.js";import"./ColumnConfigDialog-D8jneHNT.js";import"./DraggableList-CA5PY4G1.js";import"./search-BlafU9EC.js";import"./Input-BBffaDeP.js";import"./useControlled-Dh0EQZ-9.js";import"./Button-DM8aYBS9.js";import"./small-cross-BMXPDC9b.js";import"./ActionButton-kIs-FADX.js";import"./Checkbox-Bb9DIJfr.js";import"./useValueChanged-Dhfv4x3U.js";import"./CollapsiblePanel-DrdyzccY.js";import"./MultiColumnSortDialog-D0ulr6k9.js";import"./MenuTrigger-9ezUGiea.js";import"./CompositeItem-1I2WlbJ9.js";import"./ToolbarRootContext-BdRYVpKL.js";import"./getDisabledMountTransitionStyles-CWWRm8ZG.js";import"./getPseudoElementBounds-Bmg_H6Mu.js";import"./chevron-down-CyfgKJCg.js";import"./index-DhoMcwTi.js";import"./error-DLnzRR-1.js";import"./BaseCbacBanner-DJTrs5I0.js";import"./makeExternalStore-CRBaxVJ6.js";import"./Tooltip-D-esBjUo.js";import"./PopoverPopup-DNHFOhuU.js";import"./debounce-DaJCVt97.js";import"./tick-Cdslhrb5.js";import"./DropdownField-Bdh0YP6p.js";import"./isEqual-DiF47LLT.js";import"./withOsdkMetrics-BZ06iEbV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
