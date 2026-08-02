import{j as r}from"./iframe-DytthAgf.js";import{O as b}from"./object-table-DJHUpA5d.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ikd277XP.js";import{u as g}from"./useOsdkClient-BB_Qjreu.js";import"./preload-helper-C_4BNbTz.js";import"./Table-CG8VK7f1.js";import"./index-D3tIM5sk.js";import"./Dialog-DL-uZSD8.js";import"./cross-BAoo9bRB.js";import"./svgIconContainer-B3UGUQMc.js";import"./useBaseUiId-Dkek2wV5.js";import"./InternalBackdrop-CKlfqC_d.js";import"./composite-BtiuVRIQ.js";import"./index-BoY2zDED.js";import"./index-lj4n_gzr.js";import"./index-Cg68QRb4.js";import"./useEventCallback-D5hjObTy.js";import"./SkeletonBar-BslgRjWc.js";import"./LoadingCell-CTG-LOZa.js";import"./ColumnConfigDialog-CQpKKnM6.js";import"./DraggableList-CGL30u5r.js";import"./search-DxqwfofF.js";import"./Input-Dmrm85gF.js";import"./useControlled-BiVwljs8.js";import"./isEqual-BI3vA7Ba.js";import"./isObject-DwNdKho2.js";import"./Button-COGmdSd7.js";import"./ActionButton-DIz3vx6C.js";import"./Checkbox-Rnnk1CNA.js";import"./useValueChanged-D2yo41HC.js";import"./CollapsiblePanel-CvnwF6oN.js";import"./MultiColumnSortDialog-zGAxeUw5.js";import"./MenuTrigger-CuvxcAIl.js";import"./CompositeItem-C2b15spo.js";import"./ToolbarRootContext-Tt4yBAJp.js";import"./getDisabledMountTransitionStyles-CW35Y1qZ.js";import"./getPseudoElementBounds-onXc2cOr.js";import"./chevron-down-D-EU7ysh.js";import"./index-Dufg7QH_.js";import"./error-C8qY1hME.js";import"./BaseCbacBanner-4HweScCj.js";import"./makeExternalStore-B--gn_oA.js";import"./Tooltip-t-5z9t1Y.js";import"./PopoverPopup-BIy-JnXN.js";import"./toNumber-Cs5Prda0.js";import"./tick-afCbX4dN.js";import"./DropdownField-C6kbYpb5.js";import"./withOsdkMetrics-Car_C0r4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
