import{j as r}from"./iframe-D1PWQ8eg.js";import{O as b}from"./object-table-DhPmn3zV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BryLEdzQ.js";import{u as g}from"./useOsdkClient-BeJmH5-G.js";import"./preload-helper-ChDiB21Q.js";import"./Table-BjH6ZK7E.js";import"./index-BfN20Yol.js";import"./Dialog-D3A-zY1u.js";import"./cross-DpDhreOD.js";import"./svgIconContainer-BXQnyB7k.js";import"./useBaseUiId-DQZDizk3.js";import"./InternalBackdrop-Cd6fjHcd.js";import"./composite-Dz4PW6bE.js";import"./index-C-gFUxtR.js";import"./index-k_FhLYlw.js";import"./index-BC0Fj6cX.js";import"./useEventCallback-CaQTcD9p.js";import"./SkeletonBar-B9-g2cwM.js";import"./LoadingCell-DFGDcVga.js";import"./ColumnConfigDialog-C8-Xmgyw.js";import"./DraggableList-P95AxxVB.js";import"./search-Bzfmr3Yu.js";import"./Input-DcHTO1Eg.js";import"./useControlled-D21_fOEO.js";import"./Button-DGBWNQgJ.js";import"./small-cross-hiTnrqyw.js";import"./ActionButton-BFBOVnYa.js";import"./Checkbox-BtoYudj8.js";import"./useValueChanged-C8diiUx6.js";import"./CollapsiblePanel-Bw_yq71x.js";import"./MultiColumnSortDialog-B_Wzgvor.js";import"./MenuTrigger-4x01M3QC.js";import"./CompositeItem-DoK1nl1V.js";import"./ToolbarRootContext-DVH0WoOd.js";import"./getDisabledMountTransitionStyles-DTkXPwSS.js";import"./getPseudoElementBounds-DB6IKhjF.js";import"./chevron-down-h_s7BHqv.js";import"./index-BXJyqqou.js";import"./error-CawAj1Hu.js";import"./BaseCbacBanner-CRapjwAS.js";import"./makeExternalStore-C-kCn6EW.js";import"./Tooltip-Bgo0GtJm.js";import"./isObject-Br-jS6Ya.js";import"./debounce-DKSfc2Jx.js";import"./tick-C3zXPXqC.js";import"./DropdownField-RNzF6eBl.js";import"./isEqual-ZwzT0KOc.js";import"./_baseIsEqual--05v_xkz.js";import"./withOsdkMetrics-DniPK0ul.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
