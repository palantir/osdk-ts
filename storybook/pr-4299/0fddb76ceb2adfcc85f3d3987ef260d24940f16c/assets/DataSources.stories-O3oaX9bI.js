import{j as r}from"./iframe-CBNJ8HWE.js";import{O as b}from"./object-table-BBZlajVP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-YuVO3HOK.js";import{u as g}from"./useOsdkClient-D0-D6lZc.js";import"./preload-helper-D-aeZqn2.js";import"./Table-DjX4DPHX.js";import"./index-Dae7Nrzr.js";import"./Dialog-DOEzaE5N.js";import"./cross-IIpRFnCv.js";import"./svgIconContainer-Cmsji56X.js";import"./useBaseUiId-OM3pRXHK.js";import"./InternalBackdrop-CpbO4ilr.js";import"./composite-DVVFhOLL.js";import"./index-BDSNEOy8.js";import"./index-BbBV-ipX.js";import"./index-BXIyua5V.js";import"./useEventCallback-CnH-PQd4.js";import"./SkeletonBar-BAwTWyeA.js";import"./LoadingCell-CjTFe9b2.js";import"./ColumnConfigDialog-DDnC4bH4.js";import"./DraggableList-ClGArlOQ.js";import"./search-ctIWqbIr.js";import"./Input-j-S77mRt.js";import"./useControlled-BpsS1h83.js";import"./Button-nKcb30G0.js";import"./small-cross-uu7GABB3.js";import"./ActionButton-BFsA5ZAh.js";import"./Checkbox-IvoIoBvd.js";import"./useValueChanged-B6AjTcH0.js";import"./CollapsiblePanel-NQPBhepg.js";import"./MultiColumnSortDialog-DCak3p9n.js";import"./MenuTrigger-oVuzN-Jo.js";import"./CompositeItem-CFJInvfd.js";import"./ToolbarRootContext-DGgj03xf.js";import"./getDisabledMountTransitionStyles-Dq0tUHT-.js";import"./getPseudoElementBounds-BkaQV1Oc.js";import"./chevron-down-Df7Rgxm0.js";import"./index-Dre4GzRs.js";import"./error-CtfkQOQ0.js";import"./BaseCbacBanner-D4Wg3syd.js";import"./makeExternalStore-BJGSOQw4.js";import"./Tooltip-urAvcjFd.js";import"./PopoverPopup-DbRag64C.js";import"./debounce-DK-9Ersu.js";import"./tick-sVfQea33.js";import"./DropdownField-Xxjx_nIV.js";import"./isEqual-C3NiMB5-.js";import"./withOsdkMetrics-CqZNs336.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
