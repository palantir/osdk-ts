import{j as r}from"./iframe-gwjWh6aP.js";import{O as b}from"./object-table-DG0XU0Qa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cldw2kc8.js";import{u as g}from"./useOsdkClient-DKJIj3oZ.js";import"./preload-helper-bIyT3R7b.js";import"./Table-CqQWX-38.js";import"./index-B2e6YLgb.js";import"./Dialog-B752LhdZ.js";import"./cross-CxSJV-iM.js";import"./svgIconContainer-uf6Xe766.js";import"./useBaseUiId-MuGd9EbB.js";import"./InternalBackdrop-Be_icURP.js";import"./composite-XNngWcyG.js";import"./index-C2Xm0Ig8.js";import"./index-CctUI8eo.js";import"./index-DqPPge5H.js";import"./useEventCallback-g73YrOE1.js";import"./SkeletonBar-MPFiyDqC.js";import"./LoadingCell-CSktdyFh.js";import"./ColumnConfigDialog-BiRQ2H7x.js";import"./DraggableList-BSD24ZFv.js";import"./search-77UZhWyC.js";import"./Input-B14JiyW9.js";import"./useControlled-BRAT0rWw.js";import"./Button-DYsrDr-V.js";import"./small-cross-DFJo2BXV.js";import"./ActionButton-DUFTPwmt.js";import"./Checkbox-BGGgt2SZ.js";import"./useValueChanged-Cq6kIfvu.js";import"./CollapsiblePanel-zc_GBnu-.js";import"./MultiColumnSortDialog-DB-NI1_-.js";import"./MenuTrigger-J5s3L2h9.js";import"./CompositeItem-B632hz3W.js";import"./ToolbarRootContext-eiDeLXye.js";import"./getDisabledMountTransitionStyles-CdwEI3h2.js";import"./getPseudoElementBounds-Cors6fEL.js";import"./chevron-down-Bpsf2br_.js";import"./index-BjKGneLm.js";import"./error-CG0c4OaM.js";import"./BaseCbacBanner-BwibHyrW.js";import"./makeExternalStore-DOMUefpT.js";import"./Tooltip-a4Yw_fKw.js";import"./PopoverPopup-gtrR7YRy.js";import"./debounce-nVQqP8JB.js";import"./tick-mEiPhkv2.js";import"./DropdownField-Du154yBU.js";import"./isEqual-B4RlLHXD.js";import"./withOsdkMetrics-CT1e8NKK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
