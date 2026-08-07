import{j as r}from"./iframe-BrodOdVa.js";import{O as b}from"./object-table-idZQuqXF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CJGshqC0.js";import{u as g}from"./useOsdkClient-DDpROb7V.js";import"./preload-helper-BtXh37L-.js";import"./Table-C5250XeL.js";import"./index-nUEOyMBU.js";import"./Dialog-EOZh6rtT.js";import"./cross-BpGLYQ9Z.js";import"./svgIconContainer-B4AqVu0w.js";import"./useBaseUiId-BTSlrQJt.js";import"./InternalBackdrop-Bjvbe2IQ.js";import"./composite-B1APNlh4.js";import"./index-c-nuxmn_.js";import"./index-BvXrNTm7.js";import"./index-Btb8e17T.js";import"./useEventCallback-EWFzwAHE.js";import"./SkeletonBar--6NjKTds.js";import"./LoadingCell-CIxkpBsl.js";import"./ColumnConfigDialog-CIOUoVyJ.js";import"./DraggableList-CsbqB8Uy.js";import"./search-DqsOFw0-.js";import"./Input-iiNc2naG.js";import"./useControlled-Cs7ltDfx.js";import"./small-cross-Br4CldP7.js";import"./Button-TfoAXQA0.js";import"./ActionButton-6EKtVdWc.js";import"./Checkbox-8q2mtsln.js";import"./useValueChanged-Df2xctWW.js";import"./CollapsiblePanel-D69D5MUo.js";import"./MultiColumnSortDialog-JqfUC0Kd.js";import"./MenuTrigger-C93NcQUY.js";import"./CompositeItem-BiidShqS.js";import"./ToolbarRootContext-Ch6E_QUO.js";import"./getDisabledMountTransitionStyles-BVIpZ_My.js";import"./getPseudoElementBounds-CZj0yuu2.js";import"./chevron-down-CncSp1oW.js";import"./index-CVc025-m.js";import"./error-DFX2T5hJ.js";import"./BaseCbacBanner-CYteqHtp.js";import"./makeExternalStore-C91wvf2v.js";import"./Tooltip-CNNDCbNt.js";import"./PopoverPopup-BEwNTt9o.js";import"./Combobox-De7QdF7N.js";import"./tick-DNasZ5Uq.js";import"./DropdownField-P2AbbCFB.js";import"./withOsdkMetrics-CdZtg9n6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
