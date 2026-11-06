import{j as r}from"./iframe-BIP88-50.js";import{O as b}from"./object-table-CNMhMkmH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DIpCLqC9.js";import{u as g}from"./useOsdkClient-DPupQZW9.js";import"./preload-helper-CJkHOWC7.js";import"./Table-CHLtOT8z.js";import"./index-CGkdPPI9.js";import"./Dialog-C0UW6gOW.js";import"./cross-qB-EknTM.js";import"./svgIconContainer-Dz6akIgn.js";import"./useBaseUiId-Cj-jJj6K.js";import"./InternalBackdrop-CftIyHL4.js";import"./composite-BpLHrmIE.js";import"./index-KnvC-9LR.js";import"./index-BrS4cRkH.js";import"./index-B1OlRn7v.js";import"./useEventCallback-BrR1OuJb.js";import"./SkeletonBar-DoCTJFkz.js";import"./LoadingCell-CNzaDi2p.js";import"./ColumnConfigDialog-BLwOeNew.js";import"./DraggableList-DlqvUYF8.js";import"./search-DgaGEvbD.js";import"./Input-DYBooigU.js";import"./useControlled-fuVP_NbG.js";import"./Button-CjK6G0Gi.js";import"./small-cross-BznyWel9.js";import"./ActionButton-DxA4l1EI.js";import"./Checkbox-BMCER6Bk.js";import"./useValueChanged-COmQAw9I.js";import"./CollapsiblePanel-snv-WSy_.js";import"./MultiColumnSortDialog-B5F0EWQk.js";import"./MenuTrigger-nre5v0iQ.js";import"./CompositeItem-CVTunDpb.js";import"./ToolbarRootContext-CRygSzuk.js";import"./getDisabledMountTransitionStyles-DRbULTDE.js";import"./getPseudoElementBounds-DSD11-NM.js";import"./chevron-down-BX7qMt__.js";import"./index-D59kjkiP.js";import"./error-y3-k7YV5.js";import"./BaseCbacBanner-ixNx6GvE.js";import"./makeExternalStore-bK2uAKO3.js";import"./Tooltip-CWDNHqVt.js";import"./isObject-B6TUXASY.js";import"./debounce-DDX1lyuq.js";import"./tick-IXb8pkgs.js";import"./DropdownField-CpHmWmlY.js";import"./isEqual-xme5et3Y.js";import"./_baseIsEqual-OPkKOK_R.js";import"./withOsdkMetrics-YF4jnVsf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
