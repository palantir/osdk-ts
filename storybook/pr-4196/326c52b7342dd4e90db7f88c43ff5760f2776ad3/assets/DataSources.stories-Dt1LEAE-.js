import{j as r}from"./iframe-CXoxL7cT.js";import{O as b}from"./object-table-BWK6B_1N.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DyR6SPRR.js";import{u as g}from"./useOsdkClient-Cwyh3mgC.js";import"./preload-helper-DMJKrzx6.js";import"./Table-CC3y0ZrT.js";import"./index-dBMA5UNn.js";import"./Dialog-CjrRU3bM.js";import"./cross-XQWmBmUb.js";import"./svgIconContainer-DtqPwXsL.js";import"./useBaseUiId-Izmi48hi.js";import"./InternalBackdrop-mxeqeXwO.js";import"./composite-DMCRZOOJ.js";import"./index-UsCrzJ_A.js";import"./index-DzDKHmnK.js";import"./index-BB4QshU1.js";import"./useEventCallback-QfRioJwU.js";import"./SkeletonBar-Du45-Qw4.js";import"./LoadingCell-DPa7KDCm.js";import"./ColumnConfigDialog-xmha4aKo.js";import"./DraggableList-BEXm3vsR.js";import"./search-D3KEpk03.js";import"./Input-DwAQ3sDB.js";import"./useControlled-CEwBj1Zp.js";import"./Button-Cr7M9AYk.js";import"./small-cross-CKzsSNgv.js";import"./ActionButton-DNc2uAWK.js";import"./Checkbox-CnSbiUC6.js";import"./useValueChanged-DZganrCm.js";import"./CollapsiblePanel-C2HOfB3-.js";import"./MultiColumnSortDialog-DgfnOU7e.js";import"./MenuTrigger-D1Ac7kyx.js";import"./CompositeItem-CWiiOpZY.js";import"./ToolbarRootContext-CoErepAo.js";import"./getDisabledMountTransitionStyles-LOCq1Tqm.js";import"./getPseudoElementBounds-DBTVlom9.js";import"./chevron-down-tGjjwMVx.js";import"./index-DaVoMYUf.js";import"./error-Bnpx40Rp.js";import"./BaseCbacBanner-CW7AFvJP.js";import"./makeExternalStore-CHMRsxiL.js";import"./Tooltip-Ccq41CCY.js";import"./PopoverPopup-BIW3lqxC.js";import"./debounce-BePSlKc6.js";import"./tick-LyPFWekw.js";import"./DropdownField-wsN4GW5v.js";import"./isEqual-BXV1tAj-.js";import"./withOsdkMetrics-CqzyuRHa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
