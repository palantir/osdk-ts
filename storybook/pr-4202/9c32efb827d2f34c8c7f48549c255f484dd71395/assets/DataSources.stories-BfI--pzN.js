import{j as r}from"./iframe-CRdsH5HZ.js";import{O as b}from"./object-table-CUFv6UI4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BjB8uLkT.js";import{u as g}from"./useOsdkClient-DpUzM88Y.js";import"./preload-helper-CKZQslH7.js";import"./Table-DkkO-DrZ.js";import"./index-DTd5KXcK.js";import"./Dialog-CmlPK-gk.js";import"./cross-Ck_cirtk.js";import"./svgIconContainer-B82w1dNX.js";import"./useBaseUiId-CclOULO6.js";import"./InternalBackdrop-DJrTMBsF.js";import"./composite-83cwJd-q.js";import"./index-Cn4z51Ds.js";import"./index-CF0tZzS5.js";import"./index-DvUsnOXq.js";import"./useEventCallback-C0Ta6sLF.js";import"./SkeletonBar-DYF5X8SW.js";import"./LoadingCell-BN4n4qs-.js";import"./ColumnConfigDialog-C_h_kxKO.js";import"./DraggableList-BW5fwLS7.js";import"./search-BLamqbky.js";import"./Input-C5MZZ2uA.js";import"./useControlled-DWxXLpHB.js";import"./Button-DC0lWoOP.js";import"./small-cross-BreRJzoU.js";import"./ActionButton-D-BsxzSk.js";import"./Checkbox-CfBjCkTk.js";import"./useValueChanged-CX0FVdOs.js";import"./CollapsiblePanel-0dVMjFgS.js";import"./MultiColumnSortDialog-BmRwnaRM.js";import"./MenuTrigger-Bn3KvjTK.js";import"./CompositeItem-2Hw_8anp.js";import"./ToolbarRootContext-CqwjH-y3.js";import"./getDisabledMountTransitionStyles-C6LNjQ6D.js";import"./getPseudoElementBounds-CvnVVkY1.js";import"./chevron-down-0O9k5DT8.js";import"./index-IbJqJxEo.js";import"./error-Cy0mbDhX.js";import"./BaseCbacBanner-Dcb8iXmf.js";import"./makeExternalStore-DkeRNmA2.js";import"./Tooltip-BJFUBzvs.js";import"./PopoverPopup-B-cadNgq.js";import"./debounce-t2Bd0wd0.js";import"./tick-vhMtzz2I.js";import"./DropdownField-DNlPXkBE.js";import"./isEqual-BpGRYfyV.js";import"./withOsdkMetrics-CI0orLhd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
