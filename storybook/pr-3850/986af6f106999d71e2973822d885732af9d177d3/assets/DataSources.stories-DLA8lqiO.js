import{j as r}from"./iframe-B8ePIdgx.js";import{O as b}from"./object-table-BDHL_SDm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CGexWt1I.js";import{u as g}from"./useOsdkClient-B6g5iTpe.js";import"./preload-helper-CO52apix.js";import"./Table-B3G0R4Ei.js";import"./index-DUi6XBWn.js";import"./Dialog-yiIybKoY.js";import"./cross-Z2WIVKHq.js";import"./svgIconContainer-B5mfSzbk.js";import"./useBaseUiId--yhQINEj.js";import"./InternalBackdrop-Cna5j6JC.js";import"./composite-DrvPRKh9.js";import"./index-DzqwBQvc.js";import"./index-BDjNZM-d.js";import"./index-DJ6GgvW1.js";import"./useEventCallback-CqNNi0CJ.js";import"./SkeletonBar-CWitf-97.js";import"./LoadingCell-tI3Ymnd3.js";import"./ColumnConfigDialog-Bd9fLb8z.js";import"./DraggableList-E3xCY56a.js";import"./search-CRVGvOET.js";import"./Input-D21o8IPI.js";import"./useControlled-DkyHp8L_.js";import"./isEqual-9--5X3Q2.js";import"./isObject-BqZ_5db-.js";import"./Button-B1Ldn3Hf.js";import"./ActionButton-BcBaxta7.js";import"./Checkbox-L4xJmh-b.js";import"./useValueChanged-BNoCYxh2.js";import"./CollapsiblePanel-Bp2Y834B.js";import"./MultiColumnSortDialog-43iZe9aA.js";import"./MenuTrigger-C4fe3BSA.js";import"./CompositeItem-DUbz8YTd.js";import"./ToolbarRootContext-CpKnibLo.js";import"./getDisabledMountTransitionStyles-VYuEU4Z8.js";import"./getPseudoElementBounds-KMVduuX9.js";import"./chevron-down-VVimmYFs.js";import"./index-cjRW8DRN.js";import"./error-Cey_f2IB.js";import"./BaseCbacBanner-BvPN6XVJ.js";import"./makeExternalStore-BIU4uaP7.js";import"./Tooltip-BN01tXVt.js";import"./PopoverPopup-Zr6i6uzp.js";import"./toNumber-BEwV3n-j.js";import"./tick-C9Ba3a3m.js";import"./DropdownField-DHK94NfU.js";import"./withOsdkMetrics-CXP8M-KN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
