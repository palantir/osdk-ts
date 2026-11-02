import{j as r}from"./iframe-DIhyjTQM.js";import{O as b}from"./object-table-Do9vu6qj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BJal3r8f.js";import{u as g}from"./useOsdkClient-ChFpCrqs.js";import"./preload-helper-BITLElC1.js";import"./Table-aMp3ITaO.js";import"./index-C8ppAklG.js";import"./Dialog-x7P9gPjA.js";import"./cross-BVmbGj7v.js";import"./svgIconContainer-BVwGEvqe.js";import"./useBaseUiId-BRDIOgH7.js";import"./InternalBackdrop-BbR3bGoB.js";import"./composite-BkQZGQ9U.js";import"./index-kla4dWAe.js";import"./index-SCNohOo6.js";import"./useEventCallback-DgKocnhe.js";import"./SkeletonBar-C2TvSpMI.js";import"./LoadingCell-D7P3o9XJ.js";import"./ColumnConfigDialog-Q9snLBuv.js";import"./DraggableList-Dob7Rq-X.js";import"./search-D7TMRqS5.js";import"./Input-BCY1gssj.js";import"./useControlled-vI7L-1v7.js";import"./Button-BU0w-MK8.js";import"./small-cross-DVOzGHDB.js";import"./ActionButton-CSRmV5rV.js";import"./Checkbox-eblkHSax.js";import"./useValueChanged-1EPjCJhD.js";import"./CollapsiblePanel-B7QE2-21.js";import"./MultiColumnSortDialog-DTofYe8C.js";import"./MenuTrigger-CyZDawNi.js";import"./CompositeItem-D7Gjn2M2.js";import"./ToolbarRootContext-DDTggrNs.js";import"./getDisabledMountTransitionStyles-DDkkAoal.js";import"./getPseudoElementBounds-CQrPr7lO.js";import"./chevron-down-fg_D-X7z.js";import"./index-GGFmpVOs.js";import"./error-BcXd4Yso.js";import"./BaseCbacBanner-O8eKc9DG.js";import"./makeExternalStore-DUGVOR6Q.js";import"./Tooltip-Ce_ARAEV.js";import"./PopoverPopup-C4G8tLd2.js";import"./debounce-xNmml4RO.js";import"./tick-xU5_Eoim.js";import"./DropdownField-CNUfmwbR.js";import"./isEqual-BnA4SERm.js";import"./withOsdkMetrics-DKqvGaZy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
