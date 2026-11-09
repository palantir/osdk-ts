import{j as r}from"./iframe-HL5MQevY.js";import{O as b}from"./object-table-Br4gN5qL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ljMo7YM4.js";import{u as g}from"./useOsdkClient-BNLgdfP5.js";import"./preload-helper-_Ar_KgCE.js";import"./Table-Dr5Fkr5G.js";import"./index-CgN-SBJb.js";import"./Dialog-BK9qLDgm.js";import"./cross-peQbcr5N.js";import"./svgIconContainer-BLMvF_H6.js";import"./useBaseUiId-DySigJtL.js";import"./InternalBackdrop-CKzg6RWA.js";import"./composite-DWznhUuB.js";import"./index-CrQU1n-1.js";import"./index-f_DjFpxo.js";import"./index-C5eyjoS4.js";import"./useEventCallback-DlHXQ56Q.js";import"./SkeletonBar-B-apZFZ9.js";import"./LoadingCell-DSvyww-o.js";import"./ColumnConfigDialog-4ALjdxqV.js";import"./DraggableList-CIVKfffU.js";import"./search-BmC04ZEV.js";import"./Input-DgL7dTdA.js";import"./useControlled-BtrL0bqk.js";import"./Button-CqmZF1Qg.js";import"./small-cross-CMw0W6zl.js";import"./ActionButton-BLpeWzFG.js";import"./Checkbox-Hr-W96Z2.js";import"./useValueChanged-B9yWsaBI.js";import"./CollapsiblePanel-VgvJldOc.js";import"./MultiColumnSortDialog-Bw9P7eMf.js";import"./MenuTrigger-CA8etj0e.js";import"./CompositeItem-BWnHlDKK.js";import"./ToolbarRootContext-Egv6Ob_q.js";import"./getDisabledMountTransitionStyles-BxwARY5V.js";import"./getPseudoElementBounds-CHzRmgRw.js";import"./chevron-down-BP0kQuP_.js";import"./index-D0tF1Jnd.js";import"./error-CIfjiXVi.js";import"./BaseCbacBanner-DW6vW6kE.js";import"./makeExternalStore-CTUMxwBz.js";import"./Tooltip-fPY7edYe.js";import"./isObject-BqGyebfI.js";import"./debounce-CBt-yOgZ.js";import"./tick-BndTvqfU.js";import"./DropdownField-8OaEx8Wn.js";import"./isEqual-BBF27A1Q.js";import"./_baseIsEqual-DmjT90h1.js";import"./withOsdkMetrics-B6341jPo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
