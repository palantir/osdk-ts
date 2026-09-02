import{j as r}from"./iframe-C1V-jMWZ.js";import{O as b}from"./object-table-Bjyuc22o.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CyyAi2d3.js";import{u as g}from"./useOsdkClient-GDIak-vt.js";import"./preload-helper-CJz78Ui1.js";import"./Table-CMEtmKXI.js";import"./index-XvzsJt6X.js";import"./Dialog-3bWW0NjF.js";import"./cross-DeZPYttd.js";import"./svgIconContainer-DtEZy4uz.js";import"./useBaseUiId-CpkLkrsv.js";import"./InternalBackdrop-BnvKha4W.js";import"./composite-CHf1Zuon.js";import"./index-BxNUxb4e.js";import"./index-dKWUfAZT.js";import"./index-BwhYThVP.js";import"./useEventCallback-Bd_7eACD.js";import"./SkeletonBar-B6frXfeY.js";import"./LoadingCell-CFJNO3hd.js";import"./ColumnConfigDialog-BTm2ZS9L.js";import"./DraggableList-DXjfHO4P.js";import"./search-DDETT7aQ.js";import"./Input-JJCAZvBE.js";import"./useControlled-DOOaGi2X.js";import"./Button-B_XFbB5W.js";import"./small-cross-CvxomOO6.js";import"./ActionButton-eephJdo4.js";import"./Checkbox-CNuXvPoN.js";import"./useValueChanged-Dmqe1Ovy.js";import"./CollapsiblePanel-NwiHp10r.js";import"./MultiColumnSortDialog-DM98o6zQ.js";import"./MenuTrigger-Q7yK5Wz0.js";import"./CompositeItem-CJ-8czWx.js";import"./ToolbarRootContext-ChsX3fpL.js";import"./getDisabledMountTransitionStyles-Budio66N.js";import"./getPseudoElementBounds-5RQPQhG8.js";import"./chevron-down-BByq1bS3.js";import"./index-nUVRiP22.js";import"./error-BvMD1TOJ.js";import"./BaseCbacBanner-CNgYyNul.js";import"./makeExternalStore-RQ5jibpo.js";import"./Tooltip-Cw_JuZjL.js";import"./PopoverPopup-kQgVAtEr.js";import"./debounce-Ci2ufMQt.js";import"./tick-B97Q10mL.js";import"./DropdownField-D_ZzXFne.js";import"./isEqual-D2Eks9zi.js";import"./withOsdkMetrics-BO4tQ83f.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
