import{j as r}from"./iframe-weo2ftOt.js";import{O as b}from"./object-table-MPznOHsn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-8u_uwB_2.js";import{u as g}from"./useOsdkClient-DWTjpIGp.js";import"./preload-helper-CccATkyg.js";import"./Table-C9cmQgMl.js";import"./index-BzFNlzeA.js";import"./Dialog-DXnfnG2Y.js";import"./cross-DFxtUTH2.js";import"./svgIconContainer-4wqza-Yn.js";import"./useBaseUiId-Ca9MSPeN.js";import"./InternalBackdrop-CuieHGY6.js";import"./composite-CXbXQTWA.js";import"./index-CwVuW96i.js";import"./index-OwV8MnsF.js";import"./index-BdXrAkiS.js";import"./useEventCallback-CDd5n6gg.js";import"./SkeletonBar-CDPR9pBR.js";import"./LoadingCell-WuxZExiN.js";import"./ColumnConfigDialog-BoYEBqur.js";import"./DraggableList-CrnBYdkh.js";import"./search-D7AcF35x.js";import"./Input-DDH0znUE.js";import"./useControlled-BR3V1Gxk.js";import"./Button-DTZufqgI.js";import"./small-cross-DMF81cbr.js";import"./ActionButton-yOO-hwGF.js";import"./Checkbox-BD6MUUao.js";import"./useValueChanged-47o-AHo4.js";import"./CollapsiblePanel-MUmgFy3O.js";import"./MultiColumnSortDialog-n4XkIf-Z.js";import"./MenuTrigger-BRpqpide.js";import"./CompositeItem-tLUZG1Hv.js";import"./ToolbarRootContext-9vNtX9N5.js";import"./getDisabledMountTransitionStyles-CJygm4kF.js";import"./getPseudoElementBounds-B7YRzaVu.js";import"./chevron-down-BqDjxAzh.js";import"./index-jbXLVEma.js";import"./error-LA7kedRF.js";import"./BaseCbacBanner-DgWEbDvw.js";import"./makeExternalStore-CGRq4C4C.js";import"./Tooltip-BZAy0DbI.js";import"./PopoverPopup-B1Tf3m9o.js";import"./debounce-C2Mlteaf.js";import"./tick-2nC9-KBm.js";import"./DropdownField-DBrFB89T.js";import"./isEqual-DUHhgGZv.js";import"./withOsdkMetrics-td22ADns.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
