import{j as r}from"./iframe-fyhOhwEJ.js";import{O as b}from"./object-table-DL8SFP3R.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bv7QQRfr.js";import{u as g}from"./useOsdkClient-IFEN1g4H.js";import"./preload-helper-DZoapQc5.js";import"./Table-Ctpip_To.js";import"./index-D-0-qAO5.js";import"./Dialog-43hYOnmf.js";import"./cross-DcnXKO8D.js";import"./svgIconContainer-D3XXZDFA.js";import"./useBaseUiId-CZh58POx.js";import"./InternalBackdrop-vw9qXSiq.js";import"./composite-7m6ynQ4d.js";import"./index-B_-hV7j3.js";import"./index-CYvM2k13.js";import"./index-CrSiM7KM.js";import"./useEventCallback-DjM_GW4g.js";import"./SkeletonBar-Cw5Aef6j.js";import"./LoadingCell-CFwFhPVt.js";import"./ColumnConfigDialog-ByNW_vNZ.js";import"./DraggableList-D7BBk5vR.js";import"./search-wMsJ6744.js";import"./Input-Cz7IuMZA.js";import"./useControlled-ClsMoo9s.js";import"./Button-Co7avqcv.js";import"./small-cross-CAgcnaA8.js";import"./ActionButton-BZu6itaU.js";import"./Checkbox-mC8xxjCq.js";import"./useValueChanged-X0NoeIhA.js";import"./CollapsiblePanel-B9lz7yEt.js";import"./MultiColumnSortDialog-4iaVSLEp.js";import"./MenuTrigger-DmW7hve0.js";import"./CompositeItem-BW8rxov7.js";import"./ToolbarRootContext-D9LUIP1a.js";import"./getDisabledMountTransitionStyles-Cl4PQU1i.js";import"./getPseudoElementBounds-BYiy2Fl5.js";import"./chevron-down-BpyNxw-E.js";import"./index-Vhqxhhfj.js";import"./error-CMmhcpte.js";import"./BaseCbacBanner-C2PkaPNb.js";import"./makeExternalStore-NbT1IyrN.js";import"./Tooltip-D88G4HUZ.js";import"./PopoverPopup-B-sMZa0V.js";import"./debounce-C1ihnlW1.js";import"./tick-Dkudayrr.js";import"./DropdownField-DmsLnnQ3.js";import"./isEqual-B59dK6L3.js";import"./withOsdkMetrics-Bf5xCGJp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
