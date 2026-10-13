import{j as r}from"./iframe-DyxaUq2K.js";import{O as b}from"./object-table-Cab-U-nF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DWlIeboC.js";import{u as g}from"./useOsdkClient-NthVmhh7.js";import"./preload-helper-RXXcFWVp.js";import"./Table-CVgNjPUz.js";import"./index-04K8kL6p.js";import"./Dialog-C_c6hTP2.js";import"./cross-DlOxrMTv.js";import"./svgIconContainer-Dx_A2X3i.js";import"./useBaseUiId-B2pmxP6_.js";import"./InternalBackdrop-BBHbL8SK.js";import"./composite-DNSc_3T9.js";import"./index-CXKzX9X0.js";import"./index-Df5y4IMk.js";import"./index-DKo2aq1I.js";import"./useEventCallback-D4ZMCqPC.js";import"./SkeletonBar-Bqj4hPxh.js";import"./LoadingCell-CM1lsDQT.js";import"./ColumnConfigDialog-DtG0KRgU.js";import"./DraggableList-BxvnMcL6.js";import"./search-Dqp-f9oD.js";import"./Input-Ci8-51zi.js";import"./useControlled--GslnpxD.js";import"./Button-BJP0lB5I.js";import"./small-cross-DdubBf-L.js";import"./ActionButton-Dzu9roh2.js";import"./Checkbox-KnYOSa4F.js";import"./useValueChanged-vKl7h4vt.js";import"./CollapsiblePanel-BQrErOfm.js";import"./MultiColumnSortDialog-nacG3IFt.js";import"./MenuTrigger-BxwW9Xk8.js";import"./CompositeItem-BKwp9a98.js";import"./ToolbarRootContext-pFU5HeoC.js";import"./getDisabledMountTransitionStyles-CKsY1twY.js";import"./getPseudoElementBounds-BmT1xLZA.js";import"./chevron-down-DiWP7BJ0.js";import"./index-CRzwoc2n.js";import"./error-BkdYgUyU.js";import"./BaseCbacBanner-BIlh-9tP.js";import"./makeExternalStore-DcK2tIHU.js";import"./Tooltip--dIkHBOm.js";import"./PopoverPopup-DXEKH04o.js";import"./debounce-Dhv4Wot5.js";import"./tick-BSn6tzcY.js";import"./DropdownField-7FFksTTF.js";import"./isEqual-DqocYguF.js";import"./withOsdkMetrics-ac55KtkN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
