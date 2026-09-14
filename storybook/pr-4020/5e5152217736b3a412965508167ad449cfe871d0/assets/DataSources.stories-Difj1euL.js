import{j as r}from"./iframe-88cR0Kb6.js";import{O as b}from"./object-table-sPJ6fNUO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BTORkuo5.js";import{u as g}from"./useOsdkClient-CQKftRkO.js";import"./preload-helper-YlgatCnn.js";import"./Table-CsDV1Dux.js";import"./index-B3iu9Z4K.js";import"./Dialog-DqUj8fbX.js";import"./cross-vHFr3mSH.js";import"./svgIconContainer-BWrQPgSJ.js";import"./useBaseUiId-DM5phI6w.js";import"./InternalBackdrop-DdO1TR54.js";import"./composite-D2yt_gez.js";import"./index-m81VPS-N.js";import"./index-CGLm8TXz.js";import"./index-TuaMuo_5.js";import"./useEventCallback-BY6bNS44.js";import"./SkeletonBar-DL6i_PYS.js";import"./LoadingCell-Q6oUQvVQ.js";import"./ColumnConfigDialog-Cdup8hG_.js";import"./DraggableList-BSEACjIX.js";import"./search-D2eeLv3Q.js";import"./Input-CBeXc1FM.js";import"./useControlled-B1WACGZl.js";import"./Button-CfFrXY9_.js";import"./small-cross-TgiDvwiu.js";import"./ActionButton-DilKZ_dk.js";import"./Checkbox-DTID00qk.js";import"./useValueChanged-CKD-6pQy.js";import"./CollapsiblePanel-LjlawlAT.js";import"./MultiColumnSortDialog-C2L2JOK1.js";import"./MenuTrigger-B6iDWpHK.js";import"./CompositeItem-x-J85oX3.js";import"./ToolbarRootContext-B6xb1eEg.js";import"./getDisabledMountTransitionStyles-EWMBCi1t.js";import"./getPseudoElementBounds-CBBgF56s.js";import"./chevron-down-J3WtM_eJ.js";import"./index-CIeymtFj.js";import"./error-B6tbVTJ_.js";import"./BaseCbacBanner-MFdFNXXS.js";import"./makeExternalStore-DzZ4mLu7.js";import"./Tooltip-BDliEVDr.js";import"./PopoverPopup-CPw-5q_W.js";import"./debounce-R5snSJSd.js";import"./tick-BXAWhEKb.js";import"./DropdownField-C6Sig76U.js";import"./isEqual-D3N0BFL-.js";import"./withOsdkMetrics-BByVeH1n.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
