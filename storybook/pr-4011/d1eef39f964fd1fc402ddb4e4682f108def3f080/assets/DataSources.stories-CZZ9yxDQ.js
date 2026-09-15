import{j as r}from"./iframe-CTo_Vzji.js";import{O as b}from"./object-table-DVHVRi7P.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ig-15DpD.js";import{u as g}from"./useOsdkClient-B9u8vjAo.js";import"./preload-helper-DdmOa013.js";import"./Table-Cz1dp7qS.js";import"./index-Db0bQB9_.js";import"./Dialog-B3mADZPJ.js";import"./cross-CFrNYW1-.js";import"./svgIconContainer-BrN7Rq3k.js";import"./useBaseUiId-DRC8ORV_.js";import"./InternalBackdrop-B6_Ng-lQ.js";import"./composite-hvvr6RcJ.js";import"./index-Dn1u0MHw.js";import"./index-BIdADT_u.js";import"./index-1hzAV9CV.js";import"./useEventCallback-B2VUA3Ib.js";import"./SkeletonBar-BWauSf1D.js";import"./LoadingCell-BeAA-vyA.js";import"./ColumnConfigDialog-iH6rL_aA.js";import"./DraggableList-DpYGw85c.js";import"./search-DYJawdx1.js";import"./Input-EzzRC5FT.js";import"./useControlled-BoNXrNA6.js";import"./Button-C3RHmX63.js";import"./small-cross-Bujce-By.js";import"./ActionButton-3lyzIepJ.js";import"./Checkbox-CDyO9YtU.js";import"./useValueChanged-ChX7As4m.js";import"./CollapsiblePanel-Bm45zRZW.js";import"./MultiColumnSortDialog-Bp4rNbQX.js";import"./MenuTrigger-DDwLPAM_.js";import"./CompositeItem-DzuUOttU.js";import"./ToolbarRootContext-Dbn3i0X6.js";import"./getDisabledMountTransitionStyles-DJOlxGxJ.js";import"./getPseudoElementBounds-B742Mdks.js";import"./chevron-down-DsgPE9Kl.js";import"./index-q7czgvlb.js";import"./error-CDiUdq4p.js";import"./BaseCbacBanner-DMNhQz7R.js";import"./makeExternalStore-MWbMkrip.js";import"./Tooltip-BYL374NH.js";import"./PopoverPopup-ChB2ddvw.js";import"./debounce-B89wugMt.js";import"./tick-YWI0wct4.js";import"./DropdownField-ac3lkk8_.js";import"./isEqual-D6XBVD8m.js";import"./withOsdkMetrics-CosmvfGt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
