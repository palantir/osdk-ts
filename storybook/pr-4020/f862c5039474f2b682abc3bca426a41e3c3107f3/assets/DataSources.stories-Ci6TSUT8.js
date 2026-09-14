import{j as r}from"./iframe-CEbiJF3f.js";import{O as b}from"./object-table-l5DPuuw6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DS56mKYn.js";import{u as g}from"./useOsdkClient-YUQ2ZKSl.js";import"./preload-helper--fKrMWtx.js";import"./Table-QdTH_HbG.js";import"./index-BRgb61-Z.js";import"./Dialog-B7q4XORi.js";import"./cross-Be87dRvq.js";import"./svgIconContainer-CApLlW_3.js";import"./useBaseUiId-BeYV2UYU.js";import"./InternalBackdrop-CWMLQJAd.js";import"./composite-u77iw9-s.js";import"./index-DjCMbuHr.js";import"./index-CW5Q51QX.js";import"./index-CRAw0ImC.js";import"./useEventCallback-B1x1-FvS.js";import"./SkeletonBar-COyoJDUZ.js";import"./LoadingCell-D1do7JHy.js";import"./ColumnConfigDialog-CTF7Yu1b.js";import"./DraggableList-DBwRCP6S.js";import"./search-0rzEE67s.js";import"./Input-DqoIy3Li.js";import"./useControlled-B3SpxFFa.js";import"./Button-BrIf-_b8.js";import"./small-cross-D4xWb1jq.js";import"./ActionButton-CQIzGqaS.js";import"./Checkbox-ClLrXql_.js";import"./useValueChanged-CMcadSWU.js";import"./CollapsiblePanel-DhxijBYj.js";import"./MultiColumnSortDialog-BCMu3SVh.js";import"./MenuTrigger-D_puwtx9.js";import"./CompositeItem-D6m2hJvC.js";import"./ToolbarRootContext-FCi4TTjo.js";import"./getDisabledMountTransitionStyles-C9wPoLZe.js";import"./getPseudoElementBounds-BE7nCALs.js";import"./chevron-down-SWbuBgt1.js";import"./index-DjIJ3azX.js";import"./error-q5QL61EF.js";import"./BaseCbacBanner-5dQqe5p_.js";import"./makeExternalStore-DY8wBZ1L.js";import"./Tooltip-pyeRzdyt.js";import"./PopoverPopup-BYAEm86P.js";import"./debounce-DedZNKWR.js";import"./tick-1Ij9OHtP.js";import"./DropdownField-DbwRCAUl.js";import"./isEqual-Fw1VuUqB.js";import"./withOsdkMetrics-C-j5mTrT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
