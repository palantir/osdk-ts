import{j as r}from"./iframe-BkVpHzvQ.js";import{O as b}from"./object-table-8vRjPPrq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cl7OEL7T.js";import{u as g}from"./useOsdkClient-DoQ7Kyvb.js";import"./preload-helper-B9AvGhZX.js";import"./Table-CFTbHakB.js";import"./index-BL4DLC1N.js";import"./Dialog-DS5wl3xV.js";import"./cross-C1A8dztN.js";import"./svgIconContainer-CF7Mc-ko.js";import"./useBaseUiId-IrylWfg4.js";import"./InternalBackdrop-DOTKGPzQ.js";import"./composite-DzCDeGJq.js";import"./index-CL4PObh9.js";import"./index-B14WgDi5.js";import"./index-Q6O6ijwn.js";import"./useEventCallback-BBeGcB9a.js";import"./SkeletonBar-0gnMevOq.js";import"./LoadingCell-B7Wxy3hp.js";import"./ColumnConfigDialog-DibCKZwr.js";import"./DraggableList-CRH-TObc.js";import"./search-BhaSBKsV.js";import"./Input-Fro39VZ2.js";import"./useControlled-BADUKuig.js";import"./Button-D2sTUWJq.js";import"./small-cross-ZeeKCGaK.js";import"./ActionButton-DpxdNF2c.js";import"./Checkbox-BhTm1STq.js";import"./useValueChanged--YSm-EUj.js";import"./CollapsiblePanel-DzMFtKbG.js";import"./MultiColumnSortDialog-CH3-x324.js";import"./MenuTrigger-CIFbC0Gs.js";import"./CompositeItem-_cOFeCFn.js";import"./ToolbarRootContext-Chua5F7w.js";import"./getDisabledMountTransitionStyles-thBhDlW8.js";import"./getPseudoElementBounds-DOC15x2m.js";import"./chevron-down-BdtrKVv2.js";import"./index-moDLjwNO.js";import"./error-NWQKXzU-.js";import"./BaseCbacBanner-BzPvoS_8.js";import"./makeExternalStore-B8ehTRKv.js";import"./Tooltip-DKBwi4i9.js";import"./PopoverPopup-DYvrbRyo.js";import"./toNumber-Co-qwoeW.js";import"./tick-Bnx2U79M.js";import"./DropdownField-BnllX9Oh.js";import"./withOsdkMetrics-mJ4OJ_RR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
