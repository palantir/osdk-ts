import{j as r}from"./iframe-D0RhBbJ7.js";import{O as b}from"./object-table-B2fqQp0N.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-yRDTWxCy.js";import{u as g}from"./useOsdkClient-B41RwrWJ.js";import"./preload-helper-B4Xh17S2.js";import"./Table-CGxKeYPS.js";import"./index-D2Roz-9u.js";import"./Dialog-Babq4ltF.js";import"./cross-BW6hDEvA.js";import"./svgIconContainer-DuD4Mtb3.js";import"./useBaseUiId-T9aew-gX.js";import"./InternalBackdrop-xQTgedTo.js";import"./composite-B8QHgAvj.js";import"./index-j6SYw05A.js";import"./index-CxHqbhkx.js";import"./index-Bn0niQE2.js";import"./useEventCallback-DIb7RwpK.js";import"./SkeletonBar-DVDQ5O4X.js";import"./LoadingCell-CyocpwIK.js";import"./ColumnConfigDialog-nAo7pdLn.js";import"./DraggableList-BY2D44VA.js";import"./search-DRKOfXxF.js";import"./Input-CFIey-mK.js";import"./useControlled-BjciqBy6.js";import"./isEqual-TZ_78gjt.js";import"./isObject-BkOSfPK7.js";import"./Button-DB4dzGoL.js";import"./ActionButton-GLIuGSHH.js";import"./Checkbox-xVZfPybI.js";import"./useValueChanged-D_z1TQ_P.js";import"./CollapsiblePanel-C2d1N9XC.js";import"./MultiColumnSortDialog-Cn2hHO2h.js";import"./MenuTrigger-nLp5S_0_.js";import"./CompositeItem-BY-oynxC.js";import"./ToolbarRootContext-u1w7Gkl9.js";import"./getDisabledMountTransitionStyles-B0ANbSyH.js";import"./getPseudoElementBounds-D1fr0bY0.js";import"./chevron-down-DHSkS5E6.js";import"./index-CLNQopGb.js";import"./error-CRtUKBZI.js";import"./BaseCbacBanner-BAQdsUKn.js";import"./makeExternalStore-DPu8JMdK.js";import"./Tooltip-CIoxrFJN.js";import"./PopoverPopup-Bgai_nPn.js";import"./toNumber-DITuDXSM.js";import"./tick-BxjHAf9W.js";import"./DropdownField-RKVrx_8m.js";import"./withOsdkMetrics-B0Rjn456.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
