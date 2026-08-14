import{j as r}from"./iframe-DMVoJ4iR.js";import{O as b}from"./object-table-Dr0nTY0j.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-zs5JtWS1.js";import{u as g}from"./useOsdkClient-Clj1Y7ye.js";import"./preload-helper-2MgHTXqS.js";import"./Table-CvfpkPsu.js";import"./index-DMn9f8R_.js";import"./Dialog-DN0C0cMa.js";import"./cross-hEjpS1Bp.js";import"./svgIconContainer-DGDnniJF.js";import"./useBaseUiId-CxU24xuc.js";import"./InternalBackdrop-BsbQ6JQ-.js";import"./composite-DmDE7Rtt.js";import"./index-B7aWWKWU.js";import"./index-C4IlvH8x.js";import"./index-Ctlvw0jX.js";import"./useEventCallback-DFJ99Ojt.js";import"./SkeletonBar-BYsHWmWc.js";import"./LoadingCell-4BXysz7o.js";import"./ColumnConfigDialog-DYAZRZRV.js";import"./DraggableList-BCWDiRF_.js";import"./search-DV_7XP2q.js";import"./Input-B15zNfFM.js";import"./useControlled-DdseA8EX.js";import"./Button-BBvvoDF0.js";import"./small-cross-By6-ZMjH.js";import"./ActionButton-DfKUt1c2.js";import"./Checkbox-CuZM5I5x.js";import"./useValueChanged-BRKcdIOc.js";import"./CollapsiblePanel-DmdilWRt.js";import"./MultiColumnSortDialog-9DXQkG4F.js";import"./MenuTrigger-DI5RRHvY.js";import"./CompositeItem-CMnhxWHR.js";import"./ToolbarRootContext-f6svvjDU.js";import"./getDisabledMountTransitionStyles-FH_XwVyu.js";import"./getPseudoElementBounds-BLc1mo6k.js";import"./chevron-down-vsY3HQGw.js";import"./index-Bi0z85-I.js";import"./error-xQuPRzcR.js";import"./BaseCbacBanner-B6viF84h.js";import"./makeExternalStore-DIAkKSQj.js";import"./Tooltip-Bmw6xpWv.js";import"./PopoverPopup-CREvbd0l.js";import"./debounce-CPaL6Cll.js";import"./tick-BQBN13wH.js";import"./DropdownField-DCBCG8s7.js";import"./isEqual-DYTmDhbT.js";import"./withOsdkMetrics-B2MB7rwG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
