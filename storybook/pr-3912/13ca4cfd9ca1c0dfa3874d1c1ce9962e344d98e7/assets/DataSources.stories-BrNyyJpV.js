import{j as r}from"./iframe-CnFdBl-W.js";import{O as b}from"./object-table-B4sXouVB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DVQzNwTy.js";import{u as g}from"./useOsdkClient-BhwDdzh_.js";import"./preload-helper-D0VrPXX4.js";import"./Table-BCdm6SW9.js";import"./index-C7QX7sqh.js";import"./Dialog-cgPcTj2J.js";import"./cross-C0CFi2LA.js";import"./svgIconContainer-BH-fJV0L.js";import"./useBaseUiId-Db0ciCX6.js";import"./InternalBackdrop-DXjwxVqq.js";import"./composite-Bchd3j-K.js";import"./index-D-ULFZnm.js";import"./index-CVfyo-vI.js";import"./index-0fNVrXhf.js";import"./useEventCallback-qSmw8efB.js";import"./SkeletonBar-BdOFoRrQ.js";import"./LoadingCell-BLzyjQA-.js";import"./ColumnConfigDialog-FZGCYRdi.js";import"./DraggableList-Db-KWUP4.js";import"./search-BZ3zzvB7.js";import"./Input-DbDF9B3g.js";import"./useControlled-q9_B02Xu.js";import"./Button-CliHRcLl.js";import"./small-cross-CNTpTYNR.js";import"./ActionButton-f_QMANPB.js";import"./Checkbox-DuI53iNm.js";import"./useValueChanged-B9ALwysi.js";import"./CollapsiblePanel-DABG9C5U.js";import"./MultiColumnSortDialog-Sb3fOS37.js";import"./MenuTrigger-4FjSbfAn.js";import"./CompositeItem-ZV7LMbWM.js";import"./ToolbarRootContext-CpYHpTj-.js";import"./getDisabledMountTransitionStyles-BZKarr_8.js";import"./getPseudoElementBounds-k-pDzgEw.js";import"./chevron-down-CQGtY8nv.js";import"./index-CkqoLo0V.js";import"./error-CB_FjmA0.js";import"./BaseCbacBanner-YRlLrGPK.js";import"./makeExternalStore-BjBU5_-l.js";import"./Tooltip-q-GVrgqN.js";import"./PopoverPopup-BDYpDFDK.js";import"./debounce-BYgZD2VZ.js";import"./tick-n1UZaFr7.js";import"./DropdownField-DWV1mCKe.js";import"./isEqual-DIsBPJHu.js";import"./withOsdkMetrics-DiZaeAo8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
