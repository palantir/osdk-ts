import{j as r}from"./iframe-tNZJ_yts.js";import{O as b}from"./object-table-CvQDVRcw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--gB9wU8Y.js";import{u as g}from"./useOsdkClient-BvPv-iE2.js";import"./preload-helper-Cs-zZmWk.js";import"./Table-DeKYMKeJ.js";import"./index-GtjnSSRw.js";import"./Dialog-staNvNsK.js";import"./cross-ocv2rHpU.js";import"./svgIconContainer-Cg9fo9q3.js";import"./useBaseUiId-CfzXRAwD.js";import"./InternalBackdrop-jubCrN1B.js";import"./composite-BiyNCJEr.js";import"./index-B8odcJPp.js";import"./index-BI50CR4r.js";import"./index-9T6sqMOx.js";import"./useEventCallback-D6FBSsJz.js";import"./SkeletonBar-sb4uPQ8b.js";import"./LoadingCell-I-_CFKV7.js";import"./ColumnConfigDialog-Cc56nC7O.js";import"./DraggableList-DH-viUUC.js";import"./search-380Wfs82.js";import"./Input-Bd3UykWw.js";import"./useControlled-BcyW94WW.js";import"./Button-q3PQJ8YO.js";import"./small-cross-C9dMCIc4.js";import"./ActionButton-BB8RqWff.js";import"./Checkbox-Dp8n9WYf.js";import"./useValueChanged-D4hqIs_l.js";import"./CollapsiblePanel-BvhEme4S.js";import"./MultiColumnSortDialog-DeJrbkZy.js";import"./MenuTrigger-8vrT9vsX.js";import"./CompositeItem-DK62Ja5z.js";import"./ToolbarRootContext-Bgv8jhAk.js";import"./getDisabledMountTransitionStyles-Wli5EKop.js";import"./getPseudoElementBounds-B-GSVRKS.js";import"./chevron-down-B8TK3y2h.js";import"./index-ZWb-P89H.js";import"./error-DA-ZYNwq.js";import"./BaseCbacBanner-VH61pZkc.js";import"./makeExternalStore-BGIMf0MS.js";import"./Tooltip-DwSNZTrr.js";import"./PopoverPopup-BsY6KTlb.js";import"./debounce-DkKRnBI2.js";import"./tick-B76tZgIx.js";import"./DropdownField-Bn2CvIkr.js";import"./isEqual-Be3s4PRI.js";import"./withOsdkMetrics-CxocJMpO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
