import{j as r}from"./iframe-CGXoYzNm.js";import{O as b}from"./object-table-CDJRukBU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D-jq7w3B.js";import{u as g}from"./useOsdkClient-CP_tnrVl.js";import"./preload-helper-BIk0pbFW.js";import"./Table-_m0WJ524.js";import"./index-B-gIGFxM.js";import"./Dialog-B3tENyb1.js";import"./cross-CZLvPMyq.js";import"./svgIconContainer-C2yUySQD.js";import"./useBaseUiId-C9lxuB2E.js";import"./InternalBackdrop-C8oAvnCv.js";import"./composite-Djf7LOAP.js";import"./index-CgUoB6rh.js";import"./index-BsvWREke.js";import"./index-BElCNRLp.js";import"./useEventCallback-CX8TP_4U.js";import"./SkeletonBar-BqzKfT_o.js";import"./LoadingCell-wWZERl_W.js";import"./ColumnConfigDialog-CsNju5Yu.js";import"./DraggableList-CYH6t1FV.js";import"./search-BEs5Tf1l.js";import"./Input-DrVjLFlw.js";import"./useControlled-cr2h64km.js";import"./isEqual-DA2i7ag6.js";import"./isObject-B1jVfnC1.js";import"./Button-C7KwiNiL.js";import"./ActionButton-BGAEhQ3Z.js";import"./Checkbox-Bb8kDQc_.js";import"./useValueChanged-D3XdwU6I.js";import"./CollapsiblePanel-CW40sKj7.js";import"./MultiColumnSortDialog-w9tjiZja.js";import"./MenuTrigger-CdWn6Jeu.js";import"./CompositeItem-B6G0eofa.js";import"./ToolbarRootContext-CHmIfeJy.js";import"./getDisabledMountTransitionStyles-DLecrRJs.js";import"./getPseudoElementBounds-BvW4VCsl.js";import"./chevron-down-vvZtnb7b.js";import"./index-D3FEBDFq.js";import"./error-DhIsr36w.js";import"./BaseCbacBanner-uZzzZFEw.js";import"./makeExternalStore-C-D2sCmQ.js";import"./Tooltip-DqouU193.js";import"./PopoverPopup-wCz21lM9.js";import"./toNumber-rR3YkCjK.js";import"./tick-KBwgeRib.js";import"./DropdownField-DKcPGVTO.js";import"./withOsdkMetrics-BepqP3Ct.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
