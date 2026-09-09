import{j as r}from"./iframe-B9fWy8hT.js";import{O as b}from"./object-table-UzyRvJs7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DC7-9KTD.js";import{u as g}from"./useOsdkClient-DGZy8BSJ.js";import"./preload-helper-DWfHVW0p.js";import"./Table-B-dV38K7.js";import"./index-DcqZYHDv.js";import"./Dialog-CryFY6ZU.js";import"./cross-boAy6lJm.js";import"./svgIconContainer-u2Tnk_oU.js";import"./useBaseUiId-ck-5-ASN.js";import"./InternalBackdrop-BwJaasag.js";import"./composite-BwwoklsZ.js";import"./index-BpWX3K1g.js";import"./index-Dhsqt6ib.js";import"./index-D7qo7HQk.js";import"./useEventCallback-B2wK0RRE.js";import"./SkeletonBar-D5KV0OqN.js";import"./LoadingCell--b6dzmcz.js";import"./ColumnConfigDialog-CMbqw-o4.js";import"./DraggableList-Dm-SM0mh.js";import"./search-B0RjXvIo.js";import"./Input-CD0TW00M.js";import"./useControlled-1rkkBjfr.js";import"./Button-3STy3BF8.js";import"./small-cross-CryXyuPH.js";import"./ActionButton-f0vdeYe6.js";import"./Checkbox-2x84NFWe.js";import"./useValueChanged-BvuRDLHo.js";import"./CollapsiblePanel-C6uN36Y0.js";import"./MultiColumnSortDialog-CLmLbuue.js";import"./MenuTrigger-DusR_Xdv.js";import"./CompositeItem-Cqqz-d5o.js";import"./ToolbarRootContext-ahNi1RH8.js";import"./getDisabledMountTransitionStyles-B-NyzZcB.js";import"./getPseudoElementBounds-DCZ0QUdk.js";import"./chevron-down-nNmhzWCh.js";import"./index-BEFSCPJo.js";import"./error-DVMkH5gx.js";import"./BaseCbacBanner-CjOcygPw.js";import"./makeExternalStore-QmjWX5TP.js";import"./Tooltip-BRwVJD1M.js";import"./PopoverPopup-DeB87ALM.js";import"./debounce-CRBVoOqi.js";import"./tick-CbPdXS0Y.js";import"./DropdownField-bELTjpQP.js";import"./isEqual-BA3cySEE.js";import"./withOsdkMetrics-DwXDV7v7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
