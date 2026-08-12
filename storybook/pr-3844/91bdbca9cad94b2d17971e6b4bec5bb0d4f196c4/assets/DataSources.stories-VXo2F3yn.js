import{j as r}from"./iframe-D0keSMdE.js";import{O as b}from"./object-table-XRSPKeAk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D51c6emF.js";import{u as g}from"./useOsdkClient-B9r7mj-F.js";import"./preload-helper-CgWhzYZU.js";import"./Table-_VO1h67p.js";import"./index-BlRIDWUP.js";import"./Dialog-DMYs324-.js";import"./cross-D5Zmda7x.js";import"./svgIconContainer-DmusCROY.js";import"./useBaseUiId-BfGVExes.js";import"./InternalBackdrop-Ia9GDuBc.js";import"./composite-DXaC0pY0.js";import"./index-BEB5yinp.js";import"./index-CPRvGqlK.js";import"./index-Bp5ZfHYq.js";import"./useEventCallback-ethJwitj.js";import"./SkeletonBar-Bc2rCGVb.js";import"./LoadingCell-BnKI4h5Y.js";import"./ColumnConfigDialog-BZ0hPi45.js";import"./DraggableList-ySBav17x.js";import"./search-ZZx32mw4.js";import"./Input-CaL2qwMz.js";import"./useControlled-yw1OI-ys.js";import"./isEqual-BCTdKTnZ.js";import"./isObject-Dx34Yu9O.js";import"./Button-BAAmeZ1M.js";import"./ActionButton-BVPOosnJ.js";import"./Checkbox-BK1SkvvN.js";import"./useValueChanged-DE0ePa0Z.js";import"./CollapsiblePanel-OhRGgboZ.js";import"./MultiColumnSortDialog-DuCRYSUE.js";import"./MenuTrigger-DfDEfgVd.js";import"./CompositeItem-Dcat_OLQ.js";import"./ToolbarRootContext-C7LF38_0.js";import"./getDisabledMountTransitionStyles-eeoeUg8o.js";import"./getPseudoElementBounds-Bs1xhkgH.js";import"./chevron-down-CqaC9B7A.js";import"./index-Ck9HyH0x.js";import"./error-Cs55j0k0.js";import"./BaseCbacBanner-Ctqp3Rus.js";import"./makeExternalStore-BtSZghYs.js";import"./Tooltip-CLb0k3vN.js";import"./PopoverPopup-kbgZB1b0.js";import"./toNumber-BYHut4ds.js";import"./tick-BbyLm6yV.js";import"./DropdownField-DO3Vqoyf.js";import"./withOsdkMetrics-CKalA1p6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
