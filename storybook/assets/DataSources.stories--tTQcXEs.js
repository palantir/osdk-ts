import{j as r}from"./iframe-22sgaWxv.js";import{O as b}from"./object-table-Drof33nU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-7jIZje6N.js";import{u as g}from"./useOsdkClient-B3I5yVwR.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BCezGTuh.js";import"./index-BHBAGN-s.js";import"./Dialog-DLhbH3bQ.js";import"./cross-BCwFnrJl.js";import"./svgIconContainer-BsVzcm6E.js";import"./useBaseUiId-CUViOtvX.js";import"./InternalBackdrop-QEZTLwT8.js";import"./composite-BTcqQx01.js";import"./index-C-ayeZqv.js";import"./index-H6bUqLk6.js";import"./index-BCMcuhrC.js";import"./useEventCallback-C-98vcNs.js";import"./SkeletonBar-DOTAFrq-.js";import"./LoadingCell-DoU3qEW4.js";import"./ColumnConfigDialog-B3QGycQ2.js";import"./DraggableList-Vthwf9hx.js";import"./search-D5hLmpm3.js";import"./Input-kE2itjKl.js";import"./useControlled-9hZ525gD.js";import"./Button-Tlz3cekG.js";import"./small-cross-BwMnv4hk.js";import"./ActionButton-Boe4PNYh.js";import"./Checkbox-BEcD_rA7.js";import"./useValueChanged-Cvkbwiqt.js";import"./CollapsiblePanel-CUWh3so1.js";import"./MultiColumnSortDialog-D_SHrlea.js";import"./MenuTrigger-cTtpbi20.js";import"./CompositeItem-C3Np8qjM.js";import"./ToolbarRootContext-D1WVL4z4.js";import"./getDisabledMountTransitionStyles-p4mAODiY.js";import"./getPseudoElementBounds-BLk4lSoh.js";import"./chevron-down-BNxx7PXr.js";import"./index-DzYoB3O-.js";import"./error-DkFYgz--.js";import"./BaseCbacBanner-DPu0oi4D.js";import"./makeExternalStore-D5ROsNAp.js";import"./Tooltip-CX0Gi3dR.js";import"./isObject-DGvkKeJp.js";import"./debounce-ASo6GI3m.js";import"./tick-DS5XO6DI.js";import"./DropdownField-B0HjgQSf.js";import"./isEqual-0dAV4SyG.js";import"./_baseIsEqual-Da6PSZBn.js";import"./withOsdkMetrics-BykLiONE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
