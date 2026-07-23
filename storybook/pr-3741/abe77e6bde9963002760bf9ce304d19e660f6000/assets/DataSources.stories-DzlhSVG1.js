import{j as r}from"./iframe-BRewJKLI.js";import{O as b}from"./object-table-D5TlWZ46.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DciyqXfB.js";import{u as g}from"./useOsdkClient-DI0Ym6Cu.js";import"./preload-helper-Th7jsi9T.js";import"./Table-Dc0qfuKa.js";import"./index-CsEIXvZI.js";import"./Dialog-DaDhDBbi.js";import"./cross-CRuUYbdJ.js";import"./svgIconContainer-YEGGrYC5.js";import"./useBaseUiId-BirOMeO-.js";import"./InternalBackdrop-BPogiAuS.js";import"./composite-DPZfXKt9.js";import"./index-CdNujWPa.js";import"./index-DLtzTCbX.js";import"./index-DhG0LkJ4.js";import"./useEventCallback-DBAxwR-4.js";import"./SkeletonBar-BqTc4Ala.js";import"./LoadingCell-YHsTiX7l.js";import"./ColumnConfigDialog-BGrtzyJ_.js";import"./DraggableList-vym7ucgl.js";import"./search-CNN9U08N.js";import"./Input-Dfhle3pE.js";import"./useControlled-BuUPxEIC.js";import"./isEqual-D6mfypIN.js";import"./isObject-Dc4jCNfw.js";import"./Button-D-a4uE4Q.js";import"./ActionButton-C5TNkQ1_.js";import"./Checkbox-Cd_u_cft.js";import"./useValueChanged-2DZs80zy.js";import"./CollapsiblePanel-jZGrsHaA.js";import"./MultiColumnSortDialog-d_cl-_yn.js";import"./MenuTrigger-TkYbVTdx.js";import"./CompositeItem-8uv7pmSI.js";import"./ToolbarRootContext-5hsijlsK.js";import"./getDisabledMountTransitionStyles-CLgG3HXO.js";import"./getPseudoElementBounds-BP7MwREj.js";import"./chevron-down-C8r7y8He.js";import"./index-B-MYbMMb.js";import"./error-DE-DySAz.js";import"./BaseCbacBanner-qKzx03a8.js";import"./makeExternalStore-BJhUGNS3.js";import"./Tooltip-Bpropqbk.js";import"./PopoverPopup-BiGoYvvc.js";import"./toNumber-CG15L9if.js";import"./tick-ROx4W5IJ.js";import"./DropdownField-BEiOxIDI.js";import"./withOsdkMetrics-DXH1scdv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
