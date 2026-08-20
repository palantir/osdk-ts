import{j as r}from"./iframe-CMBFeC_L.js";import{O as b}from"./object-table-BUY3brHZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dl_0Wg55.js";import{u as g}from"./useOsdkClient-CxHjcBum.js";import"./preload-helper-CS36ADie.js";import"./Table-CGDvEYnD.js";import"./index-D4Y_w0hd.js";import"./Dialog-COkRt85q.js";import"./cross-yG9BF8uH.js";import"./svgIconContainer-DJxkQhhX.js";import"./useBaseUiId-WiYHgttz.js";import"./InternalBackdrop-BSspU4KM.js";import"./composite-W5TWwyjD.js";import"./index-CZe2rHSJ.js";import"./index-CEtYmfNL.js";import"./index-CsQ1yXKY.js";import"./useEventCallback-mcaXVd9k.js";import"./SkeletonBar-8R5SFS8K.js";import"./LoadingCell-BsQRNZqG.js";import"./ColumnConfigDialog-CC3smv9j.js";import"./DraggableList-BZN9CPnY.js";import"./search-CdxSaiZT.js";import"./Input-BxRwyONo.js";import"./useControlled-BjH4SKxs.js";import"./Button-fIVGb80W.js";import"./small-cross-DOBW2WIw.js";import"./ActionButton-C4KQbB77.js";import"./Checkbox-XJwBKcJ6.js";import"./useValueChanged-DYwNaaDF.js";import"./CollapsiblePanel-BDxpXloE.js";import"./MultiColumnSortDialog-BY_WXlLR.js";import"./MenuTrigger-C1xsKVzb.js";import"./CompositeItem-DRB9ulRp.js";import"./ToolbarRootContext-CR2_3FrA.js";import"./getDisabledMountTransitionStyles-C061pxT3.js";import"./getPseudoElementBounds-xuSSDKLP.js";import"./chevron-down-B4P3-pPo.js";import"./index-BS3ExYik.js";import"./error-7AoAvQSe.js";import"./BaseCbacBanner-IssKwBT6.js";import"./makeExternalStore-BHl7EDPd.js";import"./Tooltip-Dq-jKqWq.js";import"./PopoverPopup-F1SSAjsx.js";import"./debounce-C8KBFwLC.js";import"./tick-o8QJ8OhB.js";import"./DropdownField-DeC5UXjq.js";import"./isEqual-DoqdJuwX.js";import"./withOsdkMetrics-Bwu4txGZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
